[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppReviewsTasksReadyTaskInfo

# Class: AppDataAppleAppReviewsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataAppleAppReviewsTasksReadyTaskInfo`**

## Implements

- [`IAppDataAppleAppReviewsTasksReadyTaskInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppReviewsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppReviewsTasksReadyTaskInfo.md#cost)
- [data](AppDataAppleAppReviewsTasksReadyTaskInfo.md#data)
- [id](AppDataAppleAppReviewsTasksReadyTaskInfo.md#id)
- [path](AppDataAppleAppReviewsTasksReadyTaskInfo.md#path)
- [result](AppDataAppleAppReviewsTasksReadyTaskInfo.md#result)
- [result\_count](AppDataAppleAppReviewsTasksReadyTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppReviewsTasksReadyTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppReviewsTasksReadyTaskInfo.md#status_message)
- [time](AppDataAppleAppReviewsTasksReadyTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppReviewsTasksReadyTaskInfo.md#init)
- [toJSON](AppDataAppleAppReviewsTasksReadyTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppReviewsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppReviewsTasksReadyTaskInfo**(`data?`): [`AppDataAppleAppReviewsTasksReadyTaskInfo`](AppDataAppleAppReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppReviewsTasksReadyTaskInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md) |

#### Returns

[`AppDataAppleAppReviewsTasksReadyTaskInfo`](AppDataAppleAppReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:186096](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186096)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md).[cost](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md#cost)

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

[IAppDataAppleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md).[data](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md#data)

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

[IAppDataAppleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md).[id](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md).[path](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md).[result](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:186092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186092)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md#result_count)

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

[IAppDataAppleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md#status_code)

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

[IAppDataAppleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyTaskInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md).[time](../interfaces/IAppDataAppleAppReviewsTasksReadyTaskInfo.md#time)

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

[main.ts:186100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186100)

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

[main.ts:186122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186122)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppReviewsTasksReadyTaskInfo`](AppDataAppleAppReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppReviewsTasksReadyTaskInfo`](AppDataAppleAppReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:186115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186115)
