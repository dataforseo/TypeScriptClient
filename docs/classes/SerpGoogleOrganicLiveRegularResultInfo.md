**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveRegularResultInfo

# Class: SerpGoogleOrganicLiveRegularResultInfo

## Implements

- [`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveRegularResultInfo(data)

> **new SerpGoogleOrganicLiveRegularResultInfo**(`data`?): [`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md)

#### Returns

[`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

#### Source

main.ts:38424

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#check_url)

#### Source

main.ts:38398

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#datetime)

#### Source

main.ts:38403

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#item_types)

#### Source

main.ts:38414

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#items)

#### Source

main.ts:38420

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#items_count)

#### Source

main.ts:38418

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#keyword)

#### Source

main.ts:38387

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#language_code)

#### Source

main.ts:38395

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#location_code)

#### Source

main.ts:38393

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#se_domain)

#### Source

main.ts:38391

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#se_results_count)

#### Source

main.ts:38416

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#spell)

#### Source

main.ts:38406

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleOrganicLiveRegularResultInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicLiveRegularResultInfo.md#type)

#### Source

main.ts:38389

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:38433

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:38469

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)

#### Source

main.ts:38462
