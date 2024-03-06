[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkNewLostBacklinksLiveResponseInfo

# Class: BacklinksBulkNewLostBacklinksLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksBulkNewLostBacklinksLiveResponseInfo`**

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#cost)
- [status\_code](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#status_code)
- [status\_message](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#status_message)
- [tasks](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#tasks_error)
- [time](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#time)
- [version](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#version)

### Methods

- [init](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#init)
- [toJSON](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#tojson)
- [fromJS](BacklinksBulkNewLostBacklinksLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkNewLostBacklinksLiveResponseInfo**(`data?`): [`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md) |

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:141000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141000)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[cost](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#cost)

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

[IBacklinksBulkNewLostBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[status_code](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#status_code)

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

[IBacklinksBulkNewLostBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[status_message](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksBulkNewLostBacklinksLiveTaskInfo`](BacklinksBulkNewLostBacklinksLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[tasks](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:140996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140996)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[time](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[version](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#version)

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

[main.ts:141004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141004)

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

[main.ts:141026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141026)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:141019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141019)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")