[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleOrganicTaskGetAdvancedResultInfo

# Interface: ISerpGoogleOrganicTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleOrganicTaskGetAdvancedResultInfo`](../classes/SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:36288

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:36293

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box,product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums

#### Defined in

main.ts:36301

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

contains arrays of specific images

#### Defined in

main.ts:36307

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:36305

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:36277

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:36285

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:36283

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:36281

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:36303

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:36296

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:36279
