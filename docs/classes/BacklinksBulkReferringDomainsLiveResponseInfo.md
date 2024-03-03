[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkReferringDomainsLiveResponseInfo

# Class: BacklinksBulkReferringDomainsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BacklinksBulkReferringDomainsLiveResponseInfo`**

## Implements

- [`IBacklinksBulkReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkReferringDomainsLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksBulkReferringDomainsLiveResponseInfo.md#cost)
- [status\_code](BacklinksBulkReferringDomainsLiveResponseInfo.md#status_code)
- [status\_message](BacklinksBulkReferringDomainsLiveResponseInfo.md#status_message)
- [tasks](BacklinksBulkReferringDomainsLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksBulkReferringDomainsLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksBulkReferringDomainsLiveResponseInfo.md#tasks_error)
- [time](BacklinksBulkReferringDomainsLiveResponseInfo.md#time)
- [version](BacklinksBulkReferringDomainsLiveResponseInfo.md#version)

### Methods

- [init](BacklinksBulkReferringDomainsLiveResponseInfo.md#init)
- [toJSON](BacklinksBulkReferringDomainsLiveResponseInfo.md#tojson)
- [fromJS](BacklinksBulkReferringDomainsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkReferringDomainsLiveResponseInfo**(`data?`): [`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md) |

#### Returns

[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:140770

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBulkReferringDomainsLiveResponseInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md).[cost](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md#cost)

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

[IBacklinksBulkReferringDomainsLiveResponseInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md).[status_code](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md#status_code)

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

[IBacklinksBulkReferringDomainsLiveResponseInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md).[status_message](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BacklinksBulkReferringDomainsLiveTaskInfo`](BacklinksBulkReferringDomainsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksBulkReferringDomainsLiveResponseInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md).[tasks](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:140766

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksBulkReferringDomainsLiveResponseInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksBulkReferringDomainsLiveResponseInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksBulkReferringDomainsLiveResponseInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md).[time](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksBulkReferringDomainsLiveResponseInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md).[version](../interfaces/IBacklinksBulkReferringDomainsLiveResponseInfo.md#version)

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

main.ts:140774

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

main.ts:140796

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:140789
