[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo

# Class: AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`**

## Implements

- [`IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#cost)
- [data](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#data)
- [id](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#id)
- [path](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#path)
- [result](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#result)
- [result\_count](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#status_message)
- [time](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#init)
- [toJSON](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo**(`data?`): [`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md) |

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:177914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177914)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#cost)

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

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[data](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#data)

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

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[id](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[path](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[result](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:177910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177910)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#result_count)

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

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#status_code)

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

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md).[time](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:177918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177918)

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

[main.ts:177940](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177940)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:177933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177933)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")