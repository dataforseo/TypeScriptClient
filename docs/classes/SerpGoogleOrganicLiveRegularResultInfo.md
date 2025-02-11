[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveRegularResultInfo

# Class: SerpGoogleOrganicLiveRegularResultInfo

Defined in: main.ts:39047

## Implements

- [`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveRegularResultInfo()

> **new SerpGoogleOrganicLiveRegularResultInfo**(`data`?): [`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

Defined in: main.ts:39089

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md)

#### Returns

[`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:39061

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:39066

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:39079

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, ai_overview
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:39085

items in SERP

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:39083

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:39050

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:39058

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:39056

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:39071

search refinement chips

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:39054

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:39081

total number of results in SERP

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:39069

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:39052

type of element

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:39098

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:39135

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

Defined in: main.ts:39128

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)
