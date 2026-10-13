# Factory Pipe Power — финальный технический документ

**Тип проекта:** Unity playable ad / короткая 3D-головоломка  
**Статус:** финальная спецификация MVP  
**Назначение:** единый источник требований для OpenCode-агента, подключённого к Unity  
**Язык реализации:** C#  

> Агент обязан следовать этому документу буквально. Нельзя самостоятельно менять механику, значения состояний, момент установки, цветовую семантику, направление питания или роли drag-трубы и slot-трубы. При техническом противоречии нужно остановиться, описать проблему и запросить решение.

---

## 1. Цель

Реализовать короткую заводскую головоломку. Игрок:

1. Берёт трубу из запаса.
2. Перетаскивает её в совместимый пустой слот.
3. После автоматической установки поворачивает трубу в слоте вокруг оси Y.
4. Собирает направленную цепь от стартовой точки питания до конечной точки питания завода.
5. Наблюдает последовательное зелёное заполнение труб.
6. Когда питание достигает конечной точки, завод включается целиком.

Ключевая архитектурная идея:

- **Drag-труба** — временный интерактивный объект из запаса.
- **Slot-труба** — постоянный визуальный меш, уже находящийся внутри слота.
- Drag-труба **не перемещается внутрь слота** и не становится частью цепочки.
- При успешном пересечении drag-труба только передаёт слоту `PipeSpec` и свой yaw, после чего немедленно скрывается/отключается.
- Все дальнейшие состояния, вращение, материалы и заряд относятся к slot-трубе.

---

## 2. Зафиксированный игровой цикл

1. `StartPowerNode` уже зелёный и `Powered`.
2. Все пустые слоты видны как серые полупрозрачные трубы.
3. Туториал подсвечивает требуемую drag-трубу жёлтым пульсирующим overlay.
4. Игрок начинает drag.
5. **Все** совместимые пустые слоты переходят в `HoverValid` и становятся синими полупрозрачными.
6. Туториальный целевой слот может дополнительно получить жёлтый overlay поверх синего материала.
7. Когда `BoxCollider` drag-трубы пересекается с `BoxCollider` совместимого пустого слота, происходит автоматическая установка.
8. Drag-труба передаёт слоту тип и текущий горизонтальный поворот, затем сразу отключается.
9. `AnchorY` слота принимает yaw drag-трубы; собственная slot-труба остаётся дочерней `AnchorY`.
10. Слот сначала переходит в `OccupiedWrongRotation`, затем немедленно проверяет угол.
11. Если угол уже допустим, слот сразу переходит в `OccupiedAligned`.
12. Если угол неверный, игрок тапает по слоту; `AnchorY` поворачивается на +90° вокруг Y.
13. Правильно ориентированный слот ждёт питание либо запускает `Charging`, если предыдущий узел уже `Powered`.
14. В `Charging` зелёное заполнение движется от предыдущего узла к следующему.
15. После заполнения слот становится `Powered` и активирует проверку следующего узла.
16. `EndPowerNode` становится зелёным только после получения питания от последнего слота.
17. Только после этого завод становится `Online`.

---

## 3. Жёсткие ограничения

- В MVP используется **одна линейная цепочка без развилок**.
- Все вращения slot-трубы выполняются только вокруг локальной оси Y.
- Один тап поворачивает `AnchorY` ровно на +90°.
- У каждого слота допустима ровно одна группа:
  - `0°/180°`;
  - `90°/270°`.
- `0°` и `180°` эквивалентны; `90°` и `270°` эквивалентны.
- Нельзя сравнивать Euler-углы как необработанные float.
- После успешного snap drag-труба исчезает в том же кадре.
- Drag-труба не становится child слота.
- Slot-труба существует в слоте с момента старта сцены.
- `HoverValid` имеет собственный синий base material.
- `HoverValid` — не `Empty + TutorialOverlay`.
- Tutorial overlay не является состоянием и не заменяет base material.
- `Charging` и `Powered` используют один зелёный fill-материал.
- `Default` — один серый непрозрачный материал для drag-трубы и `OccupiedAligned`.
- Завод нельзя включать до фактической активации `EndPowerNode`.
- После начала `Charging` слот больше нельзя вращать.
- Уже `Powered` сегменты никогда не теряют питание в рамках MVP.

---

## 4. Типы данных

### 4.1 PipeDiameter

```csharp
public enum PipeDiameter
{
    Small,
    Large
}
```

### 4.2 PipeLength

```csharp
public enum PipeLength
{
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,
    M5 = 5
}
```

Соответствие ассетам:

- `Large/M1..M5` → `SM_Factory_Large_pipe_1m` … `SM_Factory_Large_pipe_5m`.
- `Small/M1..M5` → `SM_Factory_Small_pipe_1m` … `SM_Factory_Small_pipe_5m`.

### 4.3 PipeSpec

```csharp
[System.Serializable]
public struct PipeSpec : System.IEquatable<PipeSpec>
{
    public PipeDiameter diameter;
    public PipeLength length;

    public bool Equals(PipeSpec other)
        => diameter == other.diameter && length == other.length;
}
```

Совместимость — только точное совпадение `diameter` и `length`. Нельзя масштабировать неправильную трубу или разрешать частичное совпадение.

### 4.4 RotationGroup

```csharp
public enum RotationGroup
{
    Yaw0Or180,
    Yaw90Or270
}
```

### 4.5 DraggablePipeState

```csharp
public enum DraggablePipeState
{
    Stock,
    Dragging,
    Returning,
    Placed
}
```

### 4.6 PipeSlotState

```csharp
public enum PipeSlotState
{
    Empty,
    HoverValid,
    OccupiedWrongRotation,
    OccupiedAligned,
    Charging,
    Powered
}
```

### 4.7 Конечные состояния

```csharp
public enum EndPowerState
{
    Inactive,
    Powered
}

public enum FactoryPowerState
{
    Offline,
    Online
}
```

---

## 5. FSM drag-трубы

| Текущее | Событие | Следующее | Обязательные действия |
|---|---|---|---|
| `Stock` | Pointer down | `Dragging` | Сохранить stock transform, захватить pointer, сообщить registry о `PipeSpec`, убрать tutorial overlay с выбранной трубы |
| `Dragging` | Пересечение совместимого пустого слота | `Placed` | Передать `PipeSpec` и yaw, выключить collider, скрыть объект, завершить drag |
| `Dragging` | Pointer up без установки | `Returning` | Очистить `HoverValid`, начать автоматический возврат |
| `Returning` | Возврат завершён | `Stock` | Точно восстановить position/rotation, включить collider и ввод |
| `Placed` | — | `Placed` | Terminal state до сброса всей сцены |

### 5.1 Stock

- Renderer включён.
- Base material: `M_Pipe_Default`.
- Collider включён.
- Объект доступен для pointer down.
- Tutorial controller может добавить overlay вторым материалом.

### 5.2 Dragging

- Объект движется за мышью/пальцем по фиксированной горизонтальной плоскости.
- Высота drag задаётся `dragPlaneHeight`.
- Исходный yaw сохраняется; перемещение не вращает трубу.
- Все совместимые пустые слоты получают `HoverValid`.
- Одновременно перетаскивается только одна труба.

### 5.3 Returning

- Collider и новый ввод отключены.
- За `returnDuration` transform интерполируется к сохранённым `stockPosition` и `stockRotation`.
- По завершении transform принудительно устанавливается в точные сохранённые значения.
- Состояние автоматически становится `Stock`.

### 5.4 Placed

- Состояние записывается до деактивации GameObject.
- Collider отключается немедленно.
- Renderer или весь GameObject отключается в том же кадре.
- Объект не прикрепляется к слоту.

---

## 6. FSM слота

| Текущее | Событие/условие | Следующее |
|---|---|---|
| `Empty` | Начался drag совместимой трубы | `HoverValid` |
| `HoverValid` | Drag завершён без установки сюда | `Empty` |
| `HoverValid` | Совместимая труба установлена сюда | `OccupiedWrongRotation` |
| `OccupiedWrongRotation` | Проверка yaw успешна | `OccupiedAligned` |
| `OccupiedWrongRotation` | Поворот, yaw неверен | `OccupiedWrongRotation` |
| `OccupiedAligned` | Поворот, yaw стал неверным | `OccupiedWrongRotation` |
| `OccupiedAligned` | Предыдущий узел `Powered` | `Charging` |
| `Charging` | `_Fill` достиг 1 | `Powered` |
| `Powered` | — | `Powered` |

### 6.1 Empty

- Slot-труба видима.
- Base material: `M_Slot_Empty`.
- Внешний вид: серый полупрозрачный.
- `isOccupied = false`.
- Тап не вращает `AnchorY`.

### 6.2 HoverValid

- Base material: `M_Slot_HoverValid`.
- Внешний вид: синий полупрозрачный.
- В это состояние одновременно входят все совместимые пустые слоты.
- Tutorial overlay может быть дополнительно включён только на конкретном целевом слоте.

### 6.3 OccupiedWrongRotation

- Base material: `M_Slot_Wrong`.
- Внешний вид: оранжевый непрозрачный.
- `isOccupied = true`.
- Слот больше не участвует в поиске drag-target.
- Тап поворачивает `AnchorY` на +90°.

### 6.4 OccupiedAligned

- Base material: `M_Pipe_Default`.
- Внешний вид: серый непрозрачный.
- Если предыдущий узел ещё не запитан — слот ждёт.
- Если предыдущий узел уже `Powered` — слот сразу запускает `Charging`.
- До старта `Charging` слот можно повернуть снова.

### 6.5 Charging

- Base material: runtime instance `M_Pipe_GreenFill`.
- `_Fill` изменяется от 0 до 1.
- Любой пользовательский ввод для слота блокируется.
- После достижения 1 состояние автоматически становится `Powered`.

### 6.6 Powered

- Используется тот же runtime instance зелёного материала.
- `_Fill = 1`.
- Пользовательский ввод заблокирован.
- При входе в состояние вызывается следующий узел.

---

## 7. Нормализация yaw

Нельзя проверять `transform.eulerAngles.y == 90f`. Использовать четверти оборота:

```csharp
public static int GetQuarterTurn(float yaw)
{
    float normalized = Mathf.Repeat(yaw, 360f);
    return Mathf.RoundToInt(normalized / 90f) & 3;
}

public static float QuarterTurnToYaw(int quarterTurn)
{
    return (quarterTurn & 3) * 90f;
}

public static bool IsAligned(float yaw, RotationGroup group)
{
    int q = GetQuarterTurn(yaw);
    return group switch
    {
        RotationGroup.Yaw0Or180 => q == 0 || q == 2,
        RotationGroup.Yaw90Or270 => q == 1 || q == 3,
        _ => false
    };
}
```

После каждого принятого yaw и каждого анимированного поворота устанавливать точный quaternion одной из четырёх ориентаций.

---

## 8. Установка трубы

Установка происходит не по pointer release, а по фактическому пересечению `BoxCollider` drag-трубы и `BoxCollider` совместимого слота.

Для `OnTriggerEnter` нужен trigger collider, а хотя бы один участник должен иметь Rigidbody; рекомендуемая конфигурация — kinematic Rigidbody на drag-трубе и trigger collider на слоте [cite:212].

### 8.1 Строгий порядок

1. Проверить, что труба имеет состояние `Dragging`.
2. Проверить, что слот находится в `HoverValid` или допустимом пустом состоянии.
3. Проверить точное совпадение `PipeSpec`.
4. Проверить `isOccupied == false`.
5. Установить lock `placementCommitted`, исключающий второй snap в том же физическом шаге.
6. Считать world yaw drag-трубы.
7. Округлить yaw до ближайшего `0/90/180/270`.
8. Сохранить принятый `PipeSpec` в слоте.
9. Записать yaw в `AnchorY` слота.
10. Перевести drag-трубу в `Placed`.
11. Немедленно выключить collider и GameObject/renderer drag-трубы.
12. Очистить `HoverValid` у всех остальных слотов.
13. Перевести принятый слот в `OccupiedWrongRotation`.
14. Применить `M_Slot_Wrong`.
15. Вызвать `EvaluateAlignment()`.
16. При правильном yaw перейти в `OccupiedAligned`, применить `M_Pipe_Default` и вызвать `EvaluatePowerPrerequisites()`.

### 8.2 Важное отличие от старого варианта

`Transform.SetParent` для drag-трубы не вызывается. Она не помещается внутрь слота. Slot-труба заранее находится внутри `AnchorY`.

Если агент программно создаёт prefab-иерархию, `SetParent(parent, false)` допустим только при первоначальной сборке child-объектов: Unity позволяет этим параметром сохранить локальную систему относительно нового родителя [cite:214].

---

## 9. Collider и layers

### 9.1 Drag-труба

- `BoxCollider` вокруг визуального меша.
- `Rigidbody`:
  - `isKinematic = true`;
  - `useGravity = false`.
- Layer: `DraggablePipe`.
- Collider активен только в `Stock` и `Dragging`.

### 9.2 Слот

- `BoxCollider.isTrigger = true`.
- Capture volume немного больше видимой slot-трубы.
- Layer: `PipeSlot`.
- Capture volumes соседних слотов не должны пересекаться.

### 9.3 Physics Matrix

Разрешить trigger-взаимодействие `DraggablePipe ↔ PipeSlot`. По возможности отключить ненужные пересечения этих layers с окружением.

Trigger-события вызываются во время физической симуляции после `FixedUpdate`, поэтому код не должен предполагать, что snap произойдёт в том же `Update`, в котором объект визуально пересёк границу [cite:212].

---

## 10. Drag input

Система должна поддерживать mouse и touch через единый pointer flow.

### 10.1 Начало

- Выполнить raycast из камеры по pointer position.
- Выбрать только `DraggablePipeController` в `Stock`.
- Создать горизонтальную `Plane` на высоте `dragPlaneHeight`.
- Сохранить offset между hit point и pivot трубы, чтобы объект не прыгал центром под палец.

### 10.2 Перемещение

- Каждый кадр строить ray из камеры.
- Пересекать ray с drag plane.
- Перемещать трубу в `planeHit + dragOffset`.
- Не менять yaw.
- Не использовать физическую силу для перемещения.

Pointer event data содержит текущий raycast и состояние drag, поэтому допустима реализация через `IBeginDragHandler`, `IDragHandler`, `IEndDragHandler`; для world-space объектов также допустим централизованный Input System + camera raycast [cite:226][cite:227].

### 10.3 Завершение

- Если труба уже `Placed`, pointer up ничего не делает.
- Иначе перейти в `Returning`.
- Registry возвращает все `HoverValid` слоты в `Empty`.

---

## 11. Поворот слота

- Тап обрабатывается collider-ом корневого объекта слота.
- Вращение разрешено только в `OccupiedWrongRotation` и `OccupiedAligned`.
- Во время поворота `isRotating = true`.
- Повторные тапы игнорируются.
- Целевая четверть: `(currentQuarter + 1) & 3`.
- Анимация: coroutine, `rotationDuration` примерно 0.15–0.25 с.
- После анимации поставить точный target quaternion.
- Вызвать `EvaluateAlignment()`.
- Не использовать обязательный сторонний tween package.

---

## 12. Цепочка питания

```text
StartPowerNode [Powered]
        │
        ▼
PipeSlot_01
        │
        ▼
PipeSlot_02
        │
       ...
        │
        ▼
PipeSlot_N
        │
        ▼
EndPowerNode [Inactive → Powered]
        │
        ▼
FactoryPowerController [Offline → Online]
```

Цепочка задаётся явно. Не искать соседей по расстоянию.

Вариант данных:

```csharp
public interface IPowerNode
{
    bool IsPowered { get; }
    Transform PowerOutput { get; }
    void NotifyPreviousPowered(IPowerNode previous);
}
```

Каждый `PipeSlotController` хранит ссылки на `previousNode` и `nextNode`. Альтернатива — единый массив в `PowerChainController`, который на старте валидирует и связывает элементы.

### 12.1 Условие Charging

Слот начинает `Charging`, если:

- состояние `OccupiedAligned`;
- `previousNode.IsPowered == true`;
- `hasCharged == false`;
- игра ещё не завершена.

### 12.2 Последовательность

1. Слот назначает runtime instance `M_Pipe_GreenFill`.
2. Устанавливает `_Fill = 0`.
3. Вычисляет направление от предыдущего узла к следующему.
4. Анимирует `_Fill` до 1 за `chargingDuration`.
5. Устанавливает точное `_Fill = 1`.
6. Переходит в `Powered`.
7. Вызывает `nextNode.NotifyPreviousPowered(this)`.

Если следующий слот уже aligned, он начинает заряд. Если пуст или повернут неверно — ничего не происходит до его последующей проверки.

---

## 13. StartPowerNode

- Сразу после `Initialize()` имеет `IsPowered = true`.
- Визуал зелёный.
- `_Fill = 1`, если используется fill shader.
- Не принимает input.
- Имеет `PowerOutput` и ссылку на первый slot.
- После полной инициализации сцены вызывает проверку первого slot; пустой slot остаётся пустым.

---

## 14. EndPowerNode

- На старте `Inactive`.
- Имеет inactive visual и зелёный powered visual/material.
- Получает сигнал только от последнего slot.
- Первый валидный сигнал:
  1. блокирует повторный вызов;
  2. меняет материал на зелёный;
  3. устанавливает `EndPowerState.Powered`;
  4. вызывает `FactoryPowerController.SetOnline()`.

**Завод не считается запитанным, пока `EndPowerNode` не стал `Powered`.**

---

## 15. FactoryPowerController

После активации конечной точки:

- переводит завод `Offline → Online`;
- включает зелёные индикаторы/эмиссию;
- запускает дымовые `ParticleSystem`;
- включает доступные вращающиеся вентиляторы/механизмы;
- проигрывает один финальный звук, если аудио разрешено;
- сообщает `GameFlowController` о победе;
- показывает CTA после сериализованной задержки.

Все финальные эффекты должны принудительно выключаться во время `Initialize()`.

---

## 16. Материалы

| Asset | Использование | Внешний вид |
|---|---|---|
| `M_Pipe_Default` | Drag `Stock/Dragging`, slot `OccupiedAligned` | Серый, непрозрачный |
| `M_Slot_Empty` | `Empty` | Серый, полупрозрачный |
| `M_Slot_HoverValid` | `HoverValid` | Синий, полупрозрачный |
| `M_Slot_Wrong` | `OccupiedWrongRotation` | Оранжевый, непрозрачный |
| `M_Pipe_GreenFill` | `Charging`, `Powered` | Зелёное направленное заполнение |
| `M_TutorialOverlay` | Tutorial focus | Жёлтый, полупрозрачный, emissive, пульсирующий |
| `M_End_Inactive` | End node до питания | Нейтральный/серый |
| `M_End_Powered` | End node после питания | Зелёный |

### 16.1 Base material и overlay

```text
renderer.sharedMaterials[0] = currentBaseMaterial
renderer.sharedMaterials[1] = M_TutorialOverlay // только если tutorial overlay включён
```

При выключенном overlay массив содержит только base material. При смене base material overlay-флаг сохраняется.

Unity рендерит последний submesh повторно оставшимися материалами, если материалов больше, чем submesh-ов; это позволяет наложить полупрозрачный дополнительный материал поверх base pass, но требует дополнительной отрисовки [cite:194].

### 16.2 Проверка мешей

- Для всех труб, использующих overlay, требуется один submesh.
- Если исходная труба имеет несколько submesh-ов, агент должен сообщить об этом, а не молча подсвечивать только последний submesh.
- Разрешено подготовить односабмешевую копию меша без изменения формы.

### 16.3 Нельзя изменять shared material asset

Изменение общего материала влияет на все объекты, которые его используют [cite:219][cite:221]. Поэтому:

- статические состояния переключают ссылки на shared materials;
- для индивидуального `_Fill` каждый slot создаёт/получает собственный runtime instance зелёного материала;
- нельзя анимировать `_Fill` прямо на общем `M_Pipe_GreenFill`.

---

## 17. Tutorial overlay shader

Требования:

- жёлтый цвет;
- Transparent surface;
- `SrcAlpha / OneMinusSrcAlpha`;
- `ZWrite Off`;
- `ZTest LEqual`, чтобы overlay не был виден сквозь стены;
- render queue позже base material;
- небольшой depth offset или shader bias против z-fighting;
- мягкая emission;
- alpha пульсирует между `_MinAlpha` и `_MaxAlpha`;
- скорость — `_PulseSpeed`;
- пульсация вычисляется через shader time, без `Update` на каждом объекте.

Overlay работает независимо на:

- drag-трубе, которую нужно взять;
- slot-трубе, куда её нужно поместить.

Overlay не определяет `HoverValid`, не меняет FSM и не заменяет base material.

---

## 18. GreenFill shader

### 18.1 Параметры

```text
_DefaultColor
_PoweredColor
_EmissionColor
_EmissionStrength
_Fill          // 0..1
_FlowOriginWS
_FlowDirectionWS
_FlowLength
_FillSoftness
```

### 18.2 Маска

В world space:

```text
relative = WorldPosition - _FlowOriginWS
progress = dot(relative, normalize(_FlowDirectionWS)) / max(_FlowLength, epsilon)
mask = smoothstep(_Fill - _FillSoftness, _Fill, progress)
filled = 1 - mask
```

Затем:

```text
BaseColor = lerp(_DefaultColor, _PoweredColor, filled)
Emission  = _EmissionColor * _EmissionStrength * filled
```

### 18.3 Направление

У slot-трубы есть два дочерних connector transform:

- `ConnectorA`;
- `ConnectorB`.

В момент старта `Charging`:

1. Сравнить расстояния обоих connector-ов до `previousNode.PowerOutput.position`.
2. Ближайший connector выбрать как начало заполнения.
3. Второй — как конец.
4. Передать их world position и направление в runtime material.
5. Это гарантирует движение питания от начала цепочки к концу даже при валидном развороте трубы на 180°.

### 18.4 Runtime material

Для MVP с малым числом труб допустимо:

```csharp
_greenRuntimeMaterial = new Material(greenFillTemplate);
```

Создавать instance один раз на slot и уничтожать в `OnDestroy`. Не использовать `renderer.material` каждый кадр.

`MaterialPropertyBlock` технически позволяет задавать индивидуальные свойства, но официальная документация предупреждает о несовместимости с SRP Batcher и возможном снижении производительности в URP/HDRP [cite:170]. Поэтому для этого небольшого playable MVP выбран предсказуемый runtime material instance.

---

## 19. Tutorial flow

### Шаг 1 — взять трубу

- Включить `M_TutorialOverlay` вторым материалом на требуемой drag-трубе.
- При pointer down overlay этой трубы выключить.

### Шаг 2 — показать слот

- После входа трубы в `Dragging` все совместимые пустые слоты получают синий `HoverValid`.
- Только целевой слот tutorial шага дополнительно получает жёлтый overlay.
- После установки overlay целевого слота выключается.

### Шаг 3 — повернуть

- Если установленная slot-труба имеет неправильный yaw, жёлтый overlay можно оставить/снова включить на ней.
- После первого тапа overlay выключить.

### Шаг 4 — наблюдение

- Во время `Charging` tutorial input подсказки не показываются.
- Игрок видит последовательное заполнение.

Туториал управляет только overlay и подсказками. Он не должен вручную менять игровые state-материалы.

---

## 20. Prefab-структура

### 20.1 DraggablePipe prefab

```text
PF_DraggablePipe_[Diameter]_[Length]
├── Visual
│   └── MeshFilter + MeshRenderer
├── DragCollider
│   └── BoxCollider
├── Rigidbody (kinematic, no gravity)
└── DraggablePipeController
```

Поля `DraggablePipeController`:

```text
PipeSpec spec
MeshRenderer visualRenderer
BoxCollider dragCollider
Rigidbody body
Material defaultMaterial
float returnDuration
float dragPlaneHeight
DraggablePipeState State (read-only runtime)
```

### 20.2 PipeSlot prefab

```text
PF_PipeSlot_[Diameter]_[Length]
├── AnchorY
│   ├── SlotPipeVisual
│   │   └── MeshFilter + MeshRenderer
│   ├── ConnectorA
│   └── ConnectorB
├── CaptureVolume
│   └── BoxCollider (isTrigger)
├── TapCollider
│   └── BoxCollider (может совпадать с CaptureVolume при корректном raycast)
└── PipeSlotController
```

Поля `PipeSlotController`:

```text
PipeSpec requiredSpec
RotationGroup rotationGroup
Transform anchorY
MeshRenderer slotRenderer
Transform connectorA
Transform connectorB
Collider captureCollider
Material emptyMaterial
Material hoverValidMaterial
Material wrongMaterial
Material defaultMaterial
Material greenFillTemplate
Material tutorialOverlayMaterial
float rotationDuration
float chargingDuration
IPowerNode previousNode
IPowerNode nextNode
PipeSlotState State (read-only runtime)
```

### 20.3 Start node

```text
PF_StartPowerNode
├── Visual
├── PowerOutput
└── StartPowerNode
```

### 20.4 End node

```text
PF_EndPowerNode
├── Visual
├── PowerInput
└── EndPowerNode
```

### 20.5 Factory

```text
FactoryRoot
├── Buildings
├── OnlineIndicators (initially off)
├── SmokeFX (initially stopped)
├── MechanicalFX (initially stopped)
└── FactoryPowerController
```

---

## 21. Сценовая иерархия

```text
PlayableScene
├── Systems
│   ├── GameFlowController
│   ├── PointerInputController
│   ├── PipeSlotRegistry
│   ├── PowerChainController
│   ├── TutorialController
│   └── AudioController (optional)
├── CameraRig
│   └── MainCamera
├── Environment
│   └── FactoryRoot
├── PowerChain
│   ├── StartPowerNode
│   ├── PipeSlot_01
│   ├── PipeSlot_02
│   ├── ...
│   ├── PipeSlot_N
│   └── EndPowerNode
├── PipeStock
│   ├── DragPipe_01
│   ├── DragPipe_02
│   └── ...
└── UI
    ├── TutorialCanvas
    ├── EndCard
    └── CTAButton
```

---

## 22. Список скриптов

| Скрипт | Ответственность |
|---|---|
| `PipeTypes.cs` | Enum и `PipeSpec` |
| `QuarterTurnUtility.cs` | Нормализация yaw и проверка rotation group |
| `PipeVisualController.cs` | Base material, overlay, runtime green material, `_Fill` |
| `DraggablePipeController.cs` | FSM drag-трубы, drag, returning, placed |
| `PipeSlotController.cs` | FSM слота, приём трубы, поворот, alignment, charging |
| `PipeSlotRegistry.cs` | Список слотов, массовый `HoverValid`, очистка hover |
| `PointerInputController.cs` | Единый mouse/touch input, выбор трубы/слота |
| `IPowerNode.cs` | Контракт узлов питания |
| `StartPowerNode.cs` | Начальный powered-узел |
| `EndPowerNode.cs` | Финальный узел и запуск завода |
| `PowerChainController.cs` | Валидация порядка и связей цепи |
| `FactoryPowerController.cs` | Финальные эффекты завода |
| `TutorialController.cs` | Последовательность tutorial overlay |
| `GameFlowController.cs` | Initialize, Playing, Completed, CTA |
| `PipeConfigurationValidator.cs` | Editor/runtime проверки ссылок и prefab-структуры |

---

## 23. Основной псевдокод

### 23.1 Начало drag

```csharp
bool TryBeginDrag(DraggablePipeController pipe, Vector2 pointer)
{
    if (gameFlow.State != Playing) return false;
    if (pipe.State != Stock) return false;
    if (activePipe != null) return false;

    activePipe = pipe;
    pipe.BeginDrag(pointer);
    slotRegistry.ShowCompatibleSlots(pipe.Spec);
    tutorial.NotifyPipePicked(pipe);
    return true;
}
```

### 23.2 Registry

```csharp
void ShowCompatibleSlots(PipeSpec spec)
{
    foreach (var slot in slots)
    {
        if (slot.State == Empty && slot.RequiredSpec.Equals(spec))
            slot.SetHoverValid(true);
    }
}

void ClearHoverStates()
{
    foreach (var slot in slots)
    {
        if (slot.State == HoverValid)
            slot.SetHoverValid(false);
    }
}
```

### 23.3 Trigger slot

```csharp
void OnTriggerEnter(Collider other)
{
    if (!other.TryGetComponentInParent(out DraggablePipeController pipe))
        return;

    TryAccept(pipe);
}
```

### 23.4 Приём

```csharp
bool TryAccept(DraggablePipeController pipe)
{
    if (placementCommitted) return false;
    if (State != HoverValid) return false;
    if (pipe.State != Dragging) return false;
    if (!requiredSpec.Equals(pipe.Spec)) return false;

    placementCommitted = true;
    acceptedSpec = pipe.Spec;

    int quarter = QuarterTurnUtility.GetQuarterTurn(pipe.WorldYaw);
    SetAnchorQuarterTurnImmediate(quarter);

    pipe.CommitPlaced();          // сначала state, collider off, visual off
    slotRegistry.ClearHoverStates();

    SetState(OccupiedWrongRotation);
    EvaluateAlignment();
    return true;
}
```

### 23.5 Alignment

```csharp
void EvaluateAlignment()
{
    if (!isOccupied || isRotating) return;
    if (State == Charging || State == Powered) return;

    bool aligned = QuarterTurnUtility.IsAligned(
        anchorY.localEulerAngles.y,
        rotationGroup);

    SetState(aligned
        ? OccupiedAligned
        : OccupiedWrongRotation);

    if (aligned)
        EvaluatePowerPrerequisites();
}
```

### 23.6 Поворот

```csharp
IEnumerator RotateOneStep()
{
    if (!CanRotate) yield break;

    isRotating = true;
    int startQuarter = CurrentQuarter;
    int targetQuarter = (startQuarter + 1) & 3;
    Quaternion start = anchorY.localRotation;
    Quaternion target = Quaternion.Euler(0f, targetQuarter * 90f, 0f);

    for (float t = 0; t < 1f; t += Time.deltaTime / rotationDuration)
        anchorY.localRotation = Quaternion.Slerp(start, target, Smooth(t));

    anchorY.localRotation = target;
    isRotating = false;
    EvaluateAlignment();
}
```

### 23.7 Charging

```csharp
void EvaluatePowerPrerequisites()
{
    if (State != OccupiedAligned) return;
    if (previousNode == null || !previousNode.IsPowered) return;
    if (hasCharged) return;

    StartCoroutine(ChargeRoutine());
}

IEnumerator ChargeRoutine()
{
    hasCharged = true;
    SetState(Charging);
    visual.UseGreenRuntimeMaterial();

    ResolveFlowEndpoints(out Vector3 start, out Vector3 end);
    visual.ConfigureFlow(start, end);
    visual.SetFill(0f);

    for (float t = 0; t < 1f; t += Time.deltaTime / chargingDuration)
        visual.SetFill(Smooth01(t));

    visual.SetFill(1f);
    SetState(Powered);
    nextNode?.NotifyPreviousPowered(this);
}
```

### 23.8 End node

```csharp
void NotifyPreviousPowered(IPowerNode previous)
{
    if (State == Powered) return;
    if (previous != expectedPrevious) return;

    State = Powered;
    visual.SetPowered();
    factoryPowerController.SetOnline();
}
```

---

## 24. Визуальная таблица состояний

| Сущность/состояние | Base material | Overlay | Интерактивность |
|---|---|---|---|
| Drag `Stock` | `M_Pipe_Default` | Только tutorial | Можно взять |
| Drag `Dragging` | `M_Pipe_Default` | Обычно нет | Следует за pointer |
| Drag `Returning` | `M_Pipe_Default` | Нет | Заблокирована |
| Drag `Placed` | Скрыта | Нет | Нет |
| Slot `Empty` | `M_Slot_Empty` | Возможно tutorial до drag, если требуется | Не вращается |
| Slot `HoverValid` | `M_Slot_HoverValid` | Только tutorial-target | Принимает совместимую drag-трубу |
| Slot `OccupiedWrongRotation` | `M_Slot_Wrong` | Возможно tutorial rotate | Вращается |
| Slot `OccupiedAligned` | `M_Pipe_Default` | Нет | Вращается до Charging |
| Slot `Charging` | Green runtime, fill 0→1 | Нет | Заблокирован |
| Slot `Powered` | Green runtime, fill 1 | Нет | Заблокирован |
| Start node | Green powered | Нет | Нет |
| End node inactive | `M_End_Inactive` | Нет | Нет |
| End node powered | `M_End_Powered` | Нет | Нет |

---

## 25. Инициализация

Строгий порядок:

1. `GameFlowController` блокирует input.
2. Материалы/эффекты завода сбрасываются.
3. Все drag-трубы переходят в `Stock` и запоминают transforms.
4. Все слоты переходят в `Empty`, `_Fill = 0`, `AnchorY` получает authoring yaw.
5. Registry собирает слоты.
6. Power chain валидирует порядок и ссылки.
7. Start node становится `Powered`.
8. End node становится `Inactive`.
9. Tutorial controller включает overlay первой drag-трубы.
10. Input разблокируется; game state → `Playing`.

Использовать явный `Initialize()` вместо зависимости от случайного порядка `Start()` между объектами.

---

## 26. Валидация конфигурации

`PipeConfigurationValidator` должен проверять:

- все обязательные ссылки не `null`;
- `AnchorY` имеет scale `(1,1,1)`;
- slot-труба является child `AnchorY`;
- `ConnectorA` и `ConnectorB` присутствуют и не совпадают;
- slot renderer имеет один submesh для overlay;
- capture collider имеет `isTrigger = true`;
- drag-труба имеет kinematic Rigidbody;
- `requiredSpec` слота соответствует мешу;
- цепочка начинается Start node и заканчивается End node;
- у каждого промежуточного узла один previous и один next;
- нет циклов и пропусков;
- capture volumes не пересекаются в стартовой конфигурации;
- зелёный shader содержит `_Fill`, `_FlowOriginWS`, `_FlowDirectionWS`, `_FlowLength`;
- tutorial overlay material прозрачный и назначен.

Ошибки конфигурации должны выводиться понятными сообщениями с именем GameObject.

---

## 27. Пошаговый план для OpenCode-агента

### Этап 0 — аудит проекта

1. Определить версию Unity и render pipeline.
2. Найти реальные пути моделей труб.
3. Проверить pivot, локальную продольную ось и число submesh каждой модели.
4. Проверить текущую Input System.
5. Проверить наличие сторонних tween/framework-пакетов, но не добавлять новые без необходимости.
6. Создать краткий audit note до изменений.

**Контроль:** проект открывается; Console без новых ошибок.

### Этап 1 — папки и типы

Создать:

```text
Assets/FactoryPipePower/
├── Scripts/Core
├── Scripts/Input
├── Scripts/Pipes
├── Scripts/Power
├── Scripts/Tutorial
├── Scripts/Validation
├── Materials
├── Shaders
├── Prefabs
├── Scenes
└── Tests
```

Реализовать enum, `PipeSpec`, `QuarterTurnUtility` и unit tests для всех углов.

**Контроль:** тесты подтверждают пары `0/180` и `90/270`, включая `-90`, `360`, `450` и небольшие float-отклонения.

### Этап 2 — визуальный контроллер

1. Реализовать `PipeVisualController`.
2. Переключать shared base materials без изменения asset properties.
3. Реализовать overlay on/off вторым material slot.
4. Не выделять массивы материалов каждый кадр.
5. Подготовить runtime green material instance.

**Контроль:** вручную переключить все base states; overlay остаётся поверх каждого из них.

### Этап 3 — drag FSM

1. Создать prefab одной тестовой drag-трубы.
2. Реализовать `Stock → Dragging → Returning → Stock`.
3. Проверить mouse и touch emulation.
4. Реализовать `CommitPlaced()` и мгновенное отключение.

**Контроль:** невалидный drop возвращает трубу точно на место; успешный commit скрывает её без дубликата.

### Этап 4 — slot FSM

1. Создать тестовый slot prefab со встроенной slot-трубой.
2. Реализовать `Empty` и `HoverValid` как разные base materials.
3. Реализовать `OccupiedWrongRotation` и `OccupiedAligned`.
4. Реализовать поворот `AnchorY` на +90°.
5. Проверить обе rotation groups.

**Контроль:** slot-труба существует до установки; drag-труба не становится child.

### Этап 5 — trigger snap

1. Настроить layers и physics matrix.
2. Добавить kinematic Rigidbody drag-трубе.
3. Реализовать `OnTriggerEnter` и `TryAccept`.
4. Добавить lock против двойного snap.
5. Передать yaw до деактивации drag-трубы.

**Контроль:** snap происходит при пересечении collider-ов, а не при отпускании pointer.

### Этап 6 — Registry

1. Собрать все slots.
2. При начале drag перевести все совместимые пустые slots в `HoverValid`.
3. Несовместимые оставить `Empty`.
4. После snap/return очистить hover.

**Контроль:** подсвечиваются все подходящие slots, а не только ближайший.

### Этап 7 — GreenFill shader

1. Реализовать shader/Shader Graph с параметрами раздела 18.
2. Добавить ConnectorA/B.
3. Реализовать выбор ближайшего предыдущему узлу connector-а.
4. Анимировать `_Fill` на runtime material.

**Контроль:** визуальное заполнение всегда идёт от Start к End, включая трубу с yaw +180°.

### Этап 8 — power chain

1. Реализовать `IPowerNode`.
2. Реализовать Start, Slot и End nodes.
3. Реализовать последовательный `Charging → Powered`.
4. Проверить ситуацию, когда downstream slots собраны заранее.
5. Проверить ситуацию, когда питание ждёт неправильно повернутый slot.

**Контроль:** питание никогда не перепрыгивает через пустой/неверный сегмент.

### Этап 9 — Tutorial overlay

1. Создать `M_TutorialOverlay`.
2. Реализовать shader pulse.
3. Подсветить сначала drag-трубу.
4. После начала drag подсветить tutorial-target slot поверх синего `HoverValid`.
5. При необходимости подсветить установленную неправильную slot-трубу для поворота.

**Контроль:** tutorial overlay не меняет FSM и не подменяет `HoverValid`.

### Этап 10 — завод и финал

1. Реализовать End node transition.
2. Реализовать `FactoryPowerController`.
3. Включить зелёный индикатор, дым и доступные механические эффекты.
4. Добавить completion delay и CTA hook.

**Контроль:** завод включается только после End node.

### Этап 11 — полная сцена

1. Создать 3–6 слотов.
2. Создать соответствующий набор drag-труб.
3. Настроить одну короткую решаемую конфигурацию.
4. Проверить camera framing в portrait и landscape.
5. Убедиться, что палец не закрывает критические цели.

### Этап 12 — QA и оптимизация

1. Исправить все Console errors/warnings проекта, относящиеся к реализации.
2. Проверить отсутствие material leaks.
3. Проверить отсутствие allocations в постоянном Update из-за `renderer.materials`.
4. Проверить WebGL build.
5. Проверить reset/reload сцены.
6. Составить implementation report: созданные файлы, изменённые prefabs, известные ограничения.

---

## 28. Обязательные тест-кейсы

| ID | Сценарий | Ожидаемый результат |
|---|---|---|
| T01 | Начало drag Small 2m | Все пустые Small 2m slots синие; остальные без изменений |
| T02 | Отпустить трубу вне slot | `Returning`, затем точный `Stock` |
| T03 | Пересечь несовместимый slot | Snap не происходит |
| T04 | Пересечь совместимый slot | Drag-труба сразу скрывается; slot становится occupied |
| T05 | Установка с правильным yaw | Краткий Wrong-check, затем `OccupiedAligned` |
| T06 | Установка с неправильным yaw | Оранжевый `OccupiedWrongRotation` |
| T07 | Тап wrong slot | Поворот ровно +90°, затем новая проверка |
| T08 | Группа 0/180 | 0 и 180 valid; 90 и 270 invalid |
| T09 | Группа 90/270 | 90 и 270 valid; 0 и 180 invalid |
| T10 | Первый slot aligned | Начинает Charging, так как Start powered |
| T11 | Следующий slot wrong | Питание останавливается перед ним |
| T12 | Исправить ожидающий slot | Он начинает Charging без повторного сигнала вручную |
| T13 | Downstream собран заранее | После upstream powered заряд идёт каскадом |
| T14 | Труба повернута на 180 | Fill всё равно идёт от previous к next |
| T15 | Tutorial drag | Жёлтый overlay поверх Default |
| T16 | Tutorial target | Синий HoverValid остаётся base; жёлтый overlay сверху |
| T17 | End получает питание | End зеленеет; завод Online |
| T18 | До End питание не дошло | Завод остаётся Offline |
| T19 | Быстрые повторные тапы | Во время rotation/charging игнорируются |
| T20 | Два trigger-а в один шаг | Только один slot принимает трубу |

---

## 29. Acceptance criteria

Реализация считается готовой, только если:

- drag-труба возвращается после невалидного drop;
- все совместимые пустые слоты становятся `HoverValid` сразу при `Dragging`;
- `Empty` серый полупрозрачный;
- `HoverValid` синий полупрозрачный;
- tutorial overlay жёлтый, прозрачный, пульсирующий и независимый;
- при пересечении collider-ов совместимого слота drag-труба сразу исчезает;
- slot-труба принимает исходный yaw drag-трубы;
- slot-труба была в слоте ещё до установки;
- поворачивается `AnchorY`, а не drag-труба;
- правильность проверяется по группам `0/180` и `90/270`;
- wrong — оранжевый;
- aligned — `M_Pipe_Default`;
- charging/powered используют один зелёный fill material;
- fill движется от Start к End;
- `Charging` автоматически становится `Powered`;
- `Returning` автоматически становится `Stock`;
- Start node зелёный с начала;
- End node зеленеет при достижении питания;
- завод включается только после End node;
- сцена не содержит ошибок Console;
- проект собирается в целевой WebGL/playable pipeline.

---

## 30. Запрещённые отклонения

Агенту запрещено без разрешения:

- заменять drag-and-drop на tap-to-place;
- устанавливать трубу только на pointer release;
- подсвечивать только ближайший slot;
- использовать tutorial overlay вместо `HoverValid`;
- делать drag-трубу дочерней слоту;
- удалять встроенную slot-трубу;
- вращать mesh напрямую вместо `AnchorY`;
- проверять только один угол вместо пары;
- объединять `Empty` и `HoverValid`;
- создавать отдельные меши под каждое визуальное состояние;
- менять shared `_Fill` у всех труб одновременно;
- вычислять цепочку по расстоянию;
- включать завод до End node;
- добавлять развилки, таймер поражения, экономику или другие механики;
- подключать сторонние плагины без явной необходимости и разрешения.

---

## 31. Формат отчёта агента

После каждого этапа агент должен сообщить:

```text
Этап:
Созданные файлы:
Изменённые объекты/prefabs:
Что реализовано:
Как проверено:
Console errors:
Оставшиеся риски/вопросы:
Готовность к следующему этапу: да/нет
```

Агент не должен переходить к следующему крупному этапу, если текущий не компилируется или не прошёл указанный контроль.

---

## 32. Definition of Done

MVP завершён, когда игрок без текстового объяснения может:

1. Увидеть подсвеченную трубу.
2. Перетащить её в синий совместимый слот.
3. Увидеть мгновенную замену drag-визуала на slot-визуал.
4. Повернуть оранжевую трубу до серого aligned-состояния.
5. Увидеть последовательное зелёное заполнение всей линии.
6. Увидеть зелёную конечную точку.
7. Увидеть включение всего завода и финальный CTA.

