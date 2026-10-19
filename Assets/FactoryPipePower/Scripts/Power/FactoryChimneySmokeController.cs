using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class FactoryChimneySmokeController : MonoBehaviour
    {
        [SerializeField] FactoryPowerController factory;
        [SerializeField] SmokePipeIndicatorSequence indicatorSequence;
        [SerializeField] ParticleSystem pipe1Smoke;
        [SerializeField] ParticleSystem pipe2Smoke;

        bool subscribedFactory;
        bool subscribedSequence;
        bool emissionRunning;

        public bool IsEmitting => emissionRunning;

        void OnEnable()
        {
            TrySubscribe();
        }

        void Update()
        {
            if (!subscribedFactory || !subscribedSequence)
                TrySubscribe();
        }

        void OnDisable()
        {
            Unsubscribe();
            StopEmission(true);
        }

        void TrySubscribe()
        {
            if (!subscribedFactory && factory != null)
            {
                factory.FactoryOffline += HandleFactoryOffline;
                subscribedFactory = true;
            }

            if (!subscribedSequence && indicatorSequence != null)
            {
                indicatorSequence.SequenceCompleted += HandleSequenceCompleted;
                subscribedSequence = true;
            }

            if (subscribedSequence)
                SyncToSequence();
        }

        void Unsubscribe()
        {
            if (subscribedFactory && factory != null)
                factory.FactoryOffline -= HandleFactoryOffline;

            if (subscribedSequence && indicatorSequence != null)
                indicatorSequence.SequenceCompleted -= HandleSequenceCompleted;

            subscribedFactory = false;
            subscribedSequence = false;
        }

        void SyncToSequence()
        {
            if (emissionRunning)
                return;

            if (indicatorSequence.IsCompleted)
                StartEmission();
            else
                StopEmission(true);
        }

        void HandleSequenceCompleted()
        {
            StartEmission();
        }

        void HandleFactoryOffline()
        {
            StopEmission(false);
        }

        void StartEmission()
        {
            if (emissionRunning)
                return;

            emissionRunning = true;

            Play(pipe1Smoke);
            Play(pipe2Smoke);
        }

        void StopEmission(bool clear)
        {
            emissionRunning = false;

            Stop(pipe1Smoke, clear);
            Stop(pipe2Smoke, clear);
        }

        static void Play(ParticleSystem system)
        {
            if (system == null)
                return;

            system.Play(true);
        }

        static void Stop(ParticleSystem system, bool clear)
        {
            if (system == null)
                return;

            if (clear)
                system.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
            else
                system.Stop(true, ParticleSystemStopBehavior.StopEmitting);
        }
    }
}
