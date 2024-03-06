[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBingLocalPackTaskGetHtmlResultInfo

# Interface: ISerpBingLocalPackTaskGetHtmlResultInfo

## Implemented by

- [`SerpBingLocalPackTaskGetHtmlResultInfo`](../classes/SerpBingLocalPackTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpBingLocalPackTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpBingLocalPackTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpBingLocalPackTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpBingLocalPackTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpBingLocalPackTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpBingLocalPackTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpBingLocalPackTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpBingLocalPackTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:56573](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56573)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:56577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56577)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:56575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56575)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:56560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56560)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:56568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56568)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:56566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56566)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:56564](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56564)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:56562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56562)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")