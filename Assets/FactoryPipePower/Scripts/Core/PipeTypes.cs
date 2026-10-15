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

    public enum PipeShape
    {
        Straight = 0,
        Corner = 1
    }

    [System.Serializable]
    public struct PipeSpec : System.IEquatable<PipeSpec>
    {
        public PipeDiameter diameter;
        public PipeLength length;
        public PipeShape shape;

        public bool Equals(PipeSpec other)
            => diameter == other.diameter && length == other.length && shape == other.shape;

        public override bool Equals(object obj)
            => obj is PipeSpec other && Equals(other);

        public override int GetHashCode()
            => (((int)diameter * 397) ^ (int)length) * 397 ^ (int)shape;

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

    public enum CornerRotationGroup
    {
        Input0Output270 = 0,
        Input90Output0 = 1,
        Input180Output90 = 2,
        Input270Output180 = 3
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
