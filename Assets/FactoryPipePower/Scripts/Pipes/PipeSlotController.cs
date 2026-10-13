using System;
using System.Collections;
using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class PipeSlotController : MonoBehaviour, IPowerNode
    {
        [SerializeField] PipeSpec expectedSpec;
        [SerializeField] RotationGroup rotationGroup;
        [SerializeField] Transform anchorY;
        [SerializeField] PipeVisualController slotVisual;
        [SerializeField] Transform connectorA;
        [SerializeField] Transform connectorB;
        [SerializeField] Collider captureCollider;
        [SerializeField] Collider tapCollider;
        [SerializeField] Material emptyMaterial;
        [SerializeField] Material hoverValidMaterial;
        [SerializeField] Material wrongMaterial;
        [SerializeField] Material defaultMaterial;
        [SerializeField] float rotationDuration = 0.2f;
        [SerializeField] float chargingDuration = 0.25f;
        [SerializeField] MonoBehaviour previousNodeBehaviour;
        [SerializeField] MonoBehaviour nextNodeBehaviour;

        PipeSlotState state = PipeSlotState.Empty;
        DraggablePipeController acceptedPipe;
        bool placementCommitted;
        bool isRotating;
        Coroutine rotateRoutine;
        Quaternion authoringAnchorRotation = Quaternion.identity;

        IPowerNode previousNode;
        IPowerNode nextNode;
        bool hasCharged;
        Coroutine chargeRoutine;

        public PipeSpec ExpectedSpec => expectedSpec;
        public PipeSlotState State => state;
        public bool IsOccupied => state == PipeSlotState.OccupiedWrongRotation
            || state == PipeSlotState.OccupiedAligned
            || state == PipeSlotState.Charging
            || state == PipeSlotState.Powered;
        public bool IsAligned => anchorY != null
            && QuarterTurnUtility.IsAligned(anchorY.localEulerAngles.y, rotationGroup);
        public Transform AnchorY => anchorY;
        public Transform ConnectorA => connectorA;
        public Transform ConnectorB => connectorB;
        public RotationGroup SlotRotationGroup => rotationGroup;
        public DraggablePipeController AcceptedPipe => acceptedPipe;
        public bool PlacementCommitted => placementCommitted;
        public bool IsRotating => isRotating;
        public PipeVisualController Visual => slotVisual;

        public event Action<PipeSlotController, PipeSlotState> StateChanged;

        public bool IsPowered => state == PipeSlotState.Powered;
        public IPowerNode PreviousNode => previousNode;
        public IPowerNode NextNode => nextNode;
        public bool HasCharged => hasCharged;

        public Transform PowerOutput
        {
            get
            {
                if (previousNode != null && connectorA != null && connectorB != null)
                {
                    Vector3 previousPosition = previousNode.PowerOutput != null
                        ? previousNode.PowerOutput.position
                        : transform.position;
                    float distanceA = Vector3.Distance(previousPosition, connectorA.position);
                    float distanceB = Vector3.Distance(previousPosition, connectorB.position);
                    return distanceA >= distanceB ? connectorA : connectorB;
                }

                if (connectorB != null)
                    return connectorB;
                return transform;
            }
        }

        public void SetupPowerNodes(IPowerNode previous, IPowerNode next)
        {
            previousNode = previous;
            nextNode = next;
        }

        void Awake()
        {
            if (anchorY != null)
                authoringAnchorRotation = anchorY.localRotation;

            if (previousNode == null)
                previousNode = previousNodeBehaviour as IPowerNode;
            if (nextNode == null)
                nextNode = nextNodeBehaviour as IPowerNode;

            state = PipeSlotState.Empty;
            ApplyStateMaterial();
        }

        public bool IsCompatible(DraggablePipeController pipe)
        {
            return pipe != null && expectedSpec.Equals(pipe.Spec);
        }

        public bool TryAccept(DraggablePipeController pipe)
        {
            if (pipe == null)
                return false;
            if (placementCommitted)
                return false;
            if (state != PipeSlotState.Empty && state != PipeSlotState.HoverValid)
                return false;
            if (pipe.State != DraggablePipeState.Dragging)
                return false;
            if (!expectedSpec.Equals(pipe.Spec))
                return false;

            placementCommitted = true;
            acceptedPipe = pipe;

            int quarter = QuarterTurnUtility.GetQuarterTurn(pipe.WorldYaw);
            if (anchorY != null)
                anchorY.localRotation = QuarterTurnUtility.QuarterTurnToRotation(quarter);

            pipe.CommitPlaced();

            SetState(PipeSlotState.OccupiedWrongRotation);
            EvaluateAlignment();

            return true;
        }

        public void OnPipeTriggerEnter(DraggablePipeController pipe)
        {
            if (pipe == null)
                return;
            if (placementCommitted)
                return;
            if (state != PipeSlotState.Empty && state != PipeSlotState.HoverValid)
                return;
            if (pipe.State != DraggablePipeState.Dragging)
                return;

            TryAccept(pipe);
        }

        public bool TryRotateTap()
        {
            if (state != PipeSlotState.OccupiedWrongRotation
                && state != PipeSlotState.OccupiedAligned)
                return false;
            if (isRotating)
                return false;

            rotateRoutine = StartCoroutine(RotateOneStepRoutine());
            return true;
        }

        public void SetHoverValid(bool value)
        {
            if (value)
            {
                if (state != PipeSlotState.Empty)
                    return;

                SetState(PipeSlotState.HoverValid);
            }
            else
            {
                if (state != PipeSlotState.HoverValid)
                    return;

                SetState(PipeSlotState.Empty);
            }
        }

        public void ResetSlot()
        {
            if (rotateRoutine != null)
            {
                StopCoroutine(rotateRoutine);
                rotateRoutine = null;
            }

            isRotating = false;
            placementCommitted = false;
            acceptedPipe = null;

            if (anchorY != null)
                anchorY.localRotation = authoringAnchorRotation;

            SetState(PipeSlotState.Empty);
        }

        public void NotifyPreviousPowered(IPowerNode previous)
        {
            if (previous == null)
                return;

            if (previousNode == null)
                previousNode = previous;

            TryStartCharging();
        }

        public void TryStartCharging()
        {
            if (state != PipeSlotState.OccupiedAligned)
                return;
            if (previousNode == null || !previousNode.IsPowered)
                return;
            if (hasCharged)
                return;
            if (chargeRoutine != null)
                return;

            chargeRoutine = StartCoroutine(ChargeRoutine());
        }

        public void ResetPowerState()
        {
            if (chargeRoutine != null)
            {
                StopCoroutine(chargeRoutine);
                chargeRoutine = null;
            }

            hasCharged = false;

            if (state == PipeSlotState.Charging || state == PipeSlotState.Powered)
                state = PipeSlotState.OccupiedAligned;

            if (slotVisual != null)
                slotVisual.ReleaseGreenRuntimeMaterial();

            ApplyStateMaterial();
        }

        IEnumerator ChargeRoutine()
        {
            hasCharged = true;
            SetState(PipeSlotState.Charging);

            if (slotVisual != null)
            {
                slotVisual.UseGreenRuntimeMaterial();
                slotVisual.SetFill(0f);
            }

            Vector3 previousPosition = transform.position;
            if (previousNode != null && previousNode.PowerOutput != null)
                previousPosition = previousNode.PowerOutput.position;

            if (connectorA != null && connectorB != null)
            {
                FlowConnectorUtility.ResolveFlowEndpoints(
                    previousPosition,
                    connectorA.position,
                    connectorB.position,
                    out Vector3 flowStart,
                    out Vector3 flowEnd);

                if (slotVisual != null)
                    slotVisual.ConfigureFlow(flowStart, flowEnd);
            }

            float duration = Mathf.Max(chargingDuration, 0.0001f);
            float elapsed = 0f;
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                if (slotVisual != null)
                    slotVisual.SetFill(Mathf.Clamp01(elapsed / duration));
                yield return null;
            }

            if (slotVisual != null)
                slotVisual.SetFill(1f);

            SetState(PipeSlotState.Powered);
            chargeRoutine = null;

            nextNode?.NotifyPreviousPowered(this);
        }

        void EvaluateAlignment()
        {
            if (!IsOccupied || isRotating)
                return;
            if (state == PipeSlotState.Charging || state == PipeSlotState.Powered)
                return;

            bool aligned = anchorY != null
                && QuarterTurnUtility.IsAligned(anchorY.localEulerAngles.y, rotationGroup);

            SetState(aligned
                ? PipeSlotState.OccupiedAligned
                : PipeSlotState.OccupiedWrongRotation);

            if (aligned)
                TryStartCharging();
        }

        IEnumerator RotateOneStepRoutine()
        {
            isRotating = true;

            int startQuarter = QuarterTurnUtility.GetQuarterTurn(anchorY.localEulerAngles.y);
            int targetQuarter = (startQuarter + 1) & 3;
            Quaternion start = anchorY.localRotation;
            Quaternion target = QuarterTurnUtility.QuarterTurnToRotation(targetQuarter);
            float duration = Mathf.Max(rotationDuration, 0.0001f);
            float elapsed = 0f;

            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = Mathf.SmoothStep(0f, 1f, Mathf.Clamp01(elapsed / duration));
                anchorY.localRotation = Quaternion.Slerp(start, target, t);
                yield return null;
            }

            anchorY.localRotation = target;
            rotateRoutine = null;
            isRotating = false;
            EvaluateAlignment();
        }

        void SetState(PipeSlotState nextState)
        {
            bool changed = state != nextState;
            state = nextState;
            ApplyStateMaterial();

            if (changed)
                StateChanged?.Invoke(this, nextState);
        }

        void ApplyStateMaterial()
        {
            if (slotVisual == null)
                return;

            Material baseMaterial = state switch
            {
                PipeSlotState.Empty => emptyMaterial,
                PipeSlotState.HoverValid => hoverValidMaterial,
                PipeSlotState.OccupiedWrongRotation => wrongMaterial,
                PipeSlotState.OccupiedAligned => defaultMaterial,
                _ => null
            };

            if (baseMaterial != null)
                slotVisual.SetBaseMaterial(baseMaterial);
        }
    }
}
