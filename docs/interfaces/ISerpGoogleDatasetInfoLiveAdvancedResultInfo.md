[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetInfoLiveAdvancedResultInfo

# Interface: ISerpGoogleDatasetInfoLiveAdvancedResultInfo

## Implemented by

- [`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](../classes/SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#language_code)
- [se\_domain](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#spell)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:53127

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:53132

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Defined in

main.ts:53139

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:53145

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:53143

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:53120

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:53124

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:53122

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:53141

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:53135
