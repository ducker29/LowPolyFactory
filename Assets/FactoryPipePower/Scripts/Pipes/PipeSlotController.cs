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
        [SerializeField] CornerRotationGroup expectedCornerGroup;
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
        bool revalidating;

        public PipeSpec ExpectedSpec => expectedSpec;
        public PipeSlotState State => state;
        public bool IsOccupied => state == PipeSlotState.OccupiedWrongRotation
            || state == PipeSlotState.OccupiedAligned
            || state == PipeSlotState.Charging
            || state == PipeSlotState.Powered;
        public bool IsAligned => anchorY != null && ComputeIsAligned();
        public CornerRotationGroup ExpectedCornerGroup => expectedCornerGroup;
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
            ApplyTapColliderState();
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
            RevalidateLocalAndNeighbours();

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
            RevalidateLocalAndNeighbours();
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
            if (!AreDirectionsValid())
                return;

            chargeRoutine = StartCoroutine(ChargeRoutine());
        }

        bool AreDirectionsValid()
        {
            if (acceptedPipe == null || anchorY == null)
                return false;

            PipeShape currentShape = acceptedPipe.Spec.shape;
            int currentYaw = PipeDirectionsUtility.NormalizeQuarter(anchorY.eulerAngles.y);

            bool hasPrevious = TryGetNeighbourOrientation(
                previousNode, out PipeShape previousShape, out int previousYaw, out Vector3 previousPosition);
            bool hasNext = TryGetNeighbourOrientation(
                nextNode, out PipeShape nextShape, out int nextYaw, out Vector3 nextPosition);

            if (hasPrevious
                && !PipeDirectionsUtility.AreNeighboursCompatible(
                    previousShape, previousYaw, currentShape, currentYaw))
                return false;

            if (currentShape == PipeShape.Straight && hasPrevious && hasNext
                && !PipeDirectionsUtility.AreSegmentLinksDistinct(
                    previousShape, previousYaw, previousPosition,
                    currentShape, currentYaw, transform.position,
                    nextShape, nextYaw, nextPosition))
                return false;

            return true;
        }

        static bool TryGetNeighbourOrientation(
            IPowerNode node, out PipeShape shape, out int yawQuarterDegrees, out Vector3 position)
        {
            shape = PipeShape.Straight;
            yawQuarterDegrees = 0;
            position = default;

            if (node is PipeSlotController slot
                && slot.AcceptedPipe != null
                && slot.AnchorY != null)
            {
                shape = slot.AcceptedPipe.Spec.shape;
                yawQuarterDegrees = PipeDirectionsUtility.NormalizeQuarter(slot.AnchorY.eulerAngles.y);
                position = slot.transform.position;
                return true;
            }

            return false;
        }

        void RevalidateLocalAndNeighbours()
        {
            if (revalidating)
                return;

            revalidating = true;
            try
            {
                RevalidateLocal();
                (previousNode as PipeSlotController)?.RevalidateLocal();
                (nextNode as PipeSlotController)?.RevalidateLocal();
            }
            finally
            {
                revalidating = false;
            }
        }

        void RevalidateLocal()
        {
            if (isRotating)
                return;

            EvaluateAlignment();
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
                {
                    if (acceptedPipe != null
                        && acceptedPipe.Spec.shape == PipeShape.Corner
                        && TryComputeCornerElbow(out Vector3 elbow))
                    {
                        slotVisual.ConfigureCornerFlow(flowStart, elbow, flowEnd);
                    }
                    else
                    {
                        slotVisual.ConfigureFlow(flowStart, flowEnd);
                    }
                }
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

        bool TryComputeCornerElbow(out Vector3 elbow)
        {
            elbow = default;

            if (anchorY == null || connectorA == null || connectorB == null)
                return false;

            int worldYaw = PipeDirectionsUtility.NormalizeQuarter(anchorY.eulerAngles.y);
            if (!PipeDirectionsUtility.TryGetDirectionVector(
                    PipeDirectionsUtility.GetCornerInput(worldYaw), out Vector3 inputDir))
                return false;

            Vector3 inward = -inputDir;
            Vector3 toB = connectorB.position - connectorA.position;
            float leg = Vector3.Dot(toB, inward);

            if (Mathf.Abs(leg) < 1e-4f)
                return false;

            elbow = connectorA.position + inward * leg;
            return true;
        }

        bool ComputeIsAligned()
        {
            int yaw = PipeDirectionsUtility.NormalizeQuarter(anchorY.localEulerAngles.y);

            if (expectedSpec.shape == PipeShape.Corner)
                return PipeDirectionsUtility.GetCurrentCornerGroup(yaw) == expectedCornerGroup;

            return QuarterTurnUtility.IsAligned(anchorY.localEulerAngles.y, rotationGroup);
        }

        void EvaluateAlignment()
        {
            if (!IsOccupied || isRotating)
                return;
            if (state == PipeSlotState.Charging || state == PipeSlotState.Powered)
                return;

            bool aligned = IsAligned;

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
            RevalidateLocalAndNeighbours();
        }

        void SetState(PipeSlotState nextState)
        {
            bool changed = state != nextState;
            state = nextState;
            ApplyStateMaterial();
            ApplyTapColliderState();

            if (changed)
                StateChanged?.Invoke(this, nextState);
        }

        void ApplyTapColliderState()
        {
            SetTapCollidersEnabled(IsOccupied);
        }

        void SetTapCollidersEnabled(bool enabled)
        {
            if (tapCollider == null)
                return;

            var colliders = tapCollider.GetComponents<Collider>();

            foreach (var collider in colliders)
            {
                if (collider != null)
                    collider.enabled = enabled;
            }
        }

        void ApplyStateMaterial()
        {
            if (slotVisual == null)
                return;

            Material baseMaterial = state switch
            {
                PipeSlotState.Empty => emptyMaterial,
                PipeSlotState.HoverValid => hoverValidMaterial,
                PipeSlotState.OccupiedWrongRotation => defaultMaterial,
                PipeSlotState.OccupiedAligned => wrongMaterial,
                _ => null
            };

            if (baseMaterial != null)
                slotVisual.SetBaseMaterial(baseMaterial);
        }
    }
}
