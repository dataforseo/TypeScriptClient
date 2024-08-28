[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ProductInfoElementMerchantSerpElementItem

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

main.ts:183052

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21025

***

### description?

> `optional` **description**: `string`

description of the product

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`description`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#description)

#### Defined in

main.ts:183027

***

### features?

> `optional` **features**: `string`[]

product features
contains snippets with the description of product features

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`features`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#features)

#### Defined in

main.ts:183036

***

### images?

> `optional` **images**: `string`[]

product images
contains urls to product images

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`images`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#images)

#### Defined in

main.ts:183033

***

### position?

> `optional` **position**: `string`

alignment of the element on the product specification page
can take the following values:
right, left

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`position`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#position)

#### Defined in

main.ts:183020

***

### product\_id?

> `optional` **product\_id**: `string`

product_id received in a POST array
ilearn more about the parameter in this help center guide

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`product_id`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#product_id)

#### Defined in

main.ts:183023

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:183016

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rank_group`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:183013

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

product rating 
the popularity rate based on reviews

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rating`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rating)

#### Defined in

main.ts:183039

***

### seller\_reviews\_count?

> `optional` **seller\_reviews\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`seller_reviews_count`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#seller_reviews_count)

#### Defined in

main.ts:183042

***

### sellers?

> `optional` **sellers**: [`ProductSeller`](ProductSeller.md)[]

sellers of the product
number of reviews on the product seller’s account

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`sellers`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#sellers)

#### Defined in

main.ts:183045

***

### title?

> `optional` **title**: `string`

title of the product

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`title`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#title)

#### Defined in

main.ts:183025

***

### url?

> `optional` **url**: `string`

product url
url of the product on Google Shopping

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`url`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#url)

#### Defined in

main.ts:183030

***

### variations?

> `optional` **variations**: [`ProductVariation`](ProductVariation.md)[]

variations of the product
contains brief information about different product variations

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`variations`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#variations)

#### Defined in

main.ts:183048

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

main.ts:183057

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

main.ts:183103

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

main.ts:183096
