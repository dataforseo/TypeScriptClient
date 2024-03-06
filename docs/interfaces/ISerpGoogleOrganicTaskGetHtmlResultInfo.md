[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleOrganicTaskGetHtmlResultInfo

# Interface: ISerpGoogleOrganicTaskGetHtmlResultInfo

## Implemented by

- [`SerpGoogleOrganicTaskGetHtmlResultInfo`](../classes/SerpGoogleOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpGoogleOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpGoogleOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpGoogleOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpGoogleOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpGoogleOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpGoogleOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpGoogleOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpGoogleOrganicTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:36447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36447)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:36451](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36451)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:36449](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36449)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:36434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36434)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:36442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36442)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:36440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36440)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:36438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36438)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:36436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36436)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")