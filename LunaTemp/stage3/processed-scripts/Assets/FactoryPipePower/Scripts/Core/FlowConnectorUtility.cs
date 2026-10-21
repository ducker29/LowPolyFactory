using UnityEngine;

namespace FactoryPipePower
{
    public static class FlowConnectorUtility
    {
        public static void ResolveFlowEndpoints(
[Bridge.Ref]             Vector3 previousOutputWorld,
[Bridge.Ref]             Vector3 connectorAWorld,
[Bridge.Ref]             Vector3 connectorBWorld,
            out Vector3 startWorld,
            out Vector3 endWorld)
        {
            float distA = Vector3.Distance(previousOutputWorld, connectorAWorld);
            float distB = Vector3.Distance(previousOutputWorld, connectorBWorld);

            if (distA <= distB)
            {
                startWorld = connectorAWorld;
                endWorld = connectorBWorld;
            }
            else
            {
                startWorld = connectorBWorld;
                endWorld = connectorAWorld;
            }
        }
    }
}
