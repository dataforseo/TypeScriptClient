[Documentation](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesSummaryLiveResponseInfo

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

main.ts:134470

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[cost](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

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

main.ts:22645

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

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BacklinksDomainPagesSummaryLiveTaskInfo`](BacklinksDomainPagesSummaryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[tasks](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#tasks)

#### Defined in

main.ts:134466

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[time](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResponseInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[version](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:134474

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

main.ts:134496

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

main.ts:134489
