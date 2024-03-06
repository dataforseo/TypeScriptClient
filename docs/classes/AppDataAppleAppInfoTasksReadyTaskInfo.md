[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppInfoTasksReadyTaskInfo

# Class: AppDataAppleAppInfoTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataAppleAppInfoTasksReadyTaskInfo`**

## Implements

- [`IAppDataAppleAppInfoTasksReadyTaskInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppInfoTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppInfoTasksReadyTaskInfo.md#cost)
- [data](AppDataAppleAppInfoTasksReadyTaskInfo.md#data)
- [id](AppDataAppleAppInfoTasksReadyTaskInfo.md#id)
- [path](AppDataAppleAppInfoTasksReadyTaskInfo.md#path)
- [result](AppDataAppleAppInfoTasksReadyTaskInfo.md#result)
- [result\_count](AppDataAppleAppInfoTasksReadyTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppInfoTasksReadyTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppInfoTasksReadyTaskInfo.md#status_message)
- [time](AppDataAppleAppInfoTasksReadyTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppInfoTasksReadyTaskInfo.md#init)
- [toJSON](AppDataAppleAppInfoTasksReadyTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppInfoTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppInfoTasksReadyTaskInfo**(`data?`): [`AppDataAppleAppInfoTasksReadyTaskInfo`](AppDataAppleAppInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppInfoTasksReadyTaskInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md) |

#### Returns

[`AppDataAppleAppInfoTasksReadyTaskInfo`](AppDataAppleAppInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:184264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184264)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md).[cost](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md#cost)

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

[IAppDataAppleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md).[data](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md#data)

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

[IAppDataAppleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md).[id](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md).[path](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IAppDataAppleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md).[result](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:184260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184260)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md#result_count)

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

[IAppDataAppleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md#status_code)

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

[IAppDataAppleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppInfoTasksReadyTaskInfo](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md).[time](../interfaces/IAppDataAppleAppInfoTasksReadyTaskInfo.md#time)

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

[main.ts:184268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184268)

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

[main.ts:184290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184290)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppInfoTasksReadyTaskInfo`](AppDataAppleAppInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppInfoTasksReadyTaskInfo`](AppDataAppleAppInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:184283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184283)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")