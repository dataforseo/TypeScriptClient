[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorReviewsTaskPostTaskInfo

# Class: BusinessDataTripadvisorReviewsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataTripadvisorReviewsTaskPostTaskInfo`**

## Implements

- [`IBusinessDataTripadvisorReviewsTaskPostTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#cost)
- [data](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#data)
- [id](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#id)
- [path](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#path)
- [result](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#result)
- [result\_count](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#result_count)
- [status\_code](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#status_message)
- [time](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#time)

### Methods

- [init](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#init)
- [toJSON](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorReviewsTaskPostTaskInfo**(`data?`): [`BusinessDataTripadvisorReviewsTaskPostTaskInfo`](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorReviewsTaskPostTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md) |

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostTaskInfo`](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:202049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202049)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md).[cost](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md#cost)

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

[IBusinessDataTripadvisorReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md).[data](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md#data)

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

[IBusinessDataTripadvisorReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md).[id](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md).[path](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md).[result](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:202045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202045)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md).[result_count](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md#result_count)

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

[IBusinessDataTripadvisorReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md#status_code)

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

[IBusinessDataTripadvisorReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md).[time](../interfaces/IBusinessDataTripadvisorReviewsTaskPostTaskInfo.md#time)

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

[main.ts:202053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202053)

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

[main.ts:202071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202071)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskPostTaskInfo`](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostTaskInfo`](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:202064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202064)
