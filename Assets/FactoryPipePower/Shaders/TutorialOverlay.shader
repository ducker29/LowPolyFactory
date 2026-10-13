Shader "FactoryPipePower/TutorialOverlay"
{
    Properties
    {
        _OverlayColor("Overlay Color", Color) = (1, 0.85, 0.1, 1)
        _MinAlpha("Min Alpha", Range(0, 1)) = 0.2
        _MaxAlpha("Max Alpha", Range(0, 1)) = 0.6
        _PulseSpeed("Pulse Speed", Float) = 4
        _EmissionStrength("Emission Strength", Range(0, 4)) = 0.8
        _DepthOffset("Depth Offset", Float) = 0.001
    }

    SubShader
    {
        Tags
        {
            "RenderType" = "Transparent"
            "Queue" = "Transparent+100"
            "RenderPipeline" = "UniversalPipeline"
            "IgnoreProjector" = "True"
        }

        Pass
        {
            Name "TutorialOverlayUnlit"
            Tags { "LightMode" = "SRPDefaultUnlit" }

            Blend SrcAlpha OneMinusSrcAlpha
            ZWrite Off
            ZTest LEqual
            Cull Back

            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            CBUFFER_START(UnityPerMaterial)
                float4 _OverlayColor;
                float  _MinAlpha;
                float  _MaxAlpha;
                float  _PulseSpeed;
                float  _EmissionStrength;
                float  _DepthOffset;
            CBUFFER_END

            struct Attributes
            {
                float4 positionOS : POSITION;
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
            };

            Varyings vert(Attributes input)
            {
                Varyings output;
                output.positionCS = TransformObjectToHClip(input.positionOS.xyz);

                // Небольшой depth bias к камере против z-fighting с базовой поверхностью.
                output.positionCS.z -= _DepthOffset * output.positionCS.w;

                return output;
            }

            half4 frag(Varyings input) : SV_Target
            {
                // Пульс считается целиком в shader time — без per-frame обновлений из C#.
                float pulse01 = 0.5 + 0.5 * sin(_Time.y * _PulseSpeed);
                float alpha = lerp(_MinAlpha, _MaxAlpha, pulse01);
                float3 color = _OverlayColor.rgb * (1.0 + _EmissionStrength * pulse01);

                return half4(color, alpha);
            }
            ENDHLSL
        }
    }

    Fallback Off
}
