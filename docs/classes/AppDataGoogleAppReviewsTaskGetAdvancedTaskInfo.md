[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo

# Class: AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo`**

## Implements

- [`IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#cost)
- [data](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#data)
- [id](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#id)
- [path](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#path)
- [result](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#result)
- [result\_count](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#status_message)
- [time](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo**(`data?`): [`AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo`](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo`](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:181572](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181572)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#cost)

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

[IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md).[data](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#data)

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

[IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md).[id](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md).[path](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md).[result](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:181568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181568)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#result_count)

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

[IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#status_code)

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

[IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md).[time](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:181576](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181576)

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

[main.ts:181598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181598)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo`](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo`](AppDataGoogleAppReviewsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:181591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181591)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")