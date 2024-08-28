[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / WorkHours

# Class: WorkHours

## Implements

- [`IWorkHours`](../interfaces/IWorkHours.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new WorkHours()

> **new WorkHours**(`data`?): [`WorkHours`](WorkHours.md)

#### Parameters

• **data?**: [`IWorkHours`](../interfaces/IWorkHours.md)

#### Returns

[`WorkHours`](WorkHours.md)

#### Defined in

main.ts:41500

## Properties

### current\_status?

> `optional` **current\_status**: `string`

current status of the establishment
indicates whether the establishment is opened or closed

#### Implementation of

[`IWorkHours`](../interfaces/IWorkHours.md).[`current_status`](../interfaces/IWorkHours.md#current_status)

#### Defined in

main.ts:41496

***

### timetable?

> `optional` **timetable**: `object`

work hours timetable

#### Index Signature

 \[`key`: `string`\]: ([`WorkDayInfo`](WorkDayInfo.md) \| `undefined`)[]

#### Implementation of

[`IWorkHours`](../interfaces/IWorkHours.md).[`timetable`](../interfaces/IWorkHours.md#timetable)

#### Defined in

main.ts:41493

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:41509

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:41533

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkHours`](WorkHours.md)

#### Parameters

• **data**: `any`

#### Returns

[`WorkHours`](WorkHours.md)

#### Defined in

main.ts:41526
