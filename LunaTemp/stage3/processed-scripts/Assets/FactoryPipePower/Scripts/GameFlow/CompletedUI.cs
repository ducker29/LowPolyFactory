using UnityEngine;
using UnityEngine.UI;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class CompletedUI : MonoBehaviour
    {
        [SerializeField] GameObject panelRoot;
        [SerializeField] Image downloadImage;

        [Header("Download Pulse")]
        [SerializeField] float downloadPulseMin = 0.96f;
        [SerializeField] float downloadPulseMax = 1.04f;
        [SerializeField] float downloadPulsePeriod = 1f;

        public bool IsVisible => panelRoot != null && panelRoot.activeSelf;

        void Awake()
        {
            Hide();
        }

        void Update()
        {
            UpdateDownloadPulse();
        }

        public void Show()
        {
            if (panelRoot != null)
                panelRoot.SetActive(true);
        }

        public void Hide()
        {
            if (panelRoot != null)
                panelRoot.SetActive(false);

            ResetDownloadScale();
        }

        void UpdateDownloadPulse()
        {
            if (downloadImage == null)
                return;

            if (!IsVisible)
                return;

            float period = Mathf.Max(0.01f, downloadPulsePeriod);
            float t = Mathf.PingPong(Time.unscaledTime, period) / period;
            float sine01 = 0.5f - 0.5f * Mathf.Cos(t * Mathf.PI * 2f);
            float multiplier = Mathf.Lerp(downloadPulseMin, downloadPulseMax, sine01);
            downloadImage.rectTransform.localScale = new Vector3(multiplier, multiplier, 1f);
        }

        void ResetDownloadScale()
        {
            if (downloadImage != null)
                downloadImage.rectTransform.localScale = Vector3.one;
        }
    }
}
