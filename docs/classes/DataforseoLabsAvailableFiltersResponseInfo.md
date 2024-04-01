[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAvailableFiltersResponseInfo

# Class: DataforseoLabsAvailableFiltersResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsAvailableFiltersResponseInfo`**

## Implements

- [`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAvailableFiltersResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAvailableFiltersResponseInfo.md#cost)
- [status\_code](DataforseoLabsAvailableFiltersResponseInfo.md#status_code)
- [status\_message](DataforseoLabsAvailableFiltersResponseInfo.md#status_message)
- [tasks](DataforseoLabsAvailableFiltersResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsAvailableFiltersResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsAvailableFiltersResponseInfo.md#tasks_error)
- [time](DataforseoLabsAvailableFiltersResponseInfo.md#time)
- [version](DataforseoLabsAvailableFiltersResponseInfo.md#version)

### Methods

- [init](DataforseoLabsAvailableFiltersResponseInfo.md#init)
- [toJSON](DataforseoLabsAvailableFiltersResponseInfo.md#tojson)
- [fromJS](DataforseoLabsAvailableFiltersResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAvailableFiltersResponseInfo**(`data?`): [`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md) |

#### Returns

[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:80169

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAvailableFiltersResponseInfo](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[cost](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#cost)

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

[IDataforseoLabsAvailableFiltersResponseInfo](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[status_code](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#status_code)

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

[IDataforseoLabsAvailableFiltersResponseInfo](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[status_message](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsAvailableFiltersTaskInfo`](DataforseoLabsAvailableFiltersTaskInfo.md)[]

#### Implementation of

[IDataforseoLabsAvailableFiltersResponseInfo](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[tasks](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#tasks)

#### Defined in

main.ts:80165

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsAvailableFiltersResponseInfo](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsAvailableFiltersResponseInfo](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsAvailableFiltersResponseInfo](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[time](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsAvailableFiltersResponseInfo](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[version](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#version)

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

main.ts:80173

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

main.ts:80195

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:80188
