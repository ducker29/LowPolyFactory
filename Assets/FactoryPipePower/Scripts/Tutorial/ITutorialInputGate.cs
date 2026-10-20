using UnityEngine;

namespace FactoryPipePower
{
    public interface ITutorialInputGate
    {
        bool IsGateActive { get; }
        bool TryConsumeAdvancePress(Vector2 screenPosition);
        bool IsPipeAllowed(DraggablePipeController pipe);
        bool IsSlotTapAllowed(PipeSlotController slot);
    }
}
