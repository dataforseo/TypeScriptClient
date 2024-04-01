[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorReviewsTaskPostResponseInfo

# Class: BusinessDataTripadvisorReviewsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataTripadvisorReviewsTaskPostResponseInfo`**

## Implements

- [`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#time)
- [version](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorReviewsTaskPostResponseInfo**(`data?`): [`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:207558

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#cost)

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

[IBusinessDataTripadvisorReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#status_code)

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

[IBusinessDataTripadvisorReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataTripadvisorReviewsTaskPostTaskInfo`](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:207554

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#version)

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

main.ts:207562

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

main.ts:207584

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:207577
