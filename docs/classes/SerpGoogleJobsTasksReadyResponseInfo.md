[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTasksReadyResponseInfo

# Class: SerpGoogleJobsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleJobsTasksReadyResponseInfo`**

## Implements

- [`ISerpGoogleJobsTasksReadyResponseInfo`](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleJobsTasksReadyResponseInfo.md#cost)
- [status\_code](SerpGoogleJobsTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpGoogleJobsTasksReadyResponseInfo.md#status_message)
- [tasks](SerpGoogleJobsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleJobsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleJobsTasksReadyResponseInfo.md#tasks_error)
- [time](SerpGoogleJobsTasksReadyResponseInfo.md#time)
- [version](SerpGoogleJobsTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpGoogleJobsTasksReadyResponseInfo.md#init)
- [toJSON](SerpGoogleJobsTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpGoogleJobsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTasksReadyResponseInfo**(`data?`): [`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTasksReadyResponseInfo`](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md) |

#### Returns

[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:48845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48845)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleJobsTasksReadyResponseInfo](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md).[cost](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md#cost)

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

[ISerpGoogleJobsTasksReadyResponseInfo](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md#status_code)

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

[ISerpGoogleJobsTasksReadyResponseInfo](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleJobsTasksReadyTaskInfo`](SerpGoogleJobsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleJobsTasksReadyResponseInfo](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:48841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48841)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleJobsTasksReadyResponseInfo](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleJobsTasksReadyResponseInfo](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleJobsTasksReadyResponseInfo](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md).[time](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleJobsTasksReadyResponseInfo](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md).[version](../interfaces/ISerpGoogleJobsTasksReadyResponseInfo.md#version)

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

[main.ts:48849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48849)

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

[main.ts:48871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48871)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:48864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48864)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")