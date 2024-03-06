[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpSeznamOrganicTaskGetHtmlResultInfo

# Interface: ISerpSeznamOrganicTaskGetHtmlResultInfo

## Implemented by

- [`SerpSeznamOrganicTaskGetHtmlResultInfo`](../classes/SerpSeznamOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpSeznamOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpSeznamOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpSeznamOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpSeznamOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpSeznamOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpSeznamOrganicTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:70743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70743)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:70747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70747)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:70745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70745)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:70730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70730)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:70738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70738)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:70736](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70736)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:70734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70734)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:70732](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70732)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")