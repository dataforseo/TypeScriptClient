[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleSearchByImageTaskGetAdvancedResultInfo

# Interface: ISerpGoogleSearchByImageTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../classes/SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#datetime)
- [image\_url](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#image_url)
- [item\_types](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:48288

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:48293

___

### image\_url

• `Optional` **image\_url**: `string`

URL specified in a POST array

#### Defined in

main.ts:48275

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
organic,
images

#### Defined in

main.ts:48302

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:48309

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:48306

___

### keyword

• `Optional` **keyword**: `string`

keyword Google associated with the specified image

#### Defined in

main.ts:48277

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:48285

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:48283

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:48281

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:48304

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:48296

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:48279
