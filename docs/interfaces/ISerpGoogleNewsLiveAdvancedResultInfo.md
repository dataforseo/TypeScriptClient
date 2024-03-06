[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleNewsLiveAdvancedResultInfo

# Interface: ISerpGoogleNewsLiveAdvancedResultInfo

## Implemented by

- [`SerpGoogleNewsLiveAdvancedResultInfo`](../classes/SerpGoogleNewsLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleNewsLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleNewsLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleNewsLiveAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleNewsLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleNewsLiveAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleNewsLiveAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleNewsLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleNewsLiveAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleNewsLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleNewsLiveAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleNewsLiveAdvancedResultInfo.md#spell)
- [type](ISerpGoogleNewsLiveAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:43220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43220)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:43225](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43225)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
top_stories, news_search

#### Defined in

[main.ts:43233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43233)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:43239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43239)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:43237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43237)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:43209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43209)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:43217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43217)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:43215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43215)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:43213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43213)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:43235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43235)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:43228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43228)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:43211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43211)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")