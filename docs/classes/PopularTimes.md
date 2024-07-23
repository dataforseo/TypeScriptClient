**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PopularTimes

# Class: PopularTimes

## Implements

- [`IPopularTimes`](../interfaces/IPopularTimes.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PopularTimes(data)

> **new PopularTimes**(`data`?): [`PopularTimes`](PopularTimes.md)

#### Parameters

• **data?**: [`IPopularTimes`](../interfaces/IPopularTimes.md)

#### Returns

[`PopularTimes`](PopularTimes.md)

#### Source

main.ts:201448

## Properties

### popular\_times\_by\_days?

> **`optional`** **popular\_times\_by\_days**: `Object`

popular hours
information about busy hours of the local establishment on each day of the week

#### Index signature

 \[`key`: `string`\]: ([`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md) \| `undefined`)[]

#### Implementation of

[`IPopularTimes`](../interfaces/IPopularTimes.md).[`popular_times_by_days`](../interfaces/IPopularTimes.md#popular_times_by_days)

#### Source

main.ts:201444

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:201457

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:201480

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PopularTimes`](PopularTimes.md)

#### Parameters

• **data**: `any`

#### Returns

[`PopularTimes`](PopularTimes.md)

#### Source

main.ts:201473
