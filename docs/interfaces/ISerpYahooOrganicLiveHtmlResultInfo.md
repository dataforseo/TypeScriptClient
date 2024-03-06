[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicLiveHtmlResultInfo

# Interface: ISerpYahooOrganicLiveHtmlResultInfo

## Implemented by

- [`SerpYahooOrganicLiveHtmlResultInfo`](../classes/SerpYahooOrganicLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpYahooOrganicLiveHtmlResultInfo.md#datetime)
- [items](ISerpYahooOrganicLiveHtmlResultInfo.md#items)
- [items\_count](ISerpYahooOrganicLiveHtmlResultInfo.md#items_count)
- [keyword](ISerpYahooOrganicLiveHtmlResultInfo.md#keyword)
- [language\_code](ISerpYahooOrganicLiveHtmlResultInfo.md#language_code)
- [location\_code](ISerpYahooOrganicLiveHtmlResultInfo.md#location_code)
- [se\_domain](ISerpYahooOrganicLiveHtmlResultInfo.md#se_domain)
- [type](ISerpYahooOrganicLiveHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:65081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65081)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:65085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65085)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:65083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65083)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:65068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65068)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:65076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65076)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:65074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65074)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:65072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65072)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:65070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65070)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")