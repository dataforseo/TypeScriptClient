[**Documentation**](../README.md)

***

[Documentation](../README.md) / PopularTimes

# Class: PopularTimes

Defined in: main.ts:211608

## Implements

- [`IPopularTimes`](../interfaces/IPopularTimes.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PopularTimes()

> **new PopularTimes**(`data`?): [`PopularTimes`](PopularTimes.md)

Defined in: main.ts:211615

#### Parameters

##### data?

[`IPopularTimes`](../interfaces/IPopularTimes.md)

#### Returns

[`PopularTimes`](PopularTimes.md)

## Properties

### popular\_times\_by\_days?

> `optional` **popular\_times\_by\_days**: `object`

Defined in: main.ts:211611

popular hours
information about busy hours of the local establishment on each day of the week

#### Index Signature

\[`key`: `string`\]: [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)[]

#### Implementation of

[`IPopularTimes`](../interfaces/IPopularTimes.md).[`popular_times_by_days`](../interfaces/IPopularTimes.md#popular_times_by_days)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211624

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:211647

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PopularTimes`](PopularTimes.md)

Defined in: main.ts:211640

#### Parameters

##### data

`any`

#### Returns

[`PopularTimes`](PopularTimes.md)
