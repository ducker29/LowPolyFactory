using UnityEngine;

namespace FactoryPipePower
{
    public interface IPowerNode
    {
        bool IsPowered { get; }
        Transform PowerOutput { get; }
        void NotifyPreviousPowered(IPowerNode previous);
    }
}
