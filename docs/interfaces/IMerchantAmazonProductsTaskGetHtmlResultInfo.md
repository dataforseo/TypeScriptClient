[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantAmazonProductsTaskGetHtmlResultInfo

# Interface: IMerchantAmazonProductsTaskGetHtmlResultInfo

## Implemented by

- [`MerchantAmazonProductsTaskGetHtmlResultInfo`](../classes/MerchantAmazonProductsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IMerchantAmazonProductsTaskGetHtmlResultInfo.md#datetime)
- [items](IMerchantAmazonProductsTaskGetHtmlResultInfo.md#items)
- [items\_count](IMerchantAmazonProductsTaskGetHtmlResultInfo.md#items_count)
- [keyword](IMerchantAmazonProductsTaskGetHtmlResultInfo.md#keyword)
- [language\_code](IMerchantAmazonProductsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IMerchantAmazonProductsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](IMerchantAmazonProductsTaskGetHtmlResultInfo.md#se_domain)
- [type](IMerchantAmazonProductsTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:171647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171647)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Defined in

[main.ts:171651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171651)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:171649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171649)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:171634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171634)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:171642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171642)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:171640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171640)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:171638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171638)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:171636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171636)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")