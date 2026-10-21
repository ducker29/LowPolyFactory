using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using Unity.Cinemachine;

namespace FactoryPipePower
{
    public enum FactoryTutorialPhase
    {
        None,
        IntroOverview,
        BlendingToGameplay,
        WaitingForIncomingPower,
        PromptPickFirstPipe,
        PromptPlaceFirstPipe,
        PromptRotateFirstPipe,
        WaitingFirstPipePower,
        FirstPipeSuccess,
        GameplayUnlocked,
        BlendingToFinalOverview,
        WaitingForOutgoingPower,
        WaitingForFactoryStartup,
        Completed
    }

    [DisallowMultipleComponent]
    public class FactoryTutorialController : MonoBehaviour, ITutorialInputGate
    {
        [Header("Cinemachine")]
        [SerializeField] CinemachineBrain cameraBrain;
        [SerializeField] CinemachineCamera overviewCamera;
        [SerializeField] CinemachineCamera gameplayCamera;
        [SerializeField] CinemachineCamera firstPipeCamera;
        [SerializeField] CinemachineCamera firstChargingCamera;
        [SerializeField] float blendDuration = 2f;
        [SerializeField] float blendTimeout = 15f;
        [SerializeField] int overviewPriority = 20;
        [SerializeField] int gameplayPriority = 10;

        [Header("Systems")]
        [SerializeField] PointerInputController pointerInput;
        [SerializeField] NarrativePowerSequence narrativeSequence;
        [SerializeField] StartPowerNode startNode;
        [SerializeField] EndPowerNode endNode;
        [SerializeField] FactoryPowerController factoryPowerController;
        [SerializeField] SmokePipeIndicatorSequence indicatorSequence;
        [SerializeField] FactoryChimneySmokeController chimneySmoke;
        [SerializeField] PipeSlotRegistry slotRegistry;

        [Header("Tutorial Targets")]
        [SerializeField] DraggablePipeController tutorialPipe;
        [SerializeField] PipeSlotController tutorialSlot;

        [Header("UI")]
        [SerializeField] Canvas tutorialCanvas;
        [SerializeField] Text messageText;
        [SerializeField] Image handImage;
        [SerializeField] RectTransform handMessageGroup;
        [SerializeField] Image messageBackdrop;
        [SerializeField] float backdropPadding = 10f;
        [SerializeField] Vector2 handAnchorOffset = new Vector2(0f, 0f);
        [SerializeField] float textUnderHandOffset = 30f;
        [SerializeField] float textCenterScreenOffset = 50f;
        [SerializeField] float pickHandLiftPx = 100f;

        [Header("Hand Pulse")]
        [SerializeField] float handPulseMin = 0.96f;
        [SerializeField] float handPulseMax = 1.04f;
        [SerializeField] float handPulsePeriod = 1f;

        const string IntroText = "Подключи фабрику к питанию";
        const string PickText = "Подними трубу";
        const string PlaceText = "Поставь трубу в слот";
        const string RotateText = "Поверни трубу";
        const string SuccessText = "Подключи остальные трубы";
        const string FinalText = "Поздравляем! Фабрика теперь работает";

        FactoryTutorialPhase phase = FactoryTutorialPhase.None;
        bool initialized;
        bool subscribed;

        Coroutine blendRoutine;
        Coroutine smokeWaitRoutine;
        Transform handTarget;

        public FactoryTutorialPhase Phase => phase;
        public bool IsInitialized => initialized;
        public bool IsGateActive => phase != FactoryTutorialPhase.None
            && phase != FactoryTutorialPhase.GameplayUnlocked
            && phase != FactoryTutorialPhase.Completed;

        public event Action<FactoryTutorialPhase> PhaseChanged;

        void Awake()
        {
            if (tutorialCanvas != null)
                tutorialCanvas.gameObject.SetActive(true);

            if (handImage != null)
                handImage.rectTransform.pivot = new Vector2(0f, 1f);

            if (messageBackdrop != null)
                messageBackdrop.gameObject.SetActive(false);
        }

        void OnDisable()
        {
            CleanupRuntimeState();
        }

        void OnDestroy()
        {
            Unsubscribe();
        }

        void Update()
        {
            UpdateHandPosition();
            UpdateHandPulse();
        }

        public void InitializeTutorial()
        {
            if (initialized)
                return;

            StopAllRuntimeRoutines();
            Unsubscribe();
            ClearOverlays();
            HideHand();
            ClearMessage();

            ApplyBlendSettings();
            ApplyCameraPhase(FactoryTutorialPhase.IntroOverview);

            if (pointerInput != null)
                pointerInput.SetTutorialGate(this);

            Subscribe();
            initialized = true;
            SetPhase(FactoryTutorialPhase.IntroOverview);
        }

        public void SetPhase(FactoryTutorialPhase next)
        {
            if (phase == next)
                return;

            FactoryTutorialPhase previous = phase;
            phase = next;

            StopBlendRoutine();
            ApplyCameraPhase(next);
            ApplyHighlights(next);
            ApplySlotHighlightFilter(next);
            ApplyHand(next);
            ApplyGate(next);

            switch (next)
            {
                case FactoryTutorialPhase.IntroOverview:
                    ShowText(IntroText);
                    break;
                case FactoryTutorialPhase.BlendingToGameplay:
                    ShowText(null);
                    blendRoutine = StartCoroutine(RunBlendToGameplay());
                    break;
                case FactoryTutorialPhase.WaitingForIncomingPower:
                    ShowText(null);
                    TryBeginLeftChain();
                    break;
                case FactoryTutorialPhase.PromptPickFirstPipe:
                    ShowText(PickText);
                    break;
                case FactoryTutorialPhase.PromptPlaceFirstPipe:
                    ShowText(PlaceText);
                    break;
                case FactoryTutorialPhase.PromptRotateFirstPipe:
                    ShowText(RotateText);
                    break;
                case FactoryTutorialPhase.WaitingFirstPipePower:
                    ShowText(null);
                    break;
                case FactoryTutorialPhase.FirstPipeSuccess:
                    ShowText(SuccessText);
                    break;
                case FactoryTutorialPhase.GameplayUnlocked:
                    ShowText(null);
                    UnsubscribeInteractive();
                    break;
                case FactoryTutorialPhase.BlendingToFinalOverview:
                    ShowText(null);
                    blendRoutine = StartCoroutine(RunBlendToOverviewRoutine(
                        () => SetPhase(FactoryTutorialPhase.WaitingForOutgoingPower)));
                    break;
                case FactoryTutorialPhase.WaitingForOutgoingPower:
                    ShowText(null);
                    TryBeginRightChain();
                    break;
                case FactoryTutorialPhase.WaitingForFactoryStartup:
                    ShowText(null);
                    break;
                case FactoryTutorialPhase.Completed:
                    ShowText(FinalText);
                    HideHand();
                    ClearOverlays();
                    break;
            }

            if (previous != next)
                PhaseChanged?.Invoke(next);
        }

        public void HideMessage()
        {
            ClearMessage();
        }

        public bool TryConsumeAdvancePress(Vector2 screenPosition)
        {
            if (!IsGateActive)
                return false;

            if (phase == FactoryTutorialPhase.IntroOverview)
            {
                SetPhase(FactoryTutorialPhase.BlendingToGameplay);
                return true;
            }

            if (phase == FactoryTutorialPhase.FirstPipeSuccess)
            {
                SetPhase(FactoryTutorialPhase.GameplayUnlocked);
                return true;
            }

            return false;
        }

        public bool IsPipeAllowed(DraggablePipeController pipe)
        {
            if (!IsGateActive)
                return true;

            return phase == FactoryTutorialPhase.PromptPickFirstPipe
                && pipe != null
                && pipe == tutorialPipe;
        }

        public bool IsSlotTapAllowed(PipeSlotController slot)
        {
            if (!IsGateActive)
                return true;

            return phase == FactoryTutorialPhase.PromptRotateFirstPipe
                && slot != null
                && slot == tutorialSlot;
        }

        void Subscribe()
        {
            if (subscribed)
                return;

            if (startNode != null)
                startNode.Powered += HandleStartNodePowered;

            if (endNode != null)
                endNode.Powered += HandleEndNodePowered;

            if (factoryPowerController != null)
                factoryPowerController.FactoryOnline += HandleFactoryOnline;

            if (indicatorSequence != null)
                indicatorSequence.SequenceCompleted += HandleIndicatorSequenceCompleted;

            subscribed = true;
        }

        void Unsubscribe()
        {
            if (!subscribed)
                return;

            if (startNode != null)
                startNode.Powered -= HandleStartNodePowered;

            if (endNode != null)
                endNode.Powered -= HandleEndNodePowered;

            if (factoryPowerController != null)
                factoryPowerController.FactoryOnline -= HandleFactoryOnline;

            if (indicatorSequence != null)
                indicatorSequence.SequenceCompleted -= HandleIndicatorSequenceCompleted;

            UnsubscribeInteractive();
            subscribed = false;
        }

        bool interactiveSubscribed;

        void SubscribeInteractive()
        {
            if (interactiveSubscribed)
                return;

            if (tutorialPipe != null)
            {
                tutorialPipe.DragStarted += HandleTutorialPipeDragStarted;
                tutorialPipe.ReturnedToStock += HandleTutorialPipeReturnedToStock;
            }

            if (tutorialSlot != null)
                tutorialSlot.StateChanged += HandleTutorialSlotStateChanged;

            interactiveSubscribed = true;
        }

        void UnsubscribeInteractive()
        {
            if (!interactiveSubscribed)
                return;

            if (tutorialPipe != null)
            {
                tutorialPipe.DragStarted -= HandleTutorialPipeDragStarted;
                tutorialPipe.ReturnedToStock -= HandleTutorialPipeReturnedToStock;
            }

            if (tutorialSlot != null)
                tutorialSlot.StateChanged -= HandleTutorialSlotStateChanged;

            interactiveSubscribed = false;
        }

        void HandleStartNodePowered(StartPowerNode node)
        {
            if (phase != FactoryTutorialPhase.WaitingForIncomingPower)
                return;

            SubscribeInteractive();
            SetPhase(FactoryTutorialPhase.PromptPickFirstPipe);
        }

        void HandleTutorialPipeDragStarted(DraggablePipeController pipe)
        {
            if (pipe != tutorialPipe)
                return;
            if (phase != FactoryTutorialPhase.PromptPickFirstPipe)
                return;

            SetPhase(FactoryTutorialPhase.PromptPlaceFirstPipe);
        }

        void HandleTutorialPipeReturnedToStock(DraggablePipeController pipe)
        {
            if (pipe != tutorialPipe)
                return;
            if (phase != FactoryTutorialPhase.PromptPlaceFirstPipe)
                return;

            SetPhase(FactoryTutorialPhase.PromptPickFirstPipe);
        }

        void HandleTutorialSlotStateChanged(PipeSlotController slot, PipeSlotState newState)
        {
            if (slot != tutorialSlot)
                return;
            if (slot.AcceptedPipe != tutorialPipe)
                return;

            if (phase == FactoryTutorialPhase.PromptPlaceFirstPipe)
            {
                if (newState == PipeSlotState.OccupiedWrongRotation)
                    SetPhase(FactoryTutorialPhase.PromptRotateFirstPipe);
                else if (newState == PipeSlotState.OccupiedAligned
                    || newState == PipeSlotState.Charging
                    || newState == PipeSlotState.Powered)
                    SetPhase(FactoryTutorialPhase.WaitingFirstPipePower);
            }

            if (phase == FactoryTutorialPhase.PromptRotateFirstPipe
                || phase == FactoryTutorialPhase.WaitingFirstPipePower)
            {
                if (newState == PipeSlotState.Powered)
                    SetPhase(FactoryTutorialPhase.FirstPipeSuccess);
            }
        }

        void HandleEndNodePowered(EndPowerNode node)
        {
            if (phase != FactoryTutorialPhase.GameplayUnlocked)
                return;

            SetPhase(FactoryTutorialPhase.BlendingToFinalOverview);
        }

        void HandleFactoryOnline()
        {
            if (phase != FactoryTutorialPhase.WaitingForOutgoingPower)
                return;

            SetPhase(FactoryTutorialPhase.WaitingForFactoryStartup);
        }

        void HandleIndicatorSequenceCompleted()
        {
            if (phase != FactoryTutorialPhase.WaitingForFactoryStartup)
                return;

            StopSmokeWaitRoutine();
            smokeWaitRoutine = StartCoroutine(RunWaitForSmokeThenComplete());
        }

        IEnumerator RunWaitForSmokeThenComplete()
        {
            float elapsed = 0f;
            float timeout = Mathf.Max(blendTimeout, 2f);

            while (elapsed < timeout)
            {
                if (chimneySmoke == null || chimneySmoke.IsEmitting)
                {
                    smokeWaitRoutine = null;
                    SetPhase(FactoryTutorialPhase.Completed);
                    yield break;
                }

                elapsed += Time.deltaTime;
                yield return null;
            }

            Debug.LogWarning(
                "[FactoryTutorialController] Smoke did not start in time; completing tutorial anyway.",
                this);
            smokeWaitRoutine = null;
            SetPhase(FactoryTutorialPhase.Completed);
        }

        void TryBeginLeftChain()
        {
            if (narrativeSequence == null)
                return;
            if (narrativeSequence.LeftRunning)
                return;

            narrativeSequence.BeginLeftChain();
        }

        void TryBeginRightChain()
        {
            if (narrativeSequence == null)
                return;
            if (narrativeSequence.RightStarted)
                return;

            narrativeSequence.BeginRightChain();
        }

        void ApplyBlendSettings()
        {
            if (cameraBrain == null)
                return;

            cameraBrain.DefaultBlend = new CinemachineBlendDefinition(
                CinemachineBlendDefinition.Styles.EaseInOut,
                blendDuration);
        }

        void ApplyCameraPhase(FactoryTutorialPhase target)
        {
            bool overviewActive = target == FactoryTutorialPhase.None
                || target == FactoryTutorialPhase.IntroOverview
                || target == FactoryTutorialPhase.BlendingToFinalOverview
                || target == FactoryTutorialPhase.WaitingForOutgoingPower
                || target == FactoryTutorialPhase.WaitingForFactoryStartup
                || target == FactoryTutorialPhase.Completed;

            bool firstChargingActive = target == FactoryTutorialPhase.BlendingToGameplay
                || target == FactoryTutorialPhase.WaitingForIncomingPower;

            bool firstPipeActive = !firstChargingActive
                && (target == FactoryTutorialPhase.PromptPickFirstPipe
                    || target == FactoryTutorialPhase.PromptPlaceFirstPipe
                    || target == FactoryTutorialPhase.PromptRotateFirstPipe
                    || target == FactoryTutorialPhase.WaitingFirstPipePower);

            SetCameraPriorities(overviewActive, firstChargingActive, firstPipeActive);
        }

        void SetCameraPriorities(bool overviewIsLeading, bool firstChargingIsLeading, bool firstPipeIsLeading)
        {
            int trailingPriority = gameplayPriority - 1;

            if (overviewCamera != null)
                overviewCamera.Priority.Value = overviewIsLeading ? overviewPriority : trailingPriority;

            bool chargingLive = !overviewIsLeading && firstChargingIsLeading && firstChargingCamera != null;
            if (firstChargingCamera != null)
                firstChargingCamera.Priority.Value = chargingLive ? gameplayPriority : trailingPriority;

            bool pipeLive = !overviewIsLeading && !chargingLive && firstPipeIsLeading && firstPipeCamera != null;
            if (firstPipeCamera != null)
                firstPipeCamera.Priority.Value = pipeLive ? gameplayPriority : trailingPriority;

            bool gameplayLeading = !overviewIsLeading && !chargingLive && !pipeLive;
            if (gameplayCamera != null)
                gameplayCamera.Priority.Value = gameplayLeading ? gameplayPriority : trailingPriority;
        }

        IEnumerator RunBlendToGameplay()
        {
            CinemachineCamera blendTarget = firstChargingCamera != null ? firstChargingCamera : gameplayCamera;
            yield return RunBlendAndWait(blendTarget);
            blendRoutine = null;

            if (phase == FactoryTutorialPhase.BlendingToGameplay)
                SetPhase(FactoryTutorialPhase.WaitingForIncomingPower);
        }

        IEnumerator RunBlendToOverviewRoutine(Action onBlendFinished)
        {
            yield return RunBlendAndWait(overviewCamera);
            blendRoutine = null;
            onBlendFinished?.Invoke();
        }

        IEnumerator RunBlendAndWait(CinemachineCamera target)
        {
            if (cameraBrain == null || target == null || overviewCamera == null || gameplayCamera == null)
            {
                Debug.LogWarning(
                    "[FactoryTutorialController] Cinemachine references are incomplete; skipping blend wait.",
                    this);
                yield break;
            }

            yield return null;
            yield return null;

            float elapsed = 0f;
            float timeout = Mathf.Max(blendTimeout, blendDuration + 1f);

            while (elapsed < timeout)
            {
                bool targetLive = ReferenceEquals(cameraBrain.ActiveVirtualCamera, target);
                if (targetLive && !cameraBrain.IsBlending)
                    yield break;

                elapsed += Time.deltaTime;
                yield return null;
            }

            Debug.LogWarning(
                $"[FactoryTutorialController] Blend toward '{target.name}' did not finish within {timeout:0.0}s; continuing.",
                this);
        }

        void ApplyHighlights(FactoryTutorialPhase target)
        {
            bool pipeHighlighted = target == FactoryTutorialPhase.PromptPickFirstPipe;
            bool slotHighlighted = target == FactoryTutorialPhase.PromptPlaceFirstPipe
                || target == FactoryTutorialPhase.PromptRotateFirstPipe;

            if (tutorialPipe != null && tutorialPipe.Visual != null)
                tutorialPipe.Visual.SetTutorialOverlay(pipeHighlighted);

            if (tutorialSlot != null && tutorialSlot.Visual != null)
                tutorialSlot.Visual.SetTutorialOverlay(slotHighlighted);
        }

        void ApplySlotHighlightFilter(FactoryTutorialPhase target)
        {
            if (slotRegistry == null)
                return;

            bool restrict = target == FactoryTutorialPhase.PromptPickFirstPipe
                || target == FactoryTutorialPhase.PromptPlaceFirstPipe
                || target == FactoryTutorialPhase.PromptRotateFirstPipe;

            slotRegistry.HoverFilter = restrict ? tutorialSlot : null;
            slotRegistry.AcceptFilter = restrict ? tutorialSlot : null;
        }

        void ApplyHand(FactoryTutorialPhase target)
        {
            switch (target)
            {
                case FactoryTutorialPhase.PromptPickFirstPipe:
                    handTarget = tutorialPipe != null ? tutorialPipe.transform : null;
                    break;
                case FactoryTutorialPhase.PromptPlaceFirstPipe:
                case FactoryTutorialPhase.PromptRotateFirstPipe:
                    handTarget = tutorialSlot != null ? tutorialSlot.transform : null;
                    break;
                default:
                    handTarget = null;
                    break;
            }

            if (handTarget == null)
                HideHand();
        }

        void ApplyGate(FactoryTutorialPhase target)
        {
            if (pointerInput == null)
                return;

            if (target == FactoryTutorialPhase.GameplayUnlocked || target == FactoryTutorialPhase.Completed)
                pointerInput.SetTutorialGate(null);
        }

        void UpdateHandPosition()
        {
            if (handImage == null)
                return;

            if (handTarget == null || !handTarget.gameObject.activeInHierarchy)
            {
                HideHand();
                return;
            }

            Camera outputCamera = cameraBrain != null ? cameraBrain.OutputCamera : null;
            if (outputCamera == null)
                outputCamera = Camera.main;

            if (outputCamera == null)
            {
                HideHand();
                return;
            }

            if (!TryGetBottomScreenPoint(handTarget, outputCamera, out Vector2 screenPoint))
            {
                HideHand();
                return;
            }

            RectTransform parent = tutorialCanvas != null
                ? tutorialCanvas.rootCanvas.transform as RectTransform
                : handImage.rectTransform.parent as RectTransform;
            if (parent == null)
            {
                HideHand();
                return;
            }

            Camera uiCamera = null;
            if (tutorialCanvas != null && tutorialCanvas.renderMode == RenderMode.ScreenSpaceCamera)
                uiCamera = tutorialCanvas.worldCamera;

            if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
                    parent, screenPoint, uiCamera, out Vector2 localPoint))
            {
                handImage.gameObject.SetActive(true);
                if (handMessageGroup != null)
                {
                    handImage.rectTransform.anchoredPosition = Vector2.zero;
                    handMessageGroup.anchoredPosition = localPoint + MessageHandOffset();
                }
                else
                {
                    handImage.rectTransform.anchoredPosition = localPoint + MessageHandOffset();
                }
            }
            else
            {
                HideHand();
            }
        }

        static bool TryGetBottomScreenPoint(Transform target, Camera cam, out Vector2 screenPoint)
        {
            screenPoint = default;

            float minX = float.MaxValue;
            float maxX = float.MinValue;
            float minY = float.MaxValue;
            float maxY = float.MinValue;
            bool has = false;

            foreach (Renderer r in target.GetComponentsInChildren<Renderer>(false))
            {
                if (r is ParticleSystemRenderer)
                    continue;
                if (!r.enabled)
                    continue;

                Bounds b = r.bounds;
                for (int i = 0; i < 8; i++)
                {
                    Vector3 corner = new Vector3(
                        (i & 1) == 0 ? b.min.x : b.max.x,
                        (i & 2) == 0 ? b.min.y : b.max.y,
                        (i & 4) == 0 ? b.min.z : b.max.z);

                    Vector3 sp = cam.WorldToScreenPoint(corner);
                    if (sp.z <= 0f)
                        continue;

                    if (sp.x < minX) minX = sp.x;
                    if (sp.x > maxX) maxX = sp.x;
                    if (sp.y < minY) minY = sp.y;
                    if (sp.y > maxY) maxY = sp.y;
                    has = true;
                }
            }

            if (!has)
                return false;

            screenPoint = new Vector2((minX + maxX) * 0.5f, minY);
            return true;
        }

        void UpdateHandPulse()
        {
            if (handImage == null)
                return;

            if (!handImage.gameObject.activeSelf)
            {
                if (handImage.rectTransform.localScale != Vector3.one)
                    handImage.rectTransform.localScale = Vector3.one;
                return;
            }

            float period = Mathf.Max(0.01f, handPulsePeriod);
            float t = Mathf.PingPong(Time.unscaledTime, period) / period;
            float sine01 = 0.5f - 0.5f * Mathf.Cos(t * Mathf.PI * 2f);
            float multiplier = Mathf.Lerp(handPulseMin, handPulseMax, sine01);
            handImage.rectTransform.localScale = new Vector3(multiplier, multiplier, 1f);
        }

        void HideHand()
        {
            if (handImage != null)
            {
                handImage.gameObject.SetActive(false);
                handImage.rectTransform.localScale = Vector3.one;
            }
        }

        Vector2 MessageHandOffset()
        {
            Vector2 offset = handAnchorOffset;
            if (phase == FactoryTutorialPhase.PromptPickFirstPipe && pickHandLiftPx != 0f)
                offset.y += CanvasPxToUnits(pickHandLiftPx);
            return offset;
        }

        float CanvasPxToUnits(float pixels)
        {
            float scale = tutorialCanvas != null ? Mathf.Abs(tutorialCanvas.transform.localScale.x) : 1f;
            return scale > 0.0001f ? pixels / scale : pixels;
        }

        void ApplyMessageLayout()
        {
            if (messageText == null || handImage == null)
                return;

            RectTransform textRect = messageText.rectTransform;
            RectTransform handRect = handImage.rectTransform;
            bool underHand = handTarget != null;

            if (handMessageGroup != null)
            {
                if (underHand)
                {
                    textRect.anchoredPosition = new Vector2(
                        handRect.rect.width * 0.5f,
                        -handRect.rect.height - textUnderHandOffset);
                }
                else
                {
                    RectTransform canvasRect = handMessageGroup.parent as RectTransform;
                    if (canvasRect != null)
                    {
                        handMessageGroup.anchoredPosition =
                            canvasRect.rect.center + new Vector2(0f, -textCenterScreenOffset);
                    }
                    textRect.anchoredPosition = Vector2.zero;
                }
                return;
            }

            if (underHand)
            {
                textRect.anchoredPosition = handRect.anchoredPosition
                    + new Vector2(handRect.rect.width * 0.5f, -handRect.rect.height - textUnderHandOffset);
                return;
            }

            RectTransform parent = textRect.parent as RectTransform;
            if (parent != null)
                textRect.anchoredPosition = parent.rect.center + new Vector2(0f, -textCenterScreenOffset);
        }

        void ShowText(string content)
        {
            if (messageText == null)
                return;

            if (string.IsNullOrEmpty(content))
            {
                messageText.text = string.Empty;
                messageText.gameObject.SetActive(false);
                SetBackdropVisible(false);
                return;
            }

            messageText.gameObject.SetActive(true);
            messageText.text = content;
            ApplyMessageLayout();
            FitBackdropToText();
        }

        void ClearMessage()
        {
            if (messageText == null)
                return;

            messageText.text = string.Empty;
            messageText.gameObject.SetActive(false);
            SetBackdropVisible(false);
        }

        void SetBackdropVisible(bool visible)
        {
            if (messageBackdrop == null)
                return;

            messageBackdrop.gameObject.SetActive(visible);
        }

        void FitBackdropToText()
        {
            if (messageBackdrop == null || messageText == null)
                return;

            RectTransform textRect = messageText.rectTransform;
            float wrapWidth = Mathf.Max(1f, textRect.rect.width);

            var settings = messageText.GetGenerationSettings(new Vector2(wrapWidth, 0f));
            var generator = messageText.cachedTextGenerator;
            generator.Populate(messageText.text, settings);

            float scaleFactor = Mathf.Max(0.0001f, settings.scaleFactor);

            float contentWidth = 0f;
            if (generator.characterCount > 0)
            {
                float minX = float.MaxValue;
                float maxX = float.MinValue;
                foreach (UICharInfo info in generator.characters)
                {
                    if (info.cursorPos.x < minX)
                        minX = info.cursorPos.x;
                    float right = info.cursorPos.x + info.charWidth;
                    if (right > maxX)
                        maxX = right;
                }
                contentWidth = (maxX - minX) / scaleFactor;
            }

            float contentHeight = 0f;
            int lineCount = generator.lineCount;
            if (lineCount > 0)
            {
                var lines = generator.lines;
                contentHeight = (lines[0].topY - lines[lineCount - 1].topY + lines[lineCount - 1].height)
                    / scaleFactor;
            }

            if (contentWidth <= 0f || contentHeight <= 0f)
            {
                SetBackdropVisible(false);
                return;
            }

            float width = contentWidth + backdropPadding * 2f;
            float height = contentHeight + backdropPadding * 2f;

            RectTransform backdropRect = messageBackdrop.rectTransform;
            int backdropIndex = backdropRect.GetSiblingIndex();
            int textIndex = textRect.GetSiblingIndex();
            if (backdropIndex > textIndex)
                backdropRect.SetSiblingIndex(textIndex);
            backdropRect.anchorMin = textRect.anchorMin;
            backdropRect.anchorMax = textRect.anchorMax;
            backdropRect.pivot = new Vector2(0.5f, 1f);
            backdropRect.sizeDelta = new Vector2(width, height);
            backdropRect.anchoredPosition = textRect.anchoredPosition + new Vector2(0f, backdropPadding);

            SetBackdropVisible(true);
        }

        void ClearOverlays()
        {
            if (tutorialPipe != null && tutorialPipe.Visual != null)
                tutorialPipe.Visual.SetTutorialOverlay(false);

            if (tutorialSlot != null && tutorialSlot.Visual != null)
                tutorialSlot.Visual.SetTutorialOverlay(false);
        }

        void StopBlendRoutine()
        {
            if (blendRoutine != null)
            {
                StopCoroutine(blendRoutine);
                blendRoutine = null;
            }
        }

        void StopSmokeWaitRoutine()
        {
            if (smokeWaitRoutine != null)
            {
                StopCoroutine(smokeWaitRoutine);
                smokeWaitRoutine = null;
            }
        }

        void StopAllRuntimeRoutines()
        {
            StopBlendRoutine();
            StopSmokeWaitRoutine();
        }

        void CleanupRuntimeState()
        {
            StopAllRuntimeRoutines();
            Unsubscribe();
            ClearOverlays();
            HideHand();
            handTarget = null;

            if (slotRegistry != null)
            {
                slotRegistry.HoverFilter = null;
                slotRegistry.AcceptFilter = null;
            }
        }
    }
}
