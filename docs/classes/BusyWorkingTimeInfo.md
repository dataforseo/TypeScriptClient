[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusyWorkingTimeInfo

# Class: BusyWorkingTimeInfo

Defined in: main.ts:211548

## Implements

- [`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusyWorkingTimeInfo()

> **new BusyWorkingTimeInfo**(`data`?): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

Defined in: main.ts:211558

#### Parameters

##### data?

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

## Properties

### popular\_index?

> `optional` **popular\_index**: `number`

Defined in: main.ts:211554

popularity index
relative time-bound popularity index measured from 0 to 100;
higher value corresponds to a busier time of a day

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`popular_index`](../interfaces/IBusyWorkingTimeInfo.md#popular_index)

***

### time?

> `optional` **time**: [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:211550

busy hours

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`time`](../interfaces/IBusyWorkingTimeInfo.md#time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211567

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:211585

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

Defined in: main.ts:211578

#### Parameters

##### data

`any`

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)
