[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTaskPostResponseInfo

# Class: BusinessDataTrustpilotReviewsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataTrustpilotReviewsTaskPostResponseInfo`**

## Implements

- [`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#time)
- [version](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotReviewsTaskPostResponseInfo**(`data?`): [`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:199635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199635)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#cost)

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

[IBusinessDataTrustpilotReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#status_code)

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

[IBusinessDataTrustpilotReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataTrustpilotReviewsTaskPostTaskInfo`](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:199631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199631)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#version)

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

[main.ts:199639](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199639)

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

[main.ts:199661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199661)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:199654](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199654)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")