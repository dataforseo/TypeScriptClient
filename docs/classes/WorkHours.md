[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkHours

# Class: WorkHours

Defined in: main.ts:41509

## Implements

- [`IWorkHours`](../interfaces/IWorkHours.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new WorkHours()

> **new WorkHours**(`data`?): [`WorkHours`](WorkHours.md)

Defined in: main.ts:41518

#### Parameters

##### data?

[`IWorkHours`](../interfaces/IWorkHours.md)

#### Returns

[`WorkHours`](WorkHours.md)

## Properties

### current\_status?

> `optional` **current\_status**: `string`

Defined in: main.ts:41514

current status of the establishment
indicates whether the establishment is opened or closed

#### Implementation of

[`IWorkHours`](../interfaces/IWorkHours.md).[`current_status`](../interfaces/IWorkHours.md#current_status)

***

### timetable?

> `optional` **timetable**: `object`

Defined in: main.ts:41511

work hours timetable

#### Index Signature

\[`key`: `string`\]: [`WorkDayInfo`](WorkDayInfo.md)[]

#### Implementation of

[`IWorkHours`](../interfaces/IWorkHours.md).[`timetable`](../interfaces/IWorkHours.md#timetable)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:41527

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:41551

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkHours`](WorkHours.md)

Defined in: main.ts:41544

#### Parameters

##### data

`any`

#### Returns

[`WorkHours`](WorkHours.md)
