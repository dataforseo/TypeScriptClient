[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonAmazonSerpSerpElementItem

# Interface: IAmazonAmazonSerpSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

ASIN of the product
learn more about ASIN in this help center guide

#### Defined in

main.ts:113117

***

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Defined in

main.ts:113148

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:113131

***

### data\_asin?

> `optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Defined in

main.ts:113155

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:113146

***

### description?

> `optional` **description**: `string`

description of the product

#### Defined in

main.ts:113150

***

### domain?

> `optional` **domain**: `string`

Amazon domain

#### Defined in

main.ts:113110

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the product image featured in the results

#### Defined in

main.ts:113119

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Defined in

main.ts:113140

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Defined in

main.ts:113137

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
can take the following values:
left, right

#### Defined in

main.ts:113108

***

### price\_from?

> `optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Defined in

main.ts:113123

***

### price\_to?

> `optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Defined in

main.ts:113127

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_absolute`](IBaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:23310

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_group`](IBaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:23307

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:113143

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:113104

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Defined in

main.ts:113134

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:113112

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`type`](IBaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:23304

***

### url?

> `optional` **url**: `string`

URL of the product page

#### Defined in

main.ts:113114

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`xpath`](IBaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:23312
