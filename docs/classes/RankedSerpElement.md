[**Documentation**](../README.md)

***

[Documentation](../README.md) / RankedSerpElement

# Class: RankedSerpElement

Defined in: main.ts:101406

## Implements

- [`IRankedSerpElement`](../interfaces/IRankedSerpElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RankedSerpElement()

> **new RankedSerpElement**(`data`?): [`RankedSerpElement`](RankedSerpElement.md)

Defined in: main.ts:101444

#### Parameters

##### data?

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md)

#### Returns

[`RankedSerpElement`](RankedSerpElement.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:101414

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`check_url`](../interfaces/IRankedSerpElement.md#check_url)

***

### is\_lost?

> `optional` **is\_lost**: `boolean`

Defined in: main.ts:101430

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`is_lost`](../interfaces/IRankedSerpElement.md#is_lost)

***

### keyword\_difficulty?

> `optional` **keyword\_difficulty**: `number`

Defined in: main.ts:101427

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`keyword_difficulty`](../interfaces/IRankedSerpElement.md#keyword_difficulty)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:101435

date and time when search intent data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`last_updated_time`](../interfaces/IRankedSerpElement.md#last_updated_time)

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

Defined in: main.ts:101440

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`previous_updated_time`](../interfaces/IRankedSerpElement.md#previous_updated_time)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `string`

Defined in: main.ts:101422

number of search results for the returned keyword

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`se_results_count`](../interfaces/IRankedSerpElement.md#se_results_count)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:101408

search engine type

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`se_type`](../interfaces/IRankedSerpElement.md#se_type)

***

### serp\_item?

> `optional` **serp\_item**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

Defined in: main.ts:101411

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`serp_item`](../interfaces/IRankedSerpElement.md#serp_item)

***

### serp\_item\_types?

> `optional` **serp\_item\_types**: `string`[]

Defined in: main.ts:101420

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`serp_item_types`](../interfaces/IRankedSerpElement.md#serp_item_types)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101453

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:101482

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RankedSerpElement`](RankedSerpElement.md)

Defined in: main.ts:101475

#### Parameters

##### data

`any`

#### Returns

[`RankedSerpElement`](RankedSerpElement.md)
