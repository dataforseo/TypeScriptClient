**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AmazonEditorialRecommendationsSerpElementItem

# Class: AmazonEditorialRecommendationsSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonEditorialRecommendationsSerpElementItem(data)

> **new AmazonEditorialRecommendationsSerpElementItem**(`data`?): [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md)

#### Returns

[`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Source

main.ts:179940

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Source

main.ts:21498

***

### items?

> **`optional`** **items**: [`AmazonSerpElement`](AmazonSerpElement.md)[]

Amazon product items

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`items`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#items)

#### Source

main.ts:179936

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`position`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#position)

#### Source

main.ts:179932

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#rank_absolute)

#### Source

main.ts:179928

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`rank_group`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#rank_group)

#### Source

main.ts:179925

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`xpath`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#xpath)

#### Source

main.ts:179934

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Source

main.ts:179945

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Source

main.ts:179971

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Source

main.ts:179964
