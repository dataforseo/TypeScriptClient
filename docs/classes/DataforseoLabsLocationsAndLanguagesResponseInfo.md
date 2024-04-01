[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsLocationsAndLanguagesResponseInfo

# Class: DataforseoLabsLocationsAndLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsLocationsAndLanguagesResponseInfo`**

## Implements

- [`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsLocationsAndLanguagesResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsLocationsAndLanguagesResponseInfo.md#cost)
- [status\_code](DataforseoLabsLocationsAndLanguagesResponseInfo.md#status_code)
- [status\_message](DataforseoLabsLocationsAndLanguagesResponseInfo.md#status_message)
- [tasks](DataforseoLabsLocationsAndLanguagesResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsLocationsAndLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsLocationsAndLanguagesResponseInfo.md#tasks_error)
- [time](DataforseoLabsLocationsAndLanguagesResponseInfo.md#time)
- [version](DataforseoLabsLocationsAndLanguagesResponseInfo.md#version)

### Methods

- [init](DataforseoLabsLocationsAndLanguagesResponseInfo.md#init)
- [toJSON](DataforseoLabsLocationsAndLanguagesResponseInfo.md#tojson)
- [fromJS](DataforseoLabsLocationsAndLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsLocationsAndLanguagesResponseInfo**(`data?`): [`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md) |

#### Returns

[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:80460

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResponseInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[cost](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#cost)

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

[IDataforseoLabsLocationsAndLanguagesResponseInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[status_code](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#status_code)

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

[IDataforseoLabsLocationsAndLanguagesResponseInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[status_message](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsLocationsAndLanguagesTaskInfo`](DataforseoLabsLocationsAndLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResponseInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[tasks](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:80456

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResponseInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResponseInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResponseInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[time](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesResponseInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[version](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#version)

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

main.ts:80464

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

main.ts:80486

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:80479
