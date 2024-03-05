[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpInfo

# Interface: ISerpInfo

## Implemented by

- [`SerpInfo`](../classes/SerpInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpInfo.md#check_url)
- [last\_updated\_time](ISerpInfo.md#last_updated_time)
- [previous\_updated\_time](ISerpInfo.md#previous_updated_time)
- [se\_results\_count](ISerpInfo.md#se_results_count)
- [se\_type](ISerpInfo.md#se_type)
- [serp\_item\_types](ISerpInfo.md#serp_item_types)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:79411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79411)

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:79424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79424)

___

### previous\_updated\_time

• `Optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Defined in

[main.ts:79429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79429)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `string`

number of search results for the returned keyword

#### Defined in

[main.ts:79419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79419)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:79408](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79408)

___

### serp\_item\_types

• `Optional` **serp\_item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Defined in

[main.ts:79417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79417)
