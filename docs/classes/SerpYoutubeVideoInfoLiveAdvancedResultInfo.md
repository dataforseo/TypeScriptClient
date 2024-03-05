[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoLiveAdvancedResultInfo

# Class: SerpYoutubeVideoInfoLiveAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#item_types)
- [items](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items)
- [items\_count](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items_count)
- [language\_code](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#se_domain)
- [spell](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#spell)
- [video\_id](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoLiveAdvancedResultInfo**(`data?`): [`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:59224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59224)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:59203](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59203)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:59208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59208)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_video_info

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:59216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59216)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[items](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items)

#### Defined in

[main.ts:59220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59220)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:59218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59218)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:59200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59200)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:59198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59198)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:59196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59196)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:59211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59211)

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[video_id](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#video_id)

#### Defined in

[main.ts:59194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59194)

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

[main.ts:59233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59233)

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

[main.ts:59267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59267)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:59260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59260)
