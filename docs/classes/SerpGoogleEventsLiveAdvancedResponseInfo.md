[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleEventsLiveAdvancedResponseInfo

# Class: SerpGoogleEventsLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleEventsLiveAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleEventsLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleEventsLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleEventsLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleEventsLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleEventsLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleEventsLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleEventsLiveAdvancedResponseInfo.md#time)
- [version](SerpGoogleEventsLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleEventsLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleEventsLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleEventsLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsLiveAdvancedResponseInfo**(`data?`): [`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:45517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45517)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#cost)

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

[ISerpGoogleEventsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleEventsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleEventsLiveAdvancedTaskInfo`](SerpGoogleEventsLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:45513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45513)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#version)

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

[main.ts:45521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45521)

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

[main.ts:45543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45543)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:45536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L45536)
