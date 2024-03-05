[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpReviewsTaskGetTaskInfo

# Class: BusinessDataYelpReviewsTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataYelpReviewsTaskGetTaskInfo`**

## Implements

- [`IBusinessDataYelpReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpReviewsTaskGetTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpReviewsTaskGetTaskInfo.md#cost)
- [data](BusinessDataYelpReviewsTaskGetTaskInfo.md#data)
- [id](BusinessDataYelpReviewsTaskGetTaskInfo.md#id)
- [path](BusinessDataYelpReviewsTaskGetTaskInfo.md#path)
- [result](BusinessDataYelpReviewsTaskGetTaskInfo.md#result)
- [result\_count](BusinessDataYelpReviewsTaskGetTaskInfo.md#result_count)
- [status\_code](BusinessDataYelpReviewsTaskGetTaskInfo.md#status_code)
- [status\_message](BusinessDataYelpReviewsTaskGetTaskInfo.md#status_message)
- [time](BusinessDataYelpReviewsTaskGetTaskInfo.md#time)

### Methods

- [init](BusinessDataYelpReviewsTaskGetTaskInfo.md#init)
- [toJSON](BusinessDataYelpReviewsTaskGetTaskInfo.md#tojson)
- [fromJS](BusinessDataYelpReviewsTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpReviewsTaskGetTaskInfo**(`data?`): [`BusinessDataYelpReviewsTaskGetTaskInfo`](BusinessDataYelpReviewsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md) |

#### Returns

[`BusinessDataYelpReviewsTaskGetTaskInfo`](BusinessDataYelpReviewsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:205518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205518)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpReviewsTaskGetTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md).[cost](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md#cost)

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

[IBusinessDataYelpReviewsTaskGetTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md).[data](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md#data)

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

[IBusinessDataYelpReviewsTaskGetTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md).[id](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataYelpReviewsTaskGetTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md).[path](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataYelpReviewsTaskGetResultInfo`](BusinessDataYelpReviewsTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataYelpReviewsTaskGetTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md).[result](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:205514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205514)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataYelpReviewsTaskGetTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md).[result_count](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md#result_count)

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

[IBusinessDataYelpReviewsTaskGetTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md).[status_code](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md#status_code)

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

[IBusinessDataYelpReviewsTaskGetTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md).[status_message](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataYelpReviewsTaskGetTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md).[time](../interfaces/IBusinessDataYelpReviewsTaskGetTaskInfo.md#time)

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

[main.ts:205522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205522)

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

[main.ts:205544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205544)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpReviewsTaskGetTaskInfo`](BusinessDataYelpReviewsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpReviewsTaskGetTaskInfo`](BusinessDataYelpReviewsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:205537](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205537)
