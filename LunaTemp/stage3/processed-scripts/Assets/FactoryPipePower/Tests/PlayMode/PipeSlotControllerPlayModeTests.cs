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
    public class PipeSlotControllerPlayModeTests
    {
        const string SlotSmallPath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Small_M2.prefab";
        const string SlotLargePath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Large_M3.prefab";
        const string PipeSmallPath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Small_M2.prefab";
        const string PipeLargePath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Large_M3.prefab";
        const string InputActionsPath = "Assets/FactoryPipePower/Input/FactoryPipePower.inputactions";

        const string EmptyMatName = "M_Slot_Empty";
        const string HoverMatName = "M_Slot_HoverValid";
        const string WrongMatName = "M_Slot_Wrong";
        const string DefaultMatName = "M_Pipe_Default";

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

        PipeSlotController SpawnSlot(string path, Vector3 position, float yaw)
        {
            var go = Spawn(path, position, yaw);
            return go.GetComponent<PipeSlotController>();
        }

        DraggablePipeController SpawnPipe(string path, Vector3 position, float yaw)
        {
            var go = Spawn(path, position, yaw);
            return go.GetComponent<DraggablePipeController>();
        }

        void SetRotationGroup(PipeSlotController slot, RotationGroup group)
        {
            var so = new SerializedObject(slot);
            so.FindProperty("rotationGroup").enumValueIndex = (int)group;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        void SetRotationDuration(PipeSlotController slot, float duration)
        {
            var so = new SerializedObject(slot);
            so.FindProperty("rotationDuration").floatValue = duration;
            so.ApplyModifiedPropertiesWithoutUndo();
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
            so.FindProperty("slotTapMask").intValue = LayerMask.GetMask("PipeSlot");
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

        string CurrentBaseMaterialName(PipeSlotController slot)
        {
            var vis = slot.transform.Find("AnchorY/SlotPipeVisual");
            var pvc = vis.GetComponent<PipeVisualController>();
            return pvc.CurrentBaseMaterial != null ? pvc.CurrentBaseMaterial.name : "<null>";
        }

        IEnumerator WaitUntilNotRotating(PipeSlotController slot, float timeoutSeconds)
        {
            float elapsed = 0f;
            while (slot.IsRotating && elapsed < timeoutSeconds)
            {
                elapsed += Time.deltaTime;
                yield return null;
            }
            Assert.IsFalse(slot.IsRotating, "Timeout waiting for rotation to finish");
        }

        [Test]
        [TestCase(SlotSmallPath, PipeDiameter.Small, PipeLength.M2)]
        [TestCase(SlotLargePath, PipeDiameter.Large, PipeLength.M3)]
        public void Prefab_Structure_Colliders_Materials_References(string path,
            PipeDiameter diameter, PipeLength length)
        {
            var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
            Assert.IsNotNull(prefab, "Prefab not found: " + path);

            var childNames = new List<string>();
            foreach (Transform child in prefab.transform)
                childNames.Add(child.name);
            CollectionAssert.AreEquivalent(
                new[] { "AnchorY", "ConnectorA", "ConnectorB", "CaptureVolume", "TapCollider" },
                childNames,
                "root must contain exactly AnchorY, ConnectorA, ConnectorB, CaptureVolume, TapCollider");

            var anchorY = prefab.transform.Find("AnchorY");
            var visual = anchorY.Find("SlotPipeVisual");
            Assert.IsNotNull(visual.GetComponent<MeshFilter>().sharedMesh, "SlotPipeVisual must have a mesh");
            Assert.IsFalse(visual.name.Contains("ConvexHulls"), "must use render mesh, not convex hulls");
            var mr = visual.GetComponent<MeshRenderer>();
            Assert.AreEqual(1, mr.sharedMaterials.Length);
            Assert.AreEqual(EmptyMatName, mr.sharedMaterials[0].name, "prefab base material must be M_Slot_Empty");
            Assert.IsNotNull(visual.GetComponent<PipeVisualController>());
            // Large M3 uses the approved AnchorY z=1.5 (mesh-center offset); Small M2 keeps AnchorY at origin.
            float expectedAnchorY = diameter == PipeDiameter.Large ? 1.5f : 0f;
            Assert.Less(Mathf.Abs(anchorY.localPosition.z - expectedAnchorY), 1e-5f,
                "AnchorY local Z must match the approved per-diameter offset");
            Assert.Less(anchorY.localPosition.x, 1e-5f, "AnchorY local X must be zero");
            Assert.Less(anchorY.localPosition.y, 1e-5f, "AnchorY local Y must be zero");
            Assert.Less(Quaternion.Angle(anchorY.localRotation, Quaternion.identity), 0.01f,
                "AnchorY local rotation must start at identity");

            var connectorA = prefab.transform.Find("ConnectorA");
            var connectorB = prefab.transform.Find("ConnectorB");
            Assert.Less(connectorA.localPosition.z, connectorB.localPosition.z,
                "ConnectorA must sit at the pipe start (smaller local Z)");

            var tap = prefab.transform.Find("TapCollider");
            var tapBc = tap.GetComponent<BoxCollider>();
            Assert.IsFalse(tapBc.isTrigger, "TapCollider must not be a trigger on Stage 4");
            Assert.IsTrue(tapBc.enabled);

            var capture = prefab.transform.Find("CaptureVolume");
            Assert.IsNotNull(capture, "CaptureVolume child must exist");
            var captureBc = capture.GetComponent<BoxCollider>();
            Assert.IsNotNull(captureBc, "CaptureVolume must have BoxCollider");
            Assert.IsTrue(captureBc.isTrigger, "Stage 5: CaptureVolume must be a trigger for snap");
            Assert.IsTrue(captureBc.enabled, "CaptureVolume must be enabled");
            int triggerCount = 0;
            foreach (var c in prefab.GetComponentsInChildren<Collider>(true))
            {
                if (!c.isTrigger)
                    continue;
                triggerCount++;
                Assert.AreSame(capture, c.transform,
                    "Stage 5: CaptureVolume must be the only trigger collider, found: " + c.name);
            }
            Assert.AreEqual(1, triggerCount, "slot prefab must contain exactly one trigger collider");

            var slot = prefab.GetComponent<PipeSlotController>();
            Assert.IsNotNull(slot, "root must have PipeSlotController");

            var cv = capture.GetComponent<PipeSlotCaptureVolume>();
            Assert.IsNotNull(cv, "Stage 5 cleanup: CaptureVolume must host PipeSlotCaptureVolume");
            Assert.AreSame(slot, cv.OwnerSlot,
                "Stage 5 cleanup: PipeSlotCaptureVolume.ownerSlot must reference the owning PipeSlotController");
            Assert.IsNull(tap.GetComponent<PipeSlotCaptureVolume>(),
                "Stage 5 cleanup: TapCollider must not host PipeSlotCaptureVolume");
            Assert.AreEqual(diameter, slot.ExpectedSpec.diameter);
            Assert.AreEqual(length, slot.ExpectedSpec.length);
            Assert.AreEqual(RotationGroup.Yaw0Or180, slot.SlotRotationGroup);

            var so = new SerializedObject(slot);
            Assert.AreEqual(0.2f, so.FindProperty("rotationDuration").floatValue, 1e-5f,
                "rotationDuration default must be 0.2");
            Assert.IsNotNull(so.FindProperty("anchorY").objectReferenceValue, "anchorY must be assigned");
            Assert.IsNotNull(so.FindProperty("slotVisual").objectReferenceValue, "slotVisual must be assigned");
            Assert.IsNotNull(so.FindProperty("connectorA").objectReferenceValue, "connectorA must be assigned");
            Assert.IsNotNull(so.FindProperty("connectorB").objectReferenceValue, "connectorB must be assigned");
            Assert.IsNotNull(so.FindProperty("captureCollider").objectReferenceValue, "captureCollider must be assigned");
            Assert.IsNotNull(so.FindProperty("tapCollider").objectReferenceValue, "tapCollider must be assigned");
            Assert.IsNotNull(so.FindProperty("emptyMaterial").objectReferenceValue, "emptyMaterial must be assigned");
            Assert.IsNotNull(so.FindProperty("hoverValidMaterial").objectReferenceValue, "hoverValidMaterial must be assigned");
            Assert.IsNotNull(so.FindProperty("wrongMaterial").objectReferenceValue, "wrongMaterial must be assigned");
            Assert.IsNotNull(so.FindProperty("defaultMaterial").objectReferenceValue, "defaultMaterial must be assigned");

            Assert.IsNull(prefab.GetComponent<Rigidbody>(), "slot prefab must not have Rigidbody on Stage 4");
            int expectedSlotLayer = LayerMask.NameToLayer("PipeSlot");
            Assert.GreaterOrEqual(expectedSlotLayer, 0, "PipeSlot layer must exist in TagManager");
            foreach (var t in prefab.GetComponentsInChildren<Transform>(true))
                Assert.AreEqual(expectedSlotLayer, t.gameObject.layer,
                    "Stage 5 moves slot prefab children to PipeSlot layer: " + t.name);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator NewSlot_StartsEmpty_EmptyMaterial()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            Assert.AreEqual(PipeSlotState.Empty, slot.State);
            Assert.IsFalse(slot.IsOccupied);
            Assert.IsFalse(slot.PlacementCommitted);
            Assert.IsNull(slot.AcceptedPipe);
            Assert.AreEqual(EmptyMatName, CurrentBaseMaterialName(slot));

            yield return null;
            Assert.AreEqual(PipeSlotState.Empty, slot.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryAccept_CompatibleDraggingPipe_WithAlignedYaw_OccupiedAligned()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State);

            Assert.IsTrue(slot.TryAccept(pipe), "compatible Dragging pipe with aligned yaw must be accepted");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
            Assert.IsTrue(slot.IsOccupied);
            Assert.IsTrue(slot.IsAligned);
            Assert.AreSame(pipe, slot.AcceptedPipe);
            Assert.IsTrue(slot.PlacementCommitted);
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State, "pipe must be committed to Placed");
            Assert.AreEqual(DefaultMatName, CurrentBaseMaterialName(slot),
                "OccupiedAligned slot visual must switch to M_Pipe_Default");
            Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, Quaternion.Euler(0f, 0f, 0f)), 0.01f,
                "AnchorY must keep the aligned yaw (0)");

            yield return new WaitForFixedUpdate();
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryAccept_WithWrongYaw_OccupiedWrongRotation_WrongMaterial()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);

            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);
            Assert.IsTrue(slot.IsOccupied);
            Assert.IsFalse(slot.IsAligned);
            Assert.AreEqual(WrongMatName, CurrentBaseMaterialName(slot),
                "OccupiedWrongRotation slot visual must switch to M_Slot_Wrong");
            Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, Quaternion.Euler(0f, 90f, 0f)), 0.01f,
                "AnchorY must snap to the pipe quarter yaw (90)");
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryAccept_Guards_RejectWithoutSideEffects()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var pipeSmall = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            var pipeLarge = SpawnPipe(PipeLargePath, new Vector3(3f, 1f, -6f), 0f);

            Assert.IsFalse(slot.TryAccept(null), "TryAccept(null) must be rejected");

            Assert.IsFalse(slot.TryAccept(pipeSmall), "Stock (not Dragging) pipe must be rejected");
            Assert.AreEqual(PipeSlotState.Empty, slot.State);
            Assert.AreEqual(DraggablePipeState.Stock, pipeSmall.State);

            pipeLarge.BeginDrag(cam.WorldToScreenPoint(pipeLarge.transform.position), cam);
            Assert.IsFalse(slot.TryAccept(pipeLarge), "mismatched spec (Large/M3) must be rejected");
            Assert.AreEqual(PipeSlotState.Empty, slot.State, "failed accept must leave the slot Empty");
            Assert.IsFalse(slot.PlacementCommitted);
            Assert.AreEqual(DraggablePipeState.Dragging, pipeLarge.State, "failed accept must not touch the pipe");

            pipeSmall.BeginDrag(cam.WorldToScreenPoint(pipeSmall.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipeSmall));

            Assert.IsFalse(slot.TryAccept(pipeSmall), "occupied slot must reject a second accept");
            Assert.AreSame(pipeSmall, slot.AcceptedPipe);

            var pipeAnother = SpawnPipe(PipeSmallPath, new Vector3(6f, 1f, -6f), 0f);
            pipeAnother.BeginDrag(cam.WorldToScreenPoint(pipeAnother.transform.position), cam);
            Assert.IsFalse(slot.TryAccept(pipeAnother), "occupied slot must reject a different compatible pipe");
            Assert.AreSame(pipeSmall, slot.AcceptedPipe);
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator SetHoverValid_TogglesStateAndMaterial_OnlyWhileEmpty()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);

            slot.SetHoverValid(true);
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);
            Assert.IsFalse(slot.IsOccupied);
            Assert.AreEqual(HoverMatName, CurrentBaseMaterialName(slot),
                "HoverValid slot visual must switch to M_Slot_HoverValid");

            slot.SetHoverValid(false);
            Assert.AreEqual(PipeSlotState.Empty, slot.State);
            Assert.AreEqual(EmptyMatName, CurrentBaseMaterialName(slot));

            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);

            slot.SetHoverValid(true);
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "SetHoverValid(true) must not overwrite an occupied state");
            slot.SetHoverValid(false);
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "SetHoverValid(false) must not touch an occupied state");
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryAccept_FromHoverValid_Accepts_AndClearsHover()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            slot.SetHoverValid(true);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);

            Assert.IsTrue(slot.TryAccept(pipe), "accept from HoverValid must work");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
            Assert.AreEqual(DefaultMatName, CurrentBaseMaterialName(slot));
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryRotateTap_InWrongRotation_RotatesPlus90_ThenAligned()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            SetRotationDuration(slot, 0.15f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);
            Quaternion startLocal = slot.AnchorY.localRotation;

            Assert.IsTrue(slot.TryRotateTap(), "tap in OccupiedWrongRotation must start rotation");
            Assert.IsTrue(slot.IsRotating);
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State,
                "state must stay Wrong during rotation");

            yield return null;
            yield return null;
            if (slot.IsRotating)
            {
                Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, startLocal), 89.9f,
                    "rotation must be animated, not snapped");
                Assert.Greater(Quaternion.Angle(slot.AnchorY.localRotation, startLocal), 0.1f,
                    "rotation must have progressed");
            }

            yield return WaitUntilNotRotating(slot, 5f);
            Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, Quaternion.Euler(0f, 180f, 0f)), 0.01f,
                "AnchorY must land exactly on the next quarter turn (180)");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "+90 from 90 (group 0/180) must end OccupiedAligned");
            Assert.IsTrue(slot.IsAligned);
            Assert.AreEqual(DefaultMatName, CurrentBaseMaterialName(slot));
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State, "rotation must not touch the pipe");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryRotateTap_GroupYaw90Or270_WrongYaw0_BecomesAligned()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            SetRotationGroup(slot, RotationGroup.Yaw90Or270);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State, "yaw 0 is wrong for group 90/270");
            Assert.AreEqual(WrongMatName, CurrentBaseMaterialName(slot));

            Assert.IsTrue(slot.TryRotateTap());
            yield return WaitUntilNotRotating(slot, 5f);

            Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, Quaternion.Euler(0f, 90f, 0f)), 0.01f,
                "AnchorY must land exactly on 90");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "for group 90/270 one +90 step from any wrong yaw always ends aligned");
            Assert.IsTrue(slot.IsAligned);
            Assert.AreEqual(DefaultMatName, CurrentBaseMaterialName(slot));
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryRotateTap_FromOccupiedAligned_BecomesWrongRotation()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            SetRotationDuration(slot, 0.15f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
            Assert.AreEqual(DefaultMatName, CurrentBaseMaterialName(slot));

            Assert.IsTrue(slot.TryRotateTap(), "rotation must be allowed from OccupiedAligned");
            Assert.IsTrue(slot.IsRotating);
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "state must stay Aligned during rotation");

            yield return WaitUntilNotRotating(slot, 5f);

            Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, Quaternion.Euler(0f, 90f, 0f)), 0.01f,
                "AnchorY must land exactly on the next quarter turn (90)");
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State,
                "+90 from 0 (group 0/180) must end OccupiedWrongRotation");
            Assert.IsFalse(slot.IsAligned);
            Assert.AreEqual(WrongMatName, CurrentBaseMaterialName(slot),
                "material must switch to M_Slot_Wrong after rotation to wrong");
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State, "rotation must not touch the pipe");
            Assert.AreEqual(PipeDiameter.Small, slot.ExpectedSpec.diameter,
                "rotation must not change ExpectedSpec diameter");
            Assert.AreEqual(PipeLength.M2, slot.ExpectedSpec.length,
                "rotation must not change ExpectedSpec length");
            Assert.AreSame(pipe, slot.AcceptedPipe, "rotation must not clear the accepted pipe reference");
            Assert.IsTrue(slot.PlacementCommitted, "rotation must not reset the placement guard");
            Assert.IsFalse(pvc_IsTutorialOverlayEnabled(slot),
                "rotation must not enable the tutorial overlay");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryRotateTap_RejectedInEmpty_HoverValid_Charging_Powered()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);

            Assert.AreEqual(PipeSlotState.Empty, slot.State);
            Assert.IsFalse(slot.TryRotateTap(), "rotation must be rejected in Empty");

            slot.SetHoverValid(true);
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);
            Assert.IsFalse(slot.TryRotateTap(), "rotation must be rejected in HoverValid");
            Assert.IsFalse(slot.IsRotating);
            Assert.AreEqual(PipeSlotState.HoverValid, slot.State);
            slot.SetHoverValid(false);

            ForceSlotState(slot, PipeSlotState.Charging);
            Assert.IsFalse(slot.TryRotateTap(), "rotation must be rejected in Charging");
            Assert.IsFalse(slot.IsRotating);
            Assert.AreEqual(PipeSlotState.Charging, slot.State);

            ForceSlotState(slot, PipeSlotState.Powered);
            Assert.IsFalse(slot.TryRotateTap(), "rotation must be rejected in Powered");
            Assert.IsFalse(slot.IsRotating);
            Assert.AreEqual(PipeSlotState.Powered, slot.State);

            yield return null;
        }

        bool pvc_IsTutorialOverlayEnabled(PipeSlotController slot)
        {
            var vis = slot.transform.Find("AnchorY/SlotPipeVisual");
            return vis.GetComponent<PipeVisualController>().IsTutorialOverlayEnabled;
        }

        static void ForceSlotState(PipeSlotController slot, PipeSlotState forced)
        {
            var field = typeof(PipeSlotController).GetField("state",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            Assert.IsNotNull(field, "private field 'state' must exist for the Charging/Powered rejection test");
            field.SetValue(slot, forced);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryRotateTap_SecondTapWhileRotating_IsIgnored()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            SetRotationDuration(slot, 0.5f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe));

            Assert.IsTrue(slot.TryRotateTap());
            Assert.IsTrue(slot.IsRotating);
            Assert.IsFalse(slot.TryRotateTap(), "second tap while rotating must be ignored");

            yield return WaitUntilNotRotating(slot, 5f);
            Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, Quaternion.Euler(0f, 180f, 0f)), 0.01f,
                "only one +90 step must have been applied");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator OnlyAnchorY_Rotates_RootStaysFixed()
        {
            var slotGo = Spawn(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var slot = slotGo.GetComponent<PipeSlotController>();
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe));

            Vector3 rootPos = slotGo.transform.position;
            Quaternion rootRot = slotGo.transform.rotation;
            Vector3 anchorPos = slot.AnchorY.localPosition;

            Assert.IsTrue(slot.TryRotateTap());
            yield return WaitUntilNotRotating(slot, 5f);

            Assert.Less((slotGo.transform.position - rootPos).magnitude, 1e-5f, "root position must not move");
            Assert.Less(Quaternion.Angle(slotGo.transform.rotation, rootRot), 0.01f, "root rotation must not change");
            Assert.Less((slot.AnchorY.localPosition - anchorPos).magnitude, 1e-5f,
                "AnchorY local position must not change during rotation");
            Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, Quaternion.Euler(0f, 180f, 0f)), 0.01f);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator ResetSlot_AfterAccept_ReturnsToEmpty_CanAcceptAgain()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);

            slot.ResetSlot();
            Assert.AreEqual(PipeSlotState.Empty, slot.State);
            Assert.IsFalse(slot.IsOccupied);
            Assert.IsFalse(slot.PlacementCommitted);
            Assert.IsNull(slot.AcceptedPipe);
            Assert.AreEqual(EmptyMatName, CurrentBaseMaterialName(slot));
            Assert.Less(Quaternion.Angle(slot.AnchorY.localRotation, Quaternion.identity), 0.01f,
                "ResetSlot must restore the authoring AnchorY rotation");
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State,
                "ResetSlot must not touch the already placed pipe");

            var pipe2 = SpawnPipe(PipeSmallPath, new Vector3(3f, 1f, -6f), 0f);
            pipe2.BeginDrag(cam.WorldToScreenPoint(pipe2.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe2), "reset slot must accept a new pipe");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
            Assert.AreSame(pipe2, slot.AcceptedPipe);
            yield return null;
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator TryRotateTap_StopsAtExactQuarter_WithNonStandardStartYaw()
        {
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            SetRotationDuration(slot, 0.15f);
            slot.AnchorY.localRotation = Quaternion.Euler(0f, 45f, 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State,
                "yaw 90 from a 45 degree start must still be evaluated as wrong/aligned by quarter");

            Assert.IsTrue(slot.TryRotateTap());
            yield return WaitUntilNotRotating(slot, 5f);
            float yaw = Mathf.Repeat(slot.AnchorY.localEulerAngles.y, 360f);
            Assert.Less(Mathf.Abs(yaw - 180f), 0.01f,
                "final rotation must be an exact quarter turn (180), not 45+90=135");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator PointerPress_TapOnWrongSlot_RotatesIt()
        {
            var input = CreateInputHarness();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);
            Physics.SyncTransforms();

            var tapWorld = slot.transform.Find("TapCollider").position + slot.transform.forward;
            yield return PressAt(tapWorld);

            Assert.IsTrue(slot.IsRotating, "tap on TapCollider must trigger TryRotateTap");
            yield return WaitUntilNotRotating(slot, 5f);
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
            Assert.IsNull(input.ActivePipe, "slot tap must not create an active pipe");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator PointerPress_WhileDragging_SlotTapIsIgnored()
        {
            var input = CreateInputHarness();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var accepted = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            accepted.BeginDrag(cam.WorldToScreenPoint(accepted.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(accepted));
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);

            var dragged = SpawnPipe(PipeSmallPath, new Vector3(-5f, 1f, -6f), 0f);
            Physics.SyncTransforms();

            yield return PressAt(dragged.transform.position);
            Assert.AreSame(dragged, input.ActivePipe, "press on a Stock pipe must start a drag");
            Assert.AreEqual(DraggablePipeState.Dragging, dragged.State);

            var tapWorld = slot.transform.Find("TapCollider").position + slot.transform.forward;
            QueuePointer(cam.WorldToScreenPoint(tapWorld), true);
            yield return null;
            yield return new WaitForFixedUpdate();

            Assert.IsFalse(slot.IsRotating,
                "while a pipe drag is active, slot taps must be ignored (input priority: activePipe first)");
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);
            Assert.AreSame(dragged, input.ActivePipe, "active pipe must stay selected");

            yield return ReleaseAt(dragged.transform.position);
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State, "release must not rotate the slot");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator PointerPress_PipeOverSlot_SelectsPipe_NotRotate()
        {
            var input = CreateInputHarness();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var accepted = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -6f), 90f);
            accepted.BeginDrag(cam.WorldToScreenPoint(accepted.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(accepted));
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);

            var stock = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -3f), 45f);
            stock.transform.position = slot.transform.position + Vector3.up * 1f + Vector3.back * 0.5f;
            Physics.SyncTransforms();

            yield return PressAt(stock.transform.position);

            Assert.AreSame(stock, input.ActivePipe,
                "press must prefer the Stock pipe over the slot under it");
            Assert.AreEqual(DraggablePipeState.Dragging, stock.State);
            Assert.IsFalse(slot.IsRotating, "pipe priority press must not rotate the slot");
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator PointerPress_ReleaseAfterCommit_SlotKeepsPlaced_NoRotation()
        {
            var input = CreateInputHarness();
            var slot = SpawnSlot(SlotSmallPath, new Vector3(0f, 0f, -3f), 0f);
            var pipe = SpawnPipe(PipeSmallPath, new Vector3(0f, 1f, -7f), 90f);
            var pressWorld = pipe.transform.position + Vector3.right * 1f;
            var screen = cam.WorldToScreenPoint(pressWorld);
            Physics.SyncTransforms();

            QueuePointer(screen, false);
            yield return null;
            QueuePointer(screen, true);
            yield return null;
            Assert.AreSame(pipe, input.ActivePipe);

            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);
            Assert.IsNull(input.ActivePipe, "Committed event must clear the active pipe");

            QueuePointer(screen, false);
            yield return null;
            yield return new WaitForFixedUpdate();

            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State,
                "release after commit must not rotate or reset the slot");
            Assert.IsFalse(slot.IsRotating);
            Assert.AreEqual(DraggablePipeState.Placed, pipe.State);
        }

        [Test]
        public void Registry_RegisterUnregister_NoDuplicates_NullSafe()
        {
            var regGo = new GameObject("Test_Registry");
            spawned.Add(regGo);
            var registry = regGo.AddComponent<PipeSlotRegistry>();

            var slotGo = new GameObject("Test_Slot");
            spawned.Add(slotGo);
            var slot = slotGo.AddComponent<PipeSlotController>();

            Assert.AreEqual(0, registry.Count);

            registry.Register(slot);
            Assert.AreEqual(1, registry.Count);
            Assert.AreSame(slot, registry.Slots[0]);

            registry.Register(slot);
            Assert.AreEqual(1, registry.Count, "duplicate register must be ignored");

            registry.Unregister(slot);
            Assert.AreEqual(0, registry.Count);

            registry.Unregister(slot);
            Assert.AreEqual(0, registry.Count, "unregister of unknown slot must be ignored");

            registry.Register(null);
            Assert.AreEqual(0, registry.Count, "register of null must be ignored");
            registry.Unregister(null);
            Assert.AreEqual(0, registry.Count, "unregister of null must be ignored");
        }
    }
}
