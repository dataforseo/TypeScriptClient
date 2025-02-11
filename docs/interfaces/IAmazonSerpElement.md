[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonSerpElement

# Interface: IAmazonSerpElement

Defined in: main.ts:193122

## Indexable

\[`key`: `string`\]: `any`

## Properties

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

Defined in: main.ts:193136

number of product purchases in the past month

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:193148

currency in the ISO format
example:
USD

***

### data\_asin?

> `optional` **data\_asin**: `string`

Defined in: main.ts:193156

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

Defined in: main.ts:193167

delivery information
delivery information including free and fast delivery date ranges

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:193128

Amazon domain

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:193134

URL of the product image featured in the results

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

Defined in: main.ts:193161

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

Defined in: main.ts:193164

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

***

### price\_from?

> `optional` **price\_from**: `number`

Defined in: main.ts:193140

the regular price of a product
example:
49.98

***

### price\_to?

> `optional` **price\_to**: `number`

Defined in: main.ts:193144

the upper limit of the product price range
example:
384.99

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:193158

product rating info

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

Defined in: main.ts:193151

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:193130

product title

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:193124

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:193132

the URL of the product page

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:193126

the XPath of the element
