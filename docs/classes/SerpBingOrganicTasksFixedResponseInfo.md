[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTasksFixedResponseInfo

# Class: SerpBingOrganicTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingOrganicTasksFixedResponseInfo`**

## Implements

- [`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTasksFixedResponseInfo.md#cost)
- [status\_code](SerpBingOrganicTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpBingOrganicTasksFixedResponseInfo.md#status_message)
- [tasks](SerpBingOrganicTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpBingOrganicTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingOrganicTasksFixedResponseInfo.md#tasks_error)
- [time](SerpBingOrganicTasksFixedResponseInfo.md#time)
- [version](SerpBingOrganicTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpBingOrganicTasksFixedResponseInfo.md#init)
- [toJSON](SerpBingOrganicTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpBingOrganicTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTasksFixedResponseInfo**(`data?`): [`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md) |

#### Returns

[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:54159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54159)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTasksFixedResponseInfo](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[cost](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#cost)

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

[ISerpBingOrganicTasksFixedResponseInfo](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#status_code)

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

[ISerpBingOrganicTasksFixedResponseInfo](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpBingOrganicTasksFixedTaskInfo`](SerpBingOrganicTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingOrganicTasksFixedResponseInfo](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks)

#### Defined in

[main.ts:54155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54155)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingOrganicTasksFixedResponseInfo](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingOrganicTasksFixedResponseInfo](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingOrganicTasksFixedResponseInfo](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[time](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingOrganicTasksFixedResponseInfo](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[version](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#version)

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

[main.ts:54163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54163)

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

[main.ts:54185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54185)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:54178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54178)
