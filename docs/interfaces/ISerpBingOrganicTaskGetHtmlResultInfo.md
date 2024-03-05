[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBingOrganicTaskGetHtmlResultInfo

# Interface: ISerpBingOrganicTaskGetHtmlResultInfo

## Implemented by

- [`SerpBingOrganicTaskGetHtmlResultInfo`](../classes/SerpBingOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpBingOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpBingOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpBingOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpBingOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpBingOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpBingOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpBingOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpBingOrganicTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:54829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54829)

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:54833](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54833)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:54831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54831)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:54816](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54816)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:54824](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54824)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:54822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54822)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:54820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54820)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:54818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54818)
