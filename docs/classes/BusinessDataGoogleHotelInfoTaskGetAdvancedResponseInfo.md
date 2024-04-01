[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo

# Class: BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#time)
- [version](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo**(`data?`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:201725

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:201721

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#version)

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

main.ts:201729

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

main.ts:201751

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:201744
