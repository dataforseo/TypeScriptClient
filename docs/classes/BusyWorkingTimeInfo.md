[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusyWorkingTimeInfo

# Class: BusyWorkingTimeInfo

## Implements

- [`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusyWorkingTimeInfo()

> **new BusyWorkingTimeInfo**(`data`?): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Parameters

• **data?**: [`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Defined in

main.ts:198605

## Properties

### popular\_index?

> `optional` **popular\_index**: `number`

popularity index
relative time-bound popularity index measured from 0 to 100;
higher value corresponds to a busier time of a day

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`popular_index`](../interfaces/IBusyWorkingTimeInfo.md#popular_index)

#### Defined in

main.ts:198601

***

### time?

> `optional` **time**: [`WorkTimeInfo`](WorkTimeInfo.md)

busy hours

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`time`](../interfaces/IBusyWorkingTimeInfo.md#time)

#### Defined in

main.ts:198597

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:198614

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:198632

***

### fromJS()

> `static` **fromJS**(`data`): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Defined in

main.ts:198625
