[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleLocalFinderTaskGetAdvancedResultInfo

# Interface: ISerpGoogleLocalFinderTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../classes/SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Defined in

[main.ts:40606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40606)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:40611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40611)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Defined in

[main.ts:40619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40619)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:40625](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40625)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:40623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40623)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:40595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40595)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:40603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40603)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:40601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40601)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:40599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40599)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:40621](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40621)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:40614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40614)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:40597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40597)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")