[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IProductInfoElementMerchantSerpElementItem

# Interface: IProductInfoElementMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### description?

> `optional` **description**: `string`

description of the product

#### Defined in

main.ts:183160

***

### features?

> `optional` **features**: `string`[]

product features
contains snippets with the description of product features

#### Defined in

main.ts:183169

***

### images?

> `optional` **images**: `string`[]

product images
contains urls to product images

#### Defined in

main.ts:183166

***

### position?

> `optional` **position**: `string`

alignment of the element on the product specification page
can take the following values:
right, left

#### Defined in

main.ts:183153

***

### product\_id?

> `optional` **product\_id**: `string`

product_id received in a POST array
ilearn more about the parameter in this help center guide

#### Defined in

main.ts:183156

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Defined in

main.ts:183149

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:183146

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating 
the popularity rate based on reviews

#### Defined in

main.ts:183172

***

### seller\_reviews\_count?

> `optional` **seller\_reviews\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Defined in

main.ts:183175

***

### sellers?

> `optional` **sellers**: [`ProductSeller`](../classes/ProductSeller.md)[]

sellers of the product
number of reviews on the product seller’s account

#### Defined in

main.ts:183178

***

### title?

> `optional` **title**: `string`

title of the product

#### Defined in

main.ts:183158

***

### url?

> `optional` **url**: `string`

product url
url of the product on Google Shopping

#### Defined in

main.ts:183163

***

### variations?

> `optional` **variations**: [`ProductVariation`](../classes/ProductVariation.md)[]

variations of the product
contains brief information about different product variations

#### Defined in

main.ts:183181
