[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoInfoTaskGetAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#se_domain)
- [spell](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#spell)
- [video\_id](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoTaskGetAdvancedResultInfo**(`data?`): [`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:58820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58820)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:58799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58799)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:58804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58804)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_video_info

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:58812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58812)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:58816](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58816)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:58814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58814)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:58796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58796)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:58794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58794)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:58792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58792)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:58807](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58807)

___


### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[video_id](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#video_id)

#### Defined in

[main.ts:58790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58790)

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

[main.ts:58829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58829)

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

[main.ts:58863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58863)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:58856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58856)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")