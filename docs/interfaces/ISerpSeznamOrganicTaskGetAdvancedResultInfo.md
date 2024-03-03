[Documentation](../README.md) / [Exports](../modules.md) / ISerpSeznamOrganicTaskGetAdvancedResultInfo

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

main.ts:70653

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:70658

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video

#### Defined in

main.ts:70666

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:70673

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:70670

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:70642

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:70650

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:70648

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:70646

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:70668

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:70661

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:70644
