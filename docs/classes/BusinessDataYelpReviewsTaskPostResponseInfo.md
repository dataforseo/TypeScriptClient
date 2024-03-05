[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpReviewsTaskPostResponseInfo

# Class: BusinessDataYelpReviewsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataYelpReviewsTaskPostResponseInfo`**

## Implements

- [`IBusinessDataYelpReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpReviewsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpReviewsTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataYelpReviewsTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataYelpReviewsTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataYelpReviewsTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataYelpReviewsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataYelpReviewsTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataYelpReviewsTaskPostResponseInfo.md#time)
- [version](BusinessDataYelpReviewsTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataYelpReviewsTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataYelpReviewsTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataYelpReviewsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpReviewsTaskPostResponseInfo**(`data?`): [`BusinessDataYelpReviewsTaskPostResponseInfo`](BusinessDataYelpReviewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataYelpReviewsTaskPostResponseInfo`](BusinessDataYelpReviewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:204987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204987)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpReviewsTaskPostResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md#cost)

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

[IBusinessDataYelpReviewsTaskPostResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md#status_code)

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

[IBusinessDataYelpReviewsTaskPostResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BusinessDataYelpReviewsTaskPostTaskInfo`](BusinessDataYelpReviewsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataYelpReviewsTaskPostResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:204983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204983)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataYelpReviewsTaskPostResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataYelpReviewsTaskPostResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataYelpReviewsTaskPostResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataYelpReviewsTaskPostResponseInfo](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataYelpReviewsTaskPostResponseInfo.md#version)

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

[main.ts:204991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204991)

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

[main.ts:205013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205013)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpReviewsTaskPostResponseInfo`](BusinessDataYelpReviewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpReviewsTaskPostResponseInfo`](BusinessDataYelpReviewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:205006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205006)
