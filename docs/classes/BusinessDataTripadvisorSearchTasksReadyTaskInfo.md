[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorSearchTasksReadyTaskInfo

# Class: BusinessDataTripadvisorSearchTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataTripadvisorSearchTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataTripadvisorSearchTasksReadyTaskInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#cost)
- [data](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#data)
- [id](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#id)
- [path](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#path)
- [result](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorSearchTasksReadyTaskInfo**(`data?`): [`BusinessDataTripadvisorSearchTasksReadyTaskInfo`](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorSearchTasksReadyTaskInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyTaskInfo`](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:201262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201262)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md#cost)

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

[IBusinessDataTripadvisorSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md#data)

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

[IBusinessDataTripadvisorSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:201258](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201258)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataTripadvisorSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataTripadvisorSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataTripadvisorSearchTasksReadyTaskInfo.md#time)

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

[main.ts:201266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201266)

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

[main.ts:201288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201288)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorSearchTasksReadyTaskInfo`](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyTaskInfo`](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:201281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201281)
