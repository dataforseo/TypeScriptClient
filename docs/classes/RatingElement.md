**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RatingElement

# Class: RatingElement

## Implements

- [`IRatingElement`](../interfaces/IRatingElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RatingElement(data)

> **new RatingElement**(`data`?): [`RatingElement`](RatingElement.md)

#### Parameters

• **data?**: [`IRatingElement`](../interfaces/IRatingElement.md)

#### Returns

[`RatingElement`](RatingElement.md)

#### Source

main.ts:20753

## Properties

### position?

> **`optional`** **position**: `string`

the alignment of the element in Google Shopping SERP
possible values:
left, right

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`position`](../interfaces/IRatingElement.md#position)

#### Source

main.ts:20740

***

### rating\_max?

> **`optional`** **rating\_max**: `number`

the maximum value for a rating_type

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`rating_max`](../interfaces/IRatingElement.md#rating_max)

#### Source

main.ts:20749

***

### rating\_type?

> **`optional`** **rating\_type**: `string`

the type of rating
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`rating_type`](../interfaces/IRatingElement.md#rating_type)

#### Source

main.ts:20743

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`type`](../interfaces/IRatingElement.md#type)

#### Source

main.ts:20736

***

### value?

> **`optional`** **value**: `string`

value of the rating

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`value`](../interfaces/IRatingElement.md#value)

#### Source

main.ts:20745

***

### votes\_count?

> **`optional`** **votes\_count**: `number`

the amount of feedback

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`votes_count`](../interfaces/IRatingElement.md#votes_count)

#### Source

main.ts:20747

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:20762

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:20784

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RatingElement`](RatingElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`RatingElement`](RatingElement.md)

#### Source

main.ts:20777
