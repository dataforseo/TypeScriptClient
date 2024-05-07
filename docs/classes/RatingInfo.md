**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RatingInfo

# Class: RatingInfo

## Implements

- [`IRatingInfo`](../interfaces/IRatingInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RatingInfo(data)

> **new RatingInfo**(`data`?): [`RatingInfo`](RatingInfo.md)

#### Parameters

• **data?**: [`IRatingInfo`](../interfaces/IRatingInfo.md)

#### Returns

[`RatingInfo`](RatingInfo.md)

#### Source

main.ts:28806

## Properties

### rating\_max?

> **`optional`** **rating\_max**: `number`

the maximum value for a rating_type

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`rating_max`](../interfaces/IRatingInfo.md#rating_max)

#### Source

main.ts:28802

***

### rating\_type?

> **`optional`** **rating\_type**: `string`

the type of rating
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`rating_type`](../interfaces/IRatingInfo.md#rating_type)

#### Source

main.ts:28796

***

### value?

> **`optional`** **value**: `number`

the value of the rating

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`value`](../interfaces/IRatingInfo.md#value)

#### Source

main.ts:28798

***

### votes\_count?

> **`optional`** **votes\_count**: `number`

the amount of feedback

#### Implementation of

[`IRatingInfo`](../interfaces/IRatingInfo.md).[`votes_count`](../interfaces/IRatingInfo.md#votes_count)

#### Source

main.ts:28800

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:28815

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:28835

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RatingInfo`](RatingInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`RatingInfo`](RatingInfo.md)

#### Source

main.ts:28828
