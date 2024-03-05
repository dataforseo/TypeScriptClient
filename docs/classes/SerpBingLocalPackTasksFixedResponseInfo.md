[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTasksFixedResponseInfo

# Class: SerpBingLocalPackTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingLocalPackTasksFixedResponseInfo`**

## Implements

- [`ISerpBingLocalPackTasksFixedResponseInfo`](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackTasksFixedResponseInfo.md#cost)
- [status\_code](SerpBingLocalPackTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpBingLocalPackTasksFixedResponseInfo.md#status_message)
- [tasks](SerpBingLocalPackTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpBingLocalPackTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingLocalPackTasksFixedResponseInfo.md#tasks_error)
- [time](SerpBingLocalPackTasksFixedResponseInfo.md#time)
- [version](SerpBingLocalPackTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpBingLocalPackTasksFixedResponseInfo.md#init)
- [toJSON](SerpBingLocalPackTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpBingLocalPackTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTasksFixedResponseInfo**(`data?`): [`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTasksFixedResponseInfo`](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md) |

#### Returns

[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:56165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56165)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[cost](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#cost)

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

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#status_code)

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

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpBingLocalPackTasksFixedTaskInfo`](SerpBingLocalPackTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#tasks)

#### Defined in

[main.ts:56161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56161)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[time](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[version](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#version)

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

[main.ts:56169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56169)

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

[main.ts:56191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56191)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:56184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56184)
