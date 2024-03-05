[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTasksReadyResultInfo

# Class: SerpYoutubeVideoSubtitlesTasksReadyResultInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#id)
- [se](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se)
- [se\_type](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se_type)
- [tag](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTasksReadyResultInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Defined in

[main.ts:59819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59819)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:59804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59804)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:59812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59812)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:59815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59815)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:59809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59809)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[id](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:59797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59797)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[se](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:59799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59799)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_subtitles

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[se_type](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:59802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59802)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[tag](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:59806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59806)

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

[main.ts:59828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59828)

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

[main.ts:59852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59852)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Defined in

[main.ts:59845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59845)
