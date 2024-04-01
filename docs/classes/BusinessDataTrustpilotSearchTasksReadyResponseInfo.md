[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotSearchTasksReadyResponseInfo

# Class: BusinessDataTrustpilotSearchTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataTrustpilotSearchTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#time)
- [version](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotSearchTasksReadyResponseInfo**(`data?`): [`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:204522

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#cost)

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

[IBusinessDataTrustpilotSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataTrustpilotSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataTrustpilotSearchTasksReadyTaskInfo`](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:204518

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#version)

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

main.ts:204526

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

main.ts:204548

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:204541
