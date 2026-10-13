using NUnit.Framework;
using UnityEngine;

namespace FactoryPipePower.Tests
{
    public class QuarterTurnUtilityTests
    {
        [TestCase(0f, 0)]
        [TestCase(90f, 1)]
        [TestCase(180f, 2)]
        [TestCase(270f, 3)]
        [TestCase(360f, 0)]
        [TestCase(450f, 1)]
        [TestCase(-90f, 3)]
        [TestCase(-180f, 2)]
        [TestCase(-270f, 1)]
        [TestCase(-360f, 0)]
        [TestCase(0.4f, 0)]
        [TestCase(89.6f, 1)]
        [TestCase(90.4f, 1)]
        [TestCase(179.7f, 2)]
        [TestCase(269.6f, 3)]
        [TestCase(359.6f, 0)]
        [TestCase(-0.4f, 0)]
        [TestCase(-89.6f, 3)]
        [TestCase(-90.4f, 3)]
        [TestCase(-179.7f, 2)]
        [TestCase(-359.6f, 0)]
        public void GetQuarterTurn_NormalizesYaw(float yaw, int expected)
        {
            Assert.AreEqual(expected, QuarterTurnUtility.GetQuarterTurn(yaw));
        }

        [TestCase(0, 0f)]
        [TestCase(1, 90f)]
        [TestCase(2, 180f)]
        [TestCase(3, 270f)]
        [TestCase(4, 0f)]
        [TestCase(5, 90f)]
        [TestCase(-1, 270f)]
        public void QuarterTurnToYaw_WrapsIntoFourOrientations(int quarterTurn, float expectedYaw)
        {
            Assert.AreEqual(expectedYaw, QuarterTurnUtility.QuarterTurnToYaw(quarterTurn));
        }

        [Test]
        public void QuarterTurn_RoundTrip_IsStable()
        {
            for (int q = 0; q < 4; q++)
            {
                float yaw = QuarterTurnUtility.QuarterTurnToYaw(q);
                Assert.AreEqual(q, QuarterTurnUtility.GetQuarterTurn(yaw));
            }
        }

        [TestCase(0f, true)]
        [TestCase(180f, true)]
        [TestCase(360f, true)]
        [TestCase(-180f, true)]
        [TestCase(90f, false)]
        [TestCase(270f, false)]
        [TestCase(-90f, false)]
        [TestCase(450f, false)]
        [TestCase(179.7f, true)]
        [TestCase(-0.4f, true)]
        public void IsAligned_Yaw0Or180(float yaw, bool expected)
        {
            Assert.AreEqual(expected, QuarterTurnUtility.IsAligned(yaw, RotationGroup.Yaw0Or180));
        }

        [TestCase(90f, true)]
        [TestCase(270f, true)]
        [TestCase(450f, true)]
        [TestCase(-90f, true)]
        [TestCase(0f, false)]
        [TestCase(180f, false)]
        [TestCase(360f, false)]
        [TestCase(-180f, false)]
        [TestCase(90.4f, true)]
        [TestCase(-89.6f, true)]
        public void IsAligned_Yaw90Or270(float yaw, bool expected)
        {
            Assert.AreEqual(expected, QuarterTurnUtility.IsAligned(yaw, RotationGroup.Yaw90Or270));
        }

        [TestCase(0f)]
        [TestCase(90f)]
        [TestCase(180f)]
        [TestCase(270f)]
        public void QuarterTurnToRotation_MatchesYaw(float expectedYaw)
        {
            Quaternion rotation = QuarterTurnUtility.QuarterTurnToRotation(
                QuarterTurnUtility.GetQuarterTurn(expectedYaw));
            Vector3 euler = rotation.eulerAngles;
            Assert.AreEqual(expectedYaw, euler.y, 0.001f);
        }
    }
}
