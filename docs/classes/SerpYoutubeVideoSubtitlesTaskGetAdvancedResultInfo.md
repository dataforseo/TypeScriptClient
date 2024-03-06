[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [category](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#category)
- [check\_url](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#location_code)
- [origin\_language](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#origin_language)
- [se\_domain](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#se_domain)
- [spell](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#spell)
- [subtitles\_count](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#subtitles_count)
- [title](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#title)
- [translate\_language](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#translate_language)
- [unsupported\_language](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#unsupported_language)
- [video\_id](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:60346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60346)

## Properties

### category

• `Optional` **category**: `string`

the category the video belongs to

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[category](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#category)

#### Defined in

[main.ts:60334](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60334)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:60313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60313)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:60318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60318)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:60326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60326)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:60342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60342)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:60340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60340)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:60310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60310)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:60308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60308)

___


### origin\_language

• `Optional` **origin\_language**: `string`

language code of original text

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[origin_language](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#origin_language)

#### Defined in

[main.ts:60332](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60332)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:60306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60306)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:60321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60321)

___


### subtitles\_count

• `Optional` **subtitles\_count**: `number`

number of subtitles in the video

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[subtitles_count](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#subtitles_count)

#### Defined in

[main.ts:60336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60336)

___


### title

• `Optional` **title**: `string`

title of the video

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[title](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#title)

#### Defined in

[main.ts:60338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60338)

___


### translate\_language

• `Optional` **translate\_language**: `string`

language code of translated text

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[translate_language](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#translate_language)

#### Defined in

[main.ts:60330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60330)

___


### unsupported\_language

• `Optional` **unsupported\_language**: `boolean`

indicates whether the language is unsupported by the system

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[unsupported_language](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#unsupported_language)

#### Defined in

[main.ts:60328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60328)

___


### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md).[video_id](../interfaces/ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md#video_id)

#### Defined in

[main.ts:60304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60304)

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

[main.ts:60355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60355)

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

[main.ts:60395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60395)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:60388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60388)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")