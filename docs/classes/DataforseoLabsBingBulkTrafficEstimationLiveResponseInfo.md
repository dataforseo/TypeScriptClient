[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo

# Class: DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#time)
- [version](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo**(`data?`): [`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:102915

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tasks)

#### Defined in

main.ts:102911

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#version)

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

main.ts:102919

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

main.ts:102941

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:102934
