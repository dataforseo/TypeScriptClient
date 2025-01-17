[**Documentation**](../README.md)

***

[Documentation](../README.md) / IRankedSerpElement

# Interface: IRankedSerpElement

Defined in: main.ts:101477

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:101485

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### is\_lost?

> `optional` **is\_lost**: `boolean`

Defined in: main.ts:101501

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

***

### keyword\_difficulty?

> `optional` **keyword\_difficulty**: `number`

Defined in: main.ts:101498

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:101506

date and time when search intent data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

Defined in: main.ts:101511

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

***

### se\_results\_count?

> `optional` **se\_results\_count**: `string`

Defined in: main.ts:101493

number of search results for the returned keyword

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:101479

search engine type

***

### serp\_item?

> `optional` **serp\_item**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

Defined in: main.ts:101482

contains data on the SERP element
the list of supported SERP elements can be found below

***

### serp\_item\_types?

> `optional` **serp\_item\_types**: `string`[]

Defined in: main.ts:101491

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements
