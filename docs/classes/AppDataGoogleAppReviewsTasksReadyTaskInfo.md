[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTasksReadyTaskInfo

# Class: AppDataGoogleAppReviewsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataGoogleAppReviewsTasksReadyTaskInfo`**

## Implements

- [`IAppDataGoogleAppReviewsTasksReadyTaskInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#cost)
- [data](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#data)
- [id](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#id)
- [path](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#path)
- [result](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#result)
- [result\_count](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#status_message)
- [time](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTasksReadyTaskInfo**(`data?`): [`AppDataGoogleAppReviewsTasksReadyTaskInfo`](AppDataGoogleAppReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTasksReadyTaskInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTasksReadyTaskInfo`](AppDataGoogleAppReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:181050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181050)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md#cost)

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

[IAppDataGoogleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md).[data](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md#data)

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

[IAppDataGoogleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md).[id](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md).[path](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md).[result](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:181046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181046)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md#result_count)

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

[IAppDataGoogleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md#status_code)

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

[IAppDataGoogleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md).[time](../interfaces/IAppDataGoogleAppReviewsTasksReadyTaskInfo.md#time)

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

[main.ts:181054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181054)

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

[main.ts:181076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181076)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTasksReadyTaskInfo`](AppDataGoogleAppReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTasksReadyTaskInfo`](AppDataGoogleAppReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:181069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181069)
