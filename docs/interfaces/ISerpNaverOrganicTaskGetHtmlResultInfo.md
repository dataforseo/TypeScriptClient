[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpNaverOrganicTaskGetHtmlResultInfo

# Interface: ISerpNaverOrganicTaskGetHtmlResultInfo

## Implemented by

- [`SerpNaverOrganicTaskGetHtmlResultInfo`](../classes/SerpNaverOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpNaverOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpNaverOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpNaverOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpNaverOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpNaverOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpNaverOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpNaverOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpNaverOrganicTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:68633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68633)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:68637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68637)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:68635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68635)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:68620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68620)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:68628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68628)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:68626](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68626)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:68624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68624)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:68622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68622)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")