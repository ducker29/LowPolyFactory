using System;
using System.Collections;
using UnityEngine;
using UnityEngine.Serialization;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class DraggablePipeController : MonoBehaviour
    {
        [SerializeField] PipeSpec spec;
        [SerializeField] PipeVisualController visual;
        [SerializeField, FormerlySerializedAs("dragCollider")] Collider pickCollider;
        [SerializeField] Collider dragCollider;
        [SerializeField] Rigidbody body;
        [SerializeField] Material defaultMaterial;
        [SerializeField] float returnDuration = 0.25f;
        [SerializeField] float dragPlaneHeight = 1f;
        [SerializeField] float obstacleSkin = 0.02f;

        static int dragBlockMask;
        DraggablePipeState state = DraggablePipeState.Stock;
        Vector3 stockPosition;
        Quaternion stockRotation;
        Vector3 dragTargetPosition;
        Vector3 dragOffset;
        Vector3 returnStartPosition;
        Quaternion returnStartRotation;
        Vector3 returnPosition;
        Quaternion returnRotation;
        Coroutine returnRoutine;

        public PipeSpec Spec => spec;
        public DraggablePipeState State => state;
        public float WorldYaw => transform.rotation.eulerAngles.y;
        public bool IsInteractable => state == DraggablePipeState.Stock;
        public float DragPlaneHeight => dragPlaneHeight;
        public PipeVisualController Visual => visual;

        public event Action<DraggablePipeController> Committed;
        public event Action<DraggablePipeController> DragStarted;
        public event Action<DraggablePipeController> ReturnedToStock;
        public static event Action<DraggablePipeController> AnyDragStarted;
        public static event Action<DraggablePipeController> AnyDragFinished;

        void Awake()
        {
            stockPosition = transform.position;
            stockRotation = transform.rotation;
            dragTargetPosition = transform.position;
            returnPosition = transform.position;
            returnRotation = transform.rotation;
            ApplyColliderState();
        }

        void OnDisable()
        {
            if (state == DraggablePipeState.Dragging)
                AnyDragFinished?.Invoke(this);
        }

        void FixedUpdate()
        {
            if (state == DraggablePipeState.Dragging)
            {
                ApplyMovement(ClampToObstacles(dragTargetPosition), stockRotation);
            }
            else if (state == DraggablePipeState.Returning)
            {
                ApplyMovement(returnPosition, returnRotation);
            }
        }

        public void BeginDrag(Vector2 pointerScreenPosition, Camera camera)
        {
            if (state != DraggablePipeState.Stock)
                return;
            if (camera == null)
            {
                Debug.LogError($"[DraggablePipeController] BeginDrag without camera on '{name}'.", this);
                return;
            }
            if (returnRoutine != null)
            {
                StopCoroutine(returnRoutine);
                returnRoutine = null;
            }

            stockPosition = transform.position;
            stockRotation = transform.rotation;

            state = DraggablePipeState.Dragging;
            dragTargetPosition = transform.position;

            ApplyColliderState();

            if (visual != null)
                visual.SetTutorialOverlay(false);

            ComputeDragOffset(pointerScreenPosition, camera);

            AnyDragStarted?.Invoke(this);
            DragStarted?.Invoke(this);
        }

        public void UpdateDrag(Vector2 pointerScreenPosition, Camera camera)
        {
            if (state != DraggablePipeState.Dragging)
                return;
            if (!TryGetPlanePoint(pointerScreenPosition, camera, out Vector3 point))
                return;

            dragTargetPosition = point + dragOffset;

            // Явно фиксируем мировую высоту трубы на drag plane.
            dragTargetPosition.y = dragPlaneHeight;
        }

        public void EndDragWithoutPlacement()
        {
            if (state != DraggablePipeState.Dragging)
                return;

            state = DraggablePipeState.Returning;

            ApplyColliderState();

            returnStartPosition = transform.position;
            returnStartRotation = transform.rotation;
            returnPosition = returnStartPosition;
            returnRotation = returnStartRotation;

            if (returnRoutine != null)
                StopCoroutine(returnRoutine);
            returnRoutine = StartCoroutine(ReturnRoutine());

            AnyDragFinished?.Invoke(this);
            ReturnedToStock?.Invoke(this);
        }

        public void CommitPlaced()
        {
            if (state != DraggablePipeState.Dragging)
                return;

            state = DraggablePipeState.Placed;

            ApplyColliderState();

            if (visual != null)
            {
                visual.SetTutorialOverlay(false);
                visual.gameObject.SetActive(false);
            }

            AnyDragFinished?.Invoke(this);
            Committed?.Invoke(this);
        }

        IEnumerator ReturnRoutine()
        {
            float duration = Mathf.Max(returnDuration, 0.0001f);
            float elapsed = 0f;

            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = Mathf.SmoothStep(0f, 1f, Mathf.Clamp01(elapsed / duration));
                returnPosition = Vector3.Lerp(returnStartPosition, stockPosition, t);
                returnRotation = Quaternion.Slerp(returnStartRotation, stockRotation, t);
                yield return null;
            }

            returnRoutine = null;
            state = DraggablePipeState.Stock;

            transform.SetPositionAndRotation(stockPosition, stockRotation);
            if (body != null)
            {
                body.position = stockPosition;
                body.rotation = stockRotation;
            }

            ApplyColliderState();

            if (visual != null && defaultMaterial != null)
                visual.SetBaseMaterial(defaultMaterial);
        }

        static int DragBlockMask
        {
            get
            {
                if (dragBlockMask == 0)
                    dragBlockMask = ~LayerMask.GetMask("DraggablePipe", "PipeSlot");

                return dragBlockMask;
            }
        }

        void ApplyColliderState()
        {
            if (pickCollider != null)
                pickCollider.enabled = state == DraggablePipeState.Stock;

            if (dragCollider != null)
                dragCollider.enabled = state == DraggablePipeState.Dragging;
        }

        Vector3 ClampToObstacles(Vector3 desired)
        {
            if (dragCollider == null || !dragCollider.enabled)
                return desired;

            Vector3 position = transform.position;
            Vector3 clamped = SweepClamp(position, desired, out RaycastHit hit, out bool startedInside);

            if (startedInside)
                return desired;

            if (hit.collider == null)
                return clamped;

            Vector3 remaining = desired - clamped;
            float into = Vector3.Dot(remaining, hit.normal);
            if (into < 0f)
                remaining -= hit.normal * into;

            if (remaining.sqrMagnitude <= 1e-8f)
                return clamped;

            return SweepClamp(clamped, clamped + remaining, out _, out _);
        }

        Vector3 SweepClamp(Vector3 from, Vector3 desired, out RaycastHit hit, out bool startedInside)
        {
            hit = default(?);
            startedInside = false;

            Vector3 delta = desired - from;
            float distance = delta.magnitude;
            if (distance <= Mathf.Epsilon)
                return from;

            Vector3 direction = delta / distance;
            GetDragBox(out Vector3 boxCenter, out Vector3 halfExtents);
            boxCenter += from - transform.position;

            if (!Physics.BoxCast(boxCenter, halfExtents, direction, out hit,
                    dragCollider.transform.rotation, distance + obstacleSkin,
                    DragBlockMask, QueryTriggerInteraction.Ignore))
                return desired;

            if (hit.distance > 0f)
                return from + direction * Mathf.Max(0f, hit.distance - obstacleSkin);

            startedInside = Physics.OverlapBox(boxCenter, halfExtents, dragCollider.transform.rotation,
                DragBlockMask, QueryTriggerInteraction.Ignore).Length > 0;

            return startedInside ? desired : from;
        }

        void GetDragBox(out Vector3 center, out Vector3 halfExtents)
        {
            if (dragCollider is BoxCollider box)
            {
                center = box.transform.TransformPoint(box.center);
                Vector3 scale = box.transform.lossyScale;
                halfExtents = 0.5f * new Vector3(
                    box.size.x * Mathf.Abs(scale.x),
                    box.size.y * Mathf.Abs(scale.y),
                    box.size.z * Mathf.Abs(scale.z));
                return;
            }

            Bounds bounds = dragCollider.bounds;
            center = bounds.center;
            halfExtents = bounds.extents;
        }

        void ApplyMovement(Vector3 position, Quaternion rotation)
        {
            if (body != null)
            {
                body.MovePosition(position);
                body.MoveRotation(rotation);
            }
            else
            {
                transform.SetPositionAndRotation(position, rotation);
            }
        }

        void ComputeDragOffset(Vector2 pointerScreenPosition, Camera camera)
        {
            dragOffset = Vector3.zero;

            if (!TryGetPlanePoint(pointerScreenPosition, camera, out Vector3 point))
                return;

            Vector3 offset = transform.position - point;

            // Сохраняем смещение трубы относительно курсора
            // только в горизонтальной плоскости.
            dragOffset = new Vector3(offset.x, 0f, offset.z);
        }

        bool TryGetPlanePoint(Vector2 screenPosition, Camera camera, out Vector3 point)
        {
            point = default(?);
            if (camera == null)
                return false;

            Ray ray = camera.ScreenPointToRay(screenPosition);
            var plane = new Plane(Vector3.up, new Vector3(0f, dragPlaneHeight, 0f));
            if (!plane.Raycast(ray, out float enter))
                return false;

            point = ray.GetPoint(enter);
            return true;
        }
    }
}
