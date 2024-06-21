**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpInfo

# Interface: ISerpInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:83401

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:83414

***

### previous\_updated\_time?

> **`optional`** **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Source

main.ts:83419

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `string`

number of search results for the returned keyword

#### Source

main.ts:83409

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:83398

***

### serp\_item\_types?

> **`optional`** **serp\_item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Source

main.ts:83407
