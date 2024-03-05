[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTasksReadyResponseInfo

# Class: SerpGoogleDatasetSearchTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleDatasetSearchTasksReadyResponseInfo`**

## Implements

- [`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#cost)
- [status\_code](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#status_message)
- [tasks](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#tasks_error)
- [time](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#time)
- [version](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTasksReadyResponseInfo**(`data?`): [`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:50299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50299)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[cost](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#cost)

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

[ISerpGoogleDatasetSearchTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#status_code)

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

[ISerpGoogleDatasetSearchTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleDatasetSearchTasksReadyTaskInfo`](SerpGoogleDatasetSearchTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:50295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50295)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[time](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleDatasetSearchTasksReadyResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[version](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#version)

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

[main.ts:50303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50303)

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

[main.ts:50325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50325)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:50318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50318)
