using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.InputSystem.LowLevel;
using UnityEngine.TestTools;
using UnityEngine.UI;
using UnityEditor;
using FactoryPipePower;

namespace FactoryPipePower.PlayModeTests
{
    public class Stage10GameFlowPlayModeTests
    {
        const string SlotSmallPath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Small_M2.prefab";
        const string PipeSmallPath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Small_M2.prefab";
        const string InputActionsPath = "Assets/FactoryPipePower/Input/FactoryPipePower.inputactions";

        readonly List<GameObject> spawned = new List<GameObject>();
        GameObject harness;
        GameObject cameraGo;
        Camera cam;
        Mouse testMouse;
        bool previousRunInBackground;
        FieldInfo positionActionField;
        FieldInfo pressActionField;

        [SetUp]
        public void SetUp()
        {
            previousRunInBackground = Application.runInBackground;
            Application.runInBackground = true;
            testMouse = InputSystem.AddDevice<Mouse>("VirtualMouse_S10");
            InputSystem.Update();
            Debug.Log($"[PRESS-DIAG] SetUp mouseAdded={(testMouse != null && testMouse.added)}");
            cameraGo = new GameObject("S10_Camera");
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
                UnityEngine.Object.DestroyImmediate(harness);
                harness = null;
            }
            foreach (var go in spawned)
            {
                if (go != null)
                    UnityEngine.Object.DestroyImmediate(go);
            }
            spawned.Clear();
            if (cameraGo != null)
            {
                UnityEngine.Object.DestroyImmediate(cameraGo);
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

        static int HandlerCount(object target, string eventName)
        {
            var flags = BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public;
            var field = target.GetType().GetField(eventName, flags);
            Assert.IsNotNull(field, "Event field not found: " + eventName);
            var del = field.GetValue(target) as Delegate;
            return del == null ? 0 : del.GetInvocationList().Length;
        }

        static void SetRotationDuration(PipeSlotController slot, float duration)
        {
            var so = new SerializedObject(slot);
            so.FindProperty("rotationDuration").floatValue = duration;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        FactoryPowerController CreateFactory()
        {
            var go = new GameObject("S10_Factory");
            go.SetActive(false);
            spawned.Add(go);
            var factory = go.AddComponent<FactoryPowerController>();
            go.SetActive(true);
            return factory;
        }

        GameFlowController CreateFlow(FactoryPowerController factory, CompletionUI ui,
            PointerInputController input, TutorialController tutorial, float delay)
        {
            var go = new GameObject("S10_GameFlow");
            go.SetActive(false);
            spawned.Add(go);
            var flow = go.AddComponent<GameFlowController>();
            var so = new SerializedObject(flow);
            so.FindProperty("factoryPowerController").objectReferenceValue = factory;
            so.FindProperty("completionUI").objectReferenceValue = ui;
            so.FindProperty("pointerInput").objectReferenceValue = input;
            so.FindProperty("tutorialController").objectReferenceValue = tutorial;
            so.FindProperty("completionDelay").floatValue = delay;
            so.ApplyModifiedPropertiesWithoutUndo();
            go.SetActive(true);
            return flow;
        }

        CompletionUI CreateUI()
        {
            var canvasGo = new GameObject("S10_Canvas");
            canvasGo.AddComponent<Canvas>();
            spawned.Add(canvasGo);

            var panel = new GameObject("CompletionPanel");
            panel.transform.SetParent(canvasGo.transform, false);
            panel.SetActive(false);
            spawned.Add(panel);

            var font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");

            var titleGo = new GameObject("Title");
            titleGo.transform.SetParent(panel.transform, false);
            var title = titleGo.AddComponent<Text>();
            title.font = font;
            spawned.Add(titleGo);

            var subtitleGo = new GameObject("Subtitle");
            subtitleGo.transform.SetParent(panel.transform, false);
            var subtitle = subtitleGo.AddComponent<Text>();
            subtitle.font = font;
            spawned.Add(subtitleGo);

            var buttonGo = new GameObject("PrimaryCTA");
            buttonGo.transform.SetParent(panel.transform, false);
            buttonGo.AddComponent<Image>();
            var button = buttonGo.AddComponent<Button>();
            spawned.Add(buttonGo);

            var ui = canvasGo.AddComponent<CompletionUI>();
            var so = new SerializedObject(ui);
            so.FindProperty("panelRoot").objectReferenceValue = panel;
            so.FindProperty("titleLabel").objectReferenceValue = title;
            so.FindProperty("subtitleLabel").objectReferenceValue = subtitle;
            so.FindProperty("primaryButton").objectReferenceValue = button;
            so.ApplyModifiedPropertiesWithoutUndo();
            return ui;
        }

        PointerInputController CreateInputHarness()
        {
            harness = new GameObject("S10_InputHarness");
            harness.SetActive(false);
            var input = harness.AddComponent<PointerInputController>();
            var so = new SerializedObject(input);
            var ctrlType = typeof(PointerInputController);
            positionActionField = ctrlType.GetField("positionAction", BindingFlags.NonPublic | BindingFlags.Instance);
            pressActionField = ctrlType.GetField("pressAction", BindingFlags.NonPublic | BindingFlags.Instance);
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
            var pa = positionActionField.GetValue(input) as InputAction;
            var pr = pressActionField.GetValue(input) as InputAction;
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

        GameObject Spawn(string path, Vector3 position, float yaw)
        {
            var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
            Assert.IsNotNull(prefab, "Prefab missing: " + path);
            var go = UnityEngine.Object.Instantiate(prefab);
            go.transform.SetPositionAndRotation(position, Quaternion.Euler(0f, yaw, 0f));
            spawned.Add(go);
            return go;
        }

        IEnumerator WaitUntil(Func<bool> condition, float timeoutSeconds, string message)
        {
            float elapsed = 0f;
            while (!condition() && elapsed < timeoutSeconds)
            {
                elapsed += Time.deltaTime;
                yield return null;
            }
            Assert.IsTrue(condition(), message);
        }

        IEnumerator WaitUntilState(DraggablePipeController pipe, DraggablePipeState expected, float timeoutSeconds)
        {
            yield return WaitUntil(() => pipe.State == expected, timeoutSeconds,
                "Timeout waiting for pipe state " + expected + " (current: " + pipe.State + ")");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator FactoryOnline_Gameplay_ToWinPending_ExactlyOnce()
        {
            var factory = CreateFactory();
            var flow = CreateFlow(factory, null, null, null, 0f);

            Assert.AreEqual(GameFlowState.Gameplay, flow.State);
            int winEvents = 0;
            flow.WinTriggered += () => winEvents++;

            factory.SetOnline();

            Assert.AreEqual(GameFlowState.WinPending, flow.State,
                "FactoryOnline must move Gameplay -> WinPending synchronously");
            Assert.AreEqual(1, flow.WinTriggerCount);
            Assert.AreEqual(1, winEvents);

            yield return null;
            yield return null;

            Assert.AreEqual(GameFlowState.Completed, flow.State,
                "WinPending must resolve to Completed after the delay");
            Assert.AreEqual(1, flow.WinTriggerCount, "win must stay one-shot");
            Assert.AreEqual(1, winEvents);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator RepeatFactoryOnline_NoDuplicateWin_UIEvents()
        {
            var factory = CreateFactory();
            var ui = CreateUI();
            var flow = CreateFlow(factory, ui, null, null, 0f);

            int winEvents = 0;
            flow.WinTriggered += () => winEvents++;

            factory.SetOnline();
            yield return null;
            yield return null;

            Assert.AreEqual(GameFlowState.Completed, flow.State);
            Assert.IsTrue(ui.IsVisible);

            factory.SetOnline();
            factory.SetOffline();
            factory.SetOnline();
            yield return null;
            yield return null;

            Assert.AreEqual(GameFlowState.Completed, flow.State, "repeat signals must not change Completed");
            Assert.AreEqual(1, flow.WinTriggerCount, "no duplicate win trigger");
            Assert.AreEqual(1, winEvents, "no duplicate WinTriggered events");
            Assert.IsTrue(ui.IsVisible, "UI must stay visible");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator CTA_ShownOnlyAfterVictory()
        {
            var factory = CreateFactory();
            var ui = CreateUI();
            CreateFlow(factory, ui, null, null, 0f);

            Assert.IsFalse(ui.IsVisible, "CTA must be hidden before victory");

            factory.SetOnline();
            yield return WaitUntil(() => ui.IsVisible, 5f,
                "CTA panel must become visible after FactoryOnline + delay");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator CTA_HiddenBeforeVictory()
        {
            var factory = CreateFactory();
            var ui = CreateUI();
            var flow = CreateFlow(factory, ui, null, null, 0f);

            yield return null;
            yield return null;
            yield return null;

            Assert.IsFalse(ui.IsVisible, "CTA must stay hidden while still in Gameplay");
            Assert.AreEqual(GameFlowState.Gameplay, flow.State);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator AfterWin_NewDrag_DoesNotStart()
        {
            var pipeGo = Spawn(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f);
            var pipe = pipeGo.GetComponent<DraggablePipeController>();
            Assert.IsNotNull(pipe);

            var pipeCol = pipeGo.GetComponentInChildren<BoxCollider>(true);
            Assert.IsNotNull(pipeCol);

            var input = CreateInputHarness();
            var factory = CreateFactory();
            CreateFlow(factory, null, input, null, 0f);

            Assert.IsFalse(input.InputBlocked, "input must be open during Gameplay");

            yield return PressAt(pipeCol.bounds.center);
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State,
                "sanity: press must start a drag before the win");
            Assert.AreSame(pipe, input.ActivePipe);

            yield return ReleaseAt(pipeCol.bounds.center);
            yield return WaitUntilState(pipe, DraggablePipeState.Stock, 5f);

            factory.SetOnline();
            yield return WaitUntil(() => input.InputBlocked, 5f,
                "game flow must block input on victory");

            yield return PressAt(pipeCol.bounds.center);

            Assert.AreEqual(DraggablePipeState.Stock, pipe.State,
                "no new drag may start after the win");
            Assert.IsNull(input.ActivePipe, "no active pipe may be captured after the win");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator AfterWin_RotateTap_DoesNotWork()
        {
            var slot = Spawn(SlotSmallPath, new Vector3(0f, 1f, -6f), 0f)
                .GetComponent<PipeSlotController>();
            Assert.IsNotNull(slot);
            SetRotationDuration(slot, 1f);

            var pipe = Spawn(PipeSmallPath, new Vector3(0f, 1f, -12f), 90f)
                .GetComponent<DraggablePipeController>();
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe), "wrong-rotation placement must be accepted");
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);

            var tap = slot.transform.Find("TapCollider");
            Assert.IsNotNull(tap, "TapCollider child must exist");
            var tapCol = tap.GetComponent<BoxCollider>();
            Assert.IsNotNull(tapCol);

            var input = CreateInputHarness();
            var factory = CreateFactory();
            CreateFlow(factory, null, input, null, 0f);

            factory.SetOnline();
            yield return WaitUntil(() => input.InputBlocked, 5f,
                "game flow must block input on victory");

            yield return PressAt(tapCol.bounds.center);
            yield return null;

            Assert.IsFalse(slot.IsRotating, "rotate tap must not start after the win");
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State,
                "slot state must not change after the win");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator AfterWin_Tutorial_NotReactivated()
        {
            var pipe = Spawn(PipeSmallPath, new Vector3(0f, 1f, -6f), 0f)
                .GetComponent<DraggablePipeController>();
            var slot = Spawn(SlotSmallPath, new Vector3(3f, 1f, -6f), 0f)
                .GetComponent<PipeSlotController>();

            var tutGo = new GameObject("S10_Tutorial");
            tutGo.SetActive(false);
            spawned.Add(tutGo);
            var tutorial = tutGo.AddComponent<TutorialController>();
            var so = new SerializedObject(tutorial);
            so.FindProperty("tutorialPipe").objectReferenceValue = pipe;
            so.FindProperty("tutorialSlot").objectReferenceValue = slot;
            so.ApplyModifiedPropertiesWithoutUndo();
            tutGo.SetActive(true);

            tutorial.InitializeTutorial();
            Assert.AreEqual(TutorialStep.HighlightPipe, tutorial.CurrentStep);
            Assert.IsTrue(pipe.Visual.IsTutorialOverlayEnabled);

            var factory = CreateFactory();
            CreateFlow(factory, null, null, tutorial, 0f);

            factory.SetOnline();
            yield return WaitUntil(() => tutorial.CurrentStep == TutorialStep.None, 5f,
                "tutorial must be disabled on victory");

            Assert.IsFalse(pipe.Visual.IsTutorialOverlayEnabled, "pipe overlay must be cleared on win");
            Assert.IsFalse(tutorial.IsSubscribed, "tutorial must unsubscribe on win");

            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            pipe.EndDragWithoutPlacement();
            slot.ResetSlot();
            yield return null;

            Assert.AreEqual(TutorialStep.None, tutorial.CurrentStep,
                "late pipe/slot events must not reactivate the tutorial after the win");
            Assert.IsFalse(pipe.Visual.IsTutorialOverlayEnabled,
                "pipe overlay must stay off after the win");
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled,
                "slot overlay must stay off after the win");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Continue_Event_FiresOncePerPress()
        {
            var factory = CreateFactory();
            var ui = CreateUI();
            var flow = CreateFlow(factory, ui, null, null, 0f);

            int uiContinues = 0;
            int flowContinues = 0;
            ui.ContinueRequested += () => uiContinues++;
            flow.ContinueRequested += () => flowContinues++;

            factory.SetOnline();
            yield return WaitUntil(() => ui.IsVisible, 5f, "CTA must be visible after the win");
            Assert.IsNotNull(ui.PrimaryButton, "primary CTA button must be wired");

            ui.PrimaryButton.onClick.Invoke();
            Assert.AreEqual(1, uiContinues, "ContinueRequested must fire once per press");
            Assert.AreEqual(1, flowContinues, "game flow must forward ContinueRequested");

            ui.PrimaryButton.onClick.Invoke();
            yield return null;

            Assert.AreEqual(1, uiContinues, "repeated presses must not duplicate ContinueRequested");
            Assert.AreEqual(1, flowContinues, "repeated presses must not duplicate the forwarded event");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator MissingOptionalUIRefs_NoException()
        {
            var factory = CreateFactory();
            var flow = CreateFlow(factory, null, null, null, 0f);

            int winEvents = 0;
            flow.WinTriggered += () => winEvents++;

            factory.SetOnline();
            yield return null;
            yield return null;

            LogAssert.NoUnexpectedReceived();

            Assert.AreEqual(GameFlowState.Completed, flow.State,
                "flow must complete without UI/input/tutorial refs");
            Assert.AreEqual(1, winEvents);
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Lifecycle_DisableEnable_NoDuplicateSubscriptions()
        {
            var factory = CreateFactory();
            var ui = CreateUI();
            var flow = CreateFlow(factory, ui, null, null, 0.5f);

            flow.gameObject.SetActive(false);
            flow.gameObject.SetActive(true);

            Assert.AreEqual(1, HandlerCount(factory, "FactoryOnline"),
                "no duplicate FactoryOnline subscription after lifecycle toggle");
            Assert.AreEqual(1, HandlerCount(ui, "ContinueRequested"),
                "no duplicate ContinueRequested subscription after lifecycle toggle");

            int winEvents = 0;
            flow.WinTriggered += () => winEvents++;

            factory.SetOnline();
            Assert.AreEqual(1, flow.WinTriggerCount, "win must trigger once across the toggle");

            flow.gameObject.SetActive(false);
            yield return null;
            flow.gameObject.SetActive(true);

            yield return WaitUntil(() => flow.State == GameFlowState.Completed, 5f,
                "pending completion must resume after re-enable");
            Assert.IsTrue(ui.IsVisible, "UI must show after the resumed completion");
            Assert.AreEqual(1, flow.WinTriggerCount, "re-enable must not re-trigger the win");
            Assert.AreEqual(1, winEvents, "re-enable must not re-fire WinTriggered");
            Assert.AreEqual(1, HandlerCount(factory, "FactoryOnline"),
                "FactoryOnline subscription count must stay one");
        }

        [UnityTest]
        [Timeout(25000)]
        public IEnumerator Completed_DoesNotAutoRestart_OnFactoryOffline()
        {
            var factory = CreateFactory();
            var ui = CreateUI();
            var input = CreateInputHarness();
            var flow = CreateFlow(factory, ui, input, null, 0f);

            factory.SetOnline();
            yield return WaitUntil(() => flow.State == GameFlowState.Completed, 5f,
                "flow must reach Completed after the win");

            factory.SetOffline();
            yield return null;
            yield return null;

            Assert.AreEqual(GameFlowState.Completed, flow.State,
                "factory going offline must not restart the gameplay state");
            Assert.IsTrue(input.InputBlocked, "input must stay frozen in Completed");
            Assert.IsTrue(ui.IsVisible, "completion UI must stay visible in Completed");
            Assert.AreEqual(1, flow.WinTriggerCount);

            factory.SetOnline();
            yield return null;

            Assert.AreEqual(GameFlowState.Completed, flow.State,
                "late FactoryOnline must not restart the flow");
            Assert.AreEqual(1, flow.WinTriggerCount);
        }
    }
}
