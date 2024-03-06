[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpSearchTasksReadyTaskInfo

# Class: BusinessDataYelpSearchTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataYelpSearchTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataYelpSearchTasksReadyTaskInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpSearchTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpSearchTasksReadyTaskInfo.md#cost)
- [data](BusinessDataYelpSearchTasksReadyTaskInfo.md#data)
- [id](BusinessDataYelpSearchTasksReadyTaskInfo.md#id)
- [path](BusinessDataYelpSearchTasksReadyTaskInfo.md#path)
- [result](BusinessDataYelpSearchTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataYelpSearchTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataYelpSearchTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataYelpSearchTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataYelpSearchTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataYelpSearchTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataYelpSearchTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataYelpSearchTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpSearchTasksReadyTaskInfo**(`data?`): [`BusinessDataYelpSearchTasksReadyTaskInfo`](BusinessDataYelpSearchTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpSearchTasksReadyTaskInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataYelpSearchTasksReadyTaskInfo`](BusinessDataYelpSearchTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:203766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203766)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpSearchTasksReadyTaskInfo](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md#cost)

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

[IBusinessDataYelpSearchTasksReadyTaskInfo](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md#data)

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

[IBusinessDataYelpSearchTasksReadyTaskInfo](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataYelpSearchTasksReadyTaskInfo](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataYelpSearchTasksReadyResultInfo`](BusinessDataYelpSearchTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataYelpSearchTasksReadyTaskInfo](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:203762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203762)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataYelpSearchTasksReadyTaskInfo](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataYelpSearchTasksReadyTaskInfo](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataYelpSearchTasksReadyTaskInfo](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataYelpSearchTasksReadyTaskInfo](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataYelpSearchTasksReadyTaskInfo.md#time)

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

[main.ts:203770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203770)

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

[main.ts:203792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203792)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpSearchTasksReadyTaskInfo`](BusinessDataYelpSearchTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpSearchTasksReadyTaskInfo`](BusinessDataYelpSearchTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:203785](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203785)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")