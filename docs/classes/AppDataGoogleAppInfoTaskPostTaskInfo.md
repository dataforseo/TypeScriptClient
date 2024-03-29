[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppInfoTaskPostTaskInfo

# Class: AppDataGoogleAppInfoTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleAppInfoTaskPostTaskInfo`**

## Implements

- [`IAppDataGoogleAppInfoTaskPostTaskInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppInfoTaskPostTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppInfoTaskPostTaskInfo.md#cost)
- [data](AppDataGoogleAppInfoTaskPostTaskInfo.md#data)
- [id](AppDataGoogleAppInfoTaskPostTaskInfo.md#id)
- [path](AppDataGoogleAppInfoTaskPostTaskInfo.md#path)
- [result](AppDataGoogleAppInfoTaskPostTaskInfo.md#result)
- [result\_count](AppDataGoogleAppInfoTaskPostTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppInfoTaskPostTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppInfoTaskPostTaskInfo.md#status_message)
- [time](AppDataGoogleAppInfoTaskPostTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppInfoTaskPostTaskInfo.md#init)
- [toJSON](AppDataGoogleAppInfoTaskPostTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppInfoTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppInfoTaskPostTaskInfo**(`data?`): [`AppDataGoogleAppInfoTaskPostTaskInfo`](AppDataGoogleAppInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppInfoTaskPostTaskInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md) |

#### Returns

[`AppDataGoogleAppInfoTaskPostTaskInfo`](AppDataGoogleAppInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:179467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179467)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppInfoTaskPostTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md#cost)

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

[IAppDataGoogleAppInfoTaskPostTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md).[data](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md#data)

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

[IAppDataGoogleAppInfoTaskPostTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md).[id](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppInfoTaskPostTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md).[path](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IAppDataGoogleAppInfoTaskPostTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md).[result](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:179463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179463)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppInfoTaskPostTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md#result_count)

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

[IAppDataGoogleAppInfoTaskPostTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md#status_code)

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

[IAppDataGoogleAppInfoTaskPostTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppInfoTaskPostTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md).[time](../interfaces/IAppDataGoogleAppInfoTaskPostTaskInfo.md#time)

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

[main.ts:179471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179471)

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

[main.ts:179489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179489)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppInfoTaskPostTaskInfo`](AppDataGoogleAppInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppInfoTaskPostTaskInfo`](AppDataGoogleAppInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:179482](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179482)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")