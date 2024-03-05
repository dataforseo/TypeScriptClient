[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

# Interface: ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

## Implemented by

- [`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../classes/SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [category](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#category)
- [check\_url](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#location_code)
- [origin\_language](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#origin_language)
- [se\_domain](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#se_domain)
- [spell](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#spell)
- [subtitles\_count](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#subtitles_count)
- [title](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#title)
- [translate\_language](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#translate_language)
- [unsupported\_language](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#unsupported_language)
- [video\_id](ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#video_id)

## Properties

### category

• `Optional` **category**: `string`

the category the video belongs to

#### Defined in

[main.ts:60461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60461)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:60440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60440)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:60445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60445)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Defined in

[main.ts:60453](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60453)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:60469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60469)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:60467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60467)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:60437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60437)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:60435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60435)

___

### origin\_language

• `Optional` **origin\_language**: `string`

language code of original text

#### Defined in

[main.ts:60459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60459)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:60433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60433)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:60448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60448)

___

### subtitles\_count

• `Optional` **subtitles\_count**: `number`

number of subtitles in the video

#### Defined in

[main.ts:60463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60463)

___

### title

• `Optional` **title**: `string`

title of the video

#### Defined in

[main.ts:60465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60465)

___

### translate\_language

• `Optional` **translate\_language**: `string`

language code of translated text

#### Defined in

[main.ts:60457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60457)

___

### unsupported\_language

• `Optional` **unsupported\_language**: `boolean`

indicates whether the language is unsupported by the system

#### Defined in

[main.ts:60455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60455)

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

[main.ts:60431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60431)
