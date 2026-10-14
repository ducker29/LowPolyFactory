using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.InputSystem.LowLevel;
using UnityEngine.TestTools;
using UnityEditor;
using FactoryPipePower;

namespace FactoryPipePower.PlayModeTests
{
    public class DraggablePipeControllerPlayModeTests
    {
        const string SmallPrefabPath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Small_M2.prefab";
        const string LargePrefabPath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Large_M3.prefab";
        const string InputActionsPath = "Assets/FactoryPipePower/Input/FactoryPipePower.inputactions";

        readonly List<GameObject> spawned = new List<GameObject>();
        GameObject harness;
        GameObject cameraGo;
        Camera cam;
        Mouse testMouse;
        bool previousRunInBackground;
        System.Reflection.FieldInfo positionActionField;
        System.Reflection.FieldInfo pressActionField;

        [SetUp]
        public void SetUp()
        {
            previousRunInBackground = Application.runInBackground;
            Application.runInBackground = true;
            testMouse = InputSystem.AddDevice<Mouse>("VirtualMouse_Test");
            InputSystem.Update();
            Debug.Log($"[PRESS-DIAG] SetUp mouseAdded={(testMouse != null && testMouse.added)}");
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
            Debug.Log($"[PRESS-DIAG] TearDown mousePresent={(testMouse != null)} mouseAdded={(testMouse != null && testMouse.added)}");
            if (harness != null)
            {
                Object.DestroyImmediate(harness);
                harness = null;
            }
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
            if (testMouse != null && testMouse.added)
            {
                InputSystem.RemoveDevice(testMouse);
                testMouse = null;
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

        PointerInputController CreateInputHarness()
        {
            harness = new GameObject("Test_InputHarness");
            harness.SetActive(false);
            var input = harness.AddComponent<PointerInputController>();
            var so = new SerializedObject(input);
            var ctrlType = typeof(PointerInputController);
            positionActionField = ctrlType.GetField("positionAction", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            pressActionField = ctrlType.GetField("pressAction", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            so.FindProperty("raycastCamera").objectReferenceValue = cam;
            so.FindProperty("inputActions").objectReferenceValue =
                AssetDatabase.LoadAssetAtPath<InputActionAsset>(InputActionsPath);
            so.FindProperty("pickMask").intValue = LayerMask.GetMask("DraggablePipe");
            so.FindProperty("maxRayDistance").floatValue = 100f;
            so.ApplyModifiedPropertiesWithoutUndo();
            harness.SetActive(true);
            Debug.Log($"[PRESS-DIAG] harness Awake done: enabled={input.enabled} inputBlocked={input.InputBlocked} ActivePipe={(input.ActivePipe != null ? input.ActivePipe.name : "null")} rayCam={(input.RaycastCamera != null ? input.RaycastCamera.name : "null")}");
            return input;
        }

        void LogPressState(PointerInputController input, string tag)
        {
            if (input == null || positionActionField == null || pressActionField == null)
            {
                Debug.Log($"[PRESS-DIAG] {tag} reflection fields unavailable");
                return;
            }
            var pa = positionActionField.GetValue(input) as UnityEngine.InputSystem.InputAction;
            var pr = pressActionField.GetValue(input) as UnityEngine.InputSystem.InputAction;
            Vector2 pos = pa != null ? pa.ReadValue<Vector2>() : Vector2.zero;
            float pressVal = pr != null ? pr.ReadValue<float>() : -1f;
            Debug.Log($"[PRESS-DIAG] {tag} positionAction={pos} positionAction.phase={(pa != null ? pa.phase.ToString() : "null")} pressAction.value={pressVal} pressAction.phase={(pr != null ? pr.phase.ToString() : "null")} ActivePipe={(input.ActivePipe != null ? input.ActivePipe.name : "null")} InputBlocked={input.InputBlocked}");
        }

        void QueuePointer(Vector2 screenPosition, bool pressed)
        {
            var mouse = testMouse != null && testMouse.added ? testMouse : Mouse.current;
            Debug.Log($"[PRESS-DIAG] QueuePointer testMouse={(testMouse != null ? testMouse.added.ToString() : "null")} mouse={(mouse != null ? mouse.name : "null")} pos={screenPosition} pressed={pressed}");
            if (mouse == null)
            {
                Debug.Log("[PRESS-DIAG] QueuePointer ABORT: no mouse");
                return;
            }
            var state = new MouseState();
            state.position = screenPosition;
            if (pressed)
                state = state.WithButton(MouseButton.Left);
            InputSystem.QueueStateEvent(mouse, state);
            Debug.Log("[PRESS-DIAG] QueueStateEvent queued");
            InputSystem.Update();
            Debug.Log("[PRESS-DIAG] InputSystem.Update called");
        }

        IEnumerator PressAt(Vector3 worldPoint)
        {
            Debug.Log($"[PRESS-DIAG] PressAt world={worldPoint} cam={(cam != null ? cam.name : "null")} camPos={(cam != null ? cam.transform.position.ToString() : "null")}");
            var screen = cam.WorldToScreenPoint(worldPoint);
            Debug.Log($"[PRESS-DIAG] PressAt screen={screen}");
            QueuePointer(screen, false);
            Debug.Log("[PRESS-DIAG] PressAt before yield1");
            yield return null;
            Debug.Log("[PRESS-DIAG] PressAt after yield1");
            InputSystem.Update();
            Physics.SyncTransforms();
            QueuePointer(screen, true);
            Debug.Log("[PRESS-DIAG] PressAt before yield2");
            yield return null;
            Debug.Log("[PRESS-DIAG] PressAt after yield2");
            InputSystem.Update();
            Physics.SyncTransforms();
            LogPressState(harness != null ? harness.GetComponent<PointerInputController>() : null, "after press yield2");
        }

        IEnumerator ReleaseAt(Vector3 worldPoint)
        {
            var screen = cam.WorldToScreenPoint(worldPoint);
            Debug.Log($"[PRESS-DIAG] ReleaseAt world={worldPoint} screen={screen}");
            QueuePointer(screen, false);
            Debug.Log("[PRESS-DIAG] ReleaseAt before yield");
            yield return null;
            Debug.Log("[PRESS-DIAG] ReleaseAt after yield");
            InputSystem.Update();
            Physics.SyncTransforms();
            LogPressState(harness != null ? harness.GetComponent<PointerInputController>() : null, "after release yield");
        }

        IEnumerator WaitUntilState(DraggablePipeController pipe, DraggablePipeState expected, float timeoutSeconds)
        {
            float elapsed = 0f;
            while (pipe.State != expected && elapsed < timeoutSeconds)
            {
                elapsed += Time.deltaTime;
                yield return null;
            }
            Assert.AreEqual(expected, pipe.State,
                "Timeout waiting for state " + expected + " (current: " + pipe.State + ")");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator NewPipe_StartsInStock_ColliderEnabled()
        {
            var go = Spawn(SmallPrefabPath, new Vector3(0f, 1f, -6f), 30f);
            var pipe = go.GetComponent<DraggablePipeController>();
            Assert.IsNotNull(pipe);
            Assert.AreEqual(DraggablePipeState.Stock, pipe.State);
            Assert.IsTrue(pipe.IsInteractable);
            var col = go.GetComponentInChildren<BoxCollider>(true);
            Assert.IsNotNull(col);
            Assert.IsTrue(col.enabled, "collider must be enabled in Stock");
            Assert.IsTrue(go.activeInHierarchy);
            yield return null;
            Assert.AreEqual(DraggablePipeState.Stock, pipe.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator BeginDrag_TransitionsToDragging_WithoutChangingPose()
        {
            var go = Spawn(SmallPrefabPath, new Vector3(0f, 1f, -6f), 30f);
            var pipe = go.GetComponent<DraggablePipeController>();
            var pos0 = go.transform.position;
            var rot0 = go.transform.rotation;

            pipe.BeginDrag(cam.WorldToScreenPoint(pos0), cam);

            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State);
            Assert.IsFalse(pipe.IsInteractable);
            Assert.AreEqual(pos0, go.transform.position, "BeginDrag must not move the pipe");
            Assert.Less(Quaternion.Angle(rot0, go.transform.rotation), 0.01f,
                "BeginDrag must not change rotation");

            yield return new WaitForFixedUpdate();
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State, "Dragging must persist without input");
            Assert.AreEqual(pos0, go.transform.position,
                "Dragging without UpdateDrag must not drift the pipe");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator UpdateDrag_FollowsHorizontalPlane_AndKeepsYaw()
        {
            var go = Spawn(SmallPrefabPath, new Vector3(0f, 1f, -6f), 30f);
            var pipe = go.GetComponent<DraggablePipeController>();
            var rot0 = go.transform.rotation;
            float planeHeight = pipe.DragPlaneHeight;
            Assert.AreEqual(1f, planeHeight, 1e-5f, "dragPlaneHeight default must be 1.0");

            pipe.BeginDrag(cam.WorldToScreenPoint(go.transform.position), cam);

            var target = new Vector3(1.5f, planeHeight, -4f);
            pipe.UpdateDrag(cam.WorldToScreenPoint(target), cam);

            float elapsed = 0f;
            while ((go.transform.position - target).magnitude > 0.03f && elapsed < 5f)
            {
                elapsed += Time.deltaTime;
                yield return new WaitForFixedUpdate();
            }

            var final = go.transform.position;
            Assert.Less((final - target).magnitude, 0.05f,
                "pipe must follow the horizontal drag plane target, final=" + final);
            Assert.Less(Mathf.Abs(final.y - planeHeight), 0.01f,
                "drag must keep the pipe on dragPlaneHeight");
            Assert.Less(Quaternion.Angle(rot0, go.transform.rotation), 0.01f,
                "drag must not change pipe yaw");
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Release_WithoutPlacement_ReturnsToExactStockPose()
        {
            var go = Spawn(SmallPrefabPath, new Vector3(0f, 1f, -6f), 45f);
            var pipe = go.GetComponent<DraggablePipeController>();
            var col = go.GetComponentInChildren<BoxCollider>(true);
            var stockPos = go.transform.position;
            var stockRot = go.transform.rotation;

            pipe.BeginDrag(cam.WorldToScreenPoint(stockPos), cam);
            pipe.UpdateDrag(cam.WorldToScreenPoint(new Vector3(2f, 1f, -3f)), cam);
            yield return new WaitForFixedUpdate();

            pipe.EndDragWithoutPlacement();
            Assert.AreEqual(DraggablePipeState.Returning, pipe.State);
            Assert.IsFalse(col.enabled, "collider must be disabled while Returning");

            yield return WaitUntilState(pipe, DraggablePipeState.Stock, 5f);

            var rb = go.GetComponent<Rigidbody>();
            Assert.Less((rb.position - stockPos).magnitude, 1e-4f,
                "Rigidbody.position must be set to the exact stockPosition when state flips to Stock");
            Assert.Less(Quaternion.Angle(stockRot, rb.rotation), 0.01f,
                "Rigidbody.rotation must be set to the exact stockRotation when state flips to Stock");

            yield return new WaitForFixedUpdate();
            yield return new WaitForFixedUpdate();
            yield return null;

            Assert.Less((go.transform.position - stockPos).magnitude, 1e-4f,
                "pipe must settle at the exact stockPosition");
            Assert.Less(Quaternion.Angle(stockRot, go.transform.rotation), 0.01f,
                "pipe must settle at the exact stockRotation");
            Assert.IsTrue(col.enabled, "collider must be re-enabled in Stock");
            Assert.IsTrue(pipe.IsInteractable);
            Assert.IsTrue(go.activeInHierarchy);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator CommitPlaced_HidesVisualOnly_StatePlaced_ColliderOff_NoReentry()
        {
            var go = Spawn(SmallPrefabPath, new Vector3(0f, 1f, -6f), 30f);
            var pipe = go.GetComponent<DraggablePipeController>();
            var col = go.GetComponentInChildren<BoxCollider>(true);
            var visual = go.transform.Find("Visual");
            var pvc = visual.GetComponent<PipeVisualController>();
            pvc.SetTutorialOverlay(true);
            Assert.IsTrue(pvc.IsTutorialOverlayEnabled);

            bool committedFired = false;
            pipe.Committed += p => committedFired = true;

            pipe.BeginDrag(cam.WorldToScreenPoint(go.transform.position), cam);
            pipe.CommitPlaced();

            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);
            Assert.IsFalse(col.enabled, "collider must be disabled in Placed");
            Assert.IsFalse(pvc.IsTutorialOverlayEnabled, "CommitPlaced must clear tutorial overlay");
            Assert.IsFalse(visual.gameObject.activeSelf, "CommitPlaced must deactivate Visual child only");
            Assert.IsTrue(go.activeInHierarchy, "root GameObject must stay active");
            Assert.IsNull(go.transform.parent, "root must not become a child of any slot");
            Assert.IsTrue(committedFired, "Committed event must fire exactly once");
            Assert.IsFalse(pipe.IsInteractable);

            pipe.BeginDrag(cam.WorldToScreenPoint(go.transform.position), cam);
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State,
                "Placed pipe must not enter Dragging again");

            pipe.EndDragWithoutPlacement();
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State,
                "Placed pipe must not return to Stock without explicit reset");

            yield return new WaitForFixedUpdate();
            yield return null;
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);
            Assert.IsFalse(col.enabled);
            Assert.IsFalse(visual.gameObject.activeSelf);
            Assert.IsTrue(go.activeInHierarchy);
        }

        [Test]
        public void InputActions_HaveGameplayMapAndUnifiedPointerBindings()
        {
            var asset = AssetDatabase.LoadAssetAtPath<InputActionAsset>(InputActionsPath);
            Assert.IsNotNull(asset, "InputActions asset not found");

            var map = asset.FindActionMap("Gameplay");
            Assert.IsNotNull(map, "Action map 'Gameplay' must exist");

            var position = map.FindAction("PointerPosition");
            Assert.IsNotNull(position, "PointerPosition action must exist");
            Assert.AreEqual(InputActionType.Value, position.type);
            Assert.AreEqual("Vector2", position.expectedControlType);
            Assert.AreEqual(1, position.bindings.Count);
            Assert.AreEqual("<Pointer>/position", position.bindings[0].path,
                "PointerPosition must bind to unified <Pointer>/position");

            var press = map.FindAction("PointerPress");
            Assert.IsNotNull(press, "PointerPress action must exist");
            Assert.AreEqual(InputActionType.Button, press.type);
            Assert.AreEqual(1, press.bindings.Count);
            Assert.AreEqual("<Pointer>/press", press.bindings[0].path,
                "PointerPress must bind to unified <Pointer>/press");

            Assert.AreEqual(2, map.actions.Count, "Gameplay map must contain exactly two actions");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator PointerPress_SelectsOnlyStockPipe_AndKeepsSingleActive()
        {
            var input = CreateInputHarness();
            var goA = Spawn(SmallPrefabPath, new Vector3(0f, 1f, -6f), 30f);
            var pipeA = goA.GetComponent<DraggablePipeController>();
            var goB = Spawn(LargePrefabPath, new Vector3(3f, 1f, -6f), 0f);
            var pipeB = goB.GetComponent<DraggablePipeController>();
            Physics.SyncTransforms();

            pipeB.BeginDrag(cam.WorldToScreenPoint(pipeB.transform.position), cam);
            pipeB.CommitPlaced();
            Assert.AreEqual(DraggablePipeState.Placed, pipeB.State);

            yield return PressAt(pipeB.transform.position);
            Assert.IsNull(input.ActivePipe, "press on Placed pipe must not select anything");
            Assert.AreEqual(DraggablePipeState.Stock, pipeA.State);

            yield return PressAt(goA.transform.position);
            Assert.AreSame(pipeA, input.ActivePipe, "press on Stock pipe must select it");
            Assert.AreEqual(DraggablePipeState.Dragging, pipeA.State);
            Assert.AreEqual(DraggablePipeState.Placed, pipeB.State, "second pipe must stay untouched");

            QueuePointer(cam.WorldToScreenPoint(pipeB.transform.position), true);
            yield return null;
            Assert.AreSame(pipeA, input.ActivePipe, "active pipe must stay single while pointer is held");
            Assert.AreEqual(DraggablePipeState.Placed, pipeB.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator PointerRelease_EndsDrag_WithoutPlacement_ReturnsToStock()
        {
            var input = CreateInputHarness();
            var go = Spawn(SmallPrefabPath, new Vector3(0f, 1f, -6f), 30f);
            var pipe = go.GetComponent<DraggablePipeController>();
            var col = go.GetComponentInChildren<BoxCollider>(true);
            var stockPos = go.transform.position;
            var stockRot = go.transform.rotation;
            Physics.SyncTransforms();

            yield return PressAt(go.transform.position);
            Assert.AreSame(pipe, input.ActivePipe);
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State);

            var moveTarget = new Vector3(1.5f, 1f, -4f);
            QueuePointer(cam.WorldToScreenPoint(moveTarget), true);
            yield return null;
            yield return new WaitForFixedUpdate();

            yield return ReleaseAt(moveTarget);
            Assert.AreEqual(DraggablePipeState.Returning, pipe.State,
                "release without placement must start Returning, never Placed");
            Assert.IsNull(input.ActivePipe, "active pipe must be cleared on release");
            Assert.IsFalse(col.enabled, "collider must be off while Returning");

            yield return WaitUntilState(pipe, DraggablePipeState.Stock, 5f);

            var rb = go.GetComponent<Rigidbody>();
            Assert.Less((rb.position - stockPos).magnitude, 1e-4f,
                "Rigidbody.position must be set to the exact stockPosition when state flips to Stock");
            Assert.Less(Quaternion.Angle(stockRot, rb.rotation), 0.01f,
                "Rigidbody.rotation must be set to the exact stockRotation when state flips to Stock");

            yield return new WaitForFixedUpdate();
            yield return new WaitForFixedUpdate();
            yield return null;

            Assert.Less((go.transform.position - stockPos).magnitude, 1e-4f,
                "pipe must settle at the exact stockPosition");
            Assert.Less(Quaternion.Angle(stockRot, go.transform.rotation), 0.01f,
                "pipe must settle at the exact stockRotation");
            Assert.IsTrue(col.enabled, "collider must be back on in Stock");
            Assert.IsNull(input.ActivePipe, "no active pipe after full return");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator ReleaseAfterCommit_KeepsPlaced_AndPipeNotSelectable()
        {
            var input = CreateInputHarness();
            var go = Spawn(SmallPrefabPath, new Vector3(0f, 1f, -6f), 30f);
            var pipe = go.GetComponent<DraggablePipeController>();
            var col = go.GetComponentInChildren<BoxCollider>(true);
            var visual = go.transform.Find("Visual");
            var screen = cam.WorldToScreenPoint(go.transform.position);
            Physics.SyncTransforms();

            yield return PressAt(go.transform.position);
            Assert.AreSame(pipe, input.ActivePipe);
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State);

            pipe.CommitPlaced();
            Assert.IsNull(input.ActivePipe, "Committed event must clear active pipe");
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);

            QueuePointer(screen, false);
            yield return null;
            yield return new WaitForFixedUpdate();
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State,
                "release after commit must not push pipe out of Placed");
            Assert.IsFalse(col.enabled);
            Assert.IsFalse(visual.gameObject.activeSelf);
            Assert.IsTrue(go.activeInHierarchy);

            yield return PressAt(go.transform.position);
            Assert.IsNull(input.ActivePipe, "Placed pipe must never be selectable");
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);
        }

        [TestCase(SmallPrefabPath, PipeDiameter.Small, PipeLength.M2)]
        [TestCase(LargePrefabPath, PipeDiameter.Large, PipeLength.M3)]
        public void Prefab_Structure_Rigidbody_And_Collider(string path, PipeDiameter diameter, PipeLength length)
        {
            var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
            Assert.IsNotNull(prefab, "Prefab not found: " + path);

            var childNames = new List<string>();
            foreach (Transform child in prefab.transform)
                childNames.Add(child.name);
            CollectionAssert.AreEquivalent(new[] { "Visual", "DragCollider" }, childNames,
                "root must contain exactly Visual and DragCollider children");

            var visual = prefab.transform.Find("Visual");
            var mf = visual.GetComponent<MeshFilter>();
            Assert.IsNotNull(mf, "Visual must have MeshFilter");
            Assert.IsNotNull(mf.sharedMesh, "Visual MeshFilter must reference a mesh");
            Assert.AreEqual(1, mf.sharedMesh.subMeshCount, "pipe mesh must have a single submesh");
            var mr = visual.GetComponent<MeshRenderer>();
            Assert.IsNotNull(mr, "Visual must have MeshRenderer");
            Assert.AreEqual(1, mr.sharedMaterials.Length);
            Assert.AreEqual("M_Pipe_Default", mr.sharedMaterials[0].name);
            Assert.IsNotNull(visual.GetComponent<PipeVisualController>(),
                "Visual must have PipeVisualController");
            Assert.IsTrue(visual.gameObject.activeSelf, "Visual child must be active in prefab");

            var colliderTransform = prefab.transform.Find("DragCollider");
            var bc = colliderTransform.GetComponent<BoxCollider>();
            Assert.IsNotNull(bc, "DragCollider must have BoxCollider");
            Assert.IsFalse(bc.isTrigger);
            Assert.IsTrue(bc.enabled, "collider must be enabled in prefab (Stock)");
            Assert.Less((bc.center - mf.sharedMesh.bounds.center).magnitude, 1e-3f,
                "collider center must follow mesh bounds (pivot at pipe end, axis Z)");
            Assert.Less((bc.size - mf.sharedMesh.bounds.size).magnitude, 1e-3f,
                "collider size must follow mesh bounds");
            Assert.Greater(bc.size.z, bc.size.x,
                "longitudinal pipe axis must be Z");

            var rb = prefab.GetComponent<Rigidbody>();
            Assert.IsNotNull(rb, "root must have Rigidbody");
            Assert.IsTrue(rb.isKinematic);
            Assert.IsFalse(rb.useGravity);
            Assert.AreEqual(RigidbodyInterpolation.Interpolate, rb.interpolation);
            Assert.AreEqual(CollisionDetectionMode.Discrete, rb.collisionDetectionMode);

            var dpc = prefab.GetComponent<DraggablePipeController>();
            Assert.IsNotNull(dpc, "root must have DraggablePipeController");
            Assert.AreEqual(diameter, dpc.Spec.diameter);
            Assert.AreEqual(length, dpc.Spec.length);

            var so = new SerializedObject(dpc);
            Assert.AreEqual(0.25f, so.FindProperty("returnDuration").floatValue, 1e-5f,
                "returnDuration default must be 0.25");
            Assert.AreEqual(1f, so.FindProperty("dragPlaneHeight").floatValue, 1e-5f,
                "dragPlaneHeight default must be 1.0");
            Assert.IsNotNull(so.FindProperty("visual").objectReferenceValue, "visual reference must be assigned");
            Assert.IsNotNull(so.FindProperty("dragCollider").objectReferenceValue, "dragCollider reference must be assigned");
            Assert.IsNotNull(so.FindProperty("body").objectReferenceValue, "body reference must be assigned");
            Assert.IsNotNull(so.FindProperty("defaultMaterial").objectReferenceValue,
                "defaultMaterial reference must be assigned");

            int expectedLayer = LayerMask.NameToLayer("DraggablePipe");
            Assert.GreaterOrEqual(expectedLayer, 0, "DraggablePipe layer must exist");
            foreach (var t in prefab.GetComponentsInChildren<Transform>(true))
                Assert.AreEqual(expectedLayer, t.gameObject.layer,
                    "pipe prefab children must be on DraggablePipe layer: " + t.name);
        }
    }
}
