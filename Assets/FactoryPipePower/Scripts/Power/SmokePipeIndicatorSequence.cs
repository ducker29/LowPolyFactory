using System;
using System.Collections;
using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class SmokePipeIndicatorSequence : MonoBehaviour
    {
        const float FirstStepTime = 0.5f;
        const float SecondStepTime = 1.0f;
        const float ThirdStepTime = 1.5f;

        enum Phase
        {
            Idle,
            Running,
            Completed
        }

        [SerializeField] FactoryPowerController factory;
        [SerializeField, Tooltip("Slot order: bottom, middle, top.")]
        Renderer[] pipe1Inserts = new Renderer[3];
        [SerializeField, Tooltip("Slot order: bottom, middle, top.")]
        Renderer[] pipe2Inserts = new Renderer[3];
        [SerializeField] Material offlineMaterial;
        [SerializeField] Material onlineMaterial;

        Phase phase = Phase.Idle;
        Coroutine runningRoutine;
        bool subscribed;

        public bool IsRunning => phase == Phase.Running;
        public bool IsCompleted => phase == Phase.Completed;

        public event Action SequenceCompleted;

        void OnEnable()
        {
            TrySubscribeAndSync();
        }

        void Update()
        {
            if (!subscribed)
                TrySubscribeAndSync();
        }

        void OnDisable()
        {
            Unsubscribe();
            StopSequence();
            phase = Phase.Idle;
        }

        void TrySubscribeAndSync()
        {
            if (factory == null)
                return;

            bool wasSubscribed = subscribed;
            Subscribe();

            if (subscribed && !wasSubscribed)
                SyncToFactory();
        }

        void Subscribe()
        {
            if (subscribed || factory == null)
                return;

            factory.FactoryOnline += HandleFactoryOnline;
            factory.FactoryOffline += HandleFactoryOffline;
            subscribed = true;
        }

        void Unsubscribe()
        {
            if (!subscribed)
                return;

            if (factory != null)
            {
                factory.FactoryOnline -= HandleFactoryOnline;
                factory.FactoryOffline -= HandleFactoryOffline;
            }

            subscribed = false;
        }

        void SyncToFactory()
        {
            if (factory == null)
                return;

            if (factory.IsOnline)
                HandleFactoryOnline();
            else
                HandleFactoryOffline();
        }

        void HandleFactoryOnline()
        {
            if (phase != Phase.Idle)
                return;

            StartSequence();
        }

        void HandleFactoryOffline()
        {
            StopSequence();
            phase = Phase.Idle;
            ApplyAll(false);
        }

        void StartSequence()
        {
            phase = Phase.Running;
            ApplyAll(false);

            if (runningRoutine == null)
                runningRoutine = StartCoroutine(RunSequence());
        }

        void StopSequence()
        {
            if (runningRoutine == null)
                return;

            StopCoroutine(runningRoutine);
            runningRoutine = null;
        }

        IEnumerator RunSequence()
        {
            float startedAt = Time.time;

            yield return WaitUntilElapsed(startedAt, FirstStepTime);
            ApplyStep(0, true);

            yield return WaitUntilElapsed(startedAt, SecondStepTime);
            ApplyStep(1, true);

            yield return WaitUntilElapsed(startedAt, ThirdStepTime);
            ApplyStep(2, true);

            runningRoutine = null;
            phase = Phase.Completed;
            SequenceCompleted?.Invoke();
        }

        static IEnumerator WaitUntilElapsed(float startedAt, float elapsed)
        {
            while (Time.time - startedAt < elapsed)
                yield return null;
        }

        void ApplyStep(int step, bool online)
        {
            SetSlot(pipe1Inserts, step, online);
            SetSlot(pipe2Inserts, step, online);
        }

        void ApplyAll(bool online)
        {
            ApplyStep(0, online);
            ApplyStep(1, online);
            ApplyStep(2, online);
        }

        void SetSlot(Renderer[] renderers, int step, bool online)
        {
            if (renderers == null || step < 0 || step >= renderers.Length)
                return;

            SetSlot(renderers[step], online);
        }

        void SetSlot(Renderer renderer, bool online)
        {
            if (renderer == null)
                return;

            Material target = online ? onlineMaterial : offlineMaterial;
            if (target == null)
                return;

            Material[] materials = renderer.sharedMaterials;
            if (materials == null || materials.Length == 0)
                return;

            if (materials[0] == target)
                return;

            materials[0] = target;
            renderer.sharedMaterials = materials;
        }
    }
}
