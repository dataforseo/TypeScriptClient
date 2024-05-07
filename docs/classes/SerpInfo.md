**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpInfo

# Class: SerpInfo

## Implements

- [`ISerpInfo`](../interfaces/ISerpInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpInfo(data)

> **new SerpInfo**(`data`?): [`SerpInfo`](SerpInfo.md)

#### Parameters

• **data?**: [`ISerpInfo`](../interfaces/ISerpInfo.md)

#### Returns

[`SerpInfo`](SerpInfo.md)

#### Source

main.ts:82734

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`check_url`](../interfaces/ISerpInfo.md#check_url)

#### Source

main.ts:82712

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`last_updated_time`](../interfaces/ISerpInfo.md#last_updated_time)

#### Source

main.ts:82725

***

### previous\_updated\_time?

> **`optional`** **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`previous_updated_time`](../interfaces/ISerpInfo.md#previous_updated_time)

#### Source

main.ts:82730

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `string`

number of search results for the returned keyword

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`se_results_count`](../interfaces/ISerpInfo.md#se_results_count)

#### Source

main.ts:82720

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`se_type`](../interfaces/ISerpInfo.md#se_type)

#### Source

main.ts:82709

***

### serp\_item\_types?

> **`optional`** **serp\_item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Implementation of

[`ISerpInfo`](../interfaces/ISerpInfo.md).[`serp_item_types`](../interfaces/ISerpInfo.md#serp_item_types)

#### Source

main.ts:82718

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:82743

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:82769

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpInfo`](SerpInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpInfo`](SerpInfo.md)

#### Source

main.ts:82762
