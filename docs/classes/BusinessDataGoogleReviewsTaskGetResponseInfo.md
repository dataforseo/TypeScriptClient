[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleReviewsTaskGetResponseInfo

# Class: BusinessDataGoogleReviewsTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleReviewsTaskGetResponseInfo`**

## Implements

- [`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleReviewsTaskGetResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleReviewsTaskGetResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleReviewsTaskGetResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleReviewsTaskGetResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleReviewsTaskGetResponseInfo.md#time)
- [version](BusinessDataGoogleReviewsTaskGetResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleReviewsTaskGetResponseInfo.md#init)
- [toJSON](BusinessDataGoogleReviewsTaskGetResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleReviewsTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleReviewsTaskGetResponseInfo**(`data?`): [`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md) |

#### Returns

[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:198735

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleReviewsTaskGetTaskInfo`](BusinessDataGoogleReviewsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:198731

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[time](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[version](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:198739

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

main.ts:198761

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:198754
