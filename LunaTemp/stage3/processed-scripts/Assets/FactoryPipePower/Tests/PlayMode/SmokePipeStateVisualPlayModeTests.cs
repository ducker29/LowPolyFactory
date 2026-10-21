using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEditor;
using FactoryPipePower;

namespace FactoryPipePower.PlayModeTests
{
    public class SmokePipeStateVisualPlayModeTests
    {
        const string OfflineMatPath = "Assets/Factory_LP/Meshes/SM_Factory_Smoke_pipe_01_Inserts.fbx";
        const string OnlineMatPath = "Assets/FactoryPipePower/Materials/M_FactoryIndicator.mat";

        readonly List<GameObject> spawned = new List<GameObject>();
        readonly List<Material> tempMaterials = new List<Material>();

        GameObject insertsGo;
        GameObject pipeGo;
        MeshRenderer insertsRenderer;
        MeshRenderer pipeRenderer;
        FactoryPowerController factory;
        Material offlineMaterial;
        Material onlineMaterial;

        [SetUp]
        public void SetUp()
        {
            offlineMaterial = AssetDatabase.LoadAssetAtPath<Material>(OfflineMatPath);
            Assert.IsNotNull(offlineMaterial, "Offline M_Factory material (embedded in Inserts FBX) missing");
            onlineMaterial = AssetDatabase.LoadAssetAtPath<Material>(OnlineMatPath);
            Assert.IsNotNull(onlineMaterial, "M_FactoryIndicator material missing");

            insertsGo = new GameObject("SPV_Inserts");
            insertsRenderer = insertsGo.AddComponent<MeshRenderer>();
            insertsRenderer.sharedMaterial = offlineMaterial;
            spawned.Add(insertsGo);

            pipeGo = new GameObject("SPV_Pipe");
            pipeRenderer = pipeGo.AddComponent<MeshRenderer>();
            pipeRenderer.sharedMaterial = offlineMaterial;
            spawned.Add(pipeGo);

            var factoryGo = new GameObject("SPV_Factory");
            spawned.Add(factoryGo);
            factory = factoryGo.AddComponent<FactoryPowerController>();

            var so = new SerializedObject(factory);
            so.FindProperty("stateVisualRenderer").objectReferenceValue = insertsRenderer;
            so.FindProperty("offlineStateMaterial").objectReferenceValue = offlineMaterial;
            so.FindProperty("onlineStateMaterial").objectReferenceValue = onlineMaterial;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        [TearDown]
        public void TearDown()
        {
            foreach (var go in spawned)
                if (go != null)
                    Object.DestroyImmediate(go);
            spawned.Clear();

            foreach (var mat in tempMaterials)
                if (mat != null)
                    Object.DestroyImmediate(mat);
            tempMaterials.Clear();

            insertsRenderer = null;
            pipeRenderer = null;
            factory = null;
            offlineMaterial = null;
            onlineMaterial = null;
        }

        [UnityTest]
        public IEnumerator OfflineMaterial_SetOffline_UsesMFactory()
        {
            factory.SetOnline();
            yield return null;

            factory.SetOffline();
            yield return null;

            Assert.AreSame(offlineMaterial, insertsRenderer.sharedMaterial,
                "Offline state must use current base material M_Factory");
            Assert.AreEqual(FactoryPowerState.Offline, factory.State);
        }

        [UnityTest]
        public IEnumerator OnlineMaterial_SetOnline_UsesMFactoryIndicator()
        {
            factory.SetOnline();
            yield return null;

            Assert.AreSame(onlineMaterial, insertsRenderer.sharedMaterial,
                "Online state must use M_FactoryIndicator");
            Assert.IsTrue(factory.IsOnline);
        }

        [UnityTest]
        public IEnumerator PipeUnchanged_StateSwitch_DoesNotTouchPipeRenderer()
        {
            factory.SetOnline();
            yield return null;
            factory.SetOffline();
            yield return null;

            Assert.AreSame(offlineMaterial, pipeRenderer.sharedMaterial,
                "Pipe renderer material must stay M_Factory after state switches");
            Assert.AreSame(offlineMaterial, insertsRenderer.sharedMaterial,
                "Inserts renderer must be M_Factory in offline state");
        }

        [UnityTest]
        public IEnumerator NoMaterialClone_StateSwitch_UsesSharedMaterials()
        {
            factory.SetOnline();
            yield return null;
            factory.SetOffline();
            yield return null;

            foreach (var mat in insertsRenderer.sharedMaterials)
            {
                Assert.IsNotNull(mat, "Inserts renderer material slot must not become null");
                StringAssert.DoesNotContain("(Instance)", mat.name,
                    "Runtime material instances are forbidden; sharedMaterial must be used");
            }
            Assert.AreSame(offlineMaterial, insertsRenderer.sharedMaterial);
        }

        [UnityTest]
        public IEnumerator Idempotency_RepeatedCalls_KeepStableState()
        {
            factory.SetOnline();
            factory.SetOnline();
            yield return null;
            Assert.AreSame(onlineMaterial, insertsRenderer.sharedMaterial,
                "Double Online must keep M_FactoryIndicator");

            factory.SetOffline();
            factory.SetOffline();
            yield return null;
            Assert.AreSame(offlineMaterial, insertsRenderer.sharedMaterial,
                "Double Offline must keep M_Factory");

            factory.SetOnline();
            yield return null;
            factory.SetOffline();
            yield return null;
            Assert.AreSame(offlineMaterial, insertsRenderer.sharedMaterial,
                "Final Offline must keep M_Factory");
            Assert.AreSame(offlineMaterial, pipeRenderer.sharedMaterial,
                "Pipe renderer must stay untouched through repeated switches");
        }
    }
}
