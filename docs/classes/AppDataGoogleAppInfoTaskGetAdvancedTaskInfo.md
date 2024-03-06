[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppInfoTaskGetAdvancedTaskInfo

# Class: AppDataGoogleAppInfoTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleAppInfoTaskGetAdvancedTaskInfo`**

## Implements

- [`IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#cost)
- [data](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#data)
- [id](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#id)
- [path](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#path)
- [result](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#result)
- [result\_count](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#status_message)
- [time](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#init)
- [toJSON](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppInfoTaskGetAdvancedTaskInfo**(`data?`): [`AppDataGoogleAppInfoTaskGetAdvancedTaskInfo`](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md) |

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedTaskInfo`](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:180264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180264)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#cost)

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

[IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md).[data](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#data)

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

[IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md).[id](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md).[path](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md).[result](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:180260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180260)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#result_count)

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

[IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#status_code)

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

[IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md).[time](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:180268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180268)

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

[main.ts:180290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180290)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppInfoTaskGetAdvancedTaskInfo`](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedTaskInfo`](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:180283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180283)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")