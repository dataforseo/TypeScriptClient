[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#time)
- [version](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo**(`data?`): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:198173

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:198169

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[version](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#version)

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

main.ts:198177

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

main.ts:198199

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:198192
