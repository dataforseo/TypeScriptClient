[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#cost)
- [data](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#data)
- [id](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#id)
- [path](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#path)
- [result](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#result)
- [result\_count](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#status_message)
- [time](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo**(`data?`): [`BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:192657](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192657)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md).[data](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#data)

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

[IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md).[id](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md).[path](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md).[result](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:192653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192653)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#result_count)

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

[IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md#time)

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

[main.ts:192661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192661)

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

[main.ts:192683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192683)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:192676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192676)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")