[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTasksFixedResponseInfo

# Class: SerpGoogleLocalFinderTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleLocalFinderTasksFixedResponseInfo`**

## Implements

- [`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderTasksFixedResponseInfo.md#cost)
- [status\_code](SerpGoogleLocalFinderTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderTasksFixedResponseInfo.md#status_message)
- [tasks](SerpGoogleLocalFinderTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleLocalFinderTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleLocalFinderTasksFixedResponseInfo.md#tasks_error)
- [time](SerpGoogleLocalFinderTasksFixedResponseInfo.md#time)
- [version](SerpGoogleLocalFinderTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpGoogleLocalFinderTasksFixedResponseInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTasksFixedResponseInfo**(`data?`): [`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:40431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40431)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResponseInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#cost)

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

[ISerpGoogleLocalFinderTasksFixedResponseInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#status_code)

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

[ISerpGoogleLocalFinderTasksFixedResponseInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleLocalFinderTasksFixedTaskInfo`](SerpGoogleLocalFinderTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResponseInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#tasks)

#### Defined in

[main.ts:40427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40427)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResponseInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResponseInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResponseInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[time](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleLocalFinderTasksFixedResponseInfo](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[version](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#version)

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

[main.ts:40435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40435)

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

[main.ts:40457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40457)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:40450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40450)
