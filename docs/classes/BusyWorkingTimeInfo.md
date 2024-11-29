[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusyWorkingTimeInfo

# Class: BusyWorkingTimeInfo

## Implements

- [`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusyWorkingTimeInfo()

> **new BusyWorkingTimeInfo**(`data`?): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Parameters

##### data?

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Defined in

main.ts:210988

## Properties

### popular\_index?

> `optional` **popular\_index**: `number`

popularity index
relative time-bound popularity index measured from 0 to 100;
higher value corresponds to a busier time of a day

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`popular_index`](../interfaces/IBusyWorkingTimeInfo.md#popular_index)

#### Defined in

main.ts:210984

***

### time?

> `optional` **time**: [`WorkTimeInfo`](WorkTimeInfo.md)

busy hours

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`time`](../interfaces/IBusyWorkingTimeInfo.md#time)

#### Defined in

main.ts:210980

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:210997

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:211015

***

### fromJS()

> `static` **fromJS**(`data`): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Defined in

main.ts:211008
