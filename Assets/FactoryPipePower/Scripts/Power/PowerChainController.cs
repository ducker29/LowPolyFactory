using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class PowerChainController : MonoBehaviour
    {
        [SerializeField] StartPowerNode startNode;
        [SerializeField] PipeSlotController[] slots;
        [SerializeField] EndPowerNode endNode;
        [SerializeField] FactoryPowerController factoryPowerController;
        [SerializeField] NarrativePowerSequence narrativeSequence;

        bool initialized;

        public bool IsInitialized => initialized;
        public StartPowerNode StartNode => startNode;
        public EndPowerNode EndNode => endNode;
        public PipeSlotController[] Slots => slots;

        public void Initialize()
        {
            initialized = false;

            if (startNode == null)
            {
                Debug.LogError("[PowerChainController] startNode is not assigned on '" + name + "'.", this);
                return;
            }

            factoryPowerController?.Initialize();
            endNode?.Initialize();

            if (slots != null)
                foreach (var slot in slots)
                    if (slot != null)
                        slot.ResetPowerState();

            LinkChain();

            startNode.Initialize();

            if (narrativeSequence != null && !narrativeSequence.TutorialControlled)
                narrativeSequence.BeginLeftChain();

            initialized = true;
        }

        void LinkChain()
        {
            IPowerNode first = FirstNodeAfterStart();
            startNode.SetNextNode(first);

            if (slots != null)
            {
                for (int i = 0; i < slots.Length; i++)
                {
                    var slot = slots[i];
                    if (slot == null)
                        continue;

                    IPowerNode previous = i == 0 ? (IPowerNode)startNode : slots[i - 1];
                    IPowerNode next = i == slots.Length - 1 ? (IPowerNode)endNode : slots[i + 1];
                    slot.SetupPowerNodes(previous, next);
                }
            }

            if (endNode != null)
                endNode.SetExpectedPrevious(LastNodeBeforeEnd());
        }

        IPowerNode FirstNodeAfterStart()
        {
            if (slots != null && slots.Length > 0 && slots[0] != null)
                return slots[0];
            return endNode;
        }

        IPowerNode LastNodeBeforeEnd()
        {
            if (slots != null && slots.Length > 0 && slots[slots.Length - 1] != null)
                return slots[slots.Length - 1];
            return startNode;
        }
    }
}
