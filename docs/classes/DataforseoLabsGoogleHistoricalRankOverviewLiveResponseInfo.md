[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:96815

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks)

#### Defined in

main.ts:96811

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#version)

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

main.ts:96819

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

main.ts:96841

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:96834
