[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleEventsTasksFixedResponseInfo

# Class: SerpGoogleEventsTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleEventsTasksFixedResponseInfo`**

## Implements

- [`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleEventsTasksFixedResponseInfo.md#cost)
- [status\_code](SerpGoogleEventsTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpGoogleEventsTasksFixedResponseInfo.md#status_message)
- [tasks](SerpGoogleEventsTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleEventsTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleEventsTasksFixedResponseInfo.md#tasks_error)
- [time](SerpGoogleEventsTasksFixedResponseInfo.md#time)
- [version](SerpGoogleEventsTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpGoogleEventsTasksFixedResponseInfo.md#init)
- [toJSON](SerpGoogleEventsTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpGoogleEventsTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsTasksFixedResponseInfo**(`data?`): [`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md) |

#### Returns

[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:44371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44371)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleEventsTasksFixedResponseInfo](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[cost](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#cost)

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

[ISerpGoogleEventsTasksFixedResponseInfo](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#status_code)

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

[ISerpGoogleEventsTasksFixedResponseInfo](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleEventsTasksFixedTaskInfo`](SerpGoogleEventsTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleEventsTasksFixedResponseInfo](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#tasks)

#### Defined in

[main.ts:44367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44367)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleEventsTasksFixedResponseInfo](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleEventsTasksFixedResponseInfo](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleEventsTasksFixedResponseInfo](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[time](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleEventsTasksFixedResponseInfo](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[version](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#version)

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

[main.ts:44375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44375)

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

[main.ts:44397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44397)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:44390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44390)
