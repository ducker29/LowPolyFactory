using NUnit.Framework;

namespace FactoryPipePower.Tests
{
    public class PipeSpecTests
    {
        [Test]
        public void Equals_SameDiameterAndLength_IsTrue()
        {
            var a = new PipeSpec { diameter = PipeDiameter.Small, length = PipeLength.M2 };
            var b = new PipeSpec { diameter = PipeDiameter.Small, length = PipeLength.M2 };

            Assert.IsTrue(a.Equals(b));
            Assert.IsTrue(a == b);
        }

        [Test]
        public void Equals_DifferentDiameter_IsFalse()
        {
            var a = new PipeSpec { diameter = PipeDiameter.Small, length = PipeLength.M2 };
            var b = new PipeSpec { diameter = PipeDiameter.Large, length = PipeLength.M2 };

            Assert.IsFalse(a.Equals(b));
            Assert.IsTrue(a != b);
        }

        [Test]
        public void Equals_DifferentLength_IsFalse()
        {
            var a = new PipeSpec { diameter = PipeDiameter.Small, length = PipeLength.M2 };
            var b = new PipeSpec { diameter = PipeDiameter.Small, length = PipeLength.M3 };

            Assert.IsFalse(a.Equals(b));
            Assert.IsTrue(a != b);
        }

        [TestCase(PipeDiameter.Small, PipeLength.M1)]
        [TestCase(PipeDiameter.Small, PipeLength.M5)]
        [TestCase(PipeDiameter.Large, PipeLength.M1)]
        [TestCase(PipeDiameter.Large, PipeLength.M5)]
        public void Equals_RoundTrip_IsConsistent(PipeDiameter diameter, PipeLength length)
        {
            var a = new PipeSpec { diameter = diameter, length = length };
            var b = new PipeSpec { diameter = diameter, length = length };

            Assert.IsTrue(a.Equals(b));
            Assert.AreEqual(a.GetHashCode(), b.GetHashCode());
        }

        [Test]
        public void PipeLength_ValuesMatchSpecification()
        {
            Assert.AreEqual(1, (int)PipeLength.M1);
            Assert.AreEqual(2, (int)PipeLength.M2);
            Assert.AreEqual(3, (int)PipeLength.M3);
            Assert.AreEqual(4, (int)PipeLength.M4);
            Assert.AreEqual(5, (int)PipeLength.M5);
        }
    }
}
