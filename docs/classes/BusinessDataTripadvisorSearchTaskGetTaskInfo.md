[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorSearchTaskGetTaskInfo

# Class: BusinessDataTripadvisorSearchTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataTripadvisorSearchTaskGetTaskInfo`**

## Implements

- [`IBusinessDataTripadvisorSearchTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#cost)
- [data](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#data)
- [id](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#id)
- [path](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#path)
- [result](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#result)
- [result\_count](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#result_count)
- [status\_code](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#status_message)
- [time](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#time)

### Methods

- [init](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#init)
- [toJSON](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorSearchTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorSearchTaskGetTaskInfo**(`data?`): [`BusinessDataTripadvisorSearchTaskGetTaskInfo`](BusinessDataTripadvisorSearchTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorSearchTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md) |

#### Returns

[`BusinessDataTripadvisorSearchTaskGetTaskInfo`](BusinessDataTripadvisorSearchTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:201614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201614)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md).[cost](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md#cost)

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

[IBusinessDataTripadvisorSearchTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md).[data](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md#data)

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

[IBusinessDataTripadvisorSearchTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md).[id](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md).[path](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md).[result](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:201610](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201610)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md).[result_count](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md#result_count)

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

[IBusinessDataTripadvisorSearchTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md#status_code)

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

[IBusinessDataTripadvisorSearchTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetTaskInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md).[time](../interfaces/IBusinessDataTripadvisorSearchTaskGetTaskInfo.md#time)

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

[main.ts:201618](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201618)

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

[main.ts:201640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201640)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskGetTaskInfo`](BusinessDataTripadvisorSearchTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorSearchTaskGetTaskInfo`](BusinessDataTripadvisorSearchTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:201633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201633)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")