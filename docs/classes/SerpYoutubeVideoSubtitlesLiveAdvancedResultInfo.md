[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

# Class: SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#constructor)

### Properties

- [category](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#category)
- [check\_url](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#item_types)
- [items](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items)
- [items\_count](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items_count)
- [language\_code](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#location_code)
- [origin\_language](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#origin_language)
- [se\_domain](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#se_domain)
- [spell](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#spell)
- [subtitles\_count](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#subtitles_count)
- [title](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#title)
- [translate\_language](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#translate_language)
- [unsupported\_language](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#unsupported_language)
- [video\_id](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo**(`data?`): [`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:60804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60804)

## Properties

### category

• `Optional` **category**: `string`

the category the video belongs to

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[category](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#category)

#### Defined in

[main.ts:60792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60792)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:60771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60771)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:60776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60776)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:60784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60784)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[items](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items)

#### Defined in

[main.ts:60800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60800)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:60798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60798)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:60768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60768)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:60766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60766)

___

### origin\_language

• `Optional` **origin\_language**: `string`

language code of original text

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[origin_language](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#origin_language)

#### Defined in

[main.ts:60790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60790)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:60764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60764)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:60779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60779)

___

### subtitles\_count

• `Optional` **subtitles\_count**: `number`

number of subtitles in the video

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[subtitles_count](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#subtitles_count)

#### Defined in

[main.ts:60794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60794)

___

### title

• `Optional` **title**: `string`

title of the video

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[title](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#title)

#### Defined in

[main.ts:60796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60796)

___

### translate\_language

• `Optional` **translate\_language**: `string`

language code of translated text

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[translate_language](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#translate_language)

#### Defined in

[main.ts:60788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60788)

___

### unsupported\_language

• `Optional` **unsupported\_language**: `boolean`

indicates whether the language is unsupported by the system

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[unsupported_language](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#unsupported_language)

#### Defined in

[main.ts:60786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60786)

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md).[video_id](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md#video_id)

#### Defined in

[main.ts:60762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60762)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:60813](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60813)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:60853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60853)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:60846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60846)
