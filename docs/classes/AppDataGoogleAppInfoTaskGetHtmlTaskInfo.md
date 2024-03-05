[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppInfoTaskGetHtmlTaskInfo

# Class: AppDataGoogleAppInfoTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataGoogleAppInfoTaskGetHtmlTaskInfo`**

## Implements

- [`IAppDataGoogleAppInfoTaskGetHtmlTaskInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#cost)
- [data](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#data)
- [id](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#id)
- [path](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#path)
- [result](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#result)
- [result\_count](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#status_message)
- [time](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#init)
- [toJSON](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppInfoTaskGetHtmlTaskInfo**(`data?`): [`AppDataGoogleAppInfoTaskGetHtmlTaskInfo`](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppInfoTaskGetHtmlTaskInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md) |

#### Returns

[`AppDataGoogleAppInfoTaskGetHtmlTaskInfo`](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:180480](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180480)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#cost)

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

[IAppDataGoogleAppInfoTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md).[data](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#data)

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

[IAppDataGoogleAppInfoTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md).[id](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md).[path](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md).[result](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:180476](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180476)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#result_count)

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

[IAppDataGoogleAppInfoTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#status_code)

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

[IAppDataGoogleAppInfoTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md).[time](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlTaskInfo.md#time)

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

[main.ts:180484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180484)

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

[main.ts:180506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180506)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppInfoTaskGetHtmlTaskInfo`](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppInfoTaskGetHtmlTaskInfo`](AppDataGoogleAppInfoTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:180499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180499)
