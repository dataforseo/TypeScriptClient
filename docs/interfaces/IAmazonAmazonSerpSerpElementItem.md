**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonAmazonSerpSerpElementItem

# Interface: IAmazonAmazonSerpSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> **`optional`** **asin**: `string`

ASIN of the product
learn more about ASIN in this help center guide

#### Source

main.ts:102370

***

### bought\_past\_month?

> **`optional`** **bought\_past\_month**: `number`

number of product purchases in the past month

#### Source

main.ts:102401

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Source

main.ts:102384

***

### data\_asin?

> **`optional`** **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Source

main.ts:102406

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Source

main.ts:102399

***

### description?

> **`optional`** **description**: `string`

description of the product

#### Source

main.ts:102367

***

### domain?

> **`optional`** **domain**: `string`

Amazon domain

#### Source

main.ts:102361

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the product image featured in the results

#### Source

main.ts:102372

***

### is\_amazon\_choice?

> **`optional`** **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Source

main.ts:102393

***

### is\_best\_seller?

> **`optional`** **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Source

main.ts:102390

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in Amazon SERP
can take the following values:
left, right

#### Source

main.ts:102357

***

### price\_from?

> **`optional`** **price\_from**: `number`

the regular price of a product
example:
49.98

#### Source

main.ts:102376

***

### price\_to?

> **`optional`** **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Source

main.ts:102380

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Source

main.ts:102353

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:102350

***

### rating?

> **`optional`** **rating**: [`RatingElement`](../classes/RatingElement.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:102396

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:102347

***

### special\_offers?

> **`optional`** **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Source

main.ts:102387

***

### title?

> **`optional`** **title**: `string`

product title

#### Source

main.ts:102363

***

### url?

> **`optional`** **url**: `string`

URL of the product page

#### Source

main.ts:102365

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:102359
