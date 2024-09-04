[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ProductInfoElementMerchantSerpElementItem

# Class: ProductInfoElementMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInfoElementMerchantSerpElementItem()

> **new ProductInfoElementMerchantSerpElementItem**(`data`?): [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md)

#### Returns

[`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Defined in

main.ts:178790

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21039

***

### description?

> `optional` **description**: `string`

description of the product

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`description`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#description)

#### Defined in

main.ts:178765

***

### features?

> `optional` **features**: `string`[]

product features
contains snippets with the description of product features

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`features`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#features)

#### Defined in

main.ts:178774

***

### images?

> `optional` **images**: `string`[]

product images
contains urls to product images

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`images`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#images)

#### Defined in

main.ts:178771

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`position`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21037

***

### product\_id?

> `optional` **product\_id**: `string`

product_id received in a POST array
ilearn more about the parameter in this help center guide

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`product_id`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#product_id)

#### Defined in

main.ts:178761

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21033

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rank_group`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21030

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

product rating 
the popularity rate based on reviews

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rating`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rating)

#### Defined in

main.ts:178777

***

### seller\_reviews\_count?

> `optional` **seller\_reviews\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`seller_reviews_count`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#seller_reviews_count)

#### Defined in

main.ts:178780

***

### sellers?

> `optional` **sellers**: [`ProductSeller`](ProductSeller.md)[]

sellers of the product
number of reviews on the product seller’s account

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`sellers`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#sellers)

#### Defined in

main.ts:178783

***

### title?

> `optional` **title**: `string`

title of the product

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`title`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#title)

#### Defined in

main.ts:178763

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`type`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21027

***

### url?

> `optional` **url**: `string`

product url
url of the product on Google Shopping

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`url`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#url)

#### Defined in

main.ts:178768

***

### variations?

> `optional` **variations**: [`ProductVariation`](ProductVariation.md)[]

variations of the product
contains brief information about different product variations

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`variations`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#variations)

#### Defined in

main.ts:178786

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Defined in

main.ts:178795

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

main.ts:178838

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

main.ts:178831
