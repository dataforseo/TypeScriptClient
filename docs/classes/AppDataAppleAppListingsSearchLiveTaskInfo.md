[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppListingsSearchLiveTaskInfo

# Class: AppDataAppleAppListingsSearchLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataAppleAppListingsSearchLiveTaskInfo`**

## Implements

- [`IAppDataAppleAppListingsSearchLiveTaskInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListingsSearchLiveTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppListingsSearchLiveTaskInfo.md#cost)
- [data](AppDataAppleAppListingsSearchLiveTaskInfo.md#data)
- [id](AppDataAppleAppListingsSearchLiveTaskInfo.md#id)
- [path](AppDataAppleAppListingsSearchLiveTaskInfo.md#path)
- [result](AppDataAppleAppListingsSearchLiveTaskInfo.md#result)
- [result\_count](AppDataAppleAppListingsSearchLiveTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppListingsSearchLiveTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppListingsSearchLiveTaskInfo.md#status_message)
- [time](AppDataAppleAppListingsSearchLiveTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppListingsSearchLiveTaskInfo.md#init)
- [toJSON](AppDataAppleAppListingsSearchLiveTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppListingsSearchLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListingsSearchLiveTaskInfo**(`data?`): [`AppDataAppleAppListingsSearchLiveTaskInfo`](AppDataAppleAppListingsSearchLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListingsSearchLiveTaskInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md) |

#### Returns

[`AppDataAppleAppListingsSearchLiveTaskInfo`](AppDataAppleAppListingsSearchLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:187038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187038)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md).[cost](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md#cost)

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

[IAppDataAppleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md).[data](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md#data)

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

[IAppDataAppleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md).[id](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md).[path](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)[]

array of results

#### Implementation of

[IAppDataAppleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md).[result](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md#result)

#### Defined in

[main.ts:187034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187034)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md#result_count)

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

[IAppDataAppleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md#status_code)

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

[IAppDataAppleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppListingsSearchLiveTaskInfo](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md).[time](../interfaces/IAppDataAppleAppListingsSearchLiveTaskInfo.md#time)

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

[main.ts:187042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187042)

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

[main.ts:187064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187064)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListingsSearchLiveTaskInfo`](AppDataAppleAppListingsSearchLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListingsSearchLiveTaskInfo`](AppDataAppleAppListingsSearchLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:187057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187057)
