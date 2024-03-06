[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppInfoTasksReadyTaskInfo

# Class: AppDataGoogleAppInfoTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleAppInfoTasksReadyTaskInfo`**

## Implements

- [`IAppDataGoogleAppInfoTasksReadyTaskInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppInfoTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppInfoTasksReadyTaskInfo.md#cost)
- [data](AppDataGoogleAppInfoTasksReadyTaskInfo.md#data)
- [id](AppDataGoogleAppInfoTasksReadyTaskInfo.md#id)
- [path](AppDataGoogleAppInfoTasksReadyTaskInfo.md#path)
- [result](AppDataGoogleAppInfoTasksReadyTaskInfo.md#result)
- [result\_count](AppDataGoogleAppInfoTasksReadyTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppInfoTasksReadyTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppInfoTasksReadyTaskInfo.md#status_message)
- [time](AppDataGoogleAppInfoTasksReadyTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppInfoTasksReadyTaskInfo.md#init)
- [toJSON](AppDataGoogleAppInfoTasksReadyTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppInfoTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppInfoTasksReadyTaskInfo**(`data?`): [`AppDataGoogleAppInfoTasksReadyTaskInfo`](AppDataGoogleAppInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppInfoTasksReadyTaskInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md) |

#### Returns

[`AppDataGoogleAppInfoTasksReadyTaskInfo`](AppDataGoogleAppInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:179654](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179654)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md#cost)

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

[IAppDataGoogleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md).[data](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md#data)

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

[IAppDataGoogleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md).[id](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md).[path](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md).[result](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:179650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179650)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md#result_count)

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

[IAppDataGoogleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md#status_code)

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

[IAppDataGoogleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md).[time](../interfaces/IAppDataGoogleAppInfoTasksReadyTaskInfo.md#time)

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

[main.ts:179658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179658)

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

[main.ts:179680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179680)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppInfoTasksReadyTaskInfo`](AppDataGoogleAppInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppInfoTasksReadyTaskInfo`](AppDataGoogleAppInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:179673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179673)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")