var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.JointSpring' )
  var i785 = data
  i784.spring = i785[0]
  i784.damper = i785[1]
  i784.targetPosition = i785[2]
  return i784
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.JointMotor' )
  var i787 = data
  i786.m_TargetVelocity = i787[0]
  i786.m_Force = i787[1]
  i786.m_FreeSpin = i787[2]
  return i786
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.JointLimits' )
  var i789 = data
  i788.m_Min = i789[0]
  i788.m_Max = i789[1]
  i788.m_Bounciness = i789[2]
  i788.m_BounceMinVelocity = i789[3]
  i788.m_ContactDistance = i789[4]
  i788.minBounce = i789[5]
  i788.maxBounce = i789[6]
  return i788
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.JointDrive' )
  var i791 = data
  i790.m_PositionSpring = i791[0]
  i790.m_PositionDamper = i791[1]
  i790.m_MaximumForce = i791[2]
  i790.m_UseAcceleration = i791[3]
  return i790
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i793 = data
  i792.m_Spring = i793[0]
  i792.m_Damper = i793[1]
  return i792
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i795 = data
  i794.m_Limit = i795[0]
  i794.m_Bounciness = i795[1]
  i794.m_ContactDistance = i795[2]
  return i794
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i797 = data
  i796.m_ExtremumSlip = i797[0]
  i796.m_ExtremumValue = i797[1]
  i796.m_AsymptoteSlip = i797[2]
  i796.m_AsymptoteValue = i797[3]
  i796.m_Stiffness = i797[4]
  return i796
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i799 = data
  i798.m_LowerAngle = i799[0]
  i798.m_UpperAngle = i799[1]
  return i798
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i801 = data
  i800.m_MotorSpeed = i801[0]
  i800.m_MaximumMotorTorque = i801[1]
  return i800
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i803 = data
  i802.m_DampingRatio = i803[0]
  i802.m_Frequency = i803[1]
  i802.m_Angle = i803[2]
  return i802
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i805 = data
  i804.m_LowerTranslation = i805[0]
  i804.m_UpperTranslation = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i806 = root || new pc.UnityMaterial()
  var i807 = data
  i806.name = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'shader')
  i806.renderQueue = i807[3]
  i806.enableInstancing = !!i807[4]
  var i809 = i807[5]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i809[i + 0]) );
  }
  i806.floatParameters = i808
  var i811 = i807[6]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i811[i + 0]) );
  }
  i806.colorParameters = i810
  var i813 = i807[7]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i813[i + 0]) );
  }
  i806.vectorParameters = i812
  var i815 = i807[8]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i815[i + 0]) );
  }
  i806.textureParameters = i814
  var i817 = i807[9]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i817[i + 0]) );
  }
  i806.materialFlags = i816
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i821 = data
  i820.name = i821[0]
  i820.value = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i825 = data
  i824.name = i825[0]
  i824.value = new pc.Color(i825[1], i825[2], i825[3], i825[4])
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i829 = data
  i828.name = i829[0]
  i828.value = new pc.Vec4( i829[1], i829[2], i829[3], i829[4] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i833 = data
  i832.name = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'value')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i837 = data
  i836.name = i837[0]
  i836.enabled = !!i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i839 = data
  i838.name = i839[0]
  i838.halfPrecision = !!i839[1]
  i838.useSimplification = !!i839[2]
  i838.useUInt32IndexFormat = !!i839[3]
  i838.vertexCount = i839[4]
  i838.aabb = i839[5]
  var i841 = i839[6]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( !!i841[i + 0] );
  }
  i838.streams = i840
  i838.vertices = i839[7]
  var i843 = i839[8]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i843[i + 0]) );
  }
  i838.subMeshes = i842
  var i845 = i839[9]
  var i844 = []
  for(var i = 0; i < i845.length; i += 16) {
    i844.push( new pc.Mat4().setData(i845[i + 0], i845[i + 1], i845[i + 2], i845[i + 3],  i845[i + 4], i845[i + 5], i845[i + 6], i845[i + 7],  i845[i + 8], i845[i + 9], i845[i + 10], i845[i + 11],  i845[i + 12], i845[i + 13], i845[i + 14], i845[i + 15]) );
  }
  i838.bindposes = i844
  var i847 = i839[10]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i847[i + 0]) );
  }
  i838.blendShapes = i846
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i853 = data
  i852.triangles = i853[0]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i859 = data
  i858.name = i859[0]
  var i861 = i859[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i861[i + 0]) );
  }
  i858.frames = i860
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i863 = data
  i862.name = i863[0]
  i862.width = i863[1]
  i862.height = i863[2]
  i862.mipmapCount = i863[3]
  i862.anisoLevel = i863[4]
  i862.filterMode = i863[5]
  i862.hdr = !!i863[6]
  i862.format = i863[7]
  i862.wrapMode = i863[8]
  i862.alphaIsTransparency = !!i863[9]
  i862.alphaSource = i863[10]
  i862.graphicsFormat = i863[11]
  i862.sRGBTexture = !!i863[12]
  i862.desiredColorSpace = i863[13]
  i862.wrapU = i863[14]
  i862.wrapV = i863[15]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i865 = data
  i864.position = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.scale = new pc.Vec3( i865[3], i865[4], i865[5] )
  i864.rotation = new pc.Quat(i865[6], i865[7], i865[8], i865[9])
  return i864
}

Deserializers["FactoryPipePower.FactoryPowerController"] = function (request, data, root) {
  var i866 = root || request.c( 'FactoryPipePower.FactoryPowerController' )
  var i867 = data
  var i869 = i867[0]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.onlineRenderers = i868
  var i871 = i867[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i866.onlineIndicators = i870
  var i873 = i867[2]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i866.particleSystems = i872
  var i875 = i867[3]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i866.animators = i874
  request.r(i867[4], i867[5], 0, i866, 'stateVisualRenderer')
  request.r(i867[6], i867[7], 0, i866, 'offlineStateMaterial')
  request.r(i867[8], i867[9], 0, i866, 'onlineStateMaterial')
  return i866
}

Deserializers["FactoryPipePower.SmokePipeIndicatorSequence"] = function (request, data, root) {
  var i884 = root || request.c( 'FactoryPipePower.SmokePipeIndicatorSequence' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'factory')
  var i887 = i885[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.pipe1Inserts = i886
  var i889 = i885[3]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i884.pipe2Inserts = i888
  request.r(i885[4], i885[5], 0, i884, 'offlineMaterial')
  request.r(i885[6], i885[7], 0, i884, 'onlineMaterial')
  return i884
}

Deserializers["FactoryPipePower.FactoryChimneySmokeController"] = function (request, data, root) {
  var i890 = root || request.c( 'FactoryPipePower.FactoryChimneySmokeController' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'factory')
  request.r(i891[2], i891[3], 0, i890, 'indicatorSequence')
  request.r(i891[4], i891[5], 0, i890, 'pipe1Smoke')
  request.r(i891[6], i891[7], 0, i890, 'pipe2Smoke')
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'sharedMesh')
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'additionalVertexStreams')
  i894.enabled = !!i895[2]
  request.r(i895[3], i895[4], 0, i894, 'sharedMaterial')
  var i897 = i895[5]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i894.sharedMaterials = i896
  i894.receiveShadows = !!i895[6]
  i894.shadowCastingMode = i895[7]
  i894.sortingLayerID = i895[8]
  i894.sortingOrder = i895[9]
  i894.lightmapIndex = i895[10]
  i894.lightmapSceneIndex = i895[11]
  i894.lightmapScaleOffset = new pc.Vec4( i895[12], i895[13], i895[14], i895[15] )
  i894.lightProbeUsage = i895[16]
  i894.reflectionProbeUsage = i895[17]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i901 = data
  i900.name = i901[0]
  i900.tagId = i901[1]
  i900.enabled = !!i901[2]
  i900.isStatic = !!i901[3]
  i900.layer = i901[4]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i903 = data
  i902.name = i903[0]
  i902.atlasId = i903[1]
  i902.mipmapCount = i903[2]
  i902.hdr = !!i903[3]
  i902.size = i903[4]
  i902.anisoLevel = i903[5]
  i902.filterMode = i903[6]
  var i905 = i903[7]
  var i904 = []
  for(var i = 0; i < i905.length; i += 4) {
    i904.push( UnityEngine.Rect.MinMaxRect(i905[i + 0], i905[i + 1], i905[i + 2], i905[i + 3]) );
  }
  i902.rects = i904
  i902.wrapU = i903[8]
  i902.wrapV = i903[9]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i909 = data
  i908.name = i909[0]
  i908.index = i909[1]
  i908.startup = !!i909[2]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i911 = data
  i910.type = i911[0]
  i910.color = new pc.Color(i911[1], i911[2], i911[3], i911[4])
  i910.cullingMask = i911[5]
  i910.intensity = i911[6]
  i910.range = i911[7]
  i910.spotAngle = i911[8]
  i910.shadows = i911[9]
  i910.shadowNormalBias = i911[10]
  i910.shadowBias = i911[11]
  i910.shadowStrength = i911[12]
  i910.shadowResolution = i911[13]
  i910.lightmapBakeType = i911[14]
  i910.renderMode = i911[15]
  request.r(i911[16], i911[17], 0, i910, 'cookie')
  i910.cookieSize = i911[18]
  i910.shadowNearPlane = i911[19]
  i910.occlusionMaskChannel = i911[20]
  i910.isBaked = !!i911[21]
  i910.mixedLightingMode = i911[22]
  i910.enabled = !!i911[23]
  return i910
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i913 = data
  i912.m_Version = i913[0]
  i912.m_UsePipelineSettings = !!i913[1]
  i912.m_AdditionalLightsShadowResolutionTier = i913[2]
  i912.m_LightLayerMask = i913[3]
  i912.m_RenderingLayers = i913[4]
  i912.m_CustomShadowLayers = !!i913[5]
  i912.m_ShadowLayerMask = i913[6]
  i912.m_ShadowRenderingLayers = i913[7]
  i912.m_LightCookieSize = new pc.Vec2( i913[8], i913[9] )
  i912.m_LightCookieOffset = new pc.Vec2( i913[10], i913[11] )
  i912.m_SoftShadowQuality = i913[12]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'sharedMesh')
  i914.convex = !!i915[2]
  i914.enabled = !!i915[3]
  i914.isTrigger = !!i915[4]
  request.r(i915[5], i915[6], 0, i914, 'material')
  return i914
}

Deserializers["FactoryPipePower.PipeVisualController"] = function (request, data, root) {
  var i916 = root || request.c( 'FactoryPipePower.PipeVisualController' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'visualRenderer')
  request.r(i917[2], i917[3], 0, i916, 'tutorialOverlayMaterial')
  request.r(i917[4], i917[5], 0, i916, 'greenFillTemplate')
  i916.overrideFillDefaultColor = !!i917[6]
  i916.fillDefaultColor = new pc.Color(i917[7], i917[8], i917[9], i917[10])
  return i916
}

Deserializers["FactoryPipePower.NarrativePipeSegment"] = function (request, data, root) {
  var i918 = root || request.c( 'FactoryPipePower.NarrativePipeSegment' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'visual')
  request.r(i919[2], i919[3], 0, i918, 'flowStart')
  request.r(i919[4], i919[5], 0, i918, 'flowEnd')
  request.r(i919[6], i919[7], 0, i918, 'flowElbow')
  request.r(i919[8], i919[9], 0, i918, 'completionSparks')
  i918.fillDuration = i919[10]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i921 = data
  i920.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i921[0], i920.main)
  i920.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i921[1], i920.colorBySpeed)
  i920.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i921[2], i920.colorOverLifetime)
  i920.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i921[3], i920.emission)
  i920.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i921[4], i920.rotationBySpeed)
  i920.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i921[5], i920.rotationOverLifetime)
  i920.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i921[6], i920.shape)
  i920.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i921[7], i920.sizeBySpeed)
  i920.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i921[8], i920.sizeOverLifetime)
  i920.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i921[9], i920.textureSheetAnimation)
  i920.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i921[10], i920.velocityOverLifetime)
  i920.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i921[11], i920.noise)
  i920.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i921[12], i920.inheritVelocity)
  i920.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i921[13], i920.forceOverLifetime)
  i920.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i921[14], i920.limitVelocityOverLifetime)
  i920.useAutoRandomSeed = !!i921[15]
  i920.randomSeed = i921[16]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemMain()
  var i923 = data
  i922.duration = i923[0]
  i922.loop = !!i923[1]
  i922.prewarm = !!i923[2]
  i922.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.startDelay)
  i922.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[4], i922.startLifetime)
  i922.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[5], i922.startSpeed)
  i922.startSize3D = !!i923[6]
  i922.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[7], i922.startSizeX)
  i922.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[8], i922.startSizeY)
  i922.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[9], i922.startSizeZ)
  i922.startRotation3D = !!i923[10]
  i922.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[11], i922.startRotationX)
  i922.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[12], i922.startRotationY)
  i922.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[13], i922.startRotationZ)
  i922.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i923[14], i922.startColor)
  i922.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[15], i922.gravityModifier)
  i922.simulationSpace = i923[16]
  request.r(i923[17], i923[18], 0, i922, 'customSimulationSpace')
  i922.simulationSpeed = i923[19]
  i922.useUnscaledTime = !!i923[20]
  i922.scalingMode = i923[21]
  i922.playOnAwake = !!i923[22]
  i922.maxParticles = i923[23]
  i922.emitterVelocityMode = i923[24]
  i922.stopAction = i923[25]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i924 = root || new pc.MinMaxCurve()
  var i925 = data
  i924.mode = i925[0]
  i924.curveMin = new pc.AnimationCurve( { keys_flow: i925[1] } )
  i924.curveMax = new pc.AnimationCurve( { keys_flow: i925[2] } )
  i924.curveMultiplier = i925[3]
  i924.constantMin = i925[4]
  i924.constantMax = i925[5]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i926 = root || new pc.MinMaxGradient()
  var i927 = data
  i926.mode = i927[0]
  i926.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i927[1], i926.gradientMin)
  i926.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i927[2], i926.gradientMax)
  i926.colorMin = new pc.Color(i927[3], i927[4], i927[5], i927[6])
  i926.colorMax = new pc.Color(i927[7], i927[8], i927[9], i927[10])
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i929 = data
  i928.mode = i929[0]
  var i931 = i929[1]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i931[i + 0]) );
  }
  i928.colorKeys = i930
  var i933 = i929[2]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i933[i + 0]) );
  }
  i928.alphaKeys = i932
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemColorBySpeed()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i935[1], i934.color)
  i934.range = new pc.Vec2( i935[2], i935[3] )
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i939 = data
  i938.color = new pc.Color(i939[0], i939[1], i939[2], i939[3])
  i938.time = i939[4]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i943 = data
  i942.alpha = i943[0]
  i942.time = i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemColorOverLifetime()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i945[1], i944.color)
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemEmitter()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[1], i946.rateOverTime)
  i946.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[2], i946.rateOverDistance)
  var i949 = i947[3]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i949[i + 0]) );
  }
  i946.bursts = i948
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemBurst()
  var i953 = data
  i952.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[0], i952.count)
  i952.cycleCount = i953[1]
  i952.minCount = i953[2]
  i952.maxCount = i953[3]
  i952.repeatInterval = i953[4]
  i952.time = i953[5]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemRotationBySpeed()
  var i955 = data
  i954.enabled = !!i955[0]
  i954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[1], i954.x)
  i954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[2], i954.y)
  i954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[3], i954.z)
  i954.separateAxes = !!i955[4]
  i954.range = new pc.Vec2( i955[5], i955[6] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemRotationOverLifetime()
  var i957 = data
  i956.enabled = !!i957[0]
  i956.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[1], i956.x)
  i956.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[2], i956.y)
  i956.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[3], i956.z)
  i956.separateAxes = !!i957[4]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemShape()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.shapeType = i959[1]
  i958.randomDirectionAmount = i959[2]
  i958.sphericalDirectionAmount = i959[3]
  i958.randomPositionAmount = i959[4]
  i958.alignToDirection = !!i959[5]
  i958.radius = i959[6]
  i958.radiusMode = i959[7]
  i958.radiusSpread = i959[8]
  i958.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[9], i958.radiusSpeed)
  i958.radiusThickness = i959[10]
  i958.angle = i959[11]
  i958.length = i959[12]
  i958.boxThickness = new pc.Vec3( i959[13], i959[14], i959[15] )
  i958.meshShapeType = i959[16]
  request.r(i959[17], i959[18], 0, i958, 'mesh')
  request.r(i959[19], i959[20], 0, i958, 'meshRenderer')
  request.r(i959[21], i959[22], 0, i958, 'skinnedMeshRenderer')
  i958.useMeshMaterialIndex = !!i959[23]
  i958.meshMaterialIndex = i959[24]
  i958.useMeshColors = !!i959[25]
  i958.normalOffset = i959[26]
  i958.arc = i959[27]
  i958.arcMode = i959[28]
  i958.arcSpread = i959[29]
  i958.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[30], i958.arcSpeed)
  i958.donutRadius = i959[31]
  i958.position = new pc.Vec3( i959[32], i959[33], i959[34] )
  i958.rotation = new pc.Vec3( i959[35], i959[36], i959[37] )
  i958.scale = new pc.Vec3( i959[38], i959[39], i959[40] )
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemSizeBySpeed()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[1], i960.x)
  i960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[2], i960.y)
  i960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[3], i960.z)
  i960.separateAxes = !!i961[4]
  i960.range = new pc.Vec2( i961[5], i961[6] )
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemSizeOverLifetime()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[1], i962.x)
  i962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.y)
  i962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[3], i962.z)
  i962.separateAxes = !!i963[4]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.mode = i965[1]
  i964.animation = i965[2]
  i964.numTilesX = i965[3]
  i964.numTilesY = i965[4]
  i964.useRandomRow = !!i965[5]
  i964.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[6], i964.frameOverTime)
  i964.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[7], i964.startFrame)
  i964.cycleCount = i965[8]
  i964.rowIndex = i965[9]
  i964.flipU = i965[10]
  i964.flipV = i965[11]
  i964.spriteCount = i965[12]
  var i967 = i965[13]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.sprites = i966
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i970 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i971 = data
  i970.enabled = !!i971[0]
  i970.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[1], i970.x)
  i970.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[2], i970.y)
  i970.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[3], i970.z)
  i970.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[4], i970.radial)
  i970.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[5], i970.speedModifier)
  i970.space = i971[6]
  i970.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[7], i970.orbitalX)
  i970.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[8], i970.orbitalY)
  i970.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[9], i970.orbitalZ)
  i970.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[10], i970.orbitalOffsetX)
  i970.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[11], i970.orbitalOffsetY)
  i970.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[12], i970.orbitalOffsetZ)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemNoise()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.separateAxes = !!i973[1]
  i972.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[2], i972.strengthX)
  i972.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[3], i972.strengthY)
  i972.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[4], i972.strengthZ)
  i972.frequency = i973[5]
  i972.damping = !!i973[6]
  i972.octaveCount = i973[7]
  i972.octaveMultiplier = i973[8]
  i972.octaveScale = i973[9]
  i972.quality = i973[10]
  i972.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[11], i972.scrollSpeed)
  i972.scrollSpeedMultiplier = i973[12]
  i972.remapEnabled = !!i973[13]
  i972.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[14], i972.remapX)
  i972.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[15], i972.remapY)
  i972.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[16], i972.remapZ)
  i972.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[17], i972.positionAmount)
  i972.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[18], i972.rotationAmount)
  i972.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[19], i972.sizeAmount)
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemInheritVelocity()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.mode = i975[1]
  i974.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.curve)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i976 = root || new pc.ParticleSystemForceOverLifetime()
  var i977 = data
  i976.enabled = !!i977[0]
  i976.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[1], i976.x)
  i976.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[2], i976.y)
  i976.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[3], i976.z)
  i976.space = i977[4]
  i976.randomized = !!i977[5]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[1], i978.limit)
  i978.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[2], i978.limitX)
  i978.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[3], i978.limitY)
  i978.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[4], i978.limitZ)
  i978.dampen = i979[5]
  i978.separateAxes = !!i979[6]
  i978.space = i979[7]
  i978.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[8], i978.drag)
  i978.multiplyDragByParticleSize = !!i979[9]
  i978.multiplyDragByParticleVelocity = !!i979[10]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'mesh')
  i980.meshCount = i981[2]
  i980.activeVertexStreamsCount = i981[3]
  i980.alignment = i981[4]
  i980.renderMode = i981[5]
  i980.sortMode = i981[6]
  i980.lengthScale = i981[7]
  i980.velocityScale = i981[8]
  i980.cameraVelocityScale = i981[9]
  i980.normalDirection = i981[10]
  i980.sortingFudge = i981[11]
  i980.minParticleSize = i981[12]
  i980.maxParticleSize = i981[13]
  i980.pivot = new pc.Vec3( i981[14], i981[15], i981[16] )
  request.r(i981[17], i981[18], 0, i980, 'trailMaterial')
  i980.applyActiveColorSpace = !!i981[19]
  i980.enabled = !!i981[20]
  request.r(i981[21], i981[22], 0, i980, 'sharedMaterial')
  var i983 = i981[23]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.sharedMaterials = i982
  i980.receiveShadows = !!i981[24]
  i980.shadowCastingMode = i981[25]
  i980.sortingLayerID = i981[26]
  i980.sortingOrder = i981[27]
  i980.lightmapIndex = i981[28]
  i980.lightmapSceneIndex = i981[29]
  i980.lightmapScaleOffset = new pc.Vec4( i981[30], i981[31], i981[32], i981[33] )
  i980.lightProbeUsage = i981[34]
  i980.reflectionProbeUsage = i981[35]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i985 = data
  i984.aspect = i985[0]
  i984.orthographic = !!i985[1]
  i984.orthographicSize = i985[2]
  i984.backgroundColor = new pc.Color(i985[3], i985[4], i985[5], i985[6])
  i984.nearClipPlane = i985[7]
  i984.farClipPlane = i985[8]
  i984.fieldOfView = i985[9]
  i984.depth = i985[10]
  i984.clearFlags = i985[11]
  i984.cullingMask = i985[12]
  i984.rect = i985[13]
  request.r(i985[14], i985[15], 0, i984, 'targetTexture')
  i984.usePhysicalProperties = !!i985[16]
  i984.focalLength = i985[17]
  i984.sensorSize = new pc.Vec2( i985[18], i985[19] )
  i984.lensShift = new pc.Vec2( i985[20], i985[21] )
  i984.gateFit = i985[22]
  i984.commandBufferCount = i985[23]
  i984.cameraType = i985[24]
  i984.enabled = !!i985[25]
  return i984
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i987 = data
  i986.m_RenderShadows = !!i987[0]
  i986.m_RequiresDepthTextureOption = i987[1]
  i986.m_RequiresOpaqueTextureOption = i987[2]
  i986.m_CameraType = i987[3]
  var i989 = i987[4]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 1, i988, '')
  }
  i986.m_Cameras = i988
  i986.m_RendererIndex = i987[5]
  i986.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i987[6] )
  request.r(i987[7], i987[8], 0, i986, 'm_VolumeTrigger')
  i986.m_VolumeFrameworkUpdateModeOption = i987[9]
  i986.m_RenderPostProcessing = !!i987[10]
  i986.m_Antialiasing = i987[11]
  i986.m_AntialiasingQuality = i987[12]
  i986.m_StopNaN = !!i987[13]
  i986.m_Dithering = !!i987[14]
  i986.m_ClearDepth = !!i987[15]
  i986.m_AllowXRRendering = !!i987[16]
  i986.m_AllowHDROutput = !!i987[17]
  i986.m_UseScreenCoordOverride = !!i987[18]
  i986.m_ScreenSizeOverride = new pc.Vec4( i987[19], i987[20], i987[21], i987[22] )
  i986.m_ScreenCoordScaleBias = new pc.Vec4( i987[23], i987[24], i987[25], i987[26] )
  i986.m_RequiresDepthTexture = !!i987[27]
  i986.m_RequiresColorTexture = !!i987[28]
  i986.m_Version = i987[29]
  i986.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i987[30], i986.m_TaaSettings)
  return i986
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i993 = data
  i992.m_Quality = i993[0]
  i992.m_FrameInfluence = i993[1]
  i992.m_JitterScale = i993[2]
  i992.m_MipBias = i993[3]
  i992.m_VarianceClampScale = i993[4]
  i992.m_ContrastAdaptiveSharpening = i993[5]
  return i992
}

Deserializers["Unity.Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i994 = root || request.c( 'Unity.Cinemachine.CinemachineBrain' )
  var i995 = data
  i994.ShowDebugText = !!i995[0]
  i994.ShowCameraFrustum = !!i995[1]
  i994.IgnoreTimeScale = !!i995[2]
  request.r(i995[3], i995[4], 0, i994, 'WorldUpOverride')
  i994.ChannelMask = i995[5]
  i994.UpdateMethod = i995[6]
  i994.BlendUpdateMethod = i995[7]
  i994.LensModeOverride = request.d('Unity.Cinemachine.CinemachineBrain+LensModeOverrideSettings', i995[8], i994.LensModeOverride)
  i994.DefaultBlend = request.d('Unity.Cinemachine.CinemachineBlendDefinition', i995[9], i994.DefaultBlend)
  request.r(i995[10], i995[11], 0, i994, 'CustomBlends')
  return i994
}

Deserializers["Unity.Cinemachine.CinemachineBrain+LensModeOverrideSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'Unity.Cinemachine.CinemachineBrain+LensModeOverrideSettings' )
  var i997 = data
  i996.Enabled = !!i997[0]
  i996.DefaultMode = i997[1]
  return i996
}

Deserializers["Unity.Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i998 = root || request.c( 'Unity.Cinemachine.CinemachineBlendDefinition' )
  var i999 = data
  i998.Style = i999[0]
  i998.Time = i999[1]
  i998.CustomCurve = new pc.AnimationCurve( { keys_flow: i999[2] } )
  return i998
}

Deserializers["FactoryPipePower.StartPowerNode"] = function (request, data, root) {
  var i1000 = root || request.c( 'FactoryPipePower.StartPowerNode' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'powerOutput')
  request.r(i1001[2], i1001[3], 0, i1000, 'nextNodeBehaviour')
  request.r(i1001[4], i1001[5], 0, i1000, 'visual')
  i1000.deferPowerActivation = !!i1001[6]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1003 = data
  i1002.center = new pc.Vec3( i1003[0], i1003[1], i1003[2] )
  i1002.radius = i1003[3]
  i1002.height = i1003[4]
  i1002.direction = i1003[5]
  i1002.enabled = !!i1003[6]
  i1002.isTrigger = !!i1003[7]
  request.r(i1003[8], i1003[9], 0, i1002, 'material')
  return i1002
}

Deserializers["FactoryPipePower.PipeSlotController"] = function (request, data, root) {
  var i1004 = root || request.c( 'FactoryPipePower.PipeSlotController' )
  var i1005 = data
  i1004.expectedSpec = request.d('FactoryPipePower.PipeSpec', i1005[0], i1004.expectedSpec)
  i1004.rotationGroup = i1005[1]
  i1004.expectedCornerGroup = i1005[2]
  request.r(i1005[3], i1005[4], 0, i1004, 'anchorY')
  request.r(i1005[5], i1005[6], 0, i1004, 'slotVisual')
  request.r(i1005[7], i1005[8], 0, i1004, 'connectorA')
  request.r(i1005[9], i1005[10], 0, i1004, 'connectorB')
  request.r(i1005[11], i1005[12], 0, i1004, 'captureCollider')
  request.r(i1005[13], i1005[14], 0, i1004, 'tapCollider')
  request.r(i1005[15], i1005[16], 0, i1004, 'emptyMaterial')
  request.r(i1005[17], i1005[18], 0, i1004, 'hoverValidMaterial')
  request.r(i1005[19], i1005[20], 0, i1004, 'wrongMaterial')
  request.r(i1005[21], i1005[22], 0, i1004, 'defaultMaterial')
  i1004.rotationDuration = i1005[23]
  i1004.chargingDuration = i1005[24]
  request.r(i1005[25], i1005[26], 0, i1004, 'previousNodeBehaviour')
  request.r(i1005[27], i1005[28], 0, i1004, 'nextNodeBehaviour')
  request.r(i1005[29], i1005[30], 0, i1004, 'completionSparks')
  return i1004
}

Deserializers["FactoryPipePower.PipeSpec"] = function (request, data, root) {
  var i1006 = root || request.c( 'FactoryPipePower.PipeSpec' )
  var i1007 = data
  i1006.diameter = i1007[0]
  i1006.length = i1007[1]
  i1006.shape = i1007[2]
  return i1006
}

Deserializers["FactoryPipePower.PipeCompletionSparks"] = function (request, data, root) {
  var i1008 = root || request.c( 'FactoryPipePower.PipeCompletionSparks' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'sparksA')
  request.r(i1009[2], i1009[3], 0, i1008, 'sparksB')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1011 = data
  i1010.center = new pc.Vec3( i1011[0], i1011[1], i1011[2] )
  i1010.size = new pc.Vec3( i1011[3], i1011[4], i1011[5] )
  i1010.enabled = !!i1011[6]
  i1010.isTrigger = !!i1011[7]
  request.r(i1011[8], i1011[9], 0, i1010, 'material')
  return i1010
}

Deserializers["FactoryPipePower.PipeSlotCaptureVolume"] = function (request, data, root) {
  var i1012 = root || request.c( 'FactoryPipePower.PipeSlotCaptureVolume' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'ownerSlot')
  return i1012
}

Deserializers["FactoryPipePower.EndPowerNode"] = function (request, data, root) {
  var i1014 = root || request.c( 'FactoryPipePower.EndPowerNode' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'expectedPreviousBehaviour')
  request.r(i1015[2], i1015[3], 0, i1014, 'powerInput')
  request.r(i1015[4], i1015[5], 0, i1014, 'visual')
  request.r(i1015[6], i1015[7], 0, i1014, 'inactiveMaterial')
  request.r(i1015[8], i1015[9], 0, i1014, 'poweredMaterial')
  request.r(i1015[10], i1015[11], 0, i1014, 'factoryPowerController')
  request.r(i1015[12], i1015[13], 0, i1014, 'narrativePowerSequence')
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1017 = data
  i1016.mass = i1017[0]
  i1016.drag = i1017[1]
  i1016.angularDrag = i1017[2]
  i1016.useGravity = !!i1017[3]
  i1016.isKinematic = !!i1017[4]
  i1016.constraints = i1017[5]
  i1016.maxAngularVelocity = i1017[6]
  i1016.collisionDetectionMode = i1017[7]
  i1016.interpolation = i1017[8]
  return i1016
}

Deserializers["FactoryPipePower.DraggablePipeController"] = function (request, data, root) {
  var i1018 = root || request.c( 'FactoryPipePower.DraggablePipeController' )
  var i1019 = data
  i1018.spec = request.d('FactoryPipePower.PipeSpec', i1019[0], i1018.spec)
  request.r(i1019[1], i1019[2], 0, i1018, 'visual')
  request.r(i1019[3], i1019[4], 0, i1018, 'pickCollider')
  request.r(i1019[5], i1019[6], 0, i1018, 'dragCollider')
  request.r(i1019[7], i1019[8], 0, i1018, 'body')
  request.r(i1019[9], i1019[10], 0, i1018, 'defaultMaterial')
  i1018.returnDuration = i1019[11]
  i1018.dragPlaneHeight = i1019[12]
  i1018.obstacleSkin = i1019[13]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1021 = data
  i1020.pivot = new pc.Vec2( i1021[0], i1021[1] )
  i1020.anchorMin = new pc.Vec2( i1021[2], i1021[3] )
  i1020.anchorMax = new pc.Vec2( i1021[4], i1021[5] )
  i1020.sizeDelta = new pc.Vec2( i1021[6], i1021[7] )
  i1020.anchoredPosition3D = new pc.Vec3( i1021[8], i1021[9], i1021[10] )
  i1020.rotation = new pc.Quat(i1021[11], i1021[12], i1021[13], i1021[14])
  i1020.scale = new pc.Vec3( i1021[15], i1021[16], i1021[17] )
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1023 = data
  i1022.planeDistance = i1023[0]
  i1022.referencePixelsPerUnit = i1023[1]
  i1022.isFallbackOverlay = !!i1023[2]
  i1022.renderMode = i1023[3]
  i1022.renderOrder = i1023[4]
  i1022.sortingLayerName = i1023[5]
  i1022.sortingOrder = i1023[6]
  i1022.scaleFactor = i1023[7]
  request.r(i1023[8], i1023[9], 0, i1022, 'worldCamera')
  i1022.overrideSorting = !!i1023[10]
  i1022.pixelPerfect = !!i1023[11]
  i1022.targetDisplay = i1023[12]
  i1022.overridePixelPerfect = !!i1023[13]
  i1022.enabled = !!i1023[14]
  return i1022
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1025 = data
  i1024.m_UiScaleMode = i1025[0]
  i1024.m_ReferencePixelsPerUnit = i1025[1]
  i1024.m_ScaleFactor = i1025[2]
  i1024.m_ReferenceResolution = new pc.Vec2( i1025[3], i1025[4] )
  i1024.m_ScreenMatchMode = i1025[5]
  i1024.m_MatchWidthOrHeight = i1025[6]
  i1024.m_PhysicalUnit = i1025[7]
  i1024.m_FallbackScreenDPI = i1025[8]
  i1024.m_DefaultSpriteDPI = i1025[9]
  i1024.m_DynamicPixelsPerUnit = i1025[10]
  i1024.m_PresetInfoIsWorld = !!i1025[11]
  return i1024
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1027 = data
  i1026.m_IgnoreReversedGraphics = !!i1027[0]
  i1026.m_BlockingObjects = i1027[1]
  i1026.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1027[2] )
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1029 = data
  i1028.cullTransparentMesh = !!i1029[0]
  return i1028
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.UI.Text' )
  var i1031 = data
  i1030.m_FontData = request.d('UnityEngine.UI.FontData', i1031[0], i1030.m_FontData)
  i1030.m_Text = i1031[1]
  request.r(i1031[2], i1031[3], 0, i1030, 'm_Material')
  i1030.m_Maskable = !!i1031[4]
  i1030.m_Color = new pc.Color(i1031[5], i1031[6], i1031[7], i1031[8])
  i1030.m_RaycastTarget = !!i1031[9]
  i1030.m_RaycastPadding = new pc.Vec4( i1031[10], i1031[11], i1031[12], i1031[13] )
  return i1030
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'm_Font')
  i1032.m_FontSize = i1033[2]
  i1032.m_FontStyle = i1033[3]
  i1032.m_BestFit = !!i1033[4]
  i1032.m_MinSize = i1033[5]
  i1032.m_MaxSize = i1033[6]
  i1032.m_Alignment = i1033[7]
  i1032.m_AlignByGeometry = !!i1033[8]
  i1032.m_RichText = !!i1033[9]
  i1032.m_HorizontalOverflow = i1033[10]
  i1032.m_VerticalOverflow = i1033[11]
  i1032.m_LineSpacing = i1033[12]
  return i1032
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.UI.Image' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'm_Sprite')
  i1034.m_Type = i1035[2]
  i1034.m_PreserveAspect = !!i1035[3]
  i1034.m_FillCenter = !!i1035[4]
  i1034.m_FillMethod = i1035[5]
  i1034.m_FillAmount = i1035[6]
  i1034.m_FillClockwise = !!i1035[7]
  i1034.m_FillOrigin = i1035[8]
  i1034.m_UseSpriteMesh = !!i1035[9]
  i1034.m_PixelsPerUnitMultiplier = i1035[10]
  request.r(i1035[11], i1035[12], 0, i1034, 'm_Material')
  i1034.m_Maskable = !!i1035[13]
  i1034.m_Color = new pc.Color(i1035[14], i1035[15], i1035[16], i1035[17])
  i1034.m_RaycastTarget = !!i1035[18]
  i1034.m_RaycastPadding = new pc.Vec4( i1035[19], i1035[20], i1035[21], i1035[22] )
  return i1034
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.UI.Button' )
  var i1037 = data
  i1036.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1037[0], i1036.m_OnClick)
  i1036.m_Navigation = request.d('UnityEngine.UI.Navigation', i1037[1], i1036.m_Navigation)
  i1036.m_Transition = i1037[2]
  i1036.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1037[3], i1036.m_Colors)
  i1036.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1037[4], i1036.m_SpriteState)
  i1036.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1037[5], i1036.m_AnimationTriggers)
  i1036.m_Interactable = !!i1037[6]
  request.r(i1037[7], i1037[8], 0, i1036, 'm_TargetGraphic')
  return i1036
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1039 = data
  i1038.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1039[0], i1038.m_PersistentCalls)
  return i1038
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1041 = data
  var i1043 = i1041[0]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.add(request.d('UnityEngine.Events.PersistentCall', i1043[i + 0]));
  }
  i1040.m_Calls = i1042
  return i1040
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'm_Target')
  i1046.m_TargetAssemblyTypeName = i1047[2]
  i1046.m_MethodName = i1047[3]
  i1046.m_Mode = i1047[4]
  i1046.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1047[5], i1046.m_Arguments)
  i1046.m_CallState = i1047[6]
  return i1046
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1049 = data
  i1048.m_Mode = i1049[0]
  i1048.m_WrapAround = !!i1049[1]
  request.r(i1049[2], i1049[3], 0, i1048, 'm_SelectOnUp')
  request.r(i1049[4], i1049[5], 0, i1048, 'm_SelectOnDown')
  request.r(i1049[6], i1049[7], 0, i1048, 'm_SelectOnLeft')
  request.r(i1049[8], i1049[9], 0, i1048, 'm_SelectOnRight')
  return i1048
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1051 = data
  i1050.m_NormalColor = new pc.Color(i1051[0], i1051[1], i1051[2], i1051[3])
  i1050.m_HighlightedColor = new pc.Color(i1051[4], i1051[5], i1051[6], i1051[7])
  i1050.m_PressedColor = new pc.Color(i1051[8], i1051[9], i1051[10], i1051[11])
  i1050.m_SelectedColor = new pc.Color(i1051[12], i1051[13], i1051[14], i1051[15])
  i1050.m_DisabledColor = new pc.Color(i1051[16], i1051[17], i1051[18], i1051[19])
  i1050.m_ColorMultiplier = i1051[20]
  i1050.m_FadeDuration = i1051[21]
  return i1050
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'm_HighlightedSprite')
  request.r(i1053[2], i1053[3], 0, i1052, 'm_PressedSprite')
  request.r(i1053[4], i1053[5], 0, i1052, 'm_SelectedSprite')
  request.r(i1053[6], i1053[7], 0, i1052, 'm_DisabledSprite')
  return i1052
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1055 = data
  i1054.m_NormalTrigger = i1055[0]
  i1054.m_HighlightedTrigger = i1055[1]
  i1054.m_PressedTrigger = i1055[2]
  i1054.m_SelectedTrigger = i1055[3]
  i1054.m_DisabledTrigger = i1055[4]
  return i1054
}

Deserializers["FactoryPipePower.CompletionUI"] = function (request, data, root) {
  var i1056 = root || request.c( 'FactoryPipePower.CompletionUI' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'panelRoot')
  request.r(i1057[2], i1057[3], 0, i1056, 'titleLabel')
  request.r(i1057[4], i1057[5], 0, i1056, 'subtitleLabel')
  request.r(i1057[6], i1057[7], 0, i1056, 'primaryButton')
  i1056.titleText = i1057[8]
  i1056.subtitleText = i1057[9]
  return i1056
}

Deserializers["FactoryPipePower.PointerInputController"] = function (request, data, root) {
  var i1058 = root || request.c( 'FactoryPipePower.PointerInputController' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'raycastCamera')
  request.r(i1059[2], i1059[3], 0, i1058, 'inputActions')
  i1058.maxRayDistance = i1059[4]
  i1058.pickMask = UnityEngine.LayerMask.FromIntegerValue( i1059[5] )
  i1058.slotTapMask = UnityEngine.LayerMask.FromIntegerValue( i1059[6] )
  request.r(i1059[7], i1059[8], 0, i1058, 'tutorialGateBehaviour')
  return i1058
}

Deserializers["FactoryPipePower.PipeSlotRegistry"] = function (request, data, root) {
  var i1060 = root || request.c( 'FactoryPipePower.PipeSlotRegistry' )
  var i1061 = data
  return i1060
}

Deserializers["FactoryPipePower.PowerChainController"] = function (request, data, root) {
  var i1062 = root || request.c( 'FactoryPipePower.PowerChainController' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'startNode')
  var i1065 = i1063[2]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 2) {
  request.r(i1065[i + 0], i1065[i + 1], 2, i1064, '')
  }
  i1062.slots = i1064
  request.r(i1063[3], i1063[4], 0, i1062, 'endNode')
  request.r(i1063[5], i1063[6], 0, i1062, 'factoryPowerController')
  request.r(i1063[7], i1063[8], 0, i1062, 'narrativeSequence')
  return i1062
}

Deserializers["FactoryPipePower.TutorialController"] = function (request, data, root) {
  var i1068 = root || request.c( 'FactoryPipePower.TutorialController' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'tutorialPipe')
  request.r(i1069[2], i1069[3], 0, i1068, 'tutorialSlot')
  i1068.enableOnInitialize = !!i1069[4]
  return i1068
}

Deserializers["FactoryPipePower.SceneInitializer"] = function (request, data, root) {
  var i1070 = root || request.c( 'FactoryPipePower.SceneInitializer' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'pointerInput')
  request.r(i1071[2], i1071[3], 0, i1070, 'registry')
  request.r(i1071[4], i1071[5], 0, i1070, 'powerChain')
  request.r(i1071[6], i1071[7], 0, i1070, 'tutorial')
  request.r(i1071[8], i1071[9], 0, i1070, 'factoryTutorial')
  var i1073 = i1071[10]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1070.slots = i1072
  return i1070
}

Deserializers["FactoryPipePower.GameFlowController"] = function (request, data, root) {
  var i1074 = root || request.c( 'FactoryPipePower.GameFlowController' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'factoryPowerController')
  request.r(i1075[2], i1075[3], 0, i1074, 'completionUI')
  request.r(i1075[4], i1075[5], 0, i1074, 'pointerInput')
  request.r(i1075[6], i1075[7], 0, i1074, 'tutorialController')
  i1074.completionDelay = i1075[8]
  return i1074
}

Deserializers["FactoryPipePower.FactoryTutorialController"] = function (request, data, root) {
  var i1076 = root || request.c( 'FactoryPipePower.FactoryTutorialController' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'cameraBrain')
  request.r(i1077[2], i1077[3], 0, i1076, 'overviewCamera')
  request.r(i1077[4], i1077[5], 0, i1076, 'gameplayCamera')
  request.r(i1077[6], i1077[7], 0, i1076, 'firstPipeCamera')
  request.r(i1077[8], i1077[9], 0, i1076, 'firstChargingCamera')
  i1076.blendDuration = i1077[10]
  i1076.blendTimeout = i1077[11]
  i1076.overviewPriority = i1077[12]
  i1076.gameplayPriority = i1077[13]
  request.r(i1077[14], i1077[15], 0, i1076, 'pointerInput')
  request.r(i1077[16], i1077[17], 0, i1076, 'narrativeSequence')
  request.r(i1077[18], i1077[19], 0, i1076, 'startNode')
  request.r(i1077[20], i1077[21], 0, i1076, 'endNode')
  request.r(i1077[22], i1077[23], 0, i1076, 'factoryPowerController')
  request.r(i1077[24], i1077[25], 0, i1076, 'indicatorSequence')
  request.r(i1077[26], i1077[27], 0, i1076, 'chimneySmoke')
  request.r(i1077[28], i1077[29], 0, i1076, 'slotRegistry')
  request.r(i1077[30], i1077[31], 0, i1076, 'tutorialPipe')
  request.r(i1077[32], i1077[33], 0, i1076, 'tutorialSlot')
  request.r(i1077[34], i1077[35], 0, i1076, 'tutorialCanvas')
  request.r(i1077[36], i1077[37], 0, i1076, 'messageText')
  request.r(i1077[38], i1077[39], 0, i1076, 'handImage')
  request.r(i1077[40], i1077[41], 0, i1076, 'handMessageGroup')
  request.r(i1077[42], i1077[43], 0, i1076, 'messageBackdrop')
  i1076.backdropPadding = i1077[44]
  i1076.handAnchorOffset = new pc.Vec2( i1077[45], i1077[46] )
  i1076.textUnderHandOffset = i1077[47]
  i1076.textCenterScreenOffset = i1077[48]
  i1076.pickHandLiftPx = i1077[49]
  i1076.handPulseMin = i1077[50]
  i1076.handPulseMax = i1077[51]
  i1076.handPulsePeriod = i1077[52]
  return i1076
}

Deserializers["FactoryPipePower.NarrativePowerSequence"] = function (request, data, root) {
  var i1078 = root || request.c( 'FactoryPipePower.NarrativePowerSequence' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1078.leftSegments = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 2, i1082, '')
  }
  i1078.rightSegments = i1082
  request.r(i1079[2], i1079[3], 0, i1078, 'startNode')
  request.r(i1079[4], i1079[5], 0, i1078, 'endNode')
  request.r(i1079[6], i1079[7], 0, i1078, 'factoryPowerController')
  i1078.initialDelay = i1079[8]
  i1078.tutorialControlled = !!i1079[9]
  return i1078
}

Deserializers["Unity.Cinemachine.CinemachineCamera"] = function (request, data, root) {
  var i1086 = root || request.c( 'Unity.Cinemachine.CinemachineCamera' )
  var i1087 = data
  i1086.Target = request.d('Unity.Cinemachine.CameraTarget', i1087[0], i1086.Target)
  i1086.Lens = request.d('Unity.Cinemachine.LensSettings', i1087[1], i1086.Lens)
  i1086.BlendHint = i1087[2]
  i1086.Priority = request.d('Unity.Cinemachine.PrioritySettings', i1087[3], i1086.Priority)
  i1086.OutputChannel = i1087[4]
  i1086.StandbyUpdate = i1087[5]
  i1086.m_StreamingVersion = i1087[6]
  i1086.m_LegacyPriority = i1087[7]
  return i1086
}

Deserializers["Unity.Cinemachine.CameraTarget"] = function (request, data, root) {
  var i1088 = root || request.c( 'Unity.Cinemachine.CameraTarget' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'TrackingTarget')
  request.r(i1089[2], i1089[3], 0, i1088, 'LookAtTarget')
  i1088.CustomLookAtTarget = !!i1089[4]
  return i1088
}

Deserializers["Unity.Cinemachine.LensSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Unity.Cinemachine.LensSettings' )
  var i1091 = data
  i1090.FieldOfView = i1091[0]
  i1090.OrthographicSize = i1091[1]
  i1090.NearClipPlane = i1091[2]
  i1090.FarClipPlane = i1091[3]
  i1090.Dutch = i1091[4]
  i1090.ModeOverride = i1091[5]
  i1090.PhysicalProperties = request.d('Unity.Cinemachine.LensSettings+PhysicalSettings', i1091[6], i1090.PhysicalProperties)
  return i1090
}

Deserializers["Unity.Cinemachine.LensSettings+PhysicalSettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'Unity.Cinemachine.LensSettings+PhysicalSettings' )
  var i1093 = data
  i1092.GateFit = i1093[0]
  i1092.SensorSize = new pc.Vec2( i1093[1], i1093[2] )
  i1092.LensShift = new pc.Vec2( i1093[3], i1093[4] )
  i1092.FocusDistance = i1093[5]
  i1092.Iso = i1093[6]
  i1092.ShutterSpeed = i1093[7]
  i1092.Aperture = i1093[8]
  i1092.BladeCount = i1093[9]
  i1092.Curvature = new pc.Vec2( i1093[10], i1093[11] )
  i1092.BarrelClipping = i1093[12]
  i1092.Anamorphism = i1093[13]
  return i1092
}

Deserializers["Unity.Cinemachine.PrioritySettings"] = function (request, data, root) {
  var i1094 = root || request.c( 'Unity.Cinemachine.PrioritySettings' )
  var i1095 = data
  i1094.Enabled = !!i1095[0]
  i1094.m_Value = i1095[1]
  return i1094
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1097 = data
  i1096.m_EffectColor = new pc.Color(i1097[0], i1097[1], i1097[2], i1097[3])
  i1096.m_EffectDistance = new pc.Vec2( i1097[4], i1097[5] )
  i1096.m_UseGraphicAlpha = !!i1097[6]
  return i1096
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.UI.Outline' )
  var i1099 = data
  i1098.m_EffectColor = new pc.Color(i1099[0], i1099[1], i1099[2], i1099[3])
  i1098.m_EffectDistance = new pc.Vec2( i1099[4], i1099[5] )
  i1098.m_UseGraphicAlpha = !!i1099[6]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1101 = data
  i1100.ambientIntensity = i1101[0]
  i1100.reflectionIntensity = i1101[1]
  i1100.ambientMode = i1101[2]
  i1100.ambientLight = new pc.Color(i1101[3], i1101[4], i1101[5], i1101[6])
  i1100.ambientSkyColor = new pc.Color(i1101[7], i1101[8], i1101[9], i1101[10])
  i1100.ambientGroundColor = new pc.Color(i1101[11], i1101[12], i1101[13], i1101[14])
  i1100.ambientEquatorColor = new pc.Color(i1101[15], i1101[16], i1101[17], i1101[18])
  i1100.fogColor = new pc.Color(i1101[19], i1101[20], i1101[21], i1101[22])
  i1100.fogEndDistance = i1101[23]
  i1100.fogStartDistance = i1101[24]
  i1100.fogDensity = i1101[25]
  i1100.fog = !!i1101[26]
  request.r(i1101[27], i1101[28], 0, i1100, 'skybox')
  i1100.fogMode = i1101[29]
  var i1103 = i1101[30]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1103[i + 0]) );
  }
  i1100.lightmaps = i1102
  i1100.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1101[31], i1100.lightProbes)
  i1100.lightmapsMode = i1101[32]
  i1100.mixedBakeMode = i1101[33]
  i1100.environmentLightingMode = i1101[34]
  i1100.ambientProbe = new pc.SphericalHarmonicsL2(i1101[35])
  request.r(i1101[36], i1101[37], 0, i1100, 'customReflection')
  request.r(i1101[38], i1101[39], 0, i1100, 'defaultReflection')
  i1100.defaultReflectionMode = i1101[40]
  i1100.defaultReflectionResolution = i1101[41]
  i1100.sunLightObjectId = i1101[42]
  i1100.pixelLightCount = i1101[43]
  i1100.defaultReflectionHDR = !!i1101[44]
  i1100.hasLightDataAsset = !!i1101[45]
  i1100.hasManualGenerate = !!i1101[46]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'lightmapColor')
  request.r(i1107[2], i1107[3], 0, i1106, 'lightmapDirection')
  request.r(i1107[4], i1107[5], 0, i1106, 'shadowMask')
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1108 = root || new UnityEngine.LightProbes()
  var i1109 = data
  return i1108
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'panelPrefab')
  var i1119 = i1117[2]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i1119[i + 0]));
  }
  i1116.prefabs = i1118
  return i1116
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i1123 = data
  i1122.type = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'prefab')
  return i1122
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1125 = data
  i1124.m_Spacing = i1125[0]
  i1124.m_ChildForceExpandWidth = !!i1125[1]
  i1124.m_ChildForceExpandHeight = !!i1125[2]
  i1124.m_ChildControlWidth = !!i1125[3]
  i1124.m_ChildControlHeight = !!i1125[4]
  i1124.m_ChildScaleWidth = !!i1125[5]
  i1124.m_ChildScaleHeight = !!i1125[6]
  i1124.m_ReverseArrangement = !!i1125[7]
  i1124.m_Padding = UnityEngine.RectOffset.FromPaddings(i1125[8], i1125[9], i1125[10], i1125[11])
  i1124.m_ChildAlignment = i1125[12]
  return i1124
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1127 = data
  i1126.m_HorizontalFit = i1127[0]
  i1126.m_VerticalFit = i1127[1]
  return i1126
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'contentHolder')
  return i1128
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'nameLabel')
  request.r(i1131[2], i1131[3], 0, i1130, 'scrollRect')
  request.r(i1131[4], i1131[5], 0, i1130, 'viewport')
  request.r(i1131[6], i1131[7], 0, i1130, 'Canvas')
  return i1130
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1133 = data
  i1132.m_IgnoreLayout = !!i1133[0]
  i1132.m_MinWidth = i1133[1]
  i1132.m_MinHeight = i1133[2]
  i1132.m_PreferredWidth = i1133[3]
  i1132.m_PreferredHeight = i1133[4]
  i1132.m_FlexibleWidth = i1133[5]
  i1132.m_FlexibleHeight = i1133[6]
  i1132.m_LayoutPriority = i1133[7]
  return i1132
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'm_ObjectArgument')
  i1134.m_ObjectArgumentAssemblyTypeName = i1135[2]
  i1134.m_IntArgument = i1135[3]
  i1134.m_FloatArgument = i1135[4]
  i1134.m_StringArgument = i1135[5]
  i1134.m_BoolArgument = !!i1135[6]
  return i1134
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'm_Content')
  i1136.m_Horizontal = !!i1137[2]
  i1136.m_Vertical = !!i1137[3]
  i1136.m_MovementType = i1137[4]
  i1136.m_Elasticity = i1137[5]
  i1136.m_Inertia = !!i1137[6]
  i1136.m_DecelerationRate = i1137[7]
  i1136.m_ScrollSensitivity = i1137[8]
  request.r(i1137[9], i1137[10], 0, i1136, 'm_Viewport')
  request.r(i1137[11], i1137[12], 0, i1136, 'm_HorizontalScrollbar')
  request.r(i1137[13], i1137[14], 0, i1136, 'm_VerticalScrollbar')
  i1136.m_HorizontalScrollbarVisibility = i1137[15]
  i1136.m_VerticalScrollbarVisibility = i1137[16]
  i1136.m_HorizontalScrollbarSpacing = i1137[17]
  i1136.m_VerticalScrollbarSpacing = i1137[18]
  i1136.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1137[19], i1136.m_OnValueChanged)
  return i1136
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1139 = data
  i1138.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1139[0], i1138.m_PersistentCalls)
  return i1138
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1141 = data
  i1140.m_ShowMaskGraphic = !!i1141[0]
  return i1140
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'm_HandleRect')
  i1142.m_Direction = i1143[2]
  i1142.m_Value = i1143[3]
  i1142.m_Size = i1143[4]
  i1142.m_NumberOfSteps = i1143[5]
  i1142.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1143[6], i1142.m_OnValueChanged)
  i1142.m_Navigation = request.d('UnityEngine.UI.Navigation', i1143[7], i1142.m_Navigation)
  i1142.m_Transition = i1143[8]
  i1142.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1143[9], i1142.m_Colors)
  i1142.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1143[10], i1142.m_SpriteState)
  i1142.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1143[11], i1142.m_AnimationTriggers)
  i1142.m_Interactable = !!i1143[12]
  request.r(i1143[13], i1143[14], 0, i1142, 'm_TargetGraphic')
  return i1142
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1145 = data
  i1144.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1145[0], i1144.m_PersistentCalls)
  return i1144
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i1149[i + 0]));
  }
  i1146.m_Delegates = i1148
  return i1146
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i1153 = data
  i1152.eventID = i1153[0]
  i1152.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i1153[1], i1152.callback)
  return i1152
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1155 = data
  i1154.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1155[0], i1154.m_PersistentCalls)
  return i1154
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'nameLabel')
  request.r(i1157[2], i1157[3], 0, i1156, 'valueLabel')
  i1156.colorDefault = new pc.Color(i1157[4], i1157[5], i1157[6], i1157[7])
  i1156.colorSelected = new pc.Color(i1157[8], i1157[9], i1157[10], i1157[11])
  return i1156
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'nameLabel')
  request.r(i1159[2], i1159[3], 0, i1158, 'valueToggle')
  request.r(i1159[4], i1159[5], 0, i1158, 'checkmarkImage')
  i1158.colorDefault = new pc.Color(i1159[6], i1159[7], i1159[8], i1159[9])
  i1158.colorSelected = new pc.Color(i1159[10], i1159[11], i1159[12], i1159[13])
  return i1158
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i1161 = data
  i1160.toggleTransition = i1161[0]
  request.r(i1161[1], i1161[2], 0, i1160, 'graphic')
  i1160.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1161[3], i1160.onValueChanged)
  request.r(i1161[4], i1161[5], 0, i1160, 'm_Group')
  i1160.m_IsOn = !!i1161[6]
  i1160.m_Navigation = request.d('UnityEngine.UI.Navigation', i1161[7], i1160.m_Navigation)
  i1160.m_Transition = i1161[8]
  i1160.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1161[9], i1160.m_Colors)
  i1160.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1161[10], i1160.m_SpriteState)
  i1160.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1161[11], i1160.m_AnimationTriggers)
  i1160.m_Interactable = !!i1161[12]
  request.r(i1161[13], i1161[14], 0, i1160, 'm_TargetGraphic')
  return i1160
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i1163 = data
  i1162.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1163[0], i1162.m_PersistentCalls)
  return i1162
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'nameLabel')
  request.r(i1165[2], i1165[3], 0, i1164, 'valueLabel')
  i1164.colorDefault = new pc.Color(i1165[4], i1165[5], i1165[6], i1165[7])
  i1164.colorSelected = new pc.Color(i1165[8], i1165[9], i1165[10], i1165[11])
  return i1164
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i1167 = data
  request.r(i1167[0], i1167[1], 0, i1166, 'nameLabel')
  request.r(i1167[2], i1167[3], 0, i1166, 'valueLabel')
  i1166.colorDefault = new pc.Color(i1167[4], i1167[5], i1167[6], i1167[7])
  i1166.colorSelected = new pc.Color(i1167[8], i1167[9], i1167[10], i1167[11])
  return i1166
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'nameLabel')
  request.r(i1169[2], i1169[3], 0, i1168, 'valueLabel')
  i1168.colorDefault = new pc.Color(i1169[4], i1169[5], i1169[6], i1169[7])
  i1168.colorSelected = new pc.Color(i1169[8], i1169[9], i1169[10], i1169[11])
  return i1168
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i1171 = data
  request.r(i1171[0], i1171[1], 0, i1170, 'nextButtonText')
  request.r(i1171[2], i1171[3], 0, i1170, 'previousButtonText')
  request.r(i1171[4], i1171[5], 0, i1170, 'nameLabel')
  request.r(i1171[6], i1171[7], 0, i1170, 'valueLabel')
  i1170.colorDefault = new pc.Color(i1171[8], i1171[9], i1171[10], i1171[11])
  i1170.colorSelected = new pc.Color(i1171[12], i1171[13], i1171[14], i1171[15])
  return i1170
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i1173 = data
  request.r(i1173[0], i1173[1], 0, i1172, 'nameLabel')
  i1172.colorDefault = new pc.Color(i1173[2], i1173[3], i1173[4], i1173[5])
  i1172.colorSelected = new pc.Color(i1173[6], i1173[7], i1173[8], i1173[9])
  return i1172
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'nameLabel')
  request.r(i1175[2], i1175[3], 0, i1174, 'valueToggle')
  i1174.colorDefault = new pc.Color(i1175[4], i1175[5], i1175[6], i1175[7])
  i1174.colorSelected = new pc.Color(i1175[8], i1175[9], i1175[10], i1175[11])
  return i1174
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'content')
  request.r(i1177[2], i1177[3], 0, i1176, 'arrowOpened')
  request.r(i1177[4], i1177[5], 0, i1176, 'arrowClosed')
  i1176.toggleTransition = i1177[6]
  request.r(i1177[7], i1177[8], 0, i1176, 'graphic')
  i1176.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1177[9], i1176.onValueChanged)
  request.r(i1177[10], i1177[11], 0, i1176, 'm_Group')
  i1176.m_IsOn = !!i1177[12]
  i1176.m_Navigation = request.d('UnityEngine.UI.Navigation', i1177[13], i1176.m_Navigation)
  i1176.m_Transition = i1177[14]
  i1176.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1177[15], i1176.m_Colors)
  i1176.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1177[16], i1176.m_SpriteState)
  i1176.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1177[17], i1176.m_AnimationTriggers)
  i1176.m_Interactable = !!i1177[18]
  request.r(i1177[19], i1177[20], 0, i1176, 'm_TargetGraphic')
  return i1176
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'nameLabel')
  request.r(i1179[2], i1179[3], 0, i1178, 'valueToggle')
  request.r(i1179[4], i1179[5], 0, i1178, 'colorImage')
  request.r(i1179[6], i1179[7], 0, i1178, 'fieldR')
  request.r(i1179[8], i1179[9], 0, i1178, 'fieldG')
  request.r(i1179[10], i1179[11], 0, i1178, 'fieldB')
  request.r(i1179[12], i1179[13], 0, i1178, 'fieldA')
  i1178.colorDefault = new pc.Color(i1179[14], i1179[15], i1179[16], i1179[17])
  i1178.colorSelected = new pc.Color(i1179[18], i1179[19], i1179[20], i1179[21])
  return i1178
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'nameLabel')
  request.r(i1181[2], i1181[3], 0, i1180, 'valueLabel')
  i1180.colorDefault = new pc.Color(i1181[4], i1181[5], i1181[6], i1181[7])
  i1180.colorSelected = new pc.Color(i1181[8], i1181[9], i1181[10], i1181[11])
  return i1180
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'nameLabel')
  request.r(i1183[2], i1183[3], 0, i1182, 'valueToggle')
  request.r(i1183[4], i1183[5], 0, i1182, 'fieldX')
  request.r(i1183[6], i1183[7], 0, i1182, 'fieldY')
  i1182.colorDefault = new pc.Color(i1183[8], i1183[9], i1183[10], i1183[11])
  i1182.colorSelected = new pc.Color(i1183[12], i1183[13], i1183[14], i1183[15])
  return i1182
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'nameLabel')
  request.r(i1185[2], i1185[3], 0, i1184, 'valueToggle')
  request.r(i1185[4], i1185[5], 0, i1184, 'fieldX')
  request.r(i1185[6], i1185[7], 0, i1184, 'fieldY')
  request.r(i1185[8], i1185[9], 0, i1184, 'fieldZ')
  i1184.colorDefault = new pc.Color(i1185[10], i1185[11], i1185[12], i1185[13])
  i1184.colorSelected = new pc.Color(i1185[14], i1185[15], i1185[16], i1185[17])
  return i1184
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i1186 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'nameLabel')
  request.r(i1187[2], i1187[3], 0, i1186, 'valueToggle')
  request.r(i1187[4], i1187[5], 0, i1186, 'fieldX')
  request.r(i1187[6], i1187[7], 0, i1186, 'fieldY')
  request.r(i1187[8], i1187[9], 0, i1186, 'fieldZ')
  request.r(i1187[10], i1187[11], 0, i1186, 'fieldW')
  i1186.colorDefault = new pc.Color(i1187[12], i1187[13], i1187[14], i1187[15])
  i1186.colorSelected = new pc.Color(i1187[16], i1187[17], i1187[18], i1187[19])
  return i1186
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i1189 = data
  i1188.colorDefault = new pc.Color(i1189[0], i1189[1], i1189[2], i1189[3])
  i1188.colorSelected = new pc.Color(i1189[4], i1189[5], i1189[6], i1189[7])
  return i1188
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1190 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1191 = data
  i1190.m_Spacing = i1191[0]
  i1190.m_ChildForceExpandWidth = !!i1191[1]
  i1190.m_ChildForceExpandHeight = !!i1191[2]
  i1190.m_ChildControlWidth = !!i1191[3]
  i1190.m_ChildControlHeight = !!i1191[4]
  i1190.m_ChildScaleWidth = !!i1191[5]
  i1190.m_ChildScaleHeight = !!i1191[6]
  i1190.m_ReverseArrangement = !!i1191[7]
  i1190.m_Padding = UnityEngine.RectOffset.FromPaddings(i1191[8], i1191[9], i1191[10], i1191[11])
  i1190.m_ChildAlignment = i1191[12]
  return i1190
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1193 = data
  i1192.colorDefault = new pc.Color(i1193[0], i1193[1], i1193[2], i1193[3])
  i1192.colorSelected = new pc.Color(i1193[4], i1193[5], i1193[6], i1193[7])
  return i1192
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'nameLabel')
  request.r(i1195[2], i1195[3], 0, i1194, 'header')
  i1194.colorDefault = new pc.Color(i1195[4], i1195[5], i1195[6], i1195[7])
  i1194.colorSelected = new pc.Color(i1195[8], i1195[9], i1195[10], i1195[11])
  return i1194
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'nameLabel')
  request.r(i1197[2], i1197[3], 0, i1196, 'valueToggle')
  var i1199 = i1197[4]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 1, i1198, '')
  }
  i1196.toggles = i1198
  i1196.colorDefault = new pc.Color(i1197[5], i1197[6], i1197[7], i1197[8])
  i1196.colorSelected = new pc.Color(i1197[9], i1197[10], i1197[11], i1197[12])
  return i1196
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1203 = data
  request.r(i1203[0], i1203[1], 0, i1202, 'nameLabel')
  request.r(i1203[2], i1203[3], 0, i1202, 'valueToggle')
  request.r(i1203[4], i1203[5], 0, i1202, 'checkmarkImage')
  i1202.colorDefault = new pc.Color(i1203[6], i1203[7], i1203[8], i1203[9])
  i1202.colorSelected = new pc.Color(i1203[10], i1203[11], i1203[12], i1203[13])
  return i1202
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'nameLabel')
  request.r(i1205[2], i1205[3], 0, i1204, 'valueToggle')
  request.r(i1205[4], i1205[5], 0, i1204, 'checkmarkImage')
  i1204.colorDefault = new pc.Color(i1205[6], i1205[7], i1205[8], i1205[9])
  i1204.colorSelected = new pc.Color(i1205[10], i1205[11], i1205[12], i1205[13])
  return i1204
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'nextButtonText')
  request.r(i1207[2], i1207[3], 0, i1206, 'previousButtonText')
  request.r(i1207[4], i1207[5], 0, i1206, 'nameLabel')
  request.r(i1207[6], i1207[7], 0, i1206, 'valueLabel')
  i1206.colorDefault = new pc.Color(i1207[8], i1207[9], i1207[10], i1207[11])
  i1206.colorSelected = new pc.Color(i1207[12], i1207[13], i1207[14], i1207[15])
  return i1206
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'nameLabel')
  request.r(i1209[2], i1209[3], 0, i1208, 'valueToggle')
  i1208.colorDefault = new pc.Color(i1209[4], i1209[5], i1209[6], i1209[7])
  i1208.colorSelected = new pc.Color(i1209[8], i1209[9], i1209[10], i1209[11])
  return i1208
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'nameLabel')
  i1210.colorDefault = new pc.Color(i1211[2], i1211[3], i1211[4], i1211[5])
  i1210.colorSelected = new pc.Color(i1211[6], i1211[7], i1211[8], i1211[9])
  return i1210
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'nameLabel')
  request.r(i1213[2], i1213[3], 0, i1212, 'valueLabel')
  request.r(i1213[4], i1213[5], 0, i1212, 'progressBarRect')
  i1212.colorDefault = new pc.Color(i1213[6], i1213[7], i1213[8], i1213[9])
  i1212.colorSelected = new pc.Color(i1213[10], i1213[11], i1213[12], i1213[13])
  return i1212
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1215 = data
  request.r(i1215[0], i1215[1], 0, i1214, 'nameLabel')
  request.r(i1215[2], i1215[3], 0, i1214, 'valueLabel')
  i1214.colorDefault = new pc.Color(i1215[4], i1215[5], i1215[6], i1215[7])
  i1214.colorSelected = new pc.Color(i1215[8], i1215[9], i1215[10], i1215[11])
  return i1214
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1217 = data
  request.r(i1217[0], i1217[1], 0, i1216, 'nameLabel')
  request.r(i1217[2], i1217[3], 0, i1216, 'valueLabel')
  i1216.colorDefault = new pc.Color(i1217[4], i1217[5], i1217[6], i1217[7])
  i1216.colorSelected = new pc.Color(i1217[8], i1217[9], i1217[10], i1217[11])
  return i1216
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'nextButtonText')
  request.r(i1219[2], i1219[3], 0, i1218, 'previousButtonText')
  request.r(i1219[4], i1219[5], 0, i1218, 'nameLabel')
  request.r(i1219[6], i1219[7], 0, i1218, 'valueLabel')
  i1218.colorDefault = new pc.Color(i1219[8], i1219[9], i1219[10], i1219[11])
  i1218.colorSelected = new pc.Color(i1219[12], i1219[13], i1219[14], i1219[15])
  return i1218
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1221 = data
  request.r(i1221[0], i1221[1], 0, i1220, 'nextButtonText')
  request.r(i1221[2], i1221[3], 0, i1220, 'previousButtonText')
  request.r(i1221[4], i1221[5], 0, i1220, 'nameLabel')
  request.r(i1221[6], i1221[7], 0, i1220, 'valueLabel')
  i1220.colorDefault = new pc.Color(i1221[8], i1221[9], i1221[10], i1221[11])
  i1220.colorSelected = new pc.Color(i1221[12], i1221[13], i1221[14], i1221[15])
  return i1220
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField' )
  var i1223 = data
  request.r(i1223[0], i1223[1], 0, i1222, 'nameLabel')
  request.r(i1223[2], i1223[3], 0, i1222, 'valueToggle')
  var i1225 = i1223[4]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 1, i1224, '')
  }
  i1222.toggles = i1224
  i1222.colorDefault = new pc.Color(i1223[5], i1223[6], i1223[7], i1223[8])
  i1222.colorSelected = new pc.Color(i1223[9], i1223[10], i1223[11], i1223[12])
  return i1222
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'panel')
  request.r(i1227[2], i1227[3], 0, i1226, 'valuePrefab')
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1229 = data
  i1228.AdditionalLightsRenderingMode = i1229[0]
  i1228.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1229[1], i1228.LightRenderingMode)
  i1228.MainLightRenderingModeValue = i1229[2]
  i1228.SupportsMainLightShadows = !!i1229[3]
  i1228.MixedLightingSupported = !!i1229[4]
  i1228.MainLightShadowmapResolutionValue = i1229[5]
  i1228.SupportsSoftShadows = !!i1229[6]
  i1228.SoftShadowQualityValue = i1229[7]
  i1228.ShadowDistance = i1229[8]
  i1228.ShadowCascadeCount = i1229[9]
  i1228.Cascade2Split = i1229[10]
  i1228.Cascade3Split = new pc.Vec2( i1229[11], i1229[12] )
  i1228.Cascade4Split = new pc.Vec3( i1229[13], i1229[14], i1229[15] )
  i1228.CascadeBorder = i1229[16]
  i1228.ShadowDepthBias = i1229[17]
  i1228.ShadowNormalBias = i1229[18]
  i1228.RequireDepthTexture = !!i1229[19]
  i1228.RequireOpaqueTexture = !!i1229[20]
  i1228.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i1229[21], i1228.scriptableRendererData)
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1231 = data
  i1230.Disabled = i1231[0]
  i1230.PerVertex = i1231[1]
  i1230.PerPixel = i1231[2]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i1233 = data
  i1232.opaqueLayerMask = i1233[0]
  i1232.transparentLayerMask = i1233[1]
  var i1235 = i1233[2]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i1235[i + 0]) );
  }
  i1232.RenderObjectsFeatures = i1234
  i1232.name = i1233[3]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i1239 = data
  i1238.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i1239[0], i1238.settings)
  i1238.name = i1239[1]
  i1238.typeName = i1239[2]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1243[i + 0]));
  }
  i1240.ShaderCompilationErrors = i1242
  i1240.name = i1241[1]
  i1240.guid = i1241[2]
  var i1245 = i1241[3]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( i1245[i + 0] );
  }
  i1240.shaderDefinedKeywords = i1244
  var i1247 = i1241[4]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1247[i + 0]) );
  }
  i1240.passes = i1246
  var i1249 = i1241[5]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1249[i + 0]) );
  }
  i1240.usePasses = i1248
  var i1251 = i1241[6]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1251[i + 0]) );
  }
  i1240.defaultParameterValues = i1250
  request.r(i1241[7], i1241[8], 0, i1240, 'unityFallbackShader')
  i1240.readDepth = !!i1241[9]
  i1240.hasDepthOnlyPass = !!i1241[10]
  i1240.isCreatedByShaderGraph = !!i1241[11]
  i1240.disableBatching = !!i1241[12]
  i1240.compiled = !!i1241[13]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1255 = data
  i1254.shaderName = i1255[0]
  i1254.errorMessage = i1255[1]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1260 = root || new pc.UnityShaderPass()
  var i1261 = data
  i1260.id = i1261[0]
  i1260.subShaderIndex = i1261[1]
  i1260.name = i1261[2]
  i1260.passType = i1261[3]
  i1260.grabPassTextureName = i1261[4]
  i1260.usePass = !!i1261[5]
  i1260.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[6], i1260.zTest)
  i1260.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[7], i1260.zWrite)
  i1260.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[8], i1260.culling)
  i1260.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1261[9], i1260.blending)
  i1260.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1261[10], i1260.alphaBlending)
  i1260.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[11], i1260.colorWriteMask)
  i1260.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[12], i1260.offsetUnits)
  i1260.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[13], i1260.offsetFactor)
  i1260.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[14], i1260.stencilRef)
  i1260.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[15], i1260.stencilReadMask)
  i1260.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[16], i1260.stencilWriteMask)
  i1260.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1261[17], i1260.stencilOp)
  i1260.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1261[18], i1260.stencilOpFront)
  i1260.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1261[19], i1260.stencilOpBack)
  var i1263 = i1261[20]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1263[i + 0]) );
  }
  i1260.tags = i1262
  var i1265 = i1261[21]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( i1265[i + 0] );
  }
  i1260.passDefinedKeywords = i1264
  var i1267 = i1261[22]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1267[i + 0]) );
  }
  i1260.passDefinedKeywordGroups = i1266
  var i1269 = i1261[23]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1269[i + 0]) );
  }
  i1260.variants = i1268
  var i1271 = i1261[24]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1271[i + 0]) );
  }
  i1260.excludedVariants = i1270
  i1260.hasDepthReader = !!i1261[25]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1273 = data
  i1272.val = i1273[0]
  i1272.name = i1273[1]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1275 = data
  i1274.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[0], i1274.src)
  i1274.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[1], i1274.dst)
  i1274.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[2], i1274.op)
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1277 = data
  i1276.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1277[0], i1276.pass)
  i1276.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1277[1], i1276.fail)
  i1276.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1277[2], i1276.zFail)
  i1276.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1277[3], i1276.comp)
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1281 = data
  i1280.name = i1281[0]
  i1280.value = i1281[1]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( i1287[i + 0] );
  }
  i1284.keywords = i1286
  i1284.hasDiscard = !!i1285[1]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1291 = data
  i1290.passId = i1291[0]
  i1290.subShaderIndex = i1291[1]
  var i1293 = i1291[2]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( i1293[i + 0] );
  }
  i1290.keywords = i1292
  i1290.vertexProgram = i1291[3]
  i1290.fragmentProgram = i1291[4]
  i1290.exportedForWebGl2 = !!i1291[5]
  i1290.readDepth = !!i1291[6]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1297 = data
  request.r(i1297[0], i1297[1], 0, i1296, 'shader')
  i1296.pass = i1297[2]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1301 = data
  i1300.name = i1301[0]
  i1300.type = i1301[1]
  i1300.value = new pc.Vec4( i1301[2], i1301[3], i1301[4], i1301[5] )
  i1300.textureValue = i1301[6]
  i1300.shaderPropertyFlag = i1301[7]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1303 = data
  i1302.name = i1303[0]
  request.r(i1303[1], i1303[2], 0, i1302, 'texture')
  i1302.aabb = i1303[3]
  i1302.vertices = i1303[4]
  i1302.triangles = i1303[5]
  i1302.textureRect = UnityEngine.Rect.MinMaxRect(i1303[6], i1303[7], i1303[8], i1303[9])
  i1302.packedRect = UnityEngine.Rect.MinMaxRect(i1303[10], i1303[11], i1303[12], i1303[13])
  i1302.border = new pc.Vec4( i1303[14], i1303[15], i1303[16], i1303[17] )
  i1302.transparency = i1303[18]
  i1302.bounds = i1303[19]
  i1302.pixelsPerUnit = i1303[20]
  i1302.textureWidth = i1303[21]
  i1302.textureHeight = i1303[22]
  i1302.nativeSize = new pc.Vec2( i1303[23], i1303[24] )
  i1302.pivot = new pc.Vec2( i1303[25], i1303[26] )
  i1302.textureRectOffset = new pc.Vec2( i1303[27], i1303[28] )
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1305 = data
  i1304.name = i1305[0]
  i1304.ascent = i1305[1]
  i1304.originalLineHeight = i1305[2]
  i1304.fontSize = i1305[3]
  var i1307 = i1305[4]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1307[i + 0]) );
  }
  i1304.characterInfo = i1306
  request.r(i1305[5], i1305[6], 0, i1304, 'texture')
  i1304.originalFontSize = i1305[7]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1311 = data
  i1310.index = i1311[0]
  i1310.advance = i1311[1]
  i1310.bearing = i1311[2]
  i1310.glyphWidth = i1311[3]
  i1310.glyphHeight = i1311[4]
  i1310.minX = i1311[5]
  i1310.maxX = i1311[6]
  i1310.minY = i1311[7]
  i1310.maxY = i1311[8]
  i1310.uvBottomLeftX = i1311[9]
  i1310.uvBottomLeftY = i1311[10]
  i1310.uvBottomRightX = i1311[11]
  i1310.uvBottomRightY = i1311[12]
  i1310.uvTopLeftX = i1311[13]
  i1310.uvTopLeftY = i1311[14]
  i1310.uvTopRightX = i1311[15]
  i1310.uvTopRightY = i1311[16]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.bytes64 = i1313[1]
  i1312.data = i1313[2]
  return i1312
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('UnityEngine.InputSystem.InputActionMap', i1317[i + 0]) );
  }
  i1314.m_ActionMaps = i1316
  var i1319 = i1315[1]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1319[i + 0]) );
  }
  i1314.m_ControlSchemes = i1318
  i1314.m_IsProjectWide = !!i1315[2]
  return i1314
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1323 = data
  i1322.m_Name = i1323[0]
  i1322.m_Id = i1323[1]
  request.r(i1323[2], i1323[3], 0, i1322, 'm_Asset')
  var i1325 = i1323[4]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('UnityEngine.InputSystem.InputAction', i1325[i + 0]) );
  }
  i1322.m_Actions = i1324
  var i1327 = i1323[5]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('UnityEngine.InputSystem.InputBinding', i1327[i + 0]) );
  }
  i1322.m_Bindings = i1326
  return i1322
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1331 = data
  i1330.m_Name = i1331[0]
  i1330.m_Type = i1331[1]
  i1330.m_ExpectedControlType = i1331[2]
  i1330.m_Id = i1331[3]
  i1330.m_Processors = i1331[4]
  i1330.m_Interactions = i1331[5]
  var i1333 = i1331[6]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('UnityEngine.InputSystem.InputBinding', i1333[i + 0]) );
  }
  i1330.m_SingletonActionBindings = i1332
  i1330.m_Flags = i1331[7]
  i1330.m_Priority = i1331[8]
  return i1330
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1337 = data
  i1336.m_Name = i1337[0]
  i1336.m_Id = i1337[1]
  i1336.m_Path = i1337[2]
  i1336.m_Interactions = i1337[3]
  i1336.m_Processors = i1337[4]
  i1336.m_Groups = i1337[5]
  i1336.m_Action = i1337[6]
  i1336.m_Flags = i1337[7]
  return i1336
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1341 = data
  i1340.m_Name = i1341[0]
  i1340.m_BindingGroup = i1341[1]
  var i1343 = i1341[2]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1343[i + 0]) );
  }
  i1340.m_DeviceRequirements = i1342
  return i1340
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_Settings' )
  var i1345 = data
  i1344.assetVersion = i1345[0]
  i1344.m_TextWrappingMode = i1345[1]
  i1344.m_enableKerning = !!i1345[2]
  var i1347 = i1345[3]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(i1347[i + 0]);
  }
  i1344.m_ActiveFontFeatures = i1346
  i1344.m_enableExtraPadding = !!i1345[4]
  i1344.m_enableTintAllSprites = !!i1345[5]
  i1344.m_enableParseEscapeCharacters = !!i1345[6]
  i1344.m_EnableRaycastTarget = !!i1345[7]
  i1344.m_GetFontFeaturesAtRuntime = !!i1345[8]
  i1344.m_missingGlyphCharacter = i1345[9]
  i1344.m_ClearDynamicDataOnBuild = !!i1345[10]
  i1344.m_warningsDisabled = !!i1345[11]
  request.r(i1345[12], i1345[13], 0, i1344, 'm_defaultFontAsset')
  i1344.m_defaultFontAssetPath = i1345[14]
  i1344.m_defaultFontSize = i1345[15]
  i1344.m_defaultAutoSizeMinRatio = i1345[16]
  i1344.m_defaultAutoSizeMaxRatio = i1345[17]
  i1344.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1345[18], i1345[19] )
  i1344.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1345[20], i1345[21] )
  i1344.m_autoSizeTextContainer = !!i1345[22]
  i1344.m_IsTextObjectScaleStatic = !!i1345[23]
  var i1349 = i1345[24]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1349.length; i += 2) {
  request.r(i1349[i + 0], i1349[i + 1], 1, i1348, '')
  }
  i1344.m_fallbackFontAssets = i1348
  i1344.m_matchMaterialPreset = !!i1345[25]
  i1344.m_HideSubTextObjects = !!i1345[26]
  request.r(i1345[27], i1345[28], 0, i1344, 'm_defaultSpriteAsset')
  i1344.m_defaultSpriteAssetPath = i1345[29]
  i1344.m_enableEmojiSupport = !!i1345[30]
  i1344.m_MissingCharacterSpriteUnicode = i1345[31]
  var i1351 = i1345[32]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1351.length; i += 2) {
  request.r(i1351[i + 0], i1351[i + 1], 1, i1350, '')
  }
  i1344.m_EmojiFallbackTextAssets = i1350
  i1344.m_defaultColorGradientPresetsPath = i1345[33]
  request.r(i1345[34], i1345[35], 0, i1344, 'm_defaultStyleSheet')
  i1344.m_StyleSheetsResourcePath = i1345[36]
  request.r(i1345[37], i1345[38], 0, i1344, 'm_leadingCharacters')
  request.r(i1345[39], i1345[40], 0, i1344, 'm_followingCharacters')
  i1344.m_UseModernHangulLineBreakingRules = !!i1345[41]
  return i1344
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1359 = data
  i1358.normalStyle = i1359[0]
  i1358.normalSpacingOffset = i1359[1]
  i1358.boldStyle = i1359[2]
  i1358.boldSpacing = i1359[3]
  i1358.italicStyle = i1359[4]
  i1358.tabSize = i1359[5]
  request.r(i1359[6], i1359[7], 0, i1358, 'atlas')
  i1358.m_SourceFontFileGUID = i1359[8]
  i1358.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1359[9], i1358.m_CreationSettings)
  request.r(i1359[10], i1359[11], 0, i1358, 'm_SourceFontFile')
  i1358.m_SourceFontFilePath = i1359[12]
  i1358.m_AtlasPopulationMode = i1359[13]
  i1358.InternalDynamicOS = !!i1359[14]
  var i1361 = i1359[15]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('UnityEngine.TextCore.Glyph', i1361[i + 0]));
  }
  i1358.m_GlyphTable = i1360
  var i1363 = i1359[16]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.add(request.d('TMPro.TMP_Character', i1363[i + 0]));
  }
  i1358.m_CharacterTable = i1362
  var i1365 = i1359[17]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 2) {
  request.r(i1365[i + 0], i1365[i + 1], 2, i1364, '')
  }
  i1358.m_AtlasTextures = i1364
  i1358.m_AtlasTextureIndex = i1359[18]
  i1358.m_IsMultiAtlasTexturesEnabled = !!i1359[19]
  i1358.m_GetFontFeatures = !!i1359[20]
  i1358.m_ClearDynamicDataOnBuild = !!i1359[21]
  i1358.m_AtlasWidth = i1359[22]
  i1358.m_AtlasHeight = i1359[23]
  i1358.m_AtlasPadding = i1359[24]
  i1358.m_AtlasRenderMode = i1359[25]
  var i1367 = i1359[26]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.add(request.d('UnityEngine.TextCore.GlyphRect', i1367[i + 0]));
  }
  i1358.m_UsedGlyphRects = i1366
  var i1369 = i1359[27]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('UnityEngine.TextCore.GlyphRect', i1369[i + 0]));
  }
  i1358.m_FreeGlyphRects = i1368
  i1358.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1359[28], i1358.m_FontFeatureTable)
  i1358.m_ShouldReimportFontFeatures = !!i1359[29]
  var i1371 = i1359[30]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1371.length; i += 2) {
  request.r(i1371[i + 0], i1371[i + 1], 1, i1370, '')
  }
  i1358.m_FallbackFontAssetTable = i1370
  var i1373 = i1359[31]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('TMPro.TMP_FontWeightPair', i1373[i + 0]) );
  }
  i1358.m_FontWeightTable = i1372
  var i1375 = i1359[32]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('TMPro.TMP_FontWeightPair', i1375[i + 0]) );
  }
  i1358.fontWeights = i1374
  i1358.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1359[33], i1358.m_fontInfo)
  var i1377 = i1359[34]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('TMPro.TMP_Glyph', i1377[i + 0]));
  }
  i1358.m_glyphInfoList = i1376
  i1358.m_KerningTable = request.d('TMPro.KerningTable', i1359[35], i1358.m_KerningTable)
  var i1379 = i1359[36]
  var i1378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1379.length; i += 2) {
  request.r(i1379[i + 0], i1379[i + 1], 1, i1378, '')
  }
  i1358.fallbackFontAssets = i1378
  i1358.m_Version = i1359[37]
  i1358.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1359[38], i1358.m_FaceInfo)
  request.r(i1359[39], i1359[40], 0, i1358, 'm_Material')
  return i1358
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1381 = data
  i1380.sourceFontFileName = i1381[0]
  i1380.sourceFontFileGUID = i1381[1]
  i1380.faceIndex = i1381[2]
  i1380.pointSizeSamplingMode = i1381[3]
  i1380.pointSize = i1381[4]
  i1380.padding = i1381[5]
  i1380.paddingMode = i1381[6]
  i1380.packingMode = i1381[7]
  i1380.atlasWidth = i1381[8]
  i1380.atlasHeight = i1381[9]
  i1380.characterSetSelectionMode = i1381[10]
  i1380.characterSequence = i1381[11]
  i1380.referencedFontAssetGUID = i1381[12]
  i1380.referencedTextAssetGUID = i1381[13]
  i1380.fontStyle = i1381[14]
  i1380.fontStyleModifier = i1381[15]
  i1380.renderMode = i1381[16]
  i1380.includeFontFeatures = !!i1381[17]
  return i1380
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1385 = data
  i1384.m_Index = i1385[0]
  i1384.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1385[1], i1384.m_Metrics)
  i1384.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1385[2], i1384.m_GlyphRect)
  i1384.m_Scale = i1385[3]
  i1384.m_AtlasIndex = i1385[4]
  i1384.m_ClassDefinitionType = i1385[5]
  return i1384
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1387 = data
  i1386.m_Width = i1387[0]
  i1386.m_Height = i1387[1]
  i1386.m_HorizontalBearingX = i1387[2]
  i1386.m_HorizontalBearingY = i1387[3]
  i1386.m_HorizontalAdvance = i1387[4]
  return i1386
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1389 = data
  i1388.m_X = i1389[0]
  i1388.m_Y = i1389[1]
  i1388.m_Width = i1389[2]
  i1388.m_Height = i1389[3]
  return i1388
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.TMP_Character' )
  var i1393 = data
  i1392.m_ElementType = i1393[0]
  i1392.m_Unicode = i1393[1]
  i1392.m_GlyphIndex = i1393[2]
  i1392.m_Scale = i1393[3]
  return i1392
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1398 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1399 = data
  var i1401 = i1399[0]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.add(request.d('TMPro.MultipleSubstitutionRecord', i1401[i + 0]));
  }
  i1398.m_MultipleSubstitutionRecords = i1400
  var i1403 = i1399[1]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.add(request.d('TMPro.LigatureSubstitutionRecord', i1403[i + 0]));
  }
  i1398.m_LigatureSubstitutionRecords = i1402
  var i1405 = i1399[2]
  var i1404 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1405[i + 0]));
  }
  i1398.m_GlyphPairAdjustmentRecords = i1404
  var i1407 = i1399[3]
  var i1406 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1407[i + 0]));
  }
  i1398.m_MarkToBaseAdjustmentRecords = i1406
  var i1409 = i1399[4]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1409[i + 0]));
  }
  i1398.m_MarkToMarkAdjustmentRecords = i1408
  return i1398
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1413 = data
  i1412.m_TargetGlyphID = i1413[0]
  i1412.m_SubstituteGlyphIDs = i1413[1]
  return i1412
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1416 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1417 = data
  i1416.m_ComponentGlyphIDs = i1417[0]
  i1416.m_LigatureGlyphID = i1417[1]
  return i1416
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1421 = data
  i1420.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1421[0], i1420.m_FirstAdjustmentRecord)
  i1420.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1421[1], i1420.m_SecondAdjustmentRecord)
  i1420.m_FeatureLookupFlags = i1421[2]
  return i1420
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1423 = data
  i1422.m_GlyphIndex = i1423[0]
  i1422.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1423[1], i1422.m_GlyphValueRecord)
  return i1422
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1425 = data
  i1424.m_XPlacement = i1425[0]
  i1424.m_YPlacement = i1425[1]
  i1424.m_XAdvance = i1425[2]
  i1424.m_YAdvance = i1425[3]
  return i1424
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1429 = data
  i1428.m_BaseGlyphID = i1429[0]
  i1428.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1429[1], i1428.m_BaseGlyphAnchorPoint)
  i1428.m_MarkGlyphID = i1429[2]
  i1428.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1429[3], i1428.m_MarkPositionAdjustment)
  return i1428
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1432 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1433 = data
  i1432.m_BaseMarkGlyphID = i1433[0]
  i1432.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1433[1], i1432.m_BaseMarkGlyphAnchorPoint)
  i1432.m_CombiningMarkGlyphID = i1433[2]
  i1432.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1433[3], i1432.m_CombiningMarkPositionAdjustment)
  return i1432
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'regularTypeface')
  request.r(i1437[2], i1437[3], 0, i1436, 'italicTypeface')
  return i1436
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1438 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1439 = data
  i1438.Name = i1439[0]
  i1438.PointSize = i1439[1]
  i1438.Scale = i1439[2]
  i1438.CharacterCount = i1439[3]
  i1438.LineHeight = i1439[4]
  i1438.Baseline = i1439[5]
  i1438.Ascender = i1439[6]
  i1438.CapHeight = i1439[7]
  i1438.Descender = i1439[8]
  i1438.CenterLine = i1439[9]
  i1438.SuperscriptOffset = i1439[10]
  i1438.SubscriptOffset = i1439[11]
  i1438.SubSize = i1439[12]
  i1438.Underline = i1439[13]
  i1438.UnderlineThickness = i1439[14]
  i1438.strikethrough = i1439[15]
  i1438.strikethroughThickness = i1439[16]
  i1438.TabWidth = i1439[17]
  i1438.Padding = i1439[18]
  i1438.AtlasWidth = i1439[19]
  i1438.AtlasHeight = i1439[20]
  return i1438
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1443 = data
  i1442.id = i1443[0]
  i1442.x = i1443[1]
  i1442.y = i1443[2]
  i1442.width = i1443[3]
  i1442.height = i1443[4]
  i1442.xOffset = i1443[5]
  i1442.yOffset = i1443[6]
  i1442.xAdvance = i1443[7]
  i1442.scale = i1443[8]
  return i1442
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.KerningTable' )
  var i1445 = data
  var i1447 = i1445[0]
  var i1446 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.add(request.d('TMPro.KerningPair', i1447[i + 0]));
  }
  i1444.kerningPairs = i1446
  return i1444
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1450 = root || request.c( 'TMPro.KerningPair' )
  var i1451 = data
  i1450.xOffset = i1451[0]
  i1450.m_FirstGlyph = i1451[1]
  i1450.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1451[2], i1450.m_FirstGlyphAdjustments)
  i1450.m_SecondGlyph = i1451[3]
  i1450.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1451[4], i1450.m_SecondGlyphAdjustments)
  i1450.m_IgnoreSpacingAdjustments = !!i1451[5]
  return i1450
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1453 = data
  i1452.m_FaceIndex = i1453[0]
  i1452.m_FamilyName = i1453[1]
  i1452.m_StyleName = i1453[2]
  i1452.m_PointSize = i1453[3]
  i1452.m_Scale = i1453[4]
  i1452.m_UnitsPerEM = i1453[5]
  i1452.m_LineHeight = i1453[6]
  i1452.m_AscentLine = i1453[7]
  i1452.m_CapLine = i1453[8]
  i1452.m_MeanLine = i1453[9]
  i1452.m_Baseline = i1453[10]
  i1452.m_DescentLine = i1453[11]
  i1452.m_SuperscriptOffset = i1453[12]
  i1452.m_SuperscriptSize = i1453[13]
  i1452.m_SubscriptOffset = i1453[14]
  i1452.m_SubscriptSize = i1453[15]
  i1452.m_UnderlineOffset = i1453[16]
  i1452.m_UnderlineThickness = i1453[17]
  i1452.m_StrikethroughOffset = i1453[18]
  i1452.m_StrikethroughThickness = i1453[19]
  i1452.m_TabWidth = i1453[20]
  return i1452
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1454 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1455 = data
  request.r(i1455[0], i1455[1], 0, i1454, 'spriteSheet')
  var i1457 = i1455[2]
  var i1456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.add(request.d('TMPro.TMP_Sprite', i1457[i + 0]));
  }
  i1454.spriteInfoList = i1456
  var i1459 = i1455[3]
  var i1458 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1459.length; i += 2) {
  request.r(i1459[i + 0], i1459[i + 1], 1, i1458, '')
  }
  i1454.fallbackSpriteAssets = i1458
  var i1461 = i1455[4]
  var i1460 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.add(request.d('TMPro.TMP_SpriteCharacter', i1461[i + 0]));
  }
  i1454.m_SpriteCharacterTable = i1460
  var i1463 = i1455[5]
  var i1462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.add(request.d('TMPro.TMP_SpriteGlyph', i1463[i + 0]));
  }
  i1454.m_GlyphTable = i1462
  i1454.m_Version = i1455[6]
  i1454.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1455[7], i1454.m_FaceInfo)
  request.r(i1455[8], i1455[9], 0, i1454, 'm_Material')
  return i1454
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1466 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.hashCode = i1467[1]
  i1466.unicode = i1467[2]
  i1466.pivot = new pc.Vec2( i1467[3], i1467[4] )
  request.r(i1467[5], i1467[6], 0, i1466, 'sprite')
  i1466.id = i1467[7]
  i1466.x = i1467[8]
  i1466.y = i1467[9]
  i1466.width = i1467[10]
  i1466.height = i1467[11]
  i1466.xOffset = i1467[12]
  i1466.yOffset = i1467[13]
  i1466.xAdvance = i1467[14]
  i1466.scale = i1467[15]
  return i1466
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1472 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1473 = data
  i1472.m_Name = i1473[0]
  i1472.m_ElementType = i1473[1]
  i1472.m_Unicode = i1473[2]
  i1472.m_GlyphIndex = i1473[3]
  i1472.m_Scale = i1473[4]
  return i1472
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1476 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1477 = data
  request.r(i1477[0], i1477[1], 0, i1476, 'sprite')
  i1476.m_Index = i1477[2]
  i1476.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1477[3], i1476.m_Metrics)
  i1476.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1477[4], i1476.m_GlyphRect)
  i1476.m_Scale = i1477[5]
  i1476.m_AtlasIndex = i1477[6]
  i1476.m_ClassDefinitionType = i1477[7]
  return i1476
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1478 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1479 = data
  var i1481 = i1479[0]
  var i1480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.add(request.d('TMPro.TMP_Style', i1481[i + 0]));
  }
  i1478.m_StyleList = i1480
  return i1478
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1484 = root || request.c( 'TMPro.TMP_Style' )
  var i1485 = data
  i1484.m_Name = i1485[0]
  i1484.m_HashCode = i1485[1]
  i1484.m_OpeningDefinition = i1485[2]
  i1484.m_ClosingDefinition = i1485[3]
  i1484.m_OpeningTagArray = i1485[4]
  i1484.m_ClosingTagArray = i1485[5]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1487 = data
  var i1489 = i1487[0]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1489[i + 0]) );
  }
  i1486.files = i1488
  i1486.componentToPrefabIds = i1487[1]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1493 = data
  i1492.path = i1493[0]
  request.r(i1493[1], i1493[2], 0, i1492, 'unityObject')
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1495 = data
  var i1497 = i1495[0]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1497[i + 0]) );
  }
  i1494.scriptsExecutionOrder = i1496
  var i1499 = i1495[1]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1499[i + 0]) );
  }
  i1494.sortingLayers = i1498
  var i1501 = i1495[2]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1501[i + 0]) );
  }
  i1494.cullingLayers = i1500
  i1494.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1495[3], i1494.timeSettings)
  i1494.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1495[4], i1494.physicsSettings)
  i1494.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1495[5], i1494.physics2DSettings)
  i1494.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1495[6], i1494.qualitySettings)
  i1494.enableRealtimeShadows = !!i1495[7]
  i1494.enableAutoInstancing = !!i1495[8]
  i1494.enableStaticBatching = !!i1495[9]
  i1494.enableDynamicBatching = !!i1495[10]
  i1494.usePreservativeDynamicBatching = !!i1495[11]
  i1494.lightmapEncodingQuality = i1495[12]
  i1494.desiredColorSpace = i1495[13]
  var i1503 = i1495[14]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( i1503[i + 0] );
  }
  i1494.allTags = i1502
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.value = i1507[1]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1511 = data
  i1510.id = i1511[0]
  i1510.name = i1511[1]
  i1510.value = i1511[2]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1515 = data
  i1514.id = i1515[0]
  i1514.name = i1515[1]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1517 = data
  i1516.fixedDeltaTime = i1517[0]
  i1516.maximumDeltaTime = i1517[1]
  i1516.timeScale = i1517[2]
  i1516.maximumParticleTimestep = i1517[3]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1519 = data
  i1518.gravity = new pc.Vec3( i1519[0], i1519[1], i1519[2] )
  i1518.defaultSolverIterations = i1519[3]
  i1518.bounceThreshold = i1519[4]
  i1518.autoSyncTransforms = !!i1519[5]
  i1518.autoSimulation = !!i1519[6]
  var i1521 = i1519[7]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1521[i + 0]) );
  }
  i1518.collisionMatrix = i1520
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1525 = data
  i1524.enabled = !!i1525[0]
  i1524.layerId = i1525[1]
  i1524.otherLayerId = i1525[2]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1527 = data
  request.r(i1527[0], i1527[1], 0, i1526, 'material')
  i1526.gravity = new pc.Vec2( i1527[2], i1527[3] )
  i1526.positionIterations = i1527[4]
  i1526.velocityIterations = i1527[5]
  i1526.velocityThreshold = i1527[6]
  i1526.maxLinearCorrection = i1527[7]
  i1526.maxAngularCorrection = i1527[8]
  i1526.maxTranslationSpeed = i1527[9]
  i1526.maxRotationSpeed = i1527[10]
  i1526.baumgarteScale = i1527[11]
  i1526.baumgarteTOIScale = i1527[12]
  i1526.timeToSleep = i1527[13]
  i1526.linearSleepTolerance = i1527[14]
  i1526.angularSleepTolerance = i1527[15]
  i1526.defaultContactOffset = i1527[16]
  i1526.autoSimulation = !!i1527[17]
  i1526.queriesHitTriggers = !!i1527[18]
  i1526.queriesStartInColliders = !!i1527[19]
  i1526.callbacksOnDisable = !!i1527[20]
  i1526.reuseCollisionCallbacks = !!i1527[21]
  i1526.autoSyncTransforms = !!i1527[22]
  var i1529 = i1527[23]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1529[i + 0]) );
  }
  i1526.collisionMatrix = i1528
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1533 = data
  i1532.enabled = !!i1533[0]
  i1532.layerId = i1533[1]
  i1532.otherLayerId = i1533[2]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1535 = data
  var i1537 = i1535[0]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1537[i + 0]) );
  }
  i1534.qualityLevels = i1536
  var i1539 = i1535[1]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( i1539[i + 0] );
  }
  i1534.names = i1538
  i1534.shadows = i1535[2]
  i1534.anisotropicFiltering = i1535[3]
  i1534.antiAliasing = i1535[4]
  i1534.lodBias = i1535[5]
  i1534.shadowCascades = i1535[6]
  i1534.shadowDistance = i1535[7]
  i1534.shadowmaskMode = i1535[8]
  i1534.shadowProjection = i1535[9]
  i1534.shadowResolution = i1535[10]
  i1534.softParticles = !!i1535[11]
  i1534.softVegetation = !!i1535[12]
  i1534.activeColorSpace = i1535[13]
  i1534.desiredColorSpace = i1535[14]
  i1534.masterTextureLimit = i1535[15]
  i1534.maxQueuedFrames = i1535[16]
  i1534.particleRaycastBudget = i1535[17]
  i1534.pixelLightCount = i1535[18]
  i1534.realtimeReflectionProbes = !!i1535[19]
  i1534.shadowCascade2Split = i1535[20]
  i1534.shadowCascade4Split = new pc.Vec3( i1535[21], i1535[22], i1535[23] )
  i1534.streamingMipmapsActive = !!i1535[24]
  i1534.vSyncCount = i1535[25]
  i1534.asyncUploadBufferSize = i1535[26]
  i1534.asyncUploadTimeSlice = i1535[27]
  i1534.billboardsFaceCameraPosition = !!i1535[28]
  i1534.shadowNearPlaneOffset = i1535[29]
  i1534.streamingMipmapsMemoryBudget = i1535[30]
  i1534.maximumLODLevel = i1535[31]
  i1534.streamingMipmapsAddAllCameras = !!i1535[32]
  i1534.streamingMipmapsMaxLevelReduction = i1535[33]
  i1534.streamingMipmapsRenderersPerFrame = i1535[34]
  i1534.resolutionScalingFixedDPIFactor = i1535[35]
  i1534.streamingMipmapsMaxFileIORequests = i1535[36]
  i1534.currentQualityLevel = i1535[37]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1545 = data
  i1544.weight = i1545[0]
  i1544.vertices = i1545[1]
  i1544.normals = i1545[2]
  i1544.tangents = i1545[3]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i1547 = data
  i1546.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1547[0], i1546.Event)
  i1546.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i1547[1], i1546.filterSettings)
  i1546.overrideMaterialId = i1547[2]
  i1546.overrideMaterialPassIndex = i1547[3]
  i1546.overrideShaderId = i1547[4]
  i1546.overrideShaderPassIndex = i1547[5]
  i1546.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1547[6], i1546.overrideMode)
  i1546.overrideDepthState = !!i1547[7]
  i1546.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1547[8], i1546.depthCompareFunction)
  i1546.enableWrite = !!i1547[9]
  i1546.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i1547[10], i1546.stencilSettings)
  i1546.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i1547[11], i1546.cameraSettings)
  return i1546
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1551 = data
  i1550.m_ControlPath = i1551[0]
  i1550.m_Flags = i1551[1]
  return i1550
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1552 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1553 = data
  i1552.m_XCoordinate = i1553[0]
  i1552.m_YCoordinate = i1553[1]
  return i1552
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1554 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1555 = data
  i1554.m_XPositionAdjustment = i1555[0]
  i1554.m_YPositionAdjustment = i1555[1]
  return i1554
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1556 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1557 = data
  i1556.xPlacement = i1557[0]
  i1556.yPlacement = i1557[1]
  i1556.xAdvance = i1557[2]
  i1556.yAdvance = i1557[3]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i1559 = data
  i1558.Value = i1559[0]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i1561 = data
  i1560.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1561[0], i1560.RenderQueueType)
  i1560.LayerMask = i1561[1]
  var i1563 = i1561[2]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( i1563[i + 0] );
  }
  i1560.PassNames = i1562
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i1565 = data
  i1564.overrideStencilState = !!i1565[0]
  i1564.stencilReference = i1565[1]
  i1564.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1565[2], i1564.stencilCompareFunctionValue)
  i1564.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1565[3], i1564.passOperationValue)
  i1564.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1565[4], i1564.failOperationValue)
  i1564.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1565[5], i1564.zFailOperationValue)
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i1567 = data
  i1566.overrideCamera = !!i1567[0]
  i1566.restoreCamera = !!i1567[1]
  i1566.offset = new pc.Vec4( i1567[2], i1567[3], i1567[4], i1567[5] )
  i1566.cameraFieldOfView = i1567[6]
  return i1566
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[112],"113":[18],"114":[30],"115":[30],"116":[30],"117":[30],"118":[30],"119":[30],"120":[121],"122":[121],"123":[121],"124":[121],"125":[121],"126":[121],"127":[121],"128":[121],"129":[121],"130":[121],"131":[121],"132":[121],"133":[121],"134":[18],"135":[7],"136":[137],"138":[137],"33":[32],"139":[140],"141":[18],"142":[143],"144":[145],"146":[147],"148":[33],"76":[32],"149":[18],"19":[18],"13":[12],"150":[10,7],"151":[32],"152":[37,32],"153":[7],"154":[37,32],"155":[32],"156":[32],"157":[7,32],"158":[32,37],"159":[32],"160":[32],"36":[33],"40":[37,32],"161":[32],"35":[33],"59":[32],"162":[32],"83":[32],"163":[32],"63":[32],"164":[32],"58":[32],"65":[32],"165":[32],"166":[37,32],"167":[32],"62":[32],"64":[32],"168":[32],"38":[37,32],"69":[32],"169":[147],"170":[147],"171":[147],"172":[147],"173":[18],"174":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","FactoryPipePower.FactoryPowerController","UnityEngine.Material","FactoryPipePower.SmokePipeIndicatorSequence","UnityEngine.MeshRenderer","FactoryPipePower.FactoryChimneySmokeController","UnityEngine.ParticleSystem","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.MeshCollider","FactoryPipePower.PipeVisualController","FactoryPipePower.NarrativePipeSegment","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","Unity.Cinemachine.CinemachineBrain","UnityEngine.AudioListener","FactoryPipePower.StartPowerNode","FactoryPipePower.PipeSlotController","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","FactoryPipePower.PipeCompletionSparks","FactoryPipePower.PipeSlotCaptureVolume","FactoryPipePower.EndPowerNode","FactoryPipePower.NarrativePowerSequence","UnityEngine.Rigidbody","FactoryPipePower.DraggablePipeController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Image","UnityEngine.UI.Button","FactoryPipePower.CompletionUI","UnityEngine.GameObject","FactoryPipePower.PointerInputController","UnityEngine.InputSystem.InputActionAsset","FactoryPipePower.PipeSlotRegistry","FactoryPipePower.PowerChainController","FactoryPipePower.TutorialController","FactoryPipePower.SceneInitializer","FactoryPipePower.FactoryTutorialController","FactoryPipePower.GameFlowController","Unity.Cinemachine.CinemachineCamera","UnityEngine.Sprite","UnityEngine.UI.Shadow","UnityEngine.UI.Outline","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","SimpleCharacterMotor","UnityEngine.CharacterController","Unity.Cinemachine.CinemachineExternalCamera","Unity.Cinemachine.CinemachineSplineSmoother","UnityEngine.Splines.SplineContainer","Unity.Cinemachine.GroupWeightManipulator","Unity.Cinemachine.CinemachineTargetGroup","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.Universal.PixelPerfectCamera","UnityEngine.Splines.SplineExtrude","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.84f1";

Deserializers.productName = "NukeFactory";

Deserializers.lunaInitializationTime = "10/16/2026 14:20:46";

Deserializers.lunaDaysRunning = "4.4";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "4e41c565f08317d49bb83a734b232d47";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.20.0\ncom.unity.render-pipelines.core: 17.0.4\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.render-pipelines.universal-config: 17.0.3\ncom.unity.shadergraph: 17.0.4\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "9ca51e76-d02f-4911-9b5d-f723b5e27843";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["DeltaTimeScaleProcessor","Initialize"],["Unity","Cinemachine","Damper","AverageFrameRateTracker","Initialize"],["Unity","Cinemachine","CinemachineImpulseManager","InitializeModule"],["Unity","Cinemachine","CinemachineVolumeSettings","InitializeModule"],["Unity","Cinemachine","UpdateTracker","InitializeModule"],["Unity","Cinemachine","CinemachineStoryboard","InitializeModule"],["Unity","Cinemachine","CameraUpdateManager","InitializeModule"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","PlayerInput","InitializeGlobalPlayerState"],["UnityEngine","InputSystem","InputSystem","RuntimeInitialize"],["UnityEngine","InputSystem","InputActionState","InitializeGlobalActionState"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["com","IvanMurzak","Unity","MCP","Runtime","Utils","MainThreadDispatcher","Initialize"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","EnhancedTouch","Touch","InitializeGlobalTouchState"],["UnityEngine","InputSystem","Users","InputUser","InitializeGlobalUserState"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

