[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkDayInfo

# Class: WorkDayInfo

## Implements

- [`IWorkDayInfo`](../interfaces/IWorkDayInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new WorkDayInfo()

> **new WorkDayInfo**(`data`?): [`WorkDayInfo`](WorkDayInfo.md)

#### Parameters

##### data?

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md)

#### Returns

[`WorkDayInfo`](WorkDayInfo.md)

#### Defined in

main.ts:22986

## Properties

### close?

> `optional` **close**: [`WorkTimeInfo`](WorkTimeInfo.md)

closing time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`close`](../interfaces/IWorkDayInfo.md#close)

#### Defined in

main.ts:22982

***

### open?

> `optional` **open**: [`WorkTimeInfo`](WorkTimeInfo.md)

opening time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`open`](../interfaces/IWorkDayInfo.md#open)

#### Defined in

main.ts:22980

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:22995

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:23013

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkDayInfo`](WorkDayInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`WorkDayInfo`](WorkDayInfo.md)

#### Defined in

main.ts:23006
