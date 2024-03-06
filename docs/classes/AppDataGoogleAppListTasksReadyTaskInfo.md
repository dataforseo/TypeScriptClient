[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTasksReadyTaskInfo

# Class: AppDataGoogleAppListTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleAppListTasksReadyTaskInfo`**

## Implements

- [`IAppDataGoogleAppListTasksReadyTaskInfo`](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListTasksReadyTaskInfo.md#cost)
- [data](AppDataGoogleAppListTasksReadyTaskInfo.md#data)
- [id](AppDataGoogleAppListTasksReadyTaskInfo.md#id)
- [path](AppDataGoogleAppListTasksReadyTaskInfo.md#path)
- [result](AppDataGoogleAppListTasksReadyTaskInfo.md#result)
- [result\_count](AppDataGoogleAppListTasksReadyTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppListTasksReadyTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppListTasksReadyTaskInfo.md#status_message)
- [time](AppDataGoogleAppListTasksReadyTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppListTasksReadyTaskInfo.md#init)
- [toJSON](AppDataGoogleAppListTasksReadyTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTasksReadyTaskInfo**(`data?`): [`AppDataGoogleAppListTasksReadyTaskInfo`](AppDataGoogleAppListTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTasksReadyTaskInfo`](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md) |

#### Returns

[`AppDataGoogleAppListTasksReadyTaskInfo`](AppDataGoogleAppListTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:178698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178698)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md#cost)

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

[IAppDataGoogleAppListTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md).[data](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md#data)

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

[IAppDataGoogleAppListTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md).[id](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppListTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md).[path](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppListTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md).[result](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:178694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178694)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppListTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md#result_count)

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

[IAppDataGoogleAppListTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md#status_code)

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

[IAppDataGoogleAppListTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppListTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md).[time](../interfaces/IAppDataGoogleAppListTasksReadyTaskInfo.md#time)

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

[main.ts:178702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178702)

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

[main.ts:178724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178724)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTasksReadyTaskInfo`](AppDataGoogleAppListTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTasksReadyTaskInfo`](AppDataGoogleAppListTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:178717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178717)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")