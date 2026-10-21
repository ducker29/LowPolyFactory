using System;
using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class StartPowerNode : MonoBehaviour, IPowerNode
    {
        [SerializeField] Transform powerOutput;
        [SerializeField] MonoBehaviour nextNodeBehaviour;
        [SerializeField] PipeVisualController visual;
        [SerializeField] bool deferPowerActivation;

        IPowerNode nextNode;
        bool isPowered;

        public bool IsPowered => isPowered;
        public bool DeferPowerActivation => deferPowerActivation;
        public Transform PowerOutput => powerOutput != null ? powerOutput : transform;
        public IPowerNode NextNode => nextNode;

        public event Action<StartPowerNode> Powered;

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
            if (deferPowerActivation)
            {
                isPowered = false;

                if (visual != null)
                    visual.ResetVisual();

                return;
            }

            isPowered = true;

            if (visual != null)
            {
                visual.UseGreenRuntimeMaterial();
                visual.SetFill(1f);
            }

            nextNode?.NotifyPreviousPowered(this);
            Powered?.Invoke(this);
        }

        public void ProvidePower()
        {
            if (isPowered)
                return;

            isPowered = true;

            if (visual != null)
            {
                visual.UseGreenRuntimeMaterial();
                visual.SetFill(1f);
            }

            nextNode?.NotifyPreviousPowered(this);
            Powered?.Invoke(this);
        }

        public void NotifyPreviousPowered(IPowerNode previous)
        {
            // StartPowerNode is the origin of the chain; it never receives power.
        }
    }
}
