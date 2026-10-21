using UnityEngine;

namespace FactoryPipePower
{
    public static class PipeDirectionsUtility
    {
        public static int NormalizeQuarter(float yawDegrees)
        {
            return QuarterTurnUtility.GetQuarterTurn(yawDegrees) * 90;
        }

        public static int Opposite(int directionDegrees)
        {
            return (NormalizeQuarter(directionDegrees) + 180) % 360;
        }

        public static void GetStraightOpenDirections(int yawQuarterDegrees, out int endA, out int endB)
        {
            int axis = NormalizeQuarter(yawQuarterDegrees);
            endA = axis;
            endB = (axis + 180) % 360;
        }

        public static int GetCornerInput(int yawQuarterDegrees)
        {
            return NormalizeQuarter(yawQuarterDegrees);
        }

        public static int GetCornerOutput(int yawQuarterDegrees)
        {
            return NormalizeQuarter(yawQuarterDegrees + 270f);
        }

        public static CornerRotationGroup GetCurrentCornerGroup(int yawQuarterDegrees)
        {
            int input = GetCornerInput(yawQuarterDegrees);
            int output = GetCornerOutput(yawQuarterDegrees);

            if (input == 0 && output == 270)
                return CornerRotationGroup.Input0Output270;
            if (input == 90 && output == 0)
                return CornerRotationGroup.Input90Output0;
            if (input == 180 && output == 90)
                return CornerRotationGroup.Input180Output90;
            return CornerRotationGroup.Input270Output180;
        }

        public static bool IsOpenDirection(PipeShape shape, int yawQuarterDegrees, int directionDegrees)
        {
            int direction = NormalizeQuarter(directionDegrees);

            if (shape == PipeShape.Corner)
                return direction == GetCornerInput(yawQuarterDegrees)
                    || direction == GetCornerOutput(yawQuarterDegrees);

            GetStraightOpenDirections(yawQuarterDegrees, out int endA, out int endB);
            return direction == endA || direction == endB;
        }

        public static bool AreNeighboursCompatible(
            PipeShape previousShape,
            int previousYawQuarterDegrees,
            PipeShape currentShape,
            int currentYawQuarterDegrees)
        {
            if (currentShape == PipeShape.Corner)
            {
                int input = GetCornerInput(currentYawQuarterDegrees);
                int output = GetCornerOutput(currentYawQuarterDegrees);

                if (previousShape == PipeShape.Corner)
                {
                    int previousInput = GetCornerInput(previousYawQuarterDegrees);
                    int previousOutput = GetCornerOutput(previousYawQuarterDegrees);
                    return Opposite(previousOutput) == input
                        || Opposite(previousInput) == input
                        || Opposite(previousOutput) == output
                        || Opposite(previousInput) == output;
                }

                return IsOpenDirection(previousShape, previousYawQuarterDegrees, Opposite(input))
                    || IsOpenDirection(previousShape, previousYawQuarterDegrees, Opposite(output));
            }

            if (previousShape == PipeShape.Corner)
            {
                int output = GetCornerOutput(previousYawQuarterDegrees);
                int input = GetCornerInput(previousYawQuarterDegrees);
                return IsOpenDirection(currentShape, currentYawQuarterDegrees, Opposite(output))
                    || IsOpenDirection(currentShape, currentYawQuarterDegrees, Opposite(input));
            }

            GetStraightOpenDirections(previousYawQuarterDegrees, out int previousEndA, out int previousEndB);
            return IsOpenDirection(currentShape, currentYawQuarterDegrees, Opposite(previousEndA))
                || IsOpenDirection(currentShape, currentYawQuarterDegrees, Opposite(previousEndB));
        }

        public static bool TryGetDirectionVector(int directionDegrees, out Vector3 direction)
        {
            switch (NormalizeQuarter(directionDegrees))
            {
                case 0:
                    direction = Vector3.forward;
                    return true;
                case 90:
                    direction = Vector3.right;
                    return true;
                case 180:
                    direction = Vector3.back;
                    return true;
                case 270:
                    direction = Vector3.left;
                    return true;
                default:
                    direction = Vector3.zero;
                    return false;
            }
        }

        public static bool TryGetStraightEndByPosition(
            int currentYawQuarterDegrees,
            Vector3 currentPosition,
            Vector3 neighbourPosition,
            out int endDegrees)
        {
            endDegrees = 0;

            GetStraightOpenDirections(currentYawQuarterDegrees, out int endA, out int endB);

            if (!TryGetDirectionVector(endA, out Vector3 axis))
                return false;

            float projection = Vector3.Dot(neighbourPosition - currentPosition, axis);

            if (Mathf.Abs(projection) <= 1e-4f)
                return false;

            endDegrees = projection > 0f ? endA : endB;
            return true;
        }

        public static bool TryGetConsumedEndOnCurrent(
            PipeShape neighbourShape,
            int neighbourYawQuarterDegrees,
            int currentYawQuarterDegrees,
            Vector3 currentPosition,
            Vector3 neighbourPosition,
            out int consumedEndDegrees)
        {
            consumedEndDegrees = 0;

            if (!TryGetStraightEndByPosition(
                    currentYawQuarterDegrees, currentPosition, neighbourPosition, out int endByPosition))
                return false;

            if (neighbourShape != PipeShape.Corner)
            {
                consumedEndDegrees = endByPosition;
                return true;
            }

            int endByPortOutput = Opposite(GetCornerOutput(neighbourYawQuarterDegrees));
            int endByPortInput = Opposite(GetCornerInput(neighbourYawQuarterDegrees));

            if (endByPortOutput != endByPosition && endByPortInput != endByPosition)
                return false;

            consumedEndDegrees = endByPosition;
            return true;
        }

        public static bool AreSegmentLinksDistinct(
            PipeShape previousShape,
            int previousYawQuarterDegrees,
            Vector3 previousPosition,
            PipeShape currentShape,
            int currentYawQuarterDegrees,
            Vector3 currentPosition,
            PipeShape nextShape,
            int nextYawQuarterDegrees,
            Vector3 nextPosition)
        {
            if (currentShape != PipeShape.Straight)
                return true;

            if (!TryGetConsumedEndOnCurrent(
                    previousShape, previousYawQuarterDegrees,
                    currentYawQuarterDegrees, currentPosition, previousPosition,
                    out int previousEnd))
                return false;

            if (!TryGetConsumedEndOnCurrent(
                    nextShape, nextYawQuarterDegrees,
                    currentYawQuarterDegrees, currentPosition, nextPosition,
                    out int nextEnd))
                return false;

            return previousEnd != nextEnd;
        }
    }
}
