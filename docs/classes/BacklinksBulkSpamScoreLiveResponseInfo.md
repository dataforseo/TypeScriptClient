[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkSpamScoreLiveResponseInfo

# Class: BacklinksBulkSpamScoreLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BacklinksBulkSpamScoreLiveResponseInfo`**

## Implements

- [`IBacklinksBulkSpamScoreLiveResponseInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkSpamScoreLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksBulkSpamScoreLiveResponseInfo.md#cost)
- [status\_code](BacklinksBulkSpamScoreLiveResponseInfo.md#status_code)
- [status\_message](BacklinksBulkSpamScoreLiveResponseInfo.md#status_message)
- [tasks](BacklinksBulkSpamScoreLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksBulkSpamScoreLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksBulkSpamScoreLiveResponseInfo.md#tasks_error)
- [time](BacklinksBulkSpamScoreLiveResponseInfo.md#time)
- [version](BacklinksBulkSpamScoreLiveResponseInfo.md#version)

### Methods

- [init](BacklinksBulkSpamScoreLiveResponseInfo.md#init)
- [toJSON](BacklinksBulkSpamScoreLiveResponseInfo.md#tojson)
- [fromJS](BacklinksBulkSpamScoreLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkSpamScoreLiveResponseInfo**(`data?`): [`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkSpamScoreLiveResponseInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md) |

#### Returns

[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:140268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140268)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBulkSpamScoreLiveResponseInfo](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md).[cost](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md#cost)

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

[IBacklinksBulkSpamScoreLiveResponseInfo](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md).[status_code](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md#status_code)

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

[IBacklinksBulkSpamScoreLiveResponseInfo](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md).[status_message](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BacklinksBulkSpamScoreLiveTaskInfo`](BacklinksBulkSpamScoreLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksBulkSpamScoreLiveResponseInfo](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md).[tasks](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:140264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140264)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksBulkSpamScoreLiveResponseInfo](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksBulkSpamScoreLiveResponseInfo](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksBulkSpamScoreLiveResponseInfo](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md).[time](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksBulkSpamScoreLiveResponseInfo](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md).[version](../interfaces/IBacklinksBulkSpamScoreLiveResponseInfo.md#version)

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

[main.ts:140272](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140272)

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

[main.ts:140294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140294)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:140287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140287)
