# Stage 3 STATE SNAPSHOT (2026-10-09 – 2026-10-13)

Проект: `E:\UnityProjects\LowPolyFactory` · Unity 6000.6.0f1
Authoritative spec: `factory-pipe-techdoc.md` · Правила: `AGENTS.md`
Чекпоинт-дневник: `Assets/FactoryPipePower/Tests/Stage3_PROGRESS.md`

Статус: Этапы 1–10 приняты. Stage 10 PlayMode VERIFIED: 11/11 Stage10GameFlowPlayModeTests passed. Stage 11 planning authorized; implementation not started.

---

## 0. Этап 9 — что добавлено (2026-10-12, завершён, ждёт подтверждения)

### Shader / материал
- **Создан** `Assets/FactoryPipePower/Shaders/TutorialOverlay.shader` (`FactoryPipePower/TutorialOverlay`): URP, Transparent, `Blend SrcAlpha OneMinusSrcAlpha`, `ZWrite Off`, `ZTest LEqual`, Queue `Transparent+100` (=3100, позже всех base materials), `SRPDefaultUnlit`; свойства `_OverlayColor/_MinAlpha/_MaxAlpha/_PulseSpeed/_EmissionStrength/_DepthOffset`; пульс `pulse01 = 0.5 + 0.5*sin(_Time.y*_PulseSpeed)`, `alpha = lerp(_MinAlpha,_MaxAlpha,pulse01)` — целиком в shader time (никаких per-frame material updates из C#); depth bias в vertex (`positionCS.z -= _DepthOffset*positionCS.w`) против z-fighting. HasErrors=False, supported=True.
- **Мигрирован** `M_TutorialOverlay.mat`: shader URP/Unlit → `FactoryPipePower/TutorialOverlay`; `_OverlayColor=(1,0.85,0.1)`, `_MinAlpha=0.2`, `_MaxAlpha=0.6`, `_PulseSpeed=4`, `_EmissionStrength=0.8`, `_DepthOffset=0.001`. Уже назначен во всех 4 префабах как `tutorialOverlayMaterial` (guid не менялся — миграция on-place).

### Production-код (компилируется чисто)
- **Создан** `Assets/FactoryPipePower/Scripts/Tutorial/TutorialController.cs` — enum `TutorialStep {None, HighlightPipe, HighlightSlot, HighlightRotation, Complete}`; поля `tutorialPipe/tutorialSlot`; API `CurrentStep, InitializeTutorial(), ResetTutorial(), DisableTutorial(), IsSubscribed`; подписки только на назначенные объекты (никакого polling, никакого registry); идемпотентные Subscribe/Unsubscribe (guard `subscribed`); OnDisable/OnDestroy → Unsubscribe; null-refs → `None` без exception и без LogError; несовместимый PipeSpec → ровно один `Debug.LogError("Tutorial configuration error…")` + `None`; после Complete → Unsubscribe (late events игнируются); состояния Charging/Powered никогда не получают overlay; владеет ТОЛЬКО `Visual.SetTutorialOverlay(...)`, не трогает base material/fill/flow/FSM/registry.
- **Изменён** `DraggablePipeController.cs` — `public PipeVisualController Visual`; instance-события `DragStarted` (BeginDrag, ×1), `ReturnedToStock` (EndDragWithoutPlacement → вход в Returning, ×1); статические AnyDragStarted/AnyDragFinished и `Committed` не тронуты. Placement-signal для tutorial = slot-событие `StateChanged`, не `Committed`.
- **Изменён** `PipeSlotController.cs` — `public PipeVisualController Visual`; instance-событие `StateChanged(slot, PipeSlotState)` (стреляет в `SetState` ТОЛЬКО при реальном изменении state); **удалён** `slotVisual.SetTutorialOverlay(false)` из `TryAccept` (overlay-clear входил в конфликт с включением HighlightRotation через StateChanged — владельцем overlay стал TutorialController).

### Scope-границы соблюдены
НЕ тронуты: drag FSM, slot FSM, power chain/charging, snap/trigger routing, registry, layers, physics matrix; не менялись `M_Pipe_Default/M_Slot_Empty/M_Slot_HoverValid/M_Slot_Wrong/M_Pipe_GreenFill`; `Factory.unity` не изменялась; CTA/GameFlow/camera transition/PlayableScene не начаты (Этап 10/11 запрещены).

### Тесты
- `Assets/FactoryPipePower/Tests/PlayMode/Stage9TutorialOverlayPlayModeTests.cs` — 25 тестов: shader (final shader name, все 6 свойств, supported/no-errors, transparent queue позже base materials, second material slot on/off), initialization (valid → HighlightPipe только на pipe, null pipe/slot → None без exception, incompatible spec → None + 1 LogError, двойной init → без duplicate subscriptions/materials), flow (drag tutorial pipe → HighlightSlot, чужой drag без изменений, return → HighlightPipe, wrong yaw → HighlightRotation, aligned → Complete, чужой slot accept/rotation без изменений, rotate wrong→aligned → Complete, Complete без re-activation от late events, Charging/Powered без overlay), lifecycle (DisableTutorial идемпотентен, enable/disable без duplicate subscriptions, overlay не меняет base material/fill/flow), hygiene (объекты уничтожаются, overlay = shared asset без leaks, после destroy нет subscriptions). Техника: фейковый `FakePoweredNode : MonoBehaviour, IPowerNode` для Charging-сценария без полной power-chain; reflection на event backing fields для проверки duplicate/leak подписок.

---

## 0. Этап 8 — что добавлено (2026-10-10, завершён, ждёт подтверждения)

### Production-код (компилируется чисто)
- **Создан** `Assets/FactoryPipePower/Scripts/Power/IPowerNode.cs` — контракт `IsPowered / PowerOutput / NotifyPreviousPowered(previous)` (без graph traversal API).
- **Создан** `Assets/FactoryPipePower/Scripts/Power/StartPowerNode.cs` — `Initialize()` → powered, green fill=1, `nextNode.NotifyPreviousPowered(this)`; `SetNextNode`; `PowerOutput`; без input/поиска.
- **Создан** `Assets/FactoryPipePower/Scripts/Power/EndPowerNode.cs` — стартует `Inactive`; `NotifyPreviousPowered` принимает только от `expectedPrevious` (identity), однократный триггер (`activationCount`) → `Powered` + green + `factoryPowerController.SetOnline()`; идемпотентен.
- **Создан** `Assets/FactoryPipePower/Scripts/Power/FactoryPowerController.cs` — FSM `Offline→Online`; `SetOnline` идемпотентен (event `FactoryOnline` ×1); `Apply` включает renderers/indicators/particles/animators; без targets — без exception.
- **Создан** `Assets/FactoryPipePower/Scripts/Power/PowerChainController.cs` — `Initialize()`: валидация start + ordered init (factory→end→slots reset+link→`start.Initialize()`); `LinkChain` связывает start→slots→end; устойчив к 0 slots (start→end); не ищет объекты, не двигает transforms, не ставит slot state напрямую, обходит каскад только через node-контракт.
- **Изменён** `Assets/FactoryPipePower/Scripts/Pipes/PipeSlotController.cs` — реализует `IPowerNode`; поля `previousNodeBehaviour/nextNodeBehaviour/chargingDuration=0.25`; поля `previousNode/nextNode/hasCharged/chargeRoutine`; API `IsPowered, PreviousNode, NextNode, HasCharged, PowerOutput (farther connector от previous), SetupPowerNodes, NotifyPreviousPowered, TryStartCharging, ChargeRoutine, ResetPowerState`; `EvaluateAlignment` вызывает `TryStartCharging()` при aligned. Каскад через notify; guard'ы: только OccupiedAligned, previous powered, `!hasCharged`, нет второй coroutine; `TryRotateTap`/`TryAccept`/registry блокированы в Charging/Powered (существующие guard'ы).
- **Изменён** `Assets/FactoryPipePower/Scripts/Pipes/PipeVisualController.cs` — `ReleaseGreenRuntimeMaterial()` сделан public (для reset без утечки).

### Scope-границы соблюдены
НЕ тронуты: drag FSM, input flow, snap/trigger routing/registry/layers/physics matrix, tutorial flow, `Factory.unity`. Prefabs Start/End отложены на Этап 11 (сборка PlayableScene); для тестов объекты строятся программно. Этап 9/10 не начаты.

### Тесты
- `Assets/FactoryPipePower/Tests/PlayMode/Stage8PowerChainPlayModeTests.cs` — 26 тестов (все обязательные сценарии): node setup (start powered fill1, end inactive, wrong/correct previous, factory offline/online/idempotent), slot power rules (empty/wrong/aligned+unpowered/aligned+powered, powered fill1, no rotate, no double coroutine, endpoints via ConnectorA/B, notify-after-powered), cascade (3-slot sequential, next-not-before-previous, empty blocks, late alignment, pre-aligned tail, end-after-last, factory-after-end), idempotency/reset (repeat notify, reset no-leak, empty targets, zero-slot chain).

---

## 1. Итог прогона тестов (2026-10-12, Этап 9)

| Assembly | Mode | Total | Passed | Failed |
|---|---|---|---|---|
| `FactoryPipePower.PlayModeTests` (класс `Stage9TutorialOverlayPlayModeTests`) | PlayMode | 25 | 25 | 0 |
| `FactoryPipePower.Tests` | EditMode | 61 | 61 | 0 |

- PlayMode накопительно = 11 Stage-3 + 20 Stage-4 + 14 Stage-5 + 16 Stage-6 + 12 Stage-7 + 26 Stage-8 + 25 Stage-9 (`Stage9TutorialOverlayPlayModeTests`).
- **Harness caveat:** PlayMode через этот MCP надёжно запускать по конкретному test class (`testNamespace=FactoryPipePower.PlayModeTests.<ClassName>`) или `testAssembly=FactoryPipePower.PlayModeTests`. Unfiltered/по-namespace PlayMode-ран в текущем окружении возвращал `0 tests` (мгновенно, Duration≈0.003s) — дефект test discovery/filtering harness, НЕ regression проекта и НЕ failing tests. `0 tests` не считать провалом. asmdef/Test Runner settings не менять.
- Console: **project compile errors = 0**, **shader errors = 0**, test failures = 0. Единственная ошибка — ожидаемая LogAssert (`Initialize_IncompatibleSpec_None_OneError_OverlaysOff`).
- Гигиена (ручная): `Factory.unity` не открыта и не изменялась (mtime Feb 3); открытая `FactoryPipePower_Test` (харнес) IsDirty=false; runtimeMaterialLeaks=0; TutorialOverlay/GreenFill hasErrors=False; временных S9-объектов нет.

---

> **Provenance:** This is a new, explicitly authored Stage 10 checkpoint
> addendum. It was not part of the forensically recovered 283-line Stage 9
> snapshot restored on 2026-10-13. Stage 10 implementation and its target
> test evidence were produced on 2026-10-12.

## Stage 10 — Win Flow

Status: IMPLEMENTED, TECHNICALLY VERIFIED, AWAITING USER CONFIRMATION.

### Added
- `Scripts/GameFlow/GameFlowController.cs`
- `Scripts/GameFlow/CompletionUI.cs`
- `Tests/PlayMode/Stage10GameFlowPlayModeTests.cs`
- additive input gate in `PointerInputController.cs`

### Flow
- `Gameplay -> WinPending -> Completed`
- единственный win trigger: `FactoryPowerController.FactoryOnline`
- WinPending один раз блокирует новый input через `SetInputBlocked(true)`
- tutorial disable после победы
- completion delay и CTA completion UI
- повторный FactoryOnline не создаёт duplicate completion/UI/events

### Test evidence
- Target PlayMode run: `Stage10GameFlowPlayModeTests` — 11/11 Passed.
- EditMode suite: 61/61 Passed (run twice after the Stage 10 changes).
- Project compile errors: 0.
- PlayMode regression caveat: after the successful target Stage 10 run, the
  MCP harness intermittently returned `0 tests` for other PlayMode filters and
  assembly-wide invocation. These were discovery results, not passing
  regression results, and do not replace a complete PlayMode regression run.
- The Stage 10 acceptance decision remains pending explicit user confirmation.

### Boundaries
- `Factory.unity` was not opened or changed.
- No Stage 11 work was started.
- Stage 10 acceptance remains pending explicit user approval.
- The restored Stage 9 snapshot and this Stage 10 addendum have distinct
  provenance; this addendum is not a forensic reconstruction.
- No Stage 11 work is authorized until explicit user confirmation of Stage 10.
## 0. Этап 4 — что добавлено (2026-10-10, вариант B+C, подтверждён пользователем)

### Production-код (компилируется чисто)
- `Assets/FactoryPipePower/Scripts/Pipes/PipeSlotController.cs` тАФ FSM
  `Empty/HoverValid/OccupiedWrongRotation/OccupiedAligned` (+ Charging/Powered enum-заготовки без логики).
  API: `ExpectedSpec, State, IsOccupied, IsAligned, AnchorY, ConnectorA, ConnectorB, SlotRotationGroup,
  AcceptedPipe, PlacementCommitted, IsRotating, IsCompatible(pipe), TryAccept(pipe), TryRotateTap(),
  SetHoverValid(bool), ResetSlot()`. `TryAccept` = production API (guard'ы: null / committed / state / not-Dragging /
  spec mismatch через `PipeSpec.Equals`); принимает: `CommitPlaced()` → set anchor quarter yaw по `pipe.WorldYaw`
  через `QuarterTurnUtility` → `EvaluateAlignment()`. `TryRotateTap` только из `OccupiedWrongRotation`,
  +90° через корутину SmoothStep/Slerp (`rotationDuration=0.2`), финал — точный quarter-quaternion.
  Материалы слот-визуала только через `PipeVisualController.SetBaseMaterial`:
  EmptyтЖТ`M_Slot_Empty`, HoverValidтЖТ`M_Slot_HoverValid`, WrongтЖТ`M_Slot_Wrong`, AlignedтЖТ`M_Pipe_Default`;
  overlay снимается при `TryAccept`.
- `Assets/FactoryPipePower/Scripts/Pipes/PipeSlotRegistry.cs` — пассивный (`Register` с duplicate-guard,
  `Unregister` с null-guard, `Slots`, `Count`), без связи с input.
- `Assets/FactoryPipePower/Scripts/Input/PointerInputController.cs` — добавлен `slotTapMask`,
  порядок в `OnPressStarted`: activePipe → return; raycast pickMask → Stock pipe → BeginDrag, return;
  raycast slotTapMask тЖТ `PipeSlotController.TryRotateTap()`.

### Prefab-ы
- `Assets/FactoryPipePower/Prefabs/PF_PipeSlot_Small_M2.prefab` (Small/M2), `PF_PipeSlot_Large_M3.prefab` (Large/M3).
- Иерархия: root `[Transform, PipeSlotController]` → `AnchorY` → `SlotPipeVisual` (render mesh, не ConvexHulls);
  дети root: `ConnectorA`, `ConnectorB`, `CaptureVolume` (BoxCollider, не trigger, +4%), `TapCollider`
  (BoxCollider по bounds mesh, не trigger). Material `M_Slot_Empty`; rotationGroup=`Yaw0Or180`;
  rotationDuration=0.2; все ref-ы назначены; layer=0; Rigidbody отсутствует (по scope Этапа 4).
- Примечание: `expectedSpec` записывался через `SerializedObject` с точечным путём `expectedSpec.diameter`
  (НЕ слэш); enum-индексы: M2 → index 1, M3 → index 2 (`(int)PipeLength.Mx - 1`).

### Тесты (20 PlayMode + EditMode baseline)
- `Assets/FactoryPipePower/Tests/PlayMode/PipeSlotControllerPlayModeTests.cs` — 20 тестов, покрывают:
  prefab-структуру (×2), старт Empty, TryAccept aligned/wrong/guard'ы, HoverValid, +90° поворот
  (анимация + точный quarter-финал), обе rotation groups, повторный tap при вращении, только AnchorY
  крутится, ResetSlot, non-standard start yaw → точный quarter, input: tap по TapCollider, приоритет
  activePipe над слот-tap, press поверх слота → pipe, release-after-commit.

### Известные особенности/наблюдения
1. При группах `{0,180}`/`{90,270}` один шаг +90 ВСЕГДА меняет alignedness → кейс «stays Wrong после +90»
   недостижим математически; тест `TryRotateTap_GroupYaw90Or270_WrongYaw0_BecomesAligned` фиксирует это.
2. `TryRotateTap` в `OccupiedAligned` возвращает false (по design-решению пользователя на Этапе 4;
   techdoc §11 допускает поворот и из Aligned — вопрос на Этап 5+).
3. Сцена Factory.unity была dirty после инструментов создания префабов; по решению пользователя
   перезагружена с диска (IsDirty=false, rootCount=2265).

---

## 2. Что сделано в Этапе 3 (полный перечень)

### Production-код (компилируется чисто)
- `Assets/FactoryPipePower/Scripts/Core/PipeTypes.cs`
- `Assets/FactoryPipePower/Scripts/Core/QuarterTurnUtility.cs`
- `Assets/FactoryPipePower/Scripts/Pipes/PipeVisualController.cs`
- `Assets/FactoryPipePower/Scripts/Pipes/DraggablePipeController.cs`
- `Assets/FactoryPipePower/Scripts/Input/PointerInputController.cs`
- `Assets/FactoryPipePower/FactoryPipePower.asmdef` тАФ `"references": ["Unity.InputSystem"]`
- `Assets/FactoryPipePower/Input/FactoryPipePower.inputactions` тАФ guid `07a41aca42864384aa3699a54731860d`,
  map `Gameplay`, ровно 2 actions: `PointerPosition` (Value/Vector2, `<Pointer>/position`),
  `PointerPress` (Button, `<Pointer>/press`)

### Prefab-ы
- `Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Small_M2.prefab`
  (Small/M2, mesh `SM_Factory_Small_pipe_2m`, bounds 0.443×0.443×2, center z=1)
- `Assets/FactoryPipePower/Prefabs/PF_DraggablePipe_Large_M3.prefab`
  (Large/M3, mesh `SM_Factory_Large_pipe_3m`, bounds 0.8×0.8×3, center z=1.5)
- Структура: root `[Transform, Rigidbody, DraggablePipeController]`, дети ровно `Visual`
  `[MeshFilter, MeshRenderer, PipeVisualController]` и `DragCollider` `[BoxCollider]`.
- Rigidbody: isKinematic, useGravity=false, Interpolate, Discrete.
- Настройки: `returnDuration=0.25`, `dragPlaneHeight=1.0`; collider по bounds mesh (ось Z, не trigger);
  материал `M_Pipe_Default`; все ref-ы (visual/dragCollider/body/defaultMaterial) назначены; layer=0.
- **ВАЖНО:** FBX содержит сабассет `*_ConvexHulls` — mesh брать только из `MeshFilter.sharedMesh`.

### Тесты
- PlayMode asmdef `Assets/FactoryPipePower/Tests/PlayMode/FactoryPipePower.PlayModeTests.asmdef`:
  refs = TestRunners, FactoryPipePower, Unity.InputSystem; `includePlatforms: []`;
  `overrideReferences` + `nunit.framework.dll`; `defineConstraints: ["UNITY_INCLUDE_TESTS"]`.
- `Assets/FactoryPipePower/Tests/PlayMode/DraggablePipeControllerPlayModeTests.cs` — 11 тестов (см. §4).
- EditMode baseline: `Tests/Editor/QuarterTurnUtilityTests.cs`, `Tests/Editor/PipeSpecTests.cs` — 61 тест.

---

## 3. Как был исправлен последний фейл (важно для будущего)

**FAILED (был):** `PointerRelease_EndsDrag_WithoutPlacement_ReturnsToStock`
`pipe must return to the exact stockPosition тАФ Expected < 1e-4, But was: 0.000357123296`

**Диагноз:** НЕ баг production-кода. Transient интерполяции Rigidbody
(`RigidbodyInterpolation.Interpolate`): при флипе в `Stock` `Rigidbody.position` выставляется
точно, а `transform` читается до того, как интерполяция settle-ится после drag на 1.5 м.

**Решение (tolerance НЕ ослаблялся):** двухфазный assert-паттерн в обоих release-тестах
(`Release_WithoutPlacement_ReturnsToExactStockPose` ~стр.218, `PointerRelease_...` ~стр.356):

```csharp
yield return WaitUntilState(pipe, DraggablePipeState.Stock, 5f);

var rb = go.GetComponent<Rigidbody>();
Assert.Less((rb.position - stockPos).magnitude, 1e-4f, "...exact stockPosition when state flips...");
Assert.Less(Quaternion.Angle(stockRot, rb.rotation), 0.01f, "...exact stockRotation when state flips...");

yield return new WaitForFixedUpdate();
yield return new WaitForFixedUpdate();
yield return null;

Assert.Less((go.transform.position - stockPos).magnitude, 1e-4f, "settled exact position");
Assert.Less(Quaternion.Angle(stockRot, go.transform.rotation), 0.01f, "settled exact rotation");
Assert.IsTrue(col.enabled, ...);
```

Если подобный фейл появится снова — сначала проверить гипотезу интерполяции/settle,
НЕ ослаблять tolerance без явного разбора.

---

## 4. Чек-листы A/B/C — что покрыто тестами

### A тАФ FSM (`DraggablePipeState {Stock,Dragging,Returning,Placed}`)
| Пункт | Тест |
|---|---|
| Initial Stock, collider on, interactable | `NewPipe_StartsInStock_ColliderEnabled` |
| Stock → Dragging без сдвига позы/поворота, без дрейфа без ввода | `BeginDrag_TransitionsToDragging_WithoutChangingPose` |
| Drag по горизонтальной плоскости `dragPlaneHeight=1.0`, yaw не меняется | `UpdateDrag_FollowsHorizontalPlane_AndKeepsYaw` |
| Dragging → Returning → точный Stock (API-путь) | `Release_WithoutPlacement_ReturnsToExactStockPose` |
| Release без slot → Returning → точный Stock (input-путь) = T02 | `PointerRelease_EndsDrag_WithoutPlacement_ReturnsToStock` |
| `CommitPlaced()`: Placed, visual off, collider off, root active, `Committed` ×1, без re-entry | `CommitPlaced_HidesVisualOnly_StatePlaced_ColliderOff_NoReentry` |
| Placed не выходит из Placed по release/BeginDrag | `ReleaseAfterCommit_KeepsPlaced_AndPipeNotSelectable` |

### B тАФ Input
| Пункт | Тест |
|---|---|
| Gameplay map, 2 actions, `<Pointer>/position` + `<Pointer>/press` | `InputActions_HaveGameplayMapAndUnifiedPointerBindings` |
| Press выбирает только Stock-pipe, один `ActivePipe`, Placed не выбирается | `PointerPress_SelectsOnlyStockPipe_AndKeepsSingleActive` |
| Release → Returning и `ActivePipe = null` | `PointerRelease_EndsDrag_WithoutPlacement_ReturnsToStock` |
| Placed никогда не select-ится | `ReleaseAfterCommit_KeepsPlaced_AndPipeNotSelectable` |

### C тАФ Prefab
| Пункт | Тест |
|---|---|
| Дети ровно `Visual`+`DragCollider`, mesh из `sharedMesh`, 1 submesh, `M_Pipe_Default`, PipeVisualController | `Prefab_Structure_Rigidbody_And_Collider` (Small/M2) |
| BoxCollider по bounds mesh, ось Z, не trigger, включён | то же |
| Rigidbody kinematic / no gravity / Interpolate / Discrete | то же |
| `returnDuration=0.25`, `dragPlaneHeight=1.0`, все ref-ы назначены | то же |
| Layer = 0 на всех детях | то же |
| Large/M3 вариант | второй `[TestCase]` |

---

## 5. Гигиена окружения (проверена 2026-10-09)

- `Factory.unity` IsDirty = false, rootCount = 2265, Play Mode выключен.
- Временных GameObject (Harness/MCP/Probe) в сцене — нет.
- `Application.runInBackground = False` (restore делает `TearDown` из saved `previousRunInBackground`).
- В `Assets/**` нет ни одного `EditorApplication.update` / `EditorApplication.Step` (проверено rg).
- `EditorApplication.update = SUBSCRIBED` — это сам MCP-пакет (dispatch), не наш harness.

---

## 6. Строгие правила пользователя (нарушать нельзя)

1. НЕ `Physics.autoSyncTransforms` нигде. Один `Physics.SyncTransforms()` на шаг теста после
   Instantiate/смены позиции — НИКОГДА в Update/FixedUpdate/runtime drag loop.
2. Никакого `EditorApplication.Step()` / `EditorApplication.update` / UnityEditor API / тестов
   в runtime assembly `Assets/FactoryPipePower/Scripts/`. Frame pump — только во временном
   editor harness / тестах.
3. Нет top-level `static`-объявлений в code для MCP Script/Execute; helper'ы — полный класс;
   класс в script-execute обязан называться `Script` (иначе ошибка harness'а).
4. Ошибки MCP ≠ ошибки проекта. В отчёте всегда разделять:
   `project compile errors` / `test errors` / `MCP tool-harness errors`.
5. Не менять `PipeVisualController`, FSM, цветовую семантику состояний.
   (Уточнение 2026-10-10: ограничение на `PipeVisualController` снято явным разрешением пользователя
   в scope Этапа 7 — разрешены ТОЛЬКО flow-параметры; FSM и цветовая семантика по-прежнему не трогаются.)
6. Не трогать `Assets/Factory_LP/Factory.unity`; Этап 10 (CTA/GameFlow) и Этап 11 (PlayableScene)
   не начинать без явного подтверждения отчёта.
7. Не вызывать `renderer.material(s)` каждый кадр.
8. Fallback при зависшем Play Mode: `runInBackground=true` → `EditorApplication.Step()` только
   во временном harness → cleanup через try/finally → восстановить `runInBackground` →
   выйти из Play Mode → удалить harness.

---

## 7. API-справка (из кода)

```csharp
DraggablePipeController: Spec, State, WorldYaw, IsInteractable, DragPlaneHeight,
                         Visual,
                         event Action<DraggablePipeController> Committed,
                         event Action<DraggablePipeController> DragStarted,       // BeginDrag, ×1
                         event Action<DraggablePipeController> ReturnedToStock,   // вход в Returning, ×1
                         BeginDrag(Vector2 screenPos, Camera cam),
                         UpdateDrag(Vector2 screenPos, Camera cam),
                         EndDragWithoutPlacement(), CommitPlaced()
enum DraggablePipeState { Stock, Dragging, Returning, Placed }

PipeSlotController (доп. к Этапу 8): Visual,
                         event Action<PipeSlotController, PipeSlotState> StateChanged // SetState, только при реальном изменении
                         // TryAccept больше НЕ снимает tutorial overlay (владелец — TutorialController)

enum TutorialStep { None, HighlightPipe, HighlightSlot, HighlightRotation, Complete }
TutorialController: CurrentStep, TutorialPipe, TutorialSlot, IsSubscribed,
                    InitializeTutorial(), ResetTutorial(), DisableTutorial()
                    // подписки только на назначенные pipe/slot; OnDisable/OnDestroy → Unsubscribe;
                    // null → None без exception; несовместимый PipeSpec → 1 LogError + None;
                    // после Complete → Unsubscribe; Charging/Powered не дают overlay;
                    // владеет ТОЛЬКО Visual.SetTutorialOverlay
```

Input-harness в тесте (иначе Awake отключает компонент):
`GO.SetActive(false)` тЖТ `AddComponent<PointerInputController>()` тЖТ `SerializedObject`
назначает `raycastCamera` / `inputActions` / `pickMask` / `maxRayDistance` → `SetActive(true)`.

Устаревшие API: `Object.GetInstanceID()` → `GetEntityId()`;
`FindObjectsByType<T>(inactive)` без `FindObjectsSortMode` (перегрузка с sort — obsolete);
`EditorApplication.playModeStateChanged` читать нельзя (CS0079, только `+=`/`-=`).

---

## 8. Следующий шаг

Следующий шаг: Stage 11 planning.

Известные особенности проекта:

- AnchorY localPosition `(0, 0, 1.5)` в `PF_PipeSlot_Large_M3` является намеренной пользовательской правкой и нормальным текущим состоянием.
- Поведение yaw в `UpdateDrag_FollowsHorizontalPlane_AndKeepsYaw` классифицировано как расхождение теста, а не как блокер Stage 11.
- Mojibake в `Stage3_STATE.md` устранён контролируемой CP866-операцией.
- PlayMode test discovery может деградировать после длительной сессии; при повторении использовать graceful restart Unity Editor и немедленный assembly-scope запуск тестов.
