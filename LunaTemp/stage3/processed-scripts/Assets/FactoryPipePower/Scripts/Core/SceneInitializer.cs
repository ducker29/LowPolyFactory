using UnityEngine;

namespace FactoryPipePower
{
    [DisallowMultipleComponent]
    public class SceneInitializer : MonoBehaviour
    {
        [SerializeField] PointerInputController pointerInput;
        [SerializeField] PipeSlotRegistry registry;
        [SerializeField] PowerChainController powerChain;
        [SerializeField] TutorialController tutorial;
        [SerializeField] FactoryTutorialController factoryTutorial;
        [SerializeField] PipeSlotController[] slots;

        bool initialized;

        public bool IsInitialized => initialized;

        void Start()
        {
            if (initialized)
                return;

            if (pointerInput == null)
            {
                Debug.LogError("[SceneInitializer] pointerInput is not assigned on '" + name + "'. Initialization aborted.", this);
                return;
            }
            if (registry == null)
            {
                Debug.LogError("[SceneInitializer] registry is not assigned on '" + name + "'. Initialization aborted.", this);
                return;
            }
            if (powerChain == null)
            {
                Debug.LogError("[SceneInitializer] powerChain is not assigned on '" + name + "'. Initialization aborted.", this);
                return;
            }
            if (tutorial == null)
            {
                Debug.LogError("[SceneInitializer] tutorial is not assigned on '" + name + "'. Initialization aborted.", this);
                return;
            }
            if (slots == null || slots.Length == 0)
            {
                Debug.LogError("[SceneInitializer] slots are not assigned on '" + name + "'. Initialization aborted.", this);
                return;
            }

            for (int i = 0; i < slots.Length; i++)
            {
                if (slots[i] == null)
                {
                    Debug.LogError("[SceneInitializer] slots[" + i + "] is null on '" + name + "'. Initialization aborted.", this);
                    return;
                }
            }

            pointerInput.SetInputBlocked(true);

            for (int i = 0; i < slots.Length; i++)
                registry.Register(slots[i]);

            powerChain.Initialize();

            if (factoryTutorial != null)
                factoryTutorial.InitializeTutorial();
            else if (tutorial != null)
                tutorial.InitializeTutorial();

            pointerInput.SetInputBlocked(false);
            initialized = true;
        }
    }
}
