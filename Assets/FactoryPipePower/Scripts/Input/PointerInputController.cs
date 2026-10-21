using UnityEngine;
#if !UNITY_LUNA
using UnityEngine.InputSystem;
#endif

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class PointerInputController : MonoBehaviour
    {
        const string MapName = "Gameplay";
        const string PositionActionName = "PointerPosition";
        const string PressActionName = "PointerPress";

        [SerializeField] Camera raycastCamera;
#if !UNITY_LUNA
        [SerializeField] InputActionAsset inputActions;
#endif
        [SerializeField] float maxRayDistance = 100f;
        [SerializeField] LayerMask pickMask = ~0;
        [SerializeField] LayerMask slotTapMask = ~0;
        [SerializeField] MonoBehaviour tutorialGateBehaviour;

#if !UNITY_LUNA
        InputAction pressAction;
        InputAction positionAction;
#endif
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

#if !UNITY_LUNA
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
#endif
        }

        void OnDestroy()
        {
#if !UNITY_LUNA
            if (pressAction != null)
            {
                pressAction.started -= OnPressStarted;
                pressAction.canceled -= OnPressCanceled;
                pressAction.Disable();
            }

            if (positionAction != null)
                positionAction.Disable();
#endif

            ReleaseActivePipe();
        }

        void Update()
        {
#if UNITY_LUNA
            if (Input.GetMouseButtonDown(0))
                HandlePressStarted(CurrentPointerPosition());

            if (Input.GetMouseButtonUp(0))
                HandlePressCanceled();
#endif

            if (activePipe == null)
                return;

            if (activePipe.State == DraggablePipeState.Placed)
            {
                ReleaseActivePipe();
                return;
            }

            if (activePipe.State == DraggablePipeState.Dragging && HasPointerPosition())
                activePipe.UpdateDrag(CurrentPointerPosition(), raycastCamera);
        }

#if !UNITY_LUNA
        void OnPressStarted(InputAction.CallbackContext context)
        {
            HandlePressStarted(positionAction.ReadValue<Vector2>());
        }

        void OnPressCanceled(InputAction.CallbackContext context)
        {
            HandlePressCanceled();
        }
#endif

        void HandlePressStarted(Vector2 screenPosition)
        {
            if (inputBlocked)
                return;
            if (activePipe != null)
                return;
            if (raycastCamera == null)
                return;

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

        void HandlePressCanceled()
        {
            if (activePipe == null)
                return;

            if (activePipe.State == DraggablePipeState.Dragging)
                activePipe.EndDragWithoutPlacement();

            ReleaseActivePipe();
        }

        Vector2 CurrentPointerPosition()
        {
#if UNITY_LUNA
            return Input.mousePosition;
#else
            return positionAction != null ? positionAction.ReadValue<Vector2>() : Vector2.zero;
#endif
        }

        bool HasPointerPosition()
        {
#if UNITY_LUNA
            return true;
#else
            return positionAction != null;
#endif
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
