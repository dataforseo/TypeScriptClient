[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTasksReadyResponseInfo

# Class: AppDataGoogleAppReviewsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleAppReviewsTasksReadyResponseInfo`**

## Implements

- [`IAppDataGoogleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#time)
- [version](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTasksReadyResponseInfo**(`data?`): [`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:181225

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md#cost)

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

[IAppDataGoogleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md#status_code)

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

[IAppDataGoogleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleAppReviewsTasksReadyTaskInfo`](AppDataGoogleAppReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:181221

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md).[time](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md).[version](../interfaces/IAppDataGoogleAppReviewsTasksReadyResponseInfo.md#version)

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

main.ts:181229

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

main.ts:181251

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:181244
