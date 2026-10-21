using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class PipeSlotCaptureVolume : MonoBehaviour
    {
        [SerializeField] PipeSlotController ownerSlot;

        public PipeSlotController OwnerSlot => ownerSlot;

        void OnTriggerEnter(Collider other)
        {
            if (ownerSlot == null || other == null)
                return;

            var pipe = other.GetComponentInParent<DraggablePipeController>();
            if (pipe == null)
                return;

            ownerSlot.OnPipeTriggerEnter(pipe);
        }
    }
}
