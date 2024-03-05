[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBingOrganicLiveHtmlResultInfo

# Interface: ISerpBingOrganicLiveHtmlResultInfo

## Implemented by

- [`SerpBingOrganicLiveHtmlResultInfo`](../classes/SerpBingOrganicLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpBingOrganicLiveHtmlResultInfo.md#datetime)
- [items](ISerpBingOrganicLiveHtmlResultInfo.md#items)
- [items\_count](ISerpBingOrganicLiveHtmlResultInfo.md#items_count)
- [keyword](ISerpBingOrganicLiveHtmlResultInfo.md#keyword)
- [language\_code](ISerpBingOrganicLiveHtmlResultInfo.md#language_code)
- [location\_code](ISerpBingOrganicLiveHtmlResultInfo.md#location_code)
- [se\_domain](ISerpBingOrganicLiveHtmlResultInfo.md#se_domain)
- [type](ISerpBingOrganicLiveHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:55567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55567)

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:55571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55571)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:55569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55569)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:55554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55554)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:55562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55562)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:55560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55560)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:55558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55558)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:55556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55556)
