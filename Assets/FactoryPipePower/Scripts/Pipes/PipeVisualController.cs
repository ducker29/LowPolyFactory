using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class PipeVisualController : MonoBehaviour
    {
        const float FlowEpsilon = 1e-5f;

        static readonly int FillId = Shader.PropertyToID("_Fill");
        static readonly int FlowOriginWsId = Shader.PropertyToID("_FlowOriginWS");
        static readonly int FlowDirectionWsId = Shader.PropertyToID("_FlowDirectionWS");
        static readonly int FlowLengthId = Shader.PropertyToID("_FlowLength");

        [SerializeField] MeshRenderer visualRenderer;
        [SerializeField] Material tutorialOverlayMaterial;
        [SerializeField] Material greenFillTemplate;

        Material currentBaseMaterial;
        Material initialBaseMaterial;
        Material greenRuntimeMaterial;
        bool overlayEnabled;
        float fill;
        Vector3 flowStartWorld;
        Vector3 flowEndWorld;
        Vector3 flowDirectionWorld = Vector3.forward;
        float flowLength;
        bool flowConfigured;

        public Material CurrentBaseMaterial => currentBaseMaterial;
        public bool IsTutorialOverlayEnabled => overlayEnabled;
        public bool HasGreenRuntimeMaterial => greenRuntimeMaterial != null;
        public float CurrentFill => fill;
        public bool IsFlowConfigured => flowConfigured;
        public Vector3 FlowStartWorld => flowStartWorld;
        public Vector3 FlowEndWorld => flowEndWorld;
        public Vector3 FlowDirectionWorld => flowDirectionWorld;
        public float FlowLengthWorld => flowLength;

        void Awake()
        {
            CaptureInitialBaseMaterial();
        }

        void OnDestroy()
        {
            ReleaseGreenRuntimeMaterial();
        }

        void CaptureInitialBaseMaterial()
        {
            if (initialBaseMaterial != null || visualRenderer == null)
                return;

            Material[] shared = visualRenderer.sharedMaterials;
            if (shared.Length > 0)
                initialBaseMaterial = shared[0];

            if (currentBaseMaterial == null)
                currentBaseMaterial = initialBaseMaterial;
        }

        public void SetBaseMaterial(Material baseMaterial)
        {
            currentBaseMaterial = baseMaterial;
            ApplyMaterials();
        }

        public void SetTutorialOverlay(bool enabled)
        {
            overlayEnabled = enabled;
            ApplyMaterials();
        }

        public void UseGreenRuntimeMaterial()
        {
            if (greenRuntimeMaterial == null)
            {
                if (greenFillTemplate == null)
                {
                    Debug.LogError($"[PipeVisualController] greenFillTemplate is not assigned on '{name}'.", this);
                    return;
                }

                greenRuntimeMaterial = new Material(greenFillTemplate)
                {
                    name = $"{greenFillTemplate.name} (Runtime {name})"
                };
                greenRuntimeMaterial.SetFloat(FillId, fill);
            }

            if (!flowConfigured && visualRenderer != null)
            {
                Bounds bounds = visualRenderer.bounds;
                Vector3 direction = visualRenderer.transform.forward.normalized;
                float length = bounds.size.magnitude;
                if (length < FlowEpsilon)
                    length = FlowEpsilon;
                ConfigureFlow(bounds.center, bounds.center + direction * length);
            }

            ApplyFlowToRuntimeMaterial();
            SetBaseMaterial(greenRuntimeMaterial);
        }

        public void SetFill(float value)
        {
            fill = Mathf.Clamp01(value);

            if (greenRuntimeMaterial != null)
                greenRuntimeMaterial.SetFloat(FillId, fill);
        }

        public void ConfigureFlow(Vector3 startWorld, Vector3 endWorld)
        {
            flowStartWorld = startWorld;
            flowEndWorld = endWorld;

            Vector3 direction = endWorld - startWorld;
            flowLength = direction.magnitude;
            flowDirectionWorld = flowLength > FlowEpsilon
                ? direction / flowLength
                : Vector3.forward;

            flowConfigured = true;

            ApplyFlowToRuntimeMaterial();
        }

        public void ResetVisual()
        {
            ReleaseGreenRuntimeMaterial();
            fill = 0f;
            flowConfigured = false;
            flowStartWorld = Vector3.zero;
            flowEndWorld = Vector3.zero;
            flowDirectionWorld = Vector3.forward;
            flowLength = 0f;
            overlayEnabled = false;

            CaptureInitialBaseMaterial();
            currentBaseMaterial = initialBaseMaterial;
            ApplyMaterials();
        }

        void ApplyFlowToRuntimeMaterial()
        {
            if (greenRuntimeMaterial == null)
                return;

            greenRuntimeMaterial.SetVector(FlowOriginWsId, flowStartWorld);
            greenRuntimeMaterial.SetVector(FlowDirectionWsId, flowDirectionWorld);
            greenRuntimeMaterial.SetFloat(FlowLengthId, flowLength);
        }

        void ApplyMaterials()
        {
            if (visualRenderer == null)
                return;

            bool withOverlay = overlayEnabled && tutorialOverlayMaterial != null;
            var materials = new Material[withOverlay ? 2 : 1];
            materials[0] = currentBaseMaterial;
            if (withOverlay)
                materials[1] = tutorialOverlayMaterial;

            visualRenderer.sharedMaterials = materials;
        }

        public void ReleaseGreenRuntimeMaterial()
        {
            if (greenRuntimeMaterial == null)
                return;

            if (currentBaseMaterial == greenRuntimeMaterial)
                currentBaseMaterial = null;

            if (Application.isPlaying)
                Destroy(greenRuntimeMaterial);
            else
                DestroyImmediate(greenRuntimeMaterial);

            greenRuntimeMaterial = null;
        }
    }
}
