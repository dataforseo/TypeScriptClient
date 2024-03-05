[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBaiduOrganicTaskGetHtmlResultInfo

# Interface: ISerpBaiduOrganicTaskGetHtmlResultInfo

## Implemented by

- [`SerpBaiduOrganicTaskGetHtmlResultInfo`](../classes/SerpBaiduOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpBaiduOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpBaiduOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpBaiduOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpBaiduOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpBaiduOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpBaiduOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpBaiduOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpBaiduOrganicTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:67359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67359)

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:67363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67363)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:67361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67361)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:67346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67346)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:67354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67354)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:67352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67352)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:67350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67350)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:67348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67348)
