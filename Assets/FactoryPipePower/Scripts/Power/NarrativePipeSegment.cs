using System.Collections;
using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public sealed class NarrativePipeSegment : MonoBehaviour
    {
        [Header("Visual")]
        [SerializeField] PipeVisualController visual;
        [SerializeField] Transform flowStart;
        [SerializeField] Transform flowEnd;
        [SerializeField] Transform flowElbow;

        [Header("Sparks")]
        [SerializeField] ParticleSystem completionSparks;

        [Header("Timing")]
        [SerializeField] float fillDuration = 0.25f;

        public PipeVisualController Visual => visual;
        public float FillDuration => fillDuration;

        public void ResetSegment()
        {
            if (completionSparks != null)
            {
                completionSparks.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
                completionSparks.Clear();
            }

            if (visual != null)
                visual.ResetVisual();
        }

        public IEnumerator FillRoutine()
        {
            if (visual == null)
                yield break;

            ConfigureFlow();
            visual.UseGreenRuntimeMaterial();
            visual.SetFill(0f);

            if (fillDuration <= 0f)
            {
                visual.SetFill(1f);
                PlayCompletionSparks();
                yield break;
            }

            float elapsed = 0f;
            while (true)
            {
                elapsed += Time.deltaTime;
                float t = Mathf.Clamp01(elapsed / fillDuration);
                visual.SetFill(t);

                if (t >= 1f)
                    break;

                yield return null;
            }

            PlayCompletionSparks();
        }

        public void PlayCompletionSparks()
        {
            if (completionSparks == null)
                return;

            completionSparks.Clear();
            completionSparks.Play(true);
        }

        void ConfigureFlow()
        {
            if (flowStart == null || flowEnd == null)
                return;

            if (flowElbow != null)
                visual.ConfigureCornerFlow(flowStart.position, flowElbow.position, flowEnd.position);
            else
                visual.ConfigureFlow(flowStart.position, flowEnd.position);
        }
    }
}
