using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEditor;
using FactoryPipePower;

namespace FactoryPipePower.PlayModeTests
{
    public class Stage7GreenFillShaderPlayModeTests
    {
        const string GreenFillShaderPath = "Assets/FactoryPipePower/Shaders/GreenFill.shader";
        const string GreenFillMatPath = "Assets/FactoryPipePower/Materials/M_Pipe_GreenFill.mat";

        readonly List<GameObject> spawned = new List<GameObject>();
        readonly List<Material> tempMaterials = new List<Material>();

        [TearDown]
        public void TearDown()
        {
            foreach (var go in spawned)
                if (go != null) Object.DestroyImmediate(go);
            spawned.Clear();

            foreach (var mat in tempMaterials)
                if (mat != null) Object.DestroyImmediate(mat);
            tempMaterials.Clear();
        }

        static void AssertVec3(Vector3 expected, Vector3 actual, string message)
        {
            Assert.Less(Vector3.Distance(expected, actual), 1e-4f, message);
        }

        PipeVisualController CreateVisual(out MeshRenderer renderer)
        {
            var go = new GameObject("Stage7_Visual");
            go.SetActive(false);
            spawned.Add(go);

            renderer = go.AddComponent<MeshRenderer>();
            var shader = AssetDatabase.LoadAssetAtPath<Shader>(GreenFillShaderPath);
            var baseMat = new Material(shader) { name = "Stage7_TestBase" };
            tempMaterials.Add(baseMat);
            renderer.sharedMaterial = baseMat;

            var pvc = go.AddComponent<PipeVisualController>();
            var template = AssetDatabase.LoadAssetAtPath<Material>(GreenFillMatPath);
            var so = new SerializedObject(pvc);
            so.FindProperty("visualRenderer").objectReferenceValue = renderer;
            so.FindProperty("greenFillTemplate").objectReferenceValue = template;
            so.ApplyModifiedPropertiesWithoutUndo();

            go.SetActive(true);
            return pvc;
        }

        [Test]
        public void GreenFillMaterial_UsesNewShader_NotTemp()
        {
            var mat = AssetDatabase.LoadAssetAtPath<Material>(GreenFillMatPath);
            var shader = AssetDatabase.LoadAssetAtPath<Shader>(GreenFillShaderPath);

            Assert.IsNotNull(mat);
            Assert.IsNotNull(shader);
            Assert.AreEqual("FactoryPipePower/GreenFill", mat.shader.name);
            Assert.AreEqual(shader, mat.shader);
            Assert.AreNotEqual("FactoryPipePower/GreenFill_Temp", mat.shader.name);
        }

        [Test]
        public void GreenFillShader_HasAllRequiredProperties()
        {
            var mat = AssetDatabase.LoadAssetAtPath<Material>(GreenFillMatPath);
            Assert.IsNotNull(mat);

            string[] required =
            {
                "_DefaultColor", "_PoweredColor", "_EmissionColor", "_EmissionStrength",
                "_Fill", "_FlowOriginWS", "_FlowDirectionWS", "_FlowLength", "_FillSoftness"
            };

            foreach (var prop in required)
                Assert.IsTrue(mat.HasProperty(prop), "shader must expose " + prop);
        }

        [UnityTest]
        public IEnumerator UseGreenRuntimeMaterial_CreatesSeparateInstancePerVisual()
        {
            var a = CreateVisual(out _);
            var b = CreateVisual(out _);

            a.UseGreenRuntimeMaterial();
            b.UseGreenRuntimeMaterial();

            Assert.IsTrue(a.HasGreenRuntimeMaterial);
            Assert.IsTrue(b.HasGreenRuntimeMaterial);
            Assert.AreNotSame(a.CurrentBaseMaterial, b.CurrentBaseMaterial,
                "each visual must get its own runtime material instance");
            yield return null;
        }

        [UnityTest]
        public IEnumerator SetFill_ClampsToZeroOne()
        {
            var v = CreateVisual(out _);
            v.UseGreenRuntimeMaterial();

            v.SetFill(-0.5f);
            Assert.AreEqual(0f, v.CurrentFill);

            v.SetFill(1.5f);
            Assert.AreEqual(1f, v.CurrentFill);

            v.SetFill(0.42f);
            Assert.AreEqual(0.42f, v.CurrentFill, 1e-5f);
            yield return null;
        }

        [UnityTest]
        public IEnumerator TemplateMaterial_NotMutatedBySetFillOrConfigureFlow()
        {
            var template = AssetDatabase.LoadAssetAtPath<Material>(GreenFillMatPath);
            float fillBefore = template.GetFloat("_Fill");
            Vector4 originBefore = template.GetVector("_FlowOriginWS");

            var v = CreateVisual(out _);
            v.UseGreenRuntimeMaterial();
            v.SetFill(0.7f);
            v.ConfigureFlow(new Vector3(1, 2, 3), new Vector3(4, 5, 6));

            Assert.AreEqual(fillBefore, template.GetFloat("_Fill"), "template _Fill must not change");
            Assert.AreEqual(originBefore, template.GetVector("_FlowOriginWS"),
                "template flow origin must not change");
            yield return null;
        }

        [UnityTest]
        public IEnumerator ConfigureFlow_ComputesOriginDirectionLength()
        {
            var v = CreateVisual(out _);

            v.ConfigureFlow(Vector3.zero, new Vector3(0, 0, 3));
            Assert.AreEqual(Vector3.zero, v.FlowStartWorld);
            Assert.AreEqual(new Vector3(0, 0, 3), v.FlowEndWorld);
            AssertVec3(Vector3.forward, v.FlowDirectionWorld, "normalized +Z direction");
            Assert.AreEqual(3f, v.FlowLengthWorld, 1e-5f);
            Assert.IsTrue(v.IsFlowConfigured);

            v.ConfigureFlow(new Vector3(0, 0, 3), Vector3.zero);
            AssertVec3(Vector3.back, v.FlowDirectionWorld, "normalized -Z direction (yaw 180)");
            Assert.AreEqual(3f, v.FlowLengthWorld, 1e-5f);

            v.ConfigureFlow(Vector3.zero, new Vector3(3, 0, 4));
            AssertVec3(new Vector3(0.6f, 0f, 0.8f), v.FlowDirectionWorld, "normalized arbitrary direction");
            Assert.AreEqual(5f, v.FlowLengthWorld, 1e-5f);
            yield return null;
        }

        [UnityTest]
        public IEnumerator ConfigureFlow_NearZeroLength_NoNaNInfinity()
        {
            var v = CreateVisual(out _);
            v.ConfigureFlow(new Vector3(1, 2, 3), new Vector3(1, 2, 3));

            Assert.AreEqual(0f, v.FlowLengthWorld, 1e-5f);
            Assert.IsFalse(float.IsNaN(v.FlowDirectionWorld.x), "direction must not be NaN");
            Assert.IsFalse(float.IsInfinity(v.FlowDirectionWorld.x), "direction must not be Infinity");
            AssertVec3(Vector3.forward, v.FlowDirectionWorld, "zero-length flow falls back to forward");
            yield return null;
        }

        [UnityTest]
        public IEnumerator ConfigureFlow_BeforeUseGreen_AppliesFlowParams()
        {
            var v = CreateVisual(out _);
            v.ConfigureFlow(Vector3.zero, new Vector3(0, 0, 2));
            v.UseGreenRuntimeMaterial();

            var runtime = v.CurrentBaseMaterial;
            AssertVec3(Vector3.zero, (Vector3)runtime.GetVector("_FlowOriginWS"), "runtime flow origin");
            AssertVec3(Vector3.forward, (Vector3)runtime.GetVector("_FlowDirectionWS"), "runtime flow direction");
            Assert.AreEqual(2f, runtime.GetFloat("_FlowLength"), 1e-5f);
            yield return null;
        }

        [UnityTest]
        public IEnumerator ConfigureFlow_AfterUseGreen_UpdatesFlowParams()
        {
            var v = CreateVisual(out _);
            v.UseGreenRuntimeMaterial();
            v.ConfigureFlow(new Vector3(5, 0, 0), new Vector3(5, 0, 4));

            var runtime = v.CurrentBaseMaterial;
            AssertVec3(new Vector3(5, 0, 0), (Vector3)runtime.GetVector("_FlowOriginWS"), "runtime flow origin");
            Assert.AreEqual(4f, runtime.GetFloat("_FlowLength"), 1e-5f);
            yield return null;
        }

        [UnityTest]
        public IEnumerator ResetVisual_DestroysRuntimeAndClearsFlow()
        {
            var v = CreateVisual(out _);
            v.UseGreenRuntimeMaterial();
            v.SetFill(0.5f);
            v.ConfigureFlow(Vector3.zero, Vector3.forward);
            var runtime = v.CurrentBaseMaterial;

            v.ResetVisual();

            Assert.IsFalse(v.HasGreenRuntimeMaterial);
            Assert.AreEqual(0f, v.CurrentFill);
            Assert.IsFalse(v.IsFlowConfigured);
            Assert.AreEqual(Vector3.zero, v.FlowStartWorld);
            Assert.AreEqual(Vector3.zero, v.FlowEndWorld);
            AssertVec3(Vector3.forward, v.FlowDirectionWorld, "direction reset");
            Assert.AreEqual(0f, v.FlowLengthWorld, 1e-5f);

            yield return null;
            Assert.IsTrue(runtime == null, "runtime material instance must be destroyed");
        }

        [UnityTest]
        public IEnumerator TutorialOverlay_OverGreenFill_DoesNotChangeFillOrFlow()
        {
            var v = CreateVisual(out _);
            v.UseGreenRuntimeMaterial();
            v.SetFill(0.6f);
            v.ConfigureFlow(Vector3.zero, new Vector3(0, 0, 2));
            var runtime = v.CurrentBaseMaterial;

            v.SetTutorialOverlay(true);

            Assert.IsTrue(v.IsTutorialOverlayEnabled);
            Assert.AreEqual(0.6f, v.CurrentFill, 1e-5f);
            Assert.AreEqual(0.6f, runtime.GetFloat("_Fill"), 1e-5f, "overlay must not change _Fill");
            Assert.AreEqual(2f, runtime.GetFloat("_FlowLength"), 1e-5f, "overlay must not change flow length");
            yield return null;
        }

        [Test]
        public void ConnectorUtility_PicksNearestConnector_TieBreaksToA()
        {
            FlowConnectorUtility.ResolveFlowEndpoints(
                new Vector3(0, 0, 0), new Vector3(0, 0, 1), new Vector3(0, 0, 5),
                out var start, out var end);
            Assert.AreEqual(new Vector3(0, 0, 1), start, "A closer => start=A");
            Assert.AreEqual(new Vector3(0, 0, 5), end, "A closer => end=B");

            FlowConnectorUtility.ResolveFlowEndpoints(
                new Vector3(0, 0, 10), new Vector3(0, 0, 1), new Vector3(0, 0, 9),
                out start, out end);
            Assert.AreEqual(new Vector3(0, 0, 9), start, "B closer => start=B");
            Assert.AreEqual(new Vector3(0, 0, 1), end, "B closer => end=A");

            FlowConnectorUtility.ResolveFlowEndpoints(
                new Vector3(0, 0, 0), new Vector3(1, 0, 0), new Vector3(-1, 0, 0),
                out start, out end);
            Assert.AreEqual(new Vector3(1, 0, 0), start, "tie => start=A (stable tie-break)");
            Assert.AreEqual(new Vector3(-1, 0, 0), end, "tie => end=B");
        }
    }
}
