[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleNewsTaskGetAdvancedResultInfo

# Interface: ISerpGoogleNewsTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleNewsTaskGetAdvancedResultInfo`](../classes/SerpGoogleNewsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpGoogleNewsTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:42741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42741)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:42746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42746)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
top_stories, news_search

#### Defined in

[main.ts:42754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42754)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:42761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42761)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:42758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42758)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:42730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42730)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:42738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42738)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:42736](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42736)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:42734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42734)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:42756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42756)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:42749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42749)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:42732](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42732)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")