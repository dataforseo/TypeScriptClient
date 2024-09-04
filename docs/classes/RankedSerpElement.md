[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RankedSerpElement

# Class: RankedSerpElement

## Implements

- [`IRankedSerpElement`](../interfaces/IRankedSerpElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RankedSerpElement()

> **new RankedSerpElement**(`data`?): [`RankedSerpElement`](RankedSerpElement.md)

#### Parameters

• **data?**: [`IRankedSerpElement`](../interfaces/IRankedSerpElement.md)

#### Returns

[`RankedSerpElement`](RankedSerpElement.md)

#### Defined in

main.ts:91597

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`check_url`](../interfaces/IRankedSerpElement.md#check_url)

#### Defined in

main.ts:91567

***

### is\_lost?

> `optional` **is\_lost**: `boolean`

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`is_lost`](../interfaces/IRankedSerpElement.md#is_lost)

#### Defined in

main.ts:91583

***

### keyword\_difficulty?

> `optional` **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`keyword_difficulty`](../interfaces/IRankedSerpElement.md#keyword_difficulty)

#### Defined in

main.ts:91580

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when search intent data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`last_updated_time`](../interfaces/IRankedSerpElement.md#last_updated_time)

#### Defined in

main.ts:91588

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`previous_updated_time`](../interfaces/IRankedSerpElement.md#previous_updated_time)

#### Defined in

main.ts:91593

***

### se\_results\_count?

> `optional` **se\_results\_count**: `string`

number of search results for the returned keyword

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`se_results_count`](../interfaces/IRankedSerpElement.md#se_results_count)

#### Defined in

main.ts:91575

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`se_type`](../interfaces/IRankedSerpElement.md#se_type)

#### Defined in

main.ts:91561

***

### serp\_item?

> `optional` **serp\_item**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`serp_item`](../interfaces/IRankedSerpElement.md#serp_item)

#### Defined in

main.ts:91564

***

### serp\_item\_types?

> `optional` **serp\_item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Implementation of

[`IRankedSerpElement`](../interfaces/IRankedSerpElement.md).[`serp_item_types`](../interfaces/IRankedSerpElement.md#serp_item_types)

#### Defined in

main.ts:91573

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:91606

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:91635

***

### fromJS()

> `static` **fromJS**(`data`): [`RankedSerpElement`](RankedSerpElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`RankedSerpElement`](RankedSerpElement.md)

#### Defined in

main.ts:91628
