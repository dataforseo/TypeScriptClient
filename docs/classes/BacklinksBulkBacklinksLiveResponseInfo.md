[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkBacklinksLiveResponseInfo

# Class: BacklinksBulkBacklinksLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksBulkBacklinksLiveResponseInfo`**

## Implements

- [`IBacklinksBulkBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkBacklinksLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksBulkBacklinksLiveResponseInfo.md#cost)
- [status\_code](BacklinksBulkBacklinksLiveResponseInfo.md#status_code)
- [status\_message](BacklinksBulkBacklinksLiveResponseInfo.md#status_message)
- [tasks](BacklinksBulkBacklinksLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksBulkBacklinksLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksBulkBacklinksLiveResponseInfo.md#tasks_error)
- [time](BacklinksBulkBacklinksLiveResponseInfo.md#time)
- [version](BacklinksBulkBacklinksLiveResponseInfo.md#version)

### Methods

- [init](BacklinksBulkBacklinksLiveResponseInfo.md#init)
- [toJSON](BacklinksBulkBacklinksLiveResponseInfo.md#tojson)
- [fromJS](BacklinksBulkBacklinksLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkBacklinksLiveResponseInfo**(`data?`): [`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md) |

#### Returns

[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:139924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139924)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBulkBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md).[cost](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md#cost)

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

[IBacklinksBulkBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md).[status_code](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md#status_code)

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

[IBacklinksBulkBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md).[status_message](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksBulkBacklinksLiveTaskInfo`](BacklinksBulkBacklinksLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksBulkBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md).[tasks](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:139920](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139920)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksBulkBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksBulkBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksBulkBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md).[time](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksBulkBacklinksLiveResponseInfo](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md).[version](../interfaces/IBacklinksBulkBacklinksLiveResponseInfo.md#version)

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

[main.ts:139928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139928)

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

[main.ts:139950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139950)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:139943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139943)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")