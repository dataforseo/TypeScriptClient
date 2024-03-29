[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

# Interface: ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

## Implemented by

- [`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../classes/SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [category](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#category)
- [check\_url](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#item_types)
- [items](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items_count)
- [language\_code](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#location_code)
- [origin\_language](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#origin_language)
- [se\_domain](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#se_domain)
- [spell](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#spell)
- [subtitles\_count](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#subtitles_count)
- [title](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#title)
- [translate\_language](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#translate_language)
- [unsupported\_language](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#unsupported_language)
- [video\_id](ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#video_id)

## Properties

### category

• `Optional` **category**: `string`

the category the video belongs to

#### Defined in

[main.ts:60919](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60919)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:60898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60898)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:60903](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60903)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Defined in

[main.ts:60911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60911)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:60927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60927)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:60925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60925)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:60895](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60895)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:60893](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60893)

___


### origin\_language

• `Optional` **origin\_language**: `string`

language code of original text

#### Defined in

[main.ts:60917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60917)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:60891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60891)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:60906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60906)

___


### subtitles\_count

• `Optional` **subtitles\_count**: `number`

number of subtitles in the video

#### Defined in

[main.ts:60921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60921)

___


### title

• `Optional` **title**: `string`

title of the video

#### Defined in

[main.ts:60923](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60923)

___


### translate\_language

• `Optional` **translate\_language**: `string`

language code of translated text

#### Defined in

[main.ts:60915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60915)

___


### unsupported\_language

• `Optional` **unsupported\_language**: `boolean`

indicates whether the language is unsupported by the system

#### Defined in

[main.ts:60913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60913)

___


### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

[main.ts:60889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60889)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")