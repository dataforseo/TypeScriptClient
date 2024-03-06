[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo

# Class: SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#time)
- [version](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo**(`data?`): [`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:58985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58985)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo`](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:58981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58981)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:58989](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58989)

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

[main.ts:59011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59011)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:59004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59004)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")