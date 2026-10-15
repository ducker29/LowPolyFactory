Shader "FactoryPipePower/GreenFill"
{
    Properties
    {
        _DefaultColor("Default Color", Color) = (0.42, 0.45, 0.42, 1)
        _PoweredColor("Powered Color", Color) = (0.15, 0.85, 0.3, 1)
        _EmissionColor("Emission Color", Color) = (0.2, 1.0, 0.4, 1)
        _EmissionStrength("Emission Strength", Range(0, 4)) = 1
        _Fill("Fill", Range(0, 1)) = 0
        _FlowOriginWS("Flow Origin (World)", Vector) = (0, 0, 0, 0)
        _FlowDirectionWS("Flow Direction (World)", Vector) = (0, 0, 1, 0)
        _FlowLength("Flow Length", Float) = 1
        _FillSoftness("Fill Softness", Float) = 0.02
        [Toggle] _FlowCornerMode("Flow Corner Mode", Float) = 0
        _FlowCornerWS("Flow Corner (World, W = Leg1 Length)", Vector) = (0, 0, 0, 0)
    }

    SubShader
    {
        Tags { "RenderType" = "Opaque" "Queue" = "Geometry" "RenderPipeline" = "UniversalPipeline" }

        Pass
        {
            Name "ForwardUnlit"
            Tags { "LightMode" = "SRPDefaultUnlit" }

            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            CBUFFER_START(UnityPerMaterial)
                float4 _DefaultColor;
                float4 _PoweredColor;
                float4 _EmissionColor;
                float  _EmissionStrength;
                float  _Fill;
                float4 _FlowOriginWS;
                float4 _FlowDirectionWS;
                float  _FlowLength;
                float  _FillSoftness;
                float  _FlowCornerMode;
                float4 _FlowCornerWS;
            CBUFFER_END

            struct Attributes
            {
                float4 positionOS : POSITION;
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float3 positionWS : TEXCOORD0;
            };

            Varyings vert(Attributes input)
            {
                Varyings output;
                output.positionCS = TransformObjectToHClip(input.positionOS.xyz);
                output.positionWS = TransformObjectToWorld(input.positionOS.xyz);
                return output;
            }

            half4 frag(Varyings input) : SV_Target
            {
                float3 flowDir = _FlowDirectionWS.xyz;
                float dirLen = length(flowDir);
                flowDir = dirLen > 1e-5 ? flowDir / dirLen : float3(0, 0, 1);

                float safeLength = max(_FlowLength, 1e-5);
                float softness = max(_FillSoftness, 1e-4);

                float progress;
                if (_FlowCornerMode > 0.5)
                {
                    float3 leg1Raw = _FlowCornerWS.xyz - _FlowOriginWS.xyz;
                    float leg1Len = length(leg1Raw);
                    float3 leg1Dir = leg1Len > 1e-5 ? leg1Raw / leg1Len : float3(0, 0, 1);

                    float3 relative = input.positionWS - _FlowOriginWS.xyz;
                    float along1 = dot(relative, leg1Dir);

                    if (along1 <= leg1Len)
                    {
                        progress = along1 / safeLength;
                    }
                    else
                    {
                        float3 relative2 = input.positionWS - _FlowCornerWS.xyz;
                        float along2 = dot(relative2, flowDir);
                        progress = (leg1Len + along2) / safeLength;
                    }
                }
                else
                {
                    float3 relative = input.positionWS - _FlowOriginWS.xyz;
                    progress = dot(relative, flowDir) / safeLength;
                }

                float fillFront = saturate(_Fill);
                float mask = smoothstep(fillFront - softness, fillFront, progress);
                float filled = 1.0 - mask;

                float3 color = lerp(_DefaultColor.rgb, _PoweredColor.rgb, filled);
                color += _EmissionColor.rgb * _EmissionStrength * filled;
                return half4(color, 1.0);
            }
            ENDHLSL
        }
    }

    Fallback Off
}
