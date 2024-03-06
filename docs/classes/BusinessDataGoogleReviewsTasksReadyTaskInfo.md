[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleReviewsTasksReadyTaskInfo

# Class: BusinessDataGoogleReviewsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataGoogleReviewsTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#cost)
- [data](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#data)
- [id](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#id)
- [path](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#path)
- [result](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleReviewsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleReviewsTasksReadyTaskInfo**(`data?`): [`BusinessDataGoogleReviewsTasksReadyTaskInfo`](BusinessDataGoogleReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleReviewsTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataGoogleReviewsTasksReadyTaskInfo`](BusinessDataGoogleReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:198060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198060)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md#cost)

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

[IBusinessDataGoogleReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md#data)

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

[IBusinessDataGoogleReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:198056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198056)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataGoogleReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataGoogleReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataGoogleReviewsTasksReadyTaskInfo.md#time)

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

[main.ts:198064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198064)

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

[main.ts:198086](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198086)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleReviewsTasksReadyTaskInfo`](BusinessDataGoogleReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleReviewsTasksReadyTaskInfo`](BusinessDataGoogleReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:198079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198079)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")