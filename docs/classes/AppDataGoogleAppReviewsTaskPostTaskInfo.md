[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTaskPostTaskInfo

# Class: AppDataGoogleAppReviewsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataGoogleAppReviewsTaskPostTaskInfo`**

## Implements

- [`IAppDataGoogleAppReviewsTaskPostTaskInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppReviewsTaskPostTaskInfo.md#cost)
- [data](AppDataGoogleAppReviewsTaskPostTaskInfo.md#data)
- [id](AppDataGoogleAppReviewsTaskPostTaskInfo.md#id)
- [path](AppDataGoogleAppReviewsTaskPostTaskInfo.md#path)
- [result](AppDataGoogleAppReviewsTaskPostTaskInfo.md#result)
- [result\_count](AppDataGoogleAppReviewsTaskPostTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppReviewsTaskPostTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppReviewsTaskPostTaskInfo.md#status_message)
- [time](AppDataGoogleAppReviewsTaskPostTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppReviewsTaskPostTaskInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTaskPostTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTaskPostTaskInfo**(`data?`): [`AppDataGoogleAppReviewsTaskPostTaskInfo`](AppDataGoogleAppReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTaskPostTaskInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTaskPostTaskInfo`](AppDataGoogleAppReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:180863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180863)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md#cost)

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

[IAppDataGoogleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md).[data](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md#data)

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

[IAppDataGoogleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md).[id](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md).[path](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md#path)

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

[IAppDataGoogleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md).[result](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:180859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180859)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md#result_count)

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

[IAppDataGoogleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md#status_code)

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

[IAppDataGoogleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md).[time](../interfaces/IAppDataGoogleAppReviewsTaskPostTaskInfo.md#time)

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

[main.ts:180867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180867)

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

[main.ts:180885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180885)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskPostTaskInfo`](AppDataGoogleAppReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTaskPostTaskInfo`](AppDataGoogleAppReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:180878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180878)
