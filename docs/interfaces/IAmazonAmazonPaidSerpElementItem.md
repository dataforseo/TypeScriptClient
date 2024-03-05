[dataforseo-client](../README.md) / [Exports](../modules.md) / IAmazonAmazonPaidSerpElementItem

# Interface: IAmazonAmazonPaidSerpElementItem

## Hierarchy

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

  ↳ **`IAmazonAmazonPaidSerpElementItem`**

## Implemented by

- [`AmazonAmazonPaidSerpElementItem`](../classes/AmazonAmazonPaidSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [bought\_past\_month](IAmazonAmazonPaidSerpElementItem.md#bought_past_month)
- [currency](IAmazonAmazonPaidSerpElementItem.md#currency)
- [data\_asin](IAmazonAmazonPaidSerpElementItem.md#data_asin)
- [delivery\_info](IAmazonAmazonPaidSerpElementItem.md#delivery_info)
- [domain](IAmazonAmazonPaidSerpElementItem.md#domain)
- [image\_url](IAmazonAmazonPaidSerpElementItem.md#image_url)
- [is\_amazon\_choice](IAmazonAmazonPaidSerpElementItem.md#is_amazon_choice)
- [is\_best\_seller](IAmazonAmazonPaidSerpElementItem.md#is_best_seller)
- [price\_from](IAmazonAmazonPaidSerpElementItem.md#price_from)
- [price\_to](IAmazonAmazonPaidSerpElementItem.md#price_to)
- [rank\_absolute](IAmazonAmazonPaidSerpElementItem.md#rank_absolute)
- [rank\_group](IAmazonAmazonPaidSerpElementItem.md#rank_group)
- [rating](IAmazonAmazonPaidSerpElementItem.md#rating)
- [special\_offers](IAmazonAmazonPaidSerpElementItem.md#special_offers)
- [title](IAmazonAmazonPaidSerpElementItem.md#title)
- [url](IAmazonAmazonPaidSerpElementItem.md#url)
- [xpath](IAmazonAmazonPaidSerpElementItem.md#xpath)

## Properties

### bought\_past\_month

• `Optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Defined in

[main.ts:170800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170800)

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

[main.ts:170812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170812)

___

### data\_asin

• `Optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Defined in

[main.ts:170820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170820)

___

### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

[main.ts:170831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170831)

___

### domain

• `Optional` **domain**: `string`

Amazon domain

#### Defined in

[main.ts:170792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170792)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the product image featured in the results

#### Defined in

[main.ts:170798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170798)

___

### is\_amazon\_choice

• `Optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Defined in

[main.ts:170825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170825)

___

### is\_best\_seller

• `Optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Defined in

[main.ts:170828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170828)

___

### price\_from

• `Optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Defined in

[main.ts:170804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170804)

___

### price\_to

• `Optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Defined in

[main.ts:170808](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170808)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Defined in

[main.ts:170788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170788)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:170785](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170785)

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating info

#### Defined in

[main.ts:170822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170822)

___

### special\_offers

• `Optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Defined in

[main.ts:170815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170815)

___

### title

• `Optional` **title**: `string`

product title

#### Defined in

[main.ts:170794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170794)

___

### url

• `Optional` **url**: `string`

the URL of the product page

#### Defined in

[main.ts:170796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170796)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:170790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170790)
