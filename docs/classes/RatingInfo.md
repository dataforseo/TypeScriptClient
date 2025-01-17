[**Documentation**](../README.md)

***

[Documentation](../README.md) / RatingInfo

# Class: RatingInfo

Defined in: main.ts:24013

## Implements

- [`IRatingInfo`](../interfaces/IRatingInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RatingInfo()

> **new RatingInfo**(`data`?): [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:24026

#### Parameters

##### data?

[`IRatingInfo`](../interfaces/IRatingInfo.md)

#### Returns

[`RatingInfo`](RatingInfo.md)

## Properties

### rating\_max?

> `optional` **rating\_max**: `number`

Defined in: main.ts:24022

the maximum value for a rating_type

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`rating_max`](../interfaces/IRatingInfo.md#rating_max)

***

### rating\_type?

> `optional` **rating\_type**: `string`

Defined in: main.ts:24016

the type of rating
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`rating_type`](../interfaces/IRatingInfo.md#rating_type)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:24018

the value of the rating

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`value`](../interfaces/IRatingInfo.md#value)

***

### votes\_count?

> `optional` **votes\_count**: `number`

Defined in: main.ts:24020

the amount of feedback

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`votes_count`](../interfaces/IRatingInfo.md#votes_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24035

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:24055

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:24048

#### Parameters

##### data

`any`

#### Returns

[`RatingInfo`](RatingInfo.md)
