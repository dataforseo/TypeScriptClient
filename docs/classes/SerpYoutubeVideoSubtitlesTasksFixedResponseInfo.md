[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTasksFixedResponseInfo

# Class: SerpYoutubeVideoSubtitlesTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`**

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#time)
- [version](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTasksFixedResponseInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:60169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60169)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoSubtitlesTasksFixedTaskInfo`](SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#tasks)

#### Defined in

[main.ts:60165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60165)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[init](BaseResponseInfo.md#init)

#### Defined in

[main.ts:60173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60173)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[toJSON](BaseResponseInfo.md#tojson)

#### Defined in

[main.ts:60195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60195)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:60188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60188)
