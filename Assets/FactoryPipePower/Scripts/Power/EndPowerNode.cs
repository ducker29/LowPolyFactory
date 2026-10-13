using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class EndPowerNode : MonoBehaviour, IPowerNode
    {
        [SerializeField] MonoBehaviour expectedPreviousBehaviour;
        [SerializeField] Transform powerInput;
        [SerializeField] PipeVisualController visual;
        [SerializeField] Material inactiveMaterial;
        [SerializeField] Material poweredMaterial;
        [SerializeField] FactoryPowerController factoryPowerController;

        IPowerNode expectedPrevious;
        EndPowerState state = EndPowerState.Inactive;
        int activationCount;

        public bool IsPowered => state == EndPowerState.Powered;
        public Transform PowerOutput => powerInput != null ? powerInput : transform;
        public EndPowerState State => state;
        public int ActivationCount => activationCount;

        void Awake()
        {
            if (expectedPrevious == null)
                expectedPrevious = expectedPreviousBehaviour as IPowerNode;
        }

        public void SetExpectedPrevious(IPowerNode previous)
        {
            expectedPrevious = previous;
        }

        public void Initialize()
        {
            state = EndPowerState.Inactive;
            activationCount = 0;

            if (visual != null && inactiveMaterial != null)
                visual.SetBaseMaterial(inactiveMaterial);
        }

        public void NotifyPreviousPowered(IPowerNode previous)
        {
            if (state == EndPowerState.Powered)
                return;
            if (previous == null || expectedPrevious == null || previous != expectedPrevious)
                return;

            activationCount++;
            state = EndPowerState.Powered;

            if (visual != null)
            {
                if (poweredMaterial != null)
                    visual.SetBaseMaterial(poweredMaterial);
                else
                {
                    visual.UseGreenRuntimeMaterial();
                    visual.SetFill(1f);
                }
            }

            factoryPowerController?.SetOnline();
        }
    }
}
