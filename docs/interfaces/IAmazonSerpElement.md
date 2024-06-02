**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonSerpElement

# Interface: IAmazonSerpElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### bought\_past\_month?

> **`optional`** **bought\_past\_month**: `number`

number of product purchases in the past month

#### Source

main.ts:178736

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Source

main.ts:178748

***

### data\_asin?

> **`optional`** **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Source

main.ts:178756

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Source

main.ts:178767

***

### domain?

> **`optional`** **domain**: `string`

Amazon domain

#### Source

main.ts:178728

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the product image featured in the results

#### Source

main.ts:178734

***

### is\_amazon\_choice?

> **`optional`** **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Source

main.ts:178761

***

### is\_best\_seller?

> **`optional`** **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Source

main.ts:178764

***

### price\_from?

> **`optional`** **price\_from**: `number`

the regular price of a product
example:
49.98

#### Source

main.ts:178740

***

### price\_to?

> **`optional`** **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Source

main.ts:178744

***

### rating?

> **`optional`** **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating info

#### Source

main.ts:178758

***

### special\_offers?

> **`optional`** **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Source

main.ts:178751

***

### title?

> **`optional`** **title**: `string`

product title

#### Source

main.ts:178730

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:178724

***

### url?

> **`optional`** **url**: `string`

the URL of the product page

#### Source

main.ts:178732

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:178726
