[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / RatingElement

# Class: RatingElement

## Implements

- [`IRatingElement`](../interfaces/IRatingElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RatingElement()

> **new RatingElement**(`data`?): [`RatingElement`](RatingElement.md)

#### Parameters

• **data?**: [`IRatingElement`](../interfaces/IRatingElement.md)

#### Returns

[`RatingElement`](RatingElement.md)

#### Defined in

main.ts:21208

## Properties

### position?

> `optional` **position**: `string`

the alignment of the element in Google Shopping SERP
possible values:
left, right

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`position`](../interfaces/IRatingElement.md#position)

#### Defined in

main.ts:21195

***

### rating\_max?

> `optional` **rating\_max**: `number`

the maximum value for a rating_type

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`rating_max`](../interfaces/IRatingElement.md#rating_max)

#### Defined in

main.ts:21204

***

### rating\_type?

> `optional` **rating\_type**: `string`

the type of rating
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`rating_type`](../interfaces/IRatingElement.md#rating_type)

#### Defined in

main.ts:21198

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`type`](../interfaces/IRatingElement.md#type)

#### Defined in

main.ts:21191

***

### value?

> `optional` **value**: `string`

value of the rating

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`value`](../interfaces/IRatingElement.md#value)

#### Defined in

main.ts:21200

***

### votes\_count?

> `optional` **votes\_count**: `number`

the amount of feedback

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`votes_count`](../interfaces/IRatingElement.md#votes_count)

#### Defined in

main.ts:21202

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21217

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21239

***

### fromJS()

> `static` **fromJS**(`data`): [`RatingElement`](RatingElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`RatingElement`](RatingElement.md)

#### Defined in

main.ts:21232
