[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesSummaryLiveResponseInfo

# Class: BacklinksDomainPagesSummaryLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BacklinksDomainPagesSummaryLiveResponseInfo`**

## Implements

- [`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainPagesSummaryLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksDomainPagesSummaryLiveResponseInfo.md#cost)
- [status\_code](BacklinksDomainPagesSummaryLiveResponseInfo.md#status_code)
- [status\_message](BacklinksDomainPagesSummaryLiveResponseInfo.md#status_message)
- [tasks](BacklinksDomainPagesSummaryLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksDomainPagesSummaryLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksDomainPagesSummaryLiveResponseInfo.md#tasks_error)
- [time](BacklinksDomainPagesSummaryLiveResponseInfo.md#time)
- [version](BacklinksDomainPagesSummaryLiveResponseInfo.md#version)

### Methods

- [init](BacklinksDomainPagesSummaryLiveResponseInfo.md#init)
- [toJSON](BacklinksDomainPagesSummaryLiveResponseInfo.md#tojson)
- [fromJS](BacklinksDomainPagesSummaryLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainPagesSummaryLiveResponseInfo**(`data?`): [`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md) |

#### Returns

[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:134326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134326)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[cost](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#cost)

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

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[status_code](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#status_code)

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

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[status_message](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BacklinksDomainPagesSummaryLiveTaskInfo`](BacklinksDomainPagesSummaryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[tasks](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:134322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134322)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[time](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[version](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#version)

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

[main.ts:134330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134330)

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

[main.ts:134352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134352)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:134345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134345)
