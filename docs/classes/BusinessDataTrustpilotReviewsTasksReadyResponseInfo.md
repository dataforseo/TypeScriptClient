[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTasksReadyResponseInfo

# Class: BusinessDataTrustpilotReviewsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#time)
- [version](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotReviewsTasksReadyResponseInfo**(`data?`): [`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:199823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199823)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#cost)

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

[IBusinessDataTrustpilotReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataTrustpilotReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataTrustpilotReviewsTasksReadyTaskInfo`](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:199819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199819)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#version)

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

[main.ts:199827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199827)

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

[main.ts:199849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199849)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:199842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199842)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")