**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonAmazonPaidSerpElementItem

# Interface: IAmazonAmazonPaidSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### bought\_past\_month?

> **`optional`** **bought\_past\_month**: `number`

number of product purchases in the past month

#### Source

main.ts:178562

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Source

main.ts:178574

***

### data\_asin?

> **`optional`** **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Source

main.ts:178582

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Source

main.ts:178593

***

### domain?

> **`optional`** **domain**: `string`

Amazon domain

#### Source

main.ts:178554

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the product image featured in the results

#### Source

main.ts:178560

***

### is\_amazon\_choice?

> **`optional`** **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Source

main.ts:178587

***

### is\_best\_seller?

> **`optional`** **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Source

main.ts:178590

***

### price\_from?

> **`optional`** **price\_from**: `number`

the regular price of a product
example:
49.98

#### Source

main.ts:178566

***

### price\_to?

> **`optional`** **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Source

main.ts:178570

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Source

main.ts:178550

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:178547

***

### rating?

> **`optional`** **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating info

#### Source

main.ts:178584

***

### special\_offers?

> **`optional`** **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Source

main.ts:178577

***

### title?

> **`optional`** **title**: `string`

product title

#### Source

main.ts:178556

***

### url?

> **`optional`** **url**: `string`

the URL of the product page

#### Source

main.ts:178558

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:178552
