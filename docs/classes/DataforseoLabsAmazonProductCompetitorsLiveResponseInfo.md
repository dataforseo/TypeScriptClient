[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductCompetitorsLiveResponseInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#time)
- [version](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductCompetitorsLiveResponseInfo**(`data?`): [`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:101615

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#cost)

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

[IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsAmazonProductCompetitorsLiveTaskInfo`](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:101611

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#version)

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

main.ts:101619

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

main.ts:101641

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:101634
