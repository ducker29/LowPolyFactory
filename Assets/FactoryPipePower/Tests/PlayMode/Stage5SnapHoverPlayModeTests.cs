using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEditor;
using FactoryPipePower;

namespace FactoryPipePower.PlayModeTests
{
    public class Stage5SnapHoverPlayModeTests
    {
        const string SlotSmallPath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Small_M2.prefab";
        const string SlotLargePath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Large_M3.prefab";
        const string PipeSmallPath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Small_M2.prefab";
        const string PipeLargePath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Large_M3.prefab";

        const int DraggablePipeLayer = 8;
        const int PipeSlotLayer = 9;
        const int DefaultLayer = 0;
        const int UILayer = 5;

        readonly List<GameObject> spawned = new List<GameObject>();
        GameObject cameraGo;
        Camera cam;
        bool previousRunInBackground;

        [SetUp]
        public void SetUp()
        {
            previousRunInBackground = Application.runInBackground;
            Application.runInBackground = true;
            cameraGo = new GameObject("Test_Camera");
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
            Application.runInBackground = previousRunInBackground;
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

        PipeSlotController SpawnSlot(string path, Vector3 position, float yaw)
        {
            return Spawn(path, position, yaw).GetComponent<PipeSlotController>();
        }

        DraggablePipeController SpawnPipe(string path, Vector3 position, float yaw)
        {
            return Spawn(path, position, yaw).GetComponent<DraggablePipeController>();
        }

        void DragPipeTo(DraggablePipeController pipe, Vector3 worldTarget)
        {
            pipe.UpdateDrag(cam.WorldToScreenPoint(worldTarget), cam);
        }

        IEnumerator WaitUntilSlotState(PipeSlotController slot, PipeSlotState expected, float timeoutSeconds)
        {
            float elapsed = 0f;
            while (slot.State != expected && elapsed < timeoutSeconds)
            {
                elapsed += Time.deltaTime;
                yield return new WaitForFixedUpdate();
            }
            Assert.AreEqual(expected, slot.State,
                "Timeout waiting for slot state " + expected + " (current: " + slot.State + ")");
        }

        [Test]
        public void PhysicsMatrix_NewLayers_UseIsolatedPolicy()
        {
            Assert.AreEqual(DraggablePipeLayer, LayerMask.NameToLayer("DraggablePipe"),
                "DraggablePipe must live on layer 8");
            Assert.AreEqual(PipeSlotLayer, LayerMask.NameToLayer("PipeSlot"),
                "PipeSlot must live on layer 9");

            Assert.IsFalse(Physics.GetIgnoreLayerCollision(DraggablePipeLayer, PipeSlotLayer),
                "DraggablePipe <-> PipeSlot must be enabled (trigger snap)");
            Assert.IsFalse(Physics.GetIgnoreLayerCollision(PipeSlotLayer, DraggablePipeLayer),
                "PipeSlot <-> DraggablePipe must be enabled and symmetric");

            Assert.IsTrue(Physics.GetIgnoreLayerCollision(DraggablePipeLayer, DraggablePipeLayer),
                "DraggablePipe <-> DraggablePipe must be disabled");
            Assert.IsTrue(Physics.GetIgnoreLayerCollision(PipeSlotLayer, PipeSlotLayer),
                "PipeSlot <-> PipeSlot must be disabled");

            Assert.IsTrue(Physics.GetIgnoreLayerCollision(DraggablePipeLayer, DefaultLayer),
                "DraggablePipe <-> Default must be disabled (isolated layers)");
            Assert.IsTrue(Physics.GetIgnoreLayerCollision(PipeSlotLayer, DefaultLayer),
                "PipeSlot <-> Default must be disabled (isolated layers)");

            Assert.IsTrue(Physics.GetIgnoreLayerCollision(DraggablePipeLayer, UILayer),
                "DraggablePipe <-> UI must be disabled (isolated layers)");
            Assert.IsTrue(Physics.GetIgnoreLayerCollision(PipeSlotLayer, UILayer),
                "PipeSlot <-> UI must be disabled (isolated layers)");
        }

        [Test]
        public void PhysicsMatrix_NewLayers_RawRowsMatchIsolatedPolicy()
        {
            var assets = AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/DynamicsManager.asset");
            Assert.IsNotEmpty(assets, "DynamicsManager.asset must be loadable");
            var so = new SerializedObject(assets[0]);
            var matrix = so.FindProperty("m_LayerCollisionMatrix");
            Assert.IsNotNull(matrix, "m_LayerCollisionMatrix must exist");
            Assert.AreEqual(32, matrix.arraySize, "collision matrix must have 32 rows");

            Assert.AreEqual(1L << PipeSlotLayer,
                matrix.GetArrayElementAtIndex(DraggablePipeLayer).longValue,
                "row 8 must contain only bit 9");
            Assert.AreEqual(1L << DraggablePipeLayer,
                matrix.GetArrayElementAtIndex(PipeSlotLayer).longValue,
                "row 9 must contain only bit 8");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TriggerSnap_DraggingPipeIntoCaptureVolume_AutoAccepts_AlignedYaw()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 1f, -3f), 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            Physics.SyncTransforms();

            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State);

            DragPipeTo(pipe, new Vector3(0f, 1f, -3f));
            yield return WaitUntilSlotState(slot, PipeSlotState.OccupiedAligned, 5f);

            Assert.AreSame(pipe, slot.AcceptedPipe);
            Assert.IsTrue(slot.PlacementCommitted);
            Assert.IsTrue(slot.IsAligned);
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State,
                "physics trigger snap must commit the pipe without an explicit TryAccept call");
            var col = pipe.transform.Find("DragCollider").GetComponent<BoxCollider>();
            Assert.IsFalse(col.enabled, "DragCollider must be disabled after auto-commit");
            var visual = pipe.transform.Find("Visual");
            Assert.IsFalse(visual.gameObject.activeSelf, "Visual must be hidden after auto-commit");
            Assert.IsTrue(pipe.gameObject.activeInHierarchy, "pipe root must stay active");

            yield return new WaitForFixedUpdate();
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TriggerSnap_WrongYaw_OccupiedWrongRotation_AnchorSnapsToQuarter()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 1f, -3f), 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            Physics.SyncTransforms();

            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            DragPipeTo(pipe, new Vector3(0f, 1f, -3f));

            yield return WaitUntilSlotState(slot, PipeSlotState.OccupiedWrongRotation, 5f);

            Assert.AreSame(pipe, slot.AcceptedPipe);
            Assert.IsFalse(slot.IsAligned);
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);
            Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, Quaternion.Euler(0f, 90f, 0f)), 0.01f,
                "AnchorY must snap to the pipe quarter yaw (90)");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TriggerSnap_IncompatiblePipe_Rejected_SlotStaysEmpty_PipeStaysDragging()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 1f, -3f), 0f);
            var pipe = SpawnPipe(PipeLargePath, new Vector3(3f, 1f, -6f), 0f);
            Physics.SyncTransforms();

            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            DragPipeTo(pipe, new Vector3(3f, 1f, -3f));

            float elapsed = 0f;
            while (elapsed < 1.5f)
            {
                elapsed += Time.deltaTime;
                yield return new WaitForFixedUpdate();
            }

            Assert.AreEqual(PipeSlotState.Empty, slot.State,
                "incompatible Large/M3 pipe must not be accepted by Small/M2 slot");
            Assert.IsNull(slot.AcceptedPipe);
            Assert.IsFalse(slot.PlacementCommitted);
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State,
                "rejected pipe must stay in Dragging");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TriggerSnap_OccupiedSlot_RejectsSecondPipe_FirstKept()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 1f, -3f), 0f);
            var first = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            Physics.SyncTransforms();

            first.BeginDrag(cam.WorldToScreenPoint(first.transform.position), cam);
            DragPipeTo(first, new Vector3(0f, 1f, -3f));
            yield return WaitUntilSlotState(slot, PipeSlotState.OccupiedAligned, 5f);

            var second = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -9f), 0f);
            second.BeginDrag(cam.WorldToScreenPoint(second.transform.position), cam);
            DragPipeTo(second, new Vector3(0f, 1f, -3f));

            float elapsed = 0f;
            while (elapsed < 1.5f)
            {
                elapsed += Time.deltaTime;
                yield return new WaitForFixedUpdate();
            }

            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "occupied slot must keep the first pipe state");
            Assert.AreSame(first, slot.AcceptedPipe,
                "occupied slot must keep the first accepted pipe");
            Assert.AreEqual(DraggablePipeState.Dragging, second.State,
                "second compatible pipe must stay Dragging after rejected snap");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TriggerSnap_NonDraggingPipeInVolume_IsIgnored()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 1f, -3f), 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            Physics.SyncTransforms();

            pipe.transform.position = new Vector3(0f, 1f, -3f);
            Physics.SyncTransforms();
            yield return new WaitForFixedUpdate();
            yield return new WaitForFixedUpdate();

            Assert.AreEqual(PipeSlotState.Empty, slot.State,
                "Stock pipe inside capture volume must not trigger accept");
            Assert.IsNull(slot.AcceptedPipe);
            Assert.AreEqual(DraggablePipeState.Stock, pipe.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TriggerSnap_ClearsHoverOnRegistry_AcceptedSlotKeepsOccupied()
        {
            var registryGo = new GameObject("Test_Registry");
            spawned.Add(registryGo);
            var registry = registryGo.AddComponent<PipeSlotRegistry>();
            var targetSlot = SpawnSlot(SlotSmallPath, new Vector3(0f, 1f, -3f), 0f);
            var otherSlot = SpawnSlot(SlotSmallPath, new Vector3(5f, 1f, -3f), 0f);
            registry.Register(targetSlot);
            registry.Register(otherSlot);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            Physics.SyncTransforms();

            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(PipeSlotState.HoverValid, targetSlot.State);
            Assert.AreEqual(PipeSlotState.HoverValid, otherSlot.State);

            DragPipeTo(pipe, new Vector3(0f, 1f, -3f));
            yield return WaitUntilSlotState(targetSlot, PipeSlotState.OccupiedAligned, 5f);

            Assert.AreEqual(PipeSlotState.Empty, otherSlot.State,
                "AnyDragFinished from CommitPlaced must clear hover on other compatible slots");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, targetSlot.State,
                "accepted slot must stay Occupied, not be pushed back to Empty by hover clear");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Hover_DragStart_MarksOnlyCompatibleEmptySlots()
        {
            var registryGo = new GameObject("Test_Registry");
            spawned.Add(registryGo);
            var registry = registryGo.AddComponent<PipeSlotRegistry>();

            var compatible = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var incompatible = SpawnSlot(SlotLargePath, new Vector3(5f, 0f, -3f), 0f);
            registry.Register(compatible);
            registry.Register(incompatible);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);

            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);

            Assert.AreEqual(PipeSlotState.HoverValid, compatible.State,
                "compatible Empty slot must become HoverValid on drag start");
            Assert.AreEqual(PipeSlotState.Empty, incompatible.State,
                "incompatible slot must stay Empty on drag start");

            pipe.EndDragWithoutPlacement();

            Assert.AreEqual(PipeSlotState.Empty, compatible.State,
                "hover must be cleared on drag end");

            float elapsed = 0f;
            while (pipe.State != DraggablePipeState.Stock && elapsed < 5f)
            {
                elapsed += Time.deltaTime;
                yield return null;
            }
            Assert.AreEqual(DraggablePipeState.Stock, pipe.State);
            Assert.AreEqual(PipeSlotState.Empty, compatible.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Hover_OccupiedSlot_NotTouchedByDragEvents()
        {
            var registryGo = new GameObject("Test_Registry");
            spawned.Add(registryGo);
            var registry = registryGo.AddComponent<PipeSlotRegistry>();

            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            var accepted = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            accepted.BeginDrag(cam.WorldToScreenPoint(accepted.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(accepted));
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);

            var another = SpawnPipe(PipeSmallPath, new Vector3(3f, 1f, -6f), 0f);
            another.BeginDrag(cam.WorldToScreenPoint(another.transform.position), cam);
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "drag start must not overwrite an occupied slot");
            another.EndDragWithoutPlacement();
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "drag end must not touch an occupied slot");
            yield return null;
        }

        [TestCase(SlotSmallPath)]
        [TestCase(SlotLargePath)]
        public void Cleanup_TriggerRouting_LivesOnCaptureVolume_NotOnPipe(string slotPath)
        {
            var pipeMethod = typeof(DraggablePipeController).GetMethod("OnTriggerEnter",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            Assert.IsNull(pipeMethod,
                "DraggablePipeController must not contain OnTriggerEnter after routing cleanup");

            var slotPrefab = AssetDatabase.LoadAssetAtPath<GameObject>(slotPath);
            Assert.IsNotNull(slotPrefab, "Slot prefab not found: " + slotPath);
            var slot = slotPrefab.GetComponent<PipeSlotController>();
            Assert.IsNotNull(slot);

            var capture = slotPrefab.transform.Find("CaptureVolume");
            Assert.IsNotNull(capture, "CaptureVolume child must exist");
            var cv = capture.GetComponent<PipeSlotCaptureVolume>();
            Assert.IsNotNull(cv, "CaptureVolume must host PipeSlotCaptureVolume");
            Assert.AreSame(slot, cv.OwnerSlot,
                "PipeSlotCaptureVolume.ownerSlot must reference the owning PipeSlotController");

            int cvCount = 0;
            foreach (var c in slotPrefab.GetComponentsInChildren<PipeSlotCaptureVolume>(true))
                cvCount++;
            Assert.AreEqual(1, cvCount,
                "exactly one PipeSlotCaptureVolume must exist in the slot prefab");

            var tap = slotPrefab.transform.Find("TapCollider");
            Assert.IsNull(tap.GetComponent<PipeSlotCaptureVolume>(),
                "TapCollider must not host PipeSlotCaptureVolume");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Cleanup_CaptureVolumeDisabled_TapColliderAloneDoesNotSnap()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 1f, -3f), 0f);
            var captureBc = slot.transform.Find("CaptureVolume").GetComponent<BoxCollider>();
            captureBc.enabled = false;

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            Physics.SyncTransforms();

            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            DragPipeTo(pipe, new Vector3(0f, 1f, -3f));

            float elapsed = 0f;
            while (elapsed < 1.5f)
            {
                elapsed += Time.deltaTime;
                yield return new WaitForFixedUpdate();
            }

            Assert.AreEqual(PipeSlotState.Empty, slot.State,
                "TapCollider alone (CaptureVolume disabled) must not initiate snap");
            Assert.IsNull(slot.AcceptedPipe);
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Events_AnyDragStarted_AnyDragFinished_FireOnBeginAndEnd()
        {
            int started = 0;
            int finished = 0;
            System.Action<DraggablePipeController> onStart = _ => started++;
            System.Action<DraggablePipeController> onFinish = _ => finished++;
            DraggablePipeController.AnyDragStarted += onStart;
            DraggablePipeController.AnyDragFinished += onFinish;
            try
            {
                var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);

                pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
                Assert.AreEqual(1, started, "AnyDragStarted must fire once on BeginDrag");
                Assert.AreEqual(0, finished);

                pipe.EndDragWithoutPlacement();
                Assert.AreEqual(1, finished, "AnyDragFinished must fire once on release without placement");

                float elapsed = 0f;
                while (pipe.State != DraggablePipeState.Stock && elapsed < 5f)
                {
                    elapsed += Time.deltaTime;
                    yield return null;
                }

                pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
                Assert.AreEqual(2, started, "AnyDragStarted must fire again on re-drag");
                pipe.CommitPlaced();
                Assert.AreEqual(2, finished, "AnyDragFinished must fire on CommitPlaced");
            }
            finally
            {
                DraggablePipeController.AnyDragStarted -= onStart;
                DraggablePipeController.AnyDragFinished -= onFinish;
            }
        }
    }
}
