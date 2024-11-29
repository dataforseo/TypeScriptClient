[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

# Class: SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo()

> **new SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Defined in

main.ts:72773

## Properties

### category?

> `optional` **category**: `string`

the category the video belongs to

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`category`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#category)

#### Defined in

main.ts:72761

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:72737

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:72742

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:72753

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:72769

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:72767

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:72734

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:72732

***

### origin\_language?

> `optional` **origin\_language**: `string`

language code of original text

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`origin_language`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#origin_language)

#### Defined in

main.ts:72759

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips
equals null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:72748

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:72730

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:72745

***

### subtitles\_count?

> `optional` **subtitles\_count**: `number`

number of subtitles in the video

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`subtitles_count`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#subtitles_count)

#### Defined in

main.ts:72763

***

### title?

> `optional` **title**: `string`

title of the video

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`title`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#title)

#### Defined in

main.ts:72765

***

### translate\_language?

> `optional` **translate\_language**: `string`

language code of translated text

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`translate_language`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#translate_language)

#### Defined in

main.ts:72757

***

### unsupported\_language?

> `optional` **unsupported\_language**: `boolean`

indicates whether the language is unsupported by the system

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`unsupported_language`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#unsupported_language)

#### Defined in

main.ts:72755

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#video_id)

#### Defined in

main.ts:72728

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:72782

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:72823

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Defined in

main.ts:72816
