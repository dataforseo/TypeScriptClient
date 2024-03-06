[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpNaverOrganicTaskGetAdvancedResultInfo

# Interface: ISerpNaverOrganicTaskGetAdvancedResultInfo

## Implemented by

- [`SerpNaverOrganicTaskGetAdvancedResultInfo`](../classes/SerpNaverOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpNaverOrganicTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:68399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68399)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:68404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68404)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video

#### Defined in

[main.ts:68412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68412)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:68419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68419)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:68416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68416)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:68388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68388)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:68396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68396)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:68394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68394)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:68392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68392)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:68414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68414)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:68407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68407)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:68390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68390)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")