[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantAmazonSellersTaskGetHtmlResultInfo

# Interface: IMerchantAmazonSellersTaskGetHtmlResultInfo

## Implemented by

- [`MerchantAmazonSellersTaskGetHtmlResultInfo`](../classes/MerchantAmazonSellersTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IMerchantAmazonSellersTaskGetHtmlResultInfo.md#asin)
- [datetime](IMerchantAmazonSellersTaskGetHtmlResultInfo.md#datetime)
- [items](IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items)
- [items\_count](IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items_count)
- [language\_code](IMerchantAmazonSellersTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IMerchantAmazonSellersTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](IMerchantAmazonSellersTaskGetHtmlResultInfo.md#se_domain)
- [type](IMerchantAmazonSellersTaskGetHtmlResultInfo.md#type)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN received in a POST array

#### Defined in

[main.ts:174722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174722)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:174735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174735)

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found on Amazon

#### Defined in

[main.ts:174739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174739)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:174737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174737)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:174730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174730)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:174728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174728)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:174726](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174726)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:174724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174724)
