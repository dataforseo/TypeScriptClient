[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppSearchesTaskGetAdvancedTaskInfo

# Class: AppDataAppleAppSearchesTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataAppleAppSearchesTaskGetAdvancedTaskInfo`**

## Implements

- [`IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#cost)
- [data](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#data)
- [id](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#id)
- [path](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#path)
- [result](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#result)
- [result\_count](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#status_message)
- [time](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#init)
- [toJSON](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppSearchesTaskGetAdvancedTaskInfo**(`data?`): [`AppDataAppleAppSearchesTaskGetAdvancedTaskInfo`](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md) |

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedTaskInfo`](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:183750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183750)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#cost)

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

[IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md).[data](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#data)

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

[IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md).[id](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md).[path](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md).[result](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:183746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183746)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#result_count)

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

[IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#status_code)

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

[IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md).[time](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:183754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183754)

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

[main.ts:183776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183776)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppSearchesTaskGetAdvancedTaskInfo`](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedTaskInfo`](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:183769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183769)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")