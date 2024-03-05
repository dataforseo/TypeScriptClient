[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTasksFixedResponseInfo

# Class: SerpNaverOrganicTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpNaverOrganicTasksFixedResponseInfo`**

## Implements

- [`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTasksFixedResponseInfo.md#cost)
- [status\_code](SerpNaverOrganicTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpNaverOrganicTasksFixedResponseInfo.md#status_message)
- [tasks](SerpNaverOrganicTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpNaverOrganicTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpNaverOrganicTasksFixedResponseInfo.md#tasks_error)
- [time](SerpNaverOrganicTasksFixedResponseInfo.md#time)
- [version](SerpNaverOrganicTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpNaverOrganicTasksFixedResponseInfo.md#init)
- [toJSON](SerpNaverOrganicTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpNaverOrganicTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTasksFixedResponseInfo**(`data?`): [`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md) |

#### Returns

[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:67957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67957)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTasksFixedResponseInfo](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[cost](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#cost)

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

[ISerpNaverOrganicTasksFixedResponseInfo](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#status_code)

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

[ISerpNaverOrganicTasksFixedResponseInfo](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpNaverOrganicTasksFixedTaskInfo`](SerpNaverOrganicTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpNaverOrganicTasksFixedResponseInfo](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#tasks)

#### Defined in

[main.ts:67953](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67953)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpNaverOrganicTasksFixedResponseInfo](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpNaverOrganicTasksFixedResponseInfo](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpNaverOrganicTasksFixedResponseInfo](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[time](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpNaverOrganicTasksFixedResponseInfo](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[version](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#version)

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

[main.ts:67961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67961)

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

[main.ts:67983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67983)

___

### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:67976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67976)
