**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTaskGetAdvancedResultInfo

# Class: SerpGoogleOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTaskGetAdvancedResultInfo(data)

> **new SerpGoogleOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:38020

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:37997

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:38002

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box,product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums, compare_sites, courses

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:38010

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

contains arrays of elements available in the list

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:38016

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:38014

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:37986

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:37994

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:37992

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:37990

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:38012

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:38005

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:37988

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:38029

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:38065

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:38058
