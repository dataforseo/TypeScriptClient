[Documentation](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicTaskGetAdvancedResultInfo

# Interface: ISerpYahooOrganicTaskGetAdvancedResultInfo

## Implemented by

- [`SerpYahooOrganicTaskGetAdvancedResultInfo`](../classes/SerpYahooOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:64255

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:64260

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Defined in

main.ts:64268

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:64275

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:64272

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:64244

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:64252

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:64250

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:64248

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:64270

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:64263

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:64246
