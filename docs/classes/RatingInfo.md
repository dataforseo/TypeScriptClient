[**Documentation**](../README.md)

***

[Documentation](../README.md) / RatingInfo

# Class: RatingInfo

## Implements

- [`IRatingInfo`](../interfaces/IRatingInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RatingInfo()

> **new RatingInfo**(`data`?): [`RatingInfo`](RatingInfo.md)

#### Parameters

##### data?

[`IRatingInfo`](../interfaces/IRatingInfo.md)

#### Returns

[`RatingInfo`](RatingInfo.md)

#### Defined in

main.ts:24026

## Properties

### rating\_max?

> `optional` **rating\_max**: `number`

the maximum value for a rating_type

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`rating_max`](../interfaces/IRatingInfo.md#rating_max)

#### Defined in

main.ts:24022

***

### rating\_type?

> `optional` **rating\_type**: `string`

the type of rating
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`rating_type`](../interfaces/IRatingInfo.md#rating_type)

#### Defined in

main.ts:24016

***

### value?

> `optional` **value**: `number`

the value of the rating

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`value`](../interfaces/IRatingInfo.md#value)

#### Defined in

main.ts:24018

***

### votes\_count?

> `optional` **votes\_count**: `number`

the amount of feedback

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`votes_count`](../interfaces/IRatingInfo.md#votes_count)

#### Defined in

main.ts:24020

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:24035

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:24055

***

### fromJS()

> `static` **fromJS**(`data`): [`RatingInfo`](RatingInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`RatingInfo`](RatingInfo.md)

#### Defined in

main.ts:24048
