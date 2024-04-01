[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleReviewsTasksReadyResponseInfo

# Class: BusinessDataGoogleReviewsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleReviewsTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#time)
- [version](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleReviewsTasksReadyResponseInfo**(`data?`): [`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:203576

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#cost)

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

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleReviewsTasksReadyTaskInfo`](BusinessDataGoogleReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:203572

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#version)

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

main.ts:203580

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

main.ts:203602

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:203595
