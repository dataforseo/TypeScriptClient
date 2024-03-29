[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTaskPostTaskInfo

# Class: AppDataGoogleAppListTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleAppListTaskPostTaskInfo`**

## Implements

- [`IAppDataGoogleAppListTaskPostTaskInfo`](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTaskPostTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListTaskPostTaskInfo.md#cost)
- [data](AppDataGoogleAppListTaskPostTaskInfo.md#data)
- [id](AppDataGoogleAppListTaskPostTaskInfo.md#id)
- [path](AppDataGoogleAppListTaskPostTaskInfo.md#path)
- [result](AppDataGoogleAppListTaskPostTaskInfo.md#result)
- [result\_count](AppDataGoogleAppListTaskPostTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppListTaskPostTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppListTaskPostTaskInfo.md#status_message)
- [time](AppDataGoogleAppListTaskPostTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppListTaskPostTaskInfo.md#init)
- [toJSON](AppDataGoogleAppListTaskPostTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTaskPostTaskInfo**(`data?`): [`AppDataGoogleAppListTaskPostTaskInfo`](AppDataGoogleAppListTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTaskPostTaskInfo`](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md) |

#### Returns

[`AppDataGoogleAppListTaskPostTaskInfo`](AppDataGoogleAppListTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:178511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178511)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListTaskPostTaskInfo](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md#cost)

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

[IAppDataGoogleAppListTaskPostTaskInfo](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md).[data](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md#data)

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

[IAppDataGoogleAppListTaskPostTaskInfo](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md).[id](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppListTaskPostTaskInfo](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md).[path](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md#path)

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

[IAppDataGoogleAppListTaskPostTaskInfo](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md).[result](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:178507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178507)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppListTaskPostTaskInfo](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md#result_count)

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

[IAppDataGoogleAppListTaskPostTaskInfo](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md#status_code)

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

[IAppDataGoogleAppListTaskPostTaskInfo](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppListTaskPostTaskInfo](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md).[time](../interfaces/IAppDataGoogleAppListTaskPostTaskInfo.md#time)

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

[main.ts:178515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178515)

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

[main.ts:178533](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178533)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTaskPostTaskInfo`](AppDataGoogleAppListTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTaskPostTaskInfo`](AppDataGoogleAppListTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:178526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178526)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")