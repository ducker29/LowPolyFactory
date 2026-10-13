namespace FactoryPipePower
{
    public enum PipeDiameter
    {
        Small,
        Large
    }

    public enum PipeLength
    {
        M1 = 1,
        M2 = 2,
        M3 = 3,
        M4 = 4,
        M5 = 5
    }

    [System.Serializable]
    public struct PipeSpec : System.IEquatable<PipeSpec>
    {
        public PipeDiameter diameter;
        public PipeLength length;

        public bool Equals(PipeSpec other)
            => diameter == other.diameter && length == other.length;

        public override bool Equals(object obj)
            => obj is PipeSpec other && Equals(other);

        public override int GetHashCode()
            => ((int)diameter * 397) ^ (int)length;

        public static bool operator ==(PipeSpec left, PipeSpec right)
            => left.Equals(right);

        public static bool operator !=(PipeSpec left, PipeSpec right)
            => !left.Equals(right);
    }

    public enum RotationGroup
    {
        Yaw0Or180,
        Yaw90Or270
    }

    public enum DraggablePipeState
    {
        Stock,
        Dragging,
        Returning,
        Placed
    }

    public enum PipeSlotState
    {
        Empty,
        HoverValid,
        OccupiedWrongRotation,
        OccupiedAligned,
        Charging,
        Powered
    }

    public enum EndPowerState
    {
        Inactive,
        Powered
    }

    public enum FactoryPowerState
    {
        Offline,
        Online
    }
}
