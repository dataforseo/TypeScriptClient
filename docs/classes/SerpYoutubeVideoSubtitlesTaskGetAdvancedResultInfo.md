[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo()

> **new SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:65345

## Properties

### category?

> `optional` **category**: `string`

the category the video belongs to

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`category`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#category)

#### Defined in

main.ts:65333

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:65312

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:65317

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:65325

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:65341

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:65339

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:65309

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:65307

***

### origin\_language?

> `optional` **origin\_language**: `string`

language code of original text

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`origin_language`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#origin_language)

#### Defined in

main.ts:65331

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:65305

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:65320

***

### subtitles\_count?

> `optional` **subtitles\_count**: `number`

number of subtitles in the video

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`subtitles_count`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#subtitles_count)

#### Defined in

main.ts:65335

***

### title?

> `optional` **title**: `string`

title of the video

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`title`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#title)

#### Defined in

main.ts:65337

***

### translate\_language?

> `optional` **translate\_language**: `string`

language code of translated text

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`translate_language`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#translate_language)

#### Defined in

main.ts:65329

***

### unsupported\_language?

> `optional` **unsupported\_language**: `boolean`

indicates whether the language is unsupported by the system

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`unsupported_language`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#unsupported_language)

#### Defined in

main.ts:65327

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#video_id)

#### Defined in

main.ts:65303

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:65354

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:65394

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:65387
