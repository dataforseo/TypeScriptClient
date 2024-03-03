[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsStatusResponseInfo

# Class: DataforseoLabsStatusResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsStatusResponseInfo`**

## Implements

- [`IDataforseoLabsStatusResponseInfo`](../interfaces/IDataforseoLabsStatusResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsStatusResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsStatusResponseInfo.md#cost)
- [status\_code](DataforseoLabsStatusResponseInfo.md#status_code)
- [status\_message](DataforseoLabsStatusResponseInfo.md#status_message)
- [tasks](DataforseoLabsStatusResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsStatusResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsStatusResponseInfo.md#tasks_error)
- [time](DataforseoLabsStatusResponseInfo.md#time)
- [version](DataforseoLabsStatusResponseInfo.md#version)

### Methods

- [init](DataforseoLabsStatusResponseInfo.md#init)
- [toJSON](DataforseoLabsStatusResponseInfo.md#tojson)
- [fromJS](DataforseoLabsStatusResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsStatusResponseInfo**(`data?`): [`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsStatusResponseInfo`](../interfaces/IDataforseoLabsStatusResponseInfo.md) |

#### Returns

[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:77093

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsStatusResponseInfo](../interfaces/IDataforseoLabsStatusResponseInfo.md).[cost](../interfaces/IDataforseoLabsStatusResponseInfo.md#cost)

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

[IDataforseoLabsStatusResponseInfo](../interfaces/IDataforseoLabsStatusResponseInfo.md).[status_code](../interfaces/IDataforseoLabsStatusResponseInfo.md#status_code)

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

[IDataforseoLabsStatusResponseInfo](../interfaces/IDataforseoLabsStatusResponseInfo.md).[status_message](../interfaces/IDataforseoLabsStatusResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsStatusTaskInfo`](DataforseoLabsStatusTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsStatusResponseInfo](../interfaces/IDataforseoLabsStatusResponseInfo.md).[tasks](../interfaces/IDataforseoLabsStatusResponseInfo.md#tasks)

#### Defined in

main.ts:77089

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsStatusResponseInfo](../interfaces/IDataforseoLabsStatusResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsStatusResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsStatusResponseInfo](../interfaces/IDataforseoLabsStatusResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsStatusResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsStatusResponseInfo](../interfaces/IDataforseoLabsStatusResponseInfo.md).[time](../interfaces/IDataforseoLabsStatusResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsStatusResponseInfo](../interfaces/IDataforseoLabsStatusResponseInfo.md).[version](../interfaces/IDataforseoLabsStatusResponseInfo.md#version)

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

main.ts:77097

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

main.ts:77119

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:77112
