[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorReviewsTasksReadyResponseInfo

# Class: BusinessDataTripadvisorReviewsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#time)
- [version](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorReviewsTasksReadyResponseInfo**(`data?`): [`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:207746

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#cost)

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

[IBusinessDataTripadvisorReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataTripadvisorReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataTripadvisorReviewsTasksReadyTaskInfo`](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:207742

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#version)

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

main.ts:207750

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

main.ts:207772

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:207765
