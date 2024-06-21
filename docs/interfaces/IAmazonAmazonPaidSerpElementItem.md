**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonAmazonPaidSerpElementItem

# Interface: IAmazonAmazonPaidSerpElementItem

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

main.ts:104705

***

### bought\_past\_month?

> **`optional`** **bought\_past\_month**: `number`

number of product purchases in the past month

#### Source

main.ts:104736

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Source

main.ts:104719

***

### data\_asin?

> **`optional`** **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Source

main.ts:104741

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Source

main.ts:104734

***

### domain?

> **`optional`** **domain**: `string`

Amazon domain

#### Source

main.ts:104698

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the product image featured in the results

#### Source

main.ts:104707

***

### is\_amazon\_choice?

> **`optional`** **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Source

main.ts:104728

***

### is\_best\_seller?

> **`optional`** **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Source

main.ts:104725

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in Amazon SERP
can take the following values:
left, right

#### Source

main.ts:104694

***

### price\_from?

> **`optional`** **price\_from**: `number`

the regular price of a product
example:
49.98

#### Source

main.ts:104711

***

### price\_to?

> **`optional`** **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Source

main.ts:104715

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Source

main.ts:104690

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:104687

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:104731

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:104684

***

### special\_offers?

> **`optional`** **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Source

main.ts:104722

***

### title?

> **`optional`** **title**: `string`

product title

#### Source

main.ts:104700

***

### url?

> **`optional`** **url**: `string`

URL of the product page

#### Source

main.ts:104702

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:104696
