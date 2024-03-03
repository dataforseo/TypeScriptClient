[Documentation](../README.md) / [Exports](../modules.md) / BacklinksSummaryLiveResponseInfo

# Class: BacklinksSummaryLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BacklinksSummaryLiveResponseInfo`**

## Implements

- [`IBacklinksSummaryLiveResponseInfo`](../interfaces/IBacklinksSummaryLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksSummaryLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksSummaryLiveResponseInfo.md#cost)
- [status\_code](BacklinksSummaryLiveResponseInfo.md#status_code)
- [status\_message](BacklinksSummaryLiveResponseInfo.md#status_message)
- [tasks](BacklinksSummaryLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksSummaryLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksSummaryLiveResponseInfo.md#tasks_error)
- [time](BacklinksSummaryLiveResponseInfo.md#time)
- [version](BacklinksSummaryLiveResponseInfo.md#version)

### Methods

- [init](BacklinksSummaryLiveResponseInfo.md#init)
- [toJSON](BacklinksSummaryLiveResponseInfo.md#tojson)
- [fromJS](BacklinksSummaryLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksSummaryLiveResponseInfo**(`data?`): [`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksSummaryLiveResponseInfo`](../interfaces/IBacklinksSummaryLiveResponseInfo.md) |

#### Returns

[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:129998

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksSummaryLiveResponseInfo](../interfaces/IBacklinksSummaryLiveResponseInfo.md).[cost](../interfaces/IBacklinksSummaryLiveResponseInfo.md#cost)

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

[IBacklinksSummaryLiveResponseInfo](../interfaces/IBacklinksSummaryLiveResponseInfo.md).[status_code](../interfaces/IBacklinksSummaryLiveResponseInfo.md#status_code)

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

[IBacklinksSummaryLiveResponseInfo](../interfaces/IBacklinksSummaryLiveResponseInfo.md).[status_message](../interfaces/IBacklinksSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BacklinksSummaryLiveTaskInfo`](BacklinksSummaryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksSummaryLiveResponseInfo](../interfaces/IBacklinksSummaryLiveResponseInfo.md).[tasks](../interfaces/IBacklinksSummaryLiveResponseInfo.md#tasks)

#### Defined in

main.ts:129994

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksSummaryLiveResponseInfo](../interfaces/IBacklinksSummaryLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksSummaryLiveResponseInfo](../interfaces/IBacklinksSummaryLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksSummaryLiveResponseInfo](../interfaces/IBacklinksSummaryLiveResponseInfo.md).[time](../interfaces/IBacklinksSummaryLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksSummaryLiveResponseInfo](../interfaces/IBacklinksSummaryLiveResponseInfo.md).[version](../interfaces/IBacklinksSummaryLiveResponseInfo.md#version)

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

main.ts:130002

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

main.ts:130024

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:130017
