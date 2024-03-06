[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleNewsTaskGetHtmlResultInfo

# Interface: ISerpGoogleNewsTaskGetHtmlResultInfo

## Implemented by

- [`SerpGoogleNewsTaskGetHtmlResultInfo`](../classes/SerpGoogleNewsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpGoogleNewsTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpGoogleNewsTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpGoogleNewsTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpGoogleNewsTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpGoogleNewsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpGoogleNewsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpGoogleNewsTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpGoogleNewsTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:42975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42975)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:42979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42979)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:42977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42977)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:42962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42962)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:42970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42970)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:42968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42968)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:42966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42966)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:42964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42964)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")