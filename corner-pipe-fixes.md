Открой сцену:

Assets/FactoryPipePower/Scenes/PlayableScene

Нужно корректно настроить и протестировать последовательную PowerChain.
Пользователь добавил боковой участок и переименовал угловые слоты.
Не полагайся только на порядок объектов в Hierarchy: подтверждай связи по
фактическим мировым позициям, направлению и совпадению ConnectorA/ConnectorB.

Фактический целевой маршрут от источника до приёмника:

StartPowerNode
→ PipeSlot_01
→ PipeSlot_02
→ PipeSlot_03
→ PFPipeSlotSmallCorner_01
→ PipeSlot_04
→ PFPipeSlotSmallCorner_02
→ PipeSlot_05
→ EndPowerNode

Правила работы:
- Не изменяй архитектуру системы питания и не создавай новую логику.
- Сначала изучи PipeSlotController, связанные node-behaviour компоненты и
  существующую систему проверки трубы/передачи питания.
- Не меняй prefab-asset глобально без необходимости; предпочтительны
  изменения экземпляров на сцене.
- Не меняй Transform, если соединители уже геометрически совмещены.
- Если имена, порядок Hierarchy и геометрия конфликтуют, приоритет у
  фактического соединения коннекторов и направления движения питания.

Настрой цепочку Previous Node Behaviour / Next Node Behaviour следующим
образом, используя фактический тип ссылок, принятый в проекте:

StartPowerNode:
- Next = PipeSlot_01

PipeSlot_01:
- Previous = StartPowerNode
- Next = PipeSlot_02

PipeSlot_02:
- Previous = PipeSlot_01
- Next = PipeSlot_03

PipeSlot_03:
- Previous = PipeSlot_02
- Next = PFPipeSlotSmallCorner_01

PFPipeSlotSmallCorner_01:
- Previous = PipeSlot_03
- Next = PipeSlot_04

PipeSlot_04:
- Previous = PFPipeSlotSmallCorner_01
- Next = PFPipeSlotSmallCorner_02

PFPipeSlotSmallCorner_02:
- Previous = PipeSlot_04
- Next = PipeSlot_05

PipeSlot_05:
- Previous = PFPipeSlotSmallCorner_02
- Next = EndPowerNode

EndPowerNode:
- Previous = PipeSlot_05

Если StartPowerNode или EndPowerNode по существующей архитектуре не имеют
одного из этих полей, не добавляй лишний компонент или самодельную логику.
Настрой существующий механизм так, чтобы маршрут выше фактически работал.

Проверь симметрию ссылок:
- Next каждого промежуточного узла должен быть равен следующему элементу.
- Previous следующего элемента должен указывать обратно на предыдущий.
- Не должно быть устаревших обходных ссылок.
- PipeSlot_03 не должен вести напрямую в PipeSlot_04, PipeSlot_05 или
  EndPowerNode.
- PipeSlot_04 не должен вести напрямую в PipeSlot_05 или EndPowerNode.
- PipeSlot_05 должен быть последним слотом непосредственно перед
  EndPowerNode.
- Оба угловых слота должны быть включены в цепь, а не оставаться
  визуальными объектами без node-связей.
- Если у управляющего PowerChain-компонента есть массив/список слотов,
  порядок должен точно соответствовать целевому маршруту.

Проверь геометрическое соединение всех соседних пар:

StartPowerNode ↔ PipeSlot_01
PipeSlot_01 ↔ PipeSlot_02
PipeSlot_02 ↔ PipeSlot_03
PipeSlot_03 ↔ PFPipeSlotSmallCorner_01
PFPipeSlotSmallCorner_01 ↔ PipeSlot_04
PipeSlot_04 ↔ PFPipeSlotSmallCorner_02
PFPipeSlotSmallCorner_02 ↔ PipeSlot_05
PipeSlot_05 ↔ EndPowerNode

Для каждой пары:
- мировые координаты соединяемых ConnectorA/ConnectorB должны совпадать;
- направления осей соединителей должны быть противоположными, то есть
  смотреть навстречу;
- не должно быть визуального зазора, пересечения или разворота на 180
  градусов в неправильную сторону;
- путь трубы должен быть непрерывным от StartPowerNode до EndPowerNode.

Проверь Expected Spec:
- PFPipeSlotSmallCorner_01 и PFPipeSlotSmallCorner_02:
  Diameter = Small, Shape = Corner;
- PipeSlot_01, PipeSlot_02, PipeSlot_03, PipeSlot_04 и PipeSlot_05:
  Diameter = Small, Shape = Straight, а Length соответствует длине
  предназначенной для слота трубы;
- у всех слотов назначены ConnectorA, ConnectorB, коллайдеры, Slot Visual,
  материалы и остальные обязательные ссылки;
- у новых/изменённых объектов нет пустых сериализованных ссылок.

Для обоих углов:
- проверь, как PipeSlotController вычисляет Rotation Group и Expected
  Corner Group;
- не меняй Rotation Y = 0 или Y = 180 автоматически;
- если логика использует локальные направления prefab, одинаковая
  Expected Corner Group у повёрнутых экземпляров может быть корректна;
- если логика использует мировые направления, назначь Corner Group так,
  чтобы PFPipeSlotSmallCorner_01 принимал путь от PipeSlot_03 и выводил
  к PipeSlot_04, а PFPipeSlotSmallCorner_02 принимал путь от PipeSlot_04
  и выводил к PipeSlot_05;
- меняй Transform только при доказанном геометрическом несоответствии
  ConnectorA/ConnectorB.

После настройки запусти Play Mode и проведи тесты:

1. Подходящая прямая труба принимается всеми прямыми слотами.
2. Подходящая угловая труба принимается обоими Corner-слотами.
3. Неверный диаметр, длина, форма или поворот трубы отклоняются.
4. EndPowerNode получает питание только после заполнения всех слотов,
   включая PFPipeSlotSmallCorner_01, PipeSlot_04,
   PFPipeSlotSmallCorner_02 и PipeSlot_05.
5. Извлечение трубы из любого промежуточного слота или из одного из
   углов немедленно разрывает питание.
6. Повторная корректная установка трубы восстанавливает питание.
7. В Console отсутствуют новые NullReferenceException,
   MissingReferenceException и ошибки проверки цепи.
8. Сохрани PlayableScene.

В конце выдай отчёт:
- подтверждённая фактическая последовательность;
- Previous/Next для каждого звена;
- Transform, ConnectorA/ConnectorB и Corner Group обоих углов;
- Expected Spec для PipeSlot_04 и PipeSlot_05;
- результат проверки питания до заполнения, после полного заполнения и
  после удаления одной трубы;
- все изменения сцены и найденные проблемы.


Дополнительно проверь и при необходимости исправь PipeSlotController.

Цель: PipeSlotController должен работать с фактическими ссылками
Previous Node Behaviour / Next Node Behaviour и не должен зависеть от
старого порядка или старых имён PipeSlot_01–PipeSlot_04.

1. Убери любые жёстко заданные условия и ссылки, которые предполагают,
   что цепочка состоит только из старых узлов или что PipeSlot_04 сразу
   соединён с EndPowerNode.

   Недопустимы проверки вида:
   - if (gameObject.name == "PipeSlot_04") ...
   - поиск соседей по имени GameObject;
   - индексы жёстко заданного массива, рассчитанного на прежнее число
     слотов;
   - сравнение с конкретным старым списком объектов;
   - отдельная логика, обходящая PFPipeSlotSmallCorner_01,
     PFPipeSlotSmallCorner_02 или PipeSlot_05.

2. Источник истины для цепочки:
   - previousNodeBehaviour;
   - nextNodeBehaviour;
   - ConnectorA / ConnectorB;
   - данные Expected Spec текущего слота.
   Логика не должна зависеть от порядка объектов в Hierarchy.

3.	PipeSlotController не переписывай и не меняй без доказанной причины.

	Сначала изучи текущую реализацию и проверь:
	- использует ли она назначенные Previous Node Behaviour и Next Node Behaviour;
	- не ищет ли слоты по GameObject.name;
	- нет ли жёсткой связи PipeSlot_04 → EndPowerNode;
	- нет ли фиксированного массива/списка, рассчитанного на старую цепочку;
	- умеет ли проверка углов учитывать поворот экземпляра,
	  включая PFPipeSlotSmallCorner_02 с Rotation Y = 180.

	Если контроллер уже работает через ссылки соседей и данные Expected Spec,
	не меняй C#-код. Настрой только компоненты и ссылки в PlayableScene.

	Меняй PipeSlotController минимально и только если тест выявит проблему:
	1. питание пропускает один из новых слотов;
	2. PipeSlot_05 игнорируется как последний слот;
	3. угол с Y = 180 ошибочно отвергает подходящую трубу;
	4. маршрут жёстко привязан к старым именам или прежнему количеству слотов;
	5. есть NullReferenceException вследствие отсутствующей проверки ссылки.

	После любых изменений кода повторно проверь всю цепочку:
	StartPowerNode
	→ PipeSlot_01
	→ PipeSlot_02
	→ PipeSlot_03
	→ PFPipeSlotSmallCorner_01
	→ PipeSlot_04
	→ PFPipeSlotSmallCorner_02
	→ PipeSlot_05
	→ EndPowerNode.

4. Проверь логику определения заполненности:
   - IsFilled / HasPipe / IsOccupied должно отражать фактическое
     наличие корректно установленной трубы;
   - слот должен считаться корректно заполненным только если труба
     совпадает по Diameter, Shape, Length и ориентации;
   - после извлечения трубы состояние обязательно сбрасывается;
   - повторная установка корректной трубы должна снова делать слот
     валидным без перезагрузки сцены.

5. Проверь передачу питания:
   - слот получает входное питание только от previousNodeBehaviour;
   - передаёт выходное питание только в nextNodeBehaviour;
   - передача разрешена, только когда текущий слот валидно заполнен;
   - питание EndPowerNode должно пройти только через маршрут:
     StartPowerNode → PipeSlot_01 → PipeSlot_02 → PipeSlot_03
     → PFPipeSlotSmallCorner_01 → PipeSlot_04
     → PFPipeSlotSmallCorner_02 → PipeSlot_05 → EndPowerNode;
   - при разрыве в любом месте downstream-узлы должны потерять питание;
   - не допускай рекурсивных циклов и бесконечного обновления состояния.

6. Добавь защиту от некорректной топологии:
   - Previous/Next не должны ссылаться на self;
   - Previous и Next не должны быть одним и тем же узлом;
   - запрещай циклы в цепи;
   - если Next.current.Previous != current, выводи предупреждение;
   - если Previous.current.Next != current, выводи предупреждение;
   - если отсутствует ConnectorA, ConnectorB, previousNodeBehaviour или
     nextNodeBehaviour у промежуточного слота, выводи понятную ошибку,
     а не допускай NullReferenceException.

7. Проверь обработку угловых слотов:
   - Shape = Corner должен проверяться отдельно от Shape = Straight;
   - логика должна учитывать локальную ориентацию слота и world rotation;
   - Rotation Y = 0 и Rotation Y = 180 должны корректно работать для
     PFPipeSlotSmallCorner_01 и PFPipeSlotSmallCorner_02;
   - Expected Corner Group должен сравниваться с фактическим направлением
     трубы после учёта Transform.rotation;
   - не использовать условие, привязанное к имени одного конкретного
     corner-slot.

8. Если Rotation Group и Expected Corner Group представлены enum:
   - добавь/проверь метод, который приводит локальные направления угла
     к мировым с учётом transform.rotation;
   - для поворота 180 градусов вход и выход должны быть преобразованы
     в противоположные мировые направления;
   - проверяй именно допустимую пару "вход → выход", а не только сам
     факт поворота трубы.

9. Добавь editor-валидацию в OnValidate только для проверки данных,
   без запуска игровой логики:
   - наличие ConnectorA и ConnectorB;
   - ConnectorA != ConnectorB;
   - наличие SlotVisual, если оно необходимо;
   - соответствие Shape и заполненных Corner-настроек;
   - отсутствие self-reference в Previous/Next;
   - взаимная согласованность Previous/Next, если сосед уже назначен;
   - предупреждение при подозрительно большом расстоянии между
     соседними коннекторами.
   OnValidate не должен передавать питание, создавать объекты или
   менять игровое состояние.

10. Добавь удобные методы диагностики для тестирования:
   - bool IsTopologyValid(out string error);
   - bool IsPipeValidForThisSlot(PipeData pipe, out string error);
   - bool CanReceivePower();
   - void RefreshPowerState();
   - при необходимости: string GetDebugDescription().

11. Перед финальной сдачей проверь в Console:
   - нет NullReferenceException;
   - нет циклического вызова RefreshPowerState;
   - нет повторной подписки на события;
   - изменение одной трубы корректно обновляет питание остальных узлов.

Не переписывай контроллер полностью, если текущая архитектура уже
работает. Вноси минимальные правки, которые делают цепочку
масштабируемой и не зависящей от старого маршрута.
