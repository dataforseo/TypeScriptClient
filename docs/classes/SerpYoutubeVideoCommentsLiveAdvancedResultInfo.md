[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsLiveAdvancedResultInfo

# Class: SerpYoutubeVideoCommentsLiveAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsLiveAdvancedResultInfo()

> **new SerpYoutubeVideoCommentsLiveAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:74381

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:74353

***

### comments\_count?

> `optional` **comments\_count**: `number`

number of comments on the video

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`comments_count`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#comments_count)

#### Defined in

main.ts:74373

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:74358

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_comment

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:74369

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:74377

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:74375

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:74350

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:74348

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips
equals null

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:74364

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:74346

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:74361

***

### title?

> `optional` **title**: `string`

title of the video

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`title`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#title)

#### Defined in

main.ts:74371

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#video_id)

#### Defined in

main.ts:74344

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:74390

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:74427

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:74420
