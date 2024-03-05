[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTasksReadyResponseInfo

# Class: SerpBaiduOrganicTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBaiduOrganicTasksReadyResponseInfo`**

## Implements

- [`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpBaiduOrganicTasksReadyResponseInfo.md#cost)
- [status\_code](SerpBaiduOrganicTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpBaiduOrganicTasksReadyResponseInfo.md#status_message)
- [tasks](SerpBaiduOrganicTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpBaiduOrganicTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpBaiduOrganicTasksReadyResponseInfo.md#tasks_error)
- [time](SerpBaiduOrganicTasksReadyResponseInfo.md#time)
- [version](SerpBaiduOrganicTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpBaiduOrganicTasksReadyResponseInfo.md#init)
- [toJSON](SerpBaiduOrganicTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTasksReadyResponseInfo**(`data?`): [`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md) |

#### Returns

[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:66331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66331)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduOrganicTasksReadyResponseInfo](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[cost](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#cost)

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

[ISerpBaiduOrganicTasksReadyResponseInfo](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#status_code)

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

[ISerpBaiduOrganicTasksReadyResponseInfo](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpBaiduOrganicTasksReadyTaskInfo`](SerpBaiduOrganicTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBaiduOrganicTasksReadyResponseInfo](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:66327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66327)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBaiduOrganicTasksReadyResponseInfo](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBaiduOrganicTasksReadyResponseInfo](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBaiduOrganicTasksReadyResponseInfo](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[time](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBaiduOrganicTasksReadyResponseInfo](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[version](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#version)

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

[main.ts:66335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66335)

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

[main.ts:66357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66357)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:66350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66350)
