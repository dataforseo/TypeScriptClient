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

main.ts:203223

## Properties

### popular\_index?

> `optional` **popular\_index**: `number`

popularity index
relative time-bound popularity index measured from 0 to 100;
higher value corresponds to a busier time of a day

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`popular_index`](../interfaces/IBusyWorkingTimeInfo.md#popular_index)

#### Defined in

main.ts:203219

***

### time?

> `optional` **time**: [`WorkTimeInfo`](WorkTimeInfo.md)

busy hours

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`time`](../interfaces/IBusyWorkingTimeInfo.md#time)

#### Defined in

main.ts:203215

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:203232

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:203250

***

### fromJS()

> `static` **fromJS**(`data`): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Defined in

main.ts:203243
