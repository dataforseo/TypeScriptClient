**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusyWorkingTimeInfo

# Class: BusyWorkingTimeInfo

## Implements

- [`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusyWorkingTimeInfo(data)

> **new BusyWorkingTimeInfo**(`data`?): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Parameters

• **data?**: [`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Source

main.ts:196610

## Properties

### popular\_index?

> **`optional`** **popular\_index**: `number`

popularity index
relative time-bound popularity index measured from 0 to 100;
higher value corresponds to a busier time of a day

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`popular_index`](../interfaces/IBusyWorkingTimeInfo.md#popular_index)

#### Source

main.ts:196606

***

### time?

> **`optional`** **time**: [`WorkTimeInfo`](WorkTimeInfo.md)

busy hours

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`time`](../interfaces/IBusyWorkingTimeInfo.md#time)

#### Source

main.ts:196602

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:196619

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:196637

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Source

main.ts:196630
