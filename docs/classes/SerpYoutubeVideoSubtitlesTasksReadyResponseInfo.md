[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTasksReadyResponseInfo

# Class: SerpYoutubeVideoSubtitlesTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`**

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#time)
- [version](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTasksReadyResponseInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:59957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59957)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#cost)

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

[ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#status_code)

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

[ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoSubtitlesTasksReadyTaskInfo`](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:59953](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59953)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#version)

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

[main.ts:59961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59961)

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

[main.ts:59983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59983)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:59976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59976)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")