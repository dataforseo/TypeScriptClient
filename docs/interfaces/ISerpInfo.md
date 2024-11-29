[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpInfo

# Interface: ISerpInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:93001

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when backlink data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:93014

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Defined in

main.ts:93019

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

number of search results for the returned keyword

#### Defined in

main.ts:93009

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:92998

***

### serp\_item\_types?

> `optional` **serp\_item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Defined in

main.ts:93007
