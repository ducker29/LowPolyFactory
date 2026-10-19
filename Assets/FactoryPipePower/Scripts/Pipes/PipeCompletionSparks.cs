using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class PipeCompletionSparks : MonoBehaviour
    {
        [SerializeField] ParticleSystem sparksA;
        [SerializeField] ParticleSystem sparksB;

        public ParticleSystem SparksA => sparksA;
        public ParticleSystem SparksB => sparksB;
        public bool HasBothReferences => sparksA != null && sparksB != null;

        public void PlayCompletion(bool endIsB)
        {
            ParticleSystem chosen = endIsB ? sparksB : sparksA;
            ParticleSystem other = endIsB ? sparksA : sparksB;

            if (other != null)
            {
                other.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
                other.Clear(true);
            }

            if (chosen == null)
            {
                Debug.LogWarning(
                    $"[PipeCompletionSparks] completion system is not assigned on '{name}'.", this);
                return;
            }

            chosen.Clear(true);
            chosen.Play(true);
        }

        public void StopAndClear()
        {
            StopOne(sparksA);
            StopOne(sparksB);
        }

        static void StopOne(ParticleSystem system)
        {
            if (system == null)
                return;

            system.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
            system.Clear(true);
        }
    }
}
