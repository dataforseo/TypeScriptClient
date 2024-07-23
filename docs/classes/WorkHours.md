**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / WorkHours

# Class: WorkHours

## Implements

- [`IWorkHours`](../interfaces/IWorkHours.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new WorkHours(data)

> **new WorkHours**(`data`?): [`WorkHours`](WorkHours.md)

#### Parameters

• **data?**: [`IWorkHours`](../interfaces/IWorkHours.md)

#### Returns

[`WorkHours`](WorkHours.md)

#### Source

main.ts:40974

## Properties

### current\_status?

> **`optional`** **current\_status**: `string`

current status of the establishment
indicates whether the establishment is opened or closed

#### Implementation of

[`IWorkHours`](../interfaces/IWorkHours.md).[`current_status`](../interfaces/IWorkHours.md#current_status)

#### Source

main.ts:40970

***

### timetable?

> **`optional`** **timetable**: `Object`

work hours timetable

#### Index signature

 \[`key`: `string`\]: ([`WorkDayInfo`](WorkDayInfo.md) \| `undefined`)[]

#### Implementation of

[`IWorkHours`](../interfaces/IWorkHours.md).[`timetable`](../interfaces/IWorkHours.md#timetable)

#### Source

main.ts:40967

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:40983

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:41007

***

### fromJS()

> **`static`** **fromJS**(`data`): [`WorkHours`](WorkHours.md)

#### Parameters

• **data**: `any`

#### Returns

[`WorkHours`](WorkHours.md)

#### Source

main.ts:41000
