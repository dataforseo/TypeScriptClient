[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonEditorialRecommendationsSerpElementItem

# Class: AmazonEditorialRecommendationsSerpElementItem

Defined in: main.ts:193172

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonEditorialRecommendationsSerpElementItem()

> **new AmazonEditorialRecommendationsSerpElementItem**(`data`?): [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

Defined in: main.ts:193182

#### Parameters

##### data?

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md)

#### Returns

[`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23218

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`AmazonSerpElement`](AmazonSerpElement.md)[]

Defined in: main.ts:193178

Amazon product items

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`items`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:193176

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`position`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23214

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23211

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`rank_group`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23208

type of element

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`type`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:23216

the XPath of the element

#### Implementation of

[`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[`xpath`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:193187

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:193210

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

Defined in: main.ts:193203

#### Parameters

##### data

`any`

#### Returns

[`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
