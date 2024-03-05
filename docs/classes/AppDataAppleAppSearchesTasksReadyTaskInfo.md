[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppSearchesTasksReadyTaskInfo

# Class: AppDataAppleAppSearchesTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataAppleAppSearchesTasksReadyTaskInfo`**

## Implements

- [`IAppDataAppleAppSearchesTasksReadyTaskInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppSearchesTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppSearchesTasksReadyTaskInfo.md#cost)
- [data](AppDataAppleAppSearchesTasksReadyTaskInfo.md#data)
- [id](AppDataAppleAppSearchesTasksReadyTaskInfo.md#id)
- [path](AppDataAppleAppSearchesTasksReadyTaskInfo.md#path)
- [result](AppDataAppleAppSearchesTasksReadyTaskInfo.md#result)
- [result\_count](AppDataAppleAppSearchesTasksReadyTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppSearchesTasksReadyTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppSearchesTasksReadyTaskInfo.md#status_message)
- [time](AppDataAppleAppSearchesTasksReadyTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppSearchesTasksReadyTaskInfo.md#init)
- [toJSON](AppDataAppleAppSearchesTasksReadyTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppSearchesTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppSearchesTasksReadyTaskInfo**(`data?`): [`AppDataAppleAppSearchesTasksReadyTaskInfo`](AppDataAppleAppSearchesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppSearchesTasksReadyTaskInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md) |

#### Returns

[`AppDataAppleAppSearchesTasksReadyTaskInfo`](AppDataAppleAppSearchesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:183526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183526)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyTaskInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md).[cost](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md#cost)

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

[IAppDataAppleAppSearchesTasksReadyTaskInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md).[data](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md#data)

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

[IAppDataAppleAppSearchesTasksReadyTaskInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md).[id](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyTaskInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md).[path](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyTaskInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md).[result](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:183522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183522)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyTaskInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md#result_count)

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

[IAppDataAppleAppSearchesTasksReadyTaskInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md#status_code)

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

[IAppDataAppleAppSearchesTasksReadyTaskInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyTaskInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md).[time](../interfaces/IAppDataAppleAppSearchesTasksReadyTaskInfo.md#time)

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

[main.ts:183530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183530)

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

[main.ts:183552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183552)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppSearchesTasksReadyTaskInfo`](AppDataAppleAppSearchesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppSearchesTasksReadyTaskInfo`](AppDataAppleAppSearchesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:183545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183545)
