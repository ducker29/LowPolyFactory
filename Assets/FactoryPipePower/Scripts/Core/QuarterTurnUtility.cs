using UnityEngine;

namespace FactoryPipePower
{
    public static class QuarterTurnUtility
    {
        public static int GetQuarterTurn(float yaw)
        {
            float normalized = Mathf.Repeat(yaw, 360f);
            return Mathf.RoundToInt(normalized / 90f) & 3;
        }

        public static float QuarterTurnToYaw(int quarterTurn)
        {
            return (quarterTurn & 3) * 90f;
        }

        public static Quaternion QuarterTurnToRotation(int quarterTurn)
        {
            return Quaternion.Euler(0f, QuarterTurnToYaw(quarterTurn), 0f);
        }

        public static bool IsAligned(float yaw, RotationGroup group)
        {
            int q = GetQuarterTurn(yaw);
            switch (group)
            {
                case RotationGroup.Yaw0Or180:
                    return q == 0 || q == 2;
                case RotationGroup.Yaw90Or270:
                    return q == 1 || q == 3;
                default:
                    return false;
            }
        }
    }
}
