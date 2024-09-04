[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleOrganicTaskGetRegularResultInfo

# Class: SerpGoogleOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTaskGetRegularResultInfo()

> **new SerpGoogleOrganicTaskGetRegularResultInfo**(`data`?): [`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:27421

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:27395

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:27400

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, ai_overview
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only;
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:27411

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:27417

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:27415

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:27384

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:27392

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:27390

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:27388

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:27413

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:27403

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:27386

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:27430

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:27466

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:27459
