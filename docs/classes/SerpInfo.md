[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpInfo

# Class: SerpInfo

Defined in: main.ts:93028

## Implements

- [`ISerpInfo`](../interfaces/ISerpInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpInfo()

> **new SerpInfo**(`data`?): [`SerpInfo`](SerpInfo.md)

Defined in: main.ts:93055

#### Parameters

##### data?

[`ISerpInfo`](../interfaces/ISerpInfo.md)

#### Returns

[`SerpInfo`](SerpInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:93033

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`check_url`](../interfaces/ISerpInfo.md#check_url)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:93046

date and time when backlink data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`last_updated_time`](../interfaces/ISerpInfo.md#last_updated_time)

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

Defined in: main.ts:93051

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`previous_updated_time`](../interfaces/ISerpInfo.md#previous_updated_time)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:93041

number of search results for the returned keyword

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`se_results_count`](../interfaces/ISerpInfo.md#se_results_count)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:93030

search engine type

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`se_type`](../interfaces/ISerpInfo.md#se_type)

***

### serp\_item\_types?

> `optional` **serp\_item\_types**: `string`[]

Defined in: main.ts:93039

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`serp_item_types`](../interfaces/ISerpInfo.md#serp_item_types)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93064

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93090

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpInfo`](SerpInfo.md)

Defined in: main.ts:93083

#### Parameters

##### data

`any`

#### Returns

[`SerpInfo`](SerpInfo.md)
