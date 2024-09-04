[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAmazonSerpElement

# Interface: IAmazonSerpElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Defined in

main.ts:180541

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:180553

***

### data\_asin?

> `optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Defined in

main.ts:180561

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:180572

***

### domain?

> `optional` **domain**: `string`

Amazon domain

#### Defined in

main.ts:180533

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the product image featured in the results

#### Defined in

main.ts:180539

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Defined in

main.ts:180566

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Defined in

main.ts:180569

***

### price\_from?

> `optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Defined in

main.ts:180545

***

### price\_to?

> `optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Defined in

main.ts:180549

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating info

#### Defined in

main.ts:180563

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Defined in

main.ts:180556

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:180535

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:180529

***

### url?

> `optional` **url**: `string`

the URL of the product page

#### Defined in

main.ts:180537

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:180531
