[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo

# Class: AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`**

## Implements

- [`IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#time)
- [version](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo**(`data?`): [`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:181747

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#cost)

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

[IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#status_code)

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

[IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo`](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:181743

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md).[time](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md).[version](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md#version)

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

main.ts:181751

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

main.ts:181773

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:181766
