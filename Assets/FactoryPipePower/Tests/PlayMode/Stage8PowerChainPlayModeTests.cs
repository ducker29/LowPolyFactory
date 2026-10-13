using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEditor;
using FactoryPipePower;

namespace FactoryPipePower.PlayModeTests
{
    public class Stage8PowerChainPlayModeTests
    {
        const string SlotSmallPath = "Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Small_M2.prefab";
        const string PipeSmallPath = "Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Small_M2.prefab";
        const string GreenFillShaderPath = "Assets/FactoryPipePower/Shaders/GreenFill.shader";
        const string GreenFillMatPath = "Assets/FactoryPipePower/Materials/M_Pipe_GreenFill.mat";

        readonly List<GameObject> spawned = new List<GameObject>();
        readonly List<Material> tempMaterials = new List<Material>();
        Camera cam;
        GameObject cameraGo;
        bool previousRunInBackground;

        [SetUp]
        public void SetUp()
        {
            previousRunInBackground = Application.runInBackground;
            Application.runInBackground = true;
            cameraGo = new GameObject("S8_Camera");
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

            foreach (var mat in tempMaterials)
                if (mat != null) Object.DestroyImmediate(mat);
            tempMaterials.Clear();

            if (cameraGo != null)
            {
                Object.DestroyImmediate(cameraGo);
                cameraGo = null;
                cam = null;
            }
            Application.runInBackground = previousRunInBackground;
        }

        static void AssertVec3(Vector3 expected, Vector3 actual, string message)
        {
            Assert.Less(Vector3.Distance(expected, actual), 1e-4f, message);
        }

        Shader LoadGreenShader()
        {
            var shader = AssetDatabase.LoadAssetAtPath<Shader>(GreenFillShaderPath);
            Assert.IsNotNull(shader, "GreenFill shader missing");
            return shader;
        }

        Material LoadGreenTemplate()
        {
            var mat = AssetDatabase.LoadAssetAtPath<Material>(GreenFillMatPath);
            Assert.IsNotNull(mat, "M_Pipe_GreenFill missing");
            return mat;
        }

        PipeVisualController CreateNodeVisual(Transform parent)
        {
            var visGo = new GameObject("Visual");
            visGo.transform.SetParent(parent, false);
            var mr = visGo.AddComponent<MeshRenderer>();
            var baseMat = new Material(LoadGreenShader()) { name = "S8_NodeBase" };
            tempMaterials.Add(baseMat);
            mr.sharedMaterial = baseMat;

            var pvc = visGo.AddComponent<PipeVisualController>();
            var so = new SerializedObject(pvc);
            so.FindProperty("visualRenderer").objectReferenceValue = mr;
            so.FindProperty("greenFillTemplate").objectReferenceValue = LoadGreenTemplate();
            so.ApplyModifiedPropertiesWithoutUndo();
            return pvc;
        }

        StartPowerNode CreateStartNode(Vector3 position, out PipeVisualController visual)
        {
            var go = new GameObject("StartNode");
            go.SetActive(false);
            go.transform.position = position;
            spawned.Add(go);

            var outputGo = new GameObject("PowerOutput");
            outputGo.transform.SetParent(go.transform, false);
            visual = CreateNodeVisual(go.transform);

            var node = go.AddComponent<StartPowerNode>();
            var so = new SerializedObject(node);
            so.FindProperty("powerOutput").objectReferenceValue = outputGo.transform;
            so.FindProperty("visual").objectReferenceValue = visual;
            so.ApplyModifiedPropertiesWithoutUndo();

            go.SetActive(true);
            return node;
        }

        EndPowerNode CreateEndNode(Vector3 position, FactoryPowerController factory, out PipeVisualController visual)
        {
            var go = new GameObject("EndNode");
            go.SetActive(false);
            go.transform.position = position;
            spawned.Add(go);

            var inputGo = new GameObject("PowerInput");
            inputGo.transform.SetParent(go.transform, false);
            visual = CreateNodeVisual(go.transform);

            var node = go.AddComponent<EndPowerNode>();
            var so = new SerializedObject(node);
            so.FindProperty("powerInput").objectReferenceValue = inputGo.transform;
            so.FindProperty("visual").objectReferenceValue = visual;
            so.FindProperty("factoryPowerController").objectReferenceValue = factory;
            so.ApplyModifiedPropertiesWithoutUndo();

            go.SetActive(true);
            return node;
        }

        FactoryPowerController CreateFactory(out GameObject indicator)
        {
            var go = new GameObject("Factory");
            go.SetActive(false);
            spawned.Add(go);

            indicator = new GameObject("Indicator");
            indicator.transform.SetParent(go.transform, false);
            indicator.SetActive(false);

            var factory = go.AddComponent<FactoryPowerController>();
            var so = new SerializedObject(factory);
            var indicators = so.FindProperty("onlineIndicators");
            indicators.arraySize = 1;
            indicators.GetArrayElementAtIndex(0).objectReferenceValue = indicator;
            so.ApplyModifiedPropertiesWithoutUndo();

            go.SetActive(true);
            return factory;
        }

        PowerChainController CreateChain(StartPowerNode start, PipeSlotController[] slots, EndPowerNode end, FactoryPowerController factory)
        {
            var go = new GameObject("Chain");
            go.SetActive(false);
            spawned.Add(go);

            var chain = go.AddComponent<PowerChainController>();
            var so = new SerializedObject(chain);
            so.FindProperty("startNode").objectReferenceValue = start;

            var slotsProp = so.FindProperty("slots");
            slotsProp.arraySize = slots != null ? slots.Length : 0;
            if (slots != null)
                for (int i = 0; i < slots.Length; i++)
                    slotsProp.GetArrayElementAtIndex(i).objectReferenceValue = slots[i];

            so.FindProperty("endNode").objectReferenceValue = end;
            so.FindProperty("factoryPowerController").objectReferenceValue = factory;
            so.ApplyModifiedPropertiesWithoutUndo();

            go.SetActive(true);
            return chain;
        }

        GameObject Spawn(string path, Vector3 position, float yaw)
        {
            var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
            Assert.IsNotNull(prefab, "Prefab missing: " + path);
            var go = Object.Instantiate(prefab);
            go.transform.SetPositionAndRotation(position, Quaternion.Euler(0f, yaw, 0f));
            spawned.Add(go);
            return go;
        }

        PipeSlotController SpawnSlot(Vector3 position, float yaw)
        {
            return Spawn(SlotSmallPath, position, yaw).GetComponent<PipeSlotController>();
        }

        DraggablePipeController SpawnPipe(Vector3 position, float yaw)
        {
            return Spawn(PipeSmallPath, position, yaw).GetComponent<DraggablePipeController>();
        }

        void SetChargingDuration(PipeSlotController slot, float duration)
        {
            var so = new SerializedObject(slot);
            so.FindProperty("chargingDuration").floatValue = duration;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        PipeVisualController SlotVisual(PipeSlotController slot)
        {
            var vis = slot.transform.Find("AnchorY/SlotPipeVisual");
            Assert.IsNotNull(vis, "SlotPipeVisual child must exist");
            return vis.GetComponent<PipeVisualController>();
        }

        void PlaceAligned(PipeSlotController slot, Vector3 pipeSpawn)
        {
            var pipe = SpawnPipe(pipeSpawn, 0f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe), "aligned placement must be accepted");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State);
        }

        void PlaceWrong(PipeSlotController slot, Vector3 pipeSpawn)
        {
            var pipe = SpawnPipe(pipeSpawn, 90f);
            pipe.BeginDrag(cam.WorldToScreenPoint(pipe.transform.position), cam);
            Assert.IsTrue(slot.TryAccept(pipe), "wrong placement must be accepted");
            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State);
        }

        void RotateSlotToAligned(PipeSlotController slot)
        {
            Assert.IsTrue(slot.TryRotateTap());
        }

        float SlotFill(PipeSlotController slot)
        {
            var vis = SlotVisual(slot);
            if (!vis.HasGreenRuntimeMaterial)
                return -1f;
            return vis.CurrentBaseMaterial.GetFloat("_Fill");
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

        // ---------- Node setup ----------

        [UnityTest]
        public IEnumerator StartNode_Initialize_IsPowered_Fill1()
        {
            var start = CreateStartNode(Vector3.zero, out var visual);
            start.Initialize();

            Assert.IsTrue(start.IsPowered);
            Assert.IsTrue(visual.HasGreenRuntimeMaterial);
            Assert.AreEqual(1f, visual.CurrentBaseMaterial.GetFloat("_Fill"), 1e-5f);
            yield return null;
        }

        [UnityTest]
        public IEnumerator EndNode_StartsInactive()
        {
            var factory = CreateFactory(out _);
            var end = CreateEndNode(new Vector3(0, 0, -6f), factory, out var visual);
            end.Initialize();

            Assert.AreEqual(EndPowerState.Inactive, end.State);
            Assert.IsFalse(end.IsPowered);
            yield return null;
        }

        [UnityTest]
        public IEnumerator EndNode_WrongPrevious_DoesNotPower()
        {
            var factory = CreateFactory(out var indicator);
            var end = CreateEndNode(new Vector3(0, 0, -6f), factory, out _);
            var wrongStart = CreateStartNode(Vector3.zero, out _);
            end.SetExpectedPrevious(wrongStart);
            end.Initialize();

            // A node that is NOT the expected previous notifies.
            var impostor = CreateStartNode(new Vector3(99f, 0f, 0f), out _);
            impostor.Initialize();
            end.NotifyPreviousPowered(impostor);

            Assert.AreEqual(EndPowerState.Inactive, end.State);
            Assert.IsFalse(factory.IsOnline);
            Assert.IsFalse(indicator.activeSelf);
            yield return null;
        }

        [UnityTest]
        public IEnumerator EndNode_CorrectPrevious_PowersExactlyOnce()
        {
            var factory = CreateFactory(out var indicator);
            int onlineEvents = 0;
            factory.FactoryOnline += () => onlineEvents++;

            var end = CreateEndNode(new Vector3(0, 0, -6f), factory, out var visual);
            var start = CreateStartNode(Vector3.zero, out _);
            end.SetExpectedPrevious(start);
            end.Initialize();

            end.NotifyPreviousPowered(start);
            end.NotifyPreviousPowered(start);
            end.NotifyPreviousPowered(start);

            Assert.AreEqual(EndPowerState.Powered, end.State);
            Assert.IsTrue(end.IsPowered);
            Assert.AreEqual(1, end.ActivationCount, "end node must activate exactly once");
            Assert.AreEqual(1, onlineEvents, "FactoryOnline must fire exactly once");
            Assert.IsTrue(factory.IsOnline);
            Assert.IsTrue(indicator.activeSelf);
            Assert.IsTrue(visual.HasGreenRuntimeMaterial, "end powered visual must go green");
            yield return null;
        }

        [UnityTest]
        public IEnumerator Factory_OfflineUntilEndNode()
        {
            var factory = CreateFactory(out var indicator);
            factory.Initialize();
            Assert.AreEqual(FactoryPowerState.Offline, factory.State);

            var end = CreateEndNode(new Vector3(0, 0, -6f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);
            end.SetExpectedPrevious(start);

            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -6f));
            SetChargingDuration(slot, 0.02f);

            var chain = CreateChain(start, new[] { slot }, end, factory);
            chain.Initialize();

            yield return WaitUntil(() => factory.IsOnline, 5f, "chain must bring factory online after cascade");

            Assert.AreEqual(FactoryPowerState.Online, factory.State);
            Assert.IsTrue(indicator.activeSelf);
        }

        [UnityTest]
        public IEnumerator Factory_SetOnline_IsIdempotent()
        {
            var factory = CreateFactory(out _);
            int onlineEvents = 0;
            factory.FactoryOnline += () => onlineEvents++;

            factory.Initialize();
            factory.SetOnline();
            factory.SetOnline();
            factory.SetOnline();

            Assert.AreEqual(FactoryPowerState.Online, factory.State);
            Assert.AreEqual(1, onlineEvents, "SetOnline must be idempotent and fire event once");
            yield return null;
        }

        // ---------- Slot power rules ----------

        [UnityTest]
        public IEnumerator EmptySlot_DoesNotStartCharging()
        {
            var start = CreateStartNode(Vector3.zero, out _);
            start.Initialize();
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            slot.SetupPowerNodes(start, null);

            slot.TryStartCharging();

            Assert.AreEqual(PipeSlotState.Empty, slot.State, "Empty slot must not charge");
            yield return null;
        }

        [UnityTest]
        public IEnumerator WrongRotationSlot_DoesNotStartCharging()
        {
            var start = CreateStartNode(Vector3.zero, out _);
            start.Initialize();
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceWrong(slot, new Vector3(0, 1f, -6f));
            slot.SetupPowerNodes(start, null);

            slot.TryStartCharging();

            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot.State,
                "OccupiedWrongRotation must not charge");
            yield return null;
        }

        [UnityTest]
        public IEnumerator AlignedSlot_UnpoweredPrevious_DoesNotCharge()
        {
            var unpoweredStart = CreateStartNode(Vector3.zero, out _); // not initialized => not powered
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -6f));
            slot.SetupPowerNodes(unpoweredStart, null);

            slot.TryStartCharging();
            yield return WaitFrames(5);

            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "aligned slot must not charge when previous is not powered");
        }

        [UnityTest]
        public IEnumerator AlignedSlot_PoweredPrevious_StartsCharging_ThenPowered()
        {
            var start = CreateStartNode(Vector3.zero, out _);
            start.Initialize();
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -6f));
            SetChargingDuration(slot, 0.4f);
            slot.SetupPowerNodes(start, null);

            slot.TryStartCharging();
            Assert.AreEqual(PipeSlotState.Charging, slot.State, "aligned + powered previous must start charging");

            yield return WaitUntil(() => slot.State == PipeSlotState.Powered, 5f,
                "slot must become Powered after chargingDuration");
        }

        [UnityTest]
        public IEnumerator PoweredSlot_HasFill1()
        {
            var start = CreateStartNode(Vector3.zero, out _);
            start.Initialize();
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -6f));
            SetChargingDuration(slot, 0.02f);
            slot.SetupPowerNodes(start, null);

            slot.TryStartCharging();
            yield return WaitUntil(() => slot.State == PipeSlotState.Powered, 5f, "slot must power");

            Assert.AreEqual(1f, SlotFill(slot), 1e-5f, "powered slot must have fill 1");
        }

        [UnityTest]
        public IEnumerator ChargingOrPoweredSlot_CannotRotate()
        {
            var start = CreateStartNode(Vector3.zero, out _);
            start.Initialize();
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -6f));
            SetChargingDuration(slot, 0.4f);
            slot.SetupPowerNodes(start, null);

            slot.TryStartCharging();
            Assert.AreEqual(PipeSlotState.Charging, slot.State);
            Assert.IsFalse(slot.TryRotateTap(), "Charging slot must not rotate");

            yield return WaitUntil(() => slot.State == PipeSlotState.Powered, 5f, "slot must power");
            Assert.IsFalse(slot.TryRotateTap(), "Powered slot must not rotate");
        }

        [UnityTest]
        public IEnumerator Slot_DoesNotStartTwoChargingCoroutines()
        {
            var start = CreateStartNode(Vector3.zero, out _);
            start.Initialize();
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -6f));
            SetChargingDuration(slot, 0.3f);
            slot.SetupPowerNodes(start, null);

            slot.TryStartCharging();
            slot.TryStartCharging();
            slot.NotifyPreviousPowered(start);
            Assert.AreEqual(PipeSlotState.Charging, slot.State);
            Assert.IsTrue(slot.HasCharged);

            yield return WaitUntil(() => slot.State == PipeSlotState.Powered, 5f, "slot must power once");

            // Repeated notify after powered must not recharge.
            slot.NotifyPreviousPowered(start);
            yield return WaitFrames(5);
            Assert.AreEqual(PipeSlotState.Powered, slot.State);
            Assert.IsTrue(slot.HasCharged);
        }

        [UnityTest]
        public IEnumerator Slot_FlowEndpoints_RelativeToPreviousPowerOutput()
        {
            var start = CreateStartNode(new Vector3(0, 0, 0f), out _);
            start.Initialize();
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -6f));
            SetChargingDuration(slot, 0.6f);
            slot.SetupPowerNodes(start, null);

            slot.TryStartCharging();
            Assert.AreEqual(PipeSlotState.Charging, slot.State);

            var vis = SlotVisual(slot);
            Assert.IsTrue(vis.HasGreenRuntimeMaterial);

            Vector3 previousPosition = start.PowerOutput.position;
            float distanceA = Vector3.Distance(previousPosition, slot.ConnectorA.position);
            float distanceB = Vector3.Distance(previousPosition, slot.ConnectorB.position);
            Vector3 nearest = distanceA <= distanceB ? slot.ConnectorA.position : slot.ConnectorB.position;
            Vector3 far = distanceA <= distanceB ? slot.ConnectorB.position : slot.ConnectorA.position;

            Vector3 origin = (Vector3)vis.CurrentBaseMaterial.GetVector("_FlowOriginWS");
            Vector3 direction = (Vector3)vis.CurrentBaseMaterial.GetVector("_FlowDirectionWS");
            float length = vis.CurrentBaseMaterial.GetFloat("_FlowLength");

            AssertVec3(nearest, origin, "flow origin must be the connector nearest previous.PowerOutput");
            AssertVec3((far - nearest).normalized, direction, "flow direction must run nearest -> far");
            Assert.AreEqual(Vector3.Distance(nearest, far), length, 1e-4f, "flow length must span the connectors");
            yield return null;
        }

        [UnityTest]
        public IEnumerator Slot_NotifiesNextOnlyAfterPowered()
        {
            var start = CreateStartNode(Vector3.zero, out _);
            start.Initialize();
            var slot1 = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            var slot2 = SpawnSlot(new Vector3(0, 0, -5f), 0f);
            PlaceAligned(slot1, new Vector3(0, 1f, -6f));
            PlaceAligned(slot2, new Vector3(3f, 1f, -6f));
            SetChargingDuration(slot1, 0.3f);
            SetChargingDuration(slot2, 0.02f);
            slot1.SetupPowerNodes(start, slot2);
            slot2.SetupPowerNodes(slot1, null);

            slot1.TryStartCharging();
            Assert.AreEqual(PipeSlotState.Charging, slot1.State);
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot2.State,
                "slot2 must not be notified while slot1 is still Charging");

            yield return WaitUntil(() => slot1.State == PipeSlotState.Powered, 5f, "slot1 must power");
            yield return WaitUntil(() => slot2.State == PipeSlotState.Powered, 5f,
                "slot2 must be notified and power after slot1 becomes Powered");
        }

        // ---------- Cascade ----------

        [UnityTest]
        public IEnumerator Chain_ThreeSlots_ActivateSequentially()
        {
            var factory = CreateFactory(out var indicator);
            var end = CreateEndNode(new Vector3(0, 0, -9f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);

            var slot1 = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            var slot2 = SpawnSlot(new Vector3(0, 0, -5f), 0f);
            var slot3 = SpawnSlot(new Vector3(0, 0, -7f), 0f);
            PlaceAligned(slot1, new Vector3(0, 1f, -12f));
            PlaceAligned(slot2, new Vector3(3f, 1f, -12f));
            PlaceAligned(slot3, new Vector3(6f, 1f, -12f));
            SetChargingDuration(slot1, 0.05f);
            SetChargingDuration(slot2, 0.05f);
            SetChargingDuration(slot3, 0.05f);

            var chain = CreateChain(start, new[] { slot1, slot2, slot3 }, end, factory);
            chain.Initialize();

            yield return WaitUntil(() => slot3.State == PipeSlotState.Powered, 10f, "slot3 must power");
            Assert.AreEqual(EndPowerState.Powered, end.State);
            Assert.AreEqual(FactoryPowerState.Online, factory.State);
            Assert.IsTrue(indicator.activeSelf);

            Assert.AreEqual(PipeSlotState.Powered, slot1.State);
            Assert.AreEqual(PipeSlotState.Powered, slot2.State);
        }

        [UnityTest]
        public IEnumerator Chain_NextChargingNotBeforePreviousPowered()
        {
            var factory = CreateFactory(out _);
            var end = CreateEndNode(new Vector3(0, 0, -7f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);

            var slot1 = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            var slot2 = SpawnSlot(new Vector3(0, 0, -5f), 0f);
            PlaceAligned(slot1, new Vector3(0, 1f, -12f));
            PlaceAligned(slot2, new Vector3(3f, 1f, -12f));
            SetChargingDuration(slot1, 0.4f); // long: stays Charging for several frames
            SetChargingDuration(slot2, 0.02f);

            var chain = CreateChain(start, new[] { slot1, slot2 }, end, factory);
            chain.Initialize();

            yield return WaitFrames(4);
            Assert.AreEqual(PipeSlotState.Charging, slot1.State, "slot1 should still be charging");
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot2.State,
                "slot2 must not start before slot1 becomes Powered");

            yield return WaitUntil(() => slot1.State == PipeSlotState.Powered, 5f, "slot1 must power");
            yield return WaitUntil(() => slot2.State == PipeSlotState.Powered, 5f, "slot2 must then power");
        }

        [UnityTest]
        public IEnumerator Chain_EmptySlot_BlocksFlow()
        {
            var factory = CreateFactory(out var indicator);
            var end = CreateEndNode(new Vector3(0, 0, -7f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);

            var slot1 = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            var slot2 = SpawnSlot(new Vector3(0, 0, -5f), 0f); // stays empty
            PlaceAligned(slot1, new Vector3(0, 1f, -12f));
            SetChargingDuration(slot1, 0.02f);

            var chain = CreateChain(start, new[] { slot1, slot2 }, end, factory);
            chain.Initialize();

            yield return WaitUntil(() => slot1.State == PipeSlotState.Powered, 5f, "slot1 must power");
            yield return WaitFrames(5);

            Assert.AreEqual(PipeSlotState.Empty, slot2.State, "empty slot2 must block flow");
            Assert.AreEqual(EndPowerState.Inactive, end.State);
            Assert.AreEqual(FactoryPowerState.Offline, factory.State);
            Assert.IsFalse(indicator.activeSelf);
        }

        [UnityTest]
        public IEnumerator Chain_LateAlignment_DownstreamStartsAutomatically()
        {
            var factory = CreateFactory(out _);
            var end = CreateEndNode(new Vector3(0, 0, -7f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);

            var slot1 = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            var slot2 = SpawnSlot(new Vector3(0, 0, -5f), 0f);
            PlaceAligned(slot1, new Vector3(0, 1f, -12f));
            PlaceAligned(slot2, new Vector3(3f, 1f, -12f));
            SetChargingDuration(slot1, 0.02f);
            SetChargingDuration(slot2, 0.02f);

            var chain = CreateChain(start, new[] { slot1, slot2 }, end, factory);
            chain.Initialize();

            yield return WaitUntil(() => slot2.State == PipeSlotState.Powered, 10f,
                "downstream pre-aligned slot must auto-charge after upstream powers");
            Assert.AreEqual(EndPowerState.Powered, end.State);
        }

        [UnityTest]
        public IEnumerator Chain_PreAlignedTail_FillsCascading_AfterUpstreamFixed()
        {
            var factory = CreateFactory(out _);
            var end = CreateEndNode(new Vector3(0, 0, -7f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);

            var slot1 = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            var slot2 = SpawnSlot(new Vector3(0, 0, -5f), 0f);
            PlaceWrong(slot1, new Vector3(0, 1f, -12f)); // slot1 initially wrong => blocks
            PlaceAligned(slot2, new Vector3(3f, 1f, -12f)); // tail pre-aligned
            SetChargingDuration(slot1, 0.02f);
            SetChargingDuration(slot2, 0.02f);

            var chain = CreateChain(start, new[] { slot1, slot2 }, end, factory);
            chain.Initialize();
            yield return WaitFrames(3);

            Assert.AreEqual(PipeSlotState.OccupiedWrongRotation, slot1.State);
            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot2.State,
                "pre-aligned tail must wait while upstream is wrong");
            Assert.AreEqual(FactoryPowerState.Offline, factory.State);

            // Fix slot1 -> it aligns, charges, powers, then cascades into pre-aligned slot2.
            RotateSlotToAligned(slot1);
            yield return WaitUntil(() => slot2.State == PipeSlotState.Powered, 10f,
                "pre-aligned tail must fill cascading after upstream fixed");
            Assert.AreEqual(EndPowerState.Powered, end.State);
        }

        [UnityTest]
        public IEnumerator Chain_EndPoweredOnlyAfterLastSlot()
        {
            var factory = CreateFactory(out _);
            var end = CreateEndNode(new Vector3(0, 0, -7f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);

            var slot1 = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            var slot2 = SpawnSlot(new Vector3(0, 0, -5f), 0f);
            PlaceAligned(slot1, new Vector3(0, 1f, -12f));
            PlaceAligned(slot2, new Vector3(3f, 1f, -12f));
            SetChargingDuration(slot1, 0.02f);
            SetChargingDuration(slot2, 0.4f); // long: observe end still inactive while slot2 charging

            var chain = CreateChain(start, new[] { slot1, slot2 }, end, factory);
            chain.Initialize();

            yield return WaitUntil(() => slot1.State == PipeSlotState.Powered, 5f, "slot1 must power");
            yield return WaitUntil(() => slot2.State == PipeSlotState.Charging, 5f, "slot2 must charge");
            Assert.AreEqual(EndPowerState.Inactive, end.State,
                "end must stay inactive until last slot is Powered");

            yield return WaitUntil(() => end.State == EndPowerState.Powered, 5f,
                "end must power after last slot");
        }

        [UnityTest]
        public IEnumerator Chain_FactoryOnlineOnlyAfterEndNode()
        {
            var factory = CreateFactory(out var indicator);
            var end = CreateEndNode(new Vector3(0, 0, -7f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);

            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -12f));
            SetChargingDuration(slot, 0.4f);

            var chain = CreateChain(start, new[] { slot }, end, factory);
            chain.Initialize();

            yield return WaitUntil(() => slot.State == PipeSlotState.Powered, 5f, "slot must power");
            Assert.AreEqual(EndPowerState.Powered, end.State);
            Assert.AreEqual(FactoryPowerState.Online, factory.State);
            Assert.IsTrue(indicator.activeSelf);
        }

        // ---------- Idempotency / reset ----------

        [UnityTest]
        public IEnumerator RepeatNotify_NoDoubleChargeOrDoubleEnd()
        {
            var factory = CreateFactory(out _);
            int onlineEvents = 0;
            factory.FactoryOnline += () => onlineEvents++;

            var end = CreateEndNode(new Vector3(0, 0, -7f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -12f));
            SetChargingDuration(slot, 0.02f);

            var chain = CreateChain(start, new[] { slot }, end, factory);
            chain.Initialize();

            yield return WaitUntil(() => end.State == EndPowerState.Powered, 10f, "end must power");

            // Repeat notifies on both slot and end.
            slot.NotifyPreviousPowered(start);
            slot.NotifyPreviousPowered(start);
            end.NotifyPreviousPowered(slot);
            end.NotifyPreviousPowered(slot);
            yield return WaitFrames(5);

            Assert.AreEqual(PipeSlotState.Powered, slot.State);
            Assert.AreEqual(1, end.ActivationCount, "end must not double-activate");
            Assert.AreEqual(1, onlineEvents, "FactoryOnline must fire once");
        }

        [UnityTest]
        public IEnumerator ResetPowerState_ReturnsNonPowered_NoLeak()
        {
            var start = CreateStartNode(Vector3.zero, out _);
            start.Initialize();
            var slot = SpawnSlot(new Vector3(0, 0, -3f), 0f);
            PlaceAligned(slot, new Vector3(0, 1f, -6f));
            SetChargingDuration(slot, 0.02f);
            slot.SetupPowerNodes(start, null);

            slot.TryStartCharging();
            yield return WaitUntil(() => slot.State == PipeSlotState.Powered, 5f, "slot must power");
            Assert.IsTrue(SlotVisual(slot).HasGreenRuntimeMaterial);

            slot.ResetPowerState();

            Assert.AreEqual(PipeSlotState.OccupiedAligned, slot.State,
                "reset must return to non-powered occupied state");
            Assert.IsFalse(slot.IsPowered);
            Assert.IsFalse(slot.HasCharged);
            Assert.IsFalse(SlotVisual(slot).HasGreenRuntimeMaterial,
                "reset must release the green runtime material (no leak)");

            yield return null;
        }

        [UnityTest]
        public IEnumerator Factory_EmptyTargets_NoException()
        {
            var go = new GameObject("EmptyFactory");
            spawned.Add(go);
            var factory = go.AddComponent<FactoryPowerController>();

            LogAssert.NoUnexpectedReceived();
            factory.Initialize();
            factory.SetOnline();

            Assert.AreEqual(FactoryPowerState.Online, factory.State);
            yield return null;
        }

        [UnityTest]
        public IEnumerator ZeroSlotChain_StartDirectlyToEnd()
        {
            var factory = CreateFactory(out var indicator);
            var end = CreateEndNode(new Vector3(0, 0, -5f), factory, out _);
            var start = CreateStartNode(Vector3.zero, out _);

            var chain = CreateChain(start, new PipeSlotController[0], end, factory);
            chain.Initialize();

            Assert.AreEqual(EndPowerState.Powered, end.State, "start -> end with zero slots must power end");
            Assert.AreEqual(FactoryPowerState.Online, factory.State);
            Assert.IsTrue(indicator.activeSelf);
            yield return null;
        }
    }
}
