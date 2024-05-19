**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IProductInfoElementMerchantSerpElementItem

# Interface: IProductInfoElementMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### description?

> **`optional`** **description**: `string`

description of the product

#### Source

main.ts:177102

***

### features?

> **`optional`** **features**: `string`[]

product features
contains snippets with the description of product features

#### Source

main.ts:177111

***

### images?

> **`optional`** **images**: `string`[]

product images
contains urls to product images

#### Source

main.ts:177108

***

### position?

> **`optional`** **position**: `string`

alignment of the element on the product specification page
can take the following values:
right, left

#### Source

main.ts:177095

***

### product\_id?

> **`optional`** **product\_id**: `string`

product_id received in a POST array
ilearn more about the parameter in this help center guide

#### Source

main.ts:177098

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Source

main.ts:177091

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:177088

***

### rating?

> **`optional`** **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating 
the popularity rate based on reviews

#### Source

main.ts:177114

***

### seller\_reviews\_count?

> **`optional`** **seller\_reviews\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Source

main.ts:177117

***

### sellers?

> **`optional`** **sellers**: [`ProductSeller`](../classes/ProductSeller.md)[]

sellers of the product
number of reviews on the product seller’s account

#### Source

main.ts:177120

***

### title?

> **`optional`** **title**: `string`

title of the product

#### Source

main.ts:177100

***

### url?

> **`optional`** **url**: `string`

product url
url of the product on Google Shopping

#### Source

main.ts:177105

***

### variations?

> **`optional`** **variations**: [`ProductVariation`](../classes/ProductVariation.md)[]

variations of the product
contains brief information about different product variations

#### Source

main.ts:177123
