[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#check_url)
- [comments\_count](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#comments_count)
- [datetime](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#se_domain)
- [spell](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#spell)
- [title](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#title)
- [video\_id](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo**(`data?`): [`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:61974](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61974)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:61949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61949)

___

### comments\_count

• `Optional` **comments\_count**: `number`

number of comments on the video

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[comments_count](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#comments_count)

#### Defined in

[main.ts:61966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61966)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:61954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61954)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_comment

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:61962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61962)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:61970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61970)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:61968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61968)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:61946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61946)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:61944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61944)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:61942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61942)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:61957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61957)

___

### title

• `Optional` **title**: `string`

title of the video

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[title](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#title)

#### Defined in

[main.ts:61964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61964)

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[video_id](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#video_id)

#### Defined in

[main.ts:61940](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61940)

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

[main.ts:61983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61983)

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

[main.ts:62019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62019)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:62012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62012)
