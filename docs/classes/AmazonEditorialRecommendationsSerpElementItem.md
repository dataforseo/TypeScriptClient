[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AmazonEditorialRecommendationsSerpElementItem

# Class: AmazonEditorialRecommendationsSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonEditorialRecommendationsSerpElementItem()

> **new AmazonEditorialRecommendationsSerpElementItem**(`data`?): [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md)

#### Returns

[`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:180620

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22320

***

### items?

> `optional` **items**: [`AmazonSerpElement`](AmazonSerpElement.md)[]

Amazon product items

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`items`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#items)

#### Defined in

main.ts:180616

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`position`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#position)

#### Defined in

main.ts:180614

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22316

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`rank_group`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:22313

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`type`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:22310

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`xpath`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:22318

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:180625

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:180648

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:180641
