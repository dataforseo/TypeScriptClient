[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

Defined in: main.ts:72296

## Implements

- [`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo()

> **new SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

Defined in: main.ts:72343

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:72331

the category the video belongs to

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`category`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#category)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:72307

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:72312

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:72323

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)[]

Defined in: main.ts:72339

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:72337

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:72304

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:72302

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#location_code)

***

### origin\_language?

> `optional` **origin\_language**: `string`

Defined in: main.ts:72329

language code of original text

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`origin_language`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#origin_language)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:72318

search refinement chips
equals null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:72300

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#se_domain)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:72315

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#spell)

***

### subtitles\_count?

> `optional` **subtitles\_count**: `number`

Defined in: main.ts:72333

number of subtitles in the video

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`subtitles_count`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#subtitles_count)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:72335

title of the video

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`title`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#title)

***

### translate\_language?

> `optional` **translate\_language**: `string`

Defined in: main.ts:72327

language code of translated text

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`translate_language`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#translate_language)

***

### unsupported\_language?

> `optional` **unsupported\_language**: `boolean`

Defined in: main.ts:72325

indicates whether the language is unsupported by the system

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`unsupported_language`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#unsupported_language)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:72298

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#video_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:72352

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:72393

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

Defined in: main.ts:72386

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)
