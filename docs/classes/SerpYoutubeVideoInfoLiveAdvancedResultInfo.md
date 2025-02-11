[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoLiveAdvancedResultInfo

# Class: SerpYoutubeVideoInfoLiveAdvancedResultInfo

Defined in: main.ts:71192

## Implements

- [`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoLiveAdvancedResultInfo()

> **new SerpYoutubeVideoInfoLiveAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

Defined in: main.ts:71227

#### Parameters

##### data?

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:71203

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:71208

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:71219

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_video_info

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)[]

Defined in: main.ts:71223

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:71221

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:71200

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:71198

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:71214

search refinement chips
equals null

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:71196

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#se_domain)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:71211

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#spell)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:71194

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#video_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:71236

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:71271

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

Defined in: main.ts:71264

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)
