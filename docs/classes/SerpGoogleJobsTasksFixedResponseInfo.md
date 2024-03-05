[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTasksFixedResponseInfo

# Class: SerpGoogleJobsTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleJobsTasksFixedResponseInfo`**

## Implements

- [`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleJobsTasksFixedResponseInfo.md#cost)
- [status\_code](SerpGoogleJobsTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpGoogleJobsTasksFixedResponseInfo.md#status_message)
- [tasks](SerpGoogleJobsTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleJobsTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleJobsTasksFixedResponseInfo.md#tasks_error)
- [time](SerpGoogleJobsTasksFixedResponseInfo.md#time)
- [version](SerpGoogleJobsTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpGoogleJobsTasksFixedResponseInfo.md#init)
- [toJSON](SerpGoogleJobsTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpGoogleJobsTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTasksFixedResponseInfo**(`data?`): [`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md) |

#### Returns

[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:49057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49057)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleJobsTasksFixedResponseInfo](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[cost](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#cost)

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

[ISerpGoogleJobsTasksFixedResponseInfo](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#status_code)

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

[ISerpGoogleJobsTasksFixedResponseInfo](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleJobsTasksFixedTaskInfo`](SerpGoogleJobsTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleJobsTasksFixedResponseInfo](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#tasks)

#### Defined in

[main.ts:49053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49053)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleJobsTasksFixedResponseInfo](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleJobsTasksFixedResponseInfo](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleJobsTasksFixedResponseInfo](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[time](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleJobsTasksFixedResponseInfo](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[version](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#version)

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

[main.ts:49061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49061)

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

[main.ts:49083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49083)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:49076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49076)
