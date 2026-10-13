using System;
using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class FactoryPowerController : MonoBehaviour
    {
        [SerializeField] Renderer[] onlineRenderers;
        [SerializeField] GameObject[] onlineIndicators;
        [SerializeField] ParticleSystem[] particleSystems;
        [SerializeField] Animator[] animators;

        FactoryPowerState state = FactoryPowerState.Offline;

        public event Action FactoryOnline;

        public FactoryPowerState State => state;
        public bool IsOnline => state == FactoryPowerState.Online;

        public void Initialize()
        {
            SetOffline();
        }

        public void SetOffline()
        {
            state = FactoryPowerState.Offline;
            Apply(false);
        }

        public void SetOnline()
        {
            if (state == FactoryPowerState.Online)
                return;

            state = FactoryPowerState.Online;
            Apply(true);
            FactoryOnline?.Invoke();
        }

        void Apply(bool online)
        {
            if (onlineRenderers != null)
                foreach (var r in onlineRenderers)
                    if (r != null)
                        r.enabled = online;

            if (onlineIndicators != null)
                foreach (var o in onlineIndicators)
                    if (o != null)
                        o.SetActive(online);

            if (particleSystems != null)
                foreach (var p in particleSystems)
                    if (p != null)
                    {
                        if (online)
                            p.Play();
                        else
                        {
                            p.Stop();
                            p.Clear();
                        }
                    }

            if (animators != null)
                foreach (var a in animators)
                    if (a != null)
                        a.enabled = online;
        }
    }
}
