[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAmazonAmazonSerpSerpElementItem

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

main.ts:106318

***

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Defined in

main.ts:106349

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:106332

***

### data\_asin?

> `optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Defined in

main.ts:106356

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:106347

***

### description?

> `optional` **description**: `string`

description of the product

#### Defined in

main.ts:106351

***

### domain?

> `optional` **domain**: `string`

Amazon domain

#### Defined in

main.ts:106311

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the product image featured in the results

#### Defined in

main.ts:106320

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Defined in

main.ts:106341

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Defined in

main.ts:106338

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
can take the following values:
left, right

#### Defined in

main.ts:106307

***

### price\_from?

> `optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Defined in

main.ts:106324

***

### price\_to?

> `optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Defined in

main.ts:106328

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:106303

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:106300

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:106344

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:106297

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Defined in

main.ts:106335

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:106313

***

### url?

> `optional` **url**: `string`

URL of the product page

#### Defined in

main.ts:106315

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:106309
