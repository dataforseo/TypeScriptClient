**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTaskGetRegularResultInfo

# Class: SerpGoogleOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTaskGetRegularResultInfo(data)

> **new SerpGoogleOrganicTaskGetRegularResultInfo**(`data`?): [`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Source

main.ts:26804

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#check_url)

#### Source

main.ts:26778

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#datetime)

#### Source

main.ts:26783

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only;
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#item_types)

#### Source

main.ts:26794

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#items)

#### Source

main.ts:26800

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#items_count)

#### Source

main.ts:26798

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#keyword)

#### Source

main.ts:26767

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#language_code)

#### Source

main.ts:26775

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#location_code)

#### Source

main.ts:26773

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_domain)

#### Source

main.ts:26771

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Source

main.ts:26796

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#spell)

#### Source

main.ts:26786

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#type)

#### Source

main.ts:26769

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:26813

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:26849

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Source

main.ts:26842
