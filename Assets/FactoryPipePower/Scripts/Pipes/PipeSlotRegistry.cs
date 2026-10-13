using System.Collections.Generic;
using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class PipeSlotRegistry : MonoBehaviour
    {
        readonly List<PipeSlotController> slots = new List<PipeSlotController>();
        DraggablePipeController activePipe;

        public IReadOnlyList<PipeSlotController> Slots => slots;
        public int Count => slots.Count;

        public DraggablePipeController ActivePipe => activePipe;
        public int DragStartsHandled { get; private set; }
        public int DragFinishesHandled { get; private set; }

        void OnEnable()
        {
            DraggablePipeController.AnyDragStarted += OnAnyDragStarted;
            DraggablePipeController.AnyDragFinished += OnAnyDragFinished;
        }

        void OnDisable()
        {
            DraggablePipeController.AnyDragStarted -= OnAnyDragStarted;
            DraggablePipeController.AnyDragFinished -= OnAnyDragFinished;

            activePipe = null;
            ClearHoverOnAllSlots();
        }

        public void Register(PipeSlotController slot)
        {
            if (slot == null || slots.Contains(slot))
                return;

            slots.Add(slot);
        }

        public void Unregister(PipeSlotController slot)
        {
            if (slot == null)
                return;

            slots.Remove(slot);
        }

        void OnAnyDragStarted(DraggablePipeController pipe)
        {
            if (pipe == null)
                return;

            if (activePipe != null && activePipe != pipe
                && activePipe.State == DraggablePipeState.Dragging)
                return;

            activePipe = pipe;
            DragStartsHandled++;

            for (int i = 0; i < slots.Count; i++)
            {
                var slot = slots[i];
                if (slot == null)
                    continue;
                if (slot.State != PipeSlotState.Empty)
                    continue;
                if (slot.IsOccupied)
                    continue;
                if (!slot.IsCompatible(pipe))
                    continue;

                slot.SetHoverValid(true);
            }
        }

        void OnAnyDragFinished(DraggablePipeController pipe)
        {
            if (pipe == null || pipe != activePipe)
                return;

            activePipe = null;
            DragFinishesHandled++;
            ClearHoverOnAllSlots();
        }

        void ClearHoverOnAllSlots()
        {
            for (int i = 0; i < slots.Count; i++)
            {
                var slot = slots[i];
                if (slot == null)
                    continue;

                slot.SetHoverValid(false);
            }
        }
    }
}
