[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo

# Class: DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:108319

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo`](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:108315

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#version)

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

main.ts:108323

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

main.ts:108345

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:108338
