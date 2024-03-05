[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonReviewsTasksReadyResponseInfo

# Class: MerchantAmazonReviewsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonReviewsTasksReadyResponseInfo`**

## Implements

- [`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonReviewsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonReviewsTasksReadyResponseInfo.md#cost)
- [status\_code](MerchantAmazonReviewsTasksReadyResponseInfo.md#status_code)
- [status\_message](MerchantAmazonReviewsTasksReadyResponseInfo.md#status_message)
- [tasks](MerchantAmazonReviewsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonReviewsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonReviewsTasksReadyResponseInfo.md#tasks_error)
- [time](MerchantAmazonReviewsTasksReadyResponseInfo.md#time)
- [version](MerchantAmazonReviewsTasksReadyResponseInfo.md#version)

### Methods

- [init](MerchantAmazonReviewsTasksReadyResponseInfo.md#init)
- [toJSON](MerchantAmazonReviewsTasksReadyResponseInfo.md#tojson)
- [fromJS](MerchantAmazonReviewsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonReviewsTasksReadyResponseInfo**(`data?`): [`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md) |

#### Returns

[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:175491](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175491)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResponseInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[cost](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#cost)

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

[IMerchantAmazonReviewsTasksReadyResponseInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[status_code](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#status_code)

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

[IMerchantAmazonReviewsTasksReadyResponseInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[status_message](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonReviewsTasksReadyTaskInfo`](MerchantAmazonReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResponseInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[tasks](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:175487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175487)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResponseInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResponseInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResponseInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[time](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonReviewsTasksReadyResponseInfo](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[version](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#version)

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

[main.ts:175495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175495)

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

[main.ts:175517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175517)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:175510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175510)
