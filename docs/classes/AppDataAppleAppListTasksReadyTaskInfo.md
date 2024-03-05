[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppListTasksReadyTaskInfo

# Class: AppDataAppleAppListTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataAppleAppListTasksReadyTaskInfo`**

## Implements

- [`IAppDataAppleAppListTasksReadyTaskInfo`](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppListTasksReadyTaskInfo.md#cost)
- [data](AppDataAppleAppListTasksReadyTaskInfo.md#data)
- [id](AppDataAppleAppListTasksReadyTaskInfo.md#id)
- [path](AppDataAppleAppListTasksReadyTaskInfo.md#path)
- [result](AppDataAppleAppListTasksReadyTaskInfo.md#result)
- [result\_count](AppDataAppleAppListTasksReadyTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppListTasksReadyTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppListTasksReadyTaskInfo.md#status_message)
- [time](AppDataAppleAppListTasksReadyTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppListTasksReadyTaskInfo.md#init)
- [toJSON](AppDataAppleAppListTasksReadyTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppListTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListTasksReadyTaskInfo**(`data?`): [`AppDataAppleAppListTasksReadyTaskInfo`](AppDataAppleAppListTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListTasksReadyTaskInfo`](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md) |

#### Returns

[`AppDataAppleAppListTasksReadyTaskInfo`](AppDataAppleAppListTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:185320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185320)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppListTasksReadyTaskInfo](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md).[cost](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md#cost)

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

[IAppDataAppleAppListTasksReadyTaskInfo](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md).[data](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md#data)

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

[IAppDataAppleAppListTasksReadyTaskInfo](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md).[id](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppListTasksReadyTaskInfo](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md).[path](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`AppDataAppleAppListTasksReadyResultInfo`](AppDataAppleAppListTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IAppDataAppleAppListTasksReadyTaskInfo](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md).[result](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:185316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185316)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppListTasksReadyTaskInfo](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md#result_count)

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

[IAppDataAppleAppListTasksReadyTaskInfo](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md#status_code)

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

[IAppDataAppleAppListTasksReadyTaskInfo](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppListTasksReadyTaskInfo](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md).[time](../interfaces/IAppDataAppleAppListTasksReadyTaskInfo.md#time)

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

[main.ts:185324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185324)

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

[main.ts:185346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185346)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListTasksReadyTaskInfo`](AppDataAppleAppListTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListTasksReadyTaskInfo`](AppDataAppleAppListTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:185339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185339)
