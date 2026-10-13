using System;
using System.Collections;
using UnityEngine;

namespace FactoryPipePower
{
    public enum GameFlowState
    {
        Gameplay,
        WinPending,
        Completed
    }

    [DisallowMultipleComponent]
    public class GameFlowController : MonoBehaviour
    {
        [SerializeField] FactoryPowerController factoryPowerController;
        [SerializeField] CompletionUI completionUI;
        [SerializeField] PointerInputController pointerInput;
        [SerializeField] TutorialController tutorialController;
        [SerializeField] float completionDelay = 0.75f;

        GameFlowState state = GameFlowState.Gameplay;
        Coroutine completionRoutine;
        int winTriggerCount;

        public GameFlowState State => state;
        public int WinTriggerCount => winTriggerCount;

        public event Action WinTriggered;
        public event Action ContinueRequested;

        void OnEnable()
        {
            if (factoryPowerController != null)
                factoryPowerController.FactoryOnline += HandleFactoryOnline;

            if (completionUI != null)
                completionUI.ContinueRequested += HandleContinueRequested;

            if (state == GameFlowState.WinPending && completionRoutine == null)
                completionRoutine = StartCoroutine(CompleteAfterDelay());
        }

        void OnDisable()
        {
            if (factoryPowerController != null)
                factoryPowerController.FactoryOnline -= HandleFactoryOnline;

            if (completionUI != null)
                completionUI.ContinueRequested -= HandleContinueRequested;

            completionRoutine = null;
        }

        void HandleFactoryOnline()
        {
            if (state != GameFlowState.Gameplay)
                return;

            state = GameFlowState.WinPending;
            winTriggerCount++;
            WinTriggered?.Invoke();

            if (pointerInput != null)
                pointerInput.SetInputBlocked(true);

            if (tutorialController != null)
                tutorialController.DisableTutorial();

            completionRoutine = StartCoroutine(CompleteAfterDelay());
        }

        IEnumerator CompleteAfterDelay()
        {
            if (completionDelay > 0.0001f)
                yield return new WaitForSeconds(completionDelay);
            else
                yield return null;

            if (completionUI != null)
                completionUI.Show();

            state = GameFlowState.Completed;
            completionRoutine = null;
        }

        void HandleContinueRequested()
        {
            ContinueRequested?.Invoke();
        }
    }
}
