[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo

# Class: BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#time)
- [version](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo**(`data?`): [`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:197410

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleMyBusinessInfoTaskGetTaskInfo`](BusinessDataGoogleMyBusinessInfoTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:197406

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md).[version](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md#version)

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

main.ts:197414

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

main.ts:197436

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:197429
