[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorReviewsTaskGetTaskInfo

# Class: BusinessDataTripadvisorReviewsTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataTripadvisorReviewsTaskGetTaskInfo`**

## Implements

- [`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#cost)
- [data](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#data)
- [id](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#id)
- [path](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#path)
- [result](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#result)
- [result\_count](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#result_count)
- [status\_code](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#status_message)
- [time](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#time)

### Methods

- [init](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#init)
- [toJSON](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorReviewsTaskGetTaskInfo**(`data?`): [`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md) |

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:202680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202680)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[cost](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#cost)

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

[IBusinessDataTripadvisorReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[data](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#data)

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

[IBusinessDataTripadvisorReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[id](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[path](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[result](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:202676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202676)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[result_count](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#result_count)

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

[IBusinessDataTripadvisorReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#status_code)

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

[IBusinessDataTripadvisorReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[time](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#time)

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

[main.ts:202684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202684)

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

[main.ts:202706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202706)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:202699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202699)
