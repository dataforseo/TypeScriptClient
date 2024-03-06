[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantGoogleSellersTaskGetHtmlResultInfo

# Interface: IMerchantGoogleSellersTaskGetHtmlResultInfo

## Implemented by

- [`MerchantGoogleSellersTaskGetHtmlResultInfo`](../classes/MerchantGoogleSellersTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IMerchantGoogleSellersTaskGetHtmlResultInfo.md#datetime)
- [items](IMerchantGoogleSellersTaskGetHtmlResultInfo.md#items)
- [items\_count](IMerchantGoogleSellersTaskGetHtmlResultInfo.md#items_count)
- [language\_code](IMerchantGoogleSellersTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IMerchantGoogleSellersTaskGetHtmlResultInfo.md#location_code)
- [product\_id](IMerchantGoogleSellersTaskGetHtmlResultInfo.md#product_id)
- [se\_domain](IMerchantGoogleSellersTaskGetHtmlResultInfo.md#se_domain)
- [type](IMerchantGoogleSellersTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:167134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167134)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found on Google Shopping

#### Defined in

[main.ts:167138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167138)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:167136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167136)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:167129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167129)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:167127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167127)

___


### product\_id

• `Optional` **product\_id**: `string`

product_id received in a POST array

#### Defined in

[main.ts:167121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167121)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:167125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167125)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:167123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167123)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")