var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i10296 = root || request.c( 'UnityEngine.JointSpring' )
  var i10297 = data
  i10296.spring = i10297[0]
  i10296.damper = i10297[1]
  i10296.targetPosition = i10297[2]
  return i10296
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i10298 = root || request.c( 'UnityEngine.JointMotor' )
  var i10299 = data
  i10298.m_TargetVelocity = i10299[0]
  i10298.m_Force = i10299[1]
  i10298.m_FreeSpin = i10299[2]
  return i10298
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i10300 = root || request.c( 'UnityEngine.JointLimits' )
  var i10301 = data
  i10300.m_Min = i10301[0]
  i10300.m_Max = i10301[1]
  i10300.m_Bounciness = i10301[2]
  i10300.m_BounceMinVelocity = i10301[3]
  i10300.m_ContactDistance = i10301[4]
  i10300.minBounce = i10301[5]
  i10300.maxBounce = i10301[6]
  return i10300
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i10302 = root || request.c( 'UnityEngine.JointDrive' )
  var i10303 = data
  i10302.m_PositionSpring = i10303[0]
  i10302.m_PositionDamper = i10303[1]
  i10302.m_MaximumForce = i10303[2]
  i10302.m_UseAcceleration = i10303[3]
  return i10302
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i10304 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i10305 = data
  i10304.m_Spring = i10305[0]
  i10304.m_Damper = i10305[1]
  return i10304
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i10306 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i10307 = data
  i10306.m_Limit = i10307[0]
  i10306.m_Bounciness = i10307[1]
  i10306.m_ContactDistance = i10307[2]
  return i10306
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i10308 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i10309 = data
  i10308.m_ExtremumSlip = i10309[0]
  i10308.m_ExtremumValue = i10309[1]
  i10308.m_AsymptoteSlip = i10309[2]
  i10308.m_AsymptoteValue = i10309[3]
  i10308.m_Stiffness = i10309[4]
  return i10308
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i10310 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i10311 = data
  i10310.m_LowerAngle = i10311[0]
  i10310.m_UpperAngle = i10311[1]
  return i10310
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i10312 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i10313 = data
  i10312.m_MotorSpeed = i10313[0]
  i10312.m_MaximumMotorTorque = i10313[1]
  return i10312
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i10314 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i10315 = data
  i10314.m_DampingRatio = i10315[0]
  i10314.m_Frequency = i10315[1]
  i10314.m_Angle = i10315[2]
  return i10314
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i10316 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i10317 = data
  i10316.m_LowerTranslation = i10317[0]
  i10316.m_UpperTranslation = i10317[1]
  return i10316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i10318 = root || new pc.UnityMaterial()
  var i10319 = data
  i10318.name = i10319[0]
  request.r(i10319[1], i10319[2], 0, i10318, 'shader')
  i10318.renderQueue = i10319[3]
  i10318.enableInstancing = !!i10319[4]
  var i10321 = i10319[5]
  var i10320 = []
  for(var i = 0; i < i10321.length; i += 1) {
    i10320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i10321[i + 0]) );
  }
  i10318.floatParameters = i10320
  var i10323 = i10319[6]
  var i10322 = []
  for(var i = 0; i < i10323.length; i += 1) {
    i10322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i10323[i + 0]) );
  }
  i10318.colorParameters = i10322
  var i10325 = i10319[7]
  var i10324 = []
  for(var i = 0; i < i10325.length; i += 1) {
    i10324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i10325[i + 0]) );
  }
  i10318.vectorParameters = i10324
  var i10327 = i10319[8]
  var i10326 = []
  for(var i = 0; i < i10327.length; i += 1) {
    i10326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i10327[i + 0]) );
  }
  i10318.textureParameters = i10326
  var i10329 = i10319[9]
  var i10328 = []
  for(var i = 0; i < i10329.length; i += 1) {
    i10328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i10329[i + 0]) );
  }
  i10318.materialFlags = i10328
  return i10318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i10332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i10333 = data
  i10332.name = i10333[0]
  i10332.value = i10333[1]
  return i10332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i10336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i10337 = data
  i10336.name = i10337[0]
  i10336.value = new pc.Color(i10337[1], i10337[2], i10337[3], i10337[4])
  return i10336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i10340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i10341 = data
  i10340.name = i10341[0]
  i10340.value = new pc.Vec4( i10341[1], i10341[2], i10341[3], i10341[4] )
  return i10340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i10344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i10345 = data
  i10344.name = i10345[0]
  request.r(i10345[1], i10345[2], 0, i10344, 'value')
  return i10344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i10348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i10349 = data
  i10348.name = i10349[0]
  i10348.enabled = !!i10349[1]
  return i10348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i10350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i10351 = data
  i10350.name = i10351[0]
  i10350.halfPrecision = !!i10351[1]
  i10350.useSimplification = !!i10351[2]
  i10350.useUInt32IndexFormat = !!i10351[3]
  i10350.vertexCount = i10351[4]
  i10350.aabb = i10351[5]
  var i10353 = i10351[6]
  var i10352 = []
  for(var i = 0; i < i10353.length; i += 1) {
    i10352.push( !!i10353[i + 0] );
  }
  i10350.streams = i10352
  i10350.vertices = i10351[7]
  var i10355 = i10351[8]
  var i10354 = []
  for(var i = 0; i < i10355.length; i += 1) {
    i10354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i10355[i + 0]) );
  }
  i10350.subMeshes = i10354
  var i10357 = i10351[9]
  var i10356 = []
  for(var i = 0; i < i10357.length; i += 16) {
    i10356.push( new pc.Mat4().setData(i10357[i + 0], i10357[i + 1], i10357[i + 2], i10357[i + 3],  i10357[i + 4], i10357[i + 5], i10357[i + 6], i10357[i + 7],  i10357[i + 8], i10357[i + 9], i10357[i + 10], i10357[i + 11],  i10357[i + 12], i10357[i + 13], i10357[i + 14], i10357[i + 15]) );
  }
  i10350.bindposes = i10356
  var i10359 = i10351[10]
  var i10358 = []
  for(var i = 0; i < i10359.length; i += 1) {
    i10358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i10359[i + 0]) );
  }
  i10350.blendShapes = i10358
  return i10350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i10364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i10365 = data
  i10364.triangles = i10365[0]
  return i10364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i10370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i10371 = data
  i10370.name = i10371[0]
  var i10373 = i10371[1]
  var i10372 = []
  for(var i = 0; i < i10373.length; i += 1) {
    i10372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i10373[i + 0]) );
  }
  i10370.frames = i10372
  return i10370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i10374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i10375 = data
  i10374.name = i10375[0]
  i10374.width = i10375[1]
  i10374.height = i10375[2]
  i10374.mipmapCount = i10375[3]
  i10374.anisoLevel = i10375[4]
  i10374.filterMode = i10375[5]
  i10374.hdr = !!i10375[6]
  i10374.format = i10375[7]
  i10374.wrapMode = i10375[8]
  i10374.alphaIsTransparency = !!i10375[9]
  i10374.alphaSource = i10375[10]
  i10374.graphicsFormat = i10375[11]
  i10374.sRGBTexture = !!i10375[12]
  i10374.desiredColorSpace = i10375[13]
  i10374.wrapU = i10375[14]
  i10374.wrapV = i10375[15]
  return i10374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i10376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i10377 = data
  i10376.position = new pc.Vec3( i10377[0], i10377[1], i10377[2] )
  i10376.scale = new pc.Vec3( i10377[3], i10377[4], i10377[5] )
  i10376.rotation = new pc.Quat(i10377[6], i10377[7], i10377[8], i10377[9])
  return i10376
}

Deserializers["FactoryPipePower.FactoryPowerController"] = function (request, data, root) {
  var i10378 = root || request.c( 'FactoryPipePower.FactoryPowerController' )
  var i10379 = data
  var i10381 = i10379[0]
  var i10380 = []
  for(var i = 0; i < i10381.length; i += 2) {
  request.r(i10381[i + 0], i10381[i + 1], 2, i10380, '')
  }
  i10378.onlineRenderers = i10380
  var i10383 = i10379[1]
  var i10382 = []
  for(var i = 0; i < i10383.length; i += 2) {
  request.r(i10383[i + 0], i10383[i + 1], 2, i10382, '')
  }
  i10378.onlineIndicators = i10382
  var i10385 = i10379[2]
  var i10384 = []
  for(var i = 0; i < i10385.length; i += 2) {
  request.r(i10385[i + 0], i10385[i + 1], 2, i10384, '')
  }
  i10378.particleSystems = i10384
  var i10387 = i10379[3]
  var i10386 = []
  for(var i = 0; i < i10387.length; i += 2) {
  request.r(i10387[i + 0], i10387[i + 1], 2, i10386, '')
  }
  i10378.animators = i10386
  request.r(i10379[4], i10379[5], 0, i10378, 'stateVisualRenderer')
  request.r(i10379[6], i10379[7], 0, i10378, 'offlineStateMaterial')
  request.r(i10379[8], i10379[9], 0, i10378, 'onlineStateMaterial')
  return i10378
}

Deserializers["FactoryPipePower.SmokePipeIndicatorSequence"] = function (request, data, root) {
  var i10396 = root || request.c( 'FactoryPipePower.SmokePipeIndicatorSequence' )
  var i10397 = data
  request.r(i10397[0], i10397[1], 0, i10396, 'factory')
  var i10399 = i10397[2]
  var i10398 = []
  for(var i = 0; i < i10399.length; i += 2) {
  request.r(i10399[i + 0], i10399[i + 1], 2, i10398, '')
  }
  i10396.pipe1Inserts = i10398
  var i10401 = i10397[3]
  var i10400 = []
  for(var i = 0; i < i10401.length; i += 2) {
  request.r(i10401[i + 0], i10401[i + 1], 2, i10400, '')
  }
  i10396.pipe2Inserts = i10400
  request.r(i10397[4], i10397[5], 0, i10396, 'offlineMaterial')
  request.r(i10397[6], i10397[7], 0, i10396, 'onlineMaterial')
  return i10396
}

Deserializers["FactoryPipePower.FactoryChimneySmokeController"] = function (request, data, root) {
  var i10402 = root || request.c( 'FactoryPipePower.FactoryChimneySmokeController' )
  var i10403 = data
  request.r(i10403[0], i10403[1], 0, i10402, 'factory')
  request.r(i10403[2], i10403[3], 0, i10402, 'indicatorSequence')
  request.r(i10403[4], i10403[5], 0, i10402, 'pipe1Smoke')
  request.r(i10403[6], i10403[7], 0, i10402, 'pipe2Smoke')
  return i10402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i10404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i10405 = data
  request.r(i10405[0], i10405[1], 0, i10404, 'sharedMesh')
  return i10404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i10406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i10407 = data
  request.r(i10407[0], i10407[1], 0, i10406, 'additionalVertexStreams')
  i10406.enabled = !!i10407[2]
  request.r(i10407[3], i10407[4], 0, i10406, 'sharedMaterial')
  var i10409 = i10407[5]
  var i10408 = []
  for(var i = 0; i < i10409.length; i += 2) {
  request.r(i10409[i + 0], i10409[i + 1], 2, i10408, '')
  }
  i10406.sharedMaterials = i10408
  i10406.receiveShadows = !!i10407[6]
  i10406.shadowCastingMode = i10407[7]
  i10406.sortingLayerID = i10407[8]
  i10406.sortingOrder = i10407[9]
  i10406.lightmapIndex = i10407[10]
  i10406.lightmapSceneIndex = i10407[11]
  i10406.lightmapScaleOffset = new pc.Vec4( i10407[12], i10407[13], i10407[14], i10407[15] )
  i10406.lightProbeUsage = i10407[16]
  i10406.reflectionProbeUsage = i10407[17]
  return i10406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i10412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i10413 = data
  i10412.name = i10413[0]
  i10412.tagId = i10413[1]
  i10412.enabled = !!i10413[2]
  i10412.isStatic = !!i10413[3]
  i10412.layer = i10413[4]
  return i10412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i10414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i10415 = data
  i10414.name = i10415[0]
  i10414.atlasId = i10415[1]
  i10414.mipmapCount = i10415[2]
  i10414.hdr = !!i10415[3]
  i10414.size = i10415[4]
  i10414.anisoLevel = i10415[5]
  i10414.filterMode = i10415[6]
  var i10417 = i10415[7]
  var i10416 = []
  for(var i = 0; i < i10417.length; i += 4) {
    i10416.push( UnityEngine.Rect.MinMaxRect(i10417[i + 0], i10417[i + 1], i10417[i + 2], i10417[i + 3]) );
  }
  i10414.rects = i10416
  i10414.wrapU = i10415[8]
  i10414.wrapV = i10415[9]
  return i10414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i10420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i10421 = data
  i10420.name = i10421[0]
  i10420.index = i10421[1]
  i10420.startup = !!i10421[2]
  return i10420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i10422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i10423 = data
  i10422.type = i10423[0]
  i10422.color = new pc.Color(i10423[1], i10423[2], i10423[3], i10423[4])
  i10422.cullingMask = i10423[5]
  i10422.intensity = i10423[6]
  i10422.range = i10423[7]
  i10422.spotAngle = i10423[8]
  i10422.shadows = i10423[9]
  i10422.shadowNormalBias = i10423[10]
  i10422.shadowBias = i10423[11]
  i10422.shadowStrength = i10423[12]
  i10422.shadowResolution = i10423[13]
  i10422.lightmapBakeType = i10423[14]
  i10422.renderMode = i10423[15]
  request.r(i10423[16], i10423[17], 0, i10422, 'cookie')
  i10422.cookieSize = i10423[18]
  i10422.shadowNearPlane = i10423[19]
  i10422.occlusionMaskChannel = i10423[20]
  i10422.isBaked = !!i10423[21]
  i10422.mixedLightingMode = i10423[22]
  i10422.enabled = !!i10423[23]
  return i10422
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i10424 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i10425 = data
  i10424.m_Version = i10425[0]
  i10424.m_UsePipelineSettings = !!i10425[1]
  i10424.m_AdditionalLightsShadowResolutionTier = i10425[2]
  i10424.m_LightLayerMask = i10425[3]
  i10424.m_RenderingLayers = i10425[4]
  i10424.m_CustomShadowLayers = !!i10425[5]
  i10424.m_ShadowLayerMask = i10425[6]
  i10424.m_ShadowRenderingLayers = i10425[7]
  i10424.m_LightCookieSize = new pc.Vec2( i10425[8], i10425[9] )
  i10424.m_LightCookieOffset = new pc.Vec2( i10425[10], i10425[11] )
  i10424.m_SoftShadowQuality = i10425[12]
  return i10424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i10426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i10427 = data
  request.r(i10427[0], i10427[1], 0, i10426, 'sharedMesh')
  i10426.convex = !!i10427[2]
  i10426.enabled = !!i10427[3]
  i10426.isTrigger = !!i10427[4]
  request.r(i10427[5], i10427[6], 0, i10426, 'material')
  return i10426
}

Deserializers["FactoryPipePower.PipeVisualController"] = function (request, data, root) {
  var i10428 = root || request.c( 'FactoryPipePower.PipeVisualController' )
  var i10429 = data
  request.r(i10429[0], i10429[1], 0, i10428, 'visualRenderer')
  request.r(i10429[2], i10429[3], 0, i10428, 'tutorialOverlayMaterial')
  request.r(i10429[4], i10429[5], 0, i10428, 'greenFillTemplate')
  i10428.overrideFillDefaultColor = !!i10429[6]
  i10428.fillDefaultColor = new pc.Color(i10429[7], i10429[8], i10429[9], i10429[10])
  return i10428
}

Deserializers["FactoryPipePower.NarrativePipeSegment"] = function (request, data, root) {
  var i10430 = root || request.c( 'FactoryPipePower.NarrativePipeSegment' )
  var i10431 = data
  request.r(i10431[0], i10431[1], 0, i10430, 'visual')
  request.r(i10431[2], i10431[3], 0, i10430, 'flowStart')
  request.r(i10431[4], i10431[5], 0, i10430, 'flowEnd')
  request.r(i10431[6], i10431[7], 0, i10430, 'flowElbow')
  request.r(i10431[8], i10431[9], 0, i10430, 'completionSparks')
  i10430.fillDuration = i10431[10]
  return i10430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i10432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i10433 = data
  i10432.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i10433[0], i10432.main)
  i10432.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i10433[1], i10432.colorBySpeed)
  i10432.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i10433[2], i10432.colorOverLifetime)
  i10432.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i10433[3], i10432.emission)
  i10432.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i10433[4], i10432.rotationBySpeed)
  i10432.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i10433[5], i10432.rotationOverLifetime)
  i10432.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i10433[6], i10432.shape)
  i10432.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i10433[7], i10432.sizeBySpeed)
  i10432.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i10433[8], i10432.sizeOverLifetime)
  i10432.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i10433[9], i10432.textureSheetAnimation)
  i10432.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i10433[10], i10432.velocityOverLifetime)
  i10432.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i10433[11], i10432.noise)
  i10432.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i10433[12], i10432.inheritVelocity)
  i10432.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i10433[13], i10432.forceOverLifetime)
  i10432.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i10433[14], i10432.limitVelocityOverLifetime)
  i10432.useAutoRandomSeed = !!i10433[15]
  i10432.randomSeed = i10433[16]
  return i10432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i10434 = root || new pc.ParticleSystemMain()
  var i10435 = data
  i10434.duration = i10435[0]
  i10434.loop = !!i10435[1]
  i10434.prewarm = !!i10435[2]
  i10434.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[3], i10434.startDelay)
  i10434.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[4], i10434.startLifetime)
  i10434.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[5], i10434.startSpeed)
  i10434.startSize3D = !!i10435[6]
  i10434.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[7], i10434.startSizeX)
  i10434.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[8], i10434.startSizeY)
  i10434.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[9], i10434.startSizeZ)
  i10434.startRotation3D = !!i10435[10]
  i10434.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[11], i10434.startRotationX)
  i10434.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[12], i10434.startRotationY)
  i10434.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[13], i10434.startRotationZ)
  i10434.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i10435[14], i10434.startColor)
  i10434.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10435[15], i10434.gravityModifier)
  i10434.simulationSpace = i10435[16]
  request.r(i10435[17], i10435[18], 0, i10434, 'customSimulationSpace')
  i10434.simulationSpeed = i10435[19]
  i10434.useUnscaledTime = !!i10435[20]
  i10434.scalingMode = i10435[21]
  i10434.playOnAwake = !!i10435[22]
  i10434.maxParticles = i10435[23]
  i10434.emitterVelocityMode = i10435[24]
  i10434.stopAction = i10435[25]
  return i10434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i10436 = root || new pc.MinMaxCurve()
  var i10437 = data
  i10436.mode = i10437[0]
  i10436.curveMin = new pc.AnimationCurve( { keys_flow: i10437[1] } )
  i10436.curveMax = new pc.AnimationCurve( { keys_flow: i10437[2] } )
  i10436.curveMultiplier = i10437[3]
  i10436.constantMin = i10437[4]
  i10436.constantMax = i10437[5]
  return i10436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i10438 = root || new pc.MinMaxGradient()
  var i10439 = data
  i10438.mode = i10439[0]
  i10438.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i10439[1], i10438.gradientMin)
  i10438.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i10439[2], i10438.gradientMax)
  i10438.colorMin = new pc.Color(i10439[3], i10439[4], i10439[5], i10439[6])
  i10438.colorMax = new pc.Color(i10439[7], i10439[8], i10439[9], i10439[10])
  return i10438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i10440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i10441 = data
  i10440.mode = i10441[0]
  var i10443 = i10441[1]
  var i10442 = []
  for(var i = 0; i < i10443.length; i += 1) {
    i10442.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i10443[i + 0]) );
  }
  i10440.colorKeys = i10442
  var i10445 = i10441[2]
  var i10444 = []
  for(var i = 0; i < i10445.length; i += 1) {
    i10444.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i10445[i + 0]) );
  }
  i10440.alphaKeys = i10444
  return i10440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i10446 = root || new pc.ParticleSystemColorBySpeed()
  var i10447 = data
  i10446.enabled = !!i10447[0]
  i10446.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i10447[1], i10446.color)
  i10446.range = new pc.Vec2( i10447[2], i10447[3] )
  return i10446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i10450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i10451 = data
  i10450.color = new pc.Color(i10451[0], i10451[1], i10451[2], i10451[3])
  i10450.time = i10451[4]
  return i10450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i10454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i10455 = data
  i10454.alpha = i10455[0]
  i10454.time = i10455[1]
  return i10454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i10456 = root || new pc.ParticleSystemColorOverLifetime()
  var i10457 = data
  i10456.enabled = !!i10457[0]
  i10456.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i10457[1], i10456.color)
  return i10456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i10458 = root || new pc.ParticleSystemEmitter()
  var i10459 = data
  i10458.enabled = !!i10459[0]
  i10458.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10459[1], i10458.rateOverTime)
  i10458.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10459[2], i10458.rateOverDistance)
  var i10461 = i10459[3]
  var i10460 = []
  for(var i = 0; i < i10461.length; i += 1) {
    i10460.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i10461[i + 0]) );
  }
  i10458.bursts = i10460
  return i10458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i10464 = root || new pc.ParticleSystemBurst()
  var i10465 = data
  i10464.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10465[0], i10464.count)
  i10464.cycleCount = i10465[1]
  i10464.minCount = i10465[2]
  i10464.maxCount = i10465[3]
  i10464.repeatInterval = i10465[4]
  i10464.time = i10465[5]
  return i10464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i10466 = root || new pc.ParticleSystemRotationBySpeed()
  var i10467 = data
  i10466.enabled = !!i10467[0]
  i10466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10467[1], i10466.x)
  i10466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10467[2], i10466.y)
  i10466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10467[3], i10466.z)
  i10466.separateAxes = !!i10467[4]
  i10466.range = new pc.Vec2( i10467[5], i10467[6] )
  return i10466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i10468 = root || new pc.ParticleSystemRotationOverLifetime()
  var i10469 = data
  i10468.enabled = !!i10469[0]
  i10468.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10469[1], i10468.x)
  i10468.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10469[2], i10468.y)
  i10468.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10469[3], i10468.z)
  i10468.separateAxes = !!i10469[4]
  return i10468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i10470 = root || new pc.ParticleSystemShape()
  var i10471 = data
  i10470.enabled = !!i10471[0]
  i10470.shapeType = i10471[1]
  i10470.randomDirectionAmount = i10471[2]
  i10470.sphericalDirectionAmount = i10471[3]
  i10470.randomPositionAmount = i10471[4]
  i10470.alignToDirection = !!i10471[5]
  i10470.radius = i10471[6]
  i10470.radiusMode = i10471[7]
  i10470.radiusSpread = i10471[8]
  i10470.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10471[9], i10470.radiusSpeed)
  i10470.radiusThickness = i10471[10]
  i10470.angle = i10471[11]
  i10470.length = i10471[12]
  i10470.boxThickness = new pc.Vec3( i10471[13], i10471[14], i10471[15] )
  i10470.meshShapeType = i10471[16]
  request.r(i10471[17], i10471[18], 0, i10470, 'mesh')
  request.r(i10471[19], i10471[20], 0, i10470, 'meshRenderer')
  request.r(i10471[21], i10471[22], 0, i10470, 'skinnedMeshRenderer')
  i10470.useMeshMaterialIndex = !!i10471[23]
  i10470.meshMaterialIndex = i10471[24]
  i10470.useMeshColors = !!i10471[25]
  i10470.normalOffset = i10471[26]
  i10470.arc = i10471[27]
  i10470.arcMode = i10471[28]
  i10470.arcSpread = i10471[29]
  i10470.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10471[30], i10470.arcSpeed)
  i10470.donutRadius = i10471[31]
  i10470.position = new pc.Vec3( i10471[32], i10471[33], i10471[34] )
  i10470.rotation = new pc.Vec3( i10471[35], i10471[36], i10471[37] )
  i10470.scale = new pc.Vec3( i10471[38], i10471[39], i10471[40] )
  return i10470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i10472 = root || new pc.ParticleSystemSizeBySpeed()
  var i10473 = data
  i10472.enabled = !!i10473[0]
  i10472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10473[1], i10472.x)
  i10472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10473[2], i10472.y)
  i10472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10473[3], i10472.z)
  i10472.separateAxes = !!i10473[4]
  i10472.range = new pc.Vec2( i10473[5], i10473[6] )
  return i10472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i10474 = root || new pc.ParticleSystemSizeOverLifetime()
  var i10475 = data
  i10474.enabled = !!i10475[0]
  i10474.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[1], i10474.x)
  i10474.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[2], i10474.y)
  i10474.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10475[3], i10474.z)
  i10474.separateAxes = !!i10475[4]
  return i10474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i10476 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i10477 = data
  i10476.enabled = !!i10477[0]
  i10476.mode = i10477[1]
  i10476.animation = i10477[2]
  i10476.numTilesX = i10477[3]
  i10476.numTilesY = i10477[4]
  i10476.useRandomRow = !!i10477[5]
  i10476.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[6], i10476.frameOverTime)
  i10476.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10477[7], i10476.startFrame)
  i10476.cycleCount = i10477[8]
  i10476.rowIndex = i10477[9]
  i10476.flipU = i10477[10]
  i10476.flipV = i10477[11]
  i10476.spriteCount = i10477[12]
  var i10479 = i10477[13]
  var i10478 = []
  for(var i = 0; i < i10479.length; i += 2) {
  request.r(i10479[i + 0], i10479[i + 1], 2, i10478, '')
  }
  i10476.sprites = i10478
  return i10476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i10482 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i10483 = data
  i10482.enabled = !!i10483[0]
  i10482.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[1], i10482.x)
  i10482.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[2], i10482.y)
  i10482.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[3], i10482.z)
  i10482.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[4], i10482.radial)
  i10482.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[5], i10482.speedModifier)
  i10482.space = i10483[6]
  i10482.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[7], i10482.orbitalX)
  i10482.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[8], i10482.orbitalY)
  i10482.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[9], i10482.orbitalZ)
  i10482.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[10], i10482.orbitalOffsetX)
  i10482.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[11], i10482.orbitalOffsetY)
  i10482.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10483[12], i10482.orbitalOffsetZ)
  return i10482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i10484 = root || new pc.ParticleSystemNoise()
  var i10485 = data
  i10484.enabled = !!i10485[0]
  i10484.separateAxes = !!i10485[1]
  i10484.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[2], i10484.strengthX)
  i10484.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[3], i10484.strengthY)
  i10484.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[4], i10484.strengthZ)
  i10484.frequency = i10485[5]
  i10484.damping = !!i10485[6]
  i10484.octaveCount = i10485[7]
  i10484.octaveMultiplier = i10485[8]
  i10484.octaveScale = i10485[9]
  i10484.quality = i10485[10]
  i10484.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[11], i10484.scrollSpeed)
  i10484.scrollSpeedMultiplier = i10485[12]
  i10484.remapEnabled = !!i10485[13]
  i10484.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[14], i10484.remapX)
  i10484.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[15], i10484.remapY)
  i10484.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[16], i10484.remapZ)
  i10484.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[17], i10484.positionAmount)
  i10484.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[18], i10484.rotationAmount)
  i10484.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10485[19], i10484.sizeAmount)
  return i10484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i10486 = root || new pc.ParticleSystemInheritVelocity()
  var i10487 = data
  i10486.enabled = !!i10487[0]
  i10486.mode = i10487[1]
  i10486.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10487[2], i10486.curve)
  return i10486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i10488 = root || new pc.ParticleSystemForceOverLifetime()
  var i10489 = data
  i10488.enabled = !!i10489[0]
  i10488.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10489[1], i10488.x)
  i10488.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10489[2], i10488.y)
  i10488.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10489[3], i10488.z)
  i10488.space = i10489[4]
  i10488.randomized = !!i10489[5]
  return i10488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i10490 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i10491 = data
  i10490.enabled = !!i10491[0]
  i10490.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10491[1], i10490.limit)
  i10490.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10491[2], i10490.limitX)
  i10490.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10491[3], i10490.limitY)
  i10490.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10491[4], i10490.limitZ)
  i10490.dampen = i10491[5]
  i10490.separateAxes = !!i10491[6]
  i10490.space = i10491[7]
  i10490.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i10491[8], i10490.drag)
  i10490.multiplyDragByParticleSize = !!i10491[9]
  i10490.multiplyDragByParticleVelocity = !!i10491[10]
  return i10490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i10492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i10493 = data
  request.r(i10493[0], i10493[1], 0, i10492, 'mesh')
  i10492.meshCount = i10493[2]
  i10492.activeVertexStreamsCount = i10493[3]
  i10492.alignment = i10493[4]
  i10492.renderMode = i10493[5]
  i10492.sortMode = i10493[6]
  i10492.lengthScale = i10493[7]
  i10492.velocityScale = i10493[8]
  i10492.cameraVelocityScale = i10493[9]
  i10492.normalDirection = i10493[10]
  i10492.sortingFudge = i10493[11]
  i10492.minParticleSize = i10493[12]
  i10492.maxParticleSize = i10493[13]
  i10492.pivot = new pc.Vec3( i10493[14], i10493[15], i10493[16] )
  request.r(i10493[17], i10493[18], 0, i10492, 'trailMaterial')
  i10492.applyActiveColorSpace = !!i10493[19]
  i10492.enabled = !!i10493[20]
  request.r(i10493[21], i10493[22], 0, i10492, 'sharedMaterial')
  var i10495 = i10493[23]
  var i10494 = []
  for(var i = 0; i < i10495.length; i += 2) {
  request.r(i10495[i + 0], i10495[i + 1], 2, i10494, '')
  }
  i10492.sharedMaterials = i10494
  i10492.receiveShadows = !!i10493[24]
  i10492.shadowCastingMode = i10493[25]
  i10492.sortingLayerID = i10493[26]
  i10492.sortingOrder = i10493[27]
  i10492.lightmapIndex = i10493[28]
  i10492.lightmapSceneIndex = i10493[29]
  i10492.lightmapScaleOffset = new pc.Vec4( i10493[30], i10493[31], i10493[32], i10493[33] )
  i10492.lightProbeUsage = i10493[34]
  i10492.reflectionProbeUsage = i10493[35]
  return i10492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i10496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i10497 = data
  i10496.aspect = i10497[0]
  i10496.orthographic = !!i10497[1]
  i10496.orthographicSize = i10497[2]
  i10496.backgroundColor = new pc.Color(i10497[3], i10497[4], i10497[5], i10497[6])
  i10496.nearClipPlane = i10497[7]
  i10496.farClipPlane = i10497[8]
  i10496.fieldOfView = i10497[9]
  i10496.depth = i10497[10]
  i10496.clearFlags = i10497[11]
  i10496.cullingMask = i10497[12]
  i10496.rect = i10497[13]
  request.r(i10497[14], i10497[15], 0, i10496, 'targetTexture')
  i10496.usePhysicalProperties = !!i10497[16]
  i10496.focalLength = i10497[17]
  i10496.sensorSize = new pc.Vec2( i10497[18], i10497[19] )
  i10496.lensShift = new pc.Vec2( i10497[20], i10497[21] )
  i10496.gateFit = i10497[22]
  i10496.commandBufferCount = i10497[23]
  i10496.cameraType = i10497[24]
  i10496.enabled = !!i10497[25]
  return i10496
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i10498 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i10499 = data
  i10498.m_RenderShadows = !!i10499[0]
  i10498.m_RequiresDepthTextureOption = i10499[1]
  i10498.m_RequiresOpaqueTextureOption = i10499[2]
  i10498.m_CameraType = i10499[3]
  var i10501 = i10499[4]
  var i10500 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i10501.length; i += 2) {
  request.r(i10501[i + 0], i10501[i + 1], 1, i10500, '')
  }
  i10498.m_Cameras = i10500
  i10498.m_RendererIndex = i10499[5]
  i10498.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i10499[6] )
  request.r(i10499[7], i10499[8], 0, i10498, 'm_VolumeTrigger')
  i10498.m_VolumeFrameworkUpdateModeOption = i10499[9]
  i10498.m_RenderPostProcessing = !!i10499[10]
  i10498.m_Antialiasing = i10499[11]
  i10498.m_AntialiasingQuality = i10499[12]
  i10498.m_StopNaN = !!i10499[13]
  i10498.m_Dithering = !!i10499[14]
  i10498.m_ClearDepth = !!i10499[15]
  i10498.m_AllowXRRendering = !!i10499[16]
  i10498.m_AllowHDROutput = !!i10499[17]
  i10498.m_UseScreenCoordOverride = !!i10499[18]
  i10498.m_ScreenSizeOverride = new pc.Vec4( i10499[19], i10499[20], i10499[21], i10499[22] )
  i10498.m_ScreenCoordScaleBias = new pc.Vec4( i10499[23], i10499[24], i10499[25], i10499[26] )
  i10498.m_RequiresDepthTexture = !!i10499[27]
  i10498.m_RequiresColorTexture = !!i10499[28]
  i10498.m_Version = i10499[29]
  i10498.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i10499[30], i10498.m_TaaSettings)
  return i10498
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i10504 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i10505 = data
  i10504.m_Quality = i10505[0]
  i10504.m_FrameInfluence = i10505[1]
  i10504.m_JitterScale = i10505[2]
  i10504.m_MipBias = i10505[3]
  i10504.m_VarianceClampScale = i10505[4]
  i10504.m_ContrastAdaptiveSharpening = i10505[5]
  return i10504
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i10506 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i10507 = data
  i10506.m_ShowDebugText = !!i10507[0]
  i10506.m_ShowCameraFrustum = !!i10507[1]
  i10506.m_IgnoreTimeScale = !!i10507[2]
  request.r(i10507[3], i10507[4], 0, i10506, 'm_WorldUpOverride')
  i10506.m_UpdateMethod = i10507[5]
  i10506.m_BlendUpdateMethod = i10507[6]
  i10506.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i10507[7], i10506.m_DefaultBlend)
  request.r(i10507[8], i10507[9], 0, i10506, 'm_CustomBlends')
  i10506.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i10507[10], i10506.m_CameraCutEvent)
  i10506.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i10507[11], i10506.m_CameraActivatedEvent)
  return i10506
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i10508 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i10509 = data
  i10508.m_Style = i10509[0]
  i10508.m_Time = i10509[1]
  i10508.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i10509[2] } )
  return i10508
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i10510 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i10511 = data
  i10510.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10511[0], i10510.m_PersistentCalls)
  return i10510
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i10512 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i10513 = data
  var i10515 = i10513[0]
  var i10514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i10515.length; i += 1) {
    i10514.add(request.d('UnityEngine.Events.PersistentCall', i10515[i + 0]));
  }
  i10512.m_Calls = i10514
  return i10512
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i10518 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i10519 = data
  request.r(i10519[0], i10519[1], 0, i10518, 'm_Target')
  i10518.m_TargetAssemblyTypeName = i10519[2]
  i10518.m_MethodName = i10519[3]
  i10518.m_Mode = i10519[4]
  i10518.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i10519[5], i10518.m_Arguments)
  i10518.m_CallState = i10519[6]
  return i10518
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i10520 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i10521 = data
  i10520.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10521[0], i10520.m_PersistentCalls)
  return i10520
}

Deserializers["FactoryPipePower.StartPowerNode"] = function (request, data, root) {
  var i10522 = root || request.c( 'FactoryPipePower.StartPowerNode' )
  var i10523 = data
  request.r(i10523[0], i10523[1], 0, i10522, 'powerOutput')
  request.r(i10523[2], i10523[3], 0, i10522, 'nextNodeBehaviour')
  request.r(i10523[4], i10523[5], 0, i10522, 'visual')
  i10522.deferPowerActivation = !!i10523[6]
  return i10522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i10524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i10525 = data
  i10524.center = new pc.Vec3( i10525[0], i10525[1], i10525[2] )
  i10524.radius = i10525[3]
  i10524.height = i10525[4]
  i10524.direction = i10525[5]
  i10524.enabled = !!i10525[6]
  i10524.isTrigger = !!i10525[7]
  request.r(i10525[8], i10525[9], 0, i10524, 'material')
  return i10524
}

Deserializers["FactoryPipePower.PipeSlotController"] = function (request, data, root) {
  var i10526 = root || request.c( 'FactoryPipePower.PipeSlotController' )
  var i10527 = data
  i10526.expectedSpec = request.d('FactoryPipePower.PipeSpec', i10527[0], i10526.expectedSpec)
  i10526.rotationGroup = i10527[1]
  i10526.expectedCornerGroup = i10527[2]
  request.r(i10527[3], i10527[4], 0, i10526, 'anchorY')
  request.r(i10527[5], i10527[6], 0, i10526, 'slotVisual')
  request.r(i10527[7], i10527[8], 0, i10526, 'connectorA')
  request.r(i10527[9], i10527[10], 0, i10526, 'connectorB')
  request.r(i10527[11], i10527[12], 0, i10526, 'captureCollider')
  request.r(i10527[13], i10527[14], 0, i10526, 'tapCollider')
  request.r(i10527[15], i10527[16], 0, i10526, 'emptyMaterial')
  request.r(i10527[17], i10527[18], 0, i10526, 'hoverValidMaterial')
  request.r(i10527[19], i10527[20], 0, i10526, 'wrongMaterial')
  request.r(i10527[21], i10527[22], 0, i10526, 'defaultMaterial')
  i10526.rotationDuration = i10527[23]
  i10526.chargingDuration = i10527[24]
  request.r(i10527[25], i10527[26], 0, i10526, 'previousNodeBehaviour')
  request.r(i10527[27], i10527[28], 0, i10526, 'nextNodeBehaviour')
  request.r(i10527[29], i10527[30], 0, i10526, 'completionSparks')
  return i10526
}

Deserializers["FactoryPipePower.PipeSpec"] = function (request, data, root) {
  var i10528 = root || request.c( 'FactoryPipePower.PipeSpec' )
  var i10529 = data
  i10528.diameter = i10529[0]
  i10528.length = i10529[1]
  i10528.shape = i10529[2]
  return i10528
}

Deserializers["FactoryPipePower.PipeCompletionSparks"] = function (request, data, root) {
  var i10530 = root || request.c( 'FactoryPipePower.PipeCompletionSparks' )
  var i10531 = data
  request.r(i10531[0], i10531[1], 0, i10530, 'sparksA')
  request.r(i10531[2], i10531[3], 0, i10530, 'sparksB')
  return i10530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i10532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i10533 = data
  i10532.center = new pc.Vec3( i10533[0], i10533[1], i10533[2] )
  i10532.size = new pc.Vec3( i10533[3], i10533[4], i10533[5] )
  i10532.enabled = !!i10533[6]
  i10532.isTrigger = !!i10533[7]
  request.r(i10533[8], i10533[9], 0, i10532, 'material')
  return i10532
}

Deserializers["FactoryPipePower.PipeSlotCaptureVolume"] = function (request, data, root) {
  var i10534 = root || request.c( 'FactoryPipePower.PipeSlotCaptureVolume' )
  var i10535 = data
  request.r(i10535[0], i10535[1], 0, i10534, 'ownerSlot')
  return i10534
}

Deserializers["FactoryPipePower.EndPowerNode"] = function (request, data, root) {
  var i10536 = root || request.c( 'FactoryPipePower.EndPowerNode' )
  var i10537 = data
  request.r(i10537[0], i10537[1], 0, i10536, 'expectedPreviousBehaviour')
  request.r(i10537[2], i10537[3], 0, i10536, 'powerInput')
  request.r(i10537[4], i10537[5], 0, i10536, 'visual')
  request.r(i10537[6], i10537[7], 0, i10536, 'inactiveMaterial')
  request.r(i10537[8], i10537[9], 0, i10536, 'poweredMaterial')
  request.r(i10537[10], i10537[11], 0, i10536, 'factoryPowerController')
  request.r(i10537[12], i10537[13], 0, i10536, 'narrativePowerSequence')
  return i10536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i10538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i10539 = data
  i10538.mass = i10539[0]
  i10538.drag = i10539[1]
  i10538.angularDrag = i10539[2]
  i10538.useGravity = !!i10539[3]
  i10538.isKinematic = !!i10539[4]
  i10538.constraints = i10539[5]
  i10538.maxAngularVelocity = i10539[6]
  i10538.collisionDetectionMode = i10539[7]
  i10538.interpolation = i10539[8]
  return i10538
}

Deserializers["FactoryPipePower.DraggablePipeController"] = function (request, data, root) {
  var i10540 = root || request.c( 'FactoryPipePower.DraggablePipeController' )
  var i10541 = data
  i10540.spec = request.d('FactoryPipePower.PipeSpec', i10541[0], i10540.spec)
  request.r(i10541[1], i10541[2], 0, i10540, 'visual')
  request.r(i10541[3], i10541[4], 0, i10540, 'pickCollider')
  request.r(i10541[5], i10541[6], 0, i10540, 'dragCollider')
  request.r(i10541[7], i10541[8], 0, i10540, 'body')
  request.r(i10541[9], i10541[10], 0, i10540, 'defaultMaterial')
  i10540.returnDuration = i10541[11]
  i10540.dragPlaneHeight = i10541[12]
  i10540.obstacleSkin = i10541[13]
  return i10540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i10542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i10543 = data
  i10542.pivot = new pc.Vec2( i10543[0], i10543[1] )
  i10542.anchorMin = new pc.Vec2( i10543[2], i10543[3] )
  i10542.anchorMax = new pc.Vec2( i10543[4], i10543[5] )
  i10542.sizeDelta = new pc.Vec2( i10543[6], i10543[7] )
  i10542.anchoredPosition3D = new pc.Vec3( i10543[8], i10543[9], i10543[10] )
  i10542.rotation = new pc.Quat(i10543[11], i10543[12], i10543[13], i10543[14])
  i10542.scale = new pc.Vec3( i10543[15], i10543[16], i10543[17] )
  return i10542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i10544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i10545 = data
  i10544.planeDistance = i10545[0]
  i10544.referencePixelsPerUnit = i10545[1]
  i10544.isFallbackOverlay = !!i10545[2]
  i10544.renderMode = i10545[3]
  i10544.renderOrder = i10545[4]
  i10544.sortingLayerName = i10545[5]
  i10544.sortingOrder = i10545[6]
  i10544.scaleFactor = i10545[7]
  request.r(i10545[8], i10545[9], 0, i10544, 'worldCamera')
  i10544.overrideSorting = !!i10545[10]
  i10544.pixelPerfect = !!i10545[11]
  i10544.targetDisplay = i10545[12]
  i10544.overridePixelPerfect = !!i10545[13]
  i10544.enabled = !!i10545[14]
  return i10544
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i10546 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i10547 = data
  i10546.m_UiScaleMode = i10547[0]
  i10546.m_ReferencePixelsPerUnit = i10547[1]
  i10546.m_ScaleFactor = i10547[2]
  i10546.m_ReferenceResolution = new pc.Vec2( i10547[3], i10547[4] )
  i10546.m_ScreenMatchMode = i10547[5]
  i10546.m_MatchWidthOrHeight = i10547[6]
  i10546.m_PhysicalUnit = i10547[7]
  i10546.m_FallbackScreenDPI = i10547[8]
  i10546.m_DefaultSpriteDPI = i10547[9]
  i10546.m_DynamicPixelsPerUnit = i10547[10]
  i10546.m_PresetInfoIsWorld = !!i10547[11]
  return i10546
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i10548 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i10549 = data
  i10548.m_IgnoreReversedGraphics = !!i10549[0]
  i10548.m_BlockingObjects = i10549[1]
  i10548.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i10549[2] )
  return i10548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i10550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i10551 = data
  i10550.cullTransparentMesh = !!i10551[0]
  return i10550
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i10552 = root || request.c( 'UnityEngine.UI.Text' )
  var i10553 = data
  i10552.m_FontData = request.d('UnityEngine.UI.FontData', i10553[0], i10552.m_FontData)
  i10552.m_Text = i10553[1]
  request.r(i10553[2], i10553[3], 0, i10552, 'm_Material')
  i10552.m_Maskable = !!i10553[4]
  i10552.m_Color = new pc.Color(i10553[5], i10553[6], i10553[7], i10553[8])
  i10552.m_RaycastTarget = !!i10553[9]
  i10552.m_RaycastPadding = new pc.Vec4( i10553[10], i10553[11], i10553[12], i10553[13] )
  return i10552
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i10554 = root || request.c( 'UnityEngine.UI.FontData' )
  var i10555 = data
  request.r(i10555[0], i10555[1], 0, i10554, 'm_Font')
  i10554.m_FontSize = i10555[2]
  i10554.m_FontStyle = i10555[3]
  i10554.m_BestFit = !!i10555[4]
  i10554.m_MinSize = i10555[5]
  i10554.m_MaxSize = i10555[6]
  i10554.m_Alignment = i10555[7]
  i10554.m_AlignByGeometry = !!i10555[8]
  i10554.m_RichText = !!i10555[9]
  i10554.m_HorizontalOverflow = i10555[10]
  i10554.m_VerticalOverflow = i10555[11]
  i10554.m_LineSpacing = i10555[12]
  return i10554
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i10556 = root || request.c( 'UnityEngine.UI.Image' )
  var i10557 = data
  request.r(i10557[0], i10557[1], 0, i10556, 'm_Sprite')
  i10556.m_Type = i10557[2]
  i10556.m_PreserveAspect = !!i10557[3]
  i10556.m_FillCenter = !!i10557[4]
  i10556.m_FillMethod = i10557[5]
  i10556.m_FillAmount = i10557[6]
  i10556.m_FillClockwise = !!i10557[7]
  i10556.m_FillOrigin = i10557[8]
  i10556.m_UseSpriteMesh = !!i10557[9]
  i10556.m_PixelsPerUnitMultiplier = i10557[10]
  request.r(i10557[11], i10557[12], 0, i10556, 'm_Material')
  i10556.m_Maskable = !!i10557[13]
  i10556.m_Color = new pc.Color(i10557[14], i10557[15], i10557[16], i10557[17])
  i10556.m_RaycastTarget = !!i10557[18]
  i10556.m_RaycastPadding = new pc.Vec4( i10557[19], i10557[20], i10557[21], i10557[22] )
  return i10556
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i10558 = root || request.c( 'UnityEngine.UI.Button' )
  var i10559 = data
  i10558.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i10559[0], i10558.m_OnClick)
  i10558.m_Navigation = request.d('UnityEngine.UI.Navigation', i10559[1], i10558.m_Navigation)
  i10558.m_Transition = i10559[2]
  i10558.m_Colors = request.d('UnityEngine.UI.ColorBlock', i10559[3], i10558.m_Colors)
  i10558.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i10559[4], i10558.m_SpriteState)
  i10558.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i10559[5], i10558.m_AnimationTriggers)
  i10558.m_Interactable = !!i10559[6]
  request.r(i10559[7], i10559[8], 0, i10558, 'm_TargetGraphic')
  return i10558
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i10560 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i10561 = data
  i10560.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10561[0], i10560.m_PersistentCalls)
  return i10560
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i10562 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i10563 = data
  i10562.m_Mode = i10563[0]
  i10562.m_WrapAround = !!i10563[1]
  request.r(i10563[2], i10563[3], 0, i10562, 'm_SelectOnUp')
  request.r(i10563[4], i10563[5], 0, i10562, 'm_SelectOnDown')
  request.r(i10563[6], i10563[7], 0, i10562, 'm_SelectOnLeft')
  request.r(i10563[8], i10563[9], 0, i10562, 'm_SelectOnRight')
  return i10562
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i10564 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i10565 = data
  i10564.m_NormalColor = new pc.Color(i10565[0], i10565[1], i10565[2], i10565[3])
  i10564.m_HighlightedColor = new pc.Color(i10565[4], i10565[5], i10565[6], i10565[7])
  i10564.m_PressedColor = new pc.Color(i10565[8], i10565[9], i10565[10], i10565[11])
  i10564.m_SelectedColor = new pc.Color(i10565[12], i10565[13], i10565[14], i10565[15])
  i10564.m_DisabledColor = new pc.Color(i10565[16], i10565[17], i10565[18], i10565[19])
  i10564.m_ColorMultiplier = i10565[20]
  i10564.m_FadeDuration = i10565[21]
  return i10564
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i10566 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i10567 = data
  request.r(i10567[0], i10567[1], 0, i10566, 'm_HighlightedSprite')
  request.r(i10567[2], i10567[3], 0, i10566, 'm_PressedSprite')
  request.r(i10567[4], i10567[5], 0, i10566, 'm_SelectedSprite')
  request.r(i10567[6], i10567[7], 0, i10566, 'm_DisabledSprite')
  return i10566
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i10568 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i10569 = data
  i10568.m_NormalTrigger = i10569[0]
  i10568.m_HighlightedTrigger = i10569[1]
  i10568.m_PressedTrigger = i10569[2]
  i10568.m_SelectedTrigger = i10569[3]
  i10568.m_DisabledTrigger = i10569[4]
  return i10568
}

Deserializers["FactoryPipePower.CompletionUI"] = function (request, data, root) {
  var i10570 = root || request.c( 'FactoryPipePower.CompletionUI' )
  var i10571 = data
  request.r(i10571[0], i10571[1], 0, i10570, 'panelRoot')
  request.r(i10571[2], i10571[3], 0, i10570, 'titleLabel')
  request.r(i10571[4], i10571[5], 0, i10570, 'subtitleLabel')
  request.r(i10571[6], i10571[7], 0, i10570, 'primaryButton')
  i10570.titleText = i10571[8]
  i10570.subtitleText = i10571[9]
  return i10570
}

Deserializers["FactoryPipePower.PointerInputController"] = function (request, data, root) {
  var i10572 = root || request.c( 'FactoryPipePower.PointerInputController' )
  var i10573 = data
  request.r(i10573[0], i10573[1], 0, i10572, 'raycastCamera')
  request.r(i10573[2], i10573[3], 0, i10572, 'inputActions')
  i10572.maxRayDistance = i10573[4]
  i10572.pickMask = UnityEngine.LayerMask.FromIntegerValue( i10573[5] )
  i10572.slotTapMask = UnityEngine.LayerMask.FromIntegerValue( i10573[6] )
  request.r(i10573[7], i10573[8], 0, i10572, 'tutorialGateBehaviour')
  return i10572
}

Deserializers["FactoryPipePower.PipeSlotRegistry"] = function (request, data, root) {
  var i10574 = root || request.c( 'FactoryPipePower.PipeSlotRegistry' )
  var i10575 = data
  return i10574
}

Deserializers["FactoryPipePower.PowerChainController"] = function (request, data, root) {
  var i10576 = root || request.c( 'FactoryPipePower.PowerChainController' )
  var i10577 = data
  request.r(i10577[0], i10577[1], 0, i10576, 'startNode')
  var i10579 = i10577[2]
  var i10578 = []
  for(var i = 0; i < i10579.length; i += 2) {
  request.r(i10579[i + 0], i10579[i + 1], 2, i10578, '')
  }
  i10576.slots = i10578
  request.r(i10577[3], i10577[4], 0, i10576, 'endNode')
  request.r(i10577[5], i10577[6], 0, i10576, 'factoryPowerController')
  request.r(i10577[7], i10577[8], 0, i10576, 'narrativeSequence')
  return i10576
}

Deserializers["FactoryPipePower.TutorialController"] = function (request, data, root) {
  var i10582 = root || request.c( 'FactoryPipePower.TutorialController' )
  var i10583 = data
  request.r(i10583[0], i10583[1], 0, i10582, 'tutorialPipe')
  request.r(i10583[2], i10583[3], 0, i10582, 'tutorialSlot')
  i10582.enableOnInitialize = !!i10583[4]
  return i10582
}

Deserializers["FactoryPipePower.SceneInitializer"] = function (request, data, root) {
  var i10584 = root || request.c( 'FactoryPipePower.SceneInitializer' )
  var i10585 = data
  request.r(i10585[0], i10585[1], 0, i10584, 'pointerInput')
  request.r(i10585[2], i10585[3], 0, i10584, 'registry')
  request.r(i10585[4], i10585[5], 0, i10584, 'powerChain')
  request.r(i10585[6], i10585[7], 0, i10584, 'tutorial')
  request.r(i10585[8], i10585[9], 0, i10584, 'factoryTutorial')
  var i10587 = i10585[10]
  var i10586 = []
  for(var i = 0; i < i10587.length; i += 2) {
  request.r(i10587[i + 0], i10587[i + 1], 2, i10586, '')
  }
  i10584.slots = i10586
  return i10584
}

Deserializers["FactoryPipePower.GameFlowController"] = function (request, data, root) {
  var i10588 = root || request.c( 'FactoryPipePower.GameFlowController' )
  var i10589 = data
  request.r(i10589[0], i10589[1], 0, i10588, 'factoryPowerController')
  request.r(i10589[2], i10589[3], 0, i10588, 'completionUI')
  request.r(i10589[4], i10589[5], 0, i10588, 'completedUI')
  request.r(i10589[6], i10589[7], 0, i10588, 'pointerInput')
  request.r(i10589[8], i10589[9], 0, i10588, 'tutorialController')
  request.r(i10589[10], i10589[11], 0, i10588, 'factoryTutorial')
  i10588.completionDelay = i10589[12]
  i10588.completedScreenDelay = i10589[13]
  return i10588
}

Deserializers["FactoryPipePower.FactoryTutorialController"] = function (request, data, root) {
  var i10590 = root || request.c( 'FactoryPipePower.FactoryTutorialController' )
  var i10591 = data
  request.r(i10591[0], i10591[1], 0, i10590, 'cameraBrain')
  request.r(i10591[2], i10591[3], 0, i10590, 'overviewCamera')
  request.r(i10591[4], i10591[5], 0, i10590, 'gameplayCamera')
  request.r(i10591[6], i10591[7], 0, i10590, 'firstPipeCamera')
  request.r(i10591[8], i10591[9], 0, i10590, 'firstChargingCamera')
  i10590.blendDuration = i10591[10]
  i10590.blendTimeout = i10591[11]
  i10590.overviewPriority = i10591[12]
  i10590.gameplayPriority = i10591[13]
  request.r(i10591[14], i10591[15], 0, i10590, 'pointerInput')
  request.r(i10591[16], i10591[17], 0, i10590, 'narrativeSequence')
  request.r(i10591[18], i10591[19], 0, i10590, 'startNode')
  request.r(i10591[20], i10591[21], 0, i10590, 'endNode')
  request.r(i10591[22], i10591[23], 0, i10590, 'factoryPowerController')
  request.r(i10591[24], i10591[25], 0, i10590, 'indicatorSequence')
  request.r(i10591[26], i10591[27], 0, i10590, 'chimneySmoke')
  request.r(i10591[28], i10591[29], 0, i10590, 'slotRegistry')
  request.r(i10591[30], i10591[31], 0, i10590, 'tutorialPipe')
  request.r(i10591[32], i10591[33], 0, i10590, 'tutorialSlot')
  request.r(i10591[34], i10591[35], 0, i10590, 'tutorialCanvas')
  request.r(i10591[36], i10591[37], 0, i10590, 'messageText')
  request.r(i10591[38], i10591[39], 0, i10590, 'handImage')
  request.r(i10591[40], i10591[41], 0, i10590, 'handMessageGroup')
  request.r(i10591[42], i10591[43], 0, i10590, 'messageBackdrop')
  i10590.backdropPadding = i10591[44]
  i10590.handAnchorOffset = new pc.Vec2( i10591[45], i10591[46] )
  i10590.textUnderHandOffset = i10591[47]
  i10590.textCenterScreenOffset = i10591[48]
  i10590.pickHandLiftPx = i10591[49]
  i10590.handPulseMin = i10591[50]
  i10590.handPulseMax = i10591[51]
  i10590.handPulsePeriod = i10591[52]
  return i10590
}

Deserializers["FactoryPipePower.NarrativePowerSequence"] = function (request, data, root) {
  var i10592 = root || request.c( 'FactoryPipePower.NarrativePowerSequence' )
  var i10593 = data
  var i10595 = i10593[0]
  var i10594 = []
  for(var i = 0; i < i10595.length; i += 2) {
  request.r(i10595[i + 0], i10595[i + 1], 2, i10594, '')
  }
  i10592.leftSegments = i10594
  var i10597 = i10593[1]
  var i10596 = []
  for(var i = 0; i < i10597.length; i += 2) {
  request.r(i10597[i + 0], i10597[i + 1], 2, i10596, '')
  }
  i10592.rightSegments = i10596
  request.r(i10593[2], i10593[3], 0, i10592, 'startNode')
  request.r(i10593[4], i10593[5], 0, i10592, 'endNode')
  request.r(i10593[6], i10593[7], 0, i10592, 'factoryPowerController')
  i10592.initialDelay = i10593[8]
  i10592.tutorialControlled = !!i10593[9]
  return i10592
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i10600 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i10601 = data
  request.r(i10601[0], i10601[1], 0, i10600, 'm_LookAt')
  request.r(i10601[2], i10601[3], 0, i10600, 'm_Follow')
  i10600.m_Lens = request.d('Cinemachine.LensSettings', i10601[4], i10600.m_Lens)
  i10600.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i10601[5], i10600.m_Transitions)
  var i10603 = i10601[6]
  var i10602 = []
  for(var i = 0; i < i10603.length; i += 1) {
    i10602.push( i10603[i + 0] );
  }
  i10600.m_ExcludedPropertiesInInspector = i10602
  var i10605 = i10601[7]
  var i10604 = []
  for(var i = 0; i < i10605.length; i += 1) {
    i10604.push( i10605[i + 0] );
  }
  i10600.m_LockStageInInspector = i10604
  i10600.m_Priority = i10601[8]
  i10600.m_StandbyUpdate = i10601[9]
  i10600.m_LegacyBlendHint = i10601[10]
  request.r(i10601[11], i10601[12], 0, i10600, 'm_ComponentOwner')
  i10600.m_StreamingVersion = i10601[13]
  return i10600
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i10606 = root || request.c( 'Cinemachine.LensSettings' )
  var i10607 = data
  i10606.FieldOfView = i10607[0]
  i10606.OrthographicSize = i10607[1]
  i10606.NearClipPlane = i10607[2]
  i10606.FarClipPlane = i10607[3]
  i10606.Dutch = i10607[4]
  i10606.ModeOverride = i10607[5]
  i10606.LensShift = new pc.Vec2( i10607[6], i10607[7] )
  i10606.GateFit = i10607[8]
  i10606.FocusDistance = i10607[9]
  i10606.m_SensorSize = new pc.Vec2( i10607[10], i10607[11] )
  return i10606
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i10608 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i10609 = data
  i10608.m_BlendHint = i10609[0]
  i10608.m_InheritPosition = !!i10609[1]
  i10608.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i10609[2], i10608.m_OnCameraLive)
  return i10608
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i10614 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i10615 = data
  return i10614
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i10616 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i10617 = data
  i10616.m_EffectColor = new pc.Color(i10617[0], i10617[1], i10617[2], i10617[3])
  i10616.m_EffectDistance = new pc.Vec2( i10617[4], i10617[5] )
  i10616.m_UseGraphicAlpha = !!i10617[6]
  return i10616
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i10618 = root || request.c( 'UnityEngine.UI.Outline' )
  var i10619 = data
  i10618.m_EffectColor = new pc.Color(i10619[0], i10619[1], i10619[2], i10619[3])
  i10618.m_EffectDistance = new pc.Vec2( i10619[4], i10619[5] )
  i10618.m_UseGraphicAlpha = !!i10619[6]
  return i10618
}

Deserializers["FactoryPipePower.CompletedUI"] = function (request, data, root) {
  var i10620 = root || request.c( 'FactoryPipePower.CompletedUI' )
  var i10621 = data
  request.r(i10621[0], i10621[1], 0, i10620, 'panelRoot')
  request.r(i10621[2], i10621[3], 0, i10620, 'downloadImage')
  i10620.downloadPulseMin = i10621[4]
  i10620.downloadPulseMax = i10621[5]
  i10620.downloadPulsePeriod = i10621[6]
  return i10620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i10622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i10623 = data
  i10622.ambientIntensity = i10623[0]
  i10622.reflectionIntensity = i10623[1]
  i10622.ambientMode = i10623[2]
  i10622.ambientLight = new pc.Color(i10623[3], i10623[4], i10623[5], i10623[6])
  i10622.ambientSkyColor = new pc.Color(i10623[7], i10623[8], i10623[9], i10623[10])
  i10622.ambientGroundColor = new pc.Color(i10623[11], i10623[12], i10623[13], i10623[14])
  i10622.ambientEquatorColor = new pc.Color(i10623[15], i10623[16], i10623[17], i10623[18])
  i10622.fogColor = new pc.Color(i10623[19], i10623[20], i10623[21], i10623[22])
  i10622.fogEndDistance = i10623[23]
  i10622.fogStartDistance = i10623[24]
  i10622.fogDensity = i10623[25]
  i10622.fog = !!i10623[26]
  request.r(i10623[27], i10623[28], 0, i10622, 'skybox')
  i10622.fogMode = i10623[29]
  var i10625 = i10623[30]
  var i10624 = []
  for(var i = 0; i < i10625.length; i += 1) {
    i10624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i10625[i + 0]) );
  }
  i10622.lightmaps = i10624
  i10622.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i10623[31], i10622.lightProbes)
  i10622.lightmapsMode = i10623[32]
  i10622.mixedBakeMode = i10623[33]
  i10622.environmentLightingMode = i10623[34]
  i10622.ambientProbe = new pc.SphericalHarmonicsL2(i10623[35])
  request.r(i10623[36], i10623[37], 0, i10622, 'customReflection')
  request.r(i10623[38], i10623[39], 0, i10622, 'defaultReflection')
  i10622.defaultReflectionMode = i10623[40]
  i10622.defaultReflectionResolution = i10623[41]
  i10622.sunLightObjectId = i10623[42]
  i10622.pixelLightCount = i10623[43]
  i10622.defaultReflectionHDR = !!i10623[44]
  i10622.hasLightDataAsset = !!i10623[45]
  i10622.hasManualGenerate = !!i10623[46]
  return i10622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i10628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i10629 = data
  request.r(i10629[0], i10629[1], 0, i10628, 'lightmapColor')
  request.r(i10629[2], i10629[3], 0, i10628, 'lightmapDirection')
  request.r(i10629[4], i10629[5], 0, i10628, 'shadowMask')
  return i10628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i10630 = root || new UnityEngine.LightProbes()
  var i10631 = data
  return i10630
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i10638 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i10639 = data
  request.r(i10639[0], i10639[1], 0, i10638, 'panelPrefab')
  var i10641 = i10639[2]
  var i10640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i10641.length; i += 1) {
    i10640.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i10641[i + 0]));
  }
  i10638.prefabs = i10640
  return i10638
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i10644 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i10645 = data
  i10644.type = i10645[0]
  request.r(i10645[1], i10645[2], 0, i10644, 'prefab')
  return i10644
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i10646 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i10647 = data
  i10646.m_Spacing = i10647[0]
  i10646.m_ChildForceExpandWidth = !!i10647[1]
  i10646.m_ChildForceExpandHeight = !!i10647[2]
  i10646.m_ChildControlWidth = !!i10647[3]
  i10646.m_ChildControlHeight = !!i10647[4]
  i10646.m_ChildScaleWidth = !!i10647[5]
  i10646.m_ChildScaleHeight = !!i10647[6]
  i10646.m_ReverseArrangement = !!i10647[7]
  i10646.m_Padding = UnityEngine.RectOffset.FromPaddings(i10647[8], i10647[9], i10647[10], i10647[11])
  i10646.m_ChildAlignment = i10647[12]
  return i10646
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i10648 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i10649 = data
  i10648.m_HorizontalFit = i10649[0]
  i10648.m_VerticalFit = i10649[1]
  return i10648
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i10650 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i10651 = data
  request.r(i10651[0], i10651[1], 0, i10650, 'contentHolder')
  return i10650
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i10652 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i10653 = data
  request.r(i10653[0], i10653[1], 0, i10652, 'nameLabel')
  request.r(i10653[2], i10653[3], 0, i10652, 'scrollRect')
  request.r(i10653[4], i10653[5], 0, i10652, 'viewport')
  request.r(i10653[6], i10653[7], 0, i10652, 'Canvas')
  return i10652
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i10654 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i10655 = data
  i10654.m_IgnoreLayout = !!i10655[0]
  i10654.m_MinWidth = i10655[1]
  i10654.m_MinHeight = i10655[2]
  i10654.m_PreferredWidth = i10655[3]
  i10654.m_PreferredHeight = i10655[4]
  i10654.m_FlexibleWidth = i10655[5]
  i10654.m_FlexibleHeight = i10655[6]
  i10654.m_LayoutPriority = i10655[7]
  return i10654
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i10656 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i10657 = data
  request.r(i10657[0], i10657[1], 0, i10656, 'm_ObjectArgument')
  i10656.m_ObjectArgumentAssemblyTypeName = i10657[2]
  i10656.m_IntArgument = i10657[3]
  i10656.m_FloatArgument = i10657[4]
  i10656.m_StringArgument = i10657[5]
  i10656.m_BoolArgument = !!i10657[6]
  return i10656
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i10658 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i10659 = data
  request.r(i10659[0], i10659[1], 0, i10658, 'm_Content')
  i10658.m_Horizontal = !!i10659[2]
  i10658.m_Vertical = !!i10659[3]
  i10658.m_MovementType = i10659[4]
  i10658.m_Elasticity = i10659[5]
  i10658.m_Inertia = !!i10659[6]
  i10658.m_DecelerationRate = i10659[7]
  i10658.m_ScrollSensitivity = i10659[8]
  request.r(i10659[9], i10659[10], 0, i10658, 'm_Viewport')
  request.r(i10659[11], i10659[12], 0, i10658, 'm_HorizontalScrollbar')
  request.r(i10659[13], i10659[14], 0, i10658, 'm_VerticalScrollbar')
  i10658.m_HorizontalScrollbarVisibility = i10659[15]
  i10658.m_VerticalScrollbarVisibility = i10659[16]
  i10658.m_HorizontalScrollbarSpacing = i10659[17]
  i10658.m_VerticalScrollbarSpacing = i10659[18]
  i10658.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i10659[19], i10658.m_OnValueChanged)
  return i10658
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i10660 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i10661 = data
  i10660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10661[0], i10660.m_PersistentCalls)
  return i10660
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i10662 = root || request.c( 'UnityEngine.UI.Mask' )
  var i10663 = data
  i10662.m_ShowMaskGraphic = !!i10663[0]
  return i10662
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i10664 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i10665 = data
  request.r(i10665[0], i10665[1], 0, i10664, 'm_HandleRect')
  i10664.m_Direction = i10665[2]
  i10664.m_Value = i10665[3]
  i10664.m_Size = i10665[4]
  i10664.m_NumberOfSteps = i10665[5]
  i10664.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i10665[6], i10664.m_OnValueChanged)
  i10664.m_Navigation = request.d('UnityEngine.UI.Navigation', i10665[7], i10664.m_Navigation)
  i10664.m_Transition = i10665[8]
  i10664.m_Colors = request.d('UnityEngine.UI.ColorBlock', i10665[9], i10664.m_Colors)
  i10664.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i10665[10], i10664.m_SpriteState)
  i10664.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i10665[11], i10664.m_AnimationTriggers)
  i10664.m_Interactable = !!i10665[12]
  request.r(i10665[13], i10665[14], 0, i10664, 'm_TargetGraphic')
  return i10664
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i10666 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i10667 = data
  i10666.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10667[0], i10666.m_PersistentCalls)
  return i10666
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i10668 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i10669 = data
  var i10671 = i10669[0]
  var i10670 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i10671.length; i += 1) {
    i10670.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i10671[i + 0]));
  }
  i10668.m_Delegates = i10670
  return i10668
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i10674 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i10675 = data
  i10674.eventID = i10675[0]
  i10674.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i10675[1], i10674.callback)
  return i10674
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i10676 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i10677 = data
  i10676.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10677[0], i10676.m_PersistentCalls)
  return i10676
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i10678 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i10679 = data
  request.r(i10679[0], i10679[1], 0, i10678, 'nameLabel')
  request.r(i10679[2], i10679[3], 0, i10678, 'valueLabel')
  i10678.colorDefault = new pc.Color(i10679[4], i10679[5], i10679[6], i10679[7])
  i10678.colorSelected = new pc.Color(i10679[8], i10679[9], i10679[10], i10679[11])
  return i10678
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i10680 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i10681 = data
  request.r(i10681[0], i10681[1], 0, i10680, 'nameLabel')
  request.r(i10681[2], i10681[3], 0, i10680, 'valueToggle')
  request.r(i10681[4], i10681[5], 0, i10680, 'checkmarkImage')
  i10680.colorDefault = new pc.Color(i10681[6], i10681[7], i10681[8], i10681[9])
  i10680.colorSelected = new pc.Color(i10681[10], i10681[11], i10681[12], i10681[13])
  return i10680
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i10682 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i10683 = data
  i10682.toggleTransition = i10683[0]
  request.r(i10683[1], i10683[2], 0, i10682, 'graphic')
  i10682.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i10683[3], i10682.onValueChanged)
  request.r(i10683[4], i10683[5], 0, i10682, 'm_Group')
  i10682.m_IsOn = !!i10683[6]
  i10682.m_Navigation = request.d('UnityEngine.UI.Navigation', i10683[7], i10682.m_Navigation)
  i10682.m_Transition = i10683[8]
  i10682.m_Colors = request.d('UnityEngine.UI.ColorBlock', i10683[9], i10682.m_Colors)
  i10682.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i10683[10], i10682.m_SpriteState)
  i10682.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i10683[11], i10682.m_AnimationTriggers)
  i10682.m_Interactable = !!i10683[12]
  request.r(i10683[13], i10683[14], 0, i10682, 'm_TargetGraphic')
  return i10682
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i10684 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i10685 = data
  i10684.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10685[0], i10684.m_PersistentCalls)
  return i10684
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i10686 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i10687 = data
  request.r(i10687[0], i10687[1], 0, i10686, 'nameLabel')
  request.r(i10687[2], i10687[3], 0, i10686, 'valueLabel')
  i10686.colorDefault = new pc.Color(i10687[4], i10687[5], i10687[6], i10687[7])
  i10686.colorSelected = new pc.Color(i10687[8], i10687[9], i10687[10], i10687[11])
  return i10686
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i10688 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i10689 = data
  request.r(i10689[0], i10689[1], 0, i10688, 'nameLabel')
  request.r(i10689[2], i10689[3], 0, i10688, 'valueLabel')
  i10688.colorDefault = new pc.Color(i10689[4], i10689[5], i10689[6], i10689[7])
  i10688.colorSelected = new pc.Color(i10689[8], i10689[9], i10689[10], i10689[11])
  return i10688
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i10690 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i10691 = data
  request.r(i10691[0], i10691[1], 0, i10690, 'nameLabel')
  request.r(i10691[2], i10691[3], 0, i10690, 'valueLabel')
  i10690.colorDefault = new pc.Color(i10691[4], i10691[5], i10691[6], i10691[7])
  i10690.colorSelected = new pc.Color(i10691[8], i10691[9], i10691[10], i10691[11])
  return i10690
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i10692 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i10693 = data
  request.r(i10693[0], i10693[1], 0, i10692, 'nextButtonText')
  request.r(i10693[2], i10693[3], 0, i10692, 'previousButtonText')
  request.r(i10693[4], i10693[5], 0, i10692, 'nameLabel')
  request.r(i10693[6], i10693[7], 0, i10692, 'valueLabel')
  i10692.colorDefault = new pc.Color(i10693[8], i10693[9], i10693[10], i10693[11])
  i10692.colorSelected = new pc.Color(i10693[12], i10693[13], i10693[14], i10693[15])
  return i10692
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i10694 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i10695 = data
  request.r(i10695[0], i10695[1], 0, i10694, 'nameLabel')
  i10694.colorDefault = new pc.Color(i10695[2], i10695[3], i10695[4], i10695[5])
  i10694.colorSelected = new pc.Color(i10695[6], i10695[7], i10695[8], i10695[9])
  return i10694
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i10696 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i10697 = data
  request.r(i10697[0], i10697[1], 0, i10696, 'nameLabel')
  request.r(i10697[2], i10697[3], 0, i10696, 'valueToggle')
  i10696.colorDefault = new pc.Color(i10697[4], i10697[5], i10697[6], i10697[7])
  i10696.colorSelected = new pc.Color(i10697[8], i10697[9], i10697[10], i10697[11])
  return i10696
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i10698 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i10699 = data
  request.r(i10699[0], i10699[1], 0, i10698, 'content')
  request.r(i10699[2], i10699[3], 0, i10698, 'arrowOpened')
  request.r(i10699[4], i10699[5], 0, i10698, 'arrowClosed')
  i10698.toggleTransition = i10699[6]
  request.r(i10699[7], i10699[8], 0, i10698, 'graphic')
  i10698.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i10699[9], i10698.onValueChanged)
  request.r(i10699[10], i10699[11], 0, i10698, 'm_Group')
  i10698.m_IsOn = !!i10699[12]
  i10698.m_Navigation = request.d('UnityEngine.UI.Navigation', i10699[13], i10698.m_Navigation)
  i10698.m_Transition = i10699[14]
  i10698.m_Colors = request.d('UnityEngine.UI.ColorBlock', i10699[15], i10698.m_Colors)
  i10698.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i10699[16], i10698.m_SpriteState)
  i10698.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i10699[17], i10698.m_AnimationTriggers)
  i10698.m_Interactable = !!i10699[18]
  request.r(i10699[19], i10699[20], 0, i10698, 'm_TargetGraphic')
  return i10698
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i10700 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i10701 = data
  request.r(i10701[0], i10701[1], 0, i10700, 'nameLabel')
  request.r(i10701[2], i10701[3], 0, i10700, 'valueToggle')
  request.r(i10701[4], i10701[5], 0, i10700, 'colorImage')
  request.r(i10701[6], i10701[7], 0, i10700, 'fieldR')
  request.r(i10701[8], i10701[9], 0, i10700, 'fieldG')
  request.r(i10701[10], i10701[11], 0, i10700, 'fieldB')
  request.r(i10701[12], i10701[13], 0, i10700, 'fieldA')
  i10700.colorDefault = new pc.Color(i10701[14], i10701[15], i10701[16], i10701[17])
  i10700.colorSelected = new pc.Color(i10701[18], i10701[19], i10701[20], i10701[21])
  return i10700
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i10702 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i10703 = data
  request.r(i10703[0], i10703[1], 0, i10702, 'nameLabel')
  request.r(i10703[2], i10703[3], 0, i10702, 'valueLabel')
  i10702.colorDefault = new pc.Color(i10703[4], i10703[5], i10703[6], i10703[7])
  i10702.colorSelected = new pc.Color(i10703[8], i10703[9], i10703[10], i10703[11])
  return i10702
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i10704 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i10705 = data
  request.r(i10705[0], i10705[1], 0, i10704, 'nameLabel')
  request.r(i10705[2], i10705[3], 0, i10704, 'valueToggle')
  request.r(i10705[4], i10705[5], 0, i10704, 'fieldX')
  request.r(i10705[6], i10705[7], 0, i10704, 'fieldY')
  i10704.colorDefault = new pc.Color(i10705[8], i10705[9], i10705[10], i10705[11])
  i10704.colorSelected = new pc.Color(i10705[12], i10705[13], i10705[14], i10705[15])
  return i10704
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i10706 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i10707 = data
  request.r(i10707[0], i10707[1], 0, i10706, 'nameLabel')
  request.r(i10707[2], i10707[3], 0, i10706, 'valueToggle')
  request.r(i10707[4], i10707[5], 0, i10706, 'fieldX')
  request.r(i10707[6], i10707[7], 0, i10706, 'fieldY')
  request.r(i10707[8], i10707[9], 0, i10706, 'fieldZ')
  i10706.colorDefault = new pc.Color(i10707[10], i10707[11], i10707[12], i10707[13])
  i10706.colorSelected = new pc.Color(i10707[14], i10707[15], i10707[16], i10707[17])
  return i10706
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i10708 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i10709 = data
  request.r(i10709[0], i10709[1], 0, i10708, 'nameLabel')
  request.r(i10709[2], i10709[3], 0, i10708, 'valueToggle')
  request.r(i10709[4], i10709[5], 0, i10708, 'fieldX')
  request.r(i10709[6], i10709[7], 0, i10708, 'fieldY')
  request.r(i10709[8], i10709[9], 0, i10708, 'fieldZ')
  request.r(i10709[10], i10709[11], 0, i10708, 'fieldW')
  i10708.colorDefault = new pc.Color(i10709[12], i10709[13], i10709[14], i10709[15])
  i10708.colorSelected = new pc.Color(i10709[16], i10709[17], i10709[18], i10709[19])
  return i10708
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i10710 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i10711 = data
  i10710.colorDefault = new pc.Color(i10711[0], i10711[1], i10711[2], i10711[3])
  i10710.colorSelected = new pc.Color(i10711[4], i10711[5], i10711[6], i10711[7])
  return i10710
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i10712 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i10713 = data
  i10712.m_Spacing = i10713[0]
  i10712.m_ChildForceExpandWidth = !!i10713[1]
  i10712.m_ChildForceExpandHeight = !!i10713[2]
  i10712.m_ChildControlWidth = !!i10713[3]
  i10712.m_ChildControlHeight = !!i10713[4]
  i10712.m_ChildScaleWidth = !!i10713[5]
  i10712.m_ChildScaleHeight = !!i10713[6]
  i10712.m_ReverseArrangement = !!i10713[7]
  i10712.m_Padding = UnityEngine.RectOffset.FromPaddings(i10713[8], i10713[9], i10713[10], i10713[11])
  i10712.m_ChildAlignment = i10713[12]
  return i10712
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i10714 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i10715 = data
  i10714.colorDefault = new pc.Color(i10715[0], i10715[1], i10715[2], i10715[3])
  i10714.colorSelected = new pc.Color(i10715[4], i10715[5], i10715[6], i10715[7])
  return i10714
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i10716 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i10717 = data
  request.r(i10717[0], i10717[1], 0, i10716, 'nameLabel')
  request.r(i10717[2], i10717[3], 0, i10716, 'header')
  i10716.colorDefault = new pc.Color(i10717[4], i10717[5], i10717[6], i10717[7])
  i10716.colorSelected = new pc.Color(i10717[8], i10717[9], i10717[10], i10717[11])
  return i10716
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i10718 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i10719 = data
  request.r(i10719[0], i10719[1], 0, i10718, 'nameLabel')
  request.r(i10719[2], i10719[3], 0, i10718, 'valueToggle')
  var i10721 = i10719[4]
  var i10720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i10721.length; i += 2) {
  request.r(i10721[i + 0], i10721[i + 1], 1, i10720, '')
  }
  i10718.toggles = i10720
  i10718.colorDefault = new pc.Color(i10719[5], i10719[6], i10719[7], i10719[8])
  i10718.colorSelected = new pc.Color(i10719[9], i10719[10], i10719[11], i10719[12])
  return i10718
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i10724 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i10725 = data
  request.r(i10725[0], i10725[1], 0, i10724, 'nameLabel')
  request.r(i10725[2], i10725[3], 0, i10724, 'valueToggle')
  request.r(i10725[4], i10725[5], 0, i10724, 'checkmarkImage')
  i10724.colorDefault = new pc.Color(i10725[6], i10725[7], i10725[8], i10725[9])
  i10724.colorSelected = new pc.Color(i10725[10], i10725[11], i10725[12], i10725[13])
  return i10724
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i10726 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i10727 = data
  request.r(i10727[0], i10727[1], 0, i10726, 'nameLabel')
  request.r(i10727[2], i10727[3], 0, i10726, 'valueToggle')
  request.r(i10727[4], i10727[5], 0, i10726, 'checkmarkImage')
  i10726.colorDefault = new pc.Color(i10727[6], i10727[7], i10727[8], i10727[9])
  i10726.colorSelected = new pc.Color(i10727[10], i10727[11], i10727[12], i10727[13])
  return i10726
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i10728 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i10729 = data
  request.r(i10729[0], i10729[1], 0, i10728, 'nextButtonText')
  request.r(i10729[2], i10729[3], 0, i10728, 'previousButtonText')
  request.r(i10729[4], i10729[5], 0, i10728, 'nameLabel')
  request.r(i10729[6], i10729[7], 0, i10728, 'valueLabel')
  i10728.colorDefault = new pc.Color(i10729[8], i10729[9], i10729[10], i10729[11])
  i10728.colorSelected = new pc.Color(i10729[12], i10729[13], i10729[14], i10729[15])
  return i10728
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i10730 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i10731 = data
  request.r(i10731[0], i10731[1], 0, i10730, 'nameLabel')
  request.r(i10731[2], i10731[3], 0, i10730, 'valueToggle')
  i10730.colorDefault = new pc.Color(i10731[4], i10731[5], i10731[6], i10731[7])
  i10730.colorSelected = new pc.Color(i10731[8], i10731[9], i10731[10], i10731[11])
  return i10730
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i10732 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i10733 = data
  request.r(i10733[0], i10733[1], 0, i10732, 'nameLabel')
  i10732.colorDefault = new pc.Color(i10733[2], i10733[3], i10733[4], i10733[5])
  i10732.colorSelected = new pc.Color(i10733[6], i10733[7], i10733[8], i10733[9])
  return i10732
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i10734 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i10735 = data
  request.r(i10735[0], i10735[1], 0, i10734, 'nameLabel')
  request.r(i10735[2], i10735[3], 0, i10734, 'valueLabel')
  request.r(i10735[4], i10735[5], 0, i10734, 'progressBarRect')
  i10734.colorDefault = new pc.Color(i10735[6], i10735[7], i10735[8], i10735[9])
  i10734.colorSelected = new pc.Color(i10735[10], i10735[11], i10735[12], i10735[13])
  return i10734
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i10736 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i10737 = data
  request.r(i10737[0], i10737[1], 0, i10736, 'nameLabel')
  request.r(i10737[2], i10737[3], 0, i10736, 'valueLabel')
  i10736.colorDefault = new pc.Color(i10737[4], i10737[5], i10737[6], i10737[7])
  i10736.colorSelected = new pc.Color(i10737[8], i10737[9], i10737[10], i10737[11])
  return i10736
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i10738 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i10739 = data
  request.r(i10739[0], i10739[1], 0, i10738, 'nameLabel')
  request.r(i10739[2], i10739[3], 0, i10738, 'valueLabel')
  i10738.colorDefault = new pc.Color(i10739[4], i10739[5], i10739[6], i10739[7])
  i10738.colorSelected = new pc.Color(i10739[8], i10739[9], i10739[10], i10739[11])
  return i10738
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i10740 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i10741 = data
  request.r(i10741[0], i10741[1], 0, i10740, 'nextButtonText')
  request.r(i10741[2], i10741[3], 0, i10740, 'previousButtonText')
  request.r(i10741[4], i10741[5], 0, i10740, 'nameLabel')
  request.r(i10741[6], i10741[7], 0, i10740, 'valueLabel')
  i10740.colorDefault = new pc.Color(i10741[8], i10741[9], i10741[10], i10741[11])
  i10740.colorSelected = new pc.Color(i10741[12], i10741[13], i10741[14], i10741[15])
  return i10740
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i10742 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i10743 = data
  request.r(i10743[0], i10743[1], 0, i10742, 'nextButtonText')
  request.r(i10743[2], i10743[3], 0, i10742, 'previousButtonText')
  request.r(i10743[4], i10743[5], 0, i10742, 'nameLabel')
  request.r(i10743[6], i10743[7], 0, i10742, 'valueLabel')
  i10742.colorDefault = new pc.Color(i10743[8], i10743[9], i10743[10], i10743[11])
  i10742.colorSelected = new pc.Color(i10743[12], i10743[13], i10743[14], i10743[15])
  return i10742
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField"] = function (request, data, root) {
  var i10744 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField' )
  var i10745 = data
  request.r(i10745[0], i10745[1], 0, i10744, 'nameLabel')
  request.r(i10745[2], i10745[3], 0, i10744, 'valueToggle')
  var i10747 = i10745[4]
  var i10746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i10747.length; i += 2) {
  request.r(i10747[i + 0], i10747[i + 1], 1, i10746, '')
  }
  i10744.toggles = i10746
  i10744.colorDefault = new pc.Color(i10745[5], i10745[6], i10745[7], i10745[8])
  i10744.colorSelected = new pc.Color(i10745[9], i10745[10], i10745[11], i10745[12])
  return i10744
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i10748 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i10749 = data
  request.r(i10749[0], i10749[1], 0, i10748, 'panel')
  request.r(i10749[2], i10749[3], 0, i10748, 'valuePrefab')
  return i10748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i10750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i10751 = data
  i10750.AdditionalLightsRenderingMode = i10751[0]
  i10750.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i10751[1], i10750.LightRenderingMode)
  i10750.MainLightRenderingModeValue = i10751[2]
  i10750.SupportsMainLightShadows = !!i10751[3]
  i10750.MixedLightingSupported = !!i10751[4]
  i10750.MainLightShadowmapResolutionValue = i10751[5]
  i10750.SupportsSoftShadows = !!i10751[6]
  i10750.SoftShadowQualityValue = i10751[7]
  i10750.ShadowDistance = i10751[8]
  i10750.ShadowCascadeCount = i10751[9]
  i10750.Cascade2Split = i10751[10]
  i10750.Cascade3Split = new pc.Vec2( i10751[11], i10751[12] )
  i10750.Cascade4Split = new pc.Vec3( i10751[13], i10751[14], i10751[15] )
  i10750.CascadeBorder = i10751[16]
  i10750.ShadowDepthBias = i10751[17]
  i10750.ShadowNormalBias = i10751[18]
  i10750.RequireDepthTexture = !!i10751[19]
  i10750.RequireOpaqueTexture = !!i10751[20]
  i10750.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i10751[21], i10750.scriptableRendererData)
  return i10750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i10752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i10753 = data
  i10752.Disabled = i10753[0]
  i10752.PerVertex = i10753[1]
  i10752.PerPixel = i10753[2]
  return i10752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i10754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i10755 = data
  i10754.opaqueLayerMask = i10755[0]
  i10754.transparentLayerMask = i10755[1]
  var i10757 = i10755[2]
  var i10756 = []
  for(var i = 0; i < i10757.length; i += 1) {
    i10756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i10757[i + 0]) );
  }
  i10754.RenderObjectsFeatures = i10756
  i10754.name = i10755[3]
  return i10754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i10760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i10761 = data
  i10760.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i10761[0], i10760.settings)
  i10760.name = i10761[1]
  i10760.typeName = i10761[2]
  return i10760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i10762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i10763 = data
  var i10765 = i10763[0]
  var i10764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i10765.length; i += 1) {
    i10764.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i10765[i + 0]));
  }
  i10762.ShaderCompilationErrors = i10764
  i10762.name = i10763[1]
  i10762.guid = i10763[2]
  var i10767 = i10763[3]
  var i10766 = []
  for(var i = 0; i < i10767.length; i += 1) {
    i10766.push( i10767[i + 0] );
  }
  i10762.shaderDefinedKeywords = i10766
  var i10769 = i10763[4]
  var i10768 = []
  for(var i = 0; i < i10769.length; i += 1) {
    i10768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i10769[i + 0]) );
  }
  i10762.passes = i10768
  var i10771 = i10763[5]
  var i10770 = []
  for(var i = 0; i < i10771.length; i += 1) {
    i10770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i10771[i + 0]) );
  }
  i10762.usePasses = i10770
  var i10773 = i10763[6]
  var i10772 = []
  for(var i = 0; i < i10773.length; i += 1) {
    i10772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i10773[i + 0]) );
  }
  i10762.defaultParameterValues = i10772
  request.r(i10763[7], i10763[8], 0, i10762, 'unityFallbackShader')
  i10762.readDepth = !!i10763[9]
  i10762.hasDepthOnlyPass = !!i10763[10]
  i10762.isCreatedByShaderGraph = !!i10763[11]
  i10762.disableBatching = !!i10763[12]
  i10762.compiled = !!i10763[13]
  return i10762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i10776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i10777 = data
  i10776.shaderName = i10777[0]
  i10776.errorMessage = i10777[1]
  return i10776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i10780 = root || new pc.UnityShaderPass()
  var i10781 = data
  i10780.id = i10781[0]
  i10780.subShaderIndex = i10781[1]
  i10780.name = i10781[2]
  i10780.passType = i10781[3]
  i10780.grabPassTextureName = i10781[4]
  i10780.usePass = !!i10781[5]
  i10780.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10781[6], i10780.zTest)
  i10780.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10781[7], i10780.zWrite)
  i10780.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10781[8], i10780.culling)
  i10780.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10781[9], i10780.blending)
  i10780.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10781[10], i10780.alphaBlending)
  i10780.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10781[11], i10780.colorWriteMask)
  i10780.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10781[12], i10780.offsetUnits)
  i10780.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10781[13], i10780.offsetFactor)
  i10780.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10781[14], i10780.stencilRef)
  i10780.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10781[15], i10780.stencilReadMask)
  i10780.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10781[16], i10780.stencilWriteMask)
  i10780.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10781[17], i10780.stencilOp)
  i10780.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10781[18], i10780.stencilOpFront)
  i10780.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10781[19], i10780.stencilOpBack)
  var i10783 = i10781[20]
  var i10782 = []
  for(var i = 0; i < i10783.length; i += 1) {
    i10782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i10783[i + 0]) );
  }
  i10780.tags = i10782
  var i10785 = i10781[21]
  var i10784 = []
  for(var i = 0; i < i10785.length; i += 1) {
    i10784.push( i10785[i + 0] );
  }
  i10780.passDefinedKeywords = i10784
  var i10787 = i10781[22]
  var i10786 = []
  for(var i = 0; i < i10787.length; i += 1) {
    i10786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i10787[i + 0]) );
  }
  i10780.passDefinedKeywordGroups = i10786
  var i10789 = i10781[23]
  var i10788 = []
  for(var i = 0; i < i10789.length; i += 1) {
    i10788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10789[i + 0]) );
  }
  i10780.variants = i10788
  var i10791 = i10781[24]
  var i10790 = []
  for(var i = 0; i < i10791.length; i += 1) {
    i10790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10791[i + 0]) );
  }
  i10780.excludedVariants = i10790
  i10780.hasDepthReader = !!i10781[25]
  return i10780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i10792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i10793 = data
  i10792.val = i10793[0]
  i10792.name = i10793[1]
  return i10792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i10794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i10795 = data
  i10794.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10795[0], i10794.src)
  i10794.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10795[1], i10794.dst)
  i10794.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10795[2], i10794.op)
  return i10794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i10796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i10797 = data
  i10796.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10797[0], i10796.pass)
  i10796.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10797[1], i10796.fail)
  i10796.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10797[2], i10796.zFail)
  i10796.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10797[3], i10796.comp)
  return i10796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i10800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i10801 = data
  i10800.name = i10801[0]
  i10800.value = i10801[1]
  return i10800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i10804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i10805 = data
  var i10807 = i10805[0]
  var i10806 = []
  for(var i = 0; i < i10807.length; i += 1) {
    i10806.push( i10807[i + 0] );
  }
  i10804.keywords = i10806
  i10804.hasDiscard = !!i10805[1]
  return i10804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i10810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i10811 = data
  i10810.passId = i10811[0]
  i10810.subShaderIndex = i10811[1]
  var i10813 = i10811[2]
  var i10812 = []
  for(var i = 0; i < i10813.length; i += 1) {
    i10812.push( i10813[i + 0] );
  }
  i10810.keywords = i10812
  i10810.vertexProgram = i10811[3]
  i10810.fragmentProgram = i10811[4]
  i10810.exportedForWebGl2 = !!i10811[5]
  i10810.readDepth = !!i10811[6]
  return i10810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i10816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i10817 = data
  request.r(i10817[0], i10817[1], 0, i10816, 'shader')
  i10816.pass = i10817[2]
  return i10816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i10820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i10821 = data
  i10820.name = i10821[0]
  i10820.type = i10821[1]
  i10820.value = new pc.Vec4( i10821[2], i10821[3], i10821[4], i10821[5] )
  i10820.textureValue = i10821[6]
  i10820.shaderPropertyFlag = i10821[7]
  return i10820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i10822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i10823 = data
  i10822.name = i10823[0]
  request.r(i10823[1], i10823[2], 0, i10822, 'texture')
  i10822.aabb = i10823[3]
  i10822.vertices = i10823[4]
  i10822.triangles = i10823[5]
  i10822.textureRect = UnityEngine.Rect.MinMaxRect(i10823[6], i10823[7], i10823[8], i10823[9])
  i10822.packedRect = UnityEngine.Rect.MinMaxRect(i10823[10], i10823[11], i10823[12], i10823[13])
  i10822.border = new pc.Vec4( i10823[14], i10823[15], i10823[16], i10823[17] )
  i10822.transparency = i10823[18]
  i10822.bounds = i10823[19]
  i10822.pixelsPerUnit = i10823[20]
  i10822.textureWidth = i10823[21]
  i10822.textureHeight = i10823[22]
  i10822.nativeSize = new pc.Vec2( i10823[23], i10823[24] )
  i10822.pivot = new pc.Vec2( i10823[25], i10823[26] )
  i10822.textureRectOffset = new pc.Vec2( i10823[27], i10823[28] )
  return i10822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i10824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i10825 = data
  i10824.name = i10825[0]
  i10824.ascent = i10825[1]
  i10824.originalLineHeight = i10825[2]
  i10824.fontSize = i10825[3]
  var i10827 = i10825[4]
  var i10826 = []
  for(var i = 0; i < i10827.length; i += 1) {
    i10826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i10827[i + 0]) );
  }
  i10824.characterInfo = i10826
  request.r(i10825[5], i10825[6], 0, i10824, 'texture')
  i10824.originalFontSize = i10825[7]
  return i10824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i10830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i10831 = data
  i10830.index = i10831[0]
  i10830.advance = i10831[1]
  i10830.bearing = i10831[2]
  i10830.glyphWidth = i10831[3]
  i10830.glyphHeight = i10831[4]
  i10830.minX = i10831[5]
  i10830.maxX = i10831[6]
  i10830.minY = i10831[7]
  i10830.maxY = i10831[8]
  i10830.uvBottomLeftX = i10831[9]
  i10830.uvBottomLeftY = i10831[10]
  i10830.uvBottomRightX = i10831[11]
  i10830.uvBottomRightY = i10831[12]
  i10830.uvTopLeftX = i10831[13]
  i10830.uvTopLeftY = i10831[14]
  i10830.uvTopRightX = i10831[15]
  i10830.uvTopRightY = i10831[16]
  return i10830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i10832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i10833 = data
  i10832.name = i10833[0]
  i10832.bytes64 = i10833[1]
  i10832.data = i10833[2]
  return i10832
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i10834 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i10835 = data
  var i10837 = i10835[0]
  var i10836 = []
  for(var i = 0; i < i10837.length; i += 1) {
    i10836.push( request.d('UnityEngine.InputSystem.InputActionMap', i10837[i + 0]) );
  }
  i10834.m_ActionMaps = i10836
  var i10839 = i10835[1]
  var i10838 = []
  for(var i = 0; i < i10839.length; i += 1) {
    i10838.push( request.d('UnityEngine.InputSystem.InputControlScheme', i10839[i + 0]) );
  }
  i10834.m_ControlSchemes = i10838
  i10834.m_IsProjectWide = !!i10835[2]
  return i10834
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i10842 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i10843 = data
  i10842.m_Name = i10843[0]
  i10842.m_Id = i10843[1]
  request.r(i10843[2], i10843[3], 0, i10842, 'm_Asset')
  var i10845 = i10843[4]
  var i10844 = []
  for(var i = 0; i < i10845.length; i += 1) {
    i10844.push( request.d('UnityEngine.InputSystem.InputAction', i10845[i + 0]) );
  }
  i10842.m_Actions = i10844
  var i10847 = i10843[5]
  var i10846 = []
  for(var i = 0; i < i10847.length; i += 1) {
    i10846.push( request.d('UnityEngine.InputSystem.InputBinding', i10847[i + 0]) );
  }
  i10842.m_Bindings = i10846
  return i10842
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i10850 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i10851 = data
  i10850.m_Name = i10851[0]
  i10850.m_Type = i10851[1]
  i10850.m_ExpectedControlType = i10851[2]
  i10850.m_Id = i10851[3]
  i10850.m_Processors = i10851[4]
  i10850.m_Interactions = i10851[5]
  var i10853 = i10851[6]
  var i10852 = []
  for(var i = 0; i < i10853.length; i += 1) {
    i10852.push( request.d('UnityEngine.InputSystem.InputBinding', i10853[i + 0]) );
  }
  i10850.m_SingletonActionBindings = i10852
  i10850.m_Flags = i10851[7]
  i10850.m_Priority = i10851[8]
  return i10850
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i10856 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i10857 = data
  i10856.m_Name = i10857[0]
  i10856.m_Id = i10857[1]
  i10856.m_Path = i10857[2]
  i10856.m_Interactions = i10857[3]
  i10856.m_Processors = i10857[4]
  i10856.m_Groups = i10857[5]
  i10856.m_Action = i10857[6]
  i10856.m_Flags = i10857[7]
  return i10856
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i10860 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i10861 = data
  i10860.m_Name = i10861[0]
  i10860.m_BindingGroup = i10861[1]
  var i10863 = i10861[2]
  var i10862 = []
  for(var i = 0; i < i10863.length; i += 1) {
    i10862.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i10863[i + 0]) );
  }
  i10860.m_DeviceRequirements = i10862
  return i10860
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i10864 = root || request.c( 'TMPro.TMP_Settings' )
  var i10865 = data
  i10864.assetVersion = i10865[0]
  i10864.m_TextWrappingMode = i10865[1]
  i10864.m_enableKerning = !!i10865[2]
  var i10867 = i10865[3]
  var i10866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i10867.length; i += 1) {
    i10866.add(i10867[i + 0]);
  }
  i10864.m_ActiveFontFeatures = i10866
  i10864.m_enableExtraPadding = !!i10865[4]
  i10864.m_enableTintAllSprites = !!i10865[5]
  i10864.m_enableParseEscapeCharacters = !!i10865[6]
  i10864.m_EnableRaycastTarget = !!i10865[7]
  i10864.m_GetFontFeaturesAtRuntime = !!i10865[8]
  i10864.m_missingGlyphCharacter = i10865[9]
  i10864.m_ClearDynamicDataOnBuild = !!i10865[10]
  i10864.m_warningsDisabled = !!i10865[11]
  request.r(i10865[12], i10865[13], 0, i10864, 'm_defaultFontAsset')
  i10864.m_defaultFontAssetPath = i10865[14]
  i10864.m_defaultFontSize = i10865[15]
  i10864.m_defaultAutoSizeMinRatio = i10865[16]
  i10864.m_defaultAutoSizeMaxRatio = i10865[17]
  i10864.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i10865[18], i10865[19] )
  i10864.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i10865[20], i10865[21] )
  i10864.m_autoSizeTextContainer = !!i10865[22]
  i10864.m_IsTextObjectScaleStatic = !!i10865[23]
  var i10869 = i10865[24]
  var i10868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10869.length; i += 2) {
  request.r(i10869[i + 0], i10869[i + 1], 1, i10868, '')
  }
  i10864.m_fallbackFontAssets = i10868
  i10864.m_matchMaterialPreset = !!i10865[25]
  i10864.m_HideSubTextObjects = !!i10865[26]
  request.r(i10865[27], i10865[28], 0, i10864, 'm_defaultSpriteAsset')
  i10864.m_defaultSpriteAssetPath = i10865[29]
  i10864.m_enableEmojiSupport = !!i10865[30]
  i10864.m_MissingCharacterSpriteUnicode = i10865[31]
  var i10871 = i10865[32]
  var i10870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i10871.length; i += 2) {
  request.r(i10871[i + 0], i10871[i + 1], 1, i10870, '')
  }
  i10864.m_EmojiFallbackTextAssets = i10870
  i10864.m_defaultColorGradientPresetsPath = i10865[33]
  request.r(i10865[34], i10865[35], 0, i10864, 'm_defaultStyleSheet')
  i10864.m_StyleSheetsResourcePath = i10865[36]
  request.r(i10865[37], i10865[38], 0, i10864, 'm_leadingCharacters')
  request.r(i10865[39], i10865[40], 0, i10864, 'm_followingCharacters')
  i10864.m_UseModernHangulLineBreakingRules = !!i10865[41]
  return i10864
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i10878 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i10879 = data
  i10878.normalStyle = i10879[0]
  i10878.normalSpacingOffset = i10879[1]
  i10878.boldStyle = i10879[2]
  i10878.boldSpacing = i10879[3]
  i10878.italicStyle = i10879[4]
  i10878.tabSize = i10879[5]
  request.r(i10879[6], i10879[7], 0, i10878, 'atlas')
  i10878.m_SourceFontFileGUID = i10879[8]
  i10878.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i10879[9], i10878.m_CreationSettings)
  request.r(i10879[10], i10879[11], 0, i10878, 'm_SourceFontFile')
  i10878.m_SourceFontFilePath = i10879[12]
  i10878.m_AtlasPopulationMode = i10879[13]
  i10878.InternalDynamicOS = !!i10879[14]
  var i10881 = i10879[15]
  var i10880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i10881.length; i += 1) {
    i10880.add(request.d('UnityEngine.TextCore.Glyph', i10881[i + 0]));
  }
  i10878.m_GlyphTable = i10880
  var i10883 = i10879[16]
  var i10882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i10883.length; i += 1) {
    i10882.add(request.d('TMPro.TMP_Character', i10883[i + 0]));
  }
  i10878.m_CharacterTable = i10882
  var i10885 = i10879[17]
  var i10884 = []
  for(var i = 0; i < i10885.length; i += 2) {
  request.r(i10885[i + 0], i10885[i + 1], 2, i10884, '')
  }
  i10878.m_AtlasTextures = i10884
  i10878.m_AtlasTextureIndex = i10879[18]
  i10878.m_IsMultiAtlasTexturesEnabled = !!i10879[19]
  i10878.m_GetFontFeatures = !!i10879[20]
  i10878.m_ClearDynamicDataOnBuild = !!i10879[21]
  i10878.m_AtlasWidth = i10879[22]
  i10878.m_AtlasHeight = i10879[23]
  i10878.m_AtlasPadding = i10879[24]
  i10878.m_AtlasRenderMode = i10879[25]
  var i10887 = i10879[26]
  var i10886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10887.length; i += 1) {
    i10886.add(request.d('UnityEngine.TextCore.GlyphRect', i10887[i + 0]));
  }
  i10878.m_UsedGlyphRects = i10886
  var i10889 = i10879[27]
  var i10888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10889.length; i += 1) {
    i10888.add(request.d('UnityEngine.TextCore.GlyphRect', i10889[i + 0]));
  }
  i10878.m_FreeGlyphRects = i10888
  i10878.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i10879[28], i10878.m_FontFeatureTable)
  i10878.m_ShouldReimportFontFeatures = !!i10879[29]
  var i10891 = i10879[30]
  var i10890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10891.length; i += 2) {
  request.r(i10891[i + 0], i10891[i + 1], 1, i10890, '')
  }
  i10878.m_FallbackFontAssetTable = i10890
  var i10893 = i10879[31]
  var i10892 = []
  for(var i = 0; i < i10893.length; i += 1) {
    i10892.push( request.d('TMPro.TMP_FontWeightPair', i10893[i + 0]) );
  }
  i10878.m_FontWeightTable = i10892
  var i10895 = i10879[32]
  var i10894 = []
  for(var i = 0; i < i10895.length; i += 1) {
    i10894.push( request.d('TMPro.TMP_FontWeightPair', i10895[i + 0]) );
  }
  i10878.fontWeights = i10894
  i10878.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i10879[33], i10878.m_fontInfo)
  var i10897 = i10879[34]
  var i10896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i10897.length; i += 1) {
    i10896.add(request.d('TMPro.TMP_Glyph', i10897[i + 0]));
  }
  i10878.m_glyphInfoList = i10896
  i10878.m_KerningTable = request.d('TMPro.KerningTable', i10879[35], i10878.m_KerningTable)
  var i10899 = i10879[36]
  var i10898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10899.length; i += 2) {
  request.r(i10899[i + 0], i10899[i + 1], 1, i10898, '')
  }
  i10878.fallbackFontAssets = i10898
  i10878.m_Version = i10879[37]
  i10878.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10879[38], i10878.m_FaceInfo)
  request.r(i10879[39], i10879[40], 0, i10878, 'm_Material')
  return i10878
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i10900 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i10901 = data
  i10900.sourceFontFileName = i10901[0]
  i10900.sourceFontFileGUID = i10901[1]
  i10900.faceIndex = i10901[2]
  i10900.pointSizeSamplingMode = i10901[3]
  i10900.pointSize = i10901[4]
  i10900.padding = i10901[5]
  i10900.paddingMode = i10901[6]
  i10900.packingMode = i10901[7]
  i10900.atlasWidth = i10901[8]
  i10900.atlasHeight = i10901[9]
  i10900.characterSetSelectionMode = i10901[10]
  i10900.characterSequence = i10901[11]
  i10900.referencedFontAssetGUID = i10901[12]
  i10900.referencedTextAssetGUID = i10901[13]
  i10900.fontStyle = i10901[14]
  i10900.fontStyleModifier = i10901[15]
  i10900.renderMode = i10901[16]
  i10900.includeFontFeatures = !!i10901[17]
  return i10900
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i10904 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i10905 = data
  i10904.m_Index = i10905[0]
  i10904.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10905[1], i10904.m_Metrics)
  i10904.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10905[2], i10904.m_GlyphRect)
  i10904.m_Scale = i10905[3]
  i10904.m_AtlasIndex = i10905[4]
  i10904.m_ClassDefinitionType = i10905[5]
  return i10904
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i10906 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i10907 = data
  i10906.m_Width = i10907[0]
  i10906.m_Height = i10907[1]
  i10906.m_HorizontalBearingX = i10907[2]
  i10906.m_HorizontalBearingY = i10907[3]
  i10906.m_HorizontalAdvance = i10907[4]
  return i10906
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i10908 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i10909 = data
  i10908.m_X = i10909[0]
  i10908.m_Y = i10909[1]
  i10908.m_Width = i10909[2]
  i10908.m_Height = i10909[3]
  return i10908
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i10912 = root || request.c( 'TMPro.TMP_Character' )
  var i10913 = data
  i10912.m_ElementType = i10913[0]
  i10912.m_Unicode = i10913[1]
  i10912.m_GlyphIndex = i10913[2]
  i10912.m_Scale = i10913[3]
  return i10912
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i10918 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i10919 = data
  var i10921 = i10919[0]
  var i10920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i10921.length; i += 1) {
    i10920.add(request.d('TMPro.MultipleSubstitutionRecord', i10921[i + 0]));
  }
  i10918.m_MultipleSubstitutionRecords = i10920
  var i10923 = i10919[1]
  var i10922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i10923.length; i += 1) {
    i10922.add(request.d('TMPro.LigatureSubstitutionRecord', i10923[i + 0]));
  }
  i10918.m_LigatureSubstitutionRecords = i10922
  var i10925 = i10919[2]
  var i10924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i10925.length; i += 1) {
    i10924.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i10925[i + 0]));
  }
  i10918.m_GlyphPairAdjustmentRecords = i10924
  var i10927 = i10919[3]
  var i10926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i10927.length; i += 1) {
    i10926.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i10927[i + 0]));
  }
  i10918.m_MarkToBaseAdjustmentRecords = i10926
  var i10929 = i10919[4]
  var i10928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i10929.length; i += 1) {
    i10928.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i10929[i + 0]));
  }
  i10918.m_MarkToMarkAdjustmentRecords = i10928
  return i10918
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i10932 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i10933 = data
  i10932.m_TargetGlyphID = i10933[0]
  i10932.m_SubstituteGlyphIDs = i10933[1]
  return i10932
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i10936 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i10937 = data
  i10936.m_ComponentGlyphIDs = i10937[0]
  i10936.m_LigatureGlyphID = i10937[1]
  return i10936
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i10940 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i10941 = data
  i10940.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i10941[0], i10940.m_FirstAdjustmentRecord)
  i10940.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i10941[1], i10940.m_SecondAdjustmentRecord)
  i10940.m_FeatureLookupFlags = i10941[2]
  return i10940
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i10942 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i10943 = data
  i10942.m_GlyphIndex = i10943[0]
  i10942.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i10943[1], i10942.m_GlyphValueRecord)
  return i10942
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i10944 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i10945 = data
  i10944.m_XPlacement = i10945[0]
  i10944.m_YPlacement = i10945[1]
  i10944.m_XAdvance = i10945[2]
  i10944.m_YAdvance = i10945[3]
  return i10944
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i10948 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i10949 = data
  i10948.m_BaseGlyphID = i10949[0]
  i10948.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i10949[1], i10948.m_BaseGlyphAnchorPoint)
  i10948.m_MarkGlyphID = i10949[2]
  i10948.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i10949[3], i10948.m_MarkPositionAdjustment)
  return i10948
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i10952 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i10953 = data
  i10952.m_BaseMarkGlyphID = i10953[0]
  i10952.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i10953[1], i10952.m_BaseMarkGlyphAnchorPoint)
  i10952.m_CombiningMarkGlyphID = i10953[2]
  i10952.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i10953[3], i10952.m_CombiningMarkPositionAdjustment)
  return i10952
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i10956 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i10957 = data
  request.r(i10957[0], i10957[1], 0, i10956, 'regularTypeface')
  request.r(i10957[2], i10957[3], 0, i10956, 'italicTypeface')
  return i10956
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i10958 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i10959 = data
  i10958.Name = i10959[0]
  i10958.PointSize = i10959[1]
  i10958.Scale = i10959[2]
  i10958.CharacterCount = i10959[3]
  i10958.LineHeight = i10959[4]
  i10958.Baseline = i10959[5]
  i10958.Ascender = i10959[6]
  i10958.CapHeight = i10959[7]
  i10958.Descender = i10959[8]
  i10958.CenterLine = i10959[9]
  i10958.SuperscriptOffset = i10959[10]
  i10958.SubscriptOffset = i10959[11]
  i10958.SubSize = i10959[12]
  i10958.Underline = i10959[13]
  i10958.UnderlineThickness = i10959[14]
  i10958.strikethrough = i10959[15]
  i10958.strikethroughThickness = i10959[16]
  i10958.TabWidth = i10959[17]
  i10958.Padding = i10959[18]
  i10958.AtlasWidth = i10959[19]
  i10958.AtlasHeight = i10959[20]
  return i10958
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i10962 = root || request.c( 'TMPro.TMP_Glyph' )
  var i10963 = data
  i10962.id = i10963[0]
  i10962.x = i10963[1]
  i10962.y = i10963[2]
  i10962.width = i10963[3]
  i10962.height = i10963[4]
  i10962.xOffset = i10963[5]
  i10962.yOffset = i10963[6]
  i10962.xAdvance = i10963[7]
  i10962.scale = i10963[8]
  return i10962
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i10964 = root || request.c( 'TMPro.KerningTable' )
  var i10965 = data
  var i10967 = i10965[0]
  var i10966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i10967.length; i += 1) {
    i10966.add(request.d('TMPro.KerningPair', i10967[i + 0]));
  }
  i10964.kerningPairs = i10966
  return i10964
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i10970 = root || request.c( 'TMPro.KerningPair' )
  var i10971 = data
  i10970.xOffset = i10971[0]
  i10970.m_FirstGlyph = i10971[1]
  i10970.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10971[2], i10970.m_FirstGlyphAdjustments)
  i10970.m_SecondGlyph = i10971[3]
  i10970.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10971[4], i10970.m_SecondGlyphAdjustments)
  i10970.m_IgnoreSpacingAdjustments = !!i10971[5]
  return i10970
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i10972 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i10973 = data
  i10972.m_FaceIndex = i10973[0]
  i10972.m_FamilyName = i10973[1]
  i10972.m_StyleName = i10973[2]
  i10972.m_PointSize = i10973[3]
  i10972.m_Scale = i10973[4]
  i10972.m_UnitsPerEM = i10973[5]
  i10972.m_LineHeight = i10973[6]
  i10972.m_AscentLine = i10973[7]
  i10972.m_CapLine = i10973[8]
  i10972.m_MeanLine = i10973[9]
  i10972.m_Baseline = i10973[10]
  i10972.m_DescentLine = i10973[11]
  i10972.m_SuperscriptOffset = i10973[12]
  i10972.m_SuperscriptSize = i10973[13]
  i10972.m_SubscriptOffset = i10973[14]
  i10972.m_SubscriptSize = i10973[15]
  i10972.m_UnderlineOffset = i10973[16]
  i10972.m_UnderlineThickness = i10973[17]
  i10972.m_StrikethroughOffset = i10973[18]
  i10972.m_StrikethroughThickness = i10973[19]
  i10972.m_TabWidth = i10973[20]
  return i10972
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i10974 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i10975 = data
  request.r(i10975[0], i10975[1], 0, i10974, 'spriteSheet')
  var i10977 = i10975[2]
  var i10976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i10977.length; i += 1) {
    i10976.add(request.d('TMPro.TMP_Sprite', i10977[i + 0]));
  }
  i10974.spriteInfoList = i10976
  var i10979 = i10975[3]
  var i10978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i10979.length; i += 2) {
  request.r(i10979[i + 0], i10979[i + 1], 1, i10978, '')
  }
  i10974.fallbackSpriteAssets = i10978
  var i10981 = i10975[4]
  var i10980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i10981.length; i += 1) {
    i10980.add(request.d('TMPro.TMP_SpriteCharacter', i10981[i + 0]));
  }
  i10974.m_SpriteCharacterTable = i10980
  var i10983 = i10975[5]
  var i10982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i10983.length; i += 1) {
    i10982.add(request.d('TMPro.TMP_SpriteGlyph', i10983[i + 0]));
  }
  i10974.m_GlyphTable = i10982
  i10974.m_Version = i10975[6]
  i10974.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10975[7], i10974.m_FaceInfo)
  request.r(i10975[8], i10975[9], 0, i10974, 'm_Material')
  return i10974
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i10986 = root || request.c( 'TMPro.TMP_Sprite' )
  var i10987 = data
  i10986.name = i10987[0]
  i10986.hashCode = i10987[1]
  i10986.unicode = i10987[2]
  i10986.pivot = new pc.Vec2( i10987[3], i10987[4] )
  request.r(i10987[5], i10987[6], 0, i10986, 'sprite')
  i10986.id = i10987[7]
  i10986.x = i10987[8]
  i10986.y = i10987[9]
  i10986.width = i10987[10]
  i10986.height = i10987[11]
  i10986.xOffset = i10987[12]
  i10986.yOffset = i10987[13]
  i10986.xAdvance = i10987[14]
  i10986.scale = i10987[15]
  return i10986
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i10992 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i10993 = data
  i10992.m_Name = i10993[0]
  i10992.m_ElementType = i10993[1]
  i10992.m_Unicode = i10993[2]
  i10992.m_GlyphIndex = i10993[3]
  i10992.m_Scale = i10993[4]
  return i10992
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i10996 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i10997 = data
  request.r(i10997[0], i10997[1], 0, i10996, 'sprite')
  i10996.m_Index = i10997[2]
  i10996.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10997[3], i10996.m_Metrics)
  i10996.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10997[4], i10996.m_GlyphRect)
  i10996.m_Scale = i10997[5]
  i10996.m_AtlasIndex = i10997[6]
  i10996.m_ClassDefinitionType = i10997[7]
  return i10996
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i10998 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i10999 = data
  var i11001 = i10999[0]
  var i11000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i11001.length; i += 1) {
    i11000.add(request.d('TMPro.TMP_Style', i11001[i + 0]));
  }
  i10998.m_StyleList = i11000
  return i10998
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i11004 = root || request.c( 'TMPro.TMP_Style' )
  var i11005 = data
  i11004.m_Name = i11005[0]
  i11004.m_HashCode = i11005[1]
  i11004.m_OpeningDefinition = i11005[2]
  i11004.m_ClosingDefinition = i11005[3]
  i11004.m_OpeningTagArray = i11005[4]
  i11004.m_ClosingTagArray = i11005[5]
  return i11004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i11006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i11007 = data
  var i11009 = i11007[0]
  var i11008 = []
  for(var i = 0; i < i11009.length; i += 1) {
    i11008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i11009[i + 0]) );
  }
  i11006.files = i11008
  i11006.componentToPrefabIds = i11007[1]
  return i11006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i11012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i11013 = data
  i11012.path = i11013[0]
  request.r(i11013[1], i11013[2], 0, i11012, 'unityObject')
  return i11012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i11014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i11015 = data
  var i11017 = i11015[0]
  var i11016 = []
  for(var i = 0; i < i11017.length; i += 1) {
    i11016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i11017[i + 0]) );
  }
  i11014.scriptsExecutionOrder = i11016
  var i11019 = i11015[1]
  var i11018 = []
  for(var i = 0; i < i11019.length; i += 1) {
    i11018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i11019[i + 0]) );
  }
  i11014.sortingLayers = i11018
  var i11021 = i11015[2]
  var i11020 = []
  for(var i = 0; i < i11021.length; i += 1) {
    i11020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i11021[i + 0]) );
  }
  i11014.cullingLayers = i11020
  i11014.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i11015[3], i11014.timeSettings)
  i11014.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i11015[4], i11014.physicsSettings)
  i11014.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i11015[5], i11014.physics2DSettings)
  i11014.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11015[6], i11014.qualitySettings)
  i11014.enableRealtimeShadows = !!i11015[7]
  i11014.enableAutoInstancing = !!i11015[8]
  i11014.enableStaticBatching = !!i11015[9]
  i11014.enableDynamicBatching = !!i11015[10]
  i11014.usePreservativeDynamicBatching = !!i11015[11]
  i11014.lightmapEncodingQuality = i11015[12]
  i11014.desiredColorSpace = i11015[13]
  var i11023 = i11015[14]
  var i11022 = []
  for(var i = 0; i < i11023.length; i += 1) {
    i11022.push( i11023[i + 0] );
  }
  i11014.allTags = i11022
  return i11014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i11026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i11027 = data
  i11026.name = i11027[0]
  i11026.value = i11027[1]
  return i11026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i11030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i11031 = data
  i11030.id = i11031[0]
  i11030.name = i11031[1]
  i11030.value = i11031[2]
  return i11030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i11034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i11035 = data
  i11034.id = i11035[0]
  i11034.name = i11035[1]
  return i11034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i11036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i11037 = data
  i11036.fixedDeltaTime = i11037[0]
  i11036.maximumDeltaTime = i11037[1]
  i11036.timeScale = i11037[2]
  i11036.maximumParticleTimestep = i11037[3]
  return i11036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i11038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i11039 = data
  i11038.gravity = new pc.Vec3( i11039[0], i11039[1], i11039[2] )
  i11038.defaultSolverIterations = i11039[3]
  i11038.bounceThreshold = i11039[4]
  i11038.autoSyncTransforms = !!i11039[5]
  i11038.autoSimulation = !!i11039[6]
  var i11041 = i11039[7]
  var i11040 = []
  for(var i = 0; i < i11041.length; i += 1) {
    i11040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i11041[i + 0]) );
  }
  i11038.collisionMatrix = i11040
  return i11038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i11044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i11045 = data
  i11044.enabled = !!i11045[0]
  i11044.layerId = i11045[1]
  i11044.otherLayerId = i11045[2]
  return i11044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i11046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i11047 = data
  request.r(i11047[0], i11047[1], 0, i11046, 'material')
  i11046.gravity = new pc.Vec2( i11047[2], i11047[3] )
  i11046.positionIterations = i11047[4]
  i11046.velocityIterations = i11047[5]
  i11046.velocityThreshold = i11047[6]
  i11046.maxLinearCorrection = i11047[7]
  i11046.maxAngularCorrection = i11047[8]
  i11046.maxTranslationSpeed = i11047[9]
  i11046.maxRotationSpeed = i11047[10]
  i11046.baumgarteScale = i11047[11]
  i11046.baumgarteTOIScale = i11047[12]
  i11046.timeToSleep = i11047[13]
  i11046.linearSleepTolerance = i11047[14]
  i11046.angularSleepTolerance = i11047[15]
  i11046.defaultContactOffset = i11047[16]
  i11046.autoSimulation = !!i11047[17]
  i11046.queriesHitTriggers = !!i11047[18]
  i11046.queriesStartInColliders = !!i11047[19]
  i11046.callbacksOnDisable = !!i11047[20]
  i11046.reuseCollisionCallbacks = !!i11047[21]
  i11046.autoSyncTransforms = !!i11047[22]
  var i11049 = i11047[23]
  var i11048 = []
  for(var i = 0; i < i11049.length; i += 1) {
    i11048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i11049[i + 0]) );
  }
  i11046.collisionMatrix = i11048
  return i11046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i11052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i11053 = data
  i11052.enabled = !!i11053[0]
  i11052.layerId = i11053[1]
  i11052.otherLayerId = i11053[2]
  return i11052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i11054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i11055 = data
  var i11057 = i11055[0]
  var i11056 = []
  for(var i = 0; i < i11057.length; i += 1) {
    i11056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11057[i + 0]) );
  }
  i11054.qualityLevels = i11056
  var i11059 = i11055[1]
  var i11058 = []
  for(var i = 0; i < i11059.length; i += 1) {
    i11058.push( i11059[i + 0] );
  }
  i11054.names = i11058
  i11054.shadows = i11055[2]
  i11054.anisotropicFiltering = i11055[3]
  i11054.antiAliasing = i11055[4]
  i11054.lodBias = i11055[5]
  i11054.shadowCascades = i11055[6]
  i11054.shadowDistance = i11055[7]
  i11054.shadowmaskMode = i11055[8]
  i11054.shadowProjection = i11055[9]
  i11054.shadowResolution = i11055[10]
  i11054.softParticles = !!i11055[11]
  i11054.softVegetation = !!i11055[12]
  i11054.activeColorSpace = i11055[13]
  i11054.desiredColorSpace = i11055[14]
  i11054.masterTextureLimit = i11055[15]
  i11054.maxQueuedFrames = i11055[16]
  i11054.particleRaycastBudget = i11055[17]
  i11054.pixelLightCount = i11055[18]
  i11054.realtimeReflectionProbes = !!i11055[19]
  i11054.shadowCascade2Split = i11055[20]
  i11054.shadowCascade4Split = new pc.Vec3( i11055[21], i11055[22], i11055[23] )
  i11054.streamingMipmapsActive = !!i11055[24]
  i11054.vSyncCount = i11055[25]
  i11054.asyncUploadBufferSize = i11055[26]
  i11054.asyncUploadTimeSlice = i11055[27]
  i11054.billboardsFaceCameraPosition = !!i11055[28]
  i11054.shadowNearPlaneOffset = i11055[29]
  i11054.streamingMipmapsMemoryBudget = i11055[30]
  i11054.maximumLODLevel = i11055[31]
  i11054.streamingMipmapsAddAllCameras = !!i11055[32]
  i11054.streamingMipmapsMaxLevelReduction = i11055[33]
  i11054.streamingMipmapsRenderersPerFrame = i11055[34]
  i11054.resolutionScalingFixedDPIFactor = i11055[35]
  i11054.streamingMipmapsMaxFileIORequests = i11055[36]
  i11054.currentQualityLevel = i11055[37]
  return i11054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i11064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i11065 = data
  i11064.weight = i11065[0]
  i11064.vertices = i11065[1]
  i11064.normals = i11065[2]
  i11064.tangents = i11065[3]
  return i11064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i11066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i11067 = data
  i11066.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i11067[0], i11066.Event)
  i11066.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i11067[1], i11066.filterSettings)
  i11066.overrideMaterialId = i11067[2]
  i11066.overrideMaterialPassIndex = i11067[3]
  i11066.overrideShaderId = i11067[4]
  i11066.overrideShaderPassIndex = i11067[5]
  i11066.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i11067[6], i11066.overrideMode)
  i11066.overrideDepthState = !!i11067[7]
  i11066.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i11067[8], i11066.depthCompareFunction)
  i11066.enableWrite = !!i11067[9]
  i11066.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i11067[10], i11066.stencilSettings)
  i11066.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i11067[11], i11066.cameraSettings)
  return i11066
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i11070 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i11071 = data
  i11070.m_ControlPath = i11071[0]
  i11070.m_Flags = i11071[1]
  return i11070
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i11072 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i11073 = data
  i11072.m_XCoordinate = i11073[0]
  i11072.m_YCoordinate = i11073[1]
  return i11072
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i11074 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i11075 = data
  i11074.m_XPositionAdjustment = i11075[0]
  i11074.m_YPositionAdjustment = i11075[1]
  return i11074
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i11076 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i11077 = data
  i11076.xPlacement = i11077[0]
  i11076.yPlacement = i11077[1]
  i11076.xAdvance = i11077[2]
  i11076.yAdvance = i11077[3]
  return i11076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i11078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i11079 = data
  i11078.Value = i11079[0]
  return i11078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i11080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i11081 = data
  i11080.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i11081[0], i11080.RenderQueueType)
  i11080.LayerMask = i11081[1]
  var i11083 = i11081[2]
  var i11082 = []
  for(var i = 0; i < i11083.length; i += 1) {
    i11082.push( i11083[i + 0] );
  }
  i11080.PassNames = i11082
  return i11080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i11084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i11085 = data
  i11084.overrideStencilState = !!i11085[0]
  i11084.stencilReference = i11085[1]
  i11084.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i11085[2], i11084.stencilCompareFunctionValue)
  i11084.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i11085[3], i11084.passOperationValue)
  i11084.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i11085[4], i11084.failOperationValue)
  i11084.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i11085[5], i11084.zFailOperationValue)
  return i11084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i11086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i11087 = data
  i11086.overrideCamera = !!i11087[0]
  i11086.restoreCamera = !!i11087[1]
  i11086.offset = new pc.Vec4( i11087[2], i11087[3], i11087[4], i11087[5] )
  i11086.cameraFieldOfView = i11087[6]
  return i11086
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"106":[107],"108":[107],"109":[107],"110":[107],"111":[107],"112":[107],"113":[114],"115":[18],"116":[30],"117":[30],"118":[30],"119":[30],"120":[30],"121":[30],"122":[123],"124":[123],"125":[123],"126":[123],"127":[123],"128":[123],"129":[123],"130":[123],"131":[123],"132":[123],"133":[123],"134":[123],"135":[123],"136":[18],"137":[7],"138":[139],"140":[139],"33":[32],"141":[142],"143":[18],"144":[145],"146":[147],"148":[33],"78":[32],"149":[18],"19":[18],"13":[12],"150":[32],"151":[37,32],"152":[7],"153":[37,32],"154":[32],"155":[32],"156":[7,32],"157":[32,37],"158":[32],"159":[32],"36":[33],"40":[37,32],"160":[32],"35":[33],"61":[32],"161":[32],"85":[32],"162":[32],"65":[32],"163":[32],"60":[32],"67":[32],"164":[32],"165":[37,32],"166":[32],"64":[32],"66":[32],"167":[32],"38":[37,32],"71":[32],"168":[147],"169":[147],"170":[147],"171":[147],"172":[18],"173":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","FactoryPipePower.FactoryPowerController","UnityEngine.Material","FactoryPipePower.SmokePipeIndicatorSequence","UnityEngine.MeshRenderer","FactoryPipePower.FactoryChimneySmokeController","UnityEngine.ParticleSystem","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.MeshCollider","FactoryPipePower.PipeVisualController","FactoryPipePower.NarrativePipeSegment","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","Cinemachine.CinemachineBrain","UnityEngine.AudioListener","FactoryPipePower.StartPowerNode","FactoryPipePower.PipeSlotController","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","FactoryPipePower.PipeCompletionSparks","FactoryPipePower.PipeSlotCaptureVolume","FactoryPipePower.EndPowerNode","FactoryPipePower.NarrativePowerSequence","UnityEngine.Rigidbody","FactoryPipePower.DraggablePipeController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Image","UnityEngine.UI.Button","FactoryPipePower.CompletionUI","UnityEngine.GameObject","FactoryPipePower.PointerInputController","UnityEngine.InputSystem.InputActionAsset","FactoryPipePower.PipeSlotRegistry","FactoryPipePower.PowerChainController","FactoryPipePower.TutorialController","FactoryPipePower.SceneInitializer","FactoryPipePower.FactoryTutorialController","FactoryPipePower.GameFlowController","FactoryPipePower.CompletedUI","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","UnityEngine.Sprite","UnityEngine.UI.Shadow","UnityEngine.UI.Outline","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerRenderingLayerField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","SimpleCharacterMotor","UnityEngine.CharacterController","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.84f1";

Deserializers.productName = "NukeFactory";

Deserializers.lunaInitializationTime = "10/16/2026 14:20:46";

Deserializers.lunaDaysRunning = "5.3";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "4e41c565f08317d49bb83a734b232d47";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.7\ncom.unity.inputsystem: 1.20.0\ncom.unity.render-pipelines.core: 17.0.4\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.render-pipelines.universal-config: 17.0.3\ncom.unity.shadergraph: 17.0.4\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1853";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3993";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "54c4beca-4c36-4e46-9c88-39617a08a23a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","PlayerInput","InitializeGlobalPlayerState"],["UnityEngine","InputSystem","InputSystem","RuntimeInitialize"],["UnityEngine","InputSystem","InputActionState","InitializeGlobalActionState"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["com","IvanMurzak","Unity","MCP","Runtime","Utils","MainThreadDispatcher","Initialize"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","EnhancedTouch","Touch","InitializeGlobalTouchState"],["UnityEngine","InputSystem","Users","InputUser","InitializeGlobalUserState"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

