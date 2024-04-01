[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo

# Class: DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:86014

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo`](DataforseoLabsGoogleCategoriesForDomainLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#tasks)

#### Defined in

main.ts:86010

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md#version)

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

main.ts:86018

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

main.ts:86040

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:86033
