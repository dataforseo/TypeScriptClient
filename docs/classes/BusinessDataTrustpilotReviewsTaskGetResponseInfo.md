[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTaskGetResponseInfo

# Class: BusinessDataTrustpilotReviewsTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataTrustpilotReviewsTaskGetResponseInfo`**

## Implements

- [`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#cost)
- [status\_code](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#status_message)
- [tasks](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tasks_error)
- [time](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#time)
- [version](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#version)

### Methods

- [init](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#init)
- [toJSON](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotReviewsTaskGetResponseInfo**(`data?`): [`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md) |

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:200415

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[cost](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#cost)

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

[IBusinessDataTrustpilotReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#status_code)

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

[IBusinessDataTrustpilotReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataTrustpilotReviewsTaskGetTaskInfo`](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[tasks](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:200411

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[time](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[version](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#version)

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

main.ts:200419

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

main.ts:200441

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:200434
