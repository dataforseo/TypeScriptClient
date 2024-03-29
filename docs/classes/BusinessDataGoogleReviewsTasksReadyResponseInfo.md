[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleReviewsTasksReadyResponseInfo

# Class: BusinessDataGoogleReviewsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleReviewsTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#time)
- [version](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleReviewsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleReviewsTasksReadyResponseInfo**(`data?`): [`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:198115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198115)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#cost)

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

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleReviewsTasksReadyTaskInfo`](BusinessDataGoogleReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:198111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198111)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#version)

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

[main.ts:198119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198119)

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

[main.ts:198141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198141)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:198134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198134)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")