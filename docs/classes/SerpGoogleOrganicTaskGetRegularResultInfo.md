[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTaskGetRegularResultInfo

# Class: SerpGoogleOrganicTaskGetRegularResultInfo

Defined in: main.ts:29157

## Implements

- [`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTaskGetRegularResultInfo()

> **new SerpGoogleOrganicTaskGetRegularResultInfo**(`data`?): [`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

Defined in: main.ts:29199

#### Parameters

##### data?

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:29171

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:29176

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:29189

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, ai_overview
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only;
to get all items (including SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:29195

items in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:29193

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:29160

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:29168

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:29166

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:29181

search refinement chips

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:29164

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:29191

total number of results in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:29179

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:29162

type of element

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:29208

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:29245

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

Defined in: main.ts:29238

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)
