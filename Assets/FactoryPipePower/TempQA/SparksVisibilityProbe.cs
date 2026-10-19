using System.IO;
using UnityEditor;
using UnityEngine;
using FactoryPipePower;

namespace SparksQA
{
    public static class SparksVisibilityProbe
    {
        static string outDir;
        static StreamWriter log;

        public static string Run()
        {
            outDir = Path.Combine(Path.GetTempPath(), "sparks_vis");
            Directory.CreateDirectory(outDir);
            log = new StreamWriter(Path.Combine(outDir, "vis_log.txt"), false);
            log.AutoFlush = true;

            var mainCam = Camera.main;
            if (mainCam == null)
            {
                var go = GameObject.Find("MainCamera");
                if (go != null) mainCam = go.GetComponent<Camera>();
            }
            Log("mainCam=" + (mainCam != null ? mainCam.name + " fov=" + mainCam.fieldOfView + " pos=" + mainCam.transform.position : "NULL"));

            for (int i = 0; i < 30; i++) EditorApplication.Step();

            var slot = GameObject.Find("PipeSlot_01")?.GetComponent<PipeSlotController>();
            var pipe = GameObject.Find("DragPipe_Small_01")?.GetComponent<DraggablePipeController>();
            if (slot == null || pipe == null) { Log("MISSING slot/pipe"); Finish(); return "missing"; }

            var sparks = slot.CompletionSparks;
            var psA = sparks.SparksA;
            var psB = sparks.SparksB;
            Log("sparksA=" + psA.name + " A.worldPos=" + psA.transform.position + " A.lossyScale=" + psA.transform.lossyScale);
            Log("connectorA=" + slot.ConnectorA.position + " connectorB=" + slot.ConnectorB.position);

            // real path only: no forced Powered, no Fill=1, no PlayCompletion
            pipe.transform.rotation = Quaternion.Euler(0f, 0f, 0f);
            pipe.BeginDrag(Vector2.zero, mainCam);
            slot.TryAccept(pipe);
            Log("accepted state=" + slot.State + " aligned=" + slot.IsAligned);

            // rotate to aligned via real tap if needed
            int rt = 0;
            while (!slot.IsAligned && rt < 4 && (slot.State == PipeSlotState.OccupiedWrongRotation || slot.State == PipeSlotState.OccupiedAligned))
            {
                slot.TryRotateTap();
                for (int k = 0; k < 15; k++) EditorApplication.Step();
                rt++;
            }
            Log("afterRotate state=" + slot.State + " aligned=" + slot.IsAligned + " tries=" + rt);

            int steps = 0;
            int peakScreenDiam = 0;
            int peakAlive = 0;
            bool fired = false;
            while (steps < 120)
            {
                steps++;
                EditorApplication.Step();

                bool aPlay = psA != null && psA.isPlaying;
                bool bPlay = psB != null && psB.isPlaying;
                ParticleSystem ps = aPlay ? psA : (bPlay ? psB : null);
                if (ps == null) { if (fired) break; continue; }
                fired = true;

                var main = ps.main;
                var arr = new ParticleSystem.Particle[main.maxParticles];
                int n = ps.GetParticles(arr);
                if (n > peakAlive) peakAlive = n;

                // measure on-screen diameter of each particle from mainCam
                float fov = mainCam.fieldOfView;
                float pixPerUnitAtDist = Screen.height / (2f * Mathf.Tan(fov * 0.5f * Mathf.Deg2Rad));
                float pSizeWorld = main.startSize.constantMax;
                int screenDiam = 0;
                Vector3 minS = new Vector3(float.MaxValue, float.MaxValue, 0);
                Vector3 maxS = new Vector3(float.MinValue, float.MinValue, 0);
                int inFront = 0;
                for (int i = 0; i < n; i++)
                {
                    Vector3 sp = mainCam.WorldToScreenPoint(arr[i].position);
                    if (sp.z <= 0) continue;
                    inFront++;
                    float diamPx = (pSizeWorld / sp.z) * pixPerUnitAtDist;
                    int d = Mathf.RoundToInt(diamPx);
                    if (d > screenDiam) screenDiam = d;
                    if (sp.x < minS.x) minS.x = sp.x;
                    if (sp.y < minS.y) minS.y = sp.y;
                    if (sp.x > maxS.x) maxS.x = sp.x;
                    if (sp.y > maxS.y) maxS.y = sp.y;
                }
                if (screenDiam > peakScreenDiam) peakScreenDiam = screenDiam;

                Log("frame=" + steps + " ps=" + ps.name + " alive=" + n + " inFront=" + inFront
                    + " maxScreenDiamPx=" + screenDiam
                    + " screenBox=(" + minS.x.ToString("F0") + "," + minS.y.ToString("F0") + ")-(" + maxS.x.ToString("F0") + "," + maxS.y.ToString("F0") + ")"
                    + " screenH=" + Screen.height);

                if (n > 0)
                {
                    CaptureMain(mainCam, "slot01_game_f" + steps, 1920, 1080);
                }
            }
            Log("PEAK alive=" + peakAlive + " peakScreenDiamPx=" + peakScreenDiam);
            Finish();
            return "peakScreenDiamPx=" + peakScreenDiam + " peakAlive=" + peakAlive;
        }

        static void Log(string s)
        {
            Debug.Log("[SparksVis] " + s);
            log?.WriteLine(s);
        }

        static void CaptureMain(Camera cam, string name, int w, int h)
        {
            var rt = new RenderTexture(w, h, 24);
            var prev = cam.targetTexture;
            cam.targetTexture = rt;
            cam.Render();
            RenderTexture.active = rt;
            var tex = new Texture2D(w, h, TextureFormat.RGB24, false);
            tex.ReadPixels(new Rect(0, 0, w, h), 0, 0);
            tex.Apply();
            cam.targetTexture = prev;
            RenderTexture.active = null;
            File.WriteAllBytes(Path.Combine(outDir, name + ".png"), tex.EncodeToPNG());
            Object.DestroyImmediate(rt);
            Object.DestroyImmediate(tex);
        }

        static void Finish()
        {
            log?.Close();
            log = null;
        }
    }
}
