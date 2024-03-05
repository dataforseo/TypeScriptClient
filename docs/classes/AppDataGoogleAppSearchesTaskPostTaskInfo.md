[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppSearchesTaskPostTaskInfo

# Class: AppDataGoogleAppSearchesTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataGoogleAppSearchesTaskPostTaskInfo`**

## Implements

- [`IAppDataGoogleAppSearchesTaskPostTaskInfo`](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppSearchesTaskPostTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppSearchesTaskPostTaskInfo.md#cost)
- [data](AppDataGoogleAppSearchesTaskPostTaskInfo.md#data)
- [id](AppDataGoogleAppSearchesTaskPostTaskInfo.md#id)
- [path](AppDataGoogleAppSearchesTaskPostTaskInfo.md#path)
- [result](AppDataGoogleAppSearchesTaskPostTaskInfo.md#result)
- [result\_count](AppDataGoogleAppSearchesTaskPostTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppSearchesTaskPostTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppSearchesTaskPostTaskInfo.md#status_message)
- [time](AppDataGoogleAppSearchesTaskPostTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppSearchesTaskPostTaskInfo.md#init)
- [toJSON](AppDataGoogleAppSearchesTaskPostTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppSearchesTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppSearchesTaskPostTaskInfo**(`data?`): [`AppDataGoogleAppSearchesTaskPostTaskInfo`](AppDataGoogleAppSearchesTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppSearchesTaskPostTaskInfo`](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md) |

#### Returns

[`AppDataGoogleAppSearchesTaskPostTaskInfo`](AppDataGoogleAppSearchesTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:177503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177503)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md#cost)

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

[IAppDataGoogleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md).[data](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md#data)

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

[IAppDataGoogleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md).[id](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md).[path](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md#path)

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

[IAppDataGoogleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md).[result](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:177499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177499)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md#result_count)

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

[IAppDataGoogleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md#status_code)

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

[IAppDataGoogleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md).[time](../interfaces/IAppDataGoogleAppSearchesTaskPostTaskInfo.md#time)

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

[main.ts:177507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177507)

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

[main.ts:177525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177525)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskPostTaskInfo`](AppDataGoogleAppSearchesTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppSearchesTaskPostTaskInfo`](AppDataGoogleAppSearchesTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:177518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177518)
