using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEditor;
using FactoryPipePower;

namespace FactoryPipePower.PlayModeTests
{
    public class Stage6RegistryPlayModeTests
    {
        const string SlotSmallPath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Small_M2.prefab";
        const string SlotLargePath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Large_M3.prefab";
        const string PipeSmallPath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Small_M2.prefab";

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

        PipeSlotRegistry CreateRegistry()
        {
            var regGo = new GameObject("Test_Registry");
            spawned.Add(regGo);
            return regGo.AddComponent<PipeSlotRegistry>();
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

        PipeVisualController SlotVisual(PipeSlotController slot)
        {
            var vis = slot.transform.Find("AnchorY/SlotPipeVisual");
            Assert.IsNotNull(vis, "SlotPipeVisual child must exist");
            var pvc = vis.GetComponent<PipeVisualController>();
            Assert.IsNotNull(pvc, "SlotPipeVisual must have PipeVisualController");
            return pvc;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator StartDrag_CompatibleEmptySlots_BecomeHoverValid()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);

            Assert.AreEqual(PipeSlotState.HoverValid, slot.State,
                "compatible Empty slot must become HoverValid on drag start");
            Assert.AreSame(pipe, registry.ActivePipe);
            Assert.AreEqual(1, registry.DragStartsHandled);
            Assert.AreEqual(0, registry.DragFinishesHandled);

            pipe.EndDragWithoutPlacement();
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator StartDrag_IncompatibleSlots_StayEmpty()
        {
            var registry = CreateRegistry();
            var incompatible = SpawnSlot(SlotLargePath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(incompatible);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);

            Assert.AreEqual(PipeSlotState.Empty, incompatible.State,
                "incompatible slot must stay Empty on drag start");

            pipe.EndDragWithoutPlacement();
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator StartDrag_OccupiedSlots_NotChanged()
        {
            var registry = CreateRegistry();
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
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator EndDragWithoutPlacement_ClearsHover()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);

            pipe.EndDragWithoutPlacement();

            Assert.AreEqual(PipeSlotState.Empty, slot.State,
                "hover must be cleared after EndDragWithoutPlacement");
            Assert.IsTrue(registry.ActivePipe == null, "ActivePipe must be cleared on drag finish");
            Assert.AreEqual(1, registry.DragFinishesHandled);

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator CommitPlaced_ClearsHover()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);

            pipe.CommitPlaced();

            Assert.AreEqual(PipeSlotState.Empty, slot.State,
                "hover must be cleared after CommitPlaced");
            Assert.IsTrue(registry.ActivePipe == null, "ActivePipe must be cleared on commit");
            Assert.AreEqual(1, registry.DragFinishesHandled);
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryAccept_Cleanup_KeepsOccupiedAligned()
        {
            var registry = CreateRegistry();
            var target = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var other = SpawnSlot(SlotSmallPath, new Vector3(5f, 0f, -3f), 0f);
            registry.Register(target);
            registry.Register(other);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(PipeSlotState.HoverValid, target.State);
            Assert.AreEqual(PipeSlotState.HoverValid, other.State);

            Assert.IsTrue(target.TryAccept(pipe));

            Assert.AreEqual(PipeSlotState.OccupiedAligned, target.State,
                "accepted slot must stay OccupiedAligned after registry cleanup");
            Assert.AreEqual(PipeSlotState.Empty, other.State,
                "the other compatible slot must be cleared to Empty by registry cleanup");
            Assert.IsTrue(registry.ActivePipe == null);
            Assert.AreEqual(1, registry.DragFinishesHandled);

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryAccept_Cleanup_KeepsOccupiedWrongRotation()
        {
            var registry = CreateRegistry();
            var target = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var other = SpawnSlot(SlotSmallPath, new Vector3(5f, 0f, -3f), 0f);
            registry.Register(target);
            registry.Register(other);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(PipeSlotState.HoverValid, target.State);
            Assert.AreEqual(PipeSlotState.HoverValid, other.State);

            Assert.IsTrue(target.TryAccept(pipe));

            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, target.State,
                "accepted slot must stay OccupiedWrongRotation after registry cleanup");
            Assert.IsFalse(target.IsAligned);
            Assert.AreEqual(PipeSlotState.Empty, other.State,
                "the other compatible slot must be cleared to Empty by registry cleanup");

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator EnableDisableToggle_NoDoubleSubscription()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            for (int i = 0; i < 3; i++)
            {
                registry.enabled = false;
                registry.enabled = true;
            }

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);

            Assert.AreEqual(1, registry.DragStartsHandled,
                "repeated enable/disable must not leave duplicate event subscriptions");
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);

            pipe.EndDragWithoutPlacement();
            Assert.AreEqual(1, registry.DragFinishesHandled,
                "finish handler must also run exactly once");

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator DisabledRegistry_DoesNotChangeSlots()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            registry.enabled = false;

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);

            Assert.AreEqual(PipeSlotState.Empty, slot.State,
                "disabled registry must not apply hover");
            Assert.AreEqual(0, registry.DragStartsHandled);

            pipe.EndDragWithoutPlacement();
            Assert.AreEqual(PipeSlotState.Empty, slot.State);
            Assert.AreEqual(0, registry.DragFinishesHandled);

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator DestroyedSlot_NoException_OthersStillHover()
        {
            var registry = CreateRegistry();
            var valid = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var doomed = SpawnSlot(SlotSmallPath, new Vector3(5f, 0f, -3f), 0f);
            registry.Register(valid);
            registry.Register(doomed);

            Object.Destroy(doomed.gameObject);
            yield return null;

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);

            LogAssert.NoUnexpectedReceived();
            Assert.AreEqual(PipeSlotState.HoverValid, valid.State,
                "a destroyed slot must be skipped without breaking hover on valid slots");

            pipe.EndDragWithoutPlacement();
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator InactivePipeFinish_DoesNotClearActiveHover()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            var pipeA = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            var pipeB = SpawnPipe(PipeSmallPath, new Vector3(3f, 1f, -6f), 0f);

            pipeA.BeginDrag(cam.WorldToScreenPoint(pipeA.transform.position), cam);
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);

            pipeB.BeginDrag(cam.WorldToScreenPoint(pipeB.transform.position), cam);
            Assert.AreSame(pipeA, registry.ActivePipe,
                "second drag start must not replace the active pipe");
            Assert.AreEqual(1, registry.DragStartsHandled);

            pipeB.EndDragWithoutPlacement();

            Assert.AreEqual(PipeSlotState.HoverValid, slot.State,
                "finish of a non-active pipe must not clear the active pipe hover");
            Assert.AreSame(pipeA, registry.ActivePipe,
                "finish of a non-active pipe must not clear ActivePipe");
            Assert.AreEqual(0, registry.DragFinishesHandled);

            pipeA.EndDragWithoutPlacement();
            Assert.AreEqual(PipeSlotState.Empty, slot.State,
                "finish of the active pipe must clear hover");
            Assert.IsTrue(registry.ActivePipe == null);

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator SecondBeginDrag_DoesNotHijackActivePipe()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            var pipeA = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            var pipeB = SpawnPipe(PipeSmallPath, new Vector3(3f, 1f, -6f), 0f);

            pipeA.BeginDrag(cam.WorldToScreenPoint(pipeA.transform.position), cam);
            pipeB.BeginDrag(cam.WorldToScreenPoint(pipeB.transform.position), cam);

            Assert.AreSame(pipeA, registry.ActivePipe,
                "ActivePipe must not be hijacked by a second BeginDrag while the first is Dragging");
            Assert.AreEqual(1, registry.DragStartsHandled,
                "second BeginDrag must be ignored by the registry");
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);

            pipeA.EndDragWithoutPlacement();
            pipeB.EndDragWithoutPlacement();
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator DisableActivePipeMidDrag_ClearsHover()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);
            Assert.AreSame(pipe, registry.ActivePipe);

            pipe.gameObject.SetActive(false);

            Assert.AreEqual(PipeSlotState.Empty, slot.State,
                "disabling the active pipe mid-drag must clear hover");
            Assert.IsTrue(registry.ActivePipe == null,
                "disabling the active pipe mid-drag must clear ActivePipe");

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator DestroyActivePipeMidDrag_ClearsHover()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);

            Object.Destroy(pipe.gameObject);
            yield return null;

            Assert.AreEqual(PipeSlotState.Empty, slot.State,
                "destroying the active pipe mid-drag must clear hover");
            Assert.IsTrue(registry.ActivePipe == null,
                "destroying the active pipe mid-drag must clear ActivePipe");

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Registry_DoesNotChangeTutorialOverlay()
        {
            var registry = CreateRegistry();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            registry.Register(slot);

            var pvc = SlotVisual(slot);
            pvc.SetTutorialOverlay(true);
            Assert.IsTrue(pvc.IsTutorialOverlayEnabled);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);

            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);
            Assert.IsTrue(pvc.IsTutorialOverlayEnabled,
                "registry hover must not change the slot tutorial overlay");

            pipe.EndDragWithoutPlacement();
            Assert.IsTrue(pvc.IsTutorialOverlayEnabled,
                "registry cleanup must not change the slot tutorial overlay");

            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Integration_TriggerAcceptOrdering()
        {
            var registry = CreateRegistry();
            var target = SpawnSlot(SlotSmallPath, new Vector3(0f, 1f, -3f), 0f);
            var other = SpawnSlot(SlotSmallPath, new Vector3(5f, 1f, -3f), 0f);
            registry.Register(target);
            registry.Register(other);

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            Physics.SyncTransforms();

            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(PipeSlotState.HoverValid, target.State,
                "compatible Empty target must be HoverValid while Dragging");
            Assert.AreEqual(PipeSlotState.HoverValid, other.State,
                "compatible Empty other slot must be HoverValid while Dragging");
            Assert.AreSame(pipe, registry.ActivePipe);
            Assert.AreEqual(1, registry.DragStartsHandled);

            DragPipeTo(pipe, new Vector3(0f, 1f, -3f));
            yield return WaitUntilSlotState(target, PipeSlotState.OccupiedAligned, 5f);

            Assert.AreEqual(DraggablePipeState.Placed, pipe.State,
                "trigger snap must commit the pipe via CaptureVolume -> TryAccept");
            Assert.IsTrue(target.PlacementCommitted);
            Assert.AreSame(pipe, target.AcceptedPipe);

            Assert.AreEqual(PipeSlotState.OccupiedAligned, target.State,
                "accepted slot must remain OccupiedAligned after registry cleanup");
            Assert.AreEqual(PipeSlotState.Empty, other.State,
                "registry must clear only the remaining HoverValid slot, not the accepted one");

            Assert.IsTrue(registry.ActivePipe == null,
                "AnyDragFinished from CommitPlaced must clear ActivePipe");
            Assert.AreEqual(1, registry.DragFinishesHandled,
                "exactly one finish event must have been handled");

            yield return new WaitForFixedUpdate();
            Assert.AreEqual(PipeSlotState.OccupiedAligned, target.State);
            Assert.AreEqual(PipeSlotState.Empty, other.State);
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);
        }
    }
}
