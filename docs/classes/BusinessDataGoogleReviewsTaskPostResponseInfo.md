[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleReviewsTaskPostResponseInfo

# Class: BusinessDataGoogleReviewsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleReviewsTaskPostResponseInfo`**

## Implements

- [`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleReviewsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleReviewsTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleReviewsTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleReviewsTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleReviewsTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleReviewsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleReviewsTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleReviewsTaskPostResponseInfo.md#time)
- [version](BusinessDataGoogleReviewsTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleReviewsTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataGoogleReviewsTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleReviewsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleReviewsTaskPostResponseInfo**(`data?`): [`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:198039

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#cost)

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

[IBusinessDataGoogleReviewsTaskPostResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#status_code)

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

[IBusinessDataGoogleReviewsTaskPostResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleReviewsTaskPostTaskInfo`](BusinessDataGoogleReviewsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:198035

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleReviewsTaskPostResponseInfo](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#version)

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

main.ts:198043

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

main.ts:198065

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:198058
