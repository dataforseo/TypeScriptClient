[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataYelpReviewsTaskGetResponseInfo

# Class: BusinessDataYelpReviewsTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataYelpReviewsTaskGetResponseInfo`**

## Implements

- [`IBusinessDataYelpReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpReviewsTaskGetResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpReviewsTaskGetResponseInfo.md#cost)
- [status\_code](BusinessDataYelpReviewsTaskGetResponseInfo.md#status_code)
- [status\_message](BusinessDataYelpReviewsTaskGetResponseInfo.md#status_message)
- [tasks](BusinessDataYelpReviewsTaskGetResponseInfo.md#tasks)
- [tasks\_count](BusinessDataYelpReviewsTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataYelpReviewsTaskGetResponseInfo.md#tasks_error)
- [time](BusinessDataYelpReviewsTaskGetResponseInfo.md#time)
- [version](BusinessDataYelpReviewsTaskGetResponseInfo.md#version)

### Methods

- [init](BusinessDataYelpReviewsTaskGetResponseInfo.md#init)
- [toJSON](BusinessDataYelpReviewsTaskGetResponseInfo.md#tojson)
- [fromJS](BusinessDataYelpReviewsTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpReviewsTaskGetResponseInfo**(`data?`): [`BusinessDataYelpReviewsTaskGetResponseInfo`](BusinessDataYelpReviewsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md) |

#### Returns

[`BusinessDataYelpReviewsTaskGetResponseInfo`](BusinessDataYelpReviewsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:205693

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md).[cost](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md#cost)

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

[IBusinessDataYelpReviewsTaskGetResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md).[status_code](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md#status_code)

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

[IBusinessDataYelpReviewsTaskGetResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md).[status_message](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataYelpReviewsTaskGetTaskInfo`](BusinessDataYelpReviewsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md).[tasks](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:205689

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md).[tasks_count](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md).[tasks_error](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md).[time](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md).[version](../interfaces/IBusinessDataYelpReviewsTaskGetResponseInfo.md#version)

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

main.ts:205697

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

main.ts:205719

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpReviewsTaskGetResponseInfo`](BusinessDataYelpReviewsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpReviewsTaskGetResponseInfo`](BusinessDataYelpReviewsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:205712
