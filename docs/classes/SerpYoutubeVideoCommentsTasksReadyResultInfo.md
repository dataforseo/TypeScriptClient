[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTasksReadyResultInfo

# Class: SerpYoutubeVideoCommentsTasksReadyResultInfo

## Implements

- [`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#id)
- [se](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#se)
- [se\_type](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#se_type)
- [tag](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTasksReadyResultInfo**(`data?`): [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Defined in

[main.ts:61425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61425)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:61410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61410)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:61418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61418)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:61421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61421)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:61415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61415)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[id](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:61403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61403)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[se](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:61405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61405)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_comments

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[se_type](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se_type)

#### Defined in

[main.ts:61408](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61408)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[tag](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:61412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61412)

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

[main.ts:61434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61434)

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

[main.ts:61458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61458)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Defined in

[main.ts:61451](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61451)
