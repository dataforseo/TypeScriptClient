[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantAmazonReviewsTaskGetHtmlResultInfo

# Interface: IMerchantAmazonReviewsTaskGetHtmlResultInfo

## Implemented by

- [`MerchantAmazonReviewsTaskGetHtmlResultInfo`](../classes/MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#datetime)
- [items](IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items)
- [items\_count](IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items_count)
- [language\_code](IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#location_code)
- [product\_id](IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#product_id)
- [se\_domain](IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#se_domain)
- [type](IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:176157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176157)

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Defined in

[main.ts:176161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176161)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:176159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176159)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:176152](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176152)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:176150](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176150)

___

### product\_id

• `Optional` **product\_id**: `string`

ASIN received in a POST array

#### Defined in

[main.ts:176144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176144)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:176148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176148)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:176146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176146)
