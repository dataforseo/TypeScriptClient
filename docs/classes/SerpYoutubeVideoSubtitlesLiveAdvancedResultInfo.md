[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

# Class: SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

Defined in: main.ts:72762

## Implements

- [`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo()

> **new SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

Defined in: main.ts:72809

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:72797

the category the video belongs to

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`category`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#category)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:72773

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:72778

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:72789

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)[]

Defined in: main.ts:72805

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:72803

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:72770

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:72768

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#location_code)

***

### origin\_language?

> `optional` **origin\_language**: `string`

Defined in: main.ts:72795

language code of original text

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`origin_language`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#origin_language)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:72784

search refinement chips
equals null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:72766

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#se_domain)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:72781

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#spell)

***

### subtitles\_count?

> `optional` **subtitles\_count**: `number`

Defined in: main.ts:72799

number of subtitles in the video

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`subtitles_count`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#subtitles_count)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:72801

title of the video

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`title`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#title)

***

### translate\_language?

> `optional` **translate\_language**: `string`

Defined in: main.ts:72793

language code of translated text

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`translate_language`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#translate_language)

***

### unsupported\_language?

> `optional` **unsupported\_language**: `boolean`

Defined in: main.ts:72791

indicates whether the language is unsupported by the system

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`unsupported_language`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#unsupported_language)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:72764

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#video_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:72818

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:72859

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

Defined in: main.ts:72852

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)
