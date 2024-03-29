[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkRanksLiveResponseInfo

# Class: BacklinksBulkRanksLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksBulkRanksLiveResponseInfo`**

## Implements

- [`IBacklinksBulkRanksLiveResponseInfo`](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkRanksLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksBulkRanksLiveResponseInfo.md#cost)
- [status\_code](BacklinksBulkRanksLiveResponseInfo.md#status_code)
- [status\_message](BacklinksBulkRanksLiveResponseInfo.md#status_message)
- [tasks](BacklinksBulkRanksLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksBulkRanksLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksBulkRanksLiveResponseInfo.md#tasks_error)
- [time](BacklinksBulkRanksLiveResponseInfo.md#time)
- [version](BacklinksBulkRanksLiveResponseInfo.md#version)

### Methods

- [init](BacklinksBulkRanksLiveResponseInfo.md#init)
- [toJSON](BacklinksBulkRanksLiveResponseInfo.md#tojson)
- [fromJS](BacklinksBulkRanksLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkRanksLiveResponseInfo**(`data?`): [`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkRanksLiveResponseInfo`](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md) |

#### Returns

[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:139588](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139588)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBulkRanksLiveResponseInfo](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md).[cost](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md#cost)

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

[IBacklinksBulkRanksLiveResponseInfo](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md).[status_code](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md#status_code)

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

[IBacklinksBulkRanksLiveResponseInfo](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md).[status_message](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksBulkRanksLiveTaskInfo`](BacklinksBulkRanksLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksBulkRanksLiveResponseInfo](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md).[tasks](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:139584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139584)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksBulkRanksLiveResponseInfo](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksBulkRanksLiveResponseInfo](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksBulkRanksLiveResponseInfo](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md).[time](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksBulkRanksLiveResponseInfo](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md).[version](../interfaces/IBacklinksBulkRanksLiveResponseInfo.md#version)

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

[main.ts:139592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139592)

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

[main.ts:139614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139614)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:139607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139607)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")