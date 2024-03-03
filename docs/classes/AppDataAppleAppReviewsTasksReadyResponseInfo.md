[Documentation](../README.md) / [Exports](../modules.md) / AppDataAppleAppReviewsTasksReadyResponseInfo

# Class: AppDataAppleAppReviewsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataAppleAppReviewsTasksReadyResponseInfo`**

## Implements

- [`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppReviewsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppReviewsTasksReadyResponseInfo.md#cost)
- [status\_code](AppDataAppleAppReviewsTasksReadyResponseInfo.md#status_code)
- [status\_message](AppDataAppleAppReviewsTasksReadyResponseInfo.md#status_message)
- [tasks](AppDataAppleAppReviewsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleAppReviewsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleAppReviewsTasksReadyResponseInfo.md#tasks_error)
- [time](AppDataAppleAppReviewsTasksReadyResponseInfo.md#time)
- [version](AppDataAppleAppReviewsTasksReadyResponseInfo.md#version)

### Methods

- [init](AppDataAppleAppReviewsTasksReadyResponseInfo.md#init)
- [toJSON](AppDataAppleAppReviewsTasksReadyResponseInfo.md#tojson)
- [fromJS](AppDataAppleAppReviewsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppReviewsTasksReadyResponseInfo**(`data?`): [`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md) |

#### Returns

[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:186271

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[cost](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#cost)

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

[IAppDataAppleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[status_code](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#status_code)

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

[IAppDataAppleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[status_message](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataAppleAppReviewsTasksReadyTaskInfo`](AppDataAppleAppReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[tasks](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:186267

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[time](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResponseInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[version](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#version)

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

main.ts:186275

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

main.ts:186297

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:186290
