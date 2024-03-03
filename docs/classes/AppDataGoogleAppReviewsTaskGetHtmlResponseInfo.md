[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTaskGetHtmlResponseInfo

# Class: AppDataGoogleAppReviewsTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`**

## Implements

- [`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#time)
- [version](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTaskGetHtmlResponseInfo**(`data?`): [`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:181963

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#cost)

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

[IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#status_code)

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

[IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleAppReviewsTaskGetHtmlTaskInfo`](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:181959

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[time](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[version](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#version)

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

main.ts:181967

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

main.ts:181989

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:181982
