[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetSearchLiveAdvancedResultInfo

# Interface: ISerpGoogleDatasetSearchLiveAdvancedResultInfo

## Implemented by

- [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](../classes/SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#language_code)
- [se\_domain](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#spell)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:51647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51647)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:51652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51652)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Defined in

[main.ts:51659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51659)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:51665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51665)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:51663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51663)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:51640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51640)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:51644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51644)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:51642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51642)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:51661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51661)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:51655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51655)
