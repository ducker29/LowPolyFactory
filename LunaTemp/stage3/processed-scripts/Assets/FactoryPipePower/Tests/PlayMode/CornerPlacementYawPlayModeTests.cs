using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEditor;
using FactoryPipePower;

namespace FactoryPipePower.PlayModeTests
{
    public class CornerPlacementYawPlayModeTests
    {
        const string CornerSlotPath = "Assets/FactoryPipePower/Prefabs/PFPipeSlotSmallCorner.prefab";
        const string CornerPipePath = "Assets/FactoryPipePower/Prefabs/PFDraggablePipeSmallCorner.prefab";
        const string StraightSlotPath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Small_M2.prefab";
        const string StraightPipePath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Small_M2.prefab";

        readonly List<GameObject> spawned = new List<GameObject>();
        GameObject cameraGo;
        Camera cam;

        [SetUp]
        public void SetUp()
        {
            cameraGo = new GameObject("YawFix_Test_Camera");
            cam = cameraGo.AddComponent<Camera>();
            cam.tag = "MainCamera";
            cam.transform.position = new Vector3(0f, 1.5f, -12f);
            cam.transform.rotation = Quaternion.identity;
            cam.nearClipPlane = 0.01f;
            cam.farClipPlane = 200f;
        }

        [TearDown]
        public void TearDown()
        {
            foreach (var go in spawned)
            {
                if (go != null)
                    Object.DestroyImmediate(go);
            }
            spawned.Clear();

            if (cameraGo != null)
            {
                Object.DestroyImmediate(cameraGo);
                cameraGo = null;
                cam = null;
            }
        }

        GameObject Spawn(string path, Vector3 position, float yaw)
        {
            var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
            Assert.IsNotNull(prefab, "Prefab not found: " + path);
            var go = Object.Instantiate(prefab);
            go.transform.SetPositionAndRotation(position, Quaternion.Euler(0f, yaw, 0f));
            spawned.Add(go);
            return go;
        }

        PipeSlotController SpawnSlot(string path, Vector3 position, float rootYaw)
        {
            return Spawn(path, position, rootYaw).GetComponent<PipeSlotController>();
        }

        DraggablePipeController SpawnPipe(string path, Vector3 position, float yaw)
        {
            return Spawn(path, position, yaw).GetComponent<DraggablePipeController>();
        }

        void SetRotationDuration(PipeSlotController slot, float duration)
        {
            var so = new SerializedObject(slot);
            so.FindProperty("rotationDuration").floatValue = duration;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        void AssertWorldYaw(float expectedYaw, Quaternion actual, string message)
        {
            Assert.Less(Quaternion.Angle(actual, Quaternion.Euler(0f, expectedYaw, 0f)), 0.01f, message);
        }

        IEnumerator WaitUntilNotRotating(PipeSlotController slot, float timeoutSeconds)
        {
            float elapsed = 0f;
            while (slot.IsRotating && elapsed < timeoutSeconds)
            {
                elapsed += Time.deltaTime;
                yield return null;
            }
            Assert.IsFalse(slot.IsRotating, "Timeout waiting for slot rotation to finish");
        }

        void BeginDrag(DraggablePipeController pipe)
        {
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State, "pipe must enter Dragging");
        }

        void DragAndAccept(DraggablePipeController pipe, PipeSlotController slot)
        {
            BeginDrag(pipe);
            Assert.IsTrue(slot.TryAccept(pipe), "TryAccept must accept the compatible dragging pipe");
        }

        [UnityTest]
        [Timeout(60000)]
        public IEnumerator CornerPlacement_PreservesInitialYawLikeStraight()
        {
            // Corner slot root yaw = 180 (same authoring as PFPipeSlotSmallCorner_02 on the scene).
            float rootYaw = 180f;
            var cases = new[] { 0f, 90f, 180f, 270f, 95f };

            for (int i = 0; i < cases.Length; i++)
            {
                float pipeYaw = cases[i];
                float quantized = QuarterTurnUtility.GetQuarterTurn(pipeYaw) * 90f;

                var slot = SpawnSlot(CornerSlotPath, new Vector3(i * 4f, 0f, -3f), rootYaw);
                var pipe = SpawnPipe(CornerPipePath, new Vector3(i * 4f, 1f, -6f), pipeYaw);
                Assert.AreEqual(CornerRotationGroup.Input0Output270, slot.ExpectedCornerGroup,
                    "corner slot authoring must keep local expected group Input0Output270");

                DragAndAccept(pipe, slot);

                Assert.AreEqual(PipeShape.Corner, slot.AcceptedPipe.Spec.shape);
                AssertWorldYaw(quantized, slot.AnchorY.rotation,
                    $"corner placement must keep quantized pipe world yaw {quantized} (pipeYaw={pipeYaw}, root={rootYaw})");
                AssertWorldYaw(pipeYaw, pipe.transform.rotation,
                    "placement must not rotate the dragged pipe object itself");

                yield return null;
            }

            // Straight pipe on a root=0 slot maps the same way (reference behaviour).
            for (int i = 0; i < 2; i++)
            {
                float pipeYaw = cases[i];
                var slot = SpawnSlot(StraightSlotPath, new Vector3(20f + i * 4f, 0f, -3f), 0f);
                var pipe = SpawnPipe(StraightPipePath, new Vector3(20f + i * 4f, 1f, -6f), pipeYaw);

                DragAndAccept(pipe, slot);

                AssertWorldYaw(pipeYaw, slot.AnchorY.rotation,
                    $"straight root=0 placement must keep pipe yaw {pipeYaw} (unchanged contract)");

                yield return null;
            }
        }

        [UnityTest]
        [Timeout(30000)]
        public IEnumerator CornerPlacement_DoesNotAutoSolveToExpectedOrientation()
        {
            // Scene corner slot PFPipeSlotSmallCorner_02 has root Y=180 and expects
            // local group Input0Output270 (= solved world yaw 180).
            // A pipe dragged at world yaw 0 must NOT be auto-rotated to the solved yaw.
            var slot = SpawnSlot(CornerSlotPath, new Vector3(0f, 0f, -3f), 180f);
            var pipe = SpawnPipe(CornerPipePath, new Vector3(0f, 1f, -6f), 0f);

            DragAndAccept(pipe, slot);

            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State,
                "yaw 0 must be evaluated as wrong for the root=180 corner slot, not auto-solved to aligned");
            Assert.IsFalse(slot.IsAligned, "orientation must not match expectedCornerGroup after placement");
            AssertWorldYaw(0f, slot.AnchorY.rotation,
                "anchor world yaw must stay at the dragged pipe yaw (0), not flip to the solved 180");
            Assert.AreEqual(0, PipeDirectionsUtility.NormalizeQuarter(pipe.WorldYaw),
                "pipe world yaw must stay preserved");

            yield return null;
        }

        [UnityTest]
        [Timeout(60000)]
        public IEnumerator CornerPlacement_WrongUntilRotated()
        {
            var slot = SpawnSlot(CornerSlotPath, new Vector3(0f, 0f, -3f), 180f);
            var pipe = SpawnPipe(CornerPipePath, new Vector3(0f, 1f, -6f), 0f);
            SetRotationDuration(slot, 0.05f);

            DragAndAccept(pipe, slot);

            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State,
                "placement must start in wrong state");
            AssertWorldYaw(0f, slot.AnchorY.rotation, "placement must not rotate the anchor");

            Assert.IsTrue(slot.TryRotateTap(), "tap rotate must be allowed in wrong state");
            yield return WaitUntilNotRotating(slot, 5f);
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State,
                "state must still be wrong after one 90 degree tap");
            Assert.IsFalse(slot.IsAligned);

            Assert.IsTrue(slot.TryRotateTap(), "second tap rotate must be allowed");
            yield return WaitUntilNotRotating(slot, 5f);
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "state must become aligned only after reaching the expected orientation via rotation");
            Assert.IsTrue(slot.IsAligned);
            AssertWorldYaw(180f, slot.AnchorY.rotation,
                "aligned anchor must end at the solved world yaw 180 for this slot");
        }

        [UnityTest]
        [Timeout(60000)]
        public IEnumerator StraightPlacement_BehaviorUnchanged()
        {
            // Aligned yaw on a root=0 straight slot.
            var alignedSlot = SpawnSlot(StraightSlotPath, new Vector3(0f, 0f, -3f), 0f);
            var alignedPipe = SpawnPipe(StraightPipePath, new Vector3(0f, 1f, -6f), 0f);

            DragAndAccept(alignedPipe, alignedSlot);

            Assert.AreEqual(PipeSlotState.OccupiedAligned, alignedSlot.State);
            Assert.IsTrue(alignedSlot.IsAligned);
            AssertWorldYaw(0f, alignedSlot.AnchorY.localRotation,
                "root=0 straight slot must keep anchor local yaw 0 (legacy contract)");
            AssertWorldYaw(0f, alignedSlot.AnchorY.rotation,
                "root=0 straight slot anchor world yaw must equal pipe yaw 0");

            // Wrong yaw on a root=0 straight slot, then one tap fixes it (legacy contract).
            var wrongSlot = SpawnSlot(StraightSlotPath, new Vector3(6f, 0f, -3f), 0f);
            var wrongPipe = SpawnPipe(StraightPipePath, new Vector3(6f, 1f, -6f), 90f);
            SetRotationDuration(wrongSlot, 0.05f);

            DragAndAccept(wrongPipe, wrongSlot);

            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, wrongSlot.State);
            AssertWorldYaw(90f, wrongSlot.AnchorY.localRotation,
                "root=0 straight slot must snap anchor local yaw to pipe quarter 90 (legacy contract)");

            Assert.IsTrue(wrongSlot.TryRotateTap());
            yield return WaitUntilNotRotating(wrongSlot, 5f);
            Assert.AreEqual(PipeSlotState.OccupiedAligned, wrongSlot.State,
                "single +90 tap must align a 90-degree pipe on a root=0 straight slot (unchanged)");
        }

        [UnityTest]
        [Timeout(60000)]
        public IEnumerator StraightPlacement_RootRotatedSlot_PreservesWorldYawAndAligns()
        {
            // Approved side fix: the same world/local coordinate correction applies to
            // straight slots with a rotated root (e.g. PipeSlot_04 with root Y=270).
            var slot = SpawnSlot(StraightSlotPath, new Vector3(0f, 0f, -3f), 270f);
            var pipe = SpawnPipe(StraightPipePath, new Vector3(0f, 1f, -6f), 90f);

            DragAndAccept(pipe, slot);

            AssertWorldYaw(90f, slot.AnchorY.rotation,
                "straight placement on root=270 slot must keep quantized pipe world yaw 90");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "world yaw 90 is a valid orientation for this slot and must align immediately");
            Assert.IsTrue(slot.IsAligned);

            yield return null;
        }
    }
}
