[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTaskGetAdvancedTaskInfo

# Class: AppDataGoogleAppListTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleAppListTaskGetAdvancedTaskInfo`**

## Implements

- [`IAppDataGoogleAppListTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#cost)
- [data](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#data)
- [id](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#id)
- [path](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#path)
- [result](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#result)
- [result\_count](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#status_message)
- [time](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#init)
- [toJSON](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTaskGetAdvancedTaskInfo**(`data?`): [`AppDataGoogleAppListTaskGetAdvancedTaskInfo`](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md) |

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedTaskInfo`](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:178924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178924)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md#cost)

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

[IAppDataGoogleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md).[data](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md#data)

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

[IAppDataGoogleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md).[id](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md).[path](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md).[result](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:178920](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178920)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md#result_count)

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

[IAppDataGoogleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md#status_code)

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

[IAppDataGoogleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md).[time](../interfaces/IAppDataGoogleAppListTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:178928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178928)

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

[main.ts:178950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178950)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTaskGetAdvancedTaskInfo`](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedTaskInfo`](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:178943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178943)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")