[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTaskGetHtmlTaskInfo

# Class: AppDataGoogleAppReviewsTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleAppReviewsTaskGetHtmlTaskInfo`**

## Implements

- [`IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#cost)
- [data](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#data)
- [id](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#id)
- [path](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#path)
- [result](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#result)
- [result\_count](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#status_message)
- [time](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTaskGetHtmlTaskInfo**(`data?`): [`AppDataGoogleAppReviewsTaskGetHtmlTaskInfo`](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlTaskInfo`](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:181788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181788)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#cost)

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

[IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md).[data](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#data)

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

[IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md).[id](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md).[path](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md).[result](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:181784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181784)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#result_count)

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

[IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#status_code)

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

[IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md).[time](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md#time)

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

[main.ts:181792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181792)

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

[main.ts:181814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181814)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetHtmlTaskInfo`](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlTaskInfo`](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:181807](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181807)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")