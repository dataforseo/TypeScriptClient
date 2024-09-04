[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PopularTimes

# Class: PopularTimes

## Implements

- [`IPopularTimes`](../interfaces/IPopularTimes.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PopularTimes()

> **new PopularTimes**(`data`?): [`PopularTimes`](PopularTimes.md)

#### Parameters

• **data?**: [`IPopularTimes`](../interfaces/IPopularTimes.md)

#### Returns

[`PopularTimes`](PopularTimes.md)

#### Defined in

main.ts:198662

## Properties

### popular\_times\_by\_days?

> `optional` **popular\_times\_by\_days**: `object`

popular hours
information about busy hours of the local establishment on each day of the week

#### Index Signature

 \[`key`: `string`\]: ([`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md) \| `undefined`)[]

#### Implementation of

[`IPopularTimes`](../interfaces/IPopularTimes.md).[`popular_times_by_days`](../interfaces/IPopularTimes.md#popular_times_by_days)

#### Defined in

main.ts:198658

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:198671

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:198694

***

### fromJS()

> `static` **fromJS**(`data`): [`PopularTimes`](PopularTimes.md)

#### Parameters

• **data**: `any`

#### Returns

[`PopularTimes`](PopularTimes.md)

#### Defined in

main.ts:198687
