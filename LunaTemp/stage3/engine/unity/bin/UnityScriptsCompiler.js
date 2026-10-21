if ( TRACE ) { TRACE( JSON.parse( '["FactoryPipePower.CompletedUI#IsVisible#get","FactoryPipePower.CompletedUI#init","FactoryPipePower.CompletedUI#Awake","FactoryPipePower.CompletedUI#Update","FactoryPipePower.CompletedUI#Show","FactoryPipePower.CompletedUI#Hide","FactoryPipePower.CompletedUI#UpdateDownloadPulse","FactoryPipePower.CompletedUI#ResetDownloadScale","FactoryPipePower.CompletionUI#IsVisible#get","FactoryPipePower.CompletionUI#PrimaryButton#get","FactoryPipePower.CompletionUI#init","FactoryPipePower.CompletionUI#Awake","FactoryPipePower.CompletionUI#OnDestroy","FactoryPipePower.CompletionUI#Show","FactoryPipePower.CompletionUI#Hide","FactoryPipePower.CompletionUI#PressPrimary","FactoryPipePower.CompletionUI#BindPrimary","FactoryPipePower.CompletionUI#UnbindPrimary","FactoryPipePower.DraggablePipeController#DragBlockMask#get","FactoryPipePower.DraggablePipeController#Spec#get","FactoryPipePower.DraggablePipeController#State#get","FactoryPipePower.DraggablePipeController#WorldYaw#get","FactoryPipePower.DraggablePipeController#IsInteractable#get","FactoryPipePower.DraggablePipeController#DragPlaneHeight#get","FactoryPipePower.DraggablePipeController#Visual#get","FactoryPipePower.DraggablePipeController#init","FactoryPipePower.DraggablePipeController#Awake","FactoryPipePower.DraggablePipeController#OnDisable","FactoryPipePower.DraggablePipeController#FixedUpdate","FactoryPipePower.DraggablePipeController#BeginDrag","FactoryPipePower.DraggablePipeController#UpdateDrag","FactoryPipePower.DraggablePipeController#EndDragWithoutPlacement","FactoryPipePower.DraggablePipeController#CommitPlaced","FactoryPipePower.DraggablePipeController#ReturnRoutine","FactoryPipePower.DraggablePipeController#ApplyColliderState","FactoryPipePower.DraggablePipeController#ClampToObstacles","FactoryPipePower.DraggablePipeController#SweepClamp","FactoryPipePower.DraggablePipeController#GetDragBox","FactoryPipePower.DraggablePipeController#ApplyMovement","FactoryPipePower.DraggablePipeController#ComputeDragOffset","FactoryPipePower.DraggablePipeController#TryGetPlanePoint","FactoryPipePower.FactoryChimneySmokeController#Play","FactoryPipePower.FactoryChimneySmokeController#Stop","FactoryPipePower.FactoryChimneySmokeController#IsEmitting#get","FactoryPipePower.FactoryChimneySmokeController#OnEnable","FactoryPipePower.FactoryChimneySmokeController#Update","FactoryPipePower.FactoryChimneySmokeController#OnDisable","FactoryPipePower.FactoryChimneySmokeController#TrySubscribe","FactoryPipePower.FactoryChimneySmokeController#Unsubscribe","FactoryPipePower.FactoryChimneySmokeController#SyncToSequence","FactoryPipePower.FactoryChimneySmokeController#HandleSequenceCompleted","FactoryPipePower.FactoryChimneySmokeController#HandleFactoryOffline","FactoryPipePower.FactoryChimneySmokeController#StartEmission","FactoryPipePower.FactoryChimneySmokeController#StopEmission","FactoryPipePower.FactoryPowerController#State#get","FactoryPipePower.FactoryPowerController#IsOnline#get","FactoryPipePower.FactoryPowerController#init","FactoryPipePower.FactoryPowerController#Initialize","FactoryPipePower.FactoryPowerController#SetOffline","FactoryPipePower.FactoryPowerController#SetOnline","FactoryPipePower.FactoryPowerController#Apply","FactoryPipePower.FactoryPowerController#ApplyStateVisual","FactoryPipePower.FlowConnectorUtility#ResolveFlowEndpoints","FactoryPipePower.GameFlowController#State#get","FactoryPipePower.GameFlowController#WinTriggerCount#get","FactoryPipePower.GameFlowController#init","FactoryPipePower.GameFlowController#OnEnable","FactoryPipePower.GameFlowController#OnDisable","FactoryPipePower.GameFlowController#HandleFactoryOnline","FactoryPipePower.GameFlowController#CompleteAfterDelay","FactoryPipePower.GameFlowController#ShowCompletedScreenAfterDelay","FactoryPipePower.GameFlowController#HandleContinueRequested","FactoryPipePower.NarrativePipeSegment#Visual#get","FactoryPipePower.NarrativePipeSegment#FillDuration#get","FactoryPipePower.NarrativePipeSegment#init","FactoryPipePower.NarrativePipeSegment#ResetSegment","FactoryPipePower.NarrativePipeSegment#FillRoutine","FactoryPipePower.NarrativePipeSegment#PlayCompletionSparks","FactoryPipePower.NarrativePipeSegment#ConfigureFlow","FactoryPipePower.NarrativePowerSequence#ResetSegments","FactoryPipePower.NarrativePowerSequence#InitialDelay#get","FactoryPipePower.NarrativePowerSequence#RightStarted#get","FactoryPipePower.NarrativePowerSequence#LeftRunning#get","FactoryPipePower.NarrativePowerSequence#RightRunning#get","FactoryPipePower.NarrativePowerSequence#TutorialControlled#get","FactoryPipePower.NarrativePowerSequence#StartNode#get","FactoryPipePower.NarrativePowerSequence#EndNode#get","FactoryPipePower.NarrativePowerSequence#LeftSegments#get","FactoryPipePower.NarrativePowerSequence#RightSegments#get","FactoryPipePower.NarrativePowerSequence#init","FactoryPipePower.NarrativePowerSequence#ResetNarrative","FactoryPipePower.NarrativePowerSequence#BeginLeftChain","FactoryPipePower.NarrativePowerSequence#OnEndPowered","FactoryPipePower.NarrativePowerSequence#BeginRightChain","FactoryPipePower.NarrativePowerSequence#RunLeftChain","FactoryPipePower.NarrativePowerSequence#RunRightChain","FactoryPipePower.NarrativePowerSequence#StopRoutine","FactoryPipePower.PipeCompletionSparks#StopOne","FactoryPipePower.PipeCompletionSparks#SparksA#get","FactoryPipePower.PipeCompletionSparks#SparksB#get","FactoryPipePower.PipeCompletionSparks#HasBothReferences#get","FactoryPipePower.PipeCompletionSparks#PlayCompletion","FactoryPipePower.PipeCompletionSparks#StopAndClear","FactoryPipePower.PipeDirectionsUtility#NormalizeQuarter","FactoryPipePower.PipeDirectionsUtility#Opposite","FactoryPipePower.PipeDirectionsUtility#GetStraightOpenDirections","FactoryPipePower.PipeDirectionsUtility#GetCornerInput","FactoryPipePower.PipeDirectionsUtility#GetCornerOutput","FactoryPipePower.PipeDirectionsUtility#GetCurrentCornerGroup","FactoryPipePower.PipeDirectionsUtility#IsOpenDirection","FactoryPipePower.PipeDirectionsUtility#AreNeighboursCompatible","FactoryPipePower.PipeDirectionsUtility#TryGetDirectionVector","FactoryPipePower.PipeDirectionsUtility#TryGetStraightEndByPosition","FactoryPipePower.PipeDirectionsUtility#TryGetConsumedEndOnCurrent","FactoryPipePower.PipeDirectionsUtility#AreSegmentLinksDistinct","FactoryPipePower.PipeSlotCaptureVolume#OwnerSlot#get","FactoryPipePower.PipeSlotCaptureVolume#OnTriggerEnter","FactoryPipePower.PipeSlotRegistry#Slots#get","FactoryPipePower.PipeSlotRegistry#Count#get","FactoryPipePower.PipeSlotRegistry#ActivePipe#get","FactoryPipePower.PipeSlotRegistry#init","FactoryPipePower.PipeSlotRegistry#OnEnable","FactoryPipePower.PipeSlotRegistry#OnDisable","FactoryPipePower.PipeSlotRegistry#Register","FactoryPipePower.PipeSlotRegistry#Unregister","FactoryPipePower.PipeSlotRegistry#OnAnyDragStarted","FactoryPipePower.PipeSlotRegistry#OnAnyDragFinished","FactoryPipePower.PipeSlotRegistry#ClearHoverOnAllSlots","FactoryPipePower.PipeSpec#inherits","FactoryPipePower.PipeSpec#op_Equality","FactoryPipePower.PipeSpec#op_Inequality","FactoryPipePower.PipeSpec#getDefaultValue","FactoryPipePower.PipeSpec#ctor","FactoryPipePower.PipeSpec#equalsT","FactoryPipePower.PipeSpec#equals","FactoryPipePower.PipeSpec#getHashCode","FactoryPipePower.PipeSpec#$clone","FactoryPipePower.PipeVisualController#init","FactoryPipePower.PipeVisualController#CurrentBaseMaterial#get","FactoryPipePower.PipeVisualController#IsTutorialOverlayEnabled#get","FactoryPipePower.PipeVisualController#HasGreenRuntimeMaterial#get","FactoryPipePower.PipeVisualController#CurrentFill#get","FactoryPipePower.PipeVisualController#IsFlowConfigured#get","FactoryPipePower.PipeVisualController#FlowStartWorld#get","FactoryPipePower.PipeVisualController#FlowEndWorld#get","FactoryPipePower.PipeVisualController#FlowDirectionWorld#get","FactoryPipePower.PipeVisualController#FlowLengthWorld#get","FactoryPipePower.PipeVisualController#init","FactoryPipePower.PipeVisualController#Awake","FactoryPipePower.PipeVisualController#OnDestroy","FactoryPipePower.PipeVisualController#CaptureInitialBaseMaterial","FactoryPipePower.PipeVisualController#SetBaseMaterial","FactoryPipePower.PipeVisualController#SetTutorialOverlay","FactoryPipePower.PipeVisualController#UseGreenRuntimeMaterial","FactoryPipePower.PipeVisualController#SetFill","FactoryPipePower.PipeVisualController#ConfigureFlow","FactoryPipePower.PipeVisualController#ConfigureCornerFlow","FactoryPipePower.PipeVisualController#ResetVisual","FactoryPipePower.PipeVisualController#ApplyFlowToRuntimeMaterial","FactoryPipePower.PipeVisualController#ApplyMaterials","FactoryPipePower.PipeVisualController#ReleaseGreenRuntimeMaterial","FactoryPipePower.PointerInputController#init","FactoryPipePower.PointerInputController#ActivePipe#get","FactoryPipePower.PointerInputController#RaycastCamera#get","FactoryPipePower.PointerInputController#InputBlocked#get","FactoryPipePower.PointerInputController#TutorialGate#get","FactoryPipePower.PointerInputController#init","FactoryPipePower.PointerInputController#SetInputBlocked","FactoryPipePower.PointerInputController#SetTutorialGate","FactoryPipePower.PointerInputController#ResolveTutorialGate","FactoryPipePower.PointerInputController#Awake","FactoryPipePower.PointerInputController#OnDestroy","FactoryPipePower.PointerInputController#Update","FactoryPipePower.PointerInputController#HandlePressStarted","FactoryPipePower.PointerInputController#HandlePressCanceled","FactoryPipePower.PointerInputController#CurrentPointerPosition","FactoryPipePower.PointerInputController#HasPointerPosition","FactoryPipePower.PointerInputController#OnActivePipeCommitted","FactoryPipePower.PointerInputController#ReleaseActivePipe","FactoryPipePower.PowerChainController#IsInitialized#get","FactoryPipePower.PowerChainController#StartNode#get","FactoryPipePower.PowerChainController#EndNode#get","FactoryPipePower.PowerChainController#Slots#get","FactoryPipePower.PowerChainController#Initialize","FactoryPipePower.PowerChainController#LinkChain","FactoryPipePower.PowerChainController#FirstNodeAfterStart","FactoryPipePower.PowerChainController#LastNodeBeforeEnd","FactoryPipePower.QuarterTurnUtility#GetQuarterTurn","FactoryPipePower.QuarterTurnUtility#QuarterTurnToYaw","FactoryPipePower.QuarterTurnUtility#QuarterTurnToRotation","FactoryPipePower.QuarterTurnUtility#IsAligned","FactoryPipePower.SceneInitializer#IsInitialized#get","FactoryPipePower.SceneInitializer#Start","FactoryPipePower.SmokePipeIndicatorSequence#init","FactoryPipePower.SmokePipeIndicatorSequence#WaitUntilElapsed","FactoryPipePower.SmokePipeIndicatorSequence#IsRunning#get","FactoryPipePower.SmokePipeIndicatorSequence#IsCompleted#get","FactoryPipePower.SmokePipeIndicatorSequence#init","FactoryPipePower.SmokePipeIndicatorSequence#OnEnable","FactoryPipePower.SmokePipeIndicatorSequence#Update","FactoryPipePower.SmokePipeIndicatorSequence#OnDisable","FactoryPipePower.SmokePipeIndicatorSequence#TrySubscribeAndSync","FactoryPipePower.SmokePipeIndicatorSequence#Subscribe","FactoryPipePower.SmokePipeIndicatorSequence#Unsubscribe","FactoryPipePower.SmokePipeIndicatorSequence#SyncToFactory","FactoryPipePower.SmokePipeIndicatorSequence#HandleFactoryOnline","FactoryPipePower.SmokePipeIndicatorSequence#HandleFactoryOffline","FactoryPipePower.SmokePipeIndicatorSequence#StartSequence","FactoryPipePower.SmokePipeIndicatorSequence#StopSequence","FactoryPipePower.SmokePipeIndicatorSequence#RunSequence","FactoryPipePower.SmokePipeIndicatorSequence#ApplyStep","FactoryPipePower.SmokePipeIndicatorSequence#ApplyAll","FactoryPipePower.SmokePipeIndicatorSequence#SetSlot$1","FactoryPipePower.SmokePipeIndicatorSequence#SetSlot","FactoryPipePower.TutorialController#CurrentStep#get","FactoryPipePower.TutorialController#TutorialPipe#get","FactoryPipePower.TutorialController#TutorialSlot#get","FactoryPipePower.TutorialController#IsSubscribed#get","FactoryPipePower.TutorialController#init","FactoryPipePower.TutorialController#OnEnable","FactoryPipePower.TutorialController#OnDisable","FactoryPipePower.TutorialController#OnDestroy","FactoryPipePower.TutorialController#InitializeTutorial","FactoryPipePower.TutorialController#ResetTutorial","FactoryPipePower.TutorialController#DisableTutorial","FactoryPipePower.TutorialController#HandleDragStarted","FactoryPipePower.TutorialController#HandleReturnedToStock","FactoryPipePower.TutorialController#HandleSlotStateChanged","FactoryPipePower.TutorialController#Subscribe","FactoryPipePower.TutorialController#Unsubscribe","FactoryPipePower.TutorialController#ClearOverlays","FactoryPipePower.TutorialController#SetPipeOverlay","FactoryPipePower.TutorialController#SetSlotOverlay","FactoryPipePower.EndPowerNode#IsPowered#get","FactoryPipePower.EndPowerNode#PowerOutput#get","FactoryPipePower.EndPowerNode#State#get","FactoryPipePower.EndPowerNode#ActivationCount#get","FactoryPipePower.EndPowerNode#init","FactoryPipePower.EndPowerNode#Awake","FactoryPipePower.EndPowerNode#SetExpectedPrevious","FactoryPipePower.EndPowerNode#Initialize","FactoryPipePower.EndPowerNode#NotifyPreviousPowered","FactoryPipePower.FactoryTutorialController#init","FactoryPipePower.FactoryTutorialController#TryGetBottomScreenPoint","FactoryPipePower.FactoryTutorialController#Phase#get","FactoryPipePower.FactoryTutorialController#IsInitialized#get","FactoryPipePower.FactoryTutorialController#IsGateActive#get","FactoryPipePower.FactoryTutorialController#init","FactoryPipePower.FactoryTutorialController#Awake","FactoryPipePower.FactoryTutorialController#OnDisable","FactoryPipePower.FactoryTutorialController#OnDestroy","FactoryPipePower.FactoryTutorialController#Update","FactoryPipePower.FactoryTutorialController#InitializeTutorial","FactoryPipePower.FactoryTutorialController#SetPhase","FactoryPipePower.FactoryTutorialController#HideMessage","FactoryPipePower.FactoryTutorialController#TryConsumeAdvancePress","FactoryPipePower.FactoryTutorialController#IsPipeAllowed","FactoryPipePower.FactoryTutorialController#IsSlotTapAllowed","FactoryPipePower.FactoryTutorialController#Subscribe","FactoryPipePower.FactoryTutorialController#Unsubscribe","FactoryPipePower.FactoryTutorialController#SubscribeInteractive","FactoryPipePower.FactoryTutorialController#UnsubscribeInteractive","FactoryPipePower.FactoryTutorialController#HandleStartNodePowered","FactoryPipePower.FactoryTutorialController#HandleTutorialPipeDragStarted","FactoryPipePower.FactoryTutorialController#HandleTutorialPipeReturnedToStock","FactoryPipePower.FactoryTutorialController#HandleTutorialSlotStateChanged","FactoryPipePower.FactoryTutorialController#HandleEndNodePowered","FactoryPipePower.FactoryTutorialController#HandleFactoryOnline","FactoryPipePower.FactoryTutorialController#HandleIndicatorSequenceCompleted","FactoryPipePower.FactoryTutorialController#RunWaitForSmokeThenComplete","FactoryPipePower.FactoryTutorialController#TryBeginLeftChain","FactoryPipePower.FactoryTutorialController#TryBeginRightChain","FactoryPipePower.FactoryTutorialController#ApplyBlendSettings","FactoryPipePower.FactoryTutorialController#ApplyCameraPhase","FactoryPipePower.FactoryTutorialController#SetCameraPriorities","FactoryPipePower.FactoryTutorialController#RunBlendToGameplay","FactoryPipePower.FactoryTutorialController#RunBlendToOverviewRoutine","FactoryPipePower.FactoryTutorialController#RunBlendAndWait","FactoryPipePower.FactoryTutorialController#ApplyHighlights","FactoryPipePower.FactoryTutorialController#ApplySlotHighlightFilter","FactoryPipePower.FactoryTutorialController#ApplyHand","FactoryPipePower.FactoryTutorialController#ApplyGate","FactoryPipePower.FactoryTutorialController#UpdateHandPosition","FactoryPipePower.FactoryTutorialController#UpdateHandPulse","FactoryPipePower.FactoryTutorialController#HideHand","FactoryPipePower.FactoryTutorialController#MessageHandOffset","FactoryPipePower.FactoryTutorialController#CanvasPxToUnits","FactoryPipePower.FactoryTutorialController#ApplyMessageLayout","FactoryPipePower.FactoryTutorialController#ShowText","FactoryPipePower.FactoryTutorialController#ClearMessage","FactoryPipePower.FactoryTutorialController#SetBackdropVisible","FactoryPipePower.FactoryTutorialController#FitBackdropToText","FactoryPipePower.FactoryTutorialController#ClearOverlays","FactoryPipePower.FactoryTutorialController#StopBlendRoutine","FactoryPipePower.FactoryTutorialController#StopSmokeWaitRoutine","FactoryPipePower.FactoryTutorialController#StopAllRuntimeRoutines","FactoryPipePower.FactoryTutorialController#CleanupRuntimeState","FactoryPipePower.PipeSlotController#TryGetNeighbourOrientation","FactoryPipePower.PipeSlotController#ExpectedSpec#get","FactoryPipePower.PipeSlotController#State#get","FactoryPipePower.PipeSlotController#IsOccupied#get","FactoryPipePower.PipeSlotController#IsAligned#get","FactoryPipePower.PipeSlotController#ExpectedCornerGroup#get","FactoryPipePower.PipeSlotController#AnchorY#get","FactoryPipePower.PipeSlotController#ConnectorA#get","FactoryPipePower.PipeSlotController#ConnectorB#get","FactoryPipePower.PipeSlotController#SlotRotationGroup#get","FactoryPipePower.PipeSlotController#AcceptedPipe#get","FactoryPipePower.PipeSlotController#PlacementCommitted#get","FactoryPipePower.PipeSlotController#IsRotating#get","FactoryPipePower.PipeSlotController#Visual#get","FactoryPipePower.PipeSlotController#CompletionSparks#get","FactoryPipePower.PipeSlotController#IsPowered#get","FactoryPipePower.PipeSlotController#PreviousNode#get","FactoryPipePower.PipeSlotController#NextNode#get","FactoryPipePower.PipeSlotController#HasCharged#get","FactoryPipePower.PipeSlotController#PowerOutput#get","FactoryPipePower.PipeSlotController#init","FactoryPipePower.PipeSlotController#SetupPowerNodes","FactoryPipePower.PipeSlotController#Awake","FactoryPipePower.PipeSlotController#IsCompatible","FactoryPipePower.PipeSlotController#TryAccept","FactoryPipePower.PipeSlotController#OnPipeTriggerEnter","FactoryPipePower.PipeSlotController#TryRotateTap","FactoryPipePower.PipeSlotController#SetHoverValid","FactoryPipePower.PipeSlotController#ResetSlot","FactoryPipePower.PipeSlotController#NotifyPreviousPowered","FactoryPipePower.PipeSlotController#TryStartCharging","FactoryPipePower.PipeSlotController#AreDirectionsValid","FactoryPipePower.PipeSlotController#RevalidateLocalAndNeighbours","FactoryPipePower.PipeSlotController#RevalidateLocal","FactoryPipePower.PipeSlotController#ResetPowerState","FactoryPipePower.PipeSlotController#ChargeRoutine","FactoryPipePower.PipeSlotController#TryComputeCornerElbow","FactoryPipePower.PipeSlotController#ComputeIsAligned","FactoryPipePower.PipeSlotController#EvaluateAlignment","FactoryPipePower.PipeSlotController#RotateOneStepRoutine","FactoryPipePower.PipeSlotController#SetState","FactoryPipePower.PipeSlotController#ApplyTapColliderState","FactoryPipePower.PipeSlotController#SetTapCollidersEnabled","FactoryPipePower.PipeSlotController#ApplyStateMaterial","FactoryPipePower.StartPowerNode#IsPowered#get","FactoryPipePower.StartPowerNode#DeferPowerActivation#get","FactoryPipePower.StartPowerNode#PowerOutput#get","FactoryPipePower.StartPowerNode#NextNode#get","FactoryPipePower.StartPowerNode#Awake","FactoryPipePower.StartPowerNode#SetNextNode","FactoryPipePower.StartPowerNode#Initialize","FactoryPipePower.StartPowerNode#ProvidePower","FactoryPipePower.StartPowerNode#NotifyPreviousPowered"]' ) ); }
/**
 * @version 1.0.9791.1920
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*FactoryPipePower.CompletedUI start.*/
    Bridge.define("FactoryPipePower.CompletedUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            panelRoot: null,
            downloadImage: null,
            downloadPulseMin: 0,
            downloadPulseMax: 0,
            downloadPulsePeriod: 0
        },
        props: {
            IsVisible: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletedUI#IsVisible#get", this ); }

                    return UnityEngine.GameObject.op_Inequality(this.panelRoot, null) && this.panelRoot.activeSelf;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletedUI#init", this ); }

                this.downloadPulseMin = 0.96;
                this.downloadPulseMax = 1.04;
                this.downloadPulsePeriod = 1.0;
            }
        },
        methods: {
            /*FactoryPipePower.CompletedUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletedUI#Awake", this ); }

                this.Hide();
            },
            /*FactoryPipePower.CompletedUI.Awake end.*/

            /*FactoryPipePower.CompletedUI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletedUI#Update", this ); }

                this.UpdateDownloadPulse();
            },
            /*FactoryPipePower.CompletedUI.Update end.*/

            /*FactoryPipePower.CompletedUI.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletedUI#Show", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.panelRoot, null)) {
                    this.panelRoot.SetActive(true);
                }
            },
            /*FactoryPipePower.CompletedUI.Show end.*/

            /*FactoryPipePower.CompletedUI.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletedUI#Hide", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.panelRoot, null)) {
                    this.panelRoot.SetActive(false);
                }

                this.ResetDownloadScale();
            },
            /*FactoryPipePower.CompletedUI.Hide end.*/

            /*FactoryPipePower.CompletedUI.UpdateDownloadPulse start.*/
            UpdateDownloadPulse: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletedUI#UpdateDownloadPulse", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.downloadImage, null)) {
                    return;
                }

                if (!this.IsVisible) {
                    return;
                }

                var period = UnityEngine.Mathf.Max(0.01, this.downloadPulsePeriod);
                var t = UnityEngine.Mathf.PingPong(UnityEngine.Time.unscaledTime, period) / period;
                var sine01 = 0.5 - 0.5 * Math.cos(t * UnityEngine.Mathf.PI * 2.0);
                var multiplier = pc.math.lerp(this.downloadPulseMin, this.downloadPulseMax, sine01);
                this.downloadImage.rectTransform.localScale = new pc.Vec3( multiplier, multiplier, 1.0 );
            },
            /*FactoryPipePower.CompletedUI.UpdateDownloadPulse end.*/

            /*FactoryPipePower.CompletedUI.ResetDownloadScale start.*/
            ResetDownloadScale: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletedUI#ResetDownloadScale", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.downloadImage, null)) {
                    this.downloadImage.rectTransform.localScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*FactoryPipePower.CompletedUI.ResetDownloadScale end.*/


        }
    });
    /*FactoryPipePower.CompletedUI end.*/

    /*FactoryPipePower.CompletionUI start.*/
    Bridge.define("FactoryPipePower.CompletionUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            panelRoot: null,
            titleLabel: null,
            subtitleLabel: null,
            primaryButton: null,
            titleText: null,
            subtitleText: null,
            primaryFired: false,
            primaryBound: false
        },
        events: {
            ContinueRequested: null
        },
        props: {
            IsVisible: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#IsVisible#get", this ); }

                    return UnityEngine.GameObject.op_Inequality(this.panelRoot, null) && this.panelRoot.activeSelf;
                }
            },
            PrimaryButton: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#PrimaryButton#get", this ); }

                    return this.primaryButton;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#init", this ); }

                this.titleText = "Factory Online!";
                this.subtitleText = "Power chain restored.";
            }
        },
        methods: {
            /*FactoryPipePower.CompletionUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#Awake", this ); }

                this.BindPrimary();
                this.Hide();
            },
            /*FactoryPipePower.CompletionUI.Awake end.*/

            /*FactoryPipePower.CompletionUI.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#OnDestroy", this ); }

                this.UnbindPrimary();
            },
            /*FactoryPipePower.CompletionUI.OnDestroy end.*/

            /*FactoryPipePower.CompletionUI.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#Show", this ); }

                this.BindPrimary();

                if (UnityEngine.MonoBehaviour.op_Inequality(this.titleLabel, null)) {
                    this.titleLabel.text = this.titleText;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.subtitleLabel, null)) {
                    this.subtitleLabel.text = this.subtitleText;
                }

                if (UnityEngine.GameObject.op_Inequality(this.panelRoot, null)) {
                    this.panelRoot.SetActive(true);
                }
            },
            /*FactoryPipePower.CompletionUI.Show end.*/

            /*FactoryPipePower.CompletionUI.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#Hide", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.panelRoot, null)) {
                    this.panelRoot.SetActive(false);
                }
            },
            /*FactoryPipePower.CompletionUI.Hide end.*/

            /*FactoryPipePower.CompletionUI.PressPrimary start.*/
            PressPrimary: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#PressPrimary", this ); }

                if (this.primaryFired) {
                    return;
                }

                this.primaryFired = true;
                !Bridge.staticEquals(this.ContinueRequested, null) ? this.ContinueRequested() : null;
            },
            /*FactoryPipePower.CompletionUI.PressPrimary end.*/

            /*FactoryPipePower.CompletionUI.BindPrimary start.*/
            BindPrimary: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#BindPrimary", this ); }

                if (this.primaryBound || UnityEngine.MonoBehaviour.op_Equality(this.primaryButton, null)) {
                    return;
                }

                this.primaryButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.PressPrimary));
                this.primaryBound = true;
            },
            /*FactoryPipePower.CompletionUI.BindPrimary end.*/

            /*FactoryPipePower.CompletionUI.UnbindPrimary start.*/
            UnbindPrimary: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.CompletionUI#UnbindPrimary", this ); }

                if (!this.primaryBound || UnityEngine.MonoBehaviour.op_Equality(this.primaryButton, null)) {
                    return;
                }

                this.primaryButton.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.PressPrimary));
                this.primaryBound = false;
            },
            /*FactoryPipePower.CompletionUI.UnbindPrimary end.*/


        }
    });
    /*FactoryPipePower.CompletionUI end.*/

    /*FactoryPipePower.CornerRotationGroup start.*/
    Bridge.define("FactoryPipePower.CornerRotationGroup", {
        $kind: 6,
        statics: {
            fields: {
                Input0Output270: 0,
                Input90Output0: 1,
                Input180Output90: 2,
                Input270Output180: 3
            }
        }
    });
    /*FactoryPipePower.CornerRotationGroup end.*/

    /*FactoryPipePower.DraggablePipeController start.*/
    Bridge.define("FactoryPipePower.DraggablePipeController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                dragBlockMask: 0
            },
            events: {
                AnyDragStarted: null,
                AnyDragFinished: null
            },
            props: {
                DragBlockMask: {
                    get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#DragBlockMask#get", this ); }

                        if (FactoryPipePower.DraggablePipeController.dragBlockMask === 0) {
                            FactoryPipePower.DraggablePipeController.dragBlockMask = ~UnityEngine.LayerMask.GetMask(["DraggablePipe", "PipeSlot"]);
                        }

                        return FactoryPipePower.DraggablePipeController.dragBlockMask;
                    }
                }
            }
        },
        fields: {
            spec: null,
            visual: null,
            pickCollider: null,
            dragCollider: null,
            body: null,
            defaultMaterial: null,
            returnDuration: 0,
            dragPlaneHeight: 0,
            obstacleSkin: 0,
            state: 0,
            stockPosition: null,
            stockRotation: null,
            dragTargetPosition: null,
            dragOffset: null,
            returnStartPosition: null,
            returnStartRotation: null,
            returnPosition: null,
            returnRotation: null,
            returnRoutine: null
        },
        events: {
            Committed: null,
            DragStarted: null,
            ReturnedToStock: null
        },
        props: {
            Spec: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#Spec#get", this ); }

                    return this.spec.$clone();
                }
            },
            State: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#State#get", this ); }

                    return this.state;
                }
            },
            WorldYaw: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#WorldYaw#get", this ); }

                    return this.transform.rotation.getPositiveEulerAngles().y;
                }
            },
            IsInteractable: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#IsInteractable#get", this ); }

                    return this.state === FactoryPipePower.DraggablePipeState.Stock;
                }
            },
            DragPlaneHeight: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#DragPlaneHeight#get", this ); }

                    return this.dragPlaneHeight;
                }
            },
            Visual: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#Visual#get", this ); }

                    return this.visual;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#init", this ); }

                this.spec = new FactoryPipePower.PipeSpec();
                this.stockPosition = new UnityEngine.Vector3();
                this.stockRotation = new UnityEngine.Quaternion();
                this.dragTargetPosition = new UnityEngine.Vector3();
                this.dragOffset = new UnityEngine.Vector3();
                this.returnStartPosition = new UnityEngine.Vector3();
                this.returnStartRotation = new UnityEngine.Quaternion();
                this.returnPosition = new UnityEngine.Vector3();
                this.returnRotation = new UnityEngine.Quaternion();
                this.returnDuration = 0.25;
                this.dragPlaneHeight = 1.0;
                this.obstacleSkin = 0.02;
                this.state = FactoryPipePower.DraggablePipeState.Stock;
            }
        },
        methods: {
            /*FactoryPipePower.DraggablePipeController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#Awake", this ); }

                this.stockPosition = this.transform.position.$clone();
                this.stockRotation = this.transform.rotation.$clone();
                this.dragTargetPosition = this.transform.position.$clone();
                this.returnPosition = this.transform.position.$clone();
                this.returnRotation = this.transform.rotation.$clone();
                this.ApplyColliderState();
            },
            /*FactoryPipePower.DraggablePipeController.Awake end.*/

            /*FactoryPipePower.DraggablePipeController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#OnDisable", this ); }

                if (this.state === FactoryPipePower.DraggablePipeState.Dragging) {
                    !Bridge.staticEquals(FactoryPipePower.DraggablePipeController.AnyDragFinished, null) ? FactoryPipePower.DraggablePipeController.AnyDragFinished(this) : null;
                }
            },
            /*FactoryPipePower.DraggablePipeController.OnDisable end.*/

            /*FactoryPipePower.DraggablePipeController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#FixedUpdate", this ); }

                if (this.state === FactoryPipePower.DraggablePipeState.Dragging) {
                    this.ApplyMovement(this.ClampToObstacles(this.dragTargetPosition), this.stockRotation);
                } else if (this.state === FactoryPipePower.DraggablePipeState.Returning) {
                    this.ApplyMovement(this.returnPosition, this.returnRotation);
                }
            },
            /*FactoryPipePower.DraggablePipeController.FixedUpdate end.*/

            /*FactoryPipePower.DraggablePipeController.BeginDrag start.*/
            BeginDrag: function (pointerScreenPosition, camera) {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#BeginDrag", this ); }

                if (this.state !== FactoryPipePower.DraggablePipeState.Stock) {
                    return;
                }
                if (UnityEngine.Component.op_Equality(camera, null)) {
                    UnityEngine.Debug.LogError$2(System.String.format("[DraggablePipeController] BeginDrag without camera on '{0}'.", [this.name]), this);
                    return;
                }
                if (this.returnRoutine != null) {
                    this.StopCoroutine$2(this.returnRoutine);
                    this.returnRoutine = null;
                }

                this.stockPosition = this.transform.position.$clone();
                this.stockRotation = this.transform.rotation.$clone();

                this.state = FactoryPipePower.DraggablePipeState.Dragging;
                this.dragTargetPosition = this.transform.position.$clone();

                this.ApplyColliderState();

                if (UnityEngine.MonoBehaviour.op_Inequality(this.visual, null)) {
                    this.visual.SetTutorialOverlay(false);
                }

                this.ComputeDragOffset(pointerScreenPosition, camera);

                !Bridge.staticEquals(FactoryPipePower.DraggablePipeController.AnyDragStarted, null) ? FactoryPipePower.DraggablePipeController.AnyDragStarted(this) : null;
                !Bridge.staticEquals(this.DragStarted, null) ? this.DragStarted(this) : null;
            },
            /*FactoryPipePower.DraggablePipeController.BeginDrag end.*/

            /*FactoryPipePower.DraggablePipeController.UpdateDrag start.*/
            UpdateDrag: function (pointerScreenPosition, camera) {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#UpdateDrag", this ); }

                if (this.state !== FactoryPipePower.DraggablePipeState.Dragging) {
                    return;
                }
                var point = { v : new UnityEngine.Vector3() };
                if (!this.TryGetPlanePoint(pointerScreenPosition, camera, point)) {
                    return;
                }

                this.dragTargetPosition = point.v.$clone().add( this.dragOffset );

                // Явно фиксируем мировую высоту трубы на drag plane.
                this.dragTargetPosition.y = this.dragPlaneHeight;
            },
            /*FactoryPipePower.DraggablePipeController.UpdateDrag end.*/

            /*FactoryPipePower.DraggablePipeController.EndDragWithoutPlacement start.*/
            EndDragWithoutPlacement: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#EndDragWithoutPlacement", this ); }

                if (this.state !== FactoryPipePower.DraggablePipeState.Dragging) {
                    return;
                }

                this.state = FactoryPipePower.DraggablePipeState.Returning;

                this.ApplyColliderState();

                this.returnStartPosition = this.transform.position.$clone();
                this.returnStartRotation = this.transform.rotation.$clone();
                this.returnPosition = this.returnStartPosition.$clone();
                this.returnRotation = this.returnStartRotation.$clone();

                if (this.returnRoutine != null) {
                    this.StopCoroutine$2(this.returnRoutine);
                }
                this.returnRoutine = this.StartCoroutine$1(this.ReturnRoutine());

                !Bridge.staticEquals(FactoryPipePower.DraggablePipeController.AnyDragFinished, null) ? FactoryPipePower.DraggablePipeController.AnyDragFinished(this) : null;
                !Bridge.staticEquals(this.ReturnedToStock, null) ? this.ReturnedToStock(this) : null;
            },
            /*FactoryPipePower.DraggablePipeController.EndDragWithoutPlacement end.*/

            /*FactoryPipePower.DraggablePipeController.CommitPlaced start.*/
            CommitPlaced: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#CommitPlaced", this ); }

                if (this.state !== FactoryPipePower.DraggablePipeState.Dragging) {
                    return;
                }

                this.state = FactoryPipePower.DraggablePipeState.Placed;

                this.ApplyColliderState();

                if (UnityEngine.MonoBehaviour.op_Inequality(this.visual, null)) {
                    this.visual.SetTutorialOverlay(false);
                    this.visual.gameObject.SetActive(false);
                }

                !Bridge.staticEquals(FactoryPipePower.DraggablePipeController.AnyDragFinished, null) ? FactoryPipePower.DraggablePipeController.AnyDragFinished(this) : null;
                !Bridge.staticEquals(this.Committed, null) ? this.Committed(this) : null;
            },
            /*FactoryPipePower.DraggablePipeController.CommitPlaced end.*/

            /*FactoryPipePower.DraggablePipeController.ReturnRoutine start.*/
            ReturnRoutine: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#ReturnRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    duration = UnityEngine.Mathf.Max(this.returnDuration, 0.0001);
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = pc.math.smoothstep(0.0, 1.0, Math.max(0, Math.min(1, elapsed / duration)));
                                        this.returnPosition = new pc.Vec3().lerp( this.returnStartPosition, this.stockPosition, t );
                                        this.returnRotation = new pc.Quat().slerpUnclamped( this.returnStartRotation, this.stockRotation, pc.math.clamp( t, 0, 1 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.returnRoutine = null;
                                        this.state = FactoryPipePower.DraggablePipeState.Stock;

                                        this.transform.SetPositionAndRotation(this.stockPosition, this.stockRotation);
                                        if (UnityEngine.Component.op_Inequality(this.body, null)) {
                                            this.body.position = this.stockPosition.$clone();
                                            this.body.rotation = this.stockRotation.$clone();
                                        }

                                        this.ApplyColliderState();

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.visual, null) && this.defaultMaterial != null) {
                                            this.visual.SetBaseMaterial(this.defaultMaterial);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.DraggablePipeController.ReturnRoutine end.*/

            /*FactoryPipePower.DraggablePipeController.ApplyColliderState start.*/
            ApplyColliderState: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#ApplyColliderState", this ); }

                if (UnityEngine.Component.op_Inequality(this.pickCollider, null)) {
                    this.pickCollider.enabled = this.state === FactoryPipePower.DraggablePipeState.Stock;
                }

                if (UnityEngine.Component.op_Inequality(this.dragCollider, null)) {
                    this.dragCollider.enabled = this.state === FactoryPipePower.DraggablePipeState.Dragging;
                }
            },
            /*FactoryPipePower.DraggablePipeController.ApplyColliderState end.*/

            /*FactoryPipePower.DraggablePipeController.ClampToObstacles start.*/
            ClampToObstacles: function (desired) {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#ClampToObstacles", this ); }

                if (UnityEngine.Component.op_Equality(this.dragCollider, null) || !this.dragCollider.enabled) {
                    return desired.$clone();
                }

                var position = this.transform.position.$clone();
                var hit = { v : new UnityEngine.RaycastHit() };
                var startedInside = { };
                var clamped = this.SweepClamp(position, desired, hit, startedInside);

                if (startedInside.v) {
                    return desired.$clone();
                }

                if (UnityEngine.Component.op_Equality(hit.v.collider, null)) {
                    return clamped.$clone();
                }

                var remaining = desired.$clone().sub( clamped );
                var into = remaining.dot( hit.v.normal );
                if (into < 0.0) {
                    remaining = remaining.$clone().sub( hit.v.normal.$clone().clone().scale( into ) );
                }

                if (remaining.lengthSq() <= 1E-08) {
                    return clamped.$clone();
                }
                var _discard1 = { v : new UnityEngine.RaycastHit() };
                var _discard2 = { };

                return this.SweepClamp(clamped, clamped.$clone().add( remaining ), _discard1, _discard2);
            },
            /*FactoryPipePower.DraggablePipeController.ClampToObstacles end.*/

            /*FactoryPipePower.DraggablePipeController.SweepClamp start.*/
            SweepClamp: function (from, desired, hit, startedInside) {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#SweepClamp", this ); }

                hit.v = Bridge.getDefaultValue(UnityEngine.RaycastHit);
                startedInside.v = false;

                var delta = desired.$clone().sub( from );
                var distance = delta.length();
                if (distance <= Number.EPSILON) {
                    return from.$clone();
                }

                var direction = delta.$clone().scale( 1.0 / ( distance ) );
                var boxCenter = { v : new UnityEngine.Vector3() };
                var halfExtents = { v : new UnityEngine.Vector3() };
                this.GetDragBox(boxCenter, halfExtents);
                boxCenter.v = boxCenter.v.$clone().add( from.$clone().sub( this.transform.position ) );

                if (!UnityEngine.Physics.BoxCast$3(boxCenter.v, halfExtents.v, direction, hit, this.dragCollider.transform.rotation, distance + this.obstacleSkin, FactoryPipePower.DraggablePipeController.DragBlockMask, UnityEngine.QueryTriggerInteraction.Ignore)) {
                    return desired.$clone();
                }

                if (hit.v.distance > 0.0) {
                    return from.$clone().add( direction.$clone().clone().scale( UnityEngine.Mathf.Max(0.0, hit.v.distance - this.obstacleSkin) ) );
                }

                startedInside.v = UnityEngine.Physics.OverlapBox$1(boxCenter.v, halfExtents.v, this.dragCollider.transform.rotation, FactoryPipePower.DraggablePipeController.DragBlockMask, UnityEngine.QueryTriggerInteraction.Ignore).length > 0;

                return startedInside.v ? desired.$clone() : from.$clone();
            },
            /*FactoryPipePower.DraggablePipeController.SweepClamp end.*/

            /*FactoryPipePower.DraggablePipeController.GetDragBox start.*/
            GetDragBox: function (center, halfExtents) {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#GetDragBox", this ); }

                var box;
                if (UnityEngine.Component.op_Inequality(((box = Bridge.as(this.dragCollider, UnityEngine.BoxCollider))), null)) {
                    center.v = box.transform.TransformPoint$1(box.center);
                    var scale = box.transform.lossyScale.$clone();
                    halfExtents.v = new pc.Vec3( box.size.x * Math.abs(scale.x), box.size.y * Math.abs(scale.y), box.size.z * Math.abs(scale.z) ).clone().scale( 0.5 );
                    return;
                }

                var bounds = this.dragCollider.bounds;
                center.v = bounds.center.$clone();
                halfExtents.v = bounds.halfExtents.$clone();
            },
            /*FactoryPipePower.DraggablePipeController.GetDragBox end.*/

            /*FactoryPipePower.DraggablePipeController.ApplyMovement start.*/
            ApplyMovement: function (position, rotation) {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#ApplyMovement", this ); }

                if (UnityEngine.Component.op_Inequality(this.body, null)) {
                    this.body.MovePosition(position);
                    this.body.MoveRotation(rotation);
                } else {
                    this.transform.SetPositionAndRotation(position, rotation);
                }
            },
            /*FactoryPipePower.DraggablePipeController.ApplyMovement end.*/

            /*FactoryPipePower.DraggablePipeController.ComputeDragOffset start.*/
            ComputeDragOffset: function (pointerScreenPosition, camera) {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#ComputeDragOffset", this ); }

                this.dragOffset = pc.Vec3.ZERO.clone();
                var point = { v : new UnityEngine.Vector3() };

                if (!this.TryGetPlanePoint(pointerScreenPosition, camera, point)) {
                    return;
                }

                var offset = this.transform.position.$clone().sub( point.v );

                // Сохраняем смещение трубы относительно курсора
                // только в горизонтальной плоскости.
                this.dragOffset = new pc.Vec3( offset.x, 0.0, offset.z );
            },
            /*FactoryPipePower.DraggablePipeController.ComputeDragOffset end.*/

            /*FactoryPipePower.DraggablePipeController.TryGetPlanePoint start.*/
            TryGetPlanePoint: function (screenPosition, camera, point) {
if ( TRACE ) { TRACE( "FactoryPipePower.DraggablePipeController#TryGetPlanePoint", this ); }

                point.v = Bridge.getDefaultValue(UnityEngine.Vector3);
                if (UnityEngine.Component.op_Equality(camera, null)) {
                    return false;
                }

                var ray = camera.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPosition));
                var plane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), new pc.Vec3( 0.0, this.dragPlaneHeight, 0.0 ));
                var enter = { };
                if (!plane.Raycast(ray, enter)) {
                    return false;
                }

                point.v = ray.GetPoint(enter.v);
                return true;
            },
            /*FactoryPipePower.DraggablePipeController.TryGetPlanePoint end.*/


        }
    });
    /*FactoryPipePower.DraggablePipeController end.*/

    /*FactoryPipePower.DraggablePipeState start.*/
    Bridge.define("FactoryPipePower.DraggablePipeState", {
        $kind: 6,
        statics: {
            fields: {
                Stock: 0,
                Dragging: 1,
                Returning: 2,
                Placed: 3
            }
        }
    });
    /*FactoryPipePower.DraggablePipeState end.*/

    /*FactoryPipePower.IPowerNode start.*/
    Bridge.define("FactoryPipePower.IPowerNode", {
        $kind: 3
    });
    /*FactoryPipePower.IPowerNode end.*/

    /*FactoryPipePower.EndPowerState start.*/
    Bridge.define("FactoryPipePower.EndPowerState", {
        $kind: 6,
        statics: {
            fields: {
                Inactive: 0,
                Powered: 1
            }
        }
    });
    /*FactoryPipePower.EndPowerState end.*/

    /*FactoryPipePower.FactoryChimneySmokeController start.*/
    Bridge.define("FactoryPipePower.FactoryChimneySmokeController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*FactoryPipePower.FactoryChimneySmokeController.Play:static start.*/
                Play: function (system) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#Play", this ); }

                    if (UnityEngine.Component.op_Equality(system, null)) {
                        return;
                    }

                    system.Play$1(true);
                },
                /*FactoryPipePower.FactoryChimneySmokeController.Play:static end.*/

                /*FactoryPipePower.FactoryChimneySmokeController.Stop:static start.*/
                Stop: function (system, clear) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#Stop", this ); }

                    if (UnityEngine.Component.op_Equality(system, null)) {
                        return;
                    }

                    if (clear) {
                        system.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                    } else {
                        system.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmitting);
                    }
                },
                /*FactoryPipePower.FactoryChimneySmokeController.Stop:static end.*/


            }
        },
        fields: {
            factory: null,
            indicatorSequence: null,
            pipe1Smoke: null,
            pipe2Smoke: null,
            subscribedFactory: false,
            subscribedSequence: false,
            emissionRunning: false
        },
        props: {
            IsEmitting: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#IsEmitting#get", this ); }

                    return this.emissionRunning;
                }
            }
        },
        methods: {
            /*FactoryPipePower.FactoryChimneySmokeController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#OnEnable", this ); }

                this.TrySubscribe();
            },
            /*FactoryPipePower.FactoryChimneySmokeController.OnEnable end.*/

            /*FactoryPipePower.FactoryChimneySmokeController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#Update", this ); }

                if (!this.subscribedFactory || !this.subscribedSequence) {
                    this.TrySubscribe();
                }
            },
            /*FactoryPipePower.FactoryChimneySmokeController.Update end.*/

            /*FactoryPipePower.FactoryChimneySmokeController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#OnDisable", this ); }

                this.Unsubscribe();
                this.StopEmission(true);
            },
            /*FactoryPipePower.FactoryChimneySmokeController.OnDisable end.*/

            /*FactoryPipePower.FactoryChimneySmokeController.TrySubscribe start.*/
            TrySubscribe: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#TrySubscribe", this ); }

                if (!this.subscribedFactory && UnityEngine.MonoBehaviour.op_Inequality(this.factory, null)) {
                    this.factory.addFactoryOffline(Bridge.fn.cacheBind(this, this.HandleFactoryOffline));
                    this.subscribedFactory = true;
                }

                if (!this.subscribedSequence && UnityEngine.MonoBehaviour.op_Inequality(this.indicatorSequence, null)) {
                    this.indicatorSequence.addSequenceCompleted(Bridge.fn.cacheBind(this, this.HandleSequenceCompleted));
                    this.subscribedSequence = true;
                }

                if (this.subscribedSequence) {
                    this.SyncToSequence();
                }
            },
            /*FactoryPipePower.FactoryChimneySmokeController.TrySubscribe end.*/

            /*FactoryPipePower.FactoryChimneySmokeController.Unsubscribe start.*/
            Unsubscribe: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#Unsubscribe", this ); }

                if (this.subscribedFactory && UnityEngine.MonoBehaviour.op_Inequality(this.factory, null)) {
                    this.factory.removeFactoryOffline(Bridge.fn.cacheBind(this, this.HandleFactoryOffline));
                }

                if (this.subscribedSequence && UnityEngine.MonoBehaviour.op_Inequality(this.indicatorSequence, null)) {
                    this.indicatorSequence.removeSequenceCompleted(Bridge.fn.cacheBind(this, this.HandleSequenceCompleted));
                }

                this.subscribedFactory = false;
                this.subscribedSequence = false;
            },
            /*FactoryPipePower.FactoryChimneySmokeController.Unsubscribe end.*/

            /*FactoryPipePower.FactoryChimneySmokeController.SyncToSequence start.*/
            SyncToSequence: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#SyncToSequence", this ); }

                if (this.emissionRunning) {
                    return;
                }

                if (this.indicatorSequence.IsCompleted) {
                    this.StartEmission();
                } else {
                    this.StopEmission(true);
                }
            },
            /*FactoryPipePower.FactoryChimneySmokeController.SyncToSequence end.*/

            /*FactoryPipePower.FactoryChimneySmokeController.HandleSequenceCompleted start.*/
            HandleSequenceCompleted: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#HandleSequenceCompleted", this ); }

                this.StartEmission();
            },
            /*FactoryPipePower.FactoryChimneySmokeController.HandleSequenceCompleted end.*/

            /*FactoryPipePower.FactoryChimneySmokeController.HandleFactoryOffline start.*/
            HandleFactoryOffline: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#HandleFactoryOffline", this ); }

                this.StopEmission(false);
            },
            /*FactoryPipePower.FactoryChimneySmokeController.HandleFactoryOffline end.*/

            /*FactoryPipePower.FactoryChimneySmokeController.StartEmission start.*/
            StartEmission: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#StartEmission", this ); }

                if (this.emissionRunning) {
                    return;
                }

                this.emissionRunning = true;

                FactoryPipePower.FactoryChimneySmokeController.Play(this.pipe1Smoke);
                FactoryPipePower.FactoryChimneySmokeController.Play(this.pipe2Smoke);
            },
            /*FactoryPipePower.FactoryChimneySmokeController.StartEmission end.*/

            /*FactoryPipePower.FactoryChimneySmokeController.StopEmission start.*/
            StopEmission: function (clear) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryChimneySmokeController#StopEmission", this ); }

                this.emissionRunning = false;

                FactoryPipePower.FactoryChimneySmokeController.Stop(this.pipe1Smoke, clear);
                FactoryPipePower.FactoryChimneySmokeController.Stop(this.pipe2Smoke, clear);
            },
            /*FactoryPipePower.FactoryChimneySmokeController.StopEmission end.*/


        }
    });
    /*FactoryPipePower.FactoryChimneySmokeController end.*/

    /*FactoryPipePower.FactoryPowerController start.*/
    Bridge.define("FactoryPipePower.FactoryPowerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            onlineRenderers: null,
            onlineIndicators: null,
            particleSystems: null,
            animators: null,
            stateVisualRenderer: null,
            offlineStateMaterial: null,
            onlineStateMaterial: null,
            state: 0
        },
        events: {
            FactoryOnline: null,
            FactoryOffline: null
        },
        props: {
            State: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryPowerController#State#get", this ); }

                    return this.state;
                }
            },
            IsOnline: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryPowerController#IsOnline#get", this ); }

                    return this.state === FactoryPipePower.FactoryPowerState.Online;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryPowerController#init", this ); }

                this.state = FactoryPipePower.FactoryPowerState.Offline;
            }
        },
        methods: {
            /*FactoryPipePower.FactoryPowerController.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryPowerController#Initialize", this ); }

                this.SetOffline();
            },
            /*FactoryPipePower.FactoryPowerController.Initialize end.*/

            /*FactoryPipePower.FactoryPowerController.SetOffline start.*/
            SetOffline: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryPowerController#SetOffline", this ); }

                this.state = FactoryPipePower.FactoryPowerState.Offline;
                this.Apply(false);
                !Bridge.staticEquals(this.FactoryOffline, null) ? this.FactoryOffline() : null;
            },
            /*FactoryPipePower.FactoryPowerController.SetOffline end.*/

            /*FactoryPipePower.FactoryPowerController.SetOnline start.*/
            SetOnline: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryPowerController#SetOnline", this ); }

                if (this.state === FactoryPipePower.FactoryPowerState.Online) {
                    return;
                }

                this.state = FactoryPipePower.FactoryPowerState.Online;
                this.Apply(true);
                !Bridge.staticEquals(this.FactoryOnline, null) ? this.FactoryOnline() : null;
            },
            /*FactoryPipePower.FactoryPowerController.SetOnline end.*/

            /*FactoryPipePower.FactoryPowerController.Apply start.*/
            Apply: function (online) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryPowerController#Apply", this ); }

                var $t, $t1, $t2, $t3;
                if (this.onlineRenderers != null) {
                    $t = Bridge.getEnumerator(this.onlineRenderers);
                    try {
                        while ($t.moveNext()) {
                            var r = $t.Current;
                            if (UnityEngine.Component.op_Inequality(r, null)) {
                                r.enabled = online;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

                if (this.onlineIndicators != null) {
                    $t1 = Bridge.getEnumerator(this.onlineIndicators);
                    try {
                        while ($t1.moveNext()) {
                            var o = $t1.Current;
                            if (UnityEngine.GameObject.op_Inequality(o, null)) {
                                o.SetActive(online);
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                }

                if (this.particleSystems != null) {
                    $t2 = Bridge.getEnumerator(this.particleSystems);
                    try {
                        while ($t2.moveNext()) {
                            var p = $t2.Current;
                            if (UnityEngine.Component.op_Inequality(p, null)) {
                                if (online) {
                                    p.Play();
                                } else {
                                    p.Stop();
                                    p.Clear();
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t2, System.IDisposable)) {
                            $t2.System$IDisposable$Dispose();
                        }
                    }
                }

                if (this.animators != null) {
                    $t3 = Bridge.getEnumerator(this.animators);
                    try {
                        while ($t3.moveNext()) {
                            var a = $t3.Current;
                            if (UnityEngine.Component.op_Inequality(a, null)) {
                                a.enabled = online;
                            }
                        }
                    } finally {
                        if (Bridge.is($t3, System.IDisposable)) {
                            $t3.System$IDisposable$Dispose();
                        }
                    }
                }

                this.ApplyStateVisual(online);
            },
            /*FactoryPipePower.FactoryPowerController.Apply end.*/

            /*FactoryPipePower.FactoryPowerController.ApplyStateVisual start.*/
            ApplyStateVisual: function (online) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryPowerController#ApplyStateVisual", this ); }

                if (UnityEngine.Component.op_Equality(this.stateVisualRenderer, null)) {
                    return;
                }

                var target = online ? this.onlineStateMaterial : this.offlineStateMaterial;
                if (target == null) {
                    return;
                }

                var materials = this.stateVisualRenderer.sharedMaterials;
                var changed = false;
                for (var i = 0; i < materials.length; i = (i + 1) | 0) {
                    if (materials[i] == null) {
                        continue;
                    }
                    if (!Bridge.referenceEquals(materials[i], this.offlineStateMaterial) && !Bridge.referenceEquals(materials[i], this.onlineStateMaterial)) {
                        continue;
                    }
                    if (Bridge.referenceEquals(materials[i], target)) {
                        continue;
                    }
                    materials[i] = target;
                    changed = true;
                }

                if (changed) {
                    this.stateVisualRenderer.sharedMaterials = materials;
                }
            },
            /*FactoryPipePower.FactoryPowerController.ApplyStateVisual end.*/


        }
    });
    /*FactoryPipePower.FactoryPowerController end.*/

    /*FactoryPipePower.FactoryPowerState start.*/
    Bridge.define("FactoryPipePower.FactoryPowerState", {
        $kind: 6,
        statics: {
            fields: {
                Offline: 0,
                Online: 1
            }
        }
    });
    /*FactoryPipePower.FactoryPowerState end.*/

    /*FactoryPipePower.ITutorialInputGate start.*/
    Bridge.define("FactoryPipePower.ITutorialInputGate", {
        $kind: 3
    });
    /*FactoryPipePower.ITutorialInputGate end.*/

    /*FactoryPipePower.FactoryTutorialPhase start.*/
    Bridge.define("FactoryPipePower.FactoryTutorialPhase", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                IntroOverview: 1,
                BlendingToGameplay: 2,
                WaitingForIncomingPower: 3,
                PromptPickFirstPipe: 4,
                PromptPlaceFirstPipe: 5,
                PromptRotateFirstPipe: 6,
                WaitingFirstPipePower: 7,
                FirstPipeSuccess: 8,
                GameplayUnlocked: 9,
                BlendingToFinalOverview: 10,
                WaitingForOutgoingPower: 11,
                WaitingForFactoryStartup: 12,
                Completed: 13
            }
        }
    });
    /*FactoryPipePower.FactoryTutorialPhase end.*/

    /*FactoryPipePower.FlowConnectorUtility start.*/
    Bridge.define("FactoryPipePower.FlowConnectorUtility", {
        statics: {
            methods: {
                /*FactoryPipePower.FlowConnectorUtility.ResolveFlowEndpoints:static start.*/
                ResolveFlowEndpoints: function (previousOutputWorld, connectorAWorld, connectorBWorld, startWorld, endWorld) {
if ( TRACE ) { TRACE( "FactoryPipePower.FlowConnectorUtility#ResolveFlowEndpoints", this ); }

                    var distA = pc.Vec3.distance( previousOutputWorld, connectorAWorld );
                    var distB = pc.Vec3.distance( previousOutputWorld, connectorBWorld );

                    if (distA <= distB) {
                        startWorld.v = connectorAWorld.$clone();
                        endWorld.v = connectorBWorld.$clone();
                    } else {
                        startWorld.v = connectorBWorld.$clone();
                        endWorld.v = connectorAWorld.$clone();
                    }
                },
                /*FactoryPipePower.FlowConnectorUtility.ResolveFlowEndpoints:static end.*/


            }
        }
    });
    /*FactoryPipePower.FlowConnectorUtility end.*/

    /*FactoryPipePower.GameFlowController start.*/
    Bridge.define("FactoryPipePower.GameFlowController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            factoryPowerController: null,
            completionUI: null,
            completedUI: null,
            pointerInput: null,
            tutorialController: null,
            factoryTutorial: null,
            completionDelay: 0,
            completedScreenDelay: 0,
            state: 0,
            completionRoutine: null,
            completedScreenRoutine: null,
            winTriggerCount: 0
        },
        events: {
            WinTriggered: null,
            ContinueRequested: null
        },
        props: {
            State: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.GameFlowController#State#get", this ); }

                    return this.state;
                }
            },
            WinTriggerCount: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.GameFlowController#WinTriggerCount#get", this ); }

                    return this.winTriggerCount;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.GameFlowController#init", this ); }

                this.completionDelay = 0.75;
                this.completedScreenDelay = 1.5;
                this.state = FactoryPipePower.GameFlowState.Gameplay;
            }
        },
        methods: {
            /*FactoryPipePower.GameFlowController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.GameFlowController#OnEnable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.factoryPowerController, null)) {
                    this.factoryPowerController.addFactoryOnline(Bridge.fn.cacheBind(this, this.HandleFactoryOnline));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.completionUI, null)) {
                    this.completionUI.addContinueRequested(Bridge.fn.cacheBind(this, this.HandleContinueRequested));
                }

                if (this.state === FactoryPipePower.GameFlowState.WinPending && this.completionRoutine == null) {
                    this.completionRoutine = this.StartCoroutine$1(this.CompleteAfterDelay());
                }

                if (this.state === FactoryPipePower.GameFlowState.Completed && UnityEngine.MonoBehaviour.op_Inequality(this.completedUI, null) && !this.completedUI.IsVisible && this.completedScreenRoutine == null) {
                    this.completedScreenRoutine = this.StartCoroutine$1(this.ShowCompletedScreenAfterDelay());
                }
            },
            /*FactoryPipePower.GameFlowController.OnEnable end.*/

            /*FactoryPipePower.GameFlowController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.GameFlowController#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.factoryPowerController, null)) {
                    this.factoryPowerController.removeFactoryOnline(Bridge.fn.cacheBind(this, this.HandleFactoryOnline));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.completionUI, null)) {
                    this.completionUI.removeContinueRequested(Bridge.fn.cacheBind(this, this.HandleContinueRequested));
                }

                this.completionRoutine = null;
                this.completedScreenRoutine = null;
            },
            /*FactoryPipePower.GameFlowController.OnDisable end.*/

            /*FactoryPipePower.GameFlowController.HandleFactoryOnline start.*/
            HandleFactoryOnline: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.GameFlowController#HandleFactoryOnline", this ); }

                if (this.state !== FactoryPipePower.GameFlowState.Gameplay) {
                    return;
                }

                this.state = FactoryPipePower.GameFlowState.WinPending;
                this.winTriggerCount = (this.winTriggerCount + 1) | 0;
                !Bridge.staticEquals(this.WinTriggered, null) ? this.WinTriggered() : null;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.pointerInput, null)) {
                    this.pointerInput.SetInputBlocked(true);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialController, null)) {
                    this.tutorialController.DisableTutorial();
                }

                this.completionRoutine = this.StartCoroutine$1(this.CompleteAfterDelay());
            },
            /*FactoryPipePower.GameFlowController.HandleFactoryOnline end.*/

            /*FactoryPipePower.GameFlowController.CompleteAfterDelay start.*/
            CompleteAfterDelay: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.GameFlowController#CompleteAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.completionDelay > 0.0001) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 3;
                                            continue;
                                        }
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.completionDelay);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 5;
                                    continue;
                                }
                                case 3: {
                                    $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.completionUI, null)) {
                                            this.completionUI.Show();
                                        }

                                        this.state = FactoryPipePower.GameFlowState.Completed;
                                        this.completionRoutine = null;

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.completedUI, null) && this.completedScreenRoutine == null) {
                                            this.completedScreenRoutine = this.StartCoroutine$1(this.ShowCompletedScreenAfterDelay());
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.GameFlowController.CompleteAfterDelay end.*/

            /*FactoryPipePower.GameFlowController.ShowCompletedScreenAfterDelay start.*/
            ShowCompletedScreenAfterDelay: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.GameFlowController#ShowCompletedScreenAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.completedScreenDelay > 0.0001) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 3;
                                            continue;
                                        }
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.completedScreenDelay);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 5;
                                    continue;
                                }
                                case 3: {
                                    $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.completionUI, null)) {
                                            this.completionUI.Hide();
                                        }

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.factoryTutorial, null)) {
                                            this.factoryTutorial.HideMessage();
                                        }

                                        this.completedScreenRoutine = null;

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.completedUI, null)) {
                                            this.completedUI.Show();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.GameFlowController.ShowCompletedScreenAfterDelay end.*/

            /*FactoryPipePower.GameFlowController.HandleContinueRequested start.*/
            HandleContinueRequested: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.GameFlowController#HandleContinueRequested", this ); }

                !Bridge.staticEquals(this.ContinueRequested, null) ? this.ContinueRequested() : null;
            },
            /*FactoryPipePower.GameFlowController.HandleContinueRequested end.*/


        }
    });
    /*FactoryPipePower.GameFlowController end.*/

    /*FactoryPipePower.GameFlowState start.*/
    Bridge.define("FactoryPipePower.GameFlowState", {
        $kind: 6,
        statics: {
            fields: {
                Gameplay: 0,
                WinPending: 1,
                Completed: 2
            }
        }
    });
    /*FactoryPipePower.GameFlowState end.*/

    /*FactoryPipePower.NarrativePipeSegment start.*/
    Bridge.define("FactoryPipePower.NarrativePipeSegment", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            visual: null,
            flowStart: null,
            flowEnd: null,
            flowElbow: null,
            completionSparks: null,
            fillDuration: 0
        },
        props: {
            Visual: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePipeSegment#Visual#get", this ); }

                    return this.visual;
                }
            },
            FillDuration: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePipeSegment#FillDuration#get", this ); }

                    return this.fillDuration;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePipeSegment#init", this ); }

                this.fillDuration = 0.25;
            }
        },
        methods: {
            /*FactoryPipePower.NarrativePipeSegment.ResetSegment start.*/
            ResetSegment: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePipeSegment#ResetSegment", this ); }

                if (UnityEngine.Component.op_Inequality(this.completionSparks, null)) {
                    this.completionSparks.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                    this.completionSparks.Clear();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.visual, null)) {
                    this.visual.ResetVisual();
                }
            },
            /*FactoryPipePower.NarrativePipeSegment.ResetSegment end.*/

            /*FactoryPipePower.NarrativePipeSegment.FillRoutine start.*/
            FillRoutine: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePipeSegment#FillRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(this.visual, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    this.ConfigureFlow();
                                        this.visual.UseGreenRuntimeMaterial();
                                        this.visual.SetFill(0.0);

                                        if (this.fillDuration <= 0.0) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    this.visual.SetFill(1.0);
                                        this.PlayCompletionSparks();
                                        return false;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    elapsed = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( true ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / this.fillDuration));
                                        this.visual.SetFill(t);

                                        if (t >= 1.0) {
                                            $step = 8;
                                            continue;
                                        }

                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this.PlayCompletionSparks();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.NarrativePipeSegment.FillRoutine end.*/

            /*FactoryPipePower.NarrativePipeSegment.PlayCompletionSparks start.*/
            PlayCompletionSparks: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePipeSegment#PlayCompletionSparks", this ); }

                if (UnityEngine.Component.op_Equality(this.completionSparks, null)) {
                    return;
                }

                this.completionSparks.Clear();
                this.completionSparks.Play$1(true);
            },
            /*FactoryPipePower.NarrativePipeSegment.PlayCompletionSparks end.*/

            /*FactoryPipePower.NarrativePipeSegment.ConfigureFlow start.*/
            ConfigureFlow: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePipeSegment#ConfigureFlow", this ); }

                if (UnityEngine.Component.op_Equality(this.flowStart, null) || UnityEngine.Component.op_Equality(this.flowEnd, null)) {
                    return;
                }

                if (UnityEngine.Component.op_Inequality(this.flowElbow, null)) {
                    this.visual.ConfigureCornerFlow(this.flowStart.position, this.flowElbow.position, this.flowEnd.position);
                } else {
                    this.visual.ConfigureFlow(this.flowStart.position, this.flowEnd.position);
                }
            },
            /*FactoryPipePower.NarrativePipeSegment.ConfigureFlow end.*/


        }
    });
    /*FactoryPipePower.NarrativePipeSegment end.*/

    /*FactoryPipePower.NarrativePowerSequence start.*/
    Bridge.define("FactoryPipePower.NarrativePowerSequence", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*FactoryPipePower.NarrativePowerSequence.ResetSegments:static start.*/
                ResetSegments: function (segments) {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#ResetSegments", this ); }

                    var $t;
                    if (segments == null) {
                        return;
                    }

                    $t = Bridge.getEnumerator(segments);
                    try {
                        while ($t.moveNext()) {
                            var segment = $t.Current;
                            if (UnityEngine.MonoBehaviour.op_Inequality(segment, null)) {
                                segment.ResetSegment();
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*FactoryPipePower.NarrativePowerSequence.ResetSegments:static end.*/


            }
        },
        fields: {
            leftSegments: null,
            rightSegments: null,
            startNode: null,
            endNode: null,
            factoryPowerController: null,
            initialDelay: 0,
            tutorialControlled: false,
            leftRoutine: null,
            rightRoutine: null,
            rightStarted: false
        },
        props: {
            InitialDelay: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#InitialDelay#get", this ); }

                    return this.initialDelay;
                }
            },
            RightStarted: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#RightStarted#get", this ); }

                    return this.rightStarted;
                }
            },
            LeftRunning: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#LeftRunning#get", this ); }

                    return this.leftRoutine != null;
                }
            },
            RightRunning: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#RightRunning#get", this ); }

                    return this.rightRoutine != null;
                }
            },
            TutorialControlled: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#TutorialControlled#get", this ); }

                    return this.tutorialControlled;
                }
            },
            StartNode: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#StartNode#get", this ); }

                    return this.startNode;
                }
            },
            EndNode: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#EndNode#get", this ); }

                    return this.endNode;
                }
            },
            LeftSegments: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#LeftSegments#get", this ); }

                    return this.leftSegments;
                }
            },
            RightSegments: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#RightSegments#get", this ); }

                    return this.rightSegments;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#init", this ); }

                this.initialDelay = 1.0;
            }
        },
        methods: {
            /*FactoryPipePower.NarrativePowerSequence.ResetNarrative start.*/
            ResetNarrative: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#ResetNarrative", this ); }

                this.StopRoutine(Bridge.ref(this, "leftRoutine"));
                this.StopRoutine(Bridge.ref(this, "rightRoutine"));
                this.rightStarted = false;

                FactoryPipePower.NarrativePowerSequence.ResetSegments(this.leftSegments);
                FactoryPipePower.NarrativePowerSequence.ResetSegments(this.rightSegments);

                if (UnityEngine.MonoBehaviour.op_Inequality(this.endNode, null)) {
                    this.endNode.Initialize();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.startNode, null) && this.startNode.DeferPowerActivation) {
                    this.startNode.Initialize();
                }
            },
            /*FactoryPipePower.NarrativePowerSequence.ResetNarrative end.*/

            /*FactoryPipePower.NarrativePowerSequence.BeginLeftChain start.*/
            BeginLeftChain: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#BeginLeftChain", this ); }

                this.ResetNarrative();
                this.leftRoutine = this.StartCoroutine$1(this.RunLeftChain());
            },
            /*FactoryPipePower.NarrativePowerSequence.BeginLeftChain end.*/

            /*FactoryPipePower.NarrativePowerSequence.OnEndPowered start.*/
            OnEndPowered: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#OnEndPowered", this ); }

                if (this.tutorialControlled) {
                    return;
                }

                this.BeginRightChain();
            },
            /*FactoryPipePower.NarrativePowerSequence.OnEndPowered end.*/

            /*FactoryPipePower.NarrativePowerSequence.BeginRightChain start.*/
            BeginRightChain: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#BeginRightChain", this ); }

                if (this.rightStarted) {
                    return;
                }

                this.rightStarted = true;
                this.rightRoutine = this.StartCoroutine$1(this.RunRightChain());
            },
            /*FactoryPipePower.NarrativePowerSequence.BeginRightChain end.*/

            /*FactoryPipePower.NarrativePowerSequence.RunLeftChain start.*/
            RunLeftChain: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#RunLeftChain", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    segment,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Tutorial starts the left chain right after the camera arrives,
                                        // so the pre-fill delay must not apply there.
                                        if (this.initialDelay > 0.0 && !this.tutorialControlled) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.initialDelay);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if (this.leftSegments != null) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 4: {
                                    $t = Bridge.getEnumerator(this.leftSegments);
                                        $step = 5;
                                        continue;
                                }
                                case 5: {
                                    if ($t.moveNext()) {
                                            segment = $t.Current;
                                            $step = 6;
                                            continue;
                                        }
                                    $step = 8;
                                    continue;
                                }
                                case 6: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(segment, null)) {
                                            $step = 5;
                                            continue;
                                        }

                                        $enumerator.current = segment.FillRoutine();
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 5;
                                    continue;
                                }
                                case 8: {
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.startNode, null)) {
                                            this.startNode.ProvidePower();
                                        }

                                        this.leftRoutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.NarrativePowerSequence.RunLeftChain end.*/

            /*FactoryPipePower.NarrativePowerSequence.RunRightChain start.*/
            RunRightChain: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#RunRightChain", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    segment,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.rightSegments != null) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 1: {
                                    $t = Bridge.getEnumerator(this.rightSegments);
                                        $step = 2;
                                        continue;
                                }
                                case 2: {
                                    if ($t.moveNext()) {
                                            segment = $t.Current;
                                            $step = 3;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 3: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(segment, null)) {
                                            $step = 2;
                                            continue;
                                        }

                                        $enumerator.current = segment.FillRoutine();
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 2;
                                    continue;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    UnityEngine.MonoBehaviour.op_Inequality(this.factoryPowerController, null) ? this.factoryPowerController.SetOnline() : null;
                                        this.rightRoutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.NarrativePowerSequence.RunRightChain end.*/

            /*FactoryPipePower.NarrativePowerSequence.StopRoutine start.*/
            StopRoutine: function (routine) {
if ( TRACE ) { TRACE( "FactoryPipePower.NarrativePowerSequence#StopRoutine", this ); }

                if (routine.v != null) {
                    this.StopCoroutine$2(routine.v);
                }

                routine.v = null;
            },
            /*FactoryPipePower.NarrativePowerSequence.StopRoutine end.*/


        }
    });
    /*FactoryPipePower.NarrativePowerSequence end.*/

    /*FactoryPipePower.PipeCompletionSparks start.*/
    Bridge.define("FactoryPipePower.PipeCompletionSparks", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*FactoryPipePower.PipeCompletionSparks.StopOne:static start.*/
                StopOne: function (system) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeCompletionSparks#StopOne", this ); }

                    if (UnityEngine.Component.op_Equality(system, null)) {
                        return;
                    }

                    system.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                    system.Clear();
                },
                /*FactoryPipePower.PipeCompletionSparks.StopOne:static end.*/


            }
        },
        fields: {
            sparksA: null,
            sparksB: null
        },
        props: {
            SparksA: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeCompletionSparks#SparksA#get", this ); }

                    return this.sparksA;
                }
            },
            SparksB: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeCompletionSparks#SparksB#get", this ); }

                    return this.sparksB;
                }
            },
            HasBothReferences: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeCompletionSparks#HasBothReferences#get", this ); }

                    return UnityEngine.Component.op_Inequality(this.sparksA, null) && UnityEngine.Component.op_Inequality(this.sparksB, null);
                }
            }
        },
        methods: {
            /*FactoryPipePower.PipeCompletionSparks.PlayCompletion start.*/
            PlayCompletion: function (endIsB) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeCompletionSparks#PlayCompletion", this ); }

                var chosen = endIsB ? this.sparksB : this.sparksA;
                var other = endIsB ? this.sparksA : this.sparksB;

                if (UnityEngine.Component.op_Inequality(other, null)) {
                    other.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                    other.Clear();
                }

                if (UnityEngine.Component.op_Equality(chosen, null)) {
                    UnityEngine.Debug.LogWarning$1(System.String.format("[PipeCompletionSparks] completion system is not assigned on '{0}'.", [this.name]), this);
                    return;
                }

                chosen.Clear();
                chosen.Play$1(true);
            },
            /*FactoryPipePower.PipeCompletionSparks.PlayCompletion end.*/

            /*FactoryPipePower.PipeCompletionSparks.StopAndClear start.*/
            StopAndClear: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeCompletionSparks#StopAndClear", this ); }

                FactoryPipePower.PipeCompletionSparks.StopOne(this.sparksA);
                FactoryPipePower.PipeCompletionSparks.StopOne(this.sparksB);
            },
            /*FactoryPipePower.PipeCompletionSparks.StopAndClear end.*/


        }
    });
    /*FactoryPipePower.PipeCompletionSparks end.*/

    /*FactoryPipePower.PipeDiameter start.*/
    Bridge.define("FactoryPipePower.PipeDiameter", {
        $kind: 6,
        statics: {
            fields: {
                Small: 0,
                Large: 1
            }
        }
    });
    /*FactoryPipePower.PipeDiameter end.*/

    /*FactoryPipePower.PipeDirectionsUtility start.*/
    Bridge.define("FactoryPipePower.PipeDirectionsUtility", {
        statics: {
            methods: {
                /*FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter:static start.*/
                NormalizeQuarter: function (yawDegrees) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#NormalizeQuarter", this ); }

                    return Bridge.Int.mul(FactoryPipePower.QuarterTurnUtility.GetQuarterTurn(yawDegrees), 90);
                },
                /*FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.Opposite:static start.*/
                Opposite: function (directionDegrees) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#Opposite", this ); }

                    return (((FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(directionDegrees) + 180) | 0)) % 360;
                },
                /*FactoryPipePower.PipeDirectionsUtility.Opposite:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.GetStraightOpenDirections:static start.*/
                GetStraightOpenDirections: function (yawQuarterDegrees, endA, endB) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#GetStraightOpenDirections", this ); }

                    var axis = FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(yawQuarterDegrees);
                    endA.v = axis;
                    endB.v = (((axis + 180) | 0)) % 360;
                },
                /*FactoryPipePower.PipeDirectionsUtility.GetStraightOpenDirections:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.GetCornerInput:static start.*/
                GetCornerInput: function (yawQuarterDegrees) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#GetCornerInput", this ); }

                    return FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(yawQuarterDegrees);
                },
                /*FactoryPipePower.PipeDirectionsUtility.GetCornerInput:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.GetCornerOutput:static start.*/
                GetCornerOutput: function (yawQuarterDegrees) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#GetCornerOutput", this ); }

                    return FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(yawQuarterDegrees + 270.0);
                },
                /*FactoryPipePower.PipeDirectionsUtility.GetCornerOutput:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.GetCurrentCornerGroup:static start.*/
                GetCurrentCornerGroup: function (yawQuarterDegrees) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#GetCurrentCornerGroup", this ); }

                    var input = FactoryPipePower.PipeDirectionsUtility.GetCornerInput(yawQuarterDegrees);
                    var output = FactoryPipePower.PipeDirectionsUtility.GetCornerOutput(yawQuarterDegrees);

                    if (input === 0 && output === 270) {
                        return FactoryPipePower.CornerRotationGroup.Input0Output270;
                    }
                    if (input === 90 && output === 0) {
                        return FactoryPipePower.CornerRotationGroup.Input90Output0;
                    }
                    if (input === 180 && output === 90) {
                        return FactoryPipePower.CornerRotationGroup.Input180Output90;
                    }
                    return FactoryPipePower.CornerRotationGroup.Input270Output180;
                },
                /*FactoryPipePower.PipeDirectionsUtility.GetCurrentCornerGroup:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.IsOpenDirection:static start.*/
                IsOpenDirection: function (shape, yawQuarterDegrees, directionDegrees) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#IsOpenDirection", this ); }

                    var direction = FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(directionDegrees);

                    if (shape === FactoryPipePower.PipeShape.Corner) {
                        return direction === FactoryPipePower.PipeDirectionsUtility.GetCornerInput(yawQuarterDegrees) || direction === FactoryPipePower.PipeDirectionsUtility.GetCornerOutput(yawQuarterDegrees);
                    }
                    var endA = { };
                    var endB = { };

                    FactoryPipePower.PipeDirectionsUtility.GetStraightOpenDirections(yawQuarterDegrees, endA, endB);
                    return direction === endA.v || direction === endB.v;
                },
                /*FactoryPipePower.PipeDirectionsUtility.IsOpenDirection:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.AreNeighboursCompatible:static start.*/
                AreNeighboursCompatible: function (previousShape, previousYawQuarterDegrees, currentShape, currentYawQuarterDegrees) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#AreNeighboursCompatible", this ); }

                    if (currentShape === FactoryPipePower.PipeShape.Corner) {
                        var input = FactoryPipePower.PipeDirectionsUtility.GetCornerInput(currentYawQuarterDegrees);
                        var output = FactoryPipePower.PipeDirectionsUtility.GetCornerOutput(currentYawQuarterDegrees);

                        if (previousShape === FactoryPipePower.PipeShape.Corner) {
                            var previousInput = FactoryPipePower.PipeDirectionsUtility.GetCornerInput(previousYawQuarterDegrees);
                            var previousOutput = FactoryPipePower.PipeDirectionsUtility.GetCornerOutput(previousYawQuarterDegrees);
                            return FactoryPipePower.PipeDirectionsUtility.Opposite(previousOutput) === input || FactoryPipePower.PipeDirectionsUtility.Opposite(previousInput) === input || FactoryPipePower.PipeDirectionsUtility.Opposite(previousOutput) === output || FactoryPipePower.PipeDirectionsUtility.Opposite(previousInput) === output;
                        }

                        return FactoryPipePower.PipeDirectionsUtility.IsOpenDirection(previousShape, previousYawQuarterDegrees, FactoryPipePower.PipeDirectionsUtility.Opposite(input)) || FactoryPipePower.PipeDirectionsUtility.IsOpenDirection(previousShape, previousYawQuarterDegrees, FactoryPipePower.PipeDirectionsUtility.Opposite(output));
                    }

                    if (previousShape === FactoryPipePower.PipeShape.Corner) {
                        var output1 = FactoryPipePower.PipeDirectionsUtility.GetCornerOutput(previousYawQuarterDegrees);
                        var input1 = FactoryPipePower.PipeDirectionsUtility.GetCornerInput(previousYawQuarterDegrees);
                        return FactoryPipePower.PipeDirectionsUtility.IsOpenDirection(currentShape, currentYawQuarterDegrees, FactoryPipePower.PipeDirectionsUtility.Opposite(output1)) || FactoryPipePower.PipeDirectionsUtility.IsOpenDirection(currentShape, currentYawQuarterDegrees, FactoryPipePower.PipeDirectionsUtility.Opposite(input1));
                    }
                    var previousEndA = { };
                    var previousEndB = { };

                    FactoryPipePower.PipeDirectionsUtility.GetStraightOpenDirections(previousYawQuarterDegrees, previousEndA, previousEndB);
                    return FactoryPipePower.PipeDirectionsUtility.IsOpenDirection(currentShape, currentYawQuarterDegrees, FactoryPipePower.PipeDirectionsUtility.Opposite(previousEndA.v)) || FactoryPipePower.PipeDirectionsUtility.IsOpenDirection(currentShape, currentYawQuarterDegrees, FactoryPipePower.PipeDirectionsUtility.Opposite(previousEndB.v));
                },
                /*FactoryPipePower.PipeDirectionsUtility.AreNeighboursCompatible:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.TryGetDirectionVector:static start.*/
                TryGetDirectionVector: function (directionDegrees, direction) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#TryGetDirectionVector", this ); }

                    switch (FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(directionDegrees)) {
                        case 0: 
                            direction.v = new pc.Vec3( 0, 0, 1 );
                            return true;
                        case 90: 
                            direction.v = pc.Vec3.RIGHT.clone();
                            return true;
                        case 180: 
                            direction.v = new pc.Vec3( 0, 0, -1 );
                            return true;
                        case 270: 
                            direction.v = pc.Vec3.LEFT.clone();
                            return true;
                        default: 
                            direction.v = pc.Vec3.ZERO.clone();
                            return false;
                    }
                },
                /*FactoryPipePower.PipeDirectionsUtility.TryGetDirectionVector:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.TryGetStraightEndByPosition:static start.*/
                TryGetStraightEndByPosition: function (currentYawQuarterDegrees, currentPosition, neighbourPosition, endDegrees) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#TryGetStraightEndByPosition", this ); }

                    endDegrees.v = 0;
                    var endA = { };
                    var endB = { };

                    FactoryPipePower.PipeDirectionsUtility.GetStraightOpenDirections(currentYawQuarterDegrees, endA, endB);
                    var axis = { v : new UnityEngine.Vector3() };

                    if (!FactoryPipePower.PipeDirectionsUtility.TryGetDirectionVector(endA.v, axis)) {
                        return false;
                    }

                    var projection = neighbourPosition.$clone().sub( currentPosition ).dot( axis.v );

                    if (Math.abs(projection) <= 0.0001) {
                        return false;
                    }

                    endDegrees.v = projection > 0.0 ? endA.v : endB.v;
                    return true;
                },
                /*FactoryPipePower.PipeDirectionsUtility.TryGetStraightEndByPosition:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.TryGetConsumedEndOnCurrent:static start.*/
                TryGetConsumedEndOnCurrent: function (neighbourShape, neighbourYawQuarterDegrees, currentYawQuarterDegrees, currentPosition, neighbourPosition, consumedEndDegrees) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#TryGetConsumedEndOnCurrent", this ); }

                    consumedEndDegrees.v = 0;
                    var endByPosition = { };

                    if (!FactoryPipePower.PipeDirectionsUtility.TryGetStraightEndByPosition(currentYawQuarterDegrees, currentPosition, neighbourPosition, endByPosition)) {
                        return false;
                    }

                    if (neighbourShape !== FactoryPipePower.PipeShape.Corner) {
                        consumedEndDegrees.v = endByPosition.v;
                        return true;
                    }

                    var endByPortOutput = FactoryPipePower.PipeDirectionsUtility.Opposite(FactoryPipePower.PipeDirectionsUtility.GetCornerOutput(neighbourYawQuarterDegrees));
                    var endByPortInput = FactoryPipePower.PipeDirectionsUtility.Opposite(FactoryPipePower.PipeDirectionsUtility.GetCornerInput(neighbourYawQuarterDegrees));

                    if (endByPortOutput !== endByPosition.v && endByPortInput !== endByPosition.v) {
                        return false;
                    }

                    consumedEndDegrees.v = endByPosition.v;
                    return true;
                },
                /*FactoryPipePower.PipeDirectionsUtility.TryGetConsumedEndOnCurrent:static end.*/

                /*FactoryPipePower.PipeDirectionsUtility.AreSegmentLinksDistinct:static start.*/
                AreSegmentLinksDistinct: function (previousShape, previousYawQuarterDegrees, previousPosition, currentShape, currentYawQuarterDegrees, currentPosition, nextShape, nextYawQuarterDegrees, nextPosition) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeDirectionsUtility#AreSegmentLinksDistinct", this ); }

                    if (currentShape !== FactoryPipePower.PipeShape.Straight) {
                        return true;
                    }
                    var previousEnd = { };

                    if (!FactoryPipePower.PipeDirectionsUtility.TryGetConsumedEndOnCurrent(previousShape, previousYawQuarterDegrees, currentYawQuarterDegrees, currentPosition, previousPosition, previousEnd)) {
                        return false;
                    }
                    var nextEnd = { };

                    if (!FactoryPipePower.PipeDirectionsUtility.TryGetConsumedEndOnCurrent(nextShape, nextYawQuarterDegrees, currentYawQuarterDegrees, currentPosition, nextPosition, nextEnd)) {
                        return false;
                    }

                    return previousEnd.v !== nextEnd.v;
                },
                /*FactoryPipePower.PipeDirectionsUtility.AreSegmentLinksDistinct:static end.*/


            }
        }
    });
    /*FactoryPipePower.PipeDirectionsUtility end.*/

    /*FactoryPipePower.PipeLength start.*/
    Bridge.define("FactoryPipePower.PipeLength", {
        $kind: 6,
        statics: {
            fields: {
                M1: 1,
                M2: 2,
                M3: 3,
                M4: 4,
                M5: 5
            }
        }
    });
    /*FactoryPipePower.PipeLength end.*/

    /*FactoryPipePower.PipeShape start.*/
    Bridge.define("FactoryPipePower.PipeShape", {
        $kind: 6,
        statics: {
            fields: {
                Straight: 0,
                Corner: 1
            }
        }
    });
    /*FactoryPipePower.PipeShape end.*/

    /*FactoryPipePower.PipeSlotCaptureVolume start.*/
    Bridge.define("FactoryPipePower.PipeSlotCaptureVolume", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ownerSlot: null
        },
        props: {
            OwnerSlot: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotCaptureVolume#OwnerSlot#get", this ); }

                    return this.ownerSlot;
                }
            }
        },
        methods: {
            /*FactoryPipePower.PipeSlotCaptureVolume.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotCaptureVolume#OnTriggerEnter", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.ownerSlot, null) || UnityEngine.Component.op_Equality(other, null)) {
                    return;
                }

                var pipe = other.GetComponentInParent(FactoryPipePower.DraggablePipeController);
                if (UnityEngine.MonoBehaviour.op_Equality(pipe, null)) {
                    return;
                }

                this.ownerSlot.OnPipeTriggerEnter(pipe);
            },
            /*FactoryPipePower.PipeSlotCaptureVolume.OnTriggerEnter end.*/


        }
    });
    /*FactoryPipePower.PipeSlotCaptureVolume end.*/

    /*FactoryPipePower.PipeSlotRegistry start.*/
    Bridge.define("FactoryPipePower.PipeSlotRegistry", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            slots: null,
            activePipe: null,
            DragStartsHandled: 0,
            DragFinishesHandled: 0,
            HoverFilter: null,
            AcceptFilter: null
        },
        props: {
            Slots: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#Slots#get", this ); }

                    return this.slots;
                }
            },
            Count: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#Count#get", this ); }

                    return this.slots.Count;
                }
            },
            ActivePipe: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#ActivePipe#get", this ); }

                    return this.activePipe;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#init", this ); }

                this.slots = new (System.Collections.Generic.List$1(FactoryPipePower.PipeSlotController)).ctor();
            }
        },
        methods: {
            /*FactoryPipePower.PipeSlotRegistry.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#OnEnable", this ); }

                FactoryPipePower.DraggablePipeController.addAnyDragStarted(Bridge.fn.cacheBind(this, this.OnAnyDragStarted));
                FactoryPipePower.DraggablePipeController.addAnyDragFinished(Bridge.fn.cacheBind(this, this.OnAnyDragFinished));
            },
            /*FactoryPipePower.PipeSlotRegistry.OnEnable end.*/

            /*FactoryPipePower.PipeSlotRegistry.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#OnDisable", this ); }

                FactoryPipePower.DraggablePipeController.removeAnyDragStarted(Bridge.fn.cacheBind(this, this.OnAnyDragStarted));
                FactoryPipePower.DraggablePipeController.removeAnyDragFinished(Bridge.fn.cacheBind(this, this.OnAnyDragFinished));

                this.activePipe = null;
                this.ClearHoverOnAllSlots();
            },
            /*FactoryPipePower.PipeSlotRegistry.OnDisable end.*/

            /*FactoryPipePower.PipeSlotRegistry.Register start.*/
            Register: function (slot) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#Register", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(slot, null) || this.slots.contains(slot)) {
                    return;
                }

                this.slots.add(slot);
                slot.OwnerRegistry = this;
            },
            /*FactoryPipePower.PipeSlotRegistry.Register end.*/

            /*FactoryPipePower.PipeSlotRegistry.Unregister start.*/
            Unregister: function (slot) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#Unregister", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(slot, null)) {
                    return;
                }

                this.slots.remove(slot);
                if (UnityEngine.MonoBehaviour.op_Equality(slot.OwnerRegistry, this)) {
                    slot.OwnerRegistry = null;
                }
            },
            /*FactoryPipePower.PipeSlotRegistry.Unregister end.*/

            /*FactoryPipePower.PipeSlotRegistry.OnAnyDragStarted start.*/
            OnAnyDragStarted: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#OnAnyDragStarted", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(pipe, null)) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.activePipe, null) && UnityEngine.MonoBehaviour.op_Inequality(this.activePipe, pipe) && this.activePipe.State === FactoryPipePower.DraggablePipeState.Dragging) {
                    return;
                }

                this.activePipe = pipe;
                this.DragStartsHandled = (this.DragStartsHandled + 1) | 0;

                for (var i = 0; i < this.slots.Count; i = (i + 1) | 0) {
                    var slot = this.slots.getItem(i);
                    if (UnityEngine.MonoBehaviour.op_Equality(slot, null)) {
                        continue;
                    }
                    if (slot.State !== FactoryPipePower.PipeSlotState.Empty) {
                        continue;
                    }
                    if (slot.IsOccupied) {
                        continue;
                    }
                    if (!slot.IsCompatible(pipe)) {
                        continue;
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.HoverFilter, null) && UnityEngine.MonoBehaviour.op_Inequality(slot, this.HoverFilter)) {
                        continue;
                    }

                    slot.SetHoverValid(true);
                }
            },
            /*FactoryPipePower.PipeSlotRegistry.OnAnyDragStarted end.*/

            /*FactoryPipePower.PipeSlotRegistry.OnAnyDragFinished start.*/
            OnAnyDragFinished: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#OnAnyDragFinished", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(pipe, null) || UnityEngine.MonoBehaviour.op_Inequality(pipe, this.activePipe)) {
                    return;
                }

                this.activePipe = null;
                this.DragFinishesHandled = (this.DragFinishesHandled + 1) | 0;
                this.ClearHoverOnAllSlots();
            },
            /*FactoryPipePower.PipeSlotRegistry.OnAnyDragFinished end.*/

            /*FactoryPipePower.PipeSlotRegistry.ClearHoverOnAllSlots start.*/
            ClearHoverOnAllSlots: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotRegistry#ClearHoverOnAllSlots", this ); }

                for (var i = 0; i < this.slots.Count; i = (i + 1) | 0) {
                    var slot = this.slots.getItem(i);
                    if (UnityEngine.MonoBehaviour.op_Equality(slot, null)) {
                        continue;
                    }

                    slot.SetHoverValid(false);
                }
            },
            /*FactoryPipePower.PipeSlotRegistry.ClearHoverOnAllSlots end.*/


        }
    });
    /*FactoryPipePower.PipeSlotRegistry end.*/

    /*FactoryPipePower.PipeSlotState start.*/
    Bridge.define("FactoryPipePower.PipeSlotState", {
        $kind: 6,
        statics: {
            fields: {
                Empty: 0,
                HoverValid: 1,
                OccupiedWrongRotation: 2,
                OccupiedAligned: 3,
                Charging: 4,
                Powered: 5
            }
        }
    });
    /*FactoryPipePower.PipeSlotState end.*/

    /*FactoryPipePower.PipeSpec start.*/
    Bridge.define("FactoryPipePower.PipeSpec", {
        inherits: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSpec#inherits", this ); }
 return [System.IEquatable$1(FactoryPipePower.PipeSpec)]; },
        $kind: 4,
        statics: {
            methods: {
                op_Equality: function (left, right) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSpec#op_Equality", this ); }

                    return left.equalsT(right.$clone());
                },
                op_Inequality: function (left, right) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSpec#op_Inequality", this ); }

                    return !left.equalsT(right.$clone());
                },
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSpec#getDefaultValue", this ); }
 return new FactoryPipePower.PipeSpec(); }
            }
        },
        fields: {
            diameter: 0,
            length: 0,
            shape: 0
        },
        alias: ["equalsT", "System$IEquatable$1$FactoryPipePower$PipeSpec$equalsT"],
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSpec#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*FactoryPipePower.PipeSpec.equalsT start.*/
            equalsT: function (other) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSpec#equalsT", this ); }

                return this.diameter === other.diameter && this.length === other.length && this.shape === other.shape;
            },
            /*FactoryPipePower.PipeSpec.equalsT end.*/

            /*FactoryPipePower.PipeSpec.equals start.*/
            equals: function (obj) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSpec#equals", this ); }

                var other = new FactoryPipePower.PipeSpec();
                return System.Nullable.liftne(FactoryPipePower.PipeSpec.op_Inequality, ((other = Bridge.is(obj, FactoryPipePower.PipeSpec) ? System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj, FactoryPipePower.PipeSpec), FactoryPipePower.PipeSpec)) : null)), null) && this.equalsT(other.$clone());
            },
            /*FactoryPipePower.PipeSpec.equals end.*/

            /*FactoryPipePower.PipeSpec.getHashCode start.*/
            getHashCode: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSpec#getHashCode", this ); }

                return Bridge.Int.mul(((Bridge.Int.mul(this.diameter, 397)) ^ this.length), 397) ^ this.shape;
            },
            /*FactoryPipePower.PipeSpec.getHashCode end.*/

            $clone: function (to) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSpec#$clone", this ); }

                var s = to || new FactoryPipePower.PipeSpec();
                s.diameter = this.diameter;
                s.length = this.length;
                s.shape = this.shape;
                return s;
            }
        },
        overloads: {
            "Equals(PipeSpec)": "equalsT",
            "Equals(object)": "equals",
            "GetHashCode()": "getHashCode"
        }
    });
    /*FactoryPipePower.PipeSpec end.*/

    /*FactoryPipePower.PipeVisualController start.*/
    Bridge.define("FactoryPipePower.PipeVisualController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                FlowEpsilon: 0,
                FillId: 0,
                FlowOriginWsId: 0,
                FlowDirectionWsId: 0,
                FlowLengthId: 0,
                FlowCornerModeId: 0,
                FlowCornerWsId: 0,
                DefaultColorId: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#init", this ); }

                    this.FlowEpsilon = 1E-05;
                    this.FillId = UnityEngine.Shader.PropertyToID("_Fill");
                    this.FlowOriginWsId = UnityEngine.Shader.PropertyToID("_FlowOriginWS");
                    this.FlowDirectionWsId = UnityEngine.Shader.PropertyToID("_FlowDirectionWS");
                    this.FlowLengthId = UnityEngine.Shader.PropertyToID("_FlowLength");
                    this.FlowCornerModeId = UnityEngine.Shader.PropertyToID("_FlowCornerMode");
                    this.FlowCornerWsId = UnityEngine.Shader.PropertyToID("_FlowCornerWS");
                    this.DefaultColorId = UnityEngine.Shader.PropertyToID("_DefaultColor");
                }
            }
        },
        fields: {
            visualRenderer: null,
            tutorialOverlayMaterial: null,
            greenFillTemplate: null,
            overrideFillDefaultColor: false,
            fillDefaultColor: null,
            currentBaseMaterial: null,
            initialBaseMaterial: null,
            greenRuntimeMaterial: null,
            overlayEnabled: false,
            fill: 0,
            flowStartWorld: null,
            flowEndWorld: null,
            flowCornerWorld: null,
            flowDirectionWorld: null,
            flowLength: 0,
            flowConfigured: false,
            flowCornerMode: false
        },
        props: {
            CurrentBaseMaterial: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#CurrentBaseMaterial#get", this ); }

                    return this.currentBaseMaterial;
                }
            },
            IsTutorialOverlayEnabled: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#IsTutorialOverlayEnabled#get", this ); }

                    return this.overlayEnabled;
                }
            },
            HasGreenRuntimeMaterial: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#HasGreenRuntimeMaterial#get", this ); }

                    return this.greenRuntimeMaterial != null;
                }
            },
            CurrentFill: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#CurrentFill#get", this ); }

                    return this.fill;
                }
            },
            IsFlowConfigured: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#IsFlowConfigured#get", this ); }

                    return this.flowConfigured;
                }
            },
            FlowStartWorld: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#FlowStartWorld#get", this ); }

                    return this.flowStartWorld.$clone();
                }
            },
            FlowEndWorld: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#FlowEndWorld#get", this ); }

                    return this.flowEndWorld.$clone();
                }
            },
            FlowDirectionWorld: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#FlowDirectionWorld#get", this ); }

                    return this.flowDirectionWorld.$clone();
                }
            },
            FlowLengthWorld: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#FlowLengthWorld#get", this ); }

                    return this.flowLength;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#init", this ); }

                this.fillDefaultColor = new UnityEngine.Color();
                this.flowStartWorld = new UnityEngine.Vector3();
                this.flowEndWorld = new UnityEngine.Vector3();
                this.flowCornerWorld = new UnityEngine.Vector3();
                this.flowDirectionWorld = new UnityEngine.Vector3();
                this.fillDefaultColor = new pc.Color( 1, 1, 1, 1 );
                this.flowDirectionWorld = new pc.Vec3( 0, 0, 1 );
            }
        },
        methods: {
            /*FactoryPipePower.PipeVisualController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#Awake", this ); }

                this.CaptureInitialBaseMaterial();
            },
            /*FactoryPipePower.PipeVisualController.Awake end.*/

            /*FactoryPipePower.PipeVisualController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#OnDestroy", this ); }

                this.ReleaseGreenRuntimeMaterial();
            },
            /*FactoryPipePower.PipeVisualController.OnDestroy end.*/

            /*FactoryPipePower.PipeVisualController.CaptureInitialBaseMaterial start.*/
            CaptureInitialBaseMaterial: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#CaptureInitialBaseMaterial", this ); }

                if (this.initialBaseMaterial != null || UnityEngine.Component.op_Equality(this.visualRenderer, null)) {
                    return;
                }

                var shared = this.visualRenderer.sharedMaterials;
                if (shared.length > 0) {
                    this.initialBaseMaterial = shared[0];
                }

                if (this.currentBaseMaterial == null) {
                    this.currentBaseMaterial = this.initialBaseMaterial;
                }
            },
            /*FactoryPipePower.PipeVisualController.CaptureInitialBaseMaterial end.*/

            /*FactoryPipePower.PipeVisualController.SetBaseMaterial start.*/
            SetBaseMaterial: function (baseMaterial) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#SetBaseMaterial", this ); }

                this.currentBaseMaterial = baseMaterial;
                this.ApplyMaterials();
            },
            /*FactoryPipePower.PipeVisualController.SetBaseMaterial end.*/

            /*FactoryPipePower.PipeVisualController.SetTutorialOverlay start.*/
            SetTutorialOverlay: function (enabled) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#SetTutorialOverlay", this ); }

                this.overlayEnabled = enabled;
                this.ApplyMaterials();
            },
            /*FactoryPipePower.PipeVisualController.SetTutorialOverlay end.*/

            /*FactoryPipePower.PipeVisualController.UseGreenRuntimeMaterial start.*/
            UseGreenRuntimeMaterial: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#UseGreenRuntimeMaterial", this ); }

                var $t;
                if (this.greenRuntimeMaterial == null) {
                    if (this.greenFillTemplate == null) {
                        UnityEngine.Debug.LogError$2(System.String.format("[PipeVisualController] greenFillTemplate is not assigned on '{0}'.", [this.name]), this);
                        return;
                    }

                    this.greenRuntimeMaterial = ($t = new UnityEngine.Material.$ctor1(this.greenFillTemplate), $t.name = System.String.format("{0} (Runtime {1})", this.greenFillTemplate.name, this.name), $t);
                    this.greenRuntimeMaterial.SetFloat(FactoryPipePower.PipeVisualController.FillId, this.fill);

                    if (this.overrideFillDefaultColor && this.greenRuntimeMaterial.HasProperty(FactoryPipePower.PipeVisualController.DefaultColorId)) {
                        this.greenRuntimeMaterial.SetColor(FactoryPipePower.PipeVisualController.DefaultColorId, this.fillDefaultColor);
                    }
                }

                if (!this.flowConfigured && UnityEngine.Component.op_Inequality(this.visualRenderer, null)) {
                    var bounds = this.visualRenderer.bounds;
                    var direction = this.visualRenderer.transform.forward.clone().normalize().$clone();
                    var length = bounds.halfExtents.$clone().scale( 2 ).length();
                    if (length < FactoryPipePower.PipeVisualController.FlowEpsilon) {
                        length = FactoryPipePower.PipeVisualController.FlowEpsilon;
                    }
                    this.ConfigureFlow(bounds.center, bounds.center.$clone().add( direction.$clone().clone().scale( length ) ));
                }

                this.ApplyFlowToRuntimeMaterial();
                this.SetBaseMaterial(this.greenRuntimeMaterial);
            },
            /*FactoryPipePower.PipeVisualController.UseGreenRuntimeMaterial end.*/

            /*FactoryPipePower.PipeVisualController.SetFill start.*/
            SetFill: function (value) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#SetFill", this ); }

                this.fill = Math.max(0, Math.min(1, value));

                if (this.greenRuntimeMaterial != null) {
                    this.greenRuntimeMaterial.SetFloat(FactoryPipePower.PipeVisualController.FillId, this.fill);
                }
            },
            /*FactoryPipePower.PipeVisualController.SetFill end.*/

            /*FactoryPipePower.PipeVisualController.ConfigureFlow start.*/
            ConfigureFlow: function (startWorld, endWorld) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#ConfigureFlow", this ); }

                this.flowStartWorld = startWorld.$clone();
                this.flowEndWorld = endWorld.$clone();
                this.flowCornerMode = false;

                var direction = endWorld.$clone().sub( startWorld );
                this.flowLength = direction.length();
                this.flowDirectionWorld = this.flowLength > FactoryPipePower.PipeVisualController.FlowEpsilon ? direction.$clone().scale( 1.0 / ( this.flowLength ) ) : new pc.Vec3( 0, 0, 1 );

                this.flowConfigured = true;

                this.ApplyFlowToRuntimeMaterial();
            },
            /*FactoryPipePower.PipeVisualController.ConfigureFlow end.*/

            /*FactoryPipePower.PipeVisualController.ConfigureCornerFlow start.*/
            ConfigureCornerFlow: function (startWorld, cornerWorld, endWorld) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#ConfigureCornerFlow", this ); }

                this.flowStartWorld = startWorld.$clone();
                this.flowEndWorld = endWorld.$clone();
                this.flowCornerWorld = cornerWorld.$clone();
                this.flowCornerMode = true;

                var leg2 = endWorld.$clone().sub( cornerWorld );
                var leg2Length = leg2.length();
                this.flowDirectionWorld = leg2Length > FactoryPipePower.PipeVisualController.FlowEpsilon ? leg2.$clone().scale( 1.0 / ( leg2Length ) ) : new pc.Vec3( 0, 0, 1 );

                var leg1Length = pc.Vec3.distance( cornerWorld, startWorld );
                this.flowLength = leg1Length + leg2Length;
                if (this.flowLength < FactoryPipePower.PipeVisualController.FlowEpsilon) {
                    this.flowLength = FactoryPipePower.PipeVisualController.FlowEpsilon;
                }

                this.flowConfigured = true;

                this.ApplyFlowToRuntimeMaterial();
            },
            /*FactoryPipePower.PipeVisualController.ConfigureCornerFlow end.*/

            /*FactoryPipePower.PipeVisualController.ResetVisual start.*/
            ResetVisual: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#ResetVisual", this ); }

                this.ReleaseGreenRuntimeMaterial();
                this.fill = 0.0;
                this.flowConfigured = false;
                this.flowCornerMode = false;
                this.flowStartWorld = pc.Vec3.ZERO.clone();
                this.flowEndWorld = pc.Vec3.ZERO.clone();
                this.flowCornerWorld = pc.Vec3.ZERO.clone();
                this.flowDirectionWorld = new pc.Vec3( 0, 0, 1 );
                this.flowLength = 0.0;
                this.overlayEnabled = false;

                this.CaptureInitialBaseMaterial();
                this.currentBaseMaterial = this.initialBaseMaterial;
                this.ApplyMaterials();
            },
            /*FactoryPipePower.PipeVisualController.ResetVisual end.*/

            /*FactoryPipePower.PipeVisualController.ApplyFlowToRuntimeMaterial start.*/
            ApplyFlowToRuntimeMaterial: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#ApplyFlowToRuntimeMaterial", this ); }

                if (this.greenRuntimeMaterial == null) {
                    return;
                }

                this.greenRuntimeMaterial.SetVector(FactoryPipePower.PipeVisualController.FlowOriginWsId, UnityEngine.Vector4.FromVector3(this.flowStartWorld));
                this.greenRuntimeMaterial.SetVector(FactoryPipePower.PipeVisualController.FlowDirectionWsId, UnityEngine.Vector4.FromVector3(this.flowDirectionWorld));
                this.greenRuntimeMaterial.SetFloat(FactoryPipePower.PipeVisualController.FlowLengthId, this.flowLength);

                var hasCornerMode = this.greenRuntimeMaterial.HasProperty(FactoryPipePower.PipeVisualController.FlowCornerModeId);
                var hasCornerWs = this.greenRuntimeMaterial.HasProperty(FactoryPipePower.PipeVisualController.FlowCornerWsId);

                if (hasCornerMode) {
                    this.greenRuntimeMaterial.SetFloat(FactoryPipePower.PipeVisualController.FlowCornerModeId, this.flowCornerMode ? 1.0 : 0.0);
                }

                if (hasCornerWs) {
                    this.greenRuntimeMaterial.SetVector(FactoryPipePower.PipeVisualController.FlowCornerWsId, UnityEngine.Vector4.FromVector3(this.flowCornerWorld));
                }
            },
            /*FactoryPipePower.PipeVisualController.ApplyFlowToRuntimeMaterial end.*/

            /*FactoryPipePower.PipeVisualController.ApplyMaterials start.*/
            ApplyMaterials: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#ApplyMaterials", this ); }

                if (UnityEngine.Component.op_Equality(this.visualRenderer, null)) {
                    return;
                }

                var withOverlay = this.overlayEnabled && this.tutorialOverlayMaterial != null;
                var materials = System.Array.init(withOverlay ? 2 : 1, null, UnityEngine.Material);
                materials[0] = this.currentBaseMaterial;
                if (withOverlay) {
                    materials[1] = this.tutorialOverlayMaterial;
                }

                this.visualRenderer.sharedMaterials = materials;
            },
            /*FactoryPipePower.PipeVisualController.ApplyMaterials end.*/

            /*FactoryPipePower.PipeVisualController.ReleaseGreenRuntimeMaterial start.*/
            ReleaseGreenRuntimeMaterial: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeVisualController#ReleaseGreenRuntimeMaterial", this ); }

                if (this.greenRuntimeMaterial == null) {
                    return;
                }

                if (Bridge.referenceEquals(this.currentBaseMaterial, this.greenRuntimeMaterial)) {
                    this.currentBaseMaterial = null;
                }

                if (UnityEngine.Application.isPlaying) {
                    UnityEngine.Object.Destroy(this.greenRuntimeMaterial);
                } else {
                    UnityEngine.Object.DestroyImmediate(this.greenRuntimeMaterial);
                }

                this.greenRuntimeMaterial = null;
            },
            /*FactoryPipePower.PipeVisualController.ReleaseGreenRuntimeMaterial end.*/


        }
    });
    /*FactoryPipePower.PipeVisualController end.*/

    /*FactoryPipePower.PointerInputController start.*/
    Bridge.define("FactoryPipePower.PointerInputController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                MapName: null,
                PositionActionName: null,
                PressActionName: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#init", this ); }

                    this.MapName = "Gameplay";
                    this.PositionActionName = "PointerPosition";
                    this.PressActionName = "PointerPress";
                }
            }
        },
        fields: {
            raycastCamera: null,
            maxRayDistance: 0,
            pickMask: null,
            slotTapMask: null,
            tutorialGateBehaviour: null,
            activePipe: null,
            inputBlocked: false,
            tutorialGate: null,
            tutorialGateResolved: false
        },
        props: {
            ActivePipe: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#ActivePipe#get", this ); }

                    return this.activePipe;
                }
            },
            RaycastCamera: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#RaycastCamera#get", this ); }

                    return this.raycastCamera;
                }
            },
            InputBlocked: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#InputBlocked#get", this ); }

                    return this.inputBlocked;
                }
            },
            TutorialGate: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#TutorialGate#get", this ); }

                    return this.ResolveTutorialGate();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#init", this ); }

                this.pickMask = new UnityEngine.LayerMask();
                this.slotTapMask = new UnityEngine.LayerMask();
                this.maxRayDistance = 100.0;
                this.pickMask = UnityEngine.LayerMask.op_Implicit$1(-1);
                this.slotTapMask = UnityEngine.LayerMask.op_Implicit$1(-1);
            }
        },
        methods: {
            /*FactoryPipePower.PointerInputController.SetInputBlocked start.*/
            SetInputBlocked: function (blocked) {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#SetInputBlocked", this ); }

                this.inputBlocked = blocked;
            },
            /*FactoryPipePower.PointerInputController.SetInputBlocked end.*/

            /*FactoryPipePower.PointerInputController.SetTutorialGate start.*/
            SetTutorialGate: function (gateBehaviour) {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#SetTutorialGate", this ); }

                this.tutorialGateBehaviour = gateBehaviour;
                this.tutorialGate = null;
                this.tutorialGateResolved = false;
            },
            /*FactoryPipePower.PointerInputController.SetTutorialGate end.*/

            /*FactoryPipePower.PointerInputController.ResolveTutorialGate start.*/
            ResolveTutorialGate: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#ResolveTutorialGate", this ); }

                if (!this.tutorialGateResolved) {
                    this.tutorialGate = Bridge.as(this.tutorialGateBehaviour, FactoryPipePower.ITutorialInputGate);
                    this.tutorialGateResolved = true;
                }

                return this.tutorialGate;
            },
            /*FactoryPipePower.PointerInputController.ResolveTutorialGate end.*/

            /*FactoryPipePower.PointerInputController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.raycastCamera, null)) {
                    this.raycastCamera = UnityEngine.Camera.main;
                }

            },
            /*FactoryPipePower.PointerInputController.Awake end.*/

            /*FactoryPipePower.PointerInputController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#OnDestroy", this ); }


                this.ReleaseActivePipe();
            },
            /*FactoryPipePower.PointerInputController.OnDestroy end.*/

            /*FactoryPipePower.PointerInputController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.HandlePressStarted(this.CurrentPointerPosition());
                }

                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.HandlePressCanceled();
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.activePipe, null)) {
                    return;
                }

                if (this.activePipe.State === FactoryPipePower.DraggablePipeState.Placed) {
                    this.ReleaseActivePipe();
                    return;
                }

                if (this.activePipe.State === FactoryPipePower.DraggablePipeState.Dragging && this.HasPointerPosition()) {
                    this.activePipe.UpdateDrag(this.CurrentPointerPosition(), this.raycastCamera);
                }
            },
            /*FactoryPipePower.PointerInputController.Update end.*/

            /*FactoryPipePower.PointerInputController.HandlePressStarted start.*/
            HandlePressStarted: function (screenPosition) {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#HandlePressStarted", this ); }

                if (this.inputBlocked) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.activePipe, null)) {
                    return;
                }
                if (UnityEngine.Component.op_Equality(this.raycastCamera, null)) {
                    return;
                }

                var gate = this.ResolveTutorialGate();

                if (gate != null && gate.FactoryPipePower$ITutorialInputGate$TryConsumeAdvancePress(screenPosition.$clone())) {
                    return;
                }

                var ray = this.raycastCamera.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPosition));
                var hit = { v : new UnityEngine.RaycastHit() };

                if (UnityEngine.Physics.Raycast$1(ray, hit, this.maxRayDistance, UnityEngine.LayerMask.op_Implicit(this.pickMask.$clone()), UnityEngine.QueryTriggerInteraction.Ignore)) {
                    var pipe = hit.v.collider.GetComponentInParent(FactoryPipePower.DraggablePipeController);
                    if (UnityEngine.MonoBehaviour.op_Inequality(pipe, null) && pipe.IsInteractable && pipe.State === FactoryPipePower.DraggablePipeState.Stock && (gate == null || gate.FactoryPipePower$ITutorialInputGate$IsPipeAllowed(pipe))) {
                        this.activePipe = pipe;
                        pipe.addCommitted(Bridge.fn.cacheBind(this, this.OnActivePipeCommitted));
                        pipe.BeginDrag(screenPosition, this.raycastCamera);
                        return;
                    }
                }
                var slotHit = { v : new UnityEngine.RaycastHit() };

                if (UnityEngine.Physics.Raycast$1(ray, slotHit, this.maxRayDistance, UnityEngine.LayerMask.op_Implicit(this.slotTapMask.$clone()), UnityEngine.QueryTriggerInteraction.Ignore)) {
                    var slot = slotHit.v.collider.GetComponentInParent(FactoryPipePower.PipeSlotController);
                    if (UnityEngine.MonoBehaviour.op_Inequality(slot, null) && (gate == null || gate.FactoryPipePower$ITutorialInputGate$IsSlotTapAllowed(slot))) {
                        slot.TryRotateTap();
                    }
                }
            },
            /*FactoryPipePower.PointerInputController.HandlePressStarted end.*/

            /*FactoryPipePower.PointerInputController.HandlePressCanceled start.*/
            HandlePressCanceled: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#HandlePressCanceled", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.activePipe, null)) {
                    return;
                }

                if (this.activePipe.State === FactoryPipePower.DraggablePipeState.Dragging) {
                    this.activePipe.EndDragWithoutPlacement();
                }

                this.ReleaseActivePipe();
            },
            /*FactoryPipePower.PointerInputController.HandlePressCanceled end.*/

            /*FactoryPipePower.PointerInputController.CurrentPointerPosition start.*/
            CurrentPointerPosition: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#CurrentPointerPosition", this ); }

                return UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
            },
            /*FactoryPipePower.PointerInputController.CurrentPointerPosition end.*/

            /*FactoryPipePower.PointerInputController.HasPointerPosition start.*/
            HasPointerPosition: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#HasPointerPosition", this ); }

                return true;
            },
            /*FactoryPipePower.PointerInputController.HasPointerPosition end.*/

            /*FactoryPipePower.PointerInputController.OnActivePipeCommitted start.*/
            OnActivePipeCommitted: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#OnActivePipeCommitted", this ); }

                this.ReleaseActivePipe();
            },
            /*FactoryPipePower.PointerInputController.OnActivePipeCommitted end.*/

            /*FactoryPipePower.PointerInputController.ReleaseActivePipe start.*/
            ReleaseActivePipe: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PointerInputController#ReleaseActivePipe", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.activePipe, null)) {
                    return;
                }

                this.activePipe.removeCommitted(Bridge.fn.cacheBind(this, this.OnActivePipeCommitted));
                this.activePipe = null;
            },
            /*FactoryPipePower.PointerInputController.ReleaseActivePipe end.*/


        }
    });
    /*FactoryPipePower.PointerInputController end.*/

    /*FactoryPipePower.PowerChainController start.*/
    Bridge.define("FactoryPipePower.PowerChainController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            startNode: null,
            slots: null,
            endNode: null,
            factoryPowerController: null,
            narrativeSequence: null,
            initialized: false
        },
        props: {
            IsInitialized: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PowerChainController#IsInitialized#get", this ); }

                    return this.initialized;
                }
            },
            StartNode: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PowerChainController#StartNode#get", this ); }

                    return this.startNode;
                }
            },
            EndNode: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PowerChainController#EndNode#get", this ); }

                    return this.endNode;
                }
            },
            Slots: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PowerChainController#Slots#get", this ); }

                    return this.slots;
                }
            }
        },
        methods: {
            /*FactoryPipePower.PowerChainController.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PowerChainController#Initialize", this ); }

                var $t;
                this.initialized = false;

                if (UnityEngine.MonoBehaviour.op_Equality(this.startNode, null)) {
                    UnityEngine.Debug.LogError$2("[PowerChainController] startNode is not assigned on '" + (this.name || "") + "'.", this);
                    return;
                }

                UnityEngine.MonoBehaviour.op_Inequality(this.factoryPowerController, null) ? this.factoryPowerController.Initialize() : null;
                UnityEngine.MonoBehaviour.op_Inequality(this.endNode, null) ? this.endNode.Initialize() : null;

                if (this.slots != null) {
                    $t = Bridge.getEnumerator(this.slots);
                    try {
                        while ($t.moveNext()) {
                            var slot = $t.Current;
                            if (UnityEngine.MonoBehaviour.op_Inequality(slot, null)) {
                                slot.ResetPowerState();
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

                this.LinkChain();

                this.startNode.Initialize();

                if (UnityEngine.MonoBehaviour.op_Inequality(this.narrativeSequence, null) && !this.narrativeSequence.TutorialControlled) {
                    this.narrativeSequence.BeginLeftChain();
                }

                this.initialized = true;
            },
            /*FactoryPipePower.PowerChainController.Initialize end.*/

            /*FactoryPipePower.PowerChainController.LinkChain start.*/
            LinkChain: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PowerChainController#LinkChain", this ); }

                var first = this.FirstNodeAfterStart();
                this.startNode.SetNextNode(first);

                if (this.slots != null) {
                    for (var i = 0; i < this.slots.length; i = (i + 1) | 0) {
                        var slot = this.slots[i];
                        if (UnityEngine.MonoBehaviour.op_Equality(slot, null)) {
                            continue;
                        }

                        var previous = i === 0 ? Bridge.cast(this.startNode, FactoryPipePower.IPowerNode) : this.slots[((i - 1) | 0)];
                        var next = i === ((this.slots.length - 1) | 0) ? Bridge.cast(this.endNode, FactoryPipePower.IPowerNode) : this.slots[((i + 1) | 0)];
                        slot.SetupPowerNodes(previous, next);
                    }
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.endNode, null)) {
                    this.endNode.SetExpectedPrevious(this.LastNodeBeforeEnd());
                }
            },
            /*FactoryPipePower.PowerChainController.LinkChain end.*/

            /*FactoryPipePower.PowerChainController.FirstNodeAfterStart start.*/
            FirstNodeAfterStart: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PowerChainController#FirstNodeAfterStart", this ); }

                if (this.slots != null && this.slots.length > 0 && UnityEngine.MonoBehaviour.op_Inequality(this.slots[0], null)) {
                    return this.slots[0];
                }
                return this.endNode;
            },
            /*FactoryPipePower.PowerChainController.FirstNodeAfterStart end.*/

            /*FactoryPipePower.PowerChainController.LastNodeBeforeEnd start.*/
            LastNodeBeforeEnd: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PowerChainController#LastNodeBeforeEnd", this ); }

                if (this.slots != null && this.slots.length > 0 && UnityEngine.MonoBehaviour.op_Inequality(this.slots[((this.slots.length - 1) | 0)], null)) {
                    return this.slots[((this.slots.length - 1) | 0)];
                }
                return this.startNode;
            },
            /*FactoryPipePower.PowerChainController.LastNodeBeforeEnd end.*/


        }
    });
    /*FactoryPipePower.PowerChainController end.*/

    /*FactoryPipePower.QuarterTurnUtility start.*/
    Bridge.define("FactoryPipePower.QuarterTurnUtility", {
        statics: {
            methods: {
                /*FactoryPipePower.QuarterTurnUtility.GetQuarterTurn:static start.*/
                GetQuarterTurn: function (yaw) {
if ( TRACE ) { TRACE( "FactoryPipePower.QuarterTurnUtility#GetQuarterTurn", this ); }

                    var normalized = yaw - Math.floor(yaw / 360.0) * 360.0;
                    return Math.round(normalized / 90.0) & 3;
                },
                /*FactoryPipePower.QuarterTurnUtility.GetQuarterTurn:static end.*/

                /*FactoryPipePower.QuarterTurnUtility.QuarterTurnToYaw:static start.*/
                QuarterTurnToYaw: function (quarterTurn) {
if ( TRACE ) { TRACE( "FactoryPipePower.QuarterTurnUtility#QuarterTurnToYaw", this ); }

                    return (quarterTurn & 3) * 90.0;
                },
                /*FactoryPipePower.QuarterTurnUtility.QuarterTurnToYaw:static end.*/

                /*FactoryPipePower.QuarterTurnUtility.QuarterTurnToRotation:static start.*/
                QuarterTurnToRotation: function (quarterTurn) {
if ( TRACE ) { TRACE( "FactoryPipePower.QuarterTurnUtility#QuarterTurnToRotation", this ); }

                    return new pc.Quat().setFromEulerAngles_Unity( 0.0, FactoryPipePower.QuarterTurnUtility.QuarterTurnToYaw(quarterTurn), 0.0 );
                },
                /*FactoryPipePower.QuarterTurnUtility.QuarterTurnToRotation:static end.*/

                /*FactoryPipePower.QuarterTurnUtility.IsAligned:static start.*/
                IsAligned: function (yaw, group) {
if ( TRACE ) { TRACE( "FactoryPipePower.QuarterTurnUtility#IsAligned", this ); }

                    var q = FactoryPipePower.QuarterTurnUtility.GetQuarterTurn(yaw);
                    switch (group) {
                        case FactoryPipePower.RotationGroup.Yaw0Or180: 
                            return q === 0 || q === 2;
                        case FactoryPipePower.RotationGroup.Yaw90Or270: 
                            return q === 1 || q === 3;
                        default: 
                            return false;
                    }
                },
                /*FactoryPipePower.QuarterTurnUtility.IsAligned:static end.*/


            }
        }
    });
    /*FactoryPipePower.QuarterTurnUtility end.*/

    /*FactoryPipePower.RotationGroup start.*/
    Bridge.define("FactoryPipePower.RotationGroup", {
        $kind: 6,
        statics: {
            fields: {
                Yaw0Or180: 0,
                Yaw90Or270: 1
            }
        }
    });
    /*FactoryPipePower.RotationGroup end.*/

    /*FactoryPipePower.SceneInitializer start.*/
    Bridge.define("FactoryPipePower.SceneInitializer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pointerInput: null,
            registry: null,
            powerChain: null,
            tutorial: null,
            factoryTutorial: null,
            slots: null,
            initialized: false
        },
        props: {
            IsInitialized: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SceneInitializer#IsInitialized#get", this ); }

                    return this.initialized;
                }
            }
        },
        methods: {
            /*FactoryPipePower.SceneInitializer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SceneInitializer#Start", this ); }

                if (this.initialized) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.pointerInput, null)) {
                    UnityEngine.Debug.LogError$2("[SceneInitializer] pointerInput is not assigned on '" + (this.name || "") + "'. Initialization aborted.", this);
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.registry, null)) {
                    UnityEngine.Debug.LogError$2("[SceneInitializer] registry is not assigned on '" + (this.name || "") + "'. Initialization aborted.", this);
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.powerChain, null)) {
                    UnityEngine.Debug.LogError$2("[SceneInitializer] powerChain is not assigned on '" + (this.name || "") + "'. Initialization aborted.", this);
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.tutorial, null)) {
                    UnityEngine.Debug.LogError$2("[SceneInitializer] tutorial is not assigned on '" + (this.name || "") + "'. Initialization aborted.", this);
                    return;
                }
                if (this.slots == null || this.slots.length === 0) {
                    UnityEngine.Debug.LogError$2("[SceneInitializer] slots are not assigned on '" + (this.name || "") + "'. Initialization aborted.", this);
                    return;
                }

                for (var i = 0; i < this.slots.length; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.slots[i], null)) {
                        UnityEngine.Debug.LogError$2("[SceneInitializer] slots[" + i + "] is null on '" + (this.name || "") + "'. Initialization aborted.", this);
                        return;
                    }
                }

                this.pointerInput.SetInputBlocked(true);

                for (var i1 = 0; i1 < this.slots.length; i1 = (i1 + 1) | 0) {
                    this.registry.Register(this.slots[i1]);
                }

                this.powerChain.Initialize();

                if (UnityEngine.MonoBehaviour.op_Inequality(this.factoryTutorial, null)) {
                    this.factoryTutorial.InitializeTutorial();
                } else {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorial, null)) {
                        this.tutorial.InitializeTutorial();
                    }
                }

                this.pointerInput.SetInputBlocked(false);
                this.initialized = true;
            },
            /*FactoryPipePower.SceneInitializer.Start end.*/


        }
    });
    /*FactoryPipePower.SceneInitializer end.*/

    /*FactoryPipePower.SmokePipeIndicatorSequence start.*/
    Bridge.define("FactoryPipePower.SmokePipeIndicatorSequence", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                FirstStepTime: 0,
                SecondStepTime: 0,
                ThirdStepTime: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#init", this ); }

                    this.FirstStepTime = 0.3;
                    this.SecondStepTime = 0.6;
                    this.ThirdStepTime = 0.9;
                }
            },
            methods: {
                /*FactoryPipePower.SmokePipeIndicatorSequence.WaitUntilElapsed:static start.*/
                WaitUntilElapsed: function (startedAt, elapsed) {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#WaitUntilElapsed", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if ( UnityEngine.Time.time - startedAt < elapsed ) {
                                                $step = 1;
                                                continue;
                                            } 
                                            $step = 3;
                                            continue;
                                    }
                                    case 1: {
                                        $enumerator.current = null;
                                            $step = 2;
                                            return true;
                                    }
                                    case 2: {
                                        
                                            $step = 0;
                                            continue;
                                    }
                                    case 3: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*FactoryPipePower.SmokePipeIndicatorSequence.WaitUntilElapsed:static end.*/


            }
        },
        fields: {
            factory: null,
            pipe1Inserts: null,
            pipe2Inserts: null,
            offlineMaterial: null,
            onlineMaterial: null,
            phase: 0,
            runningRoutine: null,
            subscribed: false
        },
        events: {
            SequenceCompleted: null
        },
        props: {
            IsRunning: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#IsRunning#get", this ); }

                    return this.phase === FactoryPipePower.SmokePipeIndicatorSequence.Phase.Running;
                }
            },
            IsCompleted: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#IsCompleted#get", this ); }

                    return this.phase === FactoryPipePower.SmokePipeIndicatorSequence.Phase.Completed;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#init", this ); }

                this.pipe1Inserts = System.Array.init(3, null, UnityEngine.Renderer);
                this.pipe2Inserts = System.Array.init(3, null, UnityEngine.Renderer);
                this.phase = FactoryPipePower.SmokePipeIndicatorSequence.Phase.Idle;
            }
        },
        methods: {
            /*FactoryPipePower.SmokePipeIndicatorSequence.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#OnEnable", this ); }

                this.TrySubscribeAndSync();
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.OnEnable end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#Update", this ); }

                if (!this.subscribed) {
                    this.TrySubscribeAndSync();
                }
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.Update end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#OnDisable", this ); }

                this.Unsubscribe();
                this.StopSequence();
                this.phase = FactoryPipePower.SmokePipeIndicatorSequence.Phase.Idle;
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.OnDisable end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.TrySubscribeAndSync start.*/
            TrySubscribeAndSync: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#TrySubscribeAndSync", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.factory, null)) {
                    return;
                }

                var wasSubscribed = this.subscribed;
                this.Subscribe();

                if (this.subscribed && !wasSubscribed) {
                    this.SyncToFactory();
                }
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.TrySubscribeAndSync end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.Subscribe start.*/
            Subscribe: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#Subscribe", this ); }

                if (this.subscribed || UnityEngine.MonoBehaviour.op_Equality(this.factory, null)) {
                    return;
                }

                this.factory.addFactoryOnline(Bridge.fn.cacheBind(this, this.HandleFactoryOnline));
                this.factory.addFactoryOffline(Bridge.fn.cacheBind(this, this.HandleFactoryOffline));
                this.subscribed = true;
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.Subscribe end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.Unsubscribe start.*/
            Unsubscribe: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#Unsubscribe", this ); }

                if (!this.subscribed) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.factory, null)) {
                    this.factory.removeFactoryOnline(Bridge.fn.cacheBind(this, this.HandleFactoryOnline));
                    this.factory.removeFactoryOffline(Bridge.fn.cacheBind(this, this.HandleFactoryOffline));
                }

                this.subscribed = false;
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.Unsubscribe end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.SyncToFactory start.*/
            SyncToFactory: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#SyncToFactory", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.factory, null)) {
                    return;
                }

                if (this.factory.IsOnline) {
                    this.HandleFactoryOnline();
                } else {
                    this.HandleFactoryOffline();
                }
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.SyncToFactory end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.HandleFactoryOnline start.*/
            HandleFactoryOnline: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#HandleFactoryOnline", this ); }

                if (this.phase !== FactoryPipePower.SmokePipeIndicatorSequence.Phase.Idle) {
                    return;
                }

                this.StartSequence();
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.HandleFactoryOnline end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.HandleFactoryOffline start.*/
            HandleFactoryOffline: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#HandleFactoryOffline", this ); }

                this.StopSequence();
                this.phase = FactoryPipePower.SmokePipeIndicatorSequence.Phase.Idle;
                this.ApplyAll(false);
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.HandleFactoryOffline end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.StartSequence start.*/
            StartSequence: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#StartSequence", this ); }

                this.phase = FactoryPipePower.SmokePipeIndicatorSequence.Phase.Running;
                this.ApplyAll(false);

                if (this.runningRoutine == null) {
                    this.runningRoutine = this.StartCoroutine$1(this.RunSequence());
                }
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.StartSequence end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.StopSequence start.*/
            StopSequence: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#StopSequence", this ); }

                if (this.runningRoutine == null) {
                    return;
                }

                this.StopCoroutine$2(this.runningRoutine);
                this.runningRoutine = null;
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.StopSequence end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.RunSequence start.*/
            RunSequence: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#RunSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startedAt,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startedAt = UnityEngine.Time.time;

                                        $enumerator.current = FactoryPipePower.SmokePipeIndicatorSequence.WaitUntilElapsed(startedAt, FactoryPipePower.SmokePipeIndicatorSequence.FirstStepTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.ApplyStep(0, true);

                                        $enumerator.current = FactoryPipePower.SmokePipeIndicatorSequence.WaitUntilElapsed(startedAt, FactoryPipePower.SmokePipeIndicatorSequence.SecondStepTime);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.ApplyStep(1, true);

                                        $enumerator.current = FactoryPipePower.SmokePipeIndicatorSequence.WaitUntilElapsed(startedAt, FactoryPipePower.SmokePipeIndicatorSequence.ThirdStepTime);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.ApplyStep(2, true);

                                        this.runningRoutine = null;
                                        this.phase = FactoryPipePower.SmokePipeIndicatorSequence.Phase.Completed;
                                        !Bridge.staticEquals(this.SequenceCompleted, null) ? this.SequenceCompleted() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.RunSequence end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.ApplyStep start.*/
            ApplyStep: function (step, online) {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#ApplyStep", this ); }

                this.SetSlot$1(this.pipe1Inserts, step, online);
                this.SetSlot$1(this.pipe2Inserts, step, online);
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.ApplyStep end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.ApplyAll start.*/
            ApplyAll: function (online) {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#ApplyAll", this ); }

                this.ApplyStep(0, online);
                this.ApplyStep(1, online);
                this.ApplyStep(2, online);
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.ApplyAll end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.SetSlot$1 start.*/
            SetSlot$1: function (renderers, step, online) {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#SetSlot$1", this ); }

                if (renderers == null || step < 0 || step >= renderers.length) {
                    return;
                }

                this.SetSlot(renderers[step], online);
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.SetSlot$1 end.*/

            /*FactoryPipePower.SmokePipeIndicatorSequence.SetSlot start.*/
            SetSlot: function (renderer, online) {
if ( TRACE ) { TRACE( "FactoryPipePower.SmokePipeIndicatorSequence#SetSlot", this ); }

                if (UnityEngine.Component.op_Equality(renderer, null)) {
                    return;
                }

                var target = online ? this.onlineMaterial : this.offlineMaterial;
                if (target == null) {
                    return;
                }

                var materials = renderer.sharedMaterials;
                if (materials == null || materials.length === 0) {
                    return;
                }

                if (Bridge.referenceEquals(materials[0], target)) {
                    return;
                }

                materials[0] = target;
                renderer.sharedMaterials = materials;
            },
            /*FactoryPipePower.SmokePipeIndicatorSequence.SetSlot end.*/


        },
        overloads: {
            "SetSlot(Renderer[], int, bool)": "SetSlot$1"
        }
    });
    /*FactoryPipePower.SmokePipeIndicatorSequence end.*/

    /*FactoryPipePower.SmokePipeIndicatorSequence+Phase start.*/
    Bridge.define("FactoryPipePower.SmokePipeIndicatorSequence.Phase", {
        $kind: 1006,
        statics: {
            fields: {
                Idle: 0,
                Running: 1,
                Completed: 2
            }
        }
    });
    /*FactoryPipePower.SmokePipeIndicatorSequence+Phase end.*/

    /*FactoryPipePower.TutorialController start.*/
    Bridge.define("FactoryPipePower.TutorialController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tutorialPipe: null,
            tutorialSlot: null,
            enableOnInitialize: false,
            currentStep: 0,
            configurationValid: false,
            subscribed: false
        },
        props: {
            CurrentStep: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#CurrentStep#get", this ); }

                    return this.currentStep;
                }
            },
            TutorialPipe: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#TutorialPipe#get", this ); }

                    return this.tutorialPipe;
                }
            },
            TutorialSlot: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#TutorialSlot#get", this ); }

                    return this.tutorialSlot;
                }
            },
            IsSubscribed: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#IsSubscribed#get", this ); }

                    return this.subscribed;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#init", this ); }

                this.enableOnInitialize = true;
                this.currentStep = FactoryPipePower.TutorialStep.None;
            }
        },
        methods: {
            /*FactoryPipePower.TutorialController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#OnEnable", this ); }

                // Lifecycle re-enable: восстановить подписки, если tutorial активен.
                if (this.currentStep !== FactoryPipePower.TutorialStep.None && this.currentStep !== FactoryPipePower.TutorialStep.Complete) {
                    this.Subscribe();
                }
            },
            /*FactoryPipePower.TutorialController.OnEnable end.*/

            /*FactoryPipePower.TutorialController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#OnDisable", this ); }

                this.Unsubscribe();
            },
            /*FactoryPipePower.TutorialController.OnDisable end.*/

            /*FactoryPipePower.TutorialController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#OnDestroy", this ); }

                this.Unsubscribe();
            },
            /*FactoryPipePower.TutorialController.OnDestroy end.*/

            /*FactoryPipePower.TutorialController.InitializeTutorial start.*/
            InitializeTutorial: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#InitializeTutorial", this ); }

                if (!this.enableOnInitialize) {
                    return;
                }

                this.Unsubscribe();

                if (UnityEngine.MonoBehaviour.op_Equality(this.tutorialPipe, null) || UnityEngine.MonoBehaviour.op_Equality(this.tutorialSlot, null)) {
                    this.configurationValid = false;
                    this.currentStep = FactoryPipePower.TutorialStep.None;
                    this.ClearOverlays();
                    return;
                }

                if (!this.tutorialSlot.IsCompatible(this.tutorialPipe)) {
                    this.configurationValid = false;
                    this.currentStep = FactoryPipePower.TutorialStep.None;
                    this.ClearOverlays();
                    UnityEngine.Debug.LogError$2(System.String.format("[TutorialController] Tutorial configuration error: pipe '{0}' is not compatible with slot '{1}' (PipeSpec mismatch). Tutorial not started.", this.tutorialPipe.name, this.tutorialSlot.name), this);
                    return;
                }

                this.configurationValid = true;
                this.currentStep = FactoryPipePower.TutorialStep.HighlightPipe;
                this.SetPipeOverlay(true);
                this.SetSlotOverlay(false);
                this.Subscribe();
            },
            /*FactoryPipePower.TutorialController.InitializeTutorial end.*/

            /*FactoryPipePower.TutorialController.ResetTutorial start.*/
            ResetTutorial: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#ResetTutorial", this ); }

                this.ClearOverlays();

                if (this.configurationValid && UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe, null) && UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot, null) && this.tutorialPipe.State === FactoryPipePower.DraggablePipeState.Stock) {
                    this.currentStep = FactoryPipePower.TutorialStep.HighlightPipe;
                    this.SetPipeOverlay(true);
                    this.Subscribe();
                } else {
                    this.currentStep = FactoryPipePower.TutorialStep.None;
                    this.Unsubscribe();
                }
            },
            /*FactoryPipePower.TutorialController.ResetTutorial end.*/

            /*FactoryPipePower.TutorialController.DisableTutorial start.*/
            DisableTutorial: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#DisableTutorial", this ); }

                this.ClearOverlays();
                this.currentStep = FactoryPipePower.TutorialStep.None;
                this.Unsubscribe();
            },
            /*FactoryPipePower.TutorialController.DisableTutorial end.*/

            /*FactoryPipePower.TutorialController.HandleDragStarted start.*/
            HandleDragStarted: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#HandleDragStarted", this ); }

                if (this.currentStep === FactoryPipePower.TutorialStep.None || this.currentStep === FactoryPipePower.TutorialStep.Complete) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(pipe, this.tutorialPipe)) {
                    return;
                }
                if (this.currentStep !== FactoryPipePower.TutorialStep.HighlightPipe) {
                    return;
                }

                this.SetPipeOverlay(false);
                this.SetSlotOverlay(true);
                this.currentStep = FactoryPipePower.TutorialStep.HighlightSlot;
            },
            /*FactoryPipePower.TutorialController.HandleDragStarted end.*/

            /*FactoryPipePower.TutorialController.HandleReturnedToStock start.*/
            HandleReturnedToStock: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#HandleReturnedToStock", this ); }

                if (this.currentStep === FactoryPipePower.TutorialStep.None || this.currentStep === FactoryPipePower.TutorialStep.Complete) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(pipe, this.tutorialPipe)) {
                    return;
                }
                if (this.currentStep !== FactoryPipePower.TutorialStep.HighlightSlot) {
                    return;
                }

                this.SetSlotOverlay(false);
                this.SetPipeOverlay(true);
                this.currentStep = FactoryPipePower.TutorialStep.HighlightPipe;
            },
            /*FactoryPipePower.TutorialController.HandleReturnedToStock end.*/

            /*FactoryPipePower.TutorialController.HandleSlotStateChanged start.*/
            HandleSlotStateChanged: function (slot, newState) {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#HandleSlotStateChanged", this ); }

                if (this.currentStep === FactoryPipePower.TutorialStep.None || this.currentStep === FactoryPipePower.TutorialStep.Complete) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(slot, this.tutorialSlot)) {
                    return;
                }
                if (newState === FactoryPipePower.PipeSlotState.Charging || newState === FactoryPipePower.PipeSlotState.Powered) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot.AcceptedPipe, this.tutorialPipe)) {
                    return;
                }

                if (newState === FactoryPipePower.PipeSlotState.OccupiedWrongRotation && this.currentStep === FactoryPipePower.TutorialStep.HighlightSlot) {
                    this.SetPipeOverlay(false);
                    this.SetSlotOverlay(true);
                    this.currentStep = FactoryPipePower.TutorialStep.HighlightRotation;
                    return;
                }

                if (newState === FactoryPipePower.PipeSlotState.OccupiedAligned && (this.currentStep === FactoryPipePower.TutorialStep.HighlightSlot || this.currentStep === FactoryPipePower.TutorialStep.HighlightRotation)) {
                    this.SetPipeOverlay(false);
                    this.SetSlotOverlay(false);
                    this.currentStep = FactoryPipePower.TutorialStep.Complete;
                    this.Unsubscribe();
                }
            },
            /*FactoryPipePower.TutorialController.HandleSlotStateChanged end.*/

            /*FactoryPipePower.TutorialController.Subscribe start.*/
            Subscribe: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#Subscribe", this ); }

                if (this.subscribed) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe, null)) {
                    this.tutorialPipe.addDragStarted(Bridge.fn.cacheBind(this, this.HandleDragStarted));
                    this.tutorialPipe.addReturnedToStock(Bridge.fn.cacheBind(this, this.HandleReturnedToStock));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot, null)) {
                    this.tutorialSlot.addStateChanged(Bridge.fn.cacheBind(this, this.HandleSlotStateChanged));
                }

                this.subscribed = true;
            },
            /*FactoryPipePower.TutorialController.Subscribe end.*/

            /*FactoryPipePower.TutorialController.Unsubscribe start.*/
            Unsubscribe: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#Unsubscribe", this ); }

                if (!this.subscribed) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe, null)) {
                    this.tutorialPipe.removeDragStarted(Bridge.fn.cacheBind(this, this.HandleDragStarted));
                    this.tutorialPipe.removeReturnedToStock(Bridge.fn.cacheBind(this, this.HandleReturnedToStock));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot, null)) {
                    this.tutorialSlot.removeStateChanged(Bridge.fn.cacheBind(this, this.HandleSlotStateChanged));
                }

                this.subscribed = false;
            },
            /*FactoryPipePower.TutorialController.Unsubscribe end.*/

            /*FactoryPipePower.TutorialController.ClearOverlays start.*/
            ClearOverlays: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#ClearOverlays", this ); }

                this.SetPipeOverlay(false);
                this.SetSlotOverlay(false);
            },
            /*FactoryPipePower.TutorialController.ClearOverlays end.*/

            /*FactoryPipePower.TutorialController.SetPipeOverlay start.*/
            SetPipeOverlay: function (value) {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#SetPipeOverlay", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe, null) && UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe.Visual, null)) {
                    this.tutorialPipe.Visual.SetTutorialOverlay(value);
                }
            },
            /*FactoryPipePower.TutorialController.SetPipeOverlay end.*/

            /*FactoryPipePower.TutorialController.SetSlotOverlay start.*/
            SetSlotOverlay: function (value) {
if ( TRACE ) { TRACE( "FactoryPipePower.TutorialController#SetSlotOverlay", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot, null) && UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot.Visual, null)) {
                    this.tutorialSlot.Visual.SetTutorialOverlay(value);
                }
            },
            /*FactoryPipePower.TutorialController.SetSlotOverlay end.*/


        }
    });
    /*FactoryPipePower.TutorialController end.*/

    /*FactoryPipePower.TutorialStep start.*/
    Bridge.define("FactoryPipePower.TutorialStep", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                HighlightPipe: 1,
                HighlightSlot: 2,
                HighlightRotation: 3,
                Complete: 4
            }
        }
    });
    /*FactoryPipePower.TutorialStep end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*FactoryPipePower.EndPowerNode start.*/
    Bridge.define("FactoryPipePower.EndPowerNode", {
        inherits: [UnityEngine.MonoBehaviour,FactoryPipePower.IPowerNode],
        fields: {
            expectedPreviousBehaviour: null,
            powerInput: null,
            visual: null,
            inactiveMaterial: null,
            poweredMaterial: null,
            factoryPowerController: null,
            narrativePowerSequence: null,
            expectedPrevious: null,
            state: 0,
            activationCount: 0
        },
        events: {
            Powered: null
        },
        props: {
            IsPowered: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.EndPowerNode#IsPowered#get", this ); }

                    return this.state === FactoryPipePower.EndPowerState.Powered;
                }
            },
            PowerOutput: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.EndPowerNode#PowerOutput#get", this ); }

                    return UnityEngine.Component.op_Inequality(this.powerInput, null) ? this.powerInput : this.transform;
                }
            },
            State: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.EndPowerNode#State#get", this ); }

                    return this.state;
                }
            },
            ActivationCount: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.EndPowerNode#ActivationCount#get", this ); }

                    return this.activationCount;
                }
            }
        },
        alias: [
            "IsPowered", "FactoryPipePower$IPowerNode$IsPowered",
            "PowerOutput", "FactoryPipePower$IPowerNode$PowerOutput",
            "NotifyPreviousPowered", "FactoryPipePower$IPowerNode$NotifyPreviousPowered"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.EndPowerNode#init", this ); }

                this.state = FactoryPipePower.EndPowerState.Inactive;
            }
        },
        methods: {
            /*FactoryPipePower.EndPowerNode.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.EndPowerNode#Awake", this ); }

                if (this.expectedPrevious == null) {
                    this.expectedPrevious = Bridge.as(this.expectedPreviousBehaviour, FactoryPipePower.IPowerNode);
                }
            },
            /*FactoryPipePower.EndPowerNode.Awake end.*/

            /*FactoryPipePower.EndPowerNode.SetExpectedPrevious start.*/
            SetExpectedPrevious: function (previous) {
if ( TRACE ) { TRACE( "FactoryPipePower.EndPowerNode#SetExpectedPrevious", this ); }

                this.expectedPrevious = previous;
            },
            /*FactoryPipePower.EndPowerNode.SetExpectedPrevious end.*/

            /*FactoryPipePower.EndPowerNode.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.EndPowerNode#Initialize", this ); }

                this.state = FactoryPipePower.EndPowerState.Inactive;
                this.activationCount = 0;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.visual, null)) {
                    if (this.inactiveMaterial != null) {
                        this.visual.SetBaseMaterial(this.inactiveMaterial);
                    } else {
                        this.visual.ResetVisual();
                    }
                }
            },
            /*FactoryPipePower.EndPowerNode.Initialize end.*/

            /*FactoryPipePower.EndPowerNode.NotifyPreviousPowered start.*/
            NotifyPreviousPowered: function (previous) {
if ( TRACE ) { TRACE( "FactoryPipePower.EndPowerNode#NotifyPreviousPowered", this ); }

                if (this.state === FactoryPipePower.EndPowerState.Powered) {
                    return;
                }
                if (previous == null || this.expectedPrevious == null || !Bridge.referenceEquals(previous, this.expectedPrevious)) {
                    return;
                }

                this.activationCount = (this.activationCount + 1) | 0;
                this.state = FactoryPipePower.EndPowerState.Powered;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.visual, null)) {
                    if (this.poweredMaterial != null) {
                        this.visual.SetBaseMaterial(this.poweredMaterial);
                    } else {
                        this.visual.UseGreenRuntimeMaterial();
                        this.visual.SetFill(1.0);
                    }
                }

                !Bridge.staticEquals(this.Powered, null) ? this.Powered(this) : null;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.narrativePowerSequence, null)) {
                    this.narrativePowerSequence.OnEndPowered();
                } else {
                    UnityEngine.MonoBehaviour.op_Inequality(this.factoryPowerController, null) ? this.factoryPowerController.SetOnline() : null;
                }
            },
            /*FactoryPipePower.EndPowerNode.NotifyPreviousPowered end.*/


        }
    });
    /*FactoryPipePower.EndPowerNode end.*/

    /*FactoryPipePower.FactoryTutorialController start.*/
    Bridge.define("FactoryPipePower.FactoryTutorialController", {
        inherits: [UnityEngine.MonoBehaviour,FactoryPipePower.ITutorialInputGate],
        statics: {
            fields: {
                IntroText: null,
                PickText: null,
                PlaceText: null,
                RotateText: null,
                SuccessText: null,
                FinalText: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#init", this ); }

                    this.IntroText = "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438 \u0444\u0430\u0431\u0440\u0438\u043a\u0443 \u043a \u043f\u0438\u0442\u0430\u043d\u0438\u044e";
                    this.PickText = "\u041f\u043e\u0434\u043d\u0438\u043c\u0438 \u0442\u0440\u0443\u0431\u0443";
                    this.PlaceText = "\u041f\u043e\u0441\u0442\u0430\u0432\u044c \u0442\u0440\u0443\u0431\u0443 \u0432 \u0441\u043b\u043e\u0442";
                    this.RotateText = "\u041f\u043e\u0432\u0435\u0440\u043d\u0438 \u0442\u0440\u0443\u0431\u0443";
                    this.SuccessText = "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0443\u0431\u044b";
                    this.FinalText = "\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c! \u0424\u0430\u0431\u0440\u0438\u043a\u0430 \u0442\u0435\u043f\u0435\u0440\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442";
                }
            },
            methods: {
                /*FactoryPipePower.FactoryTutorialController.TryGetBottomScreenPoint:static start.*/
                TryGetBottomScreenPoint: function (target, cam, screenPoint) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#TryGetBottomScreenPoint", this ); }

                    var $t;
                    screenPoint.v = Bridge.getDefaultValue(UnityEngine.Vector2);

                    var minX = 3.40282347E+38;
                    var maxX = -3.40282347E+38;
                    var minY = 3.40282347E+38;
                    var maxY = -3.40282347E+38;
                    var has = false;

                    $t = Bridge.getEnumerator(target.GetComponentsInChildren$1(UnityEngine.Renderer, false));
                    try {
                        while ($t.moveNext()) {
                            var r = $t.Current;
                            if (Bridge.is(r, UnityEngine.ParticleSystemRenderer)) {
                                continue;
                            }
                            if (!r.enabled) {
                                continue;
                            }

                            var b = r.bounds;
                            for (var i = 0; i < 8; i = (i + 1) | 0) {
                                var corner = new pc.Vec3( (i & 1) === 0 ? b.min.x : b.max.x, (i & 2) === 0 ? b.min.y : b.max.y, (i & 4) === 0 ? b.min.z : b.max.z );

                                var sp = cam.WorldToScreenPoint(corner);
                                if (sp.z <= 0.0) {
                                    continue;
                                }

                                if (sp.x < minX) {
                                    minX = sp.x;
                                }
                                if (sp.x > maxX) {
                                    maxX = sp.x;
                                }
                                if (sp.y < minY) {
                                    minY = sp.y;
                                }
                                if (sp.y > maxY) {
                                    maxY = sp.y;
                                }
                                has = true;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    if (!has) {
                        return false;
                    }

                    screenPoint.v = new pc.Vec2( (minX + maxX) * 0.5, minY );
                    return true;
                },
                /*FactoryPipePower.FactoryTutorialController.TryGetBottomScreenPoint:static end.*/


            }
        },
        fields: {
            cameraBrain: null,
            overviewCamera: null,
            gameplayCamera: null,
            firstPipeCamera: null,
            firstChargingCamera: null,
            blendDuration: 0,
            blendTimeout: 0,
            overviewPriority: 0,
            gameplayPriority: 0,
            pointerInput: null,
            narrativeSequence: null,
            startNode: null,
            endNode: null,
            factoryPowerController: null,
            indicatorSequence: null,
            chimneySmoke: null,
            slotRegistry: null,
            tutorialPipe: null,
            tutorialSlot: null,
            tutorialCanvas: null,
            messageText: null,
            handImage: null,
            handMessageGroup: null,
            messageBackdrop: null,
            backdropPadding: 0,
            handAnchorOffset: null,
            textUnderHandOffset: 0,
            textCenterScreenOffset: 0,
            pickHandLiftPx: 0,
            handPulseMin: 0,
            handPulseMax: 0,
            handPulsePeriod: 0,
            phase: 0,
            initialized: false,
            subscribed: false,
            blendRoutine: null,
            smokeWaitRoutine: null,
            handTarget: null,
            interactiveSubscribed: false
        },
        events: {
            PhaseChanged: null
        },
        props: {
            Phase: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#Phase#get", this ); }

                    return this.phase;
                }
            },
            IsInitialized: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#IsInitialized#get", this ); }

                    return this.initialized;
                }
            },
            IsGateActive: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#IsGateActive#get", this ); }

                    return this.phase !== FactoryPipePower.FactoryTutorialPhase.None && this.phase !== FactoryPipePower.FactoryTutorialPhase.GameplayUnlocked && this.phase !== FactoryPipePower.FactoryTutorialPhase.Completed;
                }
            }
        },
        alias: [
            "IsGateActive", "FactoryPipePower$ITutorialInputGate$IsGateActive",
            "TryConsumeAdvancePress", "FactoryPipePower$ITutorialInputGate$TryConsumeAdvancePress",
            "IsPipeAllowed", "FactoryPipePower$ITutorialInputGate$IsPipeAllowed",
            "IsSlotTapAllowed", "FactoryPipePower$ITutorialInputGate$IsSlotTapAllowed"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#init", this ); }

                this.handAnchorOffset = new UnityEngine.Vector2();
                this.blendDuration = 2.0;
                this.blendTimeout = 15.0;
                this.overviewPriority = 20;
                this.gameplayPriority = 10;
                this.backdropPadding = 10.0;
                this.handAnchorOffset = new pc.Vec2( 0.0, 0.0 );
                this.textUnderHandOffset = 30.0;
                this.textCenterScreenOffset = 50.0;
                this.pickHandLiftPx = 100.0;
                this.handPulseMin = 0.96;
                this.handPulseMax = 1.04;
                this.handPulsePeriod = 1.0;
                this.phase = FactoryPipePower.FactoryTutorialPhase.None;
            }
        },
        methods: {
            /*FactoryPipePower.FactoryTutorialController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#Awake", this ); }

                if (UnityEngine.Component.op_Inequality(this.tutorialCanvas, null)) {
                    this.tutorialCanvas.gameObject.SetActive(true);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.handImage, null)) {
                    this.handImage.rectTransform.pivot = new pc.Vec2( 0.0, 1.0 );
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.messageBackdrop, null)) {
                    this.messageBackdrop.gameObject.SetActive(false);
                }
            },
            /*FactoryPipePower.FactoryTutorialController.Awake end.*/

            /*FactoryPipePower.FactoryTutorialController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#OnDisable", this ); }

                this.CleanupRuntimeState();
            },
            /*FactoryPipePower.FactoryTutorialController.OnDisable end.*/

            /*FactoryPipePower.FactoryTutorialController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#OnDestroy", this ); }

                this.Unsubscribe();
            },
            /*FactoryPipePower.FactoryTutorialController.OnDestroy end.*/

            /*FactoryPipePower.FactoryTutorialController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#Update", this ); }

                this.UpdateHandPosition();
                this.UpdateHandPulse();
            },
            /*FactoryPipePower.FactoryTutorialController.Update end.*/

            /*FactoryPipePower.FactoryTutorialController.InitializeTutorial start.*/
            InitializeTutorial: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#InitializeTutorial", this ); }

                if (this.initialized) {
                    return;
                }

                this.StopAllRuntimeRoutines();
                this.Unsubscribe();
                this.ClearOverlays();
                this.HideHand();
                this.ClearMessage();

                this.ApplyBlendSettings();
                this.ApplyCameraPhase(FactoryPipePower.FactoryTutorialPhase.IntroOverview);

                if (UnityEngine.MonoBehaviour.op_Inequality(this.pointerInput, null)) {
                    this.pointerInput.SetTutorialGate(this);
                }

                this.Subscribe();
                this.initialized = true;
                this.SetPhase(FactoryPipePower.FactoryTutorialPhase.IntroOverview);
            },
            /*FactoryPipePower.FactoryTutorialController.InitializeTutorial end.*/

            /*FactoryPipePower.FactoryTutorialController.SetPhase start.*/
            SetPhase: function (next) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#SetPhase", this ); }

                if (this.phase === next) {
                    return;
                }

                var previous = this.phase;
                this.phase = next;

                this.StopBlendRoutine();
                this.ApplyCameraPhase(next);
                this.ApplyHighlights(next);
                this.ApplySlotHighlightFilter(next);
                this.ApplyHand(next);
                this.ApplyGate(next);

                switch (next) {
                    case FactoryPipePower.FactoryTutorialPhase.IntroOverview: 
                        this.ShowText(FactoryPipePower.FactoryTutorialController.IntroText);
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.BlendingToGameplay: 
                        this.ShowText(null);
                        this.blendRoutine = this.StartCoroutine$1(this.RunBlendToGameplay());
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.WaitingForIncomingPower: 
                        this.ShowText(null);
                        this.TryBeginLeftChain();
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe: 
                        this.ShowText(FactoryPipePower.FactoryTutorialController.PickText);
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.PromptPlaceFirstPipe: 
                        this.ShowText(FactoryPipePower.FactoryTutorialController.PlaceText);
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.PromptRotateFirstPipe: 
                        this.ShowText(FactoryPipePower.FactoryTutorialController.RotateText);
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.WaitingFirstPipePower: 
                        this.ShowText(null);
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.FirstPipeSuccess: 
                        this.ShowText(FactoryPipePower.FactoryTutorialController.SuccessText);
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.GameplayUnlocked: 
                        this.ShowText(null);
                        this.UnsubscribeInteractive();
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.BlendingToFinalOverview: 
                        this.ShowText(null);
                        this.blendRoutine = this.StartCoroutine$1(this.RunBlendToOverviewRoutine(Bridge.fn.bind(this, function () {
                            this.SetPhase(FactoryPipePower.FactoryTutorialPhase.WaitingForOutgoingPower);
                        })));
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.WaitingForOutgoingPower: 
                        this.ShowText(null);
                        this.TryBeginRightChain();
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.WaitingForFactoryStartup: 
                        this.ShowText(null);
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.Completed: 
                        this.ShowText(FactoryPipePower.FactoryTutorialController.FinalText);
                        this.HideHand();
                        this.ClearOverlays();
                        break;
                }

                if (previous !== next) {
                    !Bridge.staticEquals(this.PhaseChanged, null) ? this.PhaseChanged(next) : null;
                }
            },
            /*FactoryPipePower.FactoryTutorialController.SetPhase end.*/

            /*FactoryPipePower.FactoryTutorialController.HideMessage start.*/
            HideMessage: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#HideMessage", this ); }

                this.ClearMessage();
            },
            /*FactoryPipePower.FactoryTutorialController.HideMessage end.*/

            /*FactoryPipePower.FactoryTutorialController.TryConsumeAdvancePress start.*/
            TryConsumeAdvancePress: function (screenPosition) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#TryConsumeAdvancePress", this ); }

                if (!this.IsGateActive) {
                    return false;
                }

                if (this.phase === FactoryPipePower.FactoryTutorialPhase.IntroOverview) {
                    this.SetPhase(FactoryPipePower.FactoryTutorialPhase.BlendingToGameplay);
                    return true;
                }

                if (this.phase === FactoryPipePower.FactoryTutorialPhase.FirstPipeSuccess) {
                    this.SetPhase(FactoryPipePower.FactoryTutorialPhase.GameplayUnlocked);
                    return true;
                }

                return false;
            },
            /*FactoryPipePower.FactoryTutorialController.TryConsumeAdvancePress end.*/

            /*FactoryPipePower.FactoryTutorialController.IsPipeAllowed start.*/
            IsPipeAllowed: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#IsPipeAllowed", this ); }

                if (!this.IsGateActive) {
                    return true;
                }

                return this.phase === FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe && UnityEngine.MonoBehaviour.op_Inequality(pipe, null) && UnityEngine.MonoBehaviour.op_Equality(pipe, this.tutorialPipe);
            },
            /*FactoryPipePower.FactoryTutorialController.IsPipeAllowed end.*/

            /*FactoryPipePower.FactoryTutorialController.IsSlotTapAllowed start.*/
            IsSlotTapAllowed: function (slot) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#IsSlotTapAllowed", this ); }

                if (!this.IsGateActive) {
                    return true;
                }

                return this.phase === FactoryPipePower.FactoryTutorialPhase.PromptRotateFirstPipe && UnityEngine.MonoBehaviour.op_Inequality(slot, null) && UnityEngine.MonoBehaviour.op_Equality(slot, this.tutorialSlot);
            },
            /*FactoryPipePower.FactoryTutorialController.IsSlotTapAllowed end.*/

            /*FactoryPipePower.FactoryTutorialController.Subscribe start.*/
            Subscribe: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#Subscribe", this ); }

                if (this.subscribed) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.startNode, null)) {
                    this.startNode.addPowered(Bridge.fn.cacheBind(this, this.HandleStartNodePowered));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.endNode, null)) {
                    this.endNode.addPowered(Bridge.fn.cacheBind(this, this.HandleEndNodePowered));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.factoryPowerController, null)) {
                    this.factoryPowerController.addFactoryOnline(Bridge.fn.cacheBind(this, this.HandleFactoryOnline));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.indicatorSequence, null)) {
                    this.indicatorSequence.addSequenceCompleted(Bridge.fn.cacheBind(this, this.HandleIndicatorSequenceCompleted));
                }

                this.subscribed = true;
            },
            /*FactoryPipePower.FactoryTutorialController.Subscribe end.*/

            /*FactoryPipePower.FactoryTutorialController.Unsubscribe start.*/
            Unsubscribe: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#Unsubscribe", this ); }

                if (!this.subscribed) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.startNode, null)) {
                    this.startNode.removePowered(Bridge.fn.cacheBind(this, this.HandleStartNodePowered));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.endNode, null)) {
                    this.endNode.removePowered(Bridge.fn.cacheBind(this, this.HandleEndNodePowered));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.factoryPowerController, null)) {
                    this.factoryPowerController.removeFactoryOnline(Bridge.fn.cacheBind(this, this.HandleFactoryOnline));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.indicatorSequence, null)) {
                    this.indicatorSequence.removeSequenceCompleted(Bridge.fn.cacheBind(this, this.HandleIndicatorSequenceCompleted));
                }

                this.UnsubscribeInteractive();
                this.subscribed = false;
            },
            /*FactoryPipePower.FactoryTutorialController.Unsubscribe end.*/

            /*FactoryPipePower.FactoryTutorialController.SubscribeInteractive start.*/
            SubscribeInteractive: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#SubscribeInteractive", this ); }

                if (this.interactiveSubscribed) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe, null)) {
                    this.tutorialPipe.addDragStarted(Bridge.fn.cacheBind(this, this.HandleTutorialPipeDragStarted));
                    this.tutorialPipe.addReturnedToStock(Bridge.fn.cacheBind(this, this.HandleTutorialPipeReturnedToStock));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot, null)) {
                    this.tutorialSlot.addStateChanged(Bridge.fn.cacheBind(this, this.HandleTutorialSlotStateChanged));
                }

                this.interactiveSubscribed = true;
            },
            /*FactoryPipePower.FactoryTutorialController.SubscribeInteractive end.*/

            /*FactoryPipePower.FactoryTutorialController.UnsubscribeInteractive start.*/
            UnsubscribeInteractive: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#UnsubscribeInteractive", this ); }

                if (!this.interactiveSubscribed) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe, null)) {
                    this.tutorialPipe.removeDragStarted(Bridge.fn.cacheBind(this, this.HandleTutorialPipeDragStarted));
                    this.tutorialPipe.removeReturnedToStock(Bridge.fn.cacheBind(this, this.HandleTutorialPipeReturnedToStock));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot, null)) {
                    this.tutorialSlot.removeStateChanged(Bridge.fn.cacheBind(this, this.HandleTutorialSlotStateChanged));
                }

                this.interactiveSubscribed = false;
            },
            /*FactoryPipePower.FactoryTutorialController.UnsubscribeInteractive end.*/

            /*FactoryPipePower.FactoryTutorialController.HandleStartNodePowered start.*/
            HandleStartNodePowered: function (node) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#HandleStartNodePowered", this ); }

                if (this.phase !== FactoryPipePower.FactoryTutorialPhase.WaitingForIncomingPower) {
                    return;
                }

                this.SubscribeInteractive();
                this.SetPhase(FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe);
            },
            /*FactoryPipePower.FactoryTutorialController.HandleStartNodePowered end.*/

            /*FactoryPipePower.FactoryTutorialController.HandleTutorialPipeDragStarted start.*/
            HandleTutorialPipeDragStarted: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#HandleTutorialPipeDragStarted", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(pipe, this.tutorialPipe)) {
                    return;
                }
                if (this.phase !== FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe) {
                    return;
                }

                this.SetPhase(FactoryPipePower.FactoryTutorialPhase.PromptPlaceFirstPipe);
            },
            /*FactoryPipePower.FactoryTutorialController.HandleTutorialPipeDragStarted end.*/

            /*FactoryPipePower.FactoryTutorialController.HandleTutorialPipeReturnedToStock start.*/
            HandleTutorialPipeReturnedToStock: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#HandleTutorialPipeReturnedToStock", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(pipe, this.tutorialPipe)) {
                    return;
                }
                if (this.phase !== FactoryPipePower.FactoryTutorialPhase.PromptPlaceFirstPipe) {
                    return;
                }

                this.SetPhase(FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe);
            },
            /*FactoryPipePower.FactoryTutorialController.HandleTutorialPipeReturnedToStock end.*/

            /*FactoryPipePower.FactoryTutorialController.HandleTutorialSlotStateChanged start.*/
            HandleTutorialSlotStateChanged: function (slot, newState) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#HandleTutorialSlotStateChanged", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(slot, this.tutorialSlot)) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(slot.AcceptedPipe, this.tutorialPipe)) {
                    return;
                }

                if (this.phase === FactoryPipePower.FactoryTutorialPhase.PromptPlaceFirstPipe) {
                    if (newState === FactoryPipePower.PipeSlotState.OccupiedWrongRotation) {
                        this.SetPhase(FactoryPipePower.FactoryTutorialPhase.PromptRotateFirstPipe);
                    } else {
                        if (newState === FactoryPipePower.PipeSlotState.OccupiedAligned || newState === FactoryPipePower.PipeSlotState.Charging || newState === FactoryPipePower.PipeSlotState.Powered) {
                            this.SetPhase(FactoryPipePower.FactoryTutorialPhase.WaitingFirstPipePower);
                        }
                    }
                }

                if (this.phase === FactoryPipePower.FactoryTutorialPhase.PromptRotateFirstPipe || this.phase === FactoryPipePower.FactoryTutorialPhase.WaitingFirstPipePower) {
                    if (newState === FactoryPipePower.PipeSlotState.Powered) {
                        this.SetPhase(FactoryPipePower.FactoryTutorialPhase.FirstPipeSuccess);
                    }
                }
            },
            /*FactoryPipePower.FactoryTutorialController.HandleTutorialSlotStateChanged end.*/

            /*FactoryPipePower.FactoryTutorialController.HandleEndNodePowered start.*/
            HandleEndNodePowered: function (node) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#HandleEndNodePowered", this ); }

                if (this.phase !== FactoryPipePower.FactoryTutorialPhase.GameplayUnlocked) {
                    return;
                }

                this.SetPhase(FactoryPipePower.FactoryTutorialPhase.BlendingToFinalOverview);
            },
            /*FactoryPipePower.FactoryTutorialController.HandleEndNodePowered end.*/

            /*FactoryPipePower.FactoryTutorialController.HandleFactoryOnline start.*/
            HandleFactoryOnline: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#HandleFactoryOnline", this ); }

                if (this.phase !== FactoryPipePower.FactoryTutorialPhase.WaitingForOutgoingPower) {
                    return;
                }

                this.SetPhase(FactoryPipePower.FactoryTutorialPhase.WaitingForFactoryStartup);
            },
            /*FactoryPipePower.FactoryTutorialController.HandleFactoryOnline end.*/

            /*FactoryPipePower.FactoryTutorialController.HandleIndicatorSequenceCompleted start.*/
            HandleIndicatorSequenceCompleted: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#HandleIndicatorSequenceCompleted", this ); }

                if (this.phase !== FactoryPipePower.FactoryTutorialPhase.WaitingForFactoryStartup) {
                    return;
                }

                this.StopSmokeWaitRoutine();
                this.smokeWaitRoutine = this.StartCoroutine$1(this.RunWaitForSmokeThenComplete());
            },
            /*FactoryPipePower.FactoryTutorialController.HandleIndicatorSequenceCompleted end.*/

            /*FactoryPipePower.FactoryTutorialController.RunWaitForSmokeThenComplete start.*/
            RunWaitForSmokeThenComplete: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#RunWaitForSmokeThenComplete", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    timeout,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0.0;
                                        timeout = UnityEngine.Mathf.Max(this.blendTimeout, 2.0);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < timeout ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 2: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(this.chimneySmoke, null) || this.chimneySmoke.IsEmitting) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    this.smokeWaitRoutine = null;
                                        this.SetPhase(FactoryPipePower.FactoryTutorialPhase.Completed);
                                        return false;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 6: {
                                    UnityEngine.Debug.LogWarning$1("[FactoryTutorialController] Smoke did not start in time; completing tutorial anyway.", this);
                                        this.smokeWaitRoutine = null;
                                        this.SetPhase(FactoryPipePower.FactoryTutorialPhase.Completed);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.FactoryTutorialController.RunWaitForSmokeThenComplete end.*/

            /*FactoryPipePower.FactoryTutorialController.TryBeginLeftChain start.*/
            TryBeginLeftChain: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#TryBeginLeftChain", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.narrativeSequence, null)) {
                    return;
                }
                if (this.narrativeSequence.LeftRunning) {
                    return;
                }

                this.narrativeSequence.BeginLeftChain();
            },
            /*FactoryPipePower.FactoryTutorialController.TryBeginLeftChain end.*/

            /*FactoryPipePower.FactoryTutorialController.TryBeginRightChain start.*/
            TryBeginRightChain: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#TryBeginRightChain", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.narrativeSequence, null)) {
                    return;
                }
                if (this.narrativeSequence.RightStarted) {
                    return;
                }

                this.narrativeSequence.BeginRightChain();
            },
            /*FactoryPipePower.FactoryTutorialController.TryBeginRightChain end.*/

            /*FactoryPipePower.FactoryTutorialController.ApplyBlendSettings start.*/
            ApplyBlendSettings: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ApplyBlendSettings", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.cameraBrain, null)) {
                    return;
                }

                this.cameraBrain.m_DefaultBlend = new Cinemachine.CinemachineBlendDefinition.$ctor1(Cinemachine.CinemachineBlendDefinition.Style.EaseInOut, this.blendDuration);
            },
            /*FactoryPipePower.FactoryTutorialController.ApplyBlendSettings end.*/

            /*FactoryPipePower.FactoryTutorialController.ApplyCameraPhase start.*/
            ApplyCameraPhase: function (target) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ApplyCameraPhase", this ); }

                var overviewActive = target === FactoryPipePower.FactoryTutorialPhase.None || target === FactoryPipePower.FactoryTutorialPhase.IntroOverview || target === FactoryPipePower.FactoryTutorialPhase.BlendingToFinalOverview || target === FactoryPipePower.FactoryTutorialPhase.WaitingForOutgoingPower || target === FactoryPipePower.FactoryTutorialPhase.WaitingForFactoryStartup || target === FactoryPipePower.FactoryTutorialPhase.Completed;

                var firstChargingActive = target === FactoryPipePower.FactoryTutorialPhase.BlendingToGameplay || target === FactoryPipePower.FactoryTutorialPhase.WaitingForIncomingPower;

                var firstPipeActive = !firstChargingActive && (target === FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe || target === FactoryPipePower.FactoryTutorialPhase.PromptPlaceFirstPipe || target === FactoryPipePower.FactoryTutorialPhase.PromptRotateFirstPipe || target === FactoryPipePower.FactoryTutorialPhase.WaitingFirstPipePower);

                this.SetCameraPriorities(overviewActive, firstChargingActive, firstPipeActive);
            },
            /*FactoryPipePower.FactoryTutorialController.ApplyCameraPhase end.*/

            /*FactoryPipePower.FactoryTutorialController.SetCameraPriorities start.*/
            SetCameraPriorities: function (overviewIsLeading, firstChargingIsLeading, firstPipeIsLeading) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#SetCameraPriorities", this ); }

                var trailingPriority = (this.gameplayPriority - 1) | 0;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.overviewCamera, null)) {
                    this.overviewCamera.Priority = overviewIsLeading ? this.overviewPriority : trailingPriority;
                }

                var chargingLive = !overviewIsLeading && firstChargingIsLeading && UnityEngine.MonoBehaviour.op_Inequality(this.firstChargingCamera, null);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.firstChargingCamera, null)) {
                    this.firstChargingCamera.Priority = chargingLive ? this.gameplayPriority : trailingPriority;
                }

                var pipeLive = !overviewIsLeading && !chargingLive && firstPipeIsLeading && UnityEngine.MonoBehaviour.op_Inequality(this.firstPipeCamera, null);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.firstPipeCamera, null)) {
                    this.firstPipeCamera.Priority = pipeLive ? this.gameplayPriority : trailingPriority;
                }

                var gameplayLeading = !overviewIsLeading && !chargingLive && !pipeLive;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.gameplayCamera, null)) {
                    this.gameplayCamera.Priority = gameplayLeading ? this.gameplayPriority : trailingPriority;
                }
            },
            /*FactoryPipePower.FactoryTutorialController.SetCameraPriorities end.*/

            /*FactoryPipePower.FactoryTutorialController.RunBlendToGameplay start.*/
            RunBlendToGameplay: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#RunBlendToGameplay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    blendTarget,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    blendTarget = UnityEngine.MonoBehaviour.op_Inequality(this.firstChargingCamera, null) ? this.firstChargingCamera : this.gameplayCamera;
                                        $enumerator.current = this.RunBlendAndWait(blendTarget);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.blendRoutine = null;

                                        if (this.phase === FactoryPipePower.FactoryTutorialPhase.BlendingToGameplay) {
                                            this.SetPhase(FactoryPipePower.FactoryTutorialPhase.WaitingForIncomingPower);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.FactoryTutorialController.RunBlendToGameplay end.*/

            /*FactoryPipePower.FactoryTutorialController.RunBlendToOverviewRoutine start.*/
            RunBlendToOverviewRoutine: function (onBlendFinished) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#RunBlendToOverviewRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.RunBlendAndWait(this.overviewCamera);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.blendRoutine = null;
                                        !Bridge.staticEquals(onBlendFinished, null) ? onBlendFinished() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.FactoryTutorialController.RunBlendToOverviewRoutine end.*/

            /*FactoryPipePower.FactoryTutorialController.RunBlendAndWait start.*/
            RunBlendAndWait: function (target) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#RunBlendAndWait", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    timeout,
                    targetLive,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(this.cameraBrain, null) || UnityEngine.MonoBehaviour.op_Equality(target, null) || UnityEngine.MonoBehaviour.op_Equality(this.overviewCamera, null) || UnityEngine.MonoBehaviour.op_Equality(this.gameplayCamera, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    UnityEngine.Debug.LogWarning$1("[FactoryTutorialController] Cinemachine references are incomplete; skipping blend wait.", this);
                                        return false;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    elapsed = 0.0;
                                        timeout = UnityEngine.Mathf.Max(this.blendTimeout, this.blendDuration + 1.0);
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed < timeout ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 6: {
                                    targetLive = Bridge.referenceEquals(this.cameraBrain.ActiveVirtualCamera, target);
                                        if (targetLive && !this.cameraBrain.IsBlending) {
                                            $step = 7;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 7: {
                                    return false;
                                }
                                case 8: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 10: {
                                    UnityEngine.Debug.LogWarning$1(System.String.format("[FactoryTutorialController] Blend toward '{0}' did not finish within {1:0.0}s; continuing.", target.name, Bridge.box(timeout, System.Single, System.Single.format, System.Single.getHashCode)), this);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.FactoryTutorialController.RunBlendAndWait end.*/

            /*FactoryPipePower.FactoryTutorialController.ApplyHighlights start.*/
            ApplyHighlights: function (target) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ApplyHighlights", this ); }

                var pipeHighlighted = target === FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe;
                var slotHighlighted = target === FactoryPipePower.FactoryTutorialPhase.PromptPlaceFirstPipe || target === FactoryPipePower.FactoryTutorialPhase.PromptRotateFirstPipe;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe, null) && UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe.Visual, null)) {
                    this.tutorialPipe.Visual.SetTutorialOverlay(pipeHighlighted);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot, null) && UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot.Visual, null)) {
                    this.tutorialSlot.Visual.SetTutorialOverlay(slotHighlighted);
                }
            },
            /*FactoryPipePower.FactoryTutorialController.ApplyHighlights end.*/

            /*FactoryPipePower.FactoryTutorialController.ApplySlotHighlightFilter start.*/
            ApplySlotHighlightFilter: function (target) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ApplySlotHighlightFilter", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.slotRegistry, null)) {
                    return;
                }

                var restrict = target === FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe || target === FactoryPipePower.FactoryTutorialPhase.PromptPlaceFirstPipe || target === FactoryPipePower.FactoryTutorialPhase.PromptRotateFirstPipe;

                this.slotRegistry.HoverFilter = restrict ? this.tutorialSlot : null;
                this.slotRegistry.AcceptFilter = restrict ? this.tutorialSlot : null;
            },
            /*FactoryPipePower.FactoryTutorialController.ApplySlotHighlightFilter end.*/

            /*FactoryPipePower.FactoryTutorialController.ApplyHand start.*/
            ApplyHand: function (target) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ApplyHand", this ); }

                switch (target) {
                    case FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe: 
                        this.handTarget = UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe, null) ? this.tutorialPipe.transform : null;
                        break;
                    case FactoryPipePower.FactoryTutorialPhase.PromptPlaceFirstPipe: 
                    case FactoryPipePower.FactoryTutorialPhase.PromptRotateFirstPipe: 
                        this.handTarget = UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot, null) ? this.tutorialSlot.transform : null;
                        break;
                    default: 
                        this.handTarget = null;
                        break;
                }

                if (UnityEngine.Component.op_Equality(this.handTarget, null)) {
                    this.HideHand();
                }
            },
            /*FactoryPipePower.FactoryTutorialController.ApplyHand end.*/

            /*FactoryPipePower.FactoryTutorialController.ApplyGate start.*/
            ApplyGate: function (target) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ApplyGate", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.pointerInput, null)) {
                    return;
                }

                if (target === FactoryPipePower.FactoryTutorialPhase.GameplayUnlocked || target === FactoryPipePower.FactoryTutorialPhase.Completed) {
                    this.pointerInput.SetTutorialGate(null);
                }
            },
            /*FactoryPipePower.FactoryTutorialController.ApplyGate end.*/

            /*FactoryPipePower.FactoryTutorialController.UpdateHandPosition start.*/
            UpdateHandPosition: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#UpdateHandPosition", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.handImage, null)) {
                    return;
                }

                if (UnityEngine.Component.op_Equality(this.handTarget, null) || !this.handTarget.gameObject.activeInHierarchy) {
                    this.HideHand();
                    return;
                }

                var outputCamera = UnityEngine.MonoBehaviour.op_Inequality(this.cameraBrain, null) ? this.cameraBrain.OutputCamera : null;
                if (UnityEngine.Component.op_Equality(outputCamera, null)) {
                    outputCamera = UnityEngine.Camera.main;
                }

                if (UnityEngine.Component.op_Equality(outputCamera, null)) {
                    this.HideHand();
                    return;
                }
                var screenPoint = { v : new UnityEngine.Vector2() };

                if (!FactoryPipePower.FactoryTutorialController.TryGetBottomScreenPoint(this.handTarget, outputCamera, screenPoint)) {
                    this.HideHand();
                    return;
                }

                var parent = UnityEngine.Component.op_Inequality(this.tutorialCanvas, null) ? Bridge.as(this.tutorialCanvas.rootCanvas.transform, UnityEngine.RectTransform) : Bridge.as(this.handImage.rectTransform.parent, UnityEngine.RectTransform);
                if (UnityEngine.Component.op_Equality(parent, null)) {
                    this.HideHand();
                    return;
                }

                var uiCamera = null;
                if (UnityEngine.Component.op_Inequality(this.tutorialCanvas, null) && this.tutorialCanvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    uiCamera = this.tutorialCanvas.worldCamera;
                }
                var localPoint = { v : new UnityEngine.Vector2() };

                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(parent, screenPoint.v, uiCamera, localPoint)) {
                    this.handImage.gameObject.SetActive(true);
                    if (UnityEngine.Component.op_Inequality(this.handMessageGroup, null)) {
                        this.handImage.rectTransform.anchoredPosition = pc.Vec2.ZERO.clone();
                        this.handMessageGroup.anchoredPosition = localPoint.v.$clone().add( this.MessageHandOffset() );
                    } else {
                        this.handImage.rectTransform.anchoredPosition = localPoint.v.$clone().add( this.MessageHandOffset() );
                    }
                } else {
                    this.HideHand();
                }
            },
            /*FactoryPipePower.FactoryTutorialController.UpdateHandPosition end.*/

            /*FactoryPipePower.FactoryTutorialController.UpdateHandPulse start.*/
            UpdateHandPulse: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#UpdateHandPulse", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.handImage, null)) {
                    return;
                }

                if (!this.handImage.gameObject.activeSelf) {
                    if (!pc.Vec3.equals( this.handImage.rectTransform.localScale, new pc.Vec3( 1, 1, 1 ) )) {
                        this.handImage.rectTransform.localScale = new pc.Vec3( 1, 1, 1 );
                    }
                    return;
                }

                var period = UnityEngine.Mathf.Max(0.01, this.handPulsePeriod);
                var t = UnityEngine.Mathf.PingPong(UnityEngine.Time.unscaledTime, period) / period;
                var sine01 = 0.5 - 0.5 * Math.cos(t * UnityEngine.Mathf.PI * 2.0);
                var multiplier = pc.math.lerp(this.handPulseMin, this.handPulseMax, sine01);
                this.handImage.rectTransform.localScale = new pc.Vec3( multiplier, multiplier, 1.0 );
            },
            /*FactoryPipePower.FactoryTutorialController.UpdateHandPulse end.*/

            /*FactoryPipePower.FactoryTutorialController.HideHand start.*/
            HideHand: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#HideHand", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.handImage, null)) {
                    this.handImage.gameObject.SetActive(false);
                    this.handImage.rectTransform.localScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*FactoryPipePower.FactoryTutorialController.HideHand end.*/

            /*FactoryPipePower.FactoryTutorialController.MessageHandOffset start.*/
            MessageHandOffset: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#MessageHandOffset", this ); }

                var offset = this.handAnchorOffset.$clone();
                if (this.phase === FactoryPipePower.FactoryTutorialPhase.PromptPickFirstPipe && this.pickHandLiftPx !== 0.0) {
                    offset.y += this.CanvasPxToUnits(this.pickHandLiftPx);
                }
                return offset.$clone();
            },
            /*FactoryPipePower.FactoryTutorialController.MessageHandOffset end.*/

            /*FactoryPipePower.FactoryTutorialController.CanvasPxToUnits start.*/
            CanvasPxToUnits: function (pixels) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#CanvasPxToUnits", this ); }

                var scale = UnityEngine.Component.op_Inequality(this.tutorialCanvas, null) ? Math.abs(this.tutorialCanvas.transform.localScale.x) : 1.0;
                return scale > 0.0001 ? pixels / scale : pixels;
            },
            /*FactoryPipePower.FactoryTutorialController.CanvasPxToUnits end.*/

            /*FactoryPipePower.FactoryTutorialController.ApplyMessageLayout start.*/
            ApplyMessageLayout: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ApplyMessageLayout", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.messageText, null) || UnityEngine.MonoBehaviour.op_Equality(this.handImage, null)) {
                    return;
                }

                var textRect = this.messageText.rectTransform;
                var handRect = this.handImage.rectTransform;
                var underHand = UnityEngine.Component.op_Inequality(this.handTarget, null);

                if (UnityEngine.Component.op_Inequality(this.handMessageGroup, null)) {
                    if (underHand) {
                        textRect.anchoredPosition = new pc.Vec2( handRect.rect.width * 0.5, -handRect.rect.height - this.textUnderHandOffset );
                    } else {
                        var canvasRect = Bridge.as(this.handMessageGroup.parent, UnityEngine.RectTransform);
                        if (UnityEngine.Component.op_Inequality(canvasRect, null)) {
                            this.handMessageGroup.anchoredPosition = canvasRect.rect.center.$clone().add( new pc.Vec2( 0.0, -this.textCenterScreenOffset ) );
                        }
                        textRect.anchoredPosition = pc.Vec2.ZERO.clone();
                    }
                    return;
                }

                if (underHand) {
                    textRect.anchoredPosition = handRect.anchoredPosition.$clone().add( new pc.Vec2( handRect.rect.width * 0.5, -handRect.rect.height - this.textUnderHandOffset ) );
                    return;
                }

                var parent = Bridge.as(textRect.parent, UnityEngine.RectTransform);
                if (UnityEngine.Component.op_Inequality(parent, null)) {
                    textRect.anchoredPosition = parent.rect.center.$clone().add( new pc.Vec2( 0.0, -this.textCenterScreenOffset ) );
                }
            },
            /*FactoryPipePower.FactoryTutorialController.ApplyMessageLayout end.*/

            /*FactoryPipePower.FactoryTutorialController.ShowText start.*/
            ShowText: function (content) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ShowText", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.messageText, null)) {
                    return;
                }

                if (System.String.isNullOrEmpty(content)) {
                    this.messageText.text = "";
                    this.messageText.gameObject.SetActive(false);
                    this.SetBackdropVisible(false);
                    return;
                }

                this.messageText.gameObject.SetActive(true);
                this.messageText.text = content;
                this.ApplyMessageLayout();
                this.FitBackdropToText();
            },
            /*FactoryPipePower.FactoryTutorialController.ShowText end.*/

            /*FactoryPipePower.FactoryTutorialController.ClearMessage start.*/
            ClearMessage: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ClearMessage", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.messageText, null)) {
                    return;
                }

                this.messageText.text = "";
                this.messageText.gameObject.SetActive(false);
                this.SetBackdropVisible(false);
            },
            /*FactoryPipePower.FactoryTutorialController.ClearMessage end.*/

            /*FactoryPipePower.FactoryTutorialController.SetBackdropVisible start.*/
            SetBackdropVisible: function (visible) {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#SetBackdropVisible", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.messageBackdrop, null)) {
                    return;
                }

                this.messageBackdrop.gameObject.SetActive(visible);
            },
            /*FactoryPipePower.FactoryTutorialController.SetBackdropVisible end.*/

            /*FactoryPipePower.FactoryTutorialController.FitBackdropToText start.*/
            FitBackdropToText: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#FitBackdropToText", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.messageBackdrop, null) || UnityEngine.MonoBehaviour.op_Equality(this.messageText, null)) {
                    return;
                }

                var textRect = this.messageText.rectTransform;
                var wrapWidth = UnityEngine.Mathf.Max(1.0, textRect.rect.width);

                var contentWidth = UnityEngine.Mathf.Min(this.messageText.preferredWidth, wrapWidth);
                var contentHeight = this.messageText.preferredHeight;

                if (contentWidth <= 0.0 || contentHeight <= 0.0) {
                    this.SetBackdropVisible(false);
                    return;
                }

                var width = contentWidth + this.backdropPadding * 2.0;
                var height = contentHeight + this.backdropPadding * 2.0;

                var backdropRect = this.messageBackdrop.rectTransform;
                var backdropIndex = backdropRect.GetSiblingIndex();
                var textIndex = textRect.GetSiblingIndex();
                if (backdropIndex > textIndex) {
                    backdropRect.SetSiblingIndex(textIndex);
                }
                backdropRect.anchorMin = textRect.anchorMin.$clone();
                backdropRect.anchorMax = textRect.anchorMax.$clone();
                backdropRect.pivot = new pc.Vec2( 0.5, 1.0 );
                backdropRect.sizeDelta = new pc.Vec2( width, height );
                backdropRect.anchoredPosition = textRect.anchoredPosition.$clone().add( new pc.Vec2( 0.0, this.backdropPadding ) );

                this.SetBackdropVisible(true);
            },
            /*FactoryPipePower.FactoryTutorialController.FitBackdropToText end.*/

            /*FactoryPipePower.FactoryTutorialController.ClearOverlays start.*/
            ClearOverlays: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#ClearOverlays", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe, null) && UnityEngine.MonoBehaviour.op_Inequality(this.tutorialPipe.Visual, null)) {
                    this.tutorialPipe.Visual.SetTutorialOverlay(false);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot, null) && UnityEngine.MonoBehaviour.op_Inequality(this.tutorialSlot.Visual, null)) {
                    this.tutorialSlot.Visual.SetTutorialOverlay(false);
                }
            },
            /*FactoryPipePower.FactoryTutorialController.ClearOverlays end.*/

            /*FactoryPipePower.FactoryTutorialController.StopBlendRoutine start.*/
            StopBlendRoutine: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#StopBlendRoutine", this ); }

                if (this.blendRoutine != null) {
                    this.StopCoroutine$2(this.blendRoutine);
                    this.blendRoutine = null;
                }
            },
            /*FactoryPipePower.FactoryTutorialController.StopBlendRoutine end.*/

            /*FactoryPipePower.FactoryTutorialController.StopSmokeWaitRoutine start.*/
            StopSmokeWaitRoutine: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#StopSmokeWaitRoutine", this ); }

                if (this.smokeWaitRoutine != null) {
                    this.StopCoroutine$2(this.smokeWaitRoutine);
                    this.smokeWaitRoutine = null;
                }
            },
            /*FactoryPipePower.FactoryTutorialController.StopSmokeWaitRoutine end.*/

            /*FactoryPipePower.FactoryTutorialController.StopAllRuntimeRoutines start.*/
            StopAllRuntimeRoutines: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#StopAllRuntimeRoutines", this ); }

                this.StopBlendRoutine();
                this.StopSmokeWaitRoutine();
            },
            /*FactoryPipePower.FactoryTutorialController.StopAllRuntimeRoutines end.*/

            /*FactoryPipePower.FactoryTutorialController.CleanupRuntimeState start.*/
            CleanupRuntimeState: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.FactoryTutorialController#CleanupRuntimeState", this ); }

                this.StopAllRuntimeRoutines();
                this.Unsubscribe();
                this.ClearOverlays();
                this.HideHand();
                this.handTarget = null;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.slotRegistry, null)) {
                    this.slotRegistry.HoverFilter = null;
                    this.slotRegistry.AcceptFilter = null;
                }
            },
            /*FactoryPipePower.FactoryTutorialController.CleanupRuntimeState end.*/


        }
    });
    /*FactoryPipePower.FactoryTutorialController end.*/

    /*FactoryPipePower.PipeSlotController start.*/
    Bridge.define("FactoryPipePower.PipeSlotController", {
        inherits: [UnityEngine.MonoBehaviour,FactoryPipePower.IPowerNode],
        statics: {
            methods: {
                /*FactoryPipePower.PipeSlotController.TryGetNeighbourOrientation:static start.*/
                TryGetNeighbourOrientation: function (node, shape, yawQuarterDegrees, position) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#TryGetNeighbourOrientation", this ); }

                    shape.v = FactoryPipePower.PipeShape.Straight;
                    yawQuarterDegrees.v = 0;
                    position.v = Bridge.getDefaultValue(UnityEngine.Vector3);
                    var slot;
                    if (UnityEngine.MonoBehaviour.op_Inequality(((slot = Bridge.as(node, FactoryPipePower.PipeSlotController))), null) && UnityEngine.MonoBehaviour.op_Inequality(slot.AcceptedPipe, null) && UnityEngine.Component.op_Inequality(slot.AnchorY, null)) {
                        shape.v = slot.AcceptedPipe.Spec.shape;
                        yawQuarterDegrees.v = FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(slot.AnchorY.eulerAngles.y);
                        position.v = slot.transform.position.$clone();
                        return true;
                    }

                    return false;
                },
                /*FactoryPipePower.PipeSlotController.TryGetNeighbourOrientation:static end.*/


            }
        },
        fields: {
            expectedSpec: null,
            rotationGroup: 0,
            expectedCornerGroup: 0,
            anchorY: null,
            slotVisual: null,
            connectorA: null,
            connectorB: null,
            captureCollider: null,
            tapCollider: null,
            emptyMaterial: null,
            hoverValidMaterial: null,
            wrongMaterial: null,
            defaultMaterial: null,
            rotationDuration: 0,
            chargingDuration: 0,
            previousNodeBehaviour: null,
            nextNodeBehaviour: null,
            completionSparks: null,
            state: 0,
            acceptedPipe: null,
            placementCommitted: false,
            isRotating: false,
            rotateRoutine: null,
            authoringAnchorRotation: null,
            previousNode: null,
            nextNode: null,
            hasCharged: false,
            chargeRoutine: null,
            revalidating: false,
            OwnerRegistry: null
        },
        events: {
            StateChanged: null
        },
        props: {
            ExpectedSpec: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ExpectedSpec#get", this ); }

                    return this.expectedSpec.$clone();
                }
            },
            State: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#State#get", this ); }

                    return this.state;
                }
            },
            IsOccupied: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#IsOccupied#get", this ); }

                    return this.state === FactoryPipePower.PipeSlotState.OccupiedWrongRotation || this.state === FactoryPipePower.PipeSlotState.OccupiedAligned || this.state === FactoryPipePower.PipeSlotState.Charging || this.state === FactoryPipePower.PipeSlotState.Powered;
                }
            },
            IsAligned: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#IsAligned#get", this ); }

                    return UnityEngine.Component.op_Inequality(this.anchorY, null) && this.ComputeIsAligned();
                }
            },
            ExpectedCornerGroup: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ExpectedCornerGroup#get", this ); }

                    return this.expectedCornerGroup;
                }
            },
            AnchorY: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#AnchorY#get", this ); }

                    return this.anchorY;
                }
            },
            ConnectorA: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ConnectorA#get", this ); }

                    return this.connectorA;
                }
            },
            ConnectorB: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ConnectorB#get", this ); }

                    return this.connectorB;
                }
            },
            SlotRotationGroup: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#SlotRotationGroup#get", this ); }

                    return this.rotationGroup;
                }
            },
            AcceptedPipe: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#AcceptedPipe#get", this ); }

                    return this.acceptedPipe;
                }
            },
            PlacementCommitted: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#PlacementCommitted#get", this ); }

                    return this.placementCommitted;
                }
            },
            IsRotating: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#IsRotating#get", this ); }

                    return this.isRotating;
                }
            },
            Visual: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#Visual#get", this ); }

                    return this.slotVisual;
                }
            },
            CompletionSparks: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#CompletionSparks#get", this ); }

                    return this.completionSparks;
                }
            },
            IsPowered: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#IsPowered#get", this ); }

                    return this.state === FactoryPipePower.PipeSlotState.Powered;
                }
            },
            PreviousNode: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#PreviousNode#get", this ); }

                    return this.previousNode;
                }
            },
            NextNode: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#NextNode#get", this ); }

                    return this.nextNode;
                }
            },
            HasCharged: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#HasCharged#get", this ); }

                    return this.hasCharged;
                }
            },
            PowerOutput: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#PowerOutput#get", this ); }

                    if (this.previousNode != null && UnityEngine.Component.op_Inequality(this.connectorA, null) && UnityEngine.Component.op_Inequality(this.connectorB, null)) {
                        var previousPosition = UnityEngine.Component.op_Inequality(this.previousNode.FactoryPipePower$IPowerNode$PowerOutput, null) ? this.previousNode.FactoryPipePower$IPowerNode$PowerOutput.position.$clone() : this.transform.position.$clone();
                        var distanceA = pc.Vec3.distance( previousPosition, this.connectorA.position );
                        var distanceB = pc.Vec3.distance( previousPosition, this.connectorB.position );
                        return distanceA >= distanceB ? this.connectorA : this.connectorB;
                    }

                    if (UnityEngine.Component.op_Inequality(this.connectorB, null)) {
                        return this.connectorB;
                    }
                    return this.transform;
                }
            }
        },
        alias: [
            "IsPowered", "FactoryPipePower$IPowerNode$IsPowered",
            "PowerOutput", "FactoryPipePower$IPowerNode$PowerOutput",
            "NotifyPreviousPowered", "FactoryPipePower$IPowerNode$NotifyPreviousPowered"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#init", this ); }

                this.expectedSpec = new FactoryPipePower.PipeSpec();
                this.authoringAnchorRotation = new UnityEngine.Quaternion();
                this.rotationDuration = 0.2;
                this.chargingDuration = 0.25;
                this.state = FactoryPipePower.PipeSlotState.Empty;
                this.authoringAnchorRotation = pc.Quat.IDENTITY.clone();
            }
        },
        methods: {
            /*FactoryPipePower.PipeSlotController.SetupPowerNodes start.*/
            SetupPowerNodes: function (previous, next) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#SetupPowerNodes", this ); }

                this.previousNode = previous;
                this.nextNode = next;
            },
            /*FactoryPipePower.PipeSlotController.SetupPowerNodes end.*/

            /*FactoryPipePower.PipeSlotController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#Awake", this ); }

                if (UnityEngine.Component.op_Inequality(this.anchorY, null)) {
                    this.authoringAnchorRotation = this.anchorY.localRotation.$clone();
                }

                if (this.previousNode == null) {
                    this.previousNode = Bridge.as(this.previousNodeBehaviour, FactoryPipePower.IPowerNode);
                }
                if (this.nextNode == null) {
                    this.nextNode = Bridge.as(this.nextNodeBehaviour, FactoryPipePower.IPowerNode);
                }

                this.state = FactoryPipePower.PipeSlotState.Empty;
                this.ApplyStateMaterial();
                this.ApplyTapColliderState();
            },
            /*FactoryPipePower.PipeSlotController.Awake end.*/

            /*FactoryPipePower.PipeSlotController.IsCompatible start.*/
            IsCompatible: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#IsCompatible", this ); }

                return UnityEngine.MonoBehaviour.op_Inequality(pipe, null) && this.expectedSpec.equalsT(pipe.Spec.$clone());
            },
            /*FactoryPipePower.PipeSlotController.IsCompatible end.*/

            /*FactoryPipePower.PipeSlotController.TryAccept start.*/
            TryAccept: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#TryAccept", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(pipe, null)) {
                    return false;
                }
                if (this.placementCommitted) {
                    return false;
                }
                if (this.state !== FactoryPipePower.PipeSlotState.Empty && this.state !== FactoryPipePower.PipeSlotState.HoverValid) {
                    return false;
                }
                if (pipe.State !== FactoryPipePower.DraggablePipeState.Dragging) {
                    return false;
                }
                if (!this.expectedSpec.equalsT(pipe.Spec.$clone())) {
                    return false;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.OwnerRegistry, null) && UnityEngine.MonoBehaviour.op_Inequality(this.OwnerRegistry.AcceptFilter, null) && UnityEngine.MonoBehaviour.op_Inequality(this.OwnerRegistry.AcceptFilter, this)) {
                    return false;
                }

                this.placementCommitted = true;
                this.acceptedPipe = pipe;

                var quarter = FactoryPipePower.QuarterTurnUtility.GetQuarterTurn(pipe.WorldYaw);
                if (UnityEngine.Component.op_Inequality(this.anchorY, null)) {
                    var targetWorldRotation = FactoryPipePower.QuarterTurnUtility.QuarterTurnToRotation(quarter);
                    this.anchorY.localRotation = this.transform.rotation.clone().invert().clone().mul( targetWorldRotation );
                }

                pipe.CommitPlaced();

                this.SetState(FactoryPipePower.PipeSlotState.OccupiedWrongRotation);
                this.EvaluateAlignment();
                this.RevalidateLocalAndNeighbours();

                return true;
            },
            /*FactoryPipePower.PipeSlotController.TryAccept end.*/

            /*FactoryPipePower.PipeSlotController.OnPipeTriggerEnter start.*/
            OnPipeTriggerEnter: function (pipe) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#OnPipeTriggerEnter", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(pipe, null)) {
                    return;
                }
                if (this.placementCommitted) {
                    return;
                }
                if (this.state !== FactoryPipePower.PipeSlotState.Empty && this.state !== FactoryPipePower.PipeSlotState.HoverValid) {
                    return;
                }
                if (pipe.State !== FactoryPipePower.DraggablePipeState.Dragging) {
                    return;
                }

                this.TryAccept(pipe);
            },
            /*FactoryPipePower.PipeSlotController.OnPipeTriggerEnter end.*/

            /*FactoryPipePower.PipeSlotController.TryRotateTap start.*/
            TryRotateTap: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#TryRotateTap", this ); }

                if (this.state !== FactoryPipePower.PipeSlotState.OccupiedWrongRotation && this.state !== FactoryPipePower.PipeSlotState.OccupiedAligned) {
                    return false;
                }
                if (this.isRotating) {
                    return false;
                }

                this.rotateRoutine = this.StartCoroutine$1(this.RotateOneStepRoutine());
                return true;
            },
            /*FactoryPipePower.PipeSlotController.TryRotateTap end.*/

            /*FactoryPipePower.PipeSlotController.SetHoverValid start.*/
            SetHoverValid: function (value) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#SetHoverValid", this ); }

                if (value) {
                    if (this.state !== FactoryPipePower.PipeSlotState.Empty) {
                        return;
                    }

                    this.SetState(FactoryPipePower.PipeSlotState.HoverValid);
                } else {
                    if (this.state !== FactoryPipePower.PipeSlotState.HoverValid) {
                        return;
                    }

                    this.SetState(FactoryPipePower.PipeSlotState.Empty);
                }
            },
            /*FactoryPipePower.PipeSlotController.SetHoverValid end.*/

            /*FactoryPipePower.PipeSlotController.ResetSlot start.*/
            ResetSlot: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ResetSlot", this ); }

                if (this.rotateRoutine != null) {
                    this.StopCoroutine$2(this.rotateRoutine);
                    this.rotateRoutine = null;
                }

                this.isRotating = false;
                this.placementCommitted = false;
                this.acceptedPipe = null;
                UnityEngine.MonoBehaviour.op_Inequality(this.completionSparks, null) ? this.completionSparks.StopAndClear() : null;

                if (UnityEngine.Component.op_Inequality(this.anchorY, null)) {
                    this.anchorY.localRotation = this.authoringAnchorRotation.$clone();
                }

                this.SetState(FactoryPipePower.PipeSlotState.Empty);
                this.RevalidateLocalAndNeighbours();
            },
            /*FactoryPipePower.PipeSlotController.ResetSlot end.*/

            /*FactoryPipePower.PipeSlotController.NotifyPreviousPowered start.*/
            NotifyPreviousPowered: function (previous) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#NotifyPreviousPowered", this ); }

                if (previous == null) {
                    return;
                }

                if (this.previousNode == null) {
                    this.previousNode = previous;
                }

                this.TryStartCharging();
            },
            /*FactoryPipePower.PipeSlotController.NotifyPreviousPowered end.*/

            /*FactoryPipePower.PipeSlotController.TryStartCharging start.*/
            TryStartCharging: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#TryStartCharging", this ); }

                if (this.state !== FactoryPipePower.PipeSlotState.OccupiedAligned) {
                    return;
                }
                if (this.previousNode == null || !this.previousNode.FactoryPipePower$IPowerNode$IsPowered) {
                    return;
                }
                if (this.hasCharged) {
                    return;
                }
                if (this.chargeRoutine != null) {
                    return;
                }
                if (!this.AreDirectionsValid()) {
                    return;
                }

                this.chargeRoutine = this.StartCoroutine$1(this.ChargeRoutine());
            },
            /*FactoryPipePower.PipeSlotController.TryStartCharging end.*/

            /*FactoryPipePower.PipeSlotController.AreDirectionsValid start.*/
            AreDirectionsValid: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#AreDirectionsValid", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.acceptedPipe, null) || UnityEngine.Component.op_Equality(this.anchorY, null)) {
                    return false;
                }

                var currentShape = this.acceptedPipe.Spec.shape;
                var currentYaw = FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(this.anchorY.eulerAngles.y);
                var previousShape = { v : new FactoryPipePower.PipeShape() };
                var previousYaw = { };
                var previousPosition = { v : new UnityEngine.Vector3() };

                var hasPrevious = FactoryPipePower.PipeSlotController.TryGetNeighbourOrientation(this.previousNode, previousShape, previousYaw, previousPosition);
                var nextShape = { v : new FactoryPipePower.PipeShape() };
                var nextYaw = { };
                var nextPosition = { v : new UnityEngine.Vector3() };
                var hasNext = FactoryPipePower.PipeSlotController.TryGetNeighbourOrientation(this.nextNode, nextShape, nextYaw, nextPosition);

                if (hasPrevious && !FactoryPipePower.PipeDirectionsUtility.AreNeighboursCompatible(previousShape.v, previousYaw.v, currentShape, currentYaw)) {
                    return false;
                }

                if (currentShape === FactoryPipePower.PipeShape.Straight && hasPrevious && hasNext && !FactoryPipePower.PipeDirectionsUtility.AreSegmentLinksDistinct(previousShape.v, previousYaw.v, previousPosition.v, currentShape, currentYaw, this.transform.position, nextShape.v, nextYaw.v, nextPosition.v)) {
                    return false;
                }

                return true;
            },
            /*FactoryPipePower.PipeSlotController.AreDirectionsValid end.*/

            /*FactoryPipePower.PipeSlotController.RevalidateLocalAndNeighbours start.*/
            RevalidateLocalAndNeighbours: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#RevalidateLocalAndNeighbours", this ); }

                var $t, $t1;
                if (this.revalidating) {
                    return;
                }

                this.revalidating = true;
                try {
                    this.RevalidateLocal();
                    UnityEngine.MonoBehaviour.op_Inequality(($t = (Bridge.as(this.previousNode, FactoryPipePower.PipeSlotController))), null) ? $t.RevalidateLocal() : null;
                    UnityEngine.MonoBehaviour.op_Inequality(($t1 = (Bridge.as(this.nextNode, FactoryPipePower.PipeSlotController))), null) ? $t1.RevalidateLocal() : null;
                } finally {
                    this.revalidating = false;
                }
            },
            /*FactoryPipePower.PipeSlotController.RevalidateLocalAndNeighbours end.*/

            /*FactoryPipePower.PipeSlotController.RevalidateLocal start.*/
            RevalidateLocal: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#RevalidateLocal", this ); }

                if (this.isRotating) {
                    return;
                }

                this.EvaluateAlignment();
            },
            /*FactoryPipePower.PipeSlotController.RevalidateLocal end.*/

            /*FactoryPipePower.PipeSlotController.ResetPowerState start.*/
            ResetPowerState: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ResetPowerState", this ); }

                if (this.chargeRoutine != null) {
                    this.StopCoroutine$2(this.chargeRoutine);
                    this.chargeRoutine = null;
                }

                this.hasCharged = false;
                UnityEngine.MonoBehaviour.op_Inequality(this.completionSparks, null) ? this.completionSparks.StopAndClear() : null;

                if (this.state === FactoryPipePower.PipeSlotState.Charging || this.state === FactoryPipePower.PipeSlotState.Powered) {
                    this.state = FactoryPipePower.PipeSlotState.OccupiedAligned;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.slotVisual, null)) {
                    this.slotVisual.ReleaseGreenRuntimeMaterial();
                }

                this.ApplyStateMaterial();
            },
            /*FactoryPipePower.PipeSlotController.ResetPowerState end.*/

            /*FactoryPipePower.PipeSlotController.ChargeRoutine start.*/
            ChargeRoutine: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ChargeRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    previousPosition,
                    flowResolved,
                    endIsB,
                    flowStart,
                    flowEnd,
                    elbow,
                    duration,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.hasCharged = true;
                                        this.SetState(FactoryPipePower.PipeSlotState.Charging);

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.slotVisual, null)) {
                                            this.slotVisual.UseGreenRuntimeMaterial();
                                            this.slotVisual.SetFill(0.0);
                                        }

                                        previousPosition = this.transform.position.$clone();
                                        if (this.previousNode != null && UnityEngine.Component.op_Inequality(this.previousNode.FactoryPipePower$IPowerNode$PowerOutput, null)) {
                                            previousPosition = this.previousNode.FactoryPipePower$IPowerNode$PowerOutput.position.$clone();
                                        }

                                        flowResolved = false;
                                        endIsB = false;

                                        if (UnityEngine.Component.op_Inequality(this.connectorA, null) && UnityEngine.Component.op_Inequality(this.connectorB, null)) {
                                            flowStart = { v : new UnityEngine.Vector3() };
                                            flowEnd = { v : new UnityEngine.Vector3() };
                                            FactoryPipePower.FlowConnectorUtility.ResolveFlowEndpoints(previousPosition, this.connectorA.position, this.connectorB.position, flowStart, flowEnd);

                                            flowResolved = true;
                                            endIsB = pc.Vec3.distance( flowEnd.v, this.connectorB.position ) <= pc.Vec3.distance( flowEnd.v, this.connectorA.position );

                                            if (UnityEngine.MonoBehaviour.op_Inequality(this.slotVisual, null)) {
                                                elbow = { v : new UnityEngine.Vector3() };
                                                if (UnityEngine.MonoBehaviour.op_Inequality(this.acceptedPipe, null) && this.acceptedPipe.Spec.shape === FactoryPipePower.PipeShape.Corner && this.TryComputeCornerElbow(elbow)) {
                                                    this.slotVisual.ConfigureCornerFlow(flowStart.v, elbow.v, flowEnd.v);
                                                } else {
                                                    this.slotVisual.ConfigureFlow(flowStart.v, flowEnd.v);
                                                }
                                            }
                                        }

                                        duration = UnityEngine.Mathf.Max(this.chargingDuration, 0.0001);
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.slotVisual, null)) {
                                            this.slotVisual.SetFill(Math.max(0, Math.min(1, elapsed / duration)));
                                        }
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.slotVisual, null)) {
                                            this.slotVisual.SetFill(1.0);
                                        }

                                        this.SetState(FactoryPipePower.PipeSlotState.Powered);
                                        this.chargeRoutine = null;

                                        if (flowResolved) {
                                            UnityEngine.MonoBehaviour.op_Inequality(this.completionSparks, null) ? this.completionSparks.PlayCompletion(endIsB) : null;
                                        }

                                        this.nextNode != null ? this.nextNode.FactoryPipePower$IPowerNode$NotifyPreviousPowered(this) : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.PipeSlotController.ChargeRoutine end.*/

            /*FactoryPipePower.PipeSlotController.TryComputeCornerElbow start.*/
            TryComputeCornerElbow: function (elbow) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#TryComputeCornerElbow", this ); }

                elbow.v = Bridge.getDefaultValue(UnityEngine.Vector3);

                if (UnityEngine.Component.op_Equality(this.anchorY, null) || UnityEngine.Component.op_Equality(this.connectorA, null) || UnityEngine.Component.op_Equality(this.connectorB, null)) {
                    return false;
                }

                var worldYaw = FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(this.anchorY.eulerAngles.y);
                var inputDir = { v : new UnityEngine.Vector3() };
                if (!FactoryPipePower.PipeDirectionsUtility.TryGetDirectionVector(FactoryPipePower.PipeDirectionsUtility.GetCornerInput(worldYaw), inputDir)) {
                    return false;
                }

                var inward = inputDir.v.$clone().scale( -1 );
                var toB = this.connectorB.position.$clone().sub( this.connectorA.position );
                var leg = toB.dot( inward );

                if (Math.abs(leg) < 0.0001) {
                    return false;
                }

                elbow.v = this.connectorA.position.$clone().add( inward.$clone().clone().scale( leg ) );
                return true;
            },
            /*FactoryPipePower.PipeSlotController.TryComputeCornerElbow end.*/

            /*FactoryPipePower.PipeSlotController.ComputeIsAligned start.*/
            ComputeIsAligned: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ComputeIsAligned", this ); }

                var yaw = FactoryPipePower.PipeDirectionsUtility.NormalizeQuarter(this.anchorY.localEulerAngles.y);

                if (this.expectedSpec.shape === FactoryPipePower.PipeShape.Corner) {
                    return FactoryPipePower.PipeDirectionsUtility.GetCurrentCornerGroup(yaw) === this.expectedCornerGroup;
                }

                return FactoryPipePower.QuarterTurnUtility.IsAligned(this.anchorY.localEulerAngles.y, this.rotationGroup);
            },
            /*FactoryPipePower.PipeSlotController.ComputeIsAligned end.*/

            /*FactoryPipePower.PipeSlotController.EvaluateAlignment start.*/
            EvaluateAlignment: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#EvaluateAlignment", this ); }

                if (!this.IsOccupied || this.isRotating) {
                    return;
                }
                if (this.state === FactoryPipePower.PipeSlotState.Charging || this.state === FactoryPipePower.PipeSlotState.Powered) {
                    return;
                }

                var aligned = this.IsAligned;

                this.SetState(aligned ? FactoryPipePower.PipeSlotState.OccupiedAligned : FactoryPipePower.PipeSlotState.OccupiedWrongRotation);

                if (aligned) {
                    this.TryStartCharging();
                }
            },
            /*FactoryPipePower.PipeSlotController.EvaluateAlignment end.*/

            /*FactoryPipePower.PipeSlotController.RotateOneStepRoutine start.*/
            RotateOneStepRoutine: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#RotateOneStepRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startQuarter,
                    targetQuarter,
                    start,
                    target,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isRotating = true;

                                        startQuarter = FactoryPipePower.QuarterTurnUtility.GetQuarterTurn(this.anchorY.localEulerAngles.y);
                                        targetQuarter = (((startQuarter + 1) | 0)) & 3;
                                        start = this.anchorY.localRotation.$clone();
                                        target = FactoryPipePower.QuarterTurnUtility.QuarterTurnToRotation(targetQuarter);
                                        duration = UnityEngine.Mathf.Max(this.rotationDuration, 0.0001);
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = pc.math.smoothstep(0.0, 1.0, Math.max(0, Math.min(1, elapsed / duration)));
                                        this.anchorY.localRotation = new pc.Quat().slerpUnclamped( start, target, pc.math.clamp( t, 0, 1 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.anchorY.localRotation = target.$clone();
                                        this.rotateRoutine = null;
                                        this.isRotating = false;
                                        this.RevalidateLocalAndNeighbours();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*FactoryPipePower.PipeSlotController.RotateOneStepRoutine end.*/

            /*FactoryPipePower.PipeSlotController.SetState start.*/
            SetState: function (nextState) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#SetState", this ); }

                var changed = this.state !== nextState;
                this.state = nextState;
                this.ApplyStateMaterial();
                this.ApplyTapColliderState();

                if (changed) {
                    !Bridge.staticEquals(this.StateChanged, null) ? this.StateChanged(this, nextState) : null;
                }
            },
            /*FactoryPipePower.PipeSlotController.SetState end.*/

            /*FactoryPipePower.PipeSlotController.ApplyTapColliderState start.*/
            ApplyTapColliderState: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ApplyTapColliderState", this ); }

                this.SetTapCollidersEnabled(this.IsOccupied);
            },
            /*FactoryPipePower.PipeSlotController.ApplyTapColliderState end.*/

            /*FactoryPipePower.PipeSlotController.SetTapCollidersEnabled start.*/
            SetTapCollidersEnabled: function (enabled) {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#SetTapCollidersEnabled", this ); }

                if (UnityEngine.Component.op_Equality(this.tapCollider, null)) {
                    return;
                }

                this.tapCollider.enabled = enabled;
            },
            /*FactoryPipePower.PipeSlotController.SetTapCollidersEnabled end.*/

            /*FactoryPipePower.PipeSlotController.ApplyStateMaterial start.*/
            ApplyStateMaterial: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.PipeSlotController#ApplyStateMaterial", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.slotVisual, null)) {
                    return;
                }

                var baseMaterial;
                switch (this.state) {
                    case FactoryPipePower.PipeSlotState.Empty: 
                        baseMaterial = this.emptyMaterial;
                        break;
                    case FactoryPipePower.PipeSlotState.HoverValid: 
                        baseMaterial = this.hoverValidMaterial;
                        break;
                    case FactoryPipePower.PipeSlotState.OccupiedWrongRotation: 
                        baseMaterial = this.defaultMaterial;
                        break;
                    case FactoryPipePower.PipeSlotState.OccupiedAligned: 
                        baseMaterial = this.wrongMaterial;
                        break;
                    default: 
                        baseMaterial = null;
                        break;
                }

                if (baseMaterial != null) {
                    this.slotVisual.SetBaseMaterial(baseMaterial);
                }
            },
            /*FactoryPipePower.PipeSlotController.ApplyStateMaterial end.*/


        }
    });
    /*FactoryPipePower.PipeSlotController end.*/

    /*FactoryPipePower.StartPowerNode start.*/
    Bridge.define("FactoryPipePower.StartPowerNode", {
        inherits: [UnityEngine.MonoBehaviour,FactoryPipePower.IPowerNode],
        fields: {
            powerOutput: null,
            nextNodeBehaviour: null,
            visual: null,
            deferPowerActivation: false,
            nextNode: null,
            isPowered: false
        },
        events: {
            Powered: null
        },
        props: {
            IsPowered: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.StartPowerNode#IsPowered#get", this ); }

                    return this.isPowered;
                }
            },
            DeferPowerActivation: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.StartPowerNode#DeferPowerActivation#get", this ); }

                    return this.deferPowerActivation;
                }
            },
            PowerOutput: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.StartPowerNode#PowerOutput#get", this ); }

                    return UnityEngine.Component.op_Inequality(this.powerOutput, null) ? this.powerOutput : this.transform;
                }
            },
            NextNode: {
                get: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.StartPowerNode#NextNode#get", this ); }

                    return this.nextNode;
                }
            }
        },
        alias: [
            "IsPowered", "FactoryPipePower$IPowerNode$IsPowered",
            "PowerOutput", "FactoryPipePower$IPowerNode$PowerOutput",
            "NotifyPreviousPowered", "FactoryPipePower$IPowerNode$NotifyPreviousPowered"
        ],
        methods: {
            /*FactoryPipePower.StartPowerNode.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.StartPowerNode#Awake", this ); }

                if (this.nextNode == null) {
                    this.nextNode = Bridge.as(this.nextNodeBehaviour, FactoryPipePower.IPowerNode);
                }
            },
            /*FactoryPipePower.StartPowerNode.Awake end.*/

            /*FactoryPipePower.StartPowerNode.SetNextNode start.*/
            SetNextNode: function (next) {
if ( TRACE ) { TRACE( "FactoryPipePower.StartPowerNode#SetNextNode", this ); }

                this.nextNode = next;
            },
            /*FactoryPipePower.StartPowerNode.SetNextNode end.*/

            /*FactoryPipePower.StartPowerNode.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.StartPowerNode#Initialize", this ); }

                if (this.deferPowerActivation) {
                    this.isPowered = false;

                    if (UnityEngine.MonoBehaviour.op_Inequality(this.visual, null)) {
                        this.visual.ResetVisual();
                    }

                    return;
                }

                this.isPowered = true;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.visual, null)) {
                    this.visual.UseGreenRuntimeMaterial();
                    this.visual.SetFill(1.0);
                }

                this.nextNode != null ? this.nextNode.FactoryPipePower$IPowerNode$NotifyPreviousPowered(this) : null;
                !Bridge.staticEquals(this.Powered, null) ? this.Powered(this) : null;
            },
            /*FactoryPipePower.StartPowerNode.Initialize end.*/

            /*FactoryPipePower.StartPowerNode.ProvidePower start.*/
            ProvidePower: function () {
if ( TRACE ) { TRACE( "FactoryPipePower.StartPowerNode#ProvidePower", this ); }

                if (this.isPowered) {
                    return;
                }

                this.isPowered = true;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.visual, null)) {
                    this.visual.UseGreenRuntimeMaterial();
                    this.visual.SetFill(1.0);
                }

                this.nextNode != null ? this.nextNode.FactoryPipePower$IPowerNode$NotifyPreviousPowered(this) : null;
                !Bridge.staticEquals(this.Powered, null) ? this.Powered(this) : null;
            },
            /*FactoryPipePower.StartPowerNode.ProvidePower end.*/

            /*FactoryPipePower.StartPowerNode.NotifyPreviousPowered start.*/
            NotifyPreviousPowered: function (previous) {
if ( TRACE ) { TRACE( "FactoryPipePower.StartPowerNode#NotifyPreviousPowered", this ); }

                // StartPowerNode is the origin of the chain; it never receives power.
            },
            /*FactoryPipePower.StartPowerNode.NotifyPreviousPowered end.*/


        }
    });
    /*FactoryPipePower.StartPowerNode end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","FactoryPipePower","UnityEngine.UI","System.Collections","System.Collections.Generic","Cinemachine"];

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*FactoryPipePower.FlowConnectorUtility start.*/
    $m("FactoryPipePower.FlowConnectorUtility", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ResolveFlowEndpoints","is":true,"t":8,"pi":[{"n":"previousOutputWorld","pt":$n[0].Vector3,"ps":0},{"n":"connectorAWorld","pt":$n[0].Vector3,"ps":1},{"n":"connectorBWorld","pt":$n[0].Vector3,"ps":2},{"n":"startWorld","out":true,"pt":$n[0].Vector3,"ps":3},{"n":"endWorld","out":true,"pt":$n[0].Vector3,"ps":4}],"sn":"ResolveFlowEndpoints","rt":$n[1].Void,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[0].Vector3,$n[0].Vector3]}]}; }, $n);
    /*FactoryPipePower.FlowConnectorUtility end.*/

    /*FactoryPipePower.PipeDirectionsUtility start.*/
    $m("FactoryPipePower.PipeDirectionsUtility", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"AreNeighboursCompatible","is":true,"t":8,"pi":[{"n":"previousShape","pt":$n[2].PipeShape,"ps":0},{"n":"previousYawQuarterDegrees","pt":$n[1].Int32,"ps":1},{"n":"currentShape","pt":$n[2].PipeShape,"ps":2},{"n":"currentYawQuarterDegrees","pt":$n[1].Int32,"ps":3}],"sn":"AreNeighboursCompatible","rt":$n[1].Boolean,"p":[$n[2].PipeShape,$n[1].Int32,$n[2].PipeShape,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"AreSegmentLinksDistinct","is":true,"t":8,"pi":[{"n":"previousShape","pt":$n[2].PipeShape,"ps":0},{"n":"previousYawQuarterDegrees","pt":$n[1].Int32,"ps":1},{"n":"previousPosition","pt":$n[0].Vector3,"ps":2},{"n":"currentShape","pt":$n[2].PipeShape,"ps":3},{"n":"currentYawQuarterDegrees","pt":$n[1].Int32,"ps":4},{"n":"currentPosition","pt":$n[0].Vector3,"ps":5},{"n":"nextShape","pt":$n[2].PipeShape,"ps":6},{"n":"nextYawQuarterDegrees","pt":$n[1].Int32,"ps":7},{"n":"nextPosition","pt":$n[0].Vector3,"ps":8}],"sn":"AreSegmentLinksDistinct","rt":$n[1].Boolean,"p":[$n[2].PipeShape,$n[1].Int32,$n[0].Vector3,$n[2].PipeShape,$n[1].Int32,$n[0].Vector3,$n[2].PipeShape,$n[1].Int32,$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetCornerInput","is":true,"t":8,"pi":[{"n":"yawQuarterDegrees","pt":$n[1].Int32,"ps":0}],"sn":"GetCornerInput","rt":$n[1].Int32,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetCornerOutput","is":true,"t":8,"pi":[{"n":"yawQuarterDegrees","pt":$n[1].Int32,"ps":0}],"sn":"GetCornerOutput","rt":$n[1].Int32,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetCurrentCornerGroup","is":true,"t":8,"pi":[{"n":"yawQuarterDegrees","pt":$n[1].Int32,"ps":0}],"sn":"GetCurrentCornerGroup","rt":$n[2].CornerRotationGroup,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, FactoryPipePower.CornerRotationGroup, System.Enum.toStringFn(FactoryPipePower.CornerRotationGroup));}},{"a":2,"n":"GetStraightOpenDirections","is":true,"t":8,"pi":[{"n":"yawQuarterDegrees","pt":$n[1].Int32,"ps":0},{"n":"endA","out":true,"pt":$n[1].Int32,"ps":1},{"n":"endB","out":true,"pt":$n[1].Int32,"ps":2}],"sn":"GetStraightOpenDirections","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32,$n[1].Int32]},{"a":2,"n":"IsOpenDirection","is":true,"t":8,"pi":[{"n":"shape","pt":$n[2].PipeShape,"ps":0},{"n":"yawQuarterDegrees","pt":$n[1].Int32,"ps":1},{"n":"directionDegrees","pt":$n[1].Int32,"ps":2}],"sn":"IsOpenDirection","rt":$n[1].Boolean,"p":[$n[2].PipeShape,$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"NormalizeQuarter","is":true,"t":8,"pi":[{"n":"yawDegrees","pt":$n[1].Single,"ps":0}],"sn":"NormalizeQuarter","rt":$n[1].Int32,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Opposite","is":true,"t":8,"pi":[{"n":"directionDegrees","pt":$n[1].Int32,"ps":0}],"sn":"Opposite","rt":$n[1].Int32,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TryGetConsumedEndOnCurrent","is":true,"t":8,"pi":[{"n":"neighbourShape","pt":$n[2].PipeShape,"ps":0},{"n":"neighbourYawQuarterDegrees","pt":$n[1].Int32,"ps":1},{"n":"currentYawQuarterDegrees","pt":$n[1].Int32,"ps":2},{"n":"currentPosition","pt":$n[0].Vector3,"ps":3},{"n":"neighbourPosition","pt":$n[0].Vector3,"ps":4},{"n":"consumedEndDegrees","out":true,"pt":$n[1].Int32,"ps":5}],"sn":"TryGetConsumedEndOnCurrent","rt":$n[1].Boolean,"p":[$n[2].PipeShape,$n[1].Int32,$n[1].Int32,$n[0].Vector3,$n[0].Vector3,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryGetDirectionVector","is":true,"t":8,"pi":[{"n":"directionDegrees","pt":$n[1].Int32,"ps":0},{"n":"direction","out":true,"pt":$n[0].Vector3,"ps":1}],"sn":"TryGetDirectionVector","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryGetStraightEndByPosition","is":true,"t":8,"pi":[{"n":"currentYawQuarterDegrees","pt":$n[1].Int32,"ps":0},{"n":"currentPosition","pt":$n[0].Vector3,"ps":1},{"n":"neighbourPosition","pt":$n[0].Vector3,"ps":2},{"n":"endDegrees","out":true,"pt":$n[1].Int32,"ps":3}],"sn":"TryGetStraightEndByPosition","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[0].Vector3,$n[0].Vector3,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*FactoryPipePower.PipeDirectionsUtility end.*/

    /*FactoryPipePower.PipeDiameter start.*/
    $m("FactoryPipePower.PipeDiameter", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Large","is":true,"t":4,"rt":$n[2].PipeDiameter,"sn":"Large","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeDiameter, System.Enum.toStringFn(FactoryPipePower.PipeDiameter));}},{"a":2,"n":"Small","is":true,"t":4,"rt":$n[2].PipeDiameter,"sn":"Small","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeDiameter, System.Enum.toStringFn(FactoryPipePower.PipeDiameter));}}]}; }, $n);
    /*FactoryPipePower.PipeDiameter end.*/

    /*FactoryPipePower.PipeLength start.*/
    $m("FactoryPipePower.PipeLength", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"M1","is":true,"t":4,"rt":$n[2].PipeLength,"sn":"M1","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeLength, System.Enum.toStringFn(FactoryPipePower.PipeLength));}},{"a":2,"n":"M2","is":true,"t":4,"rt":$n[2].PipeLength,"sn":"M2","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeLength, System.Enum.toStringFn(FactoryPipePower.PipeLength));}},{"a":2,"n":"M3","is":true,"t":4,"rt":$n[2].PipeLength,"sn":"M3","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeLength, System.Enum.toStringFn(FactoryPipePower.PipeLength));}},{"a":2,"n":"M4","is":true,"t":4,"rt":$n[2].PipeLength,"sn":"M4","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeLength, System.Enum.toStringFn(FactoryPipePower.PipeLength));}},{"a":2,"n":"M5","is":true,"t":4,"rt":$n[2].PipeLength,"sn":"M5","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeLength, System.Enum.toStringFn(FactoryPipePower.PipeLength));}}]}; }, $n);
    /*FactoryPipePower.PipeLength end.*/

    /*FactoryPipePower.PipeShape start.*/
    $m("FactoryPipePower.PipeShape", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Corner","is":true,"t":4,"rt":$n[2].PipeShape,"sn":"Corner","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeShape, System.Enum.toStringFn(FactoryPipePower.PipeShape));}},{"a":2,"n":"Straight","is":true,"t":4,"rt":$n[2].PipeShape,"sn":"Straight","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeShape, System.Enum.toStringFn(FactoryPipePower.PipeShape));}}]}; }, $n);
    /*FactoryPipePower.PipeShape end.*/

    /*FactoryPipePower.PipeSpec start.*/
    $m("FactoryPipePower.PipeSpec", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Equals","t":8,"pi":[{"n":"other","pt":$n[2].PipeSpec,"ps":0}],"sn":"equalsT","rt":$n[1].Boolean,"p":[$n[2].PipeSpec],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"Equals","t":8,"pi":[{"n":"obj","pt":$n[1].Object,"ps":0}],"sn":"equals","rt":$n[1].Boolean,"p":[$n[1].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"GetHashCode","t":8,"sn":"getHashCode","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"op_Equality","is":true,"t":8,"pi":[{"n":"left","pt":$n[2].PipeSpec,"ps":0},{"n":"right","pt":$n[2].PipeSpec,"ps":1}],"sn":"op_Equality","rt":$n[1].Boolean,"p":[$n[2].PipeSpec,$n[2].PipeSpec],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"op_Inequality","is":true,"t":8,"pi":[{"n":"left","pt":$n[2].PipeSpec,"ps":0},{"n":"right","pt":$n[2].PipeSpec,"ps":1}],"sn":"op_Inequality","rt":$n[1].Boolean,"p":[$n[2].PipeSpec,$n[2].PipeSpec],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"diameter","t":4,"rt":$n[2].PipeDiameter,"sn":"diameter","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeDiameter, System.Enum.toStringFn(FactoryPipePower.PipeDiameter));}},{"a":2,"n":"length","t":4,"rt":$n[2].PipeLength,"sn":"length","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeLength, System.Enum.toStringFn(FactoryPipePower.PipeLength));}},{"a":2,"n":"shape","t":4,"rt":$n[2].PipeShape,"sn":"shape","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeShape, System.Enum.toStringFn(FactoryPipePower.PipeShape));}}]}; }, $n);
    /*FactoryPipePower.PipeSpec end.*/

    /*FactoryPipePower.RotationGroup start.*/
    $m("FactoryPipePower.RotationGroup", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Yaw0Or180","is":true,"t":4,"rt":$n[2].RotationGroup,"sn":"Yaw0Or180","box":function ($v) { return Bridge.box($v, FactoryPipePower.RotationGroup, System.Enum.toStringFn(FactoryPipePower.RotationGroup));}},{"a":2,"n":"Yaw90Or270","is":true,"t":4,"rt":$n[2].RotationGroup,"sn":"Yaw90Or270","box":function ($v) { return Bridge.box($v, FactoryPipePower.RotationGroup, System.Enum.toStringFn(FactoryPipePower.RotationGroup));}}]}; }, $n);
    /*FactoryPipePower.RotationGroup end.*/

    /*FactoryPipePower.CornerRotationGroup start.*/
    $m("FactoryPipePower.CornerRotationGroup", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Input0Output270","is":true,"t":4,"rt":$n[2].CornerRotationGroup,"sn":"Input0Output270","box":function ($v) { return Bridge.box($v, FactoryPipePower.CornerRotationGroup, System.Enum.toStringFn(FactoryPipePower.CornerRotationGroup));}},{"a":2,"n":"Input180Output90","is":true,"t":4,"rt":$n[2].CornerRotationGroup,"sn":"Input180Output90","box":function ($v) { return Bridge.box($v, FactoryPipePower.CornerRotationGroup, System.Enum.toStringFn(FactoryPipePower.CornerRotationGroup));}},{"a":2,"n":"Input270Output180","is":true,"t":4,"rt":$n[2].CornerRotationGroup,"sn":"Input270Output180","box":function ($v) { return Bridge.box($v, FactoryPipePower.CornerRotationGroup, System.Enum.toStringFn(FactoryPipePower.CornerRotationGroup));}},{"a":2,"n":"Input90Output0","is":true,"t":4,"rt":$n[2].CornerRotationGroup,"sn":"Input90Output0","box":function ($v) { return Bridge.box($v, FactoryPipePower.CornerRotationGroup, System.Enum.toStringFn(FactoryPipePower.CornerRotationGroup));}}]}; }, $n);
    /*FactoryPipePower.CornerRotationGroup end.*/

    /*FactoryPipePower.DraggablePipeState start.*/
    $m("FactoryPipePower.DraggablePipeState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dragging","is":true,"t":4,"rt":$n[2].DraggablePipeState,"sn":"Dragging","box":function ($v) { return Bridge.box($v, FactoryPipePower.DraggablePipeState, System.Enum.toStringFn(FactoryPipePower.DraggablePipeState));}},{"a":2,"n":"Placed","is":true,"t":4,"rt":$n[2].DraggablePipeState,"sn":"Placed","box":function ($v) { return Bridge.box($v, FactoryPipePower.DraggablePipeState, System.Enum.toStringFn(FactoryPipePower.DraggablePipeState));}},{"a":2,"n":"Returning","is":true,"t":4,"rt":$n[2].DraggablePipeState,"sn":"Returning","box":function ($v) { return Bridge.box($v, FactoryPipePower.DraggablePipeState, System.Enum.toStringFn(FactoryPipePower.DraggablePipeState));}},{"a":2,"n":"Stock","is":true,"t":4,"rt":$n[2].DraggablePipeState,"sn":"Stock","box":function ($v) { return Bridge.box($v, FactoryPipePower.DraggablePipeState, System.Enum.toStringFn(FactoryPipePower.DraggablePipeState));}}]}; }, $n);
    /*FactoryPipePower.DraggablePipeState end.*/

    /*FactoryPipePower.PipeSlotState start.*/
    $m("FactoryPipePower.PipeSlotState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Charging","is":true,"t":4,"rt":$n[2].PipeSlotState,"sn":"Charging","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeSlotState, System.Enum.toStringFn(FactoryPipePower.PipeSlotState));}},{"a":2,"n":"Empty","is":true,"t":4,"rt":$n[2].PipeSlotState,"sn":"Empty","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeSlotState, System.Enum.toStringFn(FactoryPipePower.PipeSlotState));}},{"a":2,"n":"HoverValid","is":true,"t":4,"rt":$n[2].PipeSlotState,"sn":"HoverValid","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeSlotState, System.Enum.toStringFn(FactoryPipePower.PipeSlotState));}},{"a":2,"n":"OccupiedAligned","is":true,"t":4,"rt":$n[2].PipeSlotState,"sn":"OccupiedAligned","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeSlotState, System.Enum.toStringFn(FactoryPipePower.PipeSlotState));}},{"a":2,"n":"OccupiedWrongRotation","is":true,"t":4,"rt":$n[2].PipeSlotState,"sn":"OccupiedWrongRotation","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeSlotState, System.Enum.toStringFn(FactoryPipePower.PipeSlotState));}},{"a":2,"n":"Powered","is":true,"t":4,"rt":$n[2].PipeSlotState,"sn":"Powered","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeSlotState, System.Enum.toStringFn(FactoryPipePower.PipeSlotState));}}]}; }, $n);
    /*FactoryPipePower.PipeSlotState end.*/

    /*FactoryPipePower.EndPowerState start.*/
    $m("FactoryPipePower.EndPowerState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Inactive","is":true,"t":4,"rt":$n[2].EndPowerState,"sn":"Inactive","box":function ($v) { return Bridge.box($v, FactoryPipePower.EndPowerState, System.Enum.toStringFn(FactoryPipePower.EndPowerState));}},{"a":2,"n":"Powered","is":true,"t":4,"rt":$n[2].EndPowerState,"sn":"Powered","box":function ($v) { return Bridge.box($v, FactoryPipePower.EndPowerState, System.Enum.toStringFn(FactoryPipePower.EndPowerState));}}]}; }, $n);
    /*FactoryPipePower.EndPowerState end.*/

    /*FactoryPipePower.FactoryPowerState start.*/
    $m("FactoryPipePower.FactoryPowerState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Offline","is":true,"t":4,"rt":$n[2].FactoryPowerState,"sn":"Offline","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryPowerState, System.Enum.toStringFn(FactoryPipePower.FactoryPowerState));}},{"a":2,"n":"Online","is":true,"t":4,"rt":$n[2].FactoryPowerState,"sn":"Online","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryPowerState, System.Enum.toStringFn(FactoryPipePower.FactoryPowerState));}}]}; }, $n);
    /*FactoryPipePower.FactoryPowerState end.*/

    /*FactoryPipePower.QuarterTurnUtility start.*/
    $m("FactoryPipePower.QuarterTurnUtility", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetQuarterTurn","is":true,"t":8,"pi":[{"n":"yaw","pt":$n[1].Single,"ps":0}],"sn":"GetQuarterTurn","rt":$n[1].Int32,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"IsAligned","is":true,"t":8,"pi":[{"n":"yaw","pt":$n[1].Single,"ps":0},{"n":"group","pt":$n[2].RotationGroup,"ps":1}],"sn":"IsAligned","rt":$n[1].Boolean,"p":[$n[1].Single,$n[2].RotationGroup],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"QuarterTurnToRotation","is":true,"t":8,"pi":[{"n":"quarterTurn","pt":$n[1].Int32,"ps":0}],"sn":"QuarterTurnToRotation","rt":$n[0].Quaternion,"p":[$n[1].Int32]},{"a":2,"n":"QuarterTurnToYaw","is":true,"t":8,"pi":[{"n":"quarterTurn","pt":$n[1].Int32,"ps":0}],"sn":"QuarterTurnToYaw","rt":$n[1].Single,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FactoryPipePower.QuarterTurnUtility end.*/

    /*FactoryPipePower.SceneInitializer start.*/
    $m("FactoryPipePower.SceneInitializer", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"IsInitialized","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsInitialized","t":8,"rt":$n[1].Boolean,"fg":"IsInitialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsInitialized"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"factoryTutorial","t":4,"rt":$n[2].FactoryTutorialController,"sn":"factoryTutorial"},{"a":1,"n":"initialized","t":4,"rt":$n[1].Boolean,"sn":"initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pointerInput","t":4,"rt":$n[2].PointerInputController,"sn":"pointerInput"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"powerChain","t":4,"rt":$n[2].PowerChainController,"sn":"powerChain"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"registry","t":4,"rt":$n[2].PipeSlotRegistry,"sn":"registry"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slots","t":4,"rt":System.Array.type(FactoryPipePower.PipeSlotController),"sn":"slots"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorial","t":4,"rt":$n[2].TutorialController,"sn":"tutorial"}]}; }, $n);
    /*FactoryPipePower.SceneInitializer end.*/

    /*FactoryPipePower.CompletedUI start.*/
    $m("FactoryPipePower.CompletedUI", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[1].Void},{"a":1,"n":"ResetDownloadScale","t":8,"sn":"ResetDownloadScale","rt":$n[1].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateDownloadPulse","t":8,"sn":"UpdateDownloadPulse","rt":$n[1].Void},{"a":2,"n":"IsVisible","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsVisible","t":8,"rt":$n[1].Boolean,"fg":"IsVisible","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsVisible"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"downloadImage","t":4,"rt":$n[3].Image,"sn":"downloadImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"downloadPulseMax","t":4,"rt":$n[1].Single,"sn":"downloadPulseMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Download Pulse"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"downloadPulseMin","t":4,"rt":$n[1].Single,"sn":"downloadPulseMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"downloadPulsePeriod","t":4,"rt":$n[1].Single,"sn":"downloadPulsePeriod","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelRoot","t":4,"rt":$n[0].GameObject,"sn":"panelRoot"}]}; }, $n);
    /*FactoryPipePower.CompletedUI end.*/

    /*FactoryPipePower.CompletionUI start.*/
    $m("FactoryPipePower.CompletionUI", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"BindPrimary","t":8,"sn":"BindPrimary","rt":$n[1].Void},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[1].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":2,"n":"PressPrimary","t":8,"sn":"PressPrimary","rt":$n[1].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[1].Void},{"a":1,"n":"UnbindPrimary","t":8,"sn":"UnbindPrimary","rt":$n[1].Void},{"a":2,"n":"IsVisible","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsVisible","t":8,"rt":$n[1].Boolean,"fg":"IsVisible","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsVisible"},{"a":2,"n":"PrimaryButton","t":16,"rt":$n[3].Button,"g":{"a":2,"n":"get_PrimaryButton","t":8,"rt":$n[3].Button,"fg":"PrimaryButton"},"fn":"PrimaryButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelRoot","t":4,"rt":$n[0].GameObject,"sn":"panelRoot"},{"a":1,"n":"primaryBound","t":4,"rt":$n[1].Boolean,"sn":"primaryBound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"primaryButton","t":4,"rt":$n[3].Button,"sn":"primaryButton"},{"a":1,"n":"primaryFired","t":4,"rt":$n[1].Boolean,"sn":"primaryFired","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"subtitleLabel","t":4,"rt":$n[3].Text,"sn":"subtitleLabel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"subtitleText","t":4,"rt":$n[1].String,"sn":"subtitleText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"titleLabel","t":4,"rt":$n[3].Text,"sn":"titleLabel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"titleText","t":4,"rt":$n[1].String,"sn":"titleText"},{"a":2,"n":"ContinueRequested","t":2,"ad":{"a":2,"n":"add_ContinueRequested","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addContinueRequested","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_ContinueRequested","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeContinueRequested","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*FactoryPipePower.CompletionUI end.*/

    /*FactoryPipePower.GameFlowState start.*/
    $m("FactoryPipePower.GameFlowState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Completed","is":true,"t":4,"rt":$n[2].GameFlowState,"sn":"Completed","box":function ($v) { return Bridge.box($v, FactoryPipePower.GameFlowState, System.Enum.toStringFn(FactoryPipePower.GameFlowState));}},{"a":2,"n":"Gameplay","is":true,"t":4,"rt":$n[2].GameFlowState,"sn":"Gameplay","box":function ($v) { return Bridge.box($v, FactoryPipePower.GameFlowState, System.Enum.toStringFn(FactoryPipePower.GameFlowState));}},{"a":2,"n":"WinPending","is":true,"t":4,"rt":$n[2].GameFlowState,"sn":"WinPending","box":function ($v) { return Bridge.box($v, FactoryPipePower.GameFlowState, System.Enum.toStringFn(FactoryPipePower.GameFlowState));}}]}; }, $n);
    /*FactoryPipePower.GameFlowState end.*/

    /*FactoryPipePower.GameFlowController start.*/
    $m("FactoryPipePower.GameFlowController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CompleteAfterDelay","t":8,"sn":"CompleteAfterDelay","rt":$n[4].IEnumerator},{"a":1,"n":"HandleContinueRequested","t":8,"sn":"HandleContinueRequested","rt":$n[1].Void},{"a":1,"n":"HandleFactoryOnline","t":8,"sn":"HandleFactoryOnline","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"ShowCompletedScreenAfterDelay","t":8,"sn":"ShowCompletedScreenAfterDelay","rt":$n[4].IEnumerator},{"a":2,"n":"State","t":16,"rt":$n[2].GameFlowState,"g":{"a":2,"n":"get_State","t":8,"rt":$n[2].GameFlowState,"fg":"State","box":function ($v) { return Bridge.box($v, FactoryPipePower.GameFlowState, System.Enum.toStringFn(FactoryPipePower.GameFlowState));}},"fn":"State"},{"a":2,"n":"WinTriggerCount","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_WinTriggerCount","t":8,"rt":$n[1].Int32,"fg":"WinTriggerCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"WinTriggerCount"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completedScreenDelay","t":4,"rt":$n[1].Single,"sn":"completedScreenDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"completedScreenRoutine","t":4,"rt":$n[0].Coroutine,"sn":"completedScreenRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completedUI","t":4,"rt":$n[2].CompletedUI,"sn":"completedUI"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completionDelay","t":4,"rt":$n[1].Single,"sn":"completionDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"completionRoutine","t":4,"rt":$n[0].Coroutine,"sn":"completionRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completionUI","t":4,"rt":$n[2].CompletionUI,"sn":"completionUI"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"factoryPowerController","t":4,"rt":$n[2].FactoryPowerController,"sn":"factoryPowerController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"factoryTutorial","t":4,"rt":$n[2].FactoryTutorialController,"sn":"factoryTutorial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pointerInput","t":4,"rt":$n[2].PointerInputController,"sn":"pointerInput"},{"a":1,"n":"state","t":4,"rt":$n[2].GameFlowState,"sn":"state","box":function ($v) { return Bridge.box($v, FactoryPipePower.GameFlowState, System.Enum.toStringFn(FactoryPipePower.GameFlowState));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialController","t":4,"rt":$n[2].TutorialController,"sn":"tutorialController"},{"a":1,"n":"winTriggerCount","t":4,"rt":$n[1].Int32,"sn":"winTriggerCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ContinueRequested","t":2,"ad":{"a":2,"n":"add_ContinueRequested","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addContinueRequested","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_ContinueRequested","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeContinueRequested","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"WinTriggered","t":2,"ad":{"a":2,"n":"add_WinTriggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addWinTriggered","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_WinTriggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeWinTriggered","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*FactoryPipePower.GameFlowController end.*/

    /*FactoryPipePower.PointerInputController start.*/
    $m("FactoryPipePower.PointerInputController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"CurrentPointerPosition","t":8,"sn":"CurrentPointerPosition","rt":$n[0].Vector2},{"a":1,"n":"HandlePressCanceled","t":8,"sn":"HandlePressCanceled","rt":$n[1].Void},{"a":1,"n":"HandlePressStarted","t":8,"pi":[{"n":"screenPosition","pt":$n[0].Vector2,"ps":0}],"sn":"HandlePressStarted","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":1,"n":"HasPointerPosition","t":8,"sn":"HasPointerPosition","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnActivePipeCommitted","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"OnActivePipeCommitted","rt":$n[1].Void,"p":[$n[2].DraggablePipeController]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":1,"n":"ReleaseActivePipe","t":8,"sn":"ReleaseActivePipe","rt":$n[1].Void},{"a":1,"n":"ResolveTutorialGate","t":8,"sn":"ResolveTutorialGate","rt":$n[2].ITutorialInputGate},{"a":2,"n":"SetInputBlocked","t":8,"pi":[{"n":"blocked","pt":$n[1].Boolean,"ps":0}],"sn":"SetInputBlocked","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SetTutorialGate","t":8,"pi":[{"n":"gateBehaviour","pt":$n[0].MonoBehaviour,"ps":0}],"sn":"SetTutorialGate","rt":$n[1].Void,"p":[$n[0].MonoBehaviour]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"ActivePipe","t":16,"rt":$n[2].DraggablePipeController,"g":{"a":2,"n":"get_ActivePipe","t":8,"rt":$n[2].DraggablePipeController,"fg":"ActivePipe"},"fn":"ActivePipe"},{"a":2,"n":"InputBlocked","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_InputBlocked","t":8,"rt":$n[1].Boolean,"fg":"InputBlocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"InputBlocked"},{"a":2,"n":"RaycastCamera","t":16,"rt":$n[0].Camera,"g":{"a":2,"n":"get_RaycastCamera","t":8,"rt":$n[0].Camera,"fg":"RaycastCamera"},"fn":"RaycastCamera"},{"a":2,"n":"TutorialGate","t":16,"rt":$n[2].ITutorialInputGate,"g":{"a":2,"n":"get_TutorialGate","t":8,"rt":$n[2].ITutorialInputGate,"fg":"TutorialGate"},"fn":"TutorialGate"},{"a":1,"n":"MapName","is":true,"t":4,"rt":$n[1].String,"sn":"MapName"},{"a":1,"n":"PositionActionName","is":true,"t":4,"rt":$n[1].String,"sn":"PositionActionName"},{"a":1,"n":"PressActionName","is":true,"t":4,"rt":$n[1].String,"sn":"PressActionName"},{"a":1,"n":"activePipe","t":4,"rt":$n[2].DraggablePipeController,"sn":"activePipe"},{"a":1,"n":"inputBlocked","t":4,"rt":$n[1].Boolean,"sn":"inputBlocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxRayDistance","t":4,"rt":$n[1].Single,"sn":"maxRayDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pickMask","t":4,"rt":$n[0].LayerMask,"sn":"pickMask"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"raycastCamera","t":4,"rt":$n[0].Camera,"sn":"raycastCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slotTapMask","t":4,"rt":$n[0].LayerMask,"sn":"slotTapMask"},{"a":1,"n":"tutorialGate","t":4,"rt":$n[2].ITutorialInputGate,"sn":"tutorialGate"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialGateBehaviour","t":4,"rt":$n[0].MonoBehaviour,"sn":"tutorialGateBehaviour"},{"a":1,"n":"tutorialGateResolved","t":4,"rt":$n[1].Boolean,"sn":"tutorialGateResolved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*FactoryPipePower.PointerInputController end.*/

    /*FactoryPipePower.DraggablePipeController start.*/
    $m("FactoryPipePower.DraggablePipeController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyColliderState","t":8,"sn":"ApplyColliderState","rt":$n[1].Void},{"a":1,"n":"ApplyMovement","t":8,"pi":[{"n":"position","pt":$n[0].Vector3,"ps":0},{"n":"rotation","pt":$n[0].Quaternion,"ps":1}],"sn":"ApplyMovement","rt":$n[1].Void,"p":[$n[0].Vector3,$n[0].Quaternion]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"BeginDrag","t":8,"pi":[{"n":"pointerScreenPosition","pt":$n[0].Vector2,"ps":0},{"n":"camera","pt":$n[0].Camera,"ps":1}],"sn":"BeginDrag","rt":$n[1].Void,"p":[$n[0].Vector2,$n[0].Camera]},{"a":1,"n":"ClampToObstacles","t":8,"pi":[{"n":"desired","pt":$n[0].Vector3,"ps":0}],"sn":"ClampToObstacles","rt":$n[0].Vector3,"p":[$n[0].Vector3]},{"a":2,"n":"CommitPlaced","t":8,"sn":"CommitPlaced","rt":$n[1].Void},{"a":1,"n":"ComputeDragOffset","t":8,"pi":[{"n":"pointerScreenPosition","pt":$n[0].Vector2,"ps":0},{"n":"camera","pt":$n[0].Camera,"ps":1}],"sn":"ComputeDragOffset","rt":$n[1].Void,"p":[$n[0].Vector2,$n[0].Camera]},{"a":2,"n":"EndDragWithoutPlacement","t":8,"sn":"EndDragWithoutPlacement","rt":$n[1].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":1,"n":"GetDragBox","t":8,"pi":[{"n":"center","out":true,"pt":$n[0].Vector3,"ps":0},{"n":"halfExtents","out":true,"pt":$n[0].Vector3,"ps":1}],"sn":"GetDragBox","rt":$n[1].Void,"p":[$n[0].Vector3,$n[0].Vector3]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"ReturnRoutine","t":8,"sn":"ReturnRoutine","rt":$n[4].IEnumerator},{"a":1,"n":"SweepClamp","t":8,"pi":[{"n":"from","pt":$n[0].Vector3,"ps":0},{"n":"desired","pt":$n[0].Vector3,"ps":1},{"n":"hit","out":true,"pt":$n[0].RaycastHit,"ps":2},{"n":"startedInside","out":true,"pt":$n[1].Boolean,"ps":3}],"sn":"SweepClamp","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].RaycastHit,$n[1].Boolean]},{"a":1,"n":"TryGetPlanePoint","t":8,"pi":[{"n":"screenPosition","pt":$n[0].Vector2,"ps":0},{"n":"camera","pt":$n[0].Camera,"ps":1},{"n":"point","out":true,"pt":$n[0].Vector3,"ps":2}],"sn":"TryGetPlanePoint","rt":$n[1].Boolean,"p":[$n[0].Vector2,$n[0].Camera,$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"UpdateDrag","t":8,"pi":[{"n":"pointerScreenPosition","pt":$n[0].Vector2,"ps":0},{"n":"camera","pt":$n[0].Camera,"ps":1}],"sn":"UpdateDrag","rt":$n[1].Void,"p":[$n[0].Vector2,$n[0].Camera]},{"a":1,"n":"DragBlockMask","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":1,"n":"get_DragBlockMask","t":8,"rt":$n[1].Int32,"fg":"DragBlockMask","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"DragBlockMask"},{"a":2,"n":"DragPlaneHeight","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_DragPlaneHeight","t":8,"rt":$n[1].Single,"fg":"DragPlaneHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"DragPlaneHeight"},{"a":2,"n":"IsInteractable","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsInteractable","t":8,"rt":$n[1].Boolean,"fg":"IsInteractable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsInteractable"},{"a":2,"n":"Spec","t":16,"rt":$n[2].PipeSpec,"g":{"a":2,"n":"get_Spec","t":8,"rt":$n[2].PipeSpec,"fg":"Spec"},"fn":"Spec"},{"a":2,"n":"State","t":16,"rt":$n[2].DraggablePipeState,"g":{"a":2,"n":"get_State","t":8,"rt":$n[2].DraggablePipeState,"fg":"State","box":function ($v) { return Bridge.box($v, FactoryPipePower.DraggablePipeState, System.Enum.toStringFn(FactoryPipePower.DraggablePipeState));}},"fn":"State"},{"a":2,"n":"Visual","t":16,"rt":$n[2].PipeVisualController,"g":{"a":2,"n":"get_Visual","t":8,"rt":$n[2].PipeVisualController,"fg":"Visual"},"fn":"Visual"},{"a":2,"n":"WorldYaw","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_WorldYaw","t":8,"rt":$n[1].Single,"fg":"WorldYaw","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"WorldYaw"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"body","t":4,"rt":$n[0].Rigidbody,"sn":"body"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultMaterial","t":4,"rt":$n[0].Material,"sn":"defaultMaterial"},{"a":1,"n":"dragBlockMask","is":true,"t":4,"rt":$n[1].Int32,"sn":"dragBlockMask","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragCollider","t":4,"rt":$n[0].Collider,"sn":"dragCollider"},{"a":1,"n":"dragOffset","t":4,"rt":$n[0].Vector3,"sn":"dragOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragPlaneHeight","t":4,"rt":$n[1].Single,"sn":"dragPlaneHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragTargetPosition","t":4,"rt":$n[0].Vector3,"sn":"dragTargetPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleSkin","t":4,"rt":$n[1].Single,"sn":"obstacleSkin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.Serialization.FormerlySerializedAsAttribute("dragCollider")],"a":1,"n":"pickCollider","t":4,"rt":$n[0].Collider,"sn":"pickCollider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"returnDuration","t":4,"rt":$n[1].Single,"sn":"returnDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"returnPosition","t":4,"rt":$n[0].Vector3,"sn":"returnPosition"},{"a":1,"n":"returnRotation","t":4,"rt":$n[0].Quaternion,"sn":"returnRotation"},{"a":1,"n":"returnRoutine","t":4,"rt":$n[0].Coroutine,"sn":"returnRoutine"},{"a":1,"n":"returnStartPosition","t":4,"rt":$n[0].Vector3,"sn":"returnStartPosition"},{"a":1,"n":"returnStartRotation","t":4,"rt":$n[0].Quaternion,"sn":"returnStartRotation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spec","t":4,"rt":$n[2].PipeSpec,"sn":"spec"},{"a":1,"n":"state","t":4,"rt":$n[2].DraggablePipeState,"sn":"state","box":function ($v) { return Bridge.box($v, FactoryPipePower.DraggablePipeState, System.Enum.toStringFn(FactoryPipePower.DraggablePipeState));}},{"a":1,"n":"stockPosition","t":4,"rt":$n[0].Vector3,"sn":"stockPosition"},{"a":1,"n":"stockRotation","t":4,"rt":$n[0].Quaternion,"sn":"stockRotation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visual","t":4,"rt":$n[2].PipeVisualController,"sn":"visual"},{"a":2,"n":"AnyDragFinished","is":true,"t":2,"ad":{"a":2,"n":"add_AnyDragFinished","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addAnyDragFinished","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_AnyDragFinished","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeAnyDragFinished","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"AnyDragStarted","is":true,"t":2,"ad":{"a":2,"n":"add_AnyDragStarted","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addAnyDragStarted","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_AnyDragStarted","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeAnyDragStarted","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"Committed","t":2,"ad":{"a":2,"n":"add_Committed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addCommitted","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Committed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeCommitted","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"DragStarted","t":2,"ad":{"a":2,"n":"add_DragStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addDragStarted","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_DragStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeDragStarted","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"ReturnedToStock","t":2,"ad":{"a":2,"n":"add_ReturnedToStock","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addReturnedToStock","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_ReturnedToStock","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeReturnedToStock","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*FactoryPipePower.DraggablePipeController end.*/

    /*FactoryPipePower.PipeCompletionSparks start.*/
    $m("FactoryPipePower.PipeCompletionSparks", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PlayCompletion","t":8,"pi":[{"n":"endIsB","pt":$n[1].Boolean,"ps":0}],"sn":"PlayCompletion","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"StopAndClear","t":8,"sn":"StopAndClear","rt":$n[1].Void},{"a":1,"n":"StopOne","is":true,"t":8,"pi":[{"n":"system","pt":$n[0].ParticleSystem,"ps":0}],"sn":"StopOne","rt":$n[1].Void,"p":[$n[0].ParticleSystem]},{"a":2,"n":"HasBothReferences","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_HasBothReferences","t":8,"rt":$n[1].Boolean,"fg":"HasBothReferences","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasBothReferences"},{"a":2,"n":"SparksA","t":16,"rt":$n[0].ParticleSystem,"g":{"a":2,"n":"get_SparksA","t":8,"rt":$n[0].ParticleSystem,"fg":"SparksA"},"fn":"SparksA"},{"a":2,"n":"SparksB","t":16,"rt":$n[0].ParticleSystem,"g":{"a":2,"n":"get_SparksB","t":8,"rt":$n[0].ParticleSystem,"fg":"SparksB"},"fn":"SparksB"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sparksA","t":4,"rt":$n[0].ParticleSystem,"sn":"sparksA"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sparksB","t":4,"rt":$n[0].ParticleSystem,"sn":"sparksB"}]}; }, $n);
    /*FactoryPipePower.PipeCompletionSparks end.*/

    /*FactoryPipePower.PipeSlotCaptureVolume start.*/
    $m("FactoryPipePower.PipeSlotCaptureVolume", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[0].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[0].Collider]},{"a":2,"n":"OwnerSlot","t":16,"rt":$n[2].PipeSlotController,"g":{"a":2,"n":"get_OwnerSlot","t":8,"rt":$n[2].PipeSlotController,"fg":"OwnerSlot"},"fn":"OwnerSlot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ownerSlot","t":4,"rt":$n[2].PipeSlotController,"sn":"ownerSlot"}]}; }, $n);
    /*FactoryPipePower.PipeSlotCaptureVolume end.*/

    /*FactoryPipePower.PipeSlotController start.*/
    $m("FactoryPipePower.PipeSlotController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyStateMaterial","t":8,"sn":"ApplyStateMaterial","rt":$n[1].Void},{"a":1,"n":"ApplyTapColliderState","t":8,"sn":"ApplyTapColliderState","rt":$n[1].Void},{"a":1,"n":"AreDirectionsValid","t":8,"sn":"AreDirectionsValid","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"ChargeRoutine","t":8,"sn":"ChargeRoutine","rt":$n[4].IEnumerator},{"a":1,"n":"ComputeIsAligned","t":8,"sn":"ComputeIsAligned","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"EvaluateAlignment","t":8,"sn":"EvaluateAlignment","rt":$n[1].Void},{"a":2,"n":"IsCompatible","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"IsCompatible","rt":$n[1].Boolean,"p":[$n[2].DraggablePipeController],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"NotifyPreviousPowered","t":8,"pi":[{"n":"previous","pt":$n[2].IPowerNode,"ps":0}],"sn":"NotifyPreviousPowered","rt":$n[1].Void,"p":[$n[2].IPowerNode]},{"a":2,"n":"OnPipeTriggerEnter","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"OnPipeTriggerEnter","rt":$n[1].Void,"p":[$n[2].DraggablePipeController]},{"a":2,"n":"ResetPowerState","t":8,"sn":"ResetPowerState","rt":$n[1].Void},{"a":2,"n":"ResetSlot","t":8,"sn":"ResetSlot","rt":$n[1].Void},{"a":1,"n":"RevalidateLocal","t":8,"sn":"RevalidateLocal","rt":$n[1].Void},{"a":1,"n":"RevalidateLocalAndNeighbours","t":8,"sn":"RevalidateLocalAndNeighbours","rt":$n[1].Void},{"a":1,"n":"RotateOneStepRoutine","t":8,"sn":"RotateOneStepRoutine","rt":$n[4].IEnumerator},{"a":2,"n":"SetHoverValid","t":8,"pi":[{"n":"value","pt":$n[1].Boolean,"ps":0}],"sn":"SetHoverValid","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"SetState","t":8,"pi":[{"n":"nextState","pt":$n[2].PipeSlotState,"ps":0}],"sn":"SetState","rt":$n[1].Void,"p":[$n[2].PipeSlotState]},{"a":1,"n":"SetTapCollidersEnabled","t":8,"pi":[{"n":"enabled","pt":$n[1].Boolean,"ps":0}],"sn":"SetTapCollidersEnabled","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SetupPowerNodes","t":8,"pi":[{"n":"previous","pt":$n[2].IPowerNode,"ps":0},{"n":"next","pt":$n[2].IPowerNode,"ps":1}],"sn":"SetupPowerNodes","rt":$n[1].Void,"p":[$n[2].IPowerNode,$n[2].IPowerNode]},{"a":2,"n":"TryAccept","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"TryAccept","rt":$n[1].Boolean,"p":[$n[2].DraggablePipeController],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryComputeCornerElbow","t":8,"pi":[{"n":"elbow","out":true,"pt":$n[0].Vector3,"ps":0}],"sn":"TryComputeCornerElbow","rt":$n[1].Boolean,"p":[$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetNeighbourOrientation","is":true,"t":8,"pi":[{"n":"node","pt":$n[2].IPowerNode,"ps":0},{"n":"shape","out":true,"pt":$n[2].PipeShape,"ps":1},{"n":"yawQuarterDegrees","out":true,"pt":$n[1].Int32,"ps":2},{"n":"position","out":true,"pt":$n[0].Vector3,"ps":3}],"sn":"TryGetNeighbourOrientation","rt":$n[1].Boolean,"p":[$n[2].IPowerNode,$n[2].PipeShape,$n[1].Int32,$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryRotateTap","t":8,"sn":"TryRotateTap","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryStartCharging","t":8,"sn":"TryStartCharging","rt":$n[1].Void},{"a":2,"n":"AcceptedPipe","t":16,"rt":$n[2].DraggablePipeController,"g":{"a":2,"n":"get_AcceptedPipe","t":8,"rt":$n[2].DraggablePipeController,"fg":"AcceptedPipe"},"fn":"AcceptedPipe"},{"a":2,"n":"AnchorY","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get_AnchorY","t":8,"rt":$n[0].Transform,"fg":"AnchorY"},"fn":"AnchorY"},{"a":2,"n":"CompletionSparks","t":16,"rt":$n[2].PipeCompletionSparks,"g":{"a":2,"n":"get_CompletionSparks","t":8,"rt":$n[2].PipeCompletionSparks,"fg":"CompletionSparks"},"fn":"CompletionSparks"},{"a":2,"n":"ConnectorA","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get_ConnectorA","t":8,"rt":$n[0].Transform,"fg":"ConnectorA"},"fn":"ConnectorA"},{"a":2,"n":"ConnectorB","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get_ConnectorB","t":8,"rt":$n[0].Transform,"fg":"ConnectorB"},"fn":"ConnectorB"},{"a":2,"n":"ExpectedCornerGroup","t":16,"rt":$n[2].CornerRotationGroup,"g":{"a":2,"n":"get_ExpectedCornerGroup","t":8,"rt":$n[2].CornerRotationGroup,"fg":"ExpectedCornerGroup","box":function ($v) { return Bridge.box($v, FactoryPipePower.CornerRotationGroup, System.Enum.toStringFn(FactoryPipePower.CornerRotationGroup));}},"fn":"ExpectedCornerGroup"},{"a":2,"n":"ExpectedSpec","t":16,"rt":$n[2].PipeSpec,"g":{"a":2,"n":"get_ExpectedSpec","t":8,"rt":$n[2].PipeSpec,"fg":"ExpectedSpec"},"fn":"ExpectedSpec"},{"a":2,"n":"HasCharged","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_HasCharged","t":8,"rt":$n[1].Boolean,"fg":"HasCharged","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasCharged"},{"a":2,"n":"IsAligned","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsAligned","t":8,"rt":$n[1].Boolean,"fg":"IsAligned","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsAligned"},{"a":2,"n":"IsOccupied","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsOccupied","t":8,"rt":$n[1].Boolean,"fg":"IsOccupied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsOccupied"},{"a":2,"n":"IsPowered","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsPowered","t":8,"rt":$n[1].Boolean,"fg":"IsPowered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsPowered"},{"a":2,"n":"IsRotating","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsRotating","t":8,"rt":$n[1].Boolean,"fg":"IsRotating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsRotating"},{"a":2,"n":"NextNode","t":16,"rt":$n[2].IPowerNode,"g":{"a":2,"n":"get_NextNode","t":8,"rt":$n[2].IPowerNode,"fg":"NextNode"},"fn":"NextNode"},{"a":2,"n":"OwnerRegistry","t":16,"rt":$n[2].PipeSlotRegistry,"g":{"a":2,"n":"get_OwnerRegistry","t":8,"rt":$n[2].PipeSlotRegistry,"fg":"OwnerRegistry"},"s":{"a":2,"n":"set_OwnerRegistry","t":8,"p":[$n[2].PipeSlotRegistry],"rt":$n[1].Void,"fs":"OwnerRegistry"},"fn":"OwnerRegistry"},{"a":2,"n":"PlacementCommitted","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_PlacementCommitted","t":8,"rt":$n[1].Boolean,"fg":"PlacementCommitted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"PlacementCommitted"},{"a":2,"n":"PowerOutput","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get_PowerOutput","t":8,"rt":$n[0].Transform,"fg":"PowerOutput"},"fn":"PowerOutput"},{"a":2,"n":"PreviousNode","t":16,"rt":$n[2].IPowerNode,"g":{"a":2,"n":"get_PreviousNode","t":8,"rt":$n[2].IPowerNode,"fg":"PreviousNode"},"fn":"PreviousNode"},{"a":2,"n":"SlotRotationGroup","t":16,"rt":$n[2].RotationGroup,"g":{"a":2,"n":"get_SlotRotationGroup","t":8,"rt":$n[2].RotationGroup,"fg":"SlotRotationGroup","box":function ($v) { return Bridge.box($v, FactoryPipePower.RotationGroup, System.Enum.toStringFn(FactoryPipePower.RotationGroup));}},"fn":"SlotRotationGroup"},{"a":2,"n":"State","t":16,"rt":$n[2].PipeSlotState,"g":{"a":2,"n":"get_State","t":8,"rt":$n[2].PipeSlotState,"fg":"State","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeSlotState, System.Enum.toStringFn(FactoryPipePower.PipeSlotState));}},"fn":"State"},{"a":2,"n":"Visual","t":16,"rt":$n[2].PipeVisualController,"g":{"a":2,"n":"get_Visual","t":8,"rt":$n[2].PipeVisualController,"fg":"Visual"},"fn":"Visual"},{"a":1,"n":"acceptedPipe","t":4,"rt":$n[2].DraggablePipeController,"sn":"acceptedPipe"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"anchorY","t":4,"rt":$n[0].Transform,"sn":"anchorY"},{"a":1,"n":"authoringAnchorRotation","t":4,"rt":$n[0].Quaternion,"sn":"authoringAnchorRotation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"captureCollider","t":4,"rt":$n[0].Collider,"sn":"captureCollider"},{"a":1,"n":"chargeRoutine","t":4,"rt":$n[0].Coroutine,"sn":"chargeRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"chargingDuration","t":4,"rt":$n[1].Single,"sn":"chargingDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completionSparks","t":4,"rt":$n[2].PipeCompletionSparks,"sn":"completionSparks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"connectorA","t":4,"rt":$n[0].Transform,"sn":"connectorA"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"connectorB","t":4,"rt":$n[0].Transform,"sn":"connectorB"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultMaterial","t":4,"rt":$n[0].Material,"sn":"defaultMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"emptyMaterial","t":4,"rt":$n[0].Material,"sn":"emptyMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"expectedCornerGroup","t":4,"rt":$n[2].CornerRotationGroup,"sn":"expectedCornerGroup","box":function ($v) { return Bridge.box($v, FactoryPipePower.CornerRotationGroup, System.Enum.toStringFn(FactoryPipePower.CornerRotationGroup));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"expectedSpec","t":4,"rt":$n[2].PipeSpec,"sn":"expectedSpec"},{"a":1,"n":"hasCharged","t":4,"rt":$n[1].Boolean,"sn":"hasCharged","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hoverValidMaterial","t":4,"rt":$n[0].Material,"sn":"hoverValidMaterial"},{"a":1,"n":"isRotating","t":4,"rt":$n[1].Boolean,"sn":"isRotating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"nextNode","t":4,"rt":$n[2].IPowerNode,"sn":"nextNode"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"nextNodeBehaviour","t":4,"rt":$n[0].MonoBehaviour,"sn":"nextNodeBehaviour"},{"a":1,"n":"placementCommitted","t":4,"rt":$n[1].Boolean,"sn":"placementCommitted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"previousNode","t":4,"rt":$n[2].IPowerNode,"sn":"previousNode"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"previousNodeBehaviour","t":4,"rt":$n[0].MonoBehaviour,"sn":"previousNodeBehaviour"},{"a":1,"n":"revalidating","t":4,"rt":$n[1].Boolean,"sn":"revalidating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"rotateRoutine","t":4,"rt":$n[0].Coroutine,"sn":"rotateRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationDuration","t":4,"rt":$n[1].Single,"sn":"rotationDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationGroup","t":4,"rt":$n[2].RotationGroup,"sn":"rotationGroup","box":function ($v) { return Bridge.box($v, FactoryPipePower.RotationGroup, System.Enum.toStringFn(FactoryPipePower.RotationGroup));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slotVisual","t":4,"rt":$n[2].PipeVisualController,"sn":"slotVisual"},{"a":1,"n":"state","t":4,"rt":$n[2].PipeSlotState,"sn":"state","box":function ($v) { return Bridge.box($v, FactoryPipePower.PipeSlotState, System.Enum.toStringFn(FactoryPipePower.PipeSlotState));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tapCollider","t":4,"rt":$n[0].Collider,"sn":"tapCollider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"wrongMaterial","t":4,"rt":$n[0].Material,"sn":"wrongMaterial"},{"a":2,"n":"StateChanged","t":2,"ad":{"a":2,"n":"add_StateChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addStateChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_StateChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeStateChanged","rt":$n[1].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<OwnerRegistry>k__BackingField","t":4,"rt":$n[2].PipeSlotRegistry,"sn":"OwnerRegistry"}]}; }, $n);
    /*FactoryPipePower.PipeSlotController end.*/

    /*FactoryPipePower.PipeSlotRegistry start.*/
    $m("FactoryPipePower.PipeSlotRegistry", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClearHoverOnAllSlots","t":8,"sn":"ClearHoverOnAllSlots","rt":$n[1].Void},{"a":1,"n":"OnAnyDragFinished","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"OnAnyDragFinished","rt":$n[1].Void,"p":[$n[2].DraggablePipeController]},{"a":1,"n":"OnAnyDragStarted","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"OnAnyDragStarted","rt":$n[1].Void,"p":[$n[2].DraggablePipeController]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"Register","t":8,"pi":[{"n":"slot","pt":$n[2].PipeSlotController,"ps":0}],"sn":"Register","rt":$n[1].Void,"p":[$n[2].PipeSlotController]},{"a":2,"n":"Unregister","t":8,"pi":[{"n":"slot","pt":$n[2].PipeSlotController,"ps":0}],"sn":"Unregister","rt":$n[1].Void,"p":[$n[2].PipeSlotController]},{"a":2,"n":"AcceptFilter","t":16,"rt":$n[2].PipeSlotController,"g":{"a":2,"n":"get_AcceptFilter","t":8,"rt":$n[2].PipeSlotController,"fg":"AcceptFilter"},"s":{"a":2,"n":"set_AcceptFilter","t":8,"p":[$n[2].PipeSlotController],"rt":$n[1].Void,"fs":"AcceptFilter"},"fn":"AcceptFilter"},{"a":2,"n":"ActivePipe","t":16,"rt":$n[2].DraggablePipeController,"g":{"a":2,"n":"get_ActivePipe","t":8,"rt":$n[2].DraggablePipeController,"fg":"ActivePipe"},"fn":"ActivePipe"},{"a":2,"n":"Count","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[1].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"DragFinishesHandled","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_DragFinishesHandled","t":8,"rt":$n[1].Int32,"fg":"DragFinishesHandled","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_DragFinishesHandled","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"DragFinishesHandled"},"fn":"DragFinishesHandled"},{"a":2,"n":"DragStartsHandled","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_DragStartsHandled","t":8,"rt":$n[1].Int32,"fg":"DragStartsHandled","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_DragStartsHandled","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"DragStartsHandled"},"fn":"DragStartsHandled"},{"a":2,"n":"HoverFilter","t":16,"rt":$n[2].PipeSlotController,"g":{"a":2,"n":"get_HoverFilter","t":8,"rt":$n[2].PipeSlotController,"fg":"HoverFilter"},"s":{"a":2,"n":"set_HoverFilter","t":8,"p":[$n[2].PipeSlotController],"rt":$n[1].Void,"fs":"HoverFilter"},"fn":"HoverFilter"},{"a":2,"n":"Slots","t":16,"rt":$n[5].IReadOnlyList$1(FactoryPipePower.PipeSlotController),"g":{"a":2,"n":"get_Slots","t":8,"rt":$n[5].IReadOnlyList$1(FactoryPipePower.PipeSlotController),"fg":"Slots"},"fn":"Slots"},{"a":1,"n":"activePipe","t":4,"rt":$n[2].DraggablePipeController,"sn":"activePipe"},{"a":1,"n":"slots","t":4,"rt":$n[5].List$1(FactoryPipePower.PipeSlotController),"sn":"slots","ro":true},{"a":1,"backing":true,"n":"<AcceptFilter>k__BackingField","t":4,"rt":$n[2].PipeSlotController,"sn":"AcceptFilter"},{"a":1,"backing":true,"n":"<DragFinishesHandled>k__BackingField","t":4,"rt":$n[1].Int32,"sn":"DragFinishesHandled","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<DragStartsHandled>k__BackingField","t":4,"rt":$n[1].Int32,"sn":"DragStartsHandled","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<HoverFilter>k__BackingField","t":4,"rt":$n[2].PipeSlotController,"sn":"HoverFilter"}]}; }, $n);
    /*FactoryPipePower.PipeSlotRegistry end.*/

    /*FactoryPipePower.PipeVisualController start.*/
    $m("FactoryPipePower.PipeVisualController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyFlowToRuntimeMaterial","t":8,"sn":"ApplyFlowToRuntimeMaterial","rt":$n[1].Void},{"a":1,"n":"ApplyMaterials","t":8,"sn":"ApplyMaterials","rt":$n[1].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"CaptureInitialBaseMaterial","t":8,"sn":"CaptureInitialBaseMaterial","rt":$n[1].Void},{"a":2,"n":"ConfigureCornerFlow","t":8,"pi":[{"n":"startWorld","pt":$n[0].Vector3,"ps":0},{"n":"cornerWorld","pt":$n[0].Vector3,"ps":1},{"n":"endWorld","pt":$n[0].Vector3,"ps":2}],"sn":"ConfigureCornerFlow","rt":$n[1].Void,"p":[$n[0].Vector3,$n[0].Vector3,$n[0].Vector3]},{"a":2,"n":"ConfigureFlow","t":8,"pi":[{"n":"startWorld","pt":$n[0].Vector3,"ps":0},{"n":"endWorld","pt":$n[0].Vector3,"ps":1}],"sn":"ConfigureFlow","rt":$n[1].Void,"p":[$n[0].Vector3,$n[0].Vector3]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":2,"n":"ReleaseGreenRuntimeMaterial","t":8,"sn":"ReleaseGreenRuntimeMaterial","rt":$n[1].Void},{"a":2,"n":"ResetVisual","t":8,"sn":"ResetVisual","rt":$n[1].Void},{"a":2,"n":"SetBaseMaterial","t":8,"pi":[{"n":"baseMaterial","pt":$n[0].Material,"ps":0}],"sn":"SetBaseMaterial","rt":$n[1].Void,"p":[$n[0].Material]},{"a":2,"n":"SetFill","t":8,"pi":[{"n":"value","pt":$n[1].Single,"ps":0}],"sn":"SetFill","rt":$n[1].Void,"p":[$n[1].Single]},{"a":2,"n":"SetTutorialOverlay","t":8,"pi":[{"n":"enabled","pt":$n[1].Boolean,"ps":0}],"sn":"SetTutorialOverlay","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"UseGreenRuntimeMaterial","t":8,"sn":"UseGreenRuntimeMaterial","rt":$n[1].Void},{"a":2,"n":"CurrentBaseMaterial","t":16,"rt":$n[0].Material,"g":{"a":2,"n":"get_CurrentBaseMaterial","t":8,"rt":$n[0].Material,"fg":"CurrentBaseMaterial"},"fn":"CurrentBaseMaterial"},{"a":2,"n":"CurrentFill","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_CurrentFill","t":8,"rt":$n[1].Single,"fg":"CurrentFill","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"CurrentFill"},{"a":2,"n":"FlowDirectionWorld","t":16,"rt":$n[0].Vector3,"g":{"a":2,"n":"get_FlowDirectionWorld","t":8,"rt":$n[0].Vector3,"fg":"FlowDirectionWorld"},"fn":"FlowDirectionWorld"},{"a":2,"n":"FlowEndWorld","t":16,"rt":$n[0].Vector3,"g":{"a":2,"n":"get_FlowEndWorld","t":8,"rt":$n[0].Vector3,"fg":"FlowEndWorld"},"fn":"FlowEndWorld"},{"a":2,"n":"FlowLengthWorld","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_FlowLengthWorld","t":8,"rt":$n[1].Single,"fg":"FlowLengthWorld","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"FlowLengthWorld"},{"a":2,"n":"FlowStartWorld","t":16,"rt":$n[0].Vector3,"g":{"a":2,"n":"get_FlowStartWorld","t":8,"rt":$n[0].Vector3,"fg":"FlowStartWorld"},"fn":"FlowStartWorld"},{"a":2,"n":"HasGreenRuntimeMaterial","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_HasGreenRuntimeMaterial","t":8,"rt":$n[1].Boolean,"fg":"HasGreenRuntimeMaterial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasGreenRuntimeMaterial"},{"a":2,"n":"IsFlowConfigured","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsFlowConfigured","t":8,"rt":$n[1].Boolean,"fg":"IsFlowConfigured","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsFlowConfigured"},{"a":2,"n":"IsTutorialOverlayEnabled","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsTutorialOverlayEnabled","t":8,"rt":$n[1].Boolean,"fg":"IsTutorialOverlayEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsTutorialOverlayEnabled"},{"a":1,"n":"DefaultColorId","is":true,"t":4,"rt":$n[1].Int32,"sn":"DefaultColorId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"FillId","is":true,"t":4,"rt":$n[1].Int32,"sn":"FillId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"FlowCornerModeId","is":true,"t":4,"rt":$n[1].Int32,"sn":"FlowCornerModeId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"FlowCornerWsId","is":true,"t":4,"rt":$n[1].Int32,"sn":"FlowCornerWsId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"FlowDirectionWsId","is":true,"t":4,"rt":$n[1].Int32,"sn":"FlowDirectionWsId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"FlowEpsilon","is":true,"t":4,"rt":$n[1].Single,"sn":"FlowEpsilon","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"FlowLengthId","is":true,"t":4,"rt":$n[1].Int32,"sn":"FlowLengthId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"FlowOriginWsId","is":true,"t":4,"rt":$n[1].Int32,"sn":"FlowOriginWsId","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentBaseMaterial","t":4,"rt":$n[0].Material,"sn":"currentBaseMaterial"},{"a":1,"n":"fill","t":4,"rt":$n[1].Single,"sn":"fill","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fillDefaultColor","t":4,"rt":$n[0].Color,"sn":"fillDefaultColor"},{"a":1,"n":"flowConfigured","t":4,"rt":$n[1].Boolean,"sn":"flowConfigured","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"flowCornerMode","t":4,"rt":$n[1].Boolean,"sn":"flowCornerMode","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"flowCornerWorld","t":4,"rt":$n[0].Vector3,"sn":"flowCornerWorld"},{"a":1,"n":"flowDirectionWorld","t":4,"rt":$n[0].Vector3,"sn":"flowDirectionWorld"},{"a":1,"n":"flowEndWorld","t":4,"rt":$n[0].Vector3,"sn":"flowEndWorld"},{"a":1,"n":"flowLength","t":4,"rt":$n[1].Single,"sn":"flowLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"flowStartWorld","t":4,"rt":$n[0].Vector3,"sn":"flowStartWorld"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"greenFillTemplate","t":4,"rt":$n[0].Material,"sn":"greenFillTemplate"},{"a":1,"n":"greenRuntimeMaterial","t":4,"rt":$n[0].Material,"sn":"greenRuntimeMaterial"},{"a":1,"n":"initialBaseMaterial","t":4,"rt":$n[0].Material,"sn":"initialBaseMaterial"},{"a":1,"n":"overlayEnabled","t":4,"rt":$n[1].Boolean,"sn":"overlayEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"overrideFillDefaultColor","t":4,"rt":$n[1].Boolean,"sn":"overrideFillDefaultColor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialOverlayMaterial","t":4,"rt":$n[0].Material,"sn":"tutorialOverlayMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visualRenderer","t":4,"rt":$n[0].MeshRenderer,"sn":"visualRenderer"}]}; }, $n);
    /*FactoryPipePower.PipeVisualController end.*/

    /*FactoryPipePower.EndPowerNode start.*/
    $m("FactoryPipePower.EndPowerNode", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"a":2,"n":"NotifyPreviousPowered","t":8,"pi":[{"n":"previous","pt":$n[2].IPowerNode,"ps":0}],"sn":"NotifyPreviousPowered","rt":$n[1].Void,"p":[$n[2].IPowerNode]},{"a":2,"n":"SetExpectedPrevious","t":8,"pi":[{"n":"previous","pt":$n[2].IPowerNode,"ps":0}],"sn":"SetExpectedPrevious","rt":$n[1].Void,"p":[$n[2].IPowerNode]},{"a":2,"n":"ActivationCount","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_ActivationCount","t":8,"rt":$n[1].Int32,"fg":"ActivationCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"ActivationCount"},{"a":2,"n":"IsPowered","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsPowered","t":8,"rt":$n[1].Boolean,"fg":"IsPowered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsPowered"},{"a":2,"n":"PowerOutput","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get_PowerOutput","t":8,"rt":$n[0].Transform,"fg":"PowerOutput"},"fn":"PowerOutput"},{"a":2,"n":"State","t":16,"rt":$n[2].EndPowerState,"g":{"a":2,"n":"get_State","t":8,"rt":$n[2].EndPowerState,"fg":"State","box":function ($v) { return Bridge.box($v, FactoryPipePower.EndPowerState, System.Enum.toStringFn(FactoryPipePower.EndPowerState));}},"fn":"State"},{"a":1,"n":"activationCount","t":4,"rt":$n[1].Int32,"sn":"activationCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"expectedPrevious","t":4,"rt":$n[2].IPowerNode,"sn":"expectedPrevious"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"expectedPreviousBehaviour","t":4,"rt":$n[0].MonoBehaviour,"sn":"expectedPreviousBehaviour"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"factoryPowerController","t":4,"rt":$n[2].FactoryPowerController,"sn":"factoryPowerController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"inactiveMaterial","t":4,"rt":$n[0].Material,"sn":"inactiveMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"narrativePowerSequence","t":4,"rt":$n[2].NarrativePowerSequence,"sn":"narrativePowerSequence"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"powerInput","t":4,"rt":$n[0].Transform,"sn":"powerInput"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"poweredMaterial","t":4,"rt":$n[0].Material,"sn":"poweredMaterial"},{"a":1,"n":"state","t":4,"rt":$n[2].EndPowerState,"sn":"state","box":function ($v) { return Bridge.box($v, FactoryPipePower.EndPowerState, System.Enum.toStringFn(FactoryPipePower.EndPowerState));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visual","t":4,"rt":$n[2].PipeVisualController,"sn":"visual"},{"a":2,"n":"Powered","t":2,"ad":{"a":2,"n":"add_Powered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addPowered","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Powered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removePowered","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*FactoryPipePower.EndPowerNode end.*/

    /*FactoryPipePower.FactoryChimneySmokeController start.*/
    $m("FactoryPipePower.FactoryChimneySmokeController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleFactoryOffline","t":8,"sn":"HandleFactoryOffline","rt":$n[1].Void},{"a":1,"n":"HandleSequenceCompleted","t":8,"sn":"HandleSequenceCompleted","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"Play","is":true,"t":8,"pi":[{"n":"system","pt":$n[0].ParticleSystem,"ps":0}],"sn":"Play","rt":$n[1].Void,"p":[$n[0].ParticleSystem]},{"a":1,"n":"StartEmission","t":8,"sn":"StartEmission","rt":$n[1].Void},{"a":1,"n":"Stop","is":true,"t":8,"pi":[{"n":"system","pt":$n[0].ParticleSystem,"ps":0},{"n":"clear","pt":$n[1].Boolean,"ps":1}],"sn":"Stop","rt":$n[1].Void,"p":[$n[0].ParticleSystem,$n[1].Boolean]},{"a":1,"n":"StopEmission","t":8,"pi":[{"n":"clear","pt":$n[1].Boolean,"ps":0}],"sn":"StopEmission","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"SyncToSequence","t":8,"sn":"SyncToSequence","rt":$n[1].Void},{"a":1,"n":"TrySubscribe","t":8,"sn":"TrySubscribe","rt":$n[1].Void},{"a":1,"n":"Unsubscribe","t":8,"sn":"Unsubscribe","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"IsEmitting","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsEmitting","t":8,"rt":$n[1].Boolean,"fg":"IsEmitting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmitting"},{"a":1,"n":"emissionRunning","t":4,"rt":$n[1].Boolean,"sn":"emissionRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"factory","t":4,"rt":$n[2].FactoryPowerController,"sn":"factory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"indicatorSequence","t":4,"rt":$n[2].SmokePipeIndicatorSequence,"sn":"indicatorSequence"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pipe1Smoke","t":4,"rt":$n[0].ParticleSystem,"sn":"pipe1Smoke"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pipe2Smoke","t":4,"rt":$n[0].ParticleSystem,"sn":"pipe2Smoke"},{"a":1,"n":"subscribedFactory","t":4,"rt":$n[1].Boolean,"sn":"subscribedFactory","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"subscribedSequence","t":4,"rt":$n[1].Boolean,"sn":"subscribedSequence","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*FactoryPipePower.FactoryChimneySmokeController end.*/

    /*FactoryPipePower.FactoryPowerController start.*/
    $m("FactoryPipePower.FactoryPowerController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Apply","t":8,"pi":[{"n":"online","pt":$n[1].Boolean,"ps":0}],"sn":"Apply","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"ApplyStateVisual","t":8,"pi":[{"n":"online","pt":$n[1].Boolean,"ps":0}],"sn":"ApplyStateVisual","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"a":2,"n":"SetOffline","t":8,"sn":"SetOffline","rt":$n[1].Void},{"a":2,"n":"SetOnline","t":8,"sn":"SetOnline","rt":$n[1].Void},{"a":2,"n":"IsOnline","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsOnline","t":8,"rt":$n[1].Boolean,"fg":"IsOnline","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsOnline"},{"a":2,"n":"State","t":16,"rt":$n[2].FactoryPowerState,"g":{"a":2,"n":"get_State","t":8,"rt":$n[2].FactoryPowerState,"fg":"State","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryPowerState, System.Enum.toStringFn(FactoryPipePower.FactoryPowerState));}},"fn":"State"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animators","t":4,"rt":System.Array.type(UnityEngine.Animator),"sn":"animators"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"offlineStateMaterial","t":4,"rt":$n[0].Material,"sn":"offlineStateMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"onlineIndicators","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"onlineIndicators"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"onlineRenderers","t":4,"rt":System.Array.type(UnityEngine.Renderer),"sn":"onlineRenderers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"onlineStateMaterial","t":4,"rt":$n[0].Material,"sn":"onlineStateMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"particleSystems","t":4,"rt":System.Array.type(UnityEngine.ParticleSystem),"sn":"particleSystems"},{"a":1,"n":"state","t":4,"rt":$n[2].FactoryPowerState,"sn":"state","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryPowerState, System.Enum.toStringFn(FactoryPipePower.FactoryPowerState));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stateVisualRenderer","t":4,"rt":$n[0].Renderer,"sn":"stateVisualRenderer"},{"a":2,"n":"FactoryOffline","t":2,"ad":{"a":2,"n":"add_FactoryOffline","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addFactoryOffline","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_FactoryOffline","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeFactoryOffline","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"FactoryOnline","t":2,"ad":{"a":2,"n":"add_FactoryOnline","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addFactoryOnline","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_FactoryOnline","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeFactoryOnline","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*FactoryPipePower.FactoryPowerController end.*/

    /*FactoryPipePower.IPowerNode start.*/
    $m("FactoryPipePower.IPowerNode", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"NotifyPreviousPowered","t":8,"pi":[{"n":"previous","pt":$n[2].IPowerNode,"ps":0}],"sn":"FactoryPipePower$IPowerNode$NotifyPreviousPowered","rt":$n[1].Void,"p":[$n[2].IPowerNode]},{"ab":true,"a":2,"n":"IsPowered","t":16,"rt":$n[1].Boolean,"g":{"ab":true,"a":2,"n":"get_IsPowered","t":8,"rt":$n[1].Boolean,"fg":"FactoryPipePower$IPowerNode$IsPowered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"FactoryPipePower$IPowerNode$IsPowered"},{"ab":true,"a":2,"n":"PowerOutput","t":16,"rt":$n[0].Transform,"g":{"ab":true,"a":2,"n":"get_PowerOutput","t":8,"rt":$n[0].Transform,"fg":"FactoryPipePower$IPowerNode$PowerOutput"},"fn":"FactoryPipePower$IPowerNode$PowerOutput"},{"a":1,"backing":true,"n":"<IsPowered>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"FactoryPipePower$IPowerNode$IsPowered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<PowerOutput>k__BackingField","t":4,"rt":$n[0].Transform,"sn":"FactoryPipePower$IPowerNode$PowerOutput"}]}; }, $n);
    /*FactoryPipePower.IPowerNode end.*/

    /*FactoryPipePower.NarrativePipeSegment start.*/
    $m("FactoryPipePower.NarrativePipeSegment", function () { return {"att":1048833,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ConfigureFlow","t":8,"sn":"ConfigureFlow","rt":$n[1].Void},{"a":2,"n":"FillRoutine","t":8,"sn":"FillRoutine","rt":$n[4].IEnumerator},{"a":2,"n":"PlayCompletionSparks","t":8,"sn":"PlayCompletionSparks","rt":$n[1].Void},{"a":2,"n":"ResetSegment","t":8,"sn":"ResetSegment","rt":$n[1].Void},{"a":2,"n":"FillDuration","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_FillDuration","t":8,"rt":$n[1].Single,"fg":"FillDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"FillDuration"},{"a":2,"n":"Visual","t":16,"rt":$n[2].PipeVisualController,"g":{"a":2,"n":"get_Visual","t":8,"rt":$n[2].PipeVisualController,"fg":"Visual"},"fn":"Visual"},{"at":[new UnityEngine.HeaderAttribute("Sparks"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completionSparks","t":4,"rt":$n[0].ParticleSystem,"sn":"completionSparks"},{"at":[new UnityEngine.HeaderAttribute("Timing"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fillDuration","t":4,"rt":$n[1].Single,"sn":"fillDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flowElbow","t":4,"rt":$n[0].Transform,"sn":"flowElbow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flowEnd","t":4,"rt":$n[0].Transform,"sn":"flowEnd"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flowStart","t":4,"rt":$n[0].Transform,"sn":"flowStart"},{"at":[new UnityEngine.HeaderAttribute("Visual"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visual","t":4,"rt":$n[2].PipeVisualController,"sn":"visual"}]}; }, $n);
    /*FactoryPipePower.NarrativePipeSegment end.*/

    /*FactoryPipePower.NarrativePowerSequence start.*/
    $m("FactoryPipePower.NarrativePowerSequence", function () { return {"att":1048833,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BeginLeftChain","t":8,"sn":"BeginLeftChain","rt":$n[1].Void},{"a":2,"n":"BeginRightChain","t":8,"sn":"BeginRightChain","rt":$n[1].Void},{"a":2,"n":"OnEndPowered","t":8,"sn":"OnEndPowered","rt":$n[1].Void},{"a":2,"n":"ResetNarrative","t":8,"sn":"ResetNarrative","rt":$n[1].Void},{"a":1,"n":"ResetSegments","is":true,"t":8,"pi":[{"n":"segments","pt":System.Array.type(FactoryPipePower.NarrativePipeSegment),"ps":0}],"sn":"ResetSegments","rt":$n[1].Void,"p":[System.Array.type(FactoryPipePower.NarrativePipeSegment)]},{"a":1,"n":"RunLeftChain","t":8,"sn":"RunLeftChain","rt":$n[4].IEnumerator},{"a":1,"n":"RunRightChain","t":8,"sn":"RunRightChain","rt":$n[4].IEnumerator},{"a":1,"n":"StopRoutine","t":8,"pi":[{"n":"routine","ref":true,"pt":$n[0].Coroutine,"ps":0}],"sn":"StopRoutine","rt":$n[1].Void,"p":[$n[0].Coroutine]},{"a":2,"n":"EndNode","t":16,"rt":$n[2].EndPowerNode,"g":{"a":2,"n":"get_EndNode","t":8,"rt":$n[2].EndPowerNode,"fg":"EndNode"},"fn":"EndNode"},{"a":2,"n":"InitialDelay","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_InitialDelay","t":8,"rt":$n[1].Single,"fg":"InitialDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"InitialDelay"},{"a":2,"n":"LeftRunning","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_LeftRunning","t":8,"rt":$n[1].Boolean,"fg":"LeftRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"LeftRunning"},{"a":2,"n":"LeftSegments","t":16,"rt":System.Array.type(FactoryPipePower.NarrativePipeSegment),"g":{"a":2,"n":"get_LeftSegments","t":8,"rt":System.Array.type(FactoryPipePower.NarrativePipeSegment),"fg":"LeftSegments"},"fn":"LeftSegments"},{"a":2,"n":"RightRunning","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_RightRunning","t":8,"rt":$n[1].Boolean,"fg":"RightRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"RightRunning"},{"a":2,"n":"RightSegments","t":16,"rt":System.Array.type(FactoryPipePower.NarrativePipeSegment),"g":{"a":2,"n":"get_RightSegments","t":8,"rt":System.Array.type(FactoryPipePower.NarrativePipeSegment),"fg":"RightSegments"},"fn":"RightSegments"},{"a":2,"n":"RightStarted","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_RightStarted","t":8,"rt":$n[1].Boolean,"fg":"RightStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"RightStarted"},{"a":2,"n":"StartNode","t":16,"rt":$n[2].StartPowerNode,"g":{"a":2,"n":"get_StartNode","t":8,"rt":$n[2].StartPowerNode,"fg":"StartNode"},"fn":"StartNode"},{"a":2,"n":"TutorialControlled","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_TutorialControlled","t":8,"rt":$n[1].Boolean,"fg":"TutorialControlled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"TutorialControlled"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endNode","t":4,"rt":$n[2].EndPowerNode,"sn":"endNode"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"factoryPowerController","t":4,"rt":$n[2].FactoryPowerController,"sn":"factoryPowerController"},{"at":[new UnityEngine.HeaderAttribute("Timing"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"initialDelay","t":4,"rt":$n[1].Single,"sn":"initialDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"leftRoutine","t":4,"rt":$n[0].Coroutine,"sn":"leftRoutine"},{"at":[new UnityEngine.HeaderAttribute("Left Chain (StartPowerNode)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftSegments","t":4,"rt":System.Array.type(FactoryPipePower.NarrativePipeSegment),"sn":"leftSegments"},{"a":1,"n":"rightRoutine","t":4,"rt":$n[0].Coroutine,"sn":"rightRoutine"},{"at":[new UnityEngine.HeaderAttribute("Right Chain (EndPowerNode)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightSegments","t":4,"rt":System.Array.type(FactoryPipePower.NarrativePipeSegment),"sn":"rightSegments"},{"a":1,"n":"rightStarted","t":4,"rt":$n[1].Boolean,"sn":"rightStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Chain Nodes"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startNode","t":4,"rt":$n[2].StartPowerNode,"sn":"startNode"},{"at":[new UnityEngine.HeaderAttribute("Tutorial"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialControlled","t":4,"rt":$n[1].Boolean,"sn":"tutorialControlled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*FactoryPipePower.NarrativePowerSequence end.*/

    /*FactoryPipePower.PowerChainController start.*/
    $m("FactoryPipePower.PowerChainController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FirstNodeAfterStart","t":8,"sn":"FirstNodeAfterStart","rt":$n[2].IPowerNode},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"a":1,"n":"LastNodeBeforeEnd","t":8,"sn":"LastNodeBeforeEnd","rt":$n[2].IPowerNode},{"a":1,"n":"LinkChain","t":8,"sn":"LinkChain","rt":$n[1].Void},{"a":2,"n":"EndNode","t":16,"rt":$n[2].EndPowerNode,"g":{"a":2,"n":"get_EndNode","t":8,"rt":$n[2].EndPowerNode,"fg":"EndNode"},"fn":"EndNode"},{"a":2,"n":"IsInitialized","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsInitialized","t":8,"rt":$n[1].Boolean,"fg":"IsInitialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsInitialized"},{"a":2,"n":"Slots","t":16,"rt":System.Array.type(FactoryPipePower.PipeSlotController),"g":{"a":2,"n":"get_Slots","t":8,"rt":System.Array.type(FactoryPipePower.PipeSlotController),"fg":"Slots"},"fn":"Slots"},{"a":2,"n":"StartNode","t":16,"rt":$n[2].StartPowerNode,"g":{"a":2,"n":"get_StartNode","t":8,"rt":$n[2].StartPowerNode,"fg":"StartNode"},"fn":"StartNode"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endNode","t":4,"rt":$n[2].EndPowerNode,"sn":"endNode"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"factoryPowerController","t":4,"rt":$n[2].FactoryPowerController,"sn":"factoryPowerController"},{"a":1,"n":"initialized","t":4,"rt":$n[1].Boolean,"sn":"initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"narrativeSequence","t":4,"rt":$n[2].NarrativePowerSequence,"sn":"narrativeSequence"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slots","t":4,"rt":System.Array.type(FactoryPipePower.PipeSlotController),"sn":"slots"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startNode","t":4,"rt":$n[2].StartPowerNode,"sn":"startNode"}]}; }, $n);
    /*FactoryPipePower.PowerChainController end.*/

    /*FactoryPipePower.SmokePipeIndicatorSequence start.*/
    $m("FactoryPipePower.SmokePipeIndicatorSequence", function () { return {"nested":[$n[2].SmokePipeIndicatorSequence.Phase],"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyAll","t":8,"pi":[{"n":"online","pt":$n[1].Boolean,"ps":0}],"sn":"ApplyAll","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"ApplyStep","t":8,"pi":[{"n":"step","pt":$n[1].Int32,"ps":0},{"n":"online","pt":$n[1].Boolean,"ps":1}],"sn":"ApplyStep","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Boolean]},{"a":1,"n":"HandleFactoryOffline","t":8,"sn":"HandleFactoryOffline","rt":$n[1].Void},{"a":1,"n":"HandleFactoryOnline","t":8,"sn":"HandleFactoryOnline","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"RunSequence","t":8,"sn":"RunSequence","rt":$n[4].IEnumerator},{"a":1,"n":"SetSlot","t":8,"pi":[{"n":"renderer","pt":$n[0].Renderer,"ps":0},{"n":"online","pt":$n[1].Boolean,"ps":1}],"sn":"SetSlot","rt":$n[1].Void,"p":[$n[0].Renderer,$n[1].Boolean]},{"a":1,"n":"SetSlot","t":8,"pi":[{"n":"renderers","pt":System.Array.type(UnityEngine.Renderer),"ps":0},{"n":"step","pt":$n[1].Int32,"ps":1},{"n":"online","pt":$n[1].Boolean,"ps":2}],"sn":"SetSlot$1","rt":$n[1].Void,"p":[System.Array.type(UnityEngine.Renderer),$n[1].Int32,$n[1].Boolean]},{"a":1,"n":"StartSequence","t":8,"sn":"StartSequence","rt":$n[1].Void},{"a":1,"n":"StopSequence","t":8,"sn":"StopSequence","rt":$n[1].Void},{"a":1,"n":"Subscribe","t":8,"sn":"Subscribe","rt":$n[1].Void},{"a":1,"n":"SyncToFactory","t":8,"sn":"SyncToFactory","rt":$n[1].Void},{"a":1,"n":"TrySubscribeAndSync","t":8,"sn":"TrySubscribeAndSync","rt":$n[1].Void},{"a":1,"n":"Unsubscribe","t":8,"sn":"Unsubscribe","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"WaitUntilElapsed","is":true,"t":8,"pi":[{"n":"startedAt","pt":$n[1].Single,"ps":0},{"n":"elapsed","pt":$n[1].Single,"ps":1}],"sn":"WaitUntilElapsed","rt":$n[4].IEnumerator,"p":[$n[1].Single,$n[1].Single]},{"a":2,"n":"IsCompleted","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsCompleted","t":8,"rt":$n[1].Boolean,"fg":"IsCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsCompleted"},{"a":2,"n":"IsRunning","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsRunning","t":8,"rt":$n[1].Boolean,"fg":"IsRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsRunning"},{"a":1,"n":"FirstStepTime","is":true,"t":4,"rt":$n[1].Single,"sn":"FirstStepTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"SecondStepTime","is":true,"t":4,"rt":$n[1].Single,"sn":"SecondStepTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ThirdStepTime","is":true,"t":4,"rt":$n[1].Single,"sn":"ThirdStepTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"factory","t":4,"rt":$n[2].FactoryPowerController,"sn":"factory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"offlineMaterial","t":4,"rt":$n[0].Material,"sn":"offlineMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"onlineMaterial","t":4,"rt":$n[0].Material,"sn":"onlineMaterial"},{"a":1,"n":"phase","t":4,"rt":$n[2].SmokePipeIndicatorSequence.Phase,"sn":"phase","box":function ($v) { return Bridge.box($v, FactoryPipePower.SmokePipeIndicatorSequence.Phase, System.Enum.toStringFn(FactoryPipePower.SmokePipeIndicatorSequence.Phase));}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.TooltipAttribute("Slot order: bottom, middle, top.")],"a":1,"n":"pipe1Inserts","t":4,"rt":System.Array.type(UnityEngine.Renderer),"sn":"pipe1Inserts"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.TooltipAttribute("Slot order: bottom, middle, top.")],"a":1,"n":"pipe2Inserts","t":4,"rt":System.Array.type(UnityEngine.Renderer),"sn":"pipe2Inserts"},{"a":1,"n":"runningRoutine","t":4,"rt":$n[0].Coroutine,"sn":"runningRoutine"},{"a":1,"n":"subscribed","t":4,"rt":$n[1].Boolean,"sn":"subscribed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SequenceCompleted","t":2,"ad":{"a":2,"n":"add_SequenceCompleted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addSequenceCompleted","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_SequenceCompleted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeSequenceCompleted","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*FactoryPipePower.SmokePipeIndicatorSequence end.*/

    /*FactoryPipePower.SmokePipeIndicatorSequence+Phase start.*/
    $m("FactoryPipePower.SmokePipeIndicatorSequence.Phase", function () { return {"td":$n[2].SmokePipeIndicatorSequence,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Completed","is":true,"t":4,"rt":$n[2].SmokePipeIndicatorSequence.Phase,"sn":"Completed","box":function ($v) { return Bridge.box($v, FactoryPipePower.SmokePipeIndicatorSequence.Phase, System.Enum.toStringFn(FactoryPipePower.SmokePipeIndicatorSequence.Phase));}},{"a":2,"n":"Idle","is":true,"t":4,"rt":$n[2].SmokePipeIndicatorSequence.Phase,"sn":"Idle","box":function ($v) { return Bridge.box($v, FactoryPipePower.SmokePipeIndicatorSequence.Phase, System.Enum.toStringFn(FactoryPipePower.SmokePipeIndicatorSequence.Phase));}},{"a":2,"n":"Running","is":true,"t":4,"rt":$n[2].SmokePipeIndicatorSequence.Phase,"sn":"Running","box":function ($v) { return Bridge.box($v, FactoryPipePower.SmokePipeIndicatorSequence.Phase, System.Enum.toStringFn(FactoryPipePower.SmokePipeIndicatorSequence.Phase));}}]}; }, $n);
    /*FactoryPipePower.SmokePipeIndicatorSequence+Phase end.*/

    /*FactoryPipePower.StartPowerNode start.*/
    $m("FactoryPipePower.StartPowerNode", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"a":2,"n":"NotifyPreviousPowered","t":8,"pi":[{"n":"previous","pt":$n[2].IPowerNode,"ps":0}],"sn":"NotifyPreviousPowered","rt":$n[1].Void,"p":[$n[2].IPowerNode]},{"a":2,"n":"ProvidePower","t":8,"sn":"ProvidePower","rt":$n[1].Void},{"a":2,"n":"SetNextNode","t":8,"pi":[{"n":"next","pt":$n[2].IPowerNode,"ps":0}],"sn":"SetNextNode","rt":$n[1].Void,"p":[$n[2].IPowerNode]},{"a":2,"n":"DeferPowerActivation","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_DeferPowerActivation","t":8,"rt":$n[1].Boolean,"fg":"DeferPowerActivation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"DeferPowerActivation"},{"a":2,"n":"IsPowered","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsPowered","t":8,"rt":$n[1].Boolean,"fg":"IsPowered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsPowered"},{"a":2,"n":"NextNode","t":16,"rt":$n[2].IPowerNode,"g":{"a":2,"n":"get_NextNode","t":8,"rt":$n[2].IPowerNode,"fg":"NextNode"},"fn":"NextNode"},{"a":2,"n":"PowerOutput","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get_PowerOutput","t":8,"rt":$n[0].Transform,"fg":"PowerOutput"},"fn":"PowerOutput"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deferPowerActivation","t":4,"rt":$n[1].Boolean,"sn":"deferPowerActivation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPowered","t":4,"rt":$n[1].Boolean,"sn":"isPowered","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"nextNode","t":4,"rt":$n[2].IPowerNode,"sn":"nextNode"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"nextNodeBehaviour","t":4,"rt":$n[0].MonoBehaviour,"sn":"nextNodeBehaviour"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"powerOutput","t":4,"rt":$n[0].Transform,"sn":"powerOutput"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visual","t":4,"rt":$n[2].PipeVisualController,"sn":"visual"},{"a":2,"n":"Powered","t":2,"ad":{"a":2,"n":"add_Powered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addPowered","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Powered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removePowered","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*FactoryPipePower.StartPowerNode end.*/

    /*FactoryPipePower.FactoryTutorialPhase start.*/
    $m("FactoryPipePower.FactoryTutorialPhase", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BlendingToFinalOverview","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"BlendingToFinalOverview","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"BlendingToGameplay","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"BlendingToGameplay","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"Completed","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"Completed","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"FirstPipeSuccess","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"FirstPipeSuccess","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"GameplayUnlocked","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"GameplayUnlocked","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"IntroOverview","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"IntroOverview","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"None","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"PromptPickFirstPipe","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"PromptPickFirstPipe","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"PromptPlaceFirstPipe","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"PromptPlaceFirstPipe","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"PromptRotateFirstPipe","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"PromptRotateFirstPipe","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"WaitingFirstPipePower","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"WaitingFirstPipePower","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"WaitingForFactoryStartup","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"WaitingForFactoryStartup","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"WaitingForIncomingPower","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"WaitingForIncomingPower","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"a":2,"n":"WaitingForOutgoingPower","is":true,"t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"WaitingForOutgoingPower","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}}]}; }, $n);
    /*FactoryPipePower.FactoryTutorialPhase end.*/

    /*FactoryPipePower.FactoryTutorialController start.*/
    $m("FactoryPipePower.FactoryTutorialController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyBlendSettings","t":8,"sn":"ApplyBlendSettings","rt":$n[1].Void},{"a":1,"n":"ApplyCameraPhase","t":8,"pi":[{"n":"target","pt":$n[2].FactoryTutorialPhase,"ps":0}],"sn":"ApplyCameraPhase","rt":$n[1].Void,"p":[$n[2].FactoryTutorialPhase]},{"a":1,"n":"ApplyGate","t":8,"pi":[{"n":"target","pt":$n[2].FactoryTutorialPhase,"ps":0}],"sn":"ApplyGate","rt":$n[1].Void,"p":[$n[2].FactoryTutorialPhase]},{"a":1,"n":"ApplyHand","t":8,"pi":[{"n":"target","pt":$n[2].FactoryTutorialPhase,"ps":0}],"sn":"ApplyHand","rt":$n[1].Void,"p":[$n[2].FactoryTutorialPhase]},{"a":1,"n":"ApplyHighlights","t":8,"pi":[{"n":"target","pt":$n[2].FactoryTutorialPhase,"ps":0}],"sn":"ApplyHighlights","rt":$n[1].Void,"p":[$n[2].FactoryTutorialPhase]},{"a":1,"n":"ApplyMessageLayout","t":8,"sn":"ApplyMessageLayout","rt":$n[1].Void},{"a":1,"n":"ApplySlotHighlightFilter","t":8,"pi":[{"n":"target","pt":$n[2].FactoryTutorialPhase,"ps":0}],"sn":"ApplySlotHighlightFilter","rt":$n[1].Void,"p":[$n[2].FactoryTutorialPhase]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"CanvasPxToUnits","t":8,"pi":[{"n":"pixels","pt":$n[1].Single,"ps":0}],"sn":"CanvasPxToUnits","rt":$n[1].Single,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"CleanupRuntimeState","t":8,"sn":"CleanupRuntimeState","rt":$n[1].Void},{"a":1,"n":"ClearMessage","t":8,"sn":"ClearMessage","rt":$n[1].Void},{"a":1,"n":"ClearOverlays","t":8,"sn":"ClearOverlays","rt":$n[1].Void},{"a":1,"n":"FitBackdropToText","t":8,"sn":"FitBackdropToText","rt":$n[1].Void},{"a":1,"n":"HandleEndNodePowered","t":8,"pi":[{"n":"node","pt":$n[2].EndPowerNode,"ps":0}],"sn":"HandleEndNodePowered","rt":$n[1].Void,"p":[$n[2].EndPowerNode]},{"a":1,"n":"HandleFactoryOnline","t":8,"sn":"HandleFactoryOnline","rt":$n[1].Void},{"a":1,"n":"HandleIndicatorSequenceCompleted","t":8,"sn":"HandleIndicatorSequenceCompleted","rt":$n[1].Void},{"a":1,"n":"HandleStartNodePowered","t":8,"pi":[{"n":"node","pt":$n[2].StartPowerNode,"ps":0}],"sn":"HandleStartNodePowered","rt":$n[1].Void,"p":[$n[2].StartPowerNode]},{"a":1,"n":"HandleTutorialPipeDragStarted","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"HandleTutorialPipeDragStarted","rt":$n[1].Void,"p":[$n[2].DraggablePipeController]},{"a":1,"n":"HandleTutorialPipeReturnedToStock","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"HandleTutorialPipeReturnedToStock","rt":$n[1].Void,"p":[$n[2].DraggablePipeController]},{"a":1,"n":"HandleTutorialSlotStateChanged","t":8,"pi":[{"n":"slot","pt":$n[2].PipeSlotController,"ps":0},{"n":"newState","pt":$n[2].PipeSlotState,"ps":1}],"sn":"HandleTutorialSlotStateChanged","rt":$n[1].Void,"p":[$n[2].PipeSlotController,$n[2].PipeSlotState]},{"a":1,"n":"HideHand","t":8,"sn":"HideHand","rt":$n[1].Void},{"a":2,"n":"HideMessage","t":8,"sn":"HideMessage","rt":$n[1].Void},{"a":2,"n":"InitializeTutorial","t":8,"sn":"InitializeTutorial","rt":$n[1].Void},{"a":2,"n":"IsPipeAllowed","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"IsPipeAllowed","rt":$n[1].Boolean,"p":[$n[2].DraggablePipeController],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsSlotTapAllowed","t":8,"pi":[{"n":"slot","pt":$n[2].PipeSlotController,"ps":0}],"sn":"IsSlotTapAllowed","rt":$n[1].Boolean,"p":[$n[2].PipeSlotController],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"MessageHandOffset","t":8,"sn":"MessageHandOffset","rt":$n[0].Vector2},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"RunBlendAndWait","t":8,"pi":[{"n":"target","pt":$n[6].CinemachineVirtualCamera,"ps":0}],"sn":"RunBlendAndWait","rt":$n[4].IEnumerator,"p":[$n[6].CinemachineVirtualCamera]},{"a":1,"n":"RunBlendToGameplay","t":8,"sn":"RunBlendToGameplay","rt":$n[4].IEnumerator},{"a":1,"n":"RunBlendToOverviewRoutine","t":8,"pi":[{"n":"onBlendFinished","pt":Function,"ps":0}],"sn":"RunBlendToOverviewRoutine","rt":$n[4].IEnumerator,"p":[Function]},{"a":1,"n":"RunWaitForSmokeThenComplete","t":8,"sn":"RunWaitForSmokeThenComplete","rt":$n[4].IEnumerator},{"a":1,"n":"SetBackdropVisible","t":8,"pi":[{"n":"visible","pt":$n[1].Boolean,"ps":0}],"sn":"SetBackdropVisible","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"SetCameraPriorities","t":8,"pi":[{"n":"overviewIsLeading","pt":$n[1].Boolean,"ps":0},{"n":"firstChargingIsLeading","pt":$n[1].Boolean,"ps":1},{"n":"firstPipeIsLeading","pt":$n[1].Boolean,"ps":2}],"sn":"SetCameraPriorities","rt":$n[1].Void,"p":[$n[1].Boolean,$n[1].Boolean,$n[1].Boolean]},{"a":2,"n":"SetPhase","t":8,"pi":[{"n":"next","pt":$n[2].FactoryTutorialPhase,"ps":0}],"sn":"SetPhase","rt":$n[1].Void,"p":[$n[2].FactoryTutorialPhase]},{"a":1,"n":"ShowText","t":8,"pi":[{"n":"content","pt":$n[1].String,"ps":0}],"sn":"ShowText","rt":$n[1].Void,"p":[$n[1].String]},{"a":1,"n":"StopAllRuntimeRoutines","t":8,"sn":"StopAllRuntimeRoutines","rt":$n[1].Void},{"a":1,"n":"StopBlendRoutine","t":8,"sn":"StopBlendRoutine","rt":$n[1].Void},{"a":1,"n":"StopSmokeWaitRoutine","t":8,"sn":"StopSmokeWaitRoutine","rt":$n[1].Void},{"a":1,"n":"Subscribe","t":8,"sn":"Subscribe","rt":$n[1].Void},{"a":1,"n":"SubscribeInteractive","t":8,"sn":"SubscribeInteractive","rt":$n[1].Void},{"a":1,"n":"TryBeginLeftChain","t":8,"sn":"TryBeginLeftChain","rt":$n[1].Void},{"a":1,"n":"TryBeginRightChain","t":8,"sn":"TryBeginRightChain","rt":$n[1].Void},{"a":2,"n":"TryConsumeAdvancePress","t":8,"pi":[{"n":"screenPosition","pt":$n[0].Vector2,"ps":0}],"sn":"TryConsumeAdvancePress","rt":$n[1].Boolean,"p":[$n[0].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetBottomScreenPoint","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Transform,"ps":0},{"n":"cam","pt":$n[0].Camera,"ps":1},{"n":"screenPoint","out":true,"pt":$n[0].Vector2,"ps":2}],"sn":"TryGetBottomScreenPoint","rt":$n[1].Boolean,"p":[$n[0].Transform,$n[0].Camera,$n[0].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Unsubscribe","t":8,"sn":"Unsubscribe","rt":$n[1].Void},{"a":1,"n":"UnsubscribeInteractive","t":8,"sn":"UnsubscribeInteractive","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateHandPosition","t":8,"sn":"UpdateHandPosition","rt":$n[1].Void},{"a":1,"n":"UpdateHandPulse","t":8,"sn":"UpdateHandPulse","rt":$n[1].Void},{"a":2,"n":"IsGateActive","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsGateActive","t":8,"rt":$n[1].Boolean,"fg":"IsGateActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsGateActive"},{"a":2,"n":"IsInitialized","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsInitialized","t":8,"rt":$n[1].Boolean,"fg":"IsInitialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsInitialized"},{"a":2,"n":"Phase","t":16,"rt":$n[2].FactoryTutorialPhase,"g":{"a":2,"n":"get_Phase","t":8,"rt":$n[2].FactoryTutorialPhase,"fg":"Phase","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},"fn":"Phase"},{"a":1,"n":"FinalText","is":true,"t":4,"rt":$n[1].String,"sn":"FinalText"},{"a":1,"n":"IntroText","is":true,"t":4,"rt":$n[1].String,"sn":"IntroText"},{"a":1,"n":"PickText","is":true,"t":4,"rt":$n[1].String,"sn":"PickText"},{"a":1,"n":"PlaceText","is":true,"t":4,"rt":$n[1].String,"sn":"PlaceText"},{"a":1,"n":"RotateText","is":true,"t":4,"rt":$n[1].String,"sn":"RotateText"},{"a":1,"n":"SuccessText","is":true,"t":4,"rt":$n[1].String,"sn":"SuccessText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backdropPadding","t":4,"rt":$n[1].Single,"sn":"backdropPadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"blendDuration","t":4,"rt":$n[1].Single,"sn":"blendDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"blendRoutine","t":4,"rt":$n[0].Coroutine,"sn":"blendRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"blendTimeout","t":4,"rt":$n[1].Single,"sn":"blendTimeout","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Cinemachine"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cameraBrain","t":4,"rt":$n[6].CinemachineBrain,"sn":"cameraBrain"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"chimneySmoke","t":4,"rt":$n[2].FactoryChimneySmokeController,"sn":"chimneySmoke"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endNode","t":4,"rt":$n[2].EndPowerNode,"sn":"endNode"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"factoryPowerController","t":4,"rt":$n[2].FactoryPowerController,"sn":"factoryPowerController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"firstChargingCamera","t":4,"rt":$n[6].CinemachineVirtualCamera,"sn":"firstChargingCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"firstPipeCamera","t":4,"rt":$n[6].CinemachineVirtualCamera,"sn":"firstPipeCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameplayCamera","t":4,"rt":$n[6].CinemachineVirtualCamera,"sn":"gameplayCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameplayPriority","t":4,"rt":$n[1].Int32,"sn":"gameplayPriority","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handAnchorOffset","t":4,"rt":$n[0].Vector2,"sn":"handAnchorOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handImage","t":4,"rt":$n[3].Image,"sn":"handImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handMessageGroup","t":4,"rt":$n[0].RectTransform,"sn":"handMessageGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handPulseMax","t":4,"rt":$n[1].Single,"sn":"handPulseMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Hand Pulse"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handPulseMin","t":4,"rt":$n[1].Single,"sn":"handPulseMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handPulsePeriod","t":4,"rt":$n[1].Single,"sn":"handPulsePeriod","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"handTarget","t":4,"rt":$n[0].Transform,"sn":"handTarget"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"indicatorSequence","t":4,"rt":$n[2].SmokePipeIndicatorSequence,"sn":"indicatorSequence"},{"a":1,"n":"initialized","t":4,"rt":$n[1].Boolean,"sn":"initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"interactiveSubscribed","t":4,"rt":$n[1].Boolean,"sn":"interactiveSubscribed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"messageBackdrop","t":4,"rt":$n[3].Image,"sn":"messageBackdrop"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"messageText","t":4,"rt":$n[3].Text,"sn":"messageText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"narrativeSequence","t":4,"rt":$n[2].NarrativePowerSequence,"sn":"narrativeSequence"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"overviewCamera","t":4,"rt":$n[6].CinemachineVirtualCamera,"sn":"overviewCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"overviewPriority","t":4,"rt":$n[1].Int32,"sn":"overviewPriority","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"phase","t":4,"rt":$n[2].FactoryTutorialPhase,"sn":"phase","box":function ($v) { return Bridge.box($v, FactoryPipePower.FactoryTutorialPhase, System.Enum.toStringFn(FactoryPipePower.FactoryTutorialPhase));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pickHandLiftPx","t":4,"rt":$n[1].Single,"sn":"pickHandLiftPx","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Systems"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pointerInput","t":4,"rt":$n[2].PointerInputController,"sn":"pointerInput"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slotRegistry","t":4,"rt":$n[2].PipeSlotRegistry,"sn":"slotRegistry"},{"a":1,"n":"smokeWaitRoutine","t":4,"rt":$n[0].Coroutine,"sn":"smokeWaitRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startNode","t":4,"rt":$n[2].StartPowerNode,"sn":"startNode"},{"a":1,"n":"subscribed","t":4,"rt":$n[1].Boolean,"sn":"subscribed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"textCenterScreenOffset","t":4,"rt":$n[1].Single,"sn":"textCenterScreenOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"textUnderHandOffset","t":4,"rt":$n[1].Single,"sn":"textUnderHandOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("UI"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialCanvas","t":4,"rt":$n[0].Canvas,"sn":"tutorialCanvas"},{"at":[new UnityEngine.HeaderAttribute("Tutorial Targets"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialPipe","t":4,"rt":$n[2].DraggablePipeController,"sn":"tutorialPipe"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialSlot","t":4,"rt":$n[2].PipeSlotController,"sn":"tutorialSlot"},{"a":2,"n":"PhaseChanged","t":2,"ad":{"a":2,"n":"add_PhaseChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addPhaseChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_PhaseChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removePhaseChanged","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*FactoryPipePower.FactoryTutorialController end.*/

    /*FactoryPipePower.ITutorialInputGate start.*/
    $m("FactoryPipePower.ITutorialInputGate", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"IsPipeAllowed","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"FactoryPipePower$ITutorialInputGate$IsPipeAllowed","rt":$n[1].Boolean,"p":[$n[2].DraggablePipeController],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":2,"n":"IsSlotTapAllowed","t":8,"pi":[{"n":"slot","pt":$n[2].PipeSlotController,"ps":0}],"sn":"FactoryPipePower$ITutorialInputGate$IsSlotTapAllowed","rt":$n[1].Boolean,"p":[$n[2].PipeSlotController],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":2,"n":"TryConsumeAdvancePress","t":8,"pi":[{"n":"screenPosition","pt":$n[0].Vector2,"ps":0}],"sn":"FactoryPipePower$ITutorialInputGate$TryConsumeAdvancePress","rt":$n[1].Boolean,"p":[$n[0].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":2,"n":"IsGateActive","t":16,"rt":$n[1].Boolean,"g":{"ab":true,"a":2,"n":"get_IsGateActive","t":8,"rt":$n[1].Boolean,"fg":"FactoryPipePower$ITutorialInputGate$IsGateActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"FactoryPipePower$ITutorialInputGate$IsGateActive"},{"a":1,"backing":true,"n":"<IsGateActive>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"FactoryPipePower$ITutorialInputGate$IsGateActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*FactoryPipePower.ITutorialInputGate end.*/

    /*FactoryPipePower.TutorialStep start.*/
    $m("FactoryPipePower.TutorialStep", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Complete","is":true,"t":4,"rt":$n[2].TutorialStep,"sn":"Complete","box":function ($v) { return Bridge.box($v, FactoryPipePower.TutorialStep, System.Enum.toStringFn(FactoryPipePower.TutorialStep));}},{"a":2,"n":"HighlightPipe","is":true,"t":4,"rt":$n[2].TutorialStep,"sn":"HighlightPipe","box":function ($v) { return Bridge.box($v, FactoryPipePower.TutorialStep, System.Enum.toStringFn(FactoryPipePower.TutorialStep));}},{"a":2,"n":"HighlightRotation","is":true,"t":4,"rt":$n[2].TutorialStep,"sn":"HighlightRotation","box":function ($v) { return Bridge.box($v, FactoryPipePower.TutorialStep, System.Enum.toStringFn(FactoryPipePower.TutorialStep));}},{"a":2,"n":"HighlightSlot","is":true,"t":4,"rt":$n[2].TutorialStep,"sn":"HighlightSlot","box":function ($v) { return Bridge.box($v, FactoryPipePower.TutorialStep, System.Enum.toStringFn(FactoryPipePower.TutorialStep));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[2].TutorialStep,"sn":"None","box":function ($v) { return Bridge.box($v, FactoryPipePower.TutorialStep, System.Enum.toStringFn(FactoryPipePower.TutorialStep));}}]}; }, $n);
    /*FactoryPipePower.TutorialStep end.*/

    /*FactoryPipePower.TutorialController start.*/
    $m("FactoryPipePower.TutorialController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClearOverlays","t":8,"sn":"ClearOverlays","rt":$n[1].Void},{"a":2,"n":"DisableTutorial","t":8,"sn":"DisableTutorial","rt":$n[1].Void},{"a":1,"n":"HandleDragStarted","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"HandleDragStarted","rt":$n[1].Void,"p":[$n[2].DraggablePipeController]},{"a":1,"n":"HandleReturnedToStock","t":8,"pi":[{"n":"pipe","pt":$n[2].DraggablePipeController,"ps":0}],"sn":"HandleReturnedToStock","rt":$n[1].Void,"p":[$n[2].DraggablePipeController]},{"a":1,"n":"HandleSlotStateChanged","t":8,"pi":[{"n":"slot","pt":$n[2].PipeSlotController,"ps":0},{"n":"newState","pt":$n[2].PipeSlotState,"ps":1}],"sn":"HandleSlotStateChanged","rt":$n[1].Void,"p":[$n[2].PipeSlotController,$n[2].PipeSlotState]},{"a":2,"n":"InitializeTutorial","t":8,"sn":"InitializeTutorial","rt":$n[1].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"ResetTutorial","t":8,"sn":"ResetTutorial","rt":$n[1].Void},{"a":1,"n":"SetPipeOverlay","t":8,"pi":[{"n":"value","pt":$n[1].Boolean,"ps":0}],"sn":"SetPipeOverlay","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"SetSlotOverlay","t":8,"pi":[{"n":"value","pt":$n[1].Boolean,"ps":0}],"sn":"SetSlotOverlay","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"Subscribe","t":8,"sn":"Subscribe","rt":$n[1].Void},{"a":1,"n":"Unsubscribe","t":8,"sn":"Unsubscribe","rt":$n[1].Void},{"a":2,"n":"CurrentStep","t":16,"rt":$n[2].TutorialStep,"g":{"a":2,"n":"get_CurrentStep","t":8,"rt":$n[2].TutorialStep,"fg":"CurrentStep","box":function ($v) { return Bridge.box($v, FactoryPipePower.TutorialStep, System.Enum.toStringFn(FactoryPipePower.TutorialStep));}},"fn":"CurrentStep"},{"a":2,"n":"IsSubscribed","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsSubscribed","t":8,"rt":$n[1].Boolean,"fg":"IsSubscribed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsSubscribed"},{"a":2,"n":"TutorialPipe","t":16,"rt":$n[2].DraggablePipeController,"g":{"a":2,"n":"get_TutorialPipe","t":8,"rt":$n[2].DraggablePipeController,"fg":"TutorialPipe"},"fn":"TutorialPipe"},{"a":2,"n":"TutorialSlot","t":16,"rt":$n[2].PipeSlotController,"g":{"a":2,"n":"get_TutorialSlot","t":8,"rt":$n[2].PipeSlotController,"fg":"TutorialSlot"},"fn":"TutorialSlot"},{"a":1,"n":"configurationValid","t":4,"rt":$n[1].Boolean,"sn":"configurationValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"currentStep","t":4,"rt":$n[2].TutorialStep,"sn":"currentStep","box":function ($v) { return Bridge.box($v, FactoryPipePower.TutorialStep, System.Enum.toStringFn(FactoryPipePower.TutorialStep));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"enableOnInitialize","t":4,"rt":$n[1].Boolean,"sn":"enableOnInitialize","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"subscribed","t":4,"rt":$n[1].Boolean,"sn":"subscribed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialPipe","t":4,"rt":$n[2].DraggablePipeController,"sn":"tutorialPipe"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialSlot","t":4,"rt":$n[2].PipeSlotController,"sn":"tutorialSlot"}]}; }, $n);
    /*FactoryPipePower.TutorialController end.*/

    }});
