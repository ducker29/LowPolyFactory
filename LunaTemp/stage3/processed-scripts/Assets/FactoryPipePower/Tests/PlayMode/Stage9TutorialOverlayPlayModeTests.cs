using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using System.Text.RegularExpressions;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEditor;
using FactoryPipePower;

namespace FactoryPipePower.PlayModeTests
{
    public class Stage9TutorialOverlayPlayModeTests
    {
        const string SlotSmallPath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Small_M2.prefab";
        const string PipeSmallPath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Small_M2.prefab";
        const string PipeLargePath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Large_M3.prefab";
        const string TutorialMatPath = "Assets/FactoryPipePower/Materials/M_TutorialOverlay.mat";
        const string TutorialShaderPath = "Assets/FactoryPipePower/Shaders/TutorialOverlay.shader";
        const string PipeDefaultMatPath = "Assets/FactoryPipePower/Materials/M_Pipe_Default.mat";
        const string SlotEmptyMatPath = "Assets/FactoryPipePower/Materials/M_Slot_Empty.mat";
        const string SlotHoverMatPath = "Assets/FactoryPipePower/Materials/M_Slot_HoverValid.mat";
        const string SlotWrongMatPath = "Assets/FactoryPipePower/Materials/M_Slot_Wrong.mat";

        static readonly Vector3 PipePos = new Vector3(0f, 1f, -6f);
        static readonly Vector3 SlotPos = new Vector3(0f, 0f, -3f);
        static readonly Vector3 ForeignPipePos = new Vector3(3f, 1f, -6f);
        static readonly Vector3 ForeignSlotPos = new Vector3(3f, 0f, -3f);

        readonly List<GameObject> spawned = new List<GameObject>();
        Camera cam;
        GameObject cameraGo;
        bool previousRunInBackground;

        class FakePoweredNode : MonoBehaviour, IPowerNode
        {
            public bool IsPowered => true;
            public Transform PowerOutput => transform;
            public void NotifyPreviousPowered(IPowerNode previous) { }
        }

        [SetUp]
        public void SetUp()
        {
            previousRunInBackground = Application.runInBackground;
            Application.runInBackground = true;
            cameraGo = new GameObject("S9_Camera");
            cam = cameraGo.AddComponent<Camera>();
            cam.tag = "MainCamera";
            cam.transform.position = new Vector3(0f, 1.5f, -12f);
            cam.transform.rotation = Quaternion.identity;
            cam.nearClipPlane = 0.01f;
            cam.farClipPlane = 200f;
        }

        [TearDown]
        public void TearDown()
        {
            foreach (var go in spawned)
                if (go != null) Object.DestroyImmediate(go);
            spawned.Clear();

            if (cameraGo != null)
            {
                Object.DestroyImmediate(cameraGo);
                cameraGo = null;
                cam = null;
            }
            Application.runInBackground = previousRunInBackground;
        }

        // ---------- Helpers ----------

        GameObject Spawn(string path, Vector3 position, float yaw)
        {
            var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
            Assert.IsNotNull(prefab, "Prefab missing: " + path);
            var go = Object.Instantiate(prefab);
            go.transform.SetPositionAndRotation(position, Quaternion.Euler(0f, yaw, 0f));
            spawned.Add(go);
            return go;
        }

        DraggablePipeController SpawnPipe(Vector3 position, float yaw)
        {
            return Spawn(PipeSmallPath, position, yaw).GetComponent<DraggablePipeController>();
        }

        PipeSlotController SpawnSlot(Vector3 position, float yaw)
        {
            return Spawn(SlotSmallPath, position, yaw).GetComponent<PipeSlotController>();
        }

        TutorialController CreateTutorial(DraggablePipeController pipe, PipeSlotController slot)
        {
            var go = new GameObject("S9_Tutorial");
            go.SetActive(false);
            spawned.Add(go);

            var tut = go.AddComponent<TutorialController>();
            var so = new SerializedObject(tut);
            so.FindProperty("tutorialPipe").objectReferenceValue = pipe;
            so.FindProperty("tutorialSlot").objectReferenceValue = slot;
            so.ApplyModifiedPropertiesWithoutUndo();

            go.SetActive(true);
            return tut;
        }

        void SetRotationDuration(PipeSlotController slot, float duration)
        {
            var so = new SerializedObject(slot);
            so.FindProperty("rotationDuration").floatValue = duration;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        MeshRenderer RendererOf(PipeVisualController vis)
        {
            var mr = vis.GetComponent<MeshRenderer>();
            if (mr == null)
                mr = vis.GetComponentInChildren<MeshRenderer>();
            Assert.IsNotNull(mr, "visual renderer missing on " + vis.name);
            return mr;
        }

        void BeginDrag(DraggablePipeController pipe)
        {
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.AreEqual(DraggablePipeState.Dragging, pipe.State, "BeginDrag must start dragging");
        }

        static int HandlerCount(object target, string eventName)
        {
            var flags = BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public;
            var field = target.GetType().GetField(eventName, flags);
            Assert.IsNotNull(field, "event backing field not found: " + eventName);
            var del = field.GetValue(target) as System.Delegate;
            return del == null ? 0 : del.GetInvocationList().Length;
        }

        Material LoadTutorialMaterial()
        {
            var mat = AssetDatabase.LoadAssetAtPath<Material>(TutorialMatPath);
            Assert.IsNotNull(mat, "M_TutorialOverlay missing");
            return mat;
        }

        Shader LoadTutorialShader()
        {
            var shader = AssetDatabase.LoadAssetAtPath<Shader>(TutorialShaderPath);
            Assert.IsNotNull(shader, "TutorialOverlay shader missing");
            return shader;
        }

        static Material LoadMaterial(string path)
        {
            var mat = AssetDatabase.LoadAssetAtPath<Material>(path);
            Assert.IsNotNull(mat, "Material missing: " + path);
            return mat;
        }

        IEnumerator WaitUntil(System.Func<bool> condition, float timeoutSeconds, string message)
        {
            float elapsed = 0f;
            while (!condition() && elapsed < timeoutSeconds)
            {
                elapsed += Time.deltaTime;
                yield return null;
            }
            Assert.IsTrue(condition(), message);
        }

        IEnumerator WaitFrames(int count)
        {
            for (int i = 0; i < count; i++)
                yield return null;
        }

        (DraggablePipeController pipe, PipeSlotController slot, TutorialController tut)
            CreateValidSetup(float pipeYaw)
        {
            var pipe = SpawnPipe(PipePos, pipeYaw);
            var slot = SpawnSlot(SlotPos, 0f);
            var tut = CreateTutorial(pipe, slot);
            return (pipe, slot, tut);
        }

        void DragTutorialPipe(DraggablePipeController pipe)
        {
            BeginDrag(pipe);
        }

        // ---------- Shader ----------

        [UnityTest]
        public IEnumerator TutorialOverlay_UsesFinalShader()
        {
            var mat = LoadTutorialMaterial();
            Assert.AreEqual("FactoryPipePower/TutorialOverlay", mat.shader.name,
                "M_TutorialOverlay must use FactoryPipePower/TutorialOverlay");
            yield return null;
        }

        [UnityTest]
        public IEnumerator TutorialOverlayShader_HasAllRequiredProperties()
        {
            var shader = LoadTutorialShader();
            string[] required = { "_OverlayColor", "_MinAlpha", "_MaxAlpha", "_PulseSpeed", "_EmissionStrength", "_DepthOffset" };
            foreach (var prop in required)
                Assert.GreaterOrEqual(shader.FindPropertyIndex(prop), 0, "missing shader property: " + prop);
            yield return null;
        }

        [UnityTest]
        public IEnumerator TutorialOverlayShader_IsSupported_NoErrors()
        {
            var shader = LoadTutorialShader();
            Assert.IsTrue(shader.isSupported, "TutorialOverlay shader must be supported");
            Assert.IsFalse(UnityEditor.ShaderUtil.ShaderHasError(shader), "TutorialOverlay shader must have no errors");
            yield return null;
        }

        [UnityTest]
        public IEnumerator TutorialOverlayMaterial_TransparentQueue_LaterThanBaseMaterials()
        {
            var overlay = LoadTutorialMaterial();
            int queue = overlay.renderQueue;
            Assert.GreaterOrEqual(queue, 3000, "overlay must be in transparent queue range");

            string[] baseMats = { PipeDefaultMatPath, SlotEmptyMatPath, SlotHoverMatPath, SlotWrongMatPath };
            foreach (var path in baseMats)
            {
                var baseMat = LoadMaterial(path);
                Assert.Greater(queue, baseMat.renderQueue,
                    $"overlay queue must be later than {baseMat.name} ({baseMat.renderQueue})");
            }
            yield return null;
        }

        [UnityTest]
        public IEnumerator TutorialOverlay_SecondMaterialSlot_OnOff()
        {
            var pipe = SpawnPipe(PipePos, 0f);
            var vis = pipe.Visual;
            var renderer = RendererOf(vis);
            var overlayAsset = LoadTutorialMaterial();

            vis.SetTutorialOverlay(true);
            Material[] on = renderer.sharedMaterials;
            Assert.AreEqual(2, on.Length, "overlay ON must add a second material slot");
            Assert.IsTrue(ReferenceEquals(on[1], overlayAsset), "second slot must be M_TutorialOverlay");

            vis.SetTutorialOverlay(false);
            Material[] off = renderer.sharedMaterials;
            Assert.AreEqual(1, off.Length, "overlay OFF must return to a single base material");
            yield return null;
        }

        // ---------- Initialization ----------

        [UnityTest]
        public IEnumerator Initialize_ValidSetup_HighlightPipe_OverlayOnlyOnPipe()
        {
            var foreignPipe = SpawnPipe(ForeignPipePos, 0f);
            var (pipe, slot, tut) = CreateValidSetup(0f);

            tut.InitializeTutorial();

            Assert.AreEqual(TutorialStep.HighlightPipe, tut.CurrentStep);
            Assert.IsTrue(pipe.Visual.IsTutorialOverlayEnabled, "tutorial pipe must get the overlay");
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled, "slot must not get overlay at HighlightPipe");
            Assert.IsFalse(foreignPipe.Visual.IsTutorialOverlayEnabled, "foreign pipe must not get overlay");
            yield return null;
        }

        [UnityTest]
        public IEnumerator Initialize_NullPipeOrSlot_None_NoException_OverlaysOff()
        {
            // Case A: pipe assigned, slot null.
            var pipeA = SpawnPipe(PipePos, 0f);
            var tutA = CreateTutorial(pipeA, null);
            pipeA.Visual.SetTutorialOverlay(true);
            tutA.InitializeTutorial();
            Assert.AreEqual(TutorialStep.None, tutA.CurrentStep);
            Assert.IsFalse(pipeA.Visual.IsTutorialOverlayEnabled, "pipe overlay must be cleared on invalid setup");

            // Case B: slot assigned, pipe null.
            var slotB = SpawnSlot(SlotPos, 0f);
            var tutB = CreateTutorial(null, slotB);
            slotB.Visual.SetTutorialOverlay(true);
            tutB.InitializeTutorial();
            Assert.AreEqual(TutorialStep.None, tutB.CurrentStep);
            Assert.IsFalse(slotB.Visual.IsTutorialOverlayEnabled, "slot overlay must be cleared on invalid setup");

            LogAssert.NoUnexpectedReceived();
            yield return null;
        }

        [UnityTest]
        public IEnumerator Initialize_IncompatibleSpec_None_OneError_OverlaysOff()
        {
            LogAssert.Expect(LogType.Error, new Regex("Tutorial configuration error"));

            var smallSlot = SpawnSlot(SlotPos, 0f);
            var largePipe = Spawn(PipeLargePath, PipePos, 0f).GetComponent<DraggablePipeController>();
            var tut = CreateTutorial(largePipe, smallSlot);
            largePipe.Visual.SetTutorialOverlay(true);

            tut.InitializeTutorial();

            Assert.AreEqual(TutorialStep.None, tut.CurrentStep);
            Assert.IsFalse(largePipe.Visual.IsTutorialOverlayEnabled);
            Assert.IsFalse(smallSlot.Visual.IsTutorialOverlayEnabled);
            yield return null;
        }

        [UnityTest]
        public IEnumerator Initialize_Twice_NoDuplicateSubscriptions_NoDuplicateOverlay()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);

            tut.InitializeTutorial();
            tut.InitializeTutorial();

            Assert.AreEqual(TutorialStep.HighlightPipe, tut.CurrentStep);
            Assert.AreEqual(1, HandlerCount(pipe, "DragStarted"), "no duplicate DragStarted subscription");
            Assert.AreEqual(1, HandlerCount(pipe, "ReturnedToStock"), "no duplicate ReturnedToStock subscription");
            Assert.AreEqual(1, HandlerCount(slot, "StateChanged"), "no duplicate StateChanged subscription");

            Assert.AreEqual(2, RendererOf(pipe.Visual).sharedMaterials.Length,
                "no duplicate overlay material entries");
            yield return null;
        }

        // ---------- Flow ----------

        [UnityTest]
        public IEnumerator DragTutorialPipe_HighlightSlot_PipeOverlayOff_SlotOverlayOn()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            tut.InitializeTutorial();

            DragTutorialPipe(pipe);

            Assert.AreEqual(TutorialStep.HighlightSlot, tut.CurrentStep);
            Assert.IsFalse(pipe.Visual.IsTutorialOverlayEnabled, "pipe overlay must be cleared on drag");
            Assert.IsTrue(slot.Visual.IsTutorialOverlayEnabled, "slot overlay must turn on at HighlightSlot");
            yield return null;
        }

        [UnityTest]
        public IEnumerator DragForeignPipe_DoesNotChangeTutorial()
        {
            var foreignPipe = SpawnPipe(ForeignPipePos, 0f);
            var (pipe, slot, tut) = CreateValidSetup(0f);
            tut.InitializeTutorial();

            BeginDrag(foreignPipe);

            Assert.AreEqual(TutorialStep.HighlightPipe, tut.CurrentStep, "foreign drag must not move the tutorial");
            Assert.IsTrue(pipe.Visual.IsTutorialOverlayEnabled, "tutorial pipe overlay must stay on");
            Assert.IsFalse(foreignPipe.Visual.IsTutorialOverlayEnabled);
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled);
            yield return null;
        }

        [UnityTest]
        public IEnumerator ReturnToStock_HighlightPipe_SlotOff_PipeOn()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            tut.InitializeTutorial();

            DragTutorialPipe(pipe);
            Assert.AreEqual(TutorialStep.HighlightSlot, tut.CurrentStep);

            pipe.EndDragWithoutPlacement();

            Assert.AreEqual(TutorialStep.HighlightPipe, tut.CurrentStep,
                "returning pipe must bring the tutorial back to HighlightPipe");
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled, "slot overlay must be cleared");
            Assert.IsTrue(pipe.Visual.IsTutorialOverlayEnabled, "pipe overlay must be back on");
            yield return null;
        }

        [UnityTest]
        public IEnumerator PlaceWrongYaw_HighlightRotation_SlotOverlayOn()
        {
            var (pipe, slot, tut) = CreateValidSetup(90f);
            tut.InitializeTutorial();

            DragTutorialPipe(pipe);
            Assert.IsTrue(slot.TryAccept(pipe), "wrong-yaw placement must be accepted");

            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);
            Assert.AreEqual(TutorialStep.HighlightRotation, tut.CurrentStep,
                "wrong-yaw placement must move the tutorial to HighlightRotation");
            Assert.IsTrue(slot.Visual.IsTutorialOverlayEnabled, "slot overlay must stay on for rotation");
            Assert.IsFalse(pipe.Visual.IsTutorialOverlayEnabled);
            yield return null;
        }

        [UnityTest]
        public IEnumerator PlaceAligned_Complete_AllOverlaysOff()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            tut.InitializeTutorial();

            DragTutorialPipe(pipe);
            Assert.IsTrue(slot.TryAccept(pipe), "aligned placement must be accepted");

            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
            Assert.AreEqual(TutorialStep.Complete, tut.CurrentStep,
                "already-aligned placement must complete the tutorial");
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled);
            Assert.IsFalse(pipe.Visual.IsTutorialOverlayEnabled);
            yield return null;
        }

        [UnityTest]
        public IEnumerator ForeignSlotAccept_DoesNotChangeTutorial()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            tut.InitializeTutorial();
            DragTutorialPipe(pipe);
            Assert.AreEqual(TutorialStep.HighlightSlot, tut.CurrentStep);

            var foreignPipe = SpawnPipe(ForeignPipePos, 90f);
            var foreignSlot = SpawnSlot(ForeignSlotPos, 0f);
            BeginDrag(foreignPipe);
            Assert.IsTrue(foreignSlot.TryAccept(foreignPipe), "foreign slot must accept the foreign pipe");

            Assert.AreEqual(TutorialStep.HighlightSlot, tut.CurrentStep, "foreign accept must not move the tutorial");
            Assert.IsTrue(slot.Visual.IsTutorialOverlayEnabled, "tutorial slot overlay must stay on");
            yield return null;
        }

        [UnityTest]
        public IEnumerator RotateWrongToAligned_Complete_AllOverlaysOff()
        {
            var (pipe, slot, tut) = CreateValidSetup(90f);
            SetRotationDuration(slot, 0.05f);
            tut.InitializeTutorial();

            DragTutorialPipe(pipe);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(TutorialStep.HighlightRotation, tut.CurrentStep);
            Assert.IsTrue(slot.Visual.IsTutorialOverlayEnabled);

            Assert.IsTrue(slot.TryRotateTap(), "rotation tap must be accepted");

            yield return WaitUntil(() => tut.CurrentStep == TutorialStep.Complete, 5f,
                "aligned rotation must complete the tutorial");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled, "slot overlay must be cleared on Complete");
            Assert.IsFalse(pipe.Visual.IsTutorialOverlayEnabled);
        }

        [UnityTest]
        public IEnumerator ForeignSlotRotation_DoesNotChangeTutorial()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            SetRotationDuration(slot, 0.05f);
            tut.InitializeTutorial();
            DragTutorialPipe(pipe);
            Assert.AreEqual(TutorialStep.HighlightSlot, tut.CurrentStep);

            var foreignPipe = SpawnPipe(ForeignPipePos, 90f);
            var foreignSlot = SpawnSlot(ForeignSlotPos, 0f);
            SetRotationDuration(foreignSlot, 0.05f);
            BeginDrag(foreignPipe);
            Assert.IsTrue(foreignSlot.TryAccept(foreignPipe));
            Assert.IsTrue(foreignSlot.TryRotateTap());

            yield return WaitUntil(() => foreignSlot.State == PipeSlotState.OccupiedAligned, 5f,
                "foreign slot must finish rotating");

            Assert.AreEqual(TutorialStep.HighlightSlot, tut.CurrentStep,
                "foreign rotation must not move the tutorial");
            Assert.IsTrue(slot.Visual.IsTutorialOverlayEnabled, "tutorial slot overlay must stay on");
        }

        [UnityTest]
        public IEnumerator Complete_DoesNotReactivate_FromLateEvents()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            SetRotationDuration(slot, 0.05f);
            tut.InitializeTutorial();

            DragTutorialPipe(pipe);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(TutorialStep.Complete, tut.CurrentStep);

            // Late events that would otherwise re-trigger a non-completed tutorial.
            slot.ResetSlot();
            Assert.AreEqual(PipeSlotState.Empty, slot.State);

            Assert.AreEqual(TutorialStep.Complete, tut.CurrentStep, "tutorial must stay Complete after late events");
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled);
            Assert.IsFalse(pipe.Visual.IsTutorialOverlayEnabled);
            yield return null;
        }

        [UnityTest]
        public IEnumerator ChargingPowered_SlotGetsNoTutorialOverlay()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            BeginDrag(pipe);
            Assert.IsTrue(slot.TryAccept(pipe));
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);

            var previous = new GameObject("S9_FakePowered");
            previous.transform.position = new Vector3(0f, 0f, 0f);
            spawned.Add(previous);
            var fake = previous.AddComponent<FakePoweredNode>();
            slot.SetupPowerNodes(fake, null);

            // Tutorial initialized late: slot is already aligned and about to charge.
            var so = new SerializedObject(slot);
            so.FindProperty("chargingDuration").floatValue = 0.05f;
            so.ApplyModifiedPropertiesWithoutUndo();

            tut.InitializeTutorial();
            Assert.AreEqual(TutorialStep.HighlightPipe, tut.CurrentStep);

            slot.TryStartCharging();
            Assert.AreEqual(PipeSlotState.Charging, slot.State);
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled, "Charging slot must not get a tutorial overlay");

            yield return WaitUntil(() => slot.State == PipeSlotState.Powered, 5f, "slot must power");
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled, "Powered slot must not get a tutorial overlay");
            Assert.AreEqual(TutorialStep.HighlightPipe, tut.CurrentStep, "powering must not move the tutorial");
        }

        // ---------- Lifecycle ----------

        [UnityTest]
        public IEnumerator DisableTutorial_Idempotent_RemovesOverlays()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            tut.InitializeTutorial();
            Assert.IsTrue(pipe.Visual.IsTutorialOverlayEnabled);

            tut.DisableTutorial();
            Assert.AreEqual(TutorialStep.None, tut.CurrentStep);
            Assert.IsFalse(pipe.Visual.IsTutorialOverlayEnabled);
            Assert.IsFalse(slot.Visual.IsTutorialOverlayEnabled);

            tut.DisableTutorial(); // повторный вызов безопасен
            Assert.AreEqual(TutorialStep.None, tut.CurrentStep);
            Assert.IsFalse(pipe.Visual.IsTutorialOverlayEnabled);
            yield return null;
        }

        [UnityTest]
        public IEnumerator EnableDisableLifecycle_NoDuplicateSubscriptions()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            tut.InitializeTutorial();

            var tutGo = tut.gameObject;
            tutGo.SetActive(false);
            tutGo.SetActive(true);

            Assert.AreEqual(TutorialStep.HighlightPipe, tut.CurrentStep, "re-enable must keep the active step");
            Assert.AreEqual(1, HandlerCount(pipe, "DragStarted"), "no duplicate DragStarted after lifecycle toggle");
            Assert.AreEqual(1, HandlerCount(pipe, "ReturnedToStock"), "no duplicate ReturnedToStock after toggle");
            Assert.AreEqual(1, HandlerCount(slot, "StateChanged"), "no duplicate StateChanged after toggle");

            DragTutorialPipe(pipe);
            Assert.AreEqual(TutorialStep.HighlightSlot, tut.CurrentStep, "tutorial must still react after re-enable");
            Assert.IsTrue(slot.Visual.IsTutorialOverlayEnabled);
            yield return null;
        }

        [UnityTest]
        public IEnumerator TutorialOverlay_DoesNotChangeBaseMaterialFillFlow()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);

            Material slotBaseBefore = slot.Visual.CurrentBaseMaterial;
            float slotFillBefore = slot.Visual.CurrentFill;
            bool slotFlowBefore = slot.Visual.IsFlowConfigured;
            Material pipeBaseBefore = pipe.Visual.CurrentBaseMaterial;

            tut.InitializeTutorial();
            DragTutorialPipe(pipe); // slot overlay ON

            Assert.IsTrue(ReferenceEquals(slotBaseBefore, slot.Visual.CurrentBaseMaterial),
                "tutorial overlay must not change the slot base material");
            Assert.AreEqual(slotFillBefore, slot.Visual.CurrentFill, 1e-6f, "tutorial overlay must not touch _Fill");
            Assert.AreEqual(slotFlowBefore, slot.Visual.IsFlowConfigured, "tutorial overlay must not configure flow");
            Assert.IsTrue(ReferenceEquals(pipeBaseBefore, pipe.Visual.CurrentBaseMaterial),
                "tutorial overlay must not change the pipe base material");
            Assert.IsFalse(slot.Visual.HasGreenRuntimeMaterial, "tutorial must not create green runtime material");
            yield return null;
        }

        // ---------- Hygiene ----------

        [UnityTest]
        public IEnumerator Hygiene_TemporaryObjectsDestroyed()
        {
            var pipe = SpawnPipe(PipePos, 0f);
            var slot = SpawnSlot(SlotPos, 0f);
            var tut = CreateTutorial(pipe, slot);
            var created = new List<GameObject> { pipe.gameObject, slot.gameObject, tut.gameObject };

            foreach (var go in spawned)
                if (go != null) Object.DestroyImmediate(go);
            spawned.Clear();

            foreach (var go in created)
                Assert.IsTrue(go == null, "temporary test object must be destroyed");
            yield return null;
        }

        [UnityTest]
        public IEnumerator Hygiene_NoMaterialLeak_UsesSharedOverlayAsset()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            tut.InitializeTutorial();

            var vis = pipe.Visual;
            var mats = RendererOf(vis).sharedMaterials;
            Assert.AreEqual(2, mats.Length);
            Assert.IsTrue(ReferenceEquals(mats[1], LoadTutorialMaterial()),
                "overlay must reference the shared M_TutorialOverlay asset (no runtime instance leak)");
            Assert.IsFalse(vis.HasGreenRuntimeMaterial, "tutorial must not allocate a green runtime material");
            yield return null;
        }

        [UnityTest]
        public IEnumerator Hygiene_NoEventSubscriptionLeftAfterDestroy()
        {
            var (pipe, slot, tut) = CreateValidSetup(0f);
            tut.InitializeTutorial();

            Object.DestroyImmediate(tut.gameObject);

            Assert.AreEqual(0, HandlerCount(pipe, "DragStarted"), "destroyed tutorial must leave no DragStarted handler");
            Assert.AreEqual(0, HandlerCount(pipe, "ReturnedToStock"), "destroyed tutorial must leave no ReturnedToStock handler");
            Assert.AreEqual(0, HandlerCount(slot, "StateChanged"), "destroyed tutorial must leave no StateChanged handler");
            yield return null;
        }
    }
}
