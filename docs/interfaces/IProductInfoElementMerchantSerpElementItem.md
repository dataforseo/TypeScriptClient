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

main.ts:178882

***

### features?

> `optional` **features**: `string`[]

product features
contains snippets with the description of product features

#### Defined in

main.ts:178891

***

### images?

> `optional` **images**: `string`[]

product images
contains urls to product images

#### Defined in

main.ts:178888

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`position`](IBaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21130

***

### product\_id?

> `optional` **product\_id**: `string`

product_id received in a POST array
ilearn more about the parameter in this help center guide

#### Defined in

main.ts:178878

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_absolute`](IBaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21126

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_group`](IBaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21123

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating 
the popularity rate based on reviews

#### Defined in

main.ts:178894

***

### seller\_reviews\_count?

> `optional` **seller\_reviews\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Defined in

main.ts:178897

***

### sellers?

> `optional` **sellers**: [`ProductSeller`](../classes/ProductSeller.md)[]

sellers of the product
number of reviews on the product seller’s account

#### Defined in

main.ts:178900

***

### title?

> `optional` **title**: `string`

title of the product

#### Defined in

main.ts:178880

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`type`](IBaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21120

***

### url?

> `optional` **url**: `string`

product url
url of the product on Google Shopping

#### Defined in

main.ts:178885

***

### variations?

> `optional` **variations**: [`ProductVariation`](../classes/ProductVariation.md)[]

variations of the product
contains brief information about different product variations

#### Defined in

main.ts:178903
