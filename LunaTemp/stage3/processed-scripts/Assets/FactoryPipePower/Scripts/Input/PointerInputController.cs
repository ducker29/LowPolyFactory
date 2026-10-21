using UnityEngine;
using UnityEngine.InputSystem;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class PointerInputController : MonoBehaviour
    {
        const string MapName = "Gameplay";
        const string PositionActionName = "PointerPosition";
        const string PressActionName = "PointerPress";

        [SerializeField] Camera raycastCamera;
        [SerializeField] InputActionAsset inputActions;
        [SerializeField] float maxRayDistance = 100f;
        [SerializeField] LayerMask pickMask = ~0;
        [SerializeField] LayerMask slotTapMask = ~0;
        [SerializeField] MonoBehaviour tutorialGateBehaviour;

        InputAction pressAction;
        InputAction positionAction;
        DraggablePipeController activePipe;
        bool inputBlocked;
        ITutorialInputGate tutorialGate;
        bool tutorialGateResolved;

        public DraggablePipeController ActivePipe => activePipe;
        public Camera RaycastCamera => raycastCamera;
        public bool InputBlocked => inputBlocked;

        public ITutorialInputGate TutorialGate => ResolveTutorialGate();

        public void SetInputBlocked(bool blocked)
        {
            inputBlocked = blocked;
        }

        public void SetTutorialGate(MonoBehaviour gateBehaviour)
        {
            tutorialGateBehaviour = gateBehaviour;
            tutorialGate = null;
            tutorialGateResolved = false;
        }

        ITutorialInputGate ResolveTutorialGate()
        {
            if (!tutorialGateResolved)
            {
                tutorialGate = tutorialGateBehaviour as ITutorialInputGate;
                tutorialGateResolved = true;
            }

            return tutorialGate;
        }

        void Awake()
        {
            if (raycastCamera == null)
                raycastCamera = Camera.main;

            if (inputActions == null)
            {
                Debug.LogError($"[PointerInputController] inputActions is not assigned on '{name}'.", this);
                enabled = false;
                return;
            }

            pressAction = inputActions.FindAction($"{MapName}/{PressActionName}");
            positionAction = inputActions.FindAction($"{MapName}/{PositionActionName}");

            if (pressAction == null || positionAction == null)
            {
                Debug.LogError($"[PointerInputController] action '{MapName}/{PressActionName}' or '{MapName}/{PositionActionName}' not found on '{name}'.", this);
                enabled = false;
                return;
            }

            pressAction.started += OnPressStarted;
            pressAction.canceled += OnPressCanceled;
            pressAction.Enable();
            positionAction.Enable();
        }

        void OnDestroy()
        {
            if (pressAction != null)
            {
                pressAction.started -= OnPressStarted;
                pressAction.canceled -= OnPressCanceled;
                pressAction.Disable();
            }

            if (positionAction != null)
                positionAction.Disable();

            ReleaseActivePipe();
        }

        void Update()
        {
            if (activePipe == null)
                return;

            if (activePipe.State == DraggablePipeState.Placed)
            {
                ReleaseActivePipe();
                return;
            }

            if (activePipe.State == DraggablePipeState.Dragging && positionAction != null)
                activePipe.UpdateDrag(positionAction.ReadValue<Vector2>(), raycastCamera);
        }

        void OnPressStarted(InputAction.CallbackContext context)
        {
            if (inputBlocked)
                return;
            if (activePipe != null)
                return;
            if (raycastCamera == null)
                return;

            Vector2 screenPosition = positionAction.ReadValue<Vector2>();
            ITutorialInputGate gate = ResolveTutorialGate();

            if (gate != null && gate.TryConsumeAdvancePress(screenPosition))
                return;

            Ray ray = raycastCamera.ScreenPointToRay(screenPosition);

            if (Physics.Raycast(ray, out RaycastHit hit, maxRayDistance, pickMask, QueryTriggerInteraction.Ignore))
            {
                var pipe = hit.collider.GetComponentInParent<DraggablePipeController>();
                if (pipe != null
                    && pipe.IsInteractable
                    && pipe.State == DraggablePipeState.Stock
                    && (gate == null || gate.IsPipeAllowed(pipe)))
                {
                    activePipe = pipe;
                    pipe.Committed += OnActivePipeCommitted;
                    pipe.BeginDrag(screenPosition, raycastCamera);
                    return;
                }
            }

            if (Physics.Raycast(ray, out RaycastHit slotHit, maxRayDistance, slotTapMask, QueryTriggerInteraction.Ignore))
            {
                var slot = slotHit.collider.GetComponentInParent<PipeSlotController>();
                if (slot != null && (gate == null || gate.IsSlotTapAllowed(slot)))
                    slot.TryRotateTap();
            }
        }

        void OnPressCanceled(InputAction.CallbackContext context)
        {
            if (activePipe == null)
                return;

            if (activePipe.State == DraggablePipeState.Dragging)
                activePipe.EndDragWithoutPlacement();

            ReleaseActivePipe();
        }

        void OnActivePipeCommitted(DraggablePipeController pipe)
        {
            ReleaseActivePipe();
        }

        void ReleaseActivePipe()
        {
            if (activePipe == null)
                return;

            activePipe.Committed -= OnActivePipeCommitted;
            activePipe = null;
        }
    }
}
