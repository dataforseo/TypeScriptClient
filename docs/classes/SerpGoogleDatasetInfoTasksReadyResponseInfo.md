[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoTasksReadyResponseInfo

# Class: SerpGoogleDatasetInfoTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleDatasetInfoTasksReadyResponseInfo`**

## Implements

- [`ISerpGoogleDatasetInfoTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#cost)
- [status\_code](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#status_message)
- [tasks](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#tasks_error)
- [time](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#time)
- [version](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoTasksReadyResponseInfo**(`data?`): [`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:52243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52243)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md).[cost](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md#cost)

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

[ISerpGoogleDatasetInfoTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md#status_code)

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

[ISerpGoogleDatasetInfoTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleDatasetInfoTasksReadyTaskInfo`](SerpGoogleDatasetInfoTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:52239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52239)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md).[time](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md).[version](../interfaces/ISerpGoogleDatasetInfoTasksReadyResponseInfo.md#version)

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

[main.ts:52247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52247)

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

[main.ts:52269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52269)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:52262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52262)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")