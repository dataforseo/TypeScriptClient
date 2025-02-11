[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInfoElementMerchantSerpElementItem

# Class: ProductInfoElementMerchantSerpElementItem

Defined in: main.ts:191006

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductInfoElementMerchantSerpElementItem()

> **new ProductInfoElementMerchantSerpElementItem**(`data`?): [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

Defined in: main.ts:191038

#### Parameters

##### data?

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md)

#### Returns

[`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21722

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:191013

description of the product

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`description`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#description)

***

### features?

> `optional` **features**: `string`[]

Defined in: main.ts:191022

product features
contains snippets with the description of product features

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`features`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#features)

***

### images?

> `optional` **images**: `string`[]

Defined in: main.ts:191019

product images
contains urls to product images

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`images`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#images)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21720

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`position`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:191009

product_id received in a POST array
ilearn more about the parameter in this help center guide

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`product_id`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#product_id)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21716

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21713

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rank_group`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:191025

product rating 
the popularity rate based on reviews

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rating`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rating)

***

### seller\_reviews\_count?

> `optional` **seller\_reviews\_count**: `number`

Defined in: main.ts:191028

number of seller reviews
number of reviews on the product seller’s account

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`seller_reviews_count`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#seller_reviews_count)

***

### sellers?

> `optional` **sellers**: [`ProductSeller`](ProductSeller.md)[]

Defined in: main.ts:191031

sellers of the product
number of reviews on the product seller’s account

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`sellers`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#sellers)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:191011

title of the product

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`title`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21710

type of element

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`type`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:191016

product url
url of the product on Google Shopping

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`url`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#url)

***

### variations?

> `optional` **variations**: [`ProductVariation`](ProductVariation.md)[]

Defined in: main.ts:191034

variations of the product
contains brief information about different product variations

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`variations`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#variations)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:191043

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:191086

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

Defined in: main.ts:191079

#### Parameters

##### data

`any`

#### Returns

[`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)
