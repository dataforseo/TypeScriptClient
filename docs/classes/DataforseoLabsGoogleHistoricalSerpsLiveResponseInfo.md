[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:96343

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo`](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:96339

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#version)

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

main.ts:96347

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

main.ts:96369

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:96362
