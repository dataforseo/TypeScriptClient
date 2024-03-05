[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorReviewsTaskGetResponseInfo

# Class: BusinessDataTripadvisorReviewsTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataTripadvisorReviewsTaskGetResponseInfo`**

## Implements

- [`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#cost)
- [status\_code](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#status_message)
- [tasks](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tasks_error)
- [time](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#time)
- [version](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#version)

### Methods

- [init](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#init)
- [toJSON](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorReviewsTaskGetResponseInfo**(`data?`): [`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md) |

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:202735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202735)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[cost](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[tasks](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tasks)

#### Defined in

[main.ts:202731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202731)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[time](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResponseInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[version](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

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

[main.ts:202739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202739)

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

[main.ts:202761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202761)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:202754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202754)
