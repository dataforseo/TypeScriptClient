[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorReviewsTasksReadyTaskInfo

# Class: BusinessDataTripadvisorReviewsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataTripadvisorReviewsTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataTripadvisorReviewsTasksReadyTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#cost)
- [data](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#data)
- [id](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#id)
- [path](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#path)
- [result](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorReviewsTasksReadyTaskInfo**(`data?`): [`BusinessDataTripadvisorReviewsTasksReadyTaskInfo`](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorReviewsTasksReadyTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyTaskInfo`](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:202230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202230)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:202226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202226)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

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

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

[main.ts:202234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202234)

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

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

[main.ts:202256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202256)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTasksReadyTaskInfo`](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyTaskInfo`](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:202249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202249)
