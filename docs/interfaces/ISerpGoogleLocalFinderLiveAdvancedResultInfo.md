[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleLocalFinderLiveAdvancedResultInfo

# Interface: ISerpGoogleLocalFinderLiveAdvancedResultInfo

## Implemented by

- [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](../classes/SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#spell)
- [type](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Defined in

main.ts:41488

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:41493

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Defined in

main.ts:41501

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:41507

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:41505

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:41477

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:41485

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:41483

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:41481

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:41503

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:41496

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:41479
