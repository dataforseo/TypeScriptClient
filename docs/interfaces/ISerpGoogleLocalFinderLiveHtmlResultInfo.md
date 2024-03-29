[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleLocalFinderLiveHtmlResultInfo

# Interface: ISerpGoogleLocalFinderLiveHtmlResultInfo

## Implemented by

- [`SerpGoogleLocalFinderLiveHtmlResultInfo`](../classes/SerpGoogleLocalFinderLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpGoogleLocalFinderLiveHtmlResultInfo.md#datetime)
- [items](ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items)
- [items\_count](ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items_count)
- [keyword](ISerpGoogleLocalFinderLiveHtmlResultInfo.md#keyword)
- [language\_code](ISerpGoogleLocalFinderLiveHtmlResultInfo.md#language_code)
- [location\_code](ISerpGoogleLocalFinderLiveHtmlResultInfo.md#location_code)
- [se\_domain](ISerpGoogleLocalFinderLiveHtmlResultInfo.md#se_domain)
- [type](ISerpGoogleLocalFinderLiveHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:41841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41841)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:41845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41845)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:41843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41843)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:41828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41828)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:41836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41836)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:41834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41834)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:41832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41832)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:41830](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41830)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")