[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleHistoricalSerpsLiveItem

# Interface: IDataforseoLabsGoogleHistoricalSerpsLiveItem

## Implemented by

- [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](../classes/DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#check_url)
- [datetime](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#datetime)
- [item\_types](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#item_types)
- [items](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items)
- [items\_count](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items_count)
- [keyword](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#keyword)
- [language\_code](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#language_code)
- [location\_code](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#location_code)
- [se\_domain](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_domain)
- [se\_results\_count](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_results_count)
- [se\_type](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_type)
- [spell](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#spell)
- [type](IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:94484

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:94489

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units,  local_services, google_hotels, math_solver

#### Defined in

main.ts:94497

___

### items

• `Optional` **items**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:94504

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:94501

___

### keyword

• `Optional` **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Defined in

main.ts:94473

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:94481

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:94479

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:94477

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:94499

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:94470

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:94492

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:94475
