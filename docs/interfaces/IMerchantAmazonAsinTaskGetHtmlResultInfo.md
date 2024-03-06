[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantAmazonAsinTaskGetHtmlResultInfo

# Interface: IMerchantAmazonAsinTaskGetHtmlResultInfo

## Implemented by

- [`MerchantAmazonAsinTaskGetHtmlResultInfo`](../classes/MerchantAmazonAsinTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IMerchantAmazonAsinTaskGetHtmlResultInfo.md#datetime)
- [items](IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items)
- [items\_count](IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items_count)
- [language\_code](IMerchantAmazonAsinTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IMerchantAmazonAsinTaskGetHtmlResultInfo.md#location_code)
- [product\_id](IMerchantAmazonAsinTaskGetHtmlResultInfo.md#product_id)
- [se\_domain](IMerchantAmazonAsinTaskGetHtmlResultInfo.md#se_domain)
- [type](IMerchantAmazonAsinTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:173437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173437)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Defined in

[main.ts:173441](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173441)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:173439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173439)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:173432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173432)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:173430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173430)

___


### product\_id

• `Optional` **product\_id**: `string`

ASIN received in a POST array

#### Defined in

[main.ts:173424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173424)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:173428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173428)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:173426](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173426)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")