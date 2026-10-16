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

        [SerializeField] Renderer stateVisualRenderer;
        [SerializeField] Material offlineStateMaterial;
        [SerializeField] Material onlineStateMaterial;

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

            ApplyStateVisual(online);
        }

        void ApplyStateVisual(bool online)
        {
            if (stateVisualRenderer == null)
                return;

            Material target = online ? onlineStateMaterial : offlineStateMaterial;
            if (target == null)
                return;

            var materials = stateVisualRenderer.sharedMaterials;
            bool changed = false;
            for (int i = 0; i < materials.Length; i++)
            {
                if (materials[i] == null)
                    continue;
                if (materials[i] != offlineStateMaterial && materials[i] != onlineStateMaterial)
                    continue;
                if (materials[i] == target)
                    continue;
                materials[i] = target;
                changed = true;
            }

            if (changed)
                stateVisualRenderer.sharedMaterials = materials;
        }
    }
}
