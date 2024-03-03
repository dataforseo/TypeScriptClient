[Documentation](../README.md) / [Exports](../modules.md) / IProductInfoElementMerchantSerpElementItem

# Interface: IProductInfoElementMerchantSerpElementItem

## Hierarchy

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

  ↳ **`IProductInfoElementMerchantSerpElementItem`**

## Implemented by

- [`ProductInfoElementMerchantSerpElementItem`](../classes/ProductInfoElementMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [description](IProductInfoElementMerchantSerpElementItem.md#description)
- [features](IProductInfoElementMerchantSerpElementItem.md#features)
- [images](IProductInfoElementMerchantSerpElementItem.md#images)
- [position](IProductInfoElementMerchantSerpElementItem.md#position)
- [product\_id](IProductInfoElementMerchantSerpElementItem.md#product_id)
- [rank\_absolute](IProductInfoElementMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](IProductInfoElementMerchantSerpElementItem.md#rank_group)
- [rating](IProductInfoElementMerchantSerpElementItem.md#rating)
- [seller\_reviews\_count](IProductInfoElementMerchantSerpElementItem.md#seller_reviews_count)
- [sellers](IProductInfoElementMerchantSerpElementItem.md#sellers)
- [title](IProductInfoElementMerchantSerpElementItem.md#title)
- [url](IProductInfoElementMerchantSerpElementItem.md#url)
- [variations](IProductInfoElementMerchantSerpElementItem.md#variations)

## Properties

### description

• `Optional` **description**: `string`

description of the product

#### Defined in

main.ts:169413

___

### features

• `Optional` **features**: `string`[]

product features
contains snippets with the description of product features

#### Defined in

main.ts:169422

___

### images

• `Optional` **images**: `string`[]

product images
contains urls to product images

#### Defined in

main.ts:169419

___

### position

• `Optional` **position**: `string`

alignment of the element on the product specification page
can take the following values:
right, left

#### Defined in

main.ts:169406

___

### product\_id

• `Optional` **product\_id**: `string`

product_id received in a POST array
ilearn more about the parameter in this help center guide

#### Defined in

main.ts:169409

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Defined in

main.ts:169402

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:169399

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating 
the popularity rate based on reviews

#### Defined in

main.ts:169425

___

### seller\_reviews\_count

• `Optional` **seller\_reviews\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Defined in

main.ts:169428

___

### sellers

• `Optional` **sellers**: [`ProductSeller`](../classes/ProductSeller.md)[]

sellers of the product
number of reviews on the product seller’s account

#### Defined in

main.ts:169431

___

### title

• `Optional` **title**: `string`

title of the product

#### Defined in

main.ts:169411

___

### url

• `Optional` **url**: `string`

product url
url of the product on Google Shopping

#### Defined in

main.ts:169416

___

### variations

• `Optional` **variations**: [`ProductVariation`](../classes/ProductVariation.md)[]

variations of the product
contains brief information about different product variations

#### Defined in

main.ts:169434
