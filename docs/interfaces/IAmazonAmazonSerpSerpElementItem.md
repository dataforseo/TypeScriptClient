[dataforseo-client](../README.md) / [Exports](../modules.md) / IAmazonAmazonSerpSerpElementItem

# Interface: IAmazonAmazonSerpSerpElementItem

## Hierarchy

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

  ↳ **`IAmazonAmazonSerpSerpElementItem`**

## Implemented by

- [`AmazonAmazonSerpSerpElementItem`](../classes/AmazonAmazonSerpSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IAmazonAmazonSerpSerpElementItem.md#asin)
- [bought\_past\_month](IAmazonAmazonSerpSerpElementItem.md#bought_past_month)
- [currency](IAmazonAmazonSerpSerpElementItem.md#currency)
- [data\_asin](IAmazonAmazonSerpSerpElementItem.md#data_asin)
- [delivery\_info](IAmazonAmazonSerpSerpElementItem.md#delivery_info)
- [description](IAmazonAmazonSerpSerpElementItem.md#description)
- [domain](IAmazonAmazonSerpSerpElementItem.md#domain)
- [image\_url](IAmazonAmazonSerpSerpElementItem.md#image_url)
- [is\_amazon\_choice](IAmazonAmazonSerpSerpElementItem.md#is_amazon_choice)
- [is\_best\_seller](IAmazonAmazonSerpSerpElementItem.md#is_best_seller)
- [position](IAmazonAmazonSerpSerpElementItem.md#position)
- [price\_from](IAmazonAmazonSerpSerpElementItem.md#price_from)
- [price\_to](IAmazonAmazonSerpSerpElementItem.md#price_to)
- [rank\_absolute](IAmazonAmazonSerpSerpElementItem.md#rank_absolute)
- [rank\_group](IAmazonAmazonSerpSerpElementItem.md#rank_group)
- [rating](IAmazonAmazonSerpSerpElementItem.md#rating)
- [se\_type](IAmazonAmazonSerpSerpElementItem.md#se_type)
- [special\_offers](IAmazonAmazonSerpSerpElementItem.md#special_offers)
- [title](IAmazonAmazonSerpSerpElementItem.md#title)
- [url](IAmazonAmazonSerpSerpElementItem.md#url)
- [xpath](IAmazonAmazonSerpSerpElementItem.md#xpath)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN of the product
learn more about ASIN in this help center guide

#### Defined in

[main.ts:99993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99993)

___

### bought\_past\_month

• `Optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Defined in

[main.ts:100024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100024)

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

[main.ts:100007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100007)

___

### data\_asin

• `Optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Defined in

[main.ts:100029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100029)

___

### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

[main.ts:100022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100022)

___

### description

• `Optional` **description**: `string`

description of the product

#### Defined in

[main.ts:99990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99990)

___

### domain

• `Optional` **domain**: `string`

Amazon domain

#### Defined in

[main.ts:99984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99984)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the product image featured in the results

#### Defined in

[main.ts:99995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99995)

___

### is\_amazon\_choice

• `Optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Defined in

[main.ts:100016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100016)

___

### is\_best\_seller

• `Optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Defined in

[main.ts:100013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100013)

___

### position

• `Optional` **position**: `string`

the alignment of the element in Amazon SERP
can take the following values:
left, right

#### Defined in

[main.ts:99980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99980)

___

### price\_from

• `Optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Defined in

[main.ts:99999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99999)

___

### price\_to

• `Optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Defined in

[main.ts:100003](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100003)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:99976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99976)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:99973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99973)

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:100019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100019)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:99970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99970)

___

### special\_offers

• `Optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Defined in

[main.ts:100010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100010)

___

### title

• `Optional` **title**: `string`

product title

#### Defined in

[main.ts:99986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99986)

___

### url

• `Optional` **url**: `string`

URL of the product page

#### Defined in

[main.ts:99988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99988)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:99982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99982)
