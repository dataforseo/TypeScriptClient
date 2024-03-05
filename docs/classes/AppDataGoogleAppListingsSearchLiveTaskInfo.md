[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListingsSearchLiveTaskInfo

# Class: AppDataGoogleAppListingsSearchLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataGoogleAppListingsSearchLiveTaskInfo`**

## Implements

- [`IAppDataGoogleAppListingsSearchLiveTaskInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListingsSearchLiveTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListingsSearchLiveTaskInfo.md#cost)
- [data](AppDataGoogleAppListingsSearchLiveTaskInfo.md#data)
- [id](AppDataGoogleAppListingsSearchLiveTaskInfo.md#id)
- [path](AppDataGoogleAppListingsSearchLiveTaskInfo.md#path)
- [result](AppDataGoogleAppListingsSearchLiveTaskInfo.md#result)
- [result\_count](AppDataGoogleAppListingsSearchLiveTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppListingsSearchLiveTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppListingsSearchLiveTaskInfo.md#status_message)
- [time](AppDataGoogleAppListingsSearchLiveTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppListingsSearchLiveTaskInfo.md#init)
- [toJSON](AppDataGoogleAppListingsSearchLiveTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppListingsSearchLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListingsSearchLiveTaskInfo**(`data?`): [`AppDataGoogleAppListingsSearchLiveTaskInfo`](AppDataGoogleAppListingsSearchLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListingsSearchLiveTaskInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md) |

#### Returns

[`AppDataGoogleAppListingsSearchLiveTaskInfo`](AppDataGoogleAppListingsSearchLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:182458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182458)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md#cost)

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

[IAppDataGoogleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md).[data](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md#data)

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

[IAppDataGoogleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md).[id](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md).[path](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md).[result](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md#result)

#### Defined in

[main.ts:182454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182454)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md#result_count)

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

[IAppDataGoogleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md#status_code)

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

[IAppDataGoogleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md).[time](../interfaces/IAppDataGoogleAppListingsSearchLiveTaskInfo.md#time)

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

[main.ts:182462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182462)

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

[main.ts:182484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182484)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveTaskInfo`](AppDataGoogleAppListingsSearchLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListingsSearchLiveTaskInfo`](AppDataGoogleAppListingsSearchLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:182477](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182477)
