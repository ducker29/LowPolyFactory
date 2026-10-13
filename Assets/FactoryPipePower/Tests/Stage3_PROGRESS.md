# Stage 3 Checkpoint — Factory Pipe Power (для продолжения следующей сессией)

Дата: 2026-10-09. Проект: `E:\UnityProjects\LowPolyFactory`. Spec: `factory-pipe-techdoc.md` (авторитетный), правила: `AGENTS.md`.
Обновлено: 2026-10-12 (Этап 10 завершён).

## Где мы сейчас

**Этапы 3–9 ПРИНЯТЫ. Этап 10 (Win Flow: GameFlowController + CompletionUI + input freeze + 11 PlayMode тестов) — ЗАВЕРШЁН, целевой прогон зелёный. Отчёт по Этапу 10 выдан, ОЖИДАЕТСЯ подтверждение пользователя. Этап 11 (PlayableScene) НЕ начат (запрещён до подтверждения отчёта по Этапу 10).**

### Результат последних прогонов (2026-10-12, Этап 10)
- PlayMode Stage10: `tests-run testClass=Stage10GameFlowPlayModeTests testMode=PlayMode` → **11 total / 11 Passed / 0 Failed** (целевой прогон).
- EditMode: **61 total / 61 Passed / 0 Failed** (прогонялся дважды, стабильно).
- Console: project compile errors — 0. Единственная ожидаемая LogAssert — из теста `MissingOptionalUIRefs` не требуется (тест без LogError).
- **Harness caveat (НЕ regression проекта):** после успешного Stage10-прогона повторные PlayMode-вызовы по другим классам (`Stage9TutorialOverlayPlayModeTests`, `PipeSlotControllerPlayModeTests`, `Stage8PowerChainPlayModeTests`) и `testAssembly=FactoryPipePower.PlayModeTests` возвращали `0 tests` (Duration≈0.003s) — дефект test discovery/filtering harness, не failing tests. asmdef/Test Runner settings НЕ менять; `0 tests` не считать провалом.
- Гигиена: `Factory.unity` не открыта и не изменялась (mtime Feb 3); правился только `PointerInputController.cs` (additive-guard `inputBlocked`, без смены поведения до победы).

### Что сделано в Этапе 4 (2026-10-10, вариант B+C — подтверждён)
- Создан `Scripts/Pipes/PipeSlotController.cs`: FSM Empty/HoverValid/OccupiedWrongRotation/OccupiedAligned
  (+ Charging/Powered только enum, без логики до Этапа 8). `TryAccept` = production API; guard'ы: null,
  placementCommitted, state ∉ {Empty,HoverValid}, pipe.State != Dragging, spec mismatch (`PipeSpec.Equals`).
  Принятие: CommitPlaced() → AnchorY.localRotation = quarter от `pipe.WorldYaw` → EvaluateAlignment.
  `TryRotateTap()` только из OccupiedWrongRotation, +90° SmoothStep/Slerp (0.2s), финал точный quarter.
  Материалы через `PipeVisualController.SetBaseMaterial` (Empty/HoverValid/Wrong/Default). Overlay снимается при TryAccept.
- Создан `Scripts/Pipes/PipeSlotRegistry.cs`: пассивный (Register duplicate-guard, Unregister null-guard).
- Изменён `Scripts/Input/PointerInputController.cs`: поле `slotTapMask`, в OnPressStarted после pipe-приоритета —
  raycast slotTapMask → `PipeSlotController.TryRotateTap()`.
- Созданы `Prefabs/PF_PipeSlot_Small_M2.prefab` (Small/M2) и `PF_PipeSlot_Large_M3.prefab` (Large/M3):
  root [Transform, PipeSlotController]; AnchorY → SlotPipeVisual (render mesh); ConnectorA/B;
  CaptureVolume (не trigger, +4%), TapCollider (не trigger, по bounds); M_Slot_Empty; Yaw0Or180; rotationDuration=0.2;
  layer=0; без Rigidbody.
  - Ловушка: `SerializedObject.FindProperty` для struct-полей использует ТОЧКУ: `expectedSpec.diameter`
    (не `expectedSpec/diameter`); enum в prefab задаётся через `enumValueIndex` (для PipeLength: M2→1, M3→2).
- Тесты `Tests/PlayMode/PipeSlotControllerPlayModeTests.cs` — 20 шт., все зелёные.
- Граница с Этапом 5 соблюдена: НЕТ OnTriggerEnter, trigger snap, layers, Layer Collision Matrix,
  авто-accept по overlap, hover-mass-обновления, Charging/Powered.

### Примечания/особенности (для будущего)
1. «Wrong остаётся Wrong после +90» при группах {0,180}/{90,270} **математически недостижим** —
   тест `TryRotateTap_GroupYaw90Or270_WrongYaw0_BecomesAligned` фиксирует это поведение как корректное.
2. `TryRotateTap` из `OccupiedAligned` → false (решение пользователя на Этапе 4; techdoc §11 допускает поворот
   из Aligned — уточнить на Этапе 5+).
3. Press-тесты: pipe prefab имеет pivot у торца, collider простирается вдоль +Z от pivot —
   WorldToScreenPoint(pivot) может промахиваться мимо collider'а; в тестах жать в середину тела
   (`position + Vector3.right/forward * 1f`) либо использовать yaw 0.
4. MCP `tests-run` по testClass не работает для PlayMode-класса — фильтровать по testNamespace.

## Правила пользователя (нарушать нельзя)

- НЕ использовать `Physics.autoSyncTransforms`. Один `Physics.SyncTransforms()` на шаг теста после Instantiate — НИКОГДА в Update/FixedUpdate/runtime drag loop.
- Никакого `EditorApplication.Step()` / `EditorApplication.update` / UnityEditor API / тестов в runtime assembly `Assets/FactoryPipePower/Scripts/`.
- Нет top-level `static`-объявлений в Script/Execute; helper'ы — полный класс; класс в script-execute называется `Script`.
- Ошибки MCP ≠ ошибки проекта; в отчёте разделять: project compile errors / test errors / MCP tool-harness errors.
- Не менять `PipeVisualController`, FSM, цветовую семантику; слои (Этап 5) не создавать; `Assets/Factory_LP/Factory.unity` не сохранять (только reload с диска при dirty); `renderer.material(s)` не вызывать каждый кадр.
- Fallback при зависшем Play Mode: `runInBackground`=true → `EditorApplication.Step()` только во временном harness → try/finally cleanup → восстановить `runInBackground` → выйти из Play Mode → удалить harness.


1. **Ждать подтверждения пользователя на Этап 10.** После подтверждения — запись в Changelog MD.
2. После подтверждения — **Этап 11 (PlayableScene)** только по `factory-pipe-techdoc.md` (единственный оставшийся этап).
   Этап 11 запрещён до явного подтверждения отчёта по Этапу 10.
3. Перед началом работы перечитать `AGENTS.md` и `factory-pipe-techdoc.md`.
## Полезные факты окружения

- Unity 6000.6.0f1; MCP tools: `tests-run`, `assets-refresh`, `console-get-logs`, `script-execute`.
- `Object.GetInstanceID()` obsolete → `GetEntityId()`; `FindObjectsByType<T>()` без sort-параметра (перегрузка с `FindObjectsSortMode` obsolete); `EditorApplication.playModeStateChanged` нельзя читать (CS0079, только `+=`/`-=`) — не проверять его как обычное поле.
- script-execute: нужен `public class Script { public static void Main() }`; свои Debug.Log искать через `console-get-logs`.
- Input-harness в тестах: `GO.SetActive(false)` → AddComponent → SerializedObject назначает `raycastCamera`/`inputActions`/`pickMask`/`slotTapMask`/`maxRayDistance` → `SetActive(true)`.
- API: `DraggablePipeController`: Spec, State, WorldYaw, IsInteractable, DragPlaneHeight, event Committed, BeginDrag(Vector2,Camera), UpdateDrag, EndDragWithoutPlacement(), CommitPlaced().
  `PipeSlotController`: ExpectedSpec, State, IsOccupied, IsAligned, AnchorY, ConnectorA/B, SlotRotationGroup, AcceptedPipe, PlacementCommitted, IsRotating, IsCompatible, TryAccept, TryRotateTap, SetHoverValid, ResetSlot.
- `PipeVisualController` (после Этапа 7): CurrentBaseMaterial, IsTutorialOverlayEnabled, HasGreenRuntimeMaterial, CurrentFill, IsFlowConfigured, FlowStartWorld, FlowEndWorld, FlowDirectionWorld, FlowLengthWorld, SetBaseMaterial, SetTutorialOverlay, UseGreenRuntimeMaterial, SetFill (clamp0..1), ConfigureFlow(start,end) (normalized dir + length), ResetVisual.
- `FlowConnectorUtility.ResolveFlowEndpoints(prev, A, B, out start, out end)` — ближайший = start, tie → A.
- `PipeSlotRegistry` (после Этапа 6): ActivePipe, DragStartsHandled, DragFinishesHandled, Slots, Count; события AnyDragStarted/AnyDragFinished; single-drag guard; OnDisable cleanup.
- `DraggablePipeController` (после Этапа 9): Visual; instance-события DragStarted (BeginDrag, 1 раз), ReturnedToStock (EndDragWithoutPlacement → вход в Returning, 1 раз), Committed (CommitPlaced); статические AnyDragStarted/AnyDragFinished не тронуты. Placement-signal для tutorial — slot-событие StateChanged, не Committed.
- `PipeSlotController` (после Этапа 9): Visual; instance-событие `StateChanged(slot, PipeSlotState)` — стреляет в SetState ТОЛЬКО при реальном изменении state (не дублирует). ResetPowerState меняет state напрямую (без события — корректно). Бывший `slotVisual.SetTutorialOverlay(false)` в TryAccept УДАЛЁН (overlay теперь владеет TutorialController через StateChanged).
- `TutorialController` (`Scripts/Tutorial/`): enum TutorialStep {None, HighlightPipe, HighlightSlot, HighlightRotation, Complete}; поля tutorialPipe/tutorialSlot; API CurrentStep, InitializeTutorial(), ResetTutorial(), DisableTutorial(), IsSubscribed; подписки только на назначенные объекты (не registry, не polling); Subscribe/Unsubscribe идемпотентны (guard `subscribed`); OnDisable/OnDestroy → Unsubscribe; null-refs → None без exception и без LogError; несовместимый PipeSpec → один `Debug.LogError("Tutorial configuration error...")` + None; после Complete — Unsubscribe (late events игнируются); Charging/Powered state не дают overlay; владеет ТОЛЬКО `Visual.SetTutorialOverlay`, не трогает base material/fill/flow/FSM.
- Ловушка MCP-редактирования: НЕ слать несколько `edit` по одному файлу в одном блоке (параллельные edits перезаписывают друг друга — правки теряются молча). Применять строго последовательно и проверять `rg`-ом после каждой.
- `IPowerNode`: IsPowered, PowerOutput, NotifyPreviousPowered(previous).
- `StartPowerNode`: Initialize() → powered + green fill 1 → nextNode.NotifyPreviousPowered(this); SetNextNode; PowerOutput.
- `EndPowerNode`: Initialize() → Inactive; NotifyPreviousPowered проверяет expectedPrevious (identity), однократный триггер → Powered + green + factory.SetOnline(); ActivationCount.
- `FactoryPowerController`: Offline/Online; Initialize/SetOffline/SetOnline (идемпотентен); event FactoryOnline; Apply включает renderers/indicators/particles/animators.
- `PowerChainController`: Initialize() → валидация + LinkChain + ordered init (factory→end→slots reset+link→start.Initialize()); устойчив к 0 slots (start→end).
- `PipeSlotController` (после Этапа 8, реализует IPowerNode): IsPowered, PreviousNode, NextNode, HasCharged, PowerOutput (farther connector от previous), SetupPowerNodes(prev,next), NotifyPreviousPowered, TryStartCharging, ResetPowerState; chargingDuration=0.25; EvaluateAlignment вызывает TryStartCharging при aligned.
- `PointerInputController` (after Stage 10): `InputBlocked` (bool get), `SetInputBlocked(bool)`; OnPressStarted starts with guard `if (inputBlocked) return;` - new drag and rotate tap are blocked, an already active drag finishes. GameFlow calls `SetInputBlocked(true)` on entering WinPending.
- `Scripts/GameFlow/GameFlowController.cs`: enum `GameFlowState { Gameplay, WinPending, Completed }`; serialized refs factoryPowerController/completionUI/pointerInput/tutorialController/completionDelay (default 0.75); exposes State, WinTriggerCount; events WinTriggered, ContinueRequested; subscribe in OnEnable / unsubscribe in OnDisable; on FactoryOnline only from Gameplay: state=WinPending, WinTriggerCount++, WinTriggered, pointerInput.SetInputBlocked(true), tutorial.DisableTutorial(), start coroutine CompleteAfterDelay(); after delay -> completionUI.Show() + state=Completed; repeated FactoryOnline while Completed is ignored (no second win/UI).
- `Scripts/GameFlow/CompletionUI.cs`: serialized panelRoot (GameObject)/titleLabel/subtitleLabel (UnityEngine.UI.Text)/primaryButton (Button)/titleText/subtitleText; exposes IsVisible, PrimaryButton; event ContinueRequested; Awake does BindPrimary+Hide; Show()/Hide()/PressPrimary(); PressPrimary is idempotent (fires ContinueRequested once); null refs are safe (no exception).
- `Stage10GameFlowPlayModeTests` (PlayMode, 11 tests): win FSM one-shot, repeat-FactoryOnline no duplicate, CTA shown only after victory + hidden before, input freeze blocks new drag, rotate tap blocked after win, tutorial disabled + no reactivation, ContinueRequested once per press, missing optional UI refs no exception, disable/enable no duplicate subscriptions + pending completion resumes, Completed does not auto-restart on SetOffline.
- PlayMode asmdef: `includePlatforms: []`, `overrideReferences` + `nunit.framework.dll`, `defineConstraints: ["UNITY_INCLUDE_TESTS"]`.
- В `Assets/` нет харнессов/временных объектов; `EditorApplication.update` в коде проекта не используется.
- `EditorSceneManager.MarkSceneClean` недоступен (в т.ч. через reflection) в Unity 6000.6 — при dirty сцене: reload с диска.
