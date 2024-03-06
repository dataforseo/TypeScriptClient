[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleImagesTaskGetHtmlResultInfo

# Interface: ISerpGoogleImagesTaskGetHtmlResultInfo

## Implemented by

- [`SerpGoogleImagesTaskGetHtmlResultInfo`](../classes/SerpGoogleImagesTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpGoogleImagesTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpGoogleImagesTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpGoogleImagesTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpGoogleImagesTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpGoogleImagesTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpGoogleImagesTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpGoogleImagesTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpGoogleImagesTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:46555](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46555)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:46559](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46559)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:46557](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46557)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:46542](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46542)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:46550](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46550)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:46548](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46548)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:46546](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46546)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:46544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46544)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")