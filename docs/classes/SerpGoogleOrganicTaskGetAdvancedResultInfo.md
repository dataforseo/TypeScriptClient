[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTaskGetAdvancedResultInfo

# Class: SerpGoogleOrganicTaskGetAdvancedResultInfo

Defined in: main.ts:38169

## Implements

- [`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTaskGetAdvancedResultInfo()

> **new SerpGoogleOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:38208

#### Parameters

##### data?

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:38183

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:38188

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:38198

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box,product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums, compare_sites, courses, ai_overview

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:38204

items present in the element

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:38202

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:38172

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:38180

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:38178

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:38193

search refinement chips

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:38176

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:38200

total number of results in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:38191

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38174

type of element

#### Implementation of

[`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:38217

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:38254

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:38247

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)
