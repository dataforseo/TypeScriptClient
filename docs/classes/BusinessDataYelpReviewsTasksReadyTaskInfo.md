[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpReviewsTasksReadyTaskInfo

# Class: BusinessDataYelpReviewsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataYelpReviewsTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataYelpReviewsTasksReadyTaskInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpReviewsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpReviewsTasksReadyTaskInfo.md#cost)
- [data](BusinessDataYelpReviewsTasksReadyTaskInfo.md#data)
- [id](BusinessDataYelpReviewsTasksReadyTaskInfo.md#id)
- [path](BusinessDataYelpReviewsTasksReadyTaskInfo.md#path)
- [result](BusinessDataYelpReviewsTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataYelpReviewsTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataYelpReviewsTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataYelpReviewsTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataYelpReviewsTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataYelpReviewsTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataYelpReviewsTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataYelpReviewsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpReviewsTasksReadyTaskInfo**(`data?`): [`BusinessDataYelpReviewsTasksReadyTaskInfo`](BusinessDataYelpReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpReviewsTasksReadyTaskInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataYelpReviewsTasksReadyTaskInfo`](BusinessDataYelpReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:205128](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205128)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md#cost)

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

[IBusinessDataYelpReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md#data)

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

[IBusinessDataYelpReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataYelpReviewsTasksReadyResultInfo`](BusinessDataYelpReviewsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:205124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205124)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataYelpReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataYelpReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataYelpReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataYelpReviewsTasksReadyTaskInfo.md#time)

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

[main.ts:205132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205132)

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

[main.ts:205154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205154)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpReviewsTasksReadyTaskInfo`](BusinessDataYelpReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpReviewsTasksReadyTaskInfo`](BusinessDataYelpReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:205147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205147)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")