[Documentation](../README.md) / [Exports](../modules.md) / ISerpBingOrganicTaskGetAdvancedResultInfo

# Interface: ISerpBingOrganicTaskGetAdvancedResultInfo

## Implemented by

- [`SerpBingOrganicTaskGetAdvancedResultInfo`](../classes/SerpBingOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpBingOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpBingOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpBingOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpBingOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpBingOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpBingOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpBingOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpBingOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpBingOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpBingOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpBingOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpBingOrganicTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:56970

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:56975

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video

#### Defined in

main.ts:56983

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:56990

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:56987

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:56959

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:56967

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:56965

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:56963

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:56985

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:56978

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:56961
