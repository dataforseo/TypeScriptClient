[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAvailableHistoryResponseInfo

# Class: DataforseoLabsGoogleAvailableHistoryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleAvailableHistoryResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleAvailableHistoryResponseInfo`](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#time)
- [version](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleAvailableHistoryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAvailableHistoryResponseInfo**(`data?`): [`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAvailableHistoryResponseInfo`](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:80816

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryResponseInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23029

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryResponseInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23022

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryResponseInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleAvailableHistoryTaskInfo`](DataforseoLabsGoogleAvailableHistoryTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryResponseInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md#tasks)

#### Defined in

main.ts:80812

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryResponseInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryResponseInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryResponseInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleAvailableHistoryResponseInfo](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleAvailableHistoryResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:23019

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

main.ts:80820

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

main.ts:80842

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:80835
