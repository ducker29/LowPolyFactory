using UnityEngine;

namespace FactoryPipePower
{
    public static class FlowConnectorUtility
    {
        public static void ResolveFlowEndpoints(
            Vector3 previousOutputWorld,
            Vector3 connectorAWorld,
            Vector3 connectorBWorld,
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
