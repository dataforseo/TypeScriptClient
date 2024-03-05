[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleJobsTaskGetAdvancedResultInfo

# Interface: ISerpGoogleJobsTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleJobsTaskGetAdvancedResultInfo`](../classes/SerpGoogleJobsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpGoogleJobsTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:49398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49398)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:49403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49403)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
google_jobs_item

#### Defined in

[main.ts:49411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49411)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:49417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49417)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:49415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49415)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:49387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49387)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:49395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49395)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:49393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49393)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:49391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49391)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:49413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49413)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:49406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49406)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:49389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49389)
