[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpSeznamOrganicTaskGetAdvancedResultInfo

# Interface: ISerpSeznamOrganicTaskGetAdvancedResultInfo

## Implemented by

- [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](../classes/SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:70509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70509)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:70514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70514)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video

#### Defined in

[main.ts:70522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70522)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:70529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70529)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:70526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70526)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:70498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70498)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:70506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70506)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:70504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70504)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:70502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70502)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:70524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70524)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:70517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70517)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:70500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70500)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")