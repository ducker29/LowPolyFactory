using System;
using UnityEngine;
using UnityEngine.UI;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class CompletionUI : MonoBehaviour
    {
        [SerializeField] GameObject panelRoot;
        [SerializeField] Text titleLabel;
        [SerializeField] Text subtitleLabel;
        [SerializeField] Button primaryButton;
        [SerializeField] string titleText = "Factory Online!";
        [SerializeField] string subtitleText = "Power chain restored.";

        bool primaryFired;
        bool primaryBound;

        public event Action ContinueRequested;

        public bool IsVisible => panelRoot != null && panelRoot.activeSelf;
        public Button PrimaryButton => primaryButton;

        void Awake()
        {
            BindPrimary();
            Hide();
        }

        void OnDestroy()
        {
            UnbindPrimary();
        }

        public void Show()
        {
            BindPrimary();

            if (titleLabel != null)
                titleLabel.text = titleText;

            if (subtitleLabel != null)
                subtitleLabel.text = subtitleText;

            if (panelRoot != null)
                panelRoot.SetActive(true);
        }

        public void Hide()
        {
            if (panelRoot != null)
                panelRoot.SetActive(false);
        }

        public void PressPrimary()
        {
            if (primaryFired)
                return;

            primaryFired = true;
            ContinueRequested?.Invoke();
        }

        void BindPrimary()
        {
            if (primaryBound || primaryButton == null)
                return;

            primaryButton.onClick.AddListener(PressPrimary);
            primaryBound = true;
        }

        void UnbindPrimary()
        {
            if (!primaryBound || primaryButton == null)
                return;

            primaryButton.onClick.RemoveListener(PressPrimary);
            primaryBound = false;
        }
    }
}
