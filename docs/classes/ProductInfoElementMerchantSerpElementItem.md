**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new ProductInfoElementMerchantSerpElementItem(data)

> **new ProductInfoElementMerchantSerpElementItem**(`data`?): [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md)

#### Returns

[`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Source

main.ts:178279

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Source

main.ts:20516

***

### description?

> **`optional`** **description**: `string`

description of the product

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`description`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#description)

#### Source

main.ts:178254

***

### features?

> **`optional`** **features**: `string`[]

product features
contains snippets with the description of product features

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`features`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#features)

#### Source

main.ts:178263

***

### images?

> **`optional`** **images**: `string`[]

product images
contains urls to product images

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`images`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#images)

#### Source

main.ts:178260

***

### position?

> **`optional`** **position**: `string`

alignment of the element on the product specification page
can take the following values:
right, left

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`position`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#position)

#### Source

main.ts:178247

***

### product\_id?

> **`optional`** **product\_id**: `string`

product_id received in a POST array
ilearn more about the parameter in this help center guide

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`product_id`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#product_id)

#### Source

main.ts:178250

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_absolute)

#### Source

main.ts:178243

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rank_group`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_group)

#### Source

main.ts:178240

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

product rating 
the popularity rate based on reviews

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`rating`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rating)

#### Source

main.ts:178266

***

### seller\_reviews\_count?

> **`optional`** **seller\_reviews\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`seller_reviews_count`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#seller_reviews_count)

#### Source

main.ts:178269

***

### sellers?

> **`optional`** **sellers**: [`ProductSeller`](ProductSeller.md)[]

sellers of the product
number of reviews on the product seller’s account

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`sellers`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#sellers)

#### Source

main.ts:178272

***

### title?

> **`optional`** **title**: `string`

title of the product

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`title`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#title)

#### Source

main.ts:178252

***

### url?

> **`optional`** **url**: `string`

product url
url of the product on Google Shopping

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`url`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#url)

#### Source

main.ts:178257

***

### variations?

> **`optional`** **variations**: [`ProductVariation`](ProductVariation.md)[]

variations of the product
contains brief information about different product variations

#### Implementation of

[`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[`variations`](../interfaces/IProductInfoElementMerchantSerpElementItem.md#variations)

#### Source

main.ts:178275

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Source

main.ts:178284

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Source

main.ts:178330

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Source

main.ts:178323
