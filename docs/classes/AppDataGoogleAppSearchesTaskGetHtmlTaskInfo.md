[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppSearchesTaskGetHtmlTaskInfo

# Class: AppDataGoogleAppSearchesTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataGoogleAppSearchesTaskGetHtmlTaskInfo`**

## Implements

- [`IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#cost)
- [data](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#data)
- [id](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#id)
- [path](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#path)
- [result](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#result)
- [result\_count](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#status_message)
- [time](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#init)
- [toJSON](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppSearchesTaskGetHtmlTaskInfo**(`data?`): [`AppDataGoogleAppSearchesTaskGetHtmlTaskInfo`](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md) |

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlTaskInfo`](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:178130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178130)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#cost)

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

[IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md).[data](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#data)

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

[IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md).[id](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md).[path](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md).[result](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:178126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178126)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#result_count)

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

[IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#status_code)

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

[IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md).[time](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md#time)

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

[main.ts:178134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178134)

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

[main.ts:178156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178156)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetHtmlTaskInfo`](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlTaskInfo`](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:178149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178149)
