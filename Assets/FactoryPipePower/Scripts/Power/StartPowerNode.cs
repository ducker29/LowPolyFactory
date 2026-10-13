using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class StartPowerNode : MonoBehaviour, IPowerNode
    {
        [SerializeField] Transform powerOutput;
        [SerializeField] MonoBehaviour nextNodeBehaviour;
        [SerializeField] PipeVisualController visual;

        IPowerNode nextNode;
        bool isPowered;

        public bool IsPowered => isPowered;
        public Transform PowerOutput => powerOutput != null ? powerOutput : transform;
        public IPowerNode NextNode => nextNode;

        void Awake()
        {
            if (nextNode == null)
                nextNode = nextNodeBehaviour as IPowerNode;
        }

        public void SetNextNode(IPowerNode next)
        {
            nextNode = next;
        }

        public void Initialize()
        {
            isPowered = true;

            if (visual != null)
            {
                visual.UseGreenRuntimeMaterial();
                visual.SetFill(1f);
            }

            nextNode?.NotifyPreviousPowered(this);
        }

        public void NotifyPreviousPowered(IPowerNode previous)
        {
            // StartPowerNode is the origin of the chain; it never receives power.
        }
    }
}
