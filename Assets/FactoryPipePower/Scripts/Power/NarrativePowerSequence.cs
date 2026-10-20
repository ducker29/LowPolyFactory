using System.Collections;
using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public sealed class NarrativePowerSequence : MonoBehaviour
    {
        [Header("Left Chain (StartPowerNode)")]
        [SerializeField] NarrativePipeSegment[] leftSegments;
        [Header("Right Chain (EndPowerNode)")]
        [SerializeField] NarrativePipeSegment[] rightSegments;

        [Header("Chain Nodes")]
        [SerializeField] StartPowerNode startNode;
        [SerializeField] EndPowerNode endNode;
        [SerializeField] FactoryPowerController factoryPowerController;

        [Header("Timing")]
        [SerializeField] float initialDelay = 1f;

        [Header("Tutorial")]
        [SerializeField] bool tutorialControlled;

        Coroutine leftRoutine;
        Coroutine rightRoutine;
        bool rightStarted;

        public float InitialDelay => initialDelay;
        public bool RightStarted => rightStarted;
        public bool LeftRunning => leftRoutine != null;
        public bool RightRunning => rightRoutine != null;
        public bool TutorialControlled => tutorialControlled;
        public StartPowerNode StartNode => startNode;
        public EndPowerNode EndNode => endNode;
        public NarrativePipeSegment[] LeftSegments => leftSegments;
        public NarrativePipeSegment[] RightSegments => rightSegments;

        public void ResetNarrative()
        {
            StopRoutine(ref leftRoutine);
            StopRoutine(ref rightRoutine);
            rightStarted = false;

            ResetSegments(leftSegments);
            ResetSegments(rightSegments);

            if (endNode != null)
                endNode.Initialize();

            if (startNode != null && startNode.DeferPowerActivation)
                startNode.Initialize();
        }

        public void BeginLeftChain()
        {
            ResetNarrative();
            leftRoutine = StartCoroutine(RunLeftChain());
        }

        public void OnEndPowered()
        {
            if (tutorialControlled)
                return;

            BeginRightChain();
        }

        public void BeginRightChain()
        {
            if (rightStarted)
                return;

            rightStarted = true;
            rightRoutine = StartCoroutine(RunRightChain());
        }

        IEnumerator RunLeftChain()
        {
            // Tutorial starts the left chain right after the camera arrives,
            // so the pre-fill delay must not apply there.
            if (initialDelay > 0f && !tutorialControlled)
                yield return new WaitForSeconds(initialDelay);

            if (leftSegments != null)
            {
                foreach (var segment in leftSegments)
                {
                    if (segment == null)
                        continue;

                    yield return segment.FillRoutine();
                }
            }

            if (startNode != null)
                startNode.ProvidePower();

            leftRoutine = null;
        }

        IEnumerator RunRightChain()
        {
            if (rightSegments != null)
            {
                foreach (var segment in rightSegments)
                {
                    if (segment == null)
                        continue;

                    yield return segment.FillRoutine();
                }
            }

            factoryPowerController?.SetOnline();
            rightRoutine = null;
        }

        static void ResetSegments(NarrativePipeSegment[] segments)
        {
            if (segments == null)
                return;

            foreach (var segment in segments)
                if (segment != null)
                    segment.ResetSegment();
        }

        void StopRoutine(ref Coroutine routine)
        {
            if (routine != null)
                StopCoroutine(routine);

            routine = null;
        }
    }
}
