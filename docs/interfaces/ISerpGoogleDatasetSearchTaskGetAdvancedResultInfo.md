[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo

# Interface: ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../classes/SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#language_code)
- [se\_domain](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#spell)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:51191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51191)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:51196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51196)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Defined in

[main.ts:51203](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51203)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:51209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51209)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:51207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51207)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:51184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51184)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:51188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51188)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:51186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51186)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:51205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51205)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:51199](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51199)
