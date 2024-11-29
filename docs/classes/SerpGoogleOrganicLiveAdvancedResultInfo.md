[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveAdvancedResultInfo

# Class: SerpGoogleOrganicLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveAdvancedResultInfo()

> **new SerpGoogleOrganicLiveAdvancedResultInfo**(`data`?): [`SerpGoogleOrganicLiveAdvancedResultInfo`](SerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleOrganicLiveAdvancedResultInfo`](SerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:39767

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:39741

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:39746

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box, product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums, compare_sites, courses, ai_overview

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:39756

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:39763

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:39760

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:39730

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:39738

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:39736

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:39751

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:39734

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:39758

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:39749

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:39732

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:39776

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:39813

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicLiveAdvancedResultInfo`](SerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicLiveAdvancedResultInfo`](SerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:39806
