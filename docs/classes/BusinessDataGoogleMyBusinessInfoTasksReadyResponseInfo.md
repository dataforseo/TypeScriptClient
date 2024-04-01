[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo

# Class: BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#time)
- [version](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo**(`data?`): [`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:196414

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:196410

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#version)

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

main.ts:196418

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

main.ts:196440

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:196433
