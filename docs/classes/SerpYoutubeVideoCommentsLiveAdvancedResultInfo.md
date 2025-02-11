[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsLiveAdvancedResultInfo

# Class: SerpYoutubeVideoCommentsLiveAdvancedResultInfo

Defined in: main.ts:74378

## Implements

- [`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsLiveAdvancedResultInfo()

> **new SerpYoutubeVideoCommentsLiveAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

Defined in: main.ts:74417

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:74389

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#check_url)

***

### comments\_count?

> `optional` **comments\_count**: `number`

Defined in: main.ts:74409

number of comments on the video

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`comments_count`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#comments_count)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:74394

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:74405

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_comment

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)[]

Defined in: main.ts:74413

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:74411

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:74386

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:74384

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:74400

search refinement chips
equals null

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:74382

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#se_domain)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:74397

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#spell)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:74407

title of the video

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`title`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#title)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:74380

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#video_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:74426

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:74463

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

Defined in: main.ts:74456

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)
