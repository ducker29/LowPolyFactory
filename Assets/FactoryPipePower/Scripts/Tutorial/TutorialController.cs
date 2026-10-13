using UnityEngine;

namespace FactoryPipePower
{
    public enum TutorialStep
    {
        None,
        HighlightPipe,
        HighlightSlot,
        HighlightRotation,
        Complete
    }

    [DisallowMultipleComponent]
    public class TutorialController : MonoBehaviour
    {
        [SerializeField] DraggablePipeController tutorialPipe;
        [SerializeField] PipeSlotController tutorialSlot;

        TutorialStep currentStep = TutorialStep.None;
        bool configurationValid;
        bool subscribed;

        public TutorialStep CurrentStep => currentStep;
        public DraggablePipeController TutorialPipe => tutorialPipe;
        public PipeSlotController TutorialSlot => tutorialSlot;
        public bool IsSubscribed => subscribed;

        void OnEnable()
        {
            // Lifecycle re-enable: восстановить подписки, если tutorial активен.
            if (currentStep != TutorialStep.None && currentStep != TutorialStep.Complete)
                Subscribe();
        }

        void OnDisable()
        {
            Unsubscribe();
        }

        void OnDestroy()
        {
            Unsubscribe();
        }

        public void InitializeTutorial()
        {
            Unsubscribe();

            if (tutorialPipe == null || tutorialSlot == null)
            {
                configurationValid = false;
                currentStep = TutorialStep.None;
                ClearOverlays();
                return;
            }

            if (!tutorialSlot.IsCompatible(tutorialPipe))
            {
                configurationValid = false;
                currentStep = TutorialStep.None;
                ClearOverlays();
                Debug.LogError(
                    $"[TutorialController] Tutorial configuration error: pipe '{tutorialPipe.name}' is not compatible with slot '{tutorialSlot.name}' (PipeSpec mismatch). Tutorial not started.",
                    this);
                return;
            }

            configurationValid = true;
            currentStep = TutorialStep.HighlightPipe;
            SetPipeOverlay(true);
            SetSlotOverlay(false);
            Subscribe();
        }

        public void ResetTutorial()
        {
            ClearOverlays();

            if (configurationValid
                && tutorialPipe != null
                && tutorialSlot != null
                && tutorialPipe.State == DraggablePipeState.Stock)
            {
                currentStep = TutorialStep.HighlightPipe;
                SetPipeOverlay(true);
                Subscribe();
            }
            else
            {
                currentStep = TutorialStep.None;
                Unsubscribe();
            }
        }

        public void DisableTutorial()
        {
            ClearOverlays();
            currentStep = TutorialStep.None;
            Unsubscribe();
        }

        void HandleDragStarted(DraggablePipeController pipe)
        {
            if (currentStep == TutorialStep.None || currentStep == TutorialStep.Complete)
                return;
            if (pipe != tutorialPipe)
                return;
            if (currentStep != TutorialStep.HighlightPipe)
                return;

            SetPipeOverlay(false);
            SetSlotOverlay(true);
            currentStep = TutorialStep.HighlightSlot;
        }

        void HandleReturnedToStock(DraggablePipeController pipe)
        {
            if (currentStep == TutorialStep.None || currentStep == TutorialStep.Complete)
                return;
            if (pipe != tutorialPipe)
                return;
            if (currentStep != TutorialStep.HighlightSlot)
                return;

            SetSlotOverlay(false);
            SetPipeOverlay(true);
            currentStep = TutorialStep.HighlightPipe;
        }

        void HandleSlotStateChanged(PipeSlotController slot, PipeSlotState newState)
        {
            if (currentStep == TutorialStep.None || currentStep == TutorialStep.Complete)
                return;
            if (slot != tutorialSlot)
                return;
            if (newState == PipeSlotState.Charging || newState == PipeSlotState.Powered)
                return;
            if (tutorialSlot.AcceptedPipe != tutorialPipe)
                return;

            if (newState == PipeSlotState.OccupiedWrongRotation
                && currentStep == TutorialStep.HighlightSlot)
            {
                SetPipeOverlay(false);
                SetSlotOverlay(true);
                currentStep = TutorialStep.HighlightRotation;
                return;
            }

            if (newState == PipeSlotState.OccupiedAligned
                && (currentStep == TutorialStep.HighlightSlot
                    || currentStep == TutorialStep.HighlightRotation))
            {
                SetPipeOverlay(false);
                SetSlotOverlay(false);
                currentStep = TutorialStep.Complete;
                Unsubscribe();
            }
        }

        void Subscribe()
        {
            if (subscribed)
                return;

            if (tutorialPipe != null)
            {
                tutorialPipe.DragStarted += HandleDragStarted;
                tutorialPipe.ReturnedToStock += HandleReturnedToStock;
            }

            if (tutorialSlot != null)
                tutorialSlot.StateChanged += HandleSlotStateChanged;

            subscribed = true;
        }

        void Unsubscribe()
        {
            if (!subscribed)
                return;

            if (tutorialPipe != null)
            {
                tutorialPipe.DragStarted -= HandleDragStarted;
                tutorialPipe.ReturnedToStock -= HandleReturnedToStock;
            }

            if (tutorialSlot != null)
                tutorialSlot.StateChanged -= HandleSlotStateChanged;

            subscribed = false;
        }

        void ClearOverlays()
        {
            SetPipeOverlay(false);
            SetSlotOverlay(false);
        }

        void SetPipeOverlay(bool value)
        {
            if (tutorialPipe != null && tutorialPipe.Visual != null)
                tutorialPipe.Visual.SetTutorialOverlay(value);
        }

        void SetSlotOverlay(bool value)
        {
            if (tutorialSlot != null && tutorialSlot.Visual != null)
                tutorialSlot.Visual.SetTutorialOverlay(value);
        }
    }
}
