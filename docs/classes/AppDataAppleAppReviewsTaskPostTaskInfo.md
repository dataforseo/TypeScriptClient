[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppReviewsTaskPostTaskInfo

# Class: AppDataAppleAppReviewsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataAppleAppReviewsTaskPostTaskInfo`**

## Implements

- [`IAppDataAppleAppReviewsTaskPostTaskInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppReviewsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppReviewsTaskPostTaskInfo.md#cost)
- [data](AppDataAppleAppReviewsTaskPostTaskInfo.md#data)
- [id](AppDataAppleAppReviewsTaskPostTaskInfo.md#id)
- [path](AppDataAppleAppReviewsTaskPostTaskInfo.md#path)
- [result](AppDataAppleAppReviewsTaskPostTaskInfo.md#result)
- [result\_count](AppDataAppleAppReviewsTaskPostTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppReviewsTaskPostTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppReviewsTaskPostTaskInfo.md#status_message)
- [time](AppDataAppleAppReviewsTaskPostTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppReviewsTaskPostTaskInfo.md#init)
- [toJSON](AppDataAppleAppReviewsTaskPostTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppReviewsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppReviewsTaskPostTaskInfo**(`data?`): [`AppDataAppleAppReviewsTaskPostTaskInfo`](AppDataAppleAppReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppReviewsTaskPostTaskInfo`](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md) |

#### Returns

[`AppDataAppleAppReviewsTaskPostTaskInfo`](AppDataAppleAppReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:185909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185909)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md).[cost](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md#cost)

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

[IAppDataAppleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md).[data](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md#data)

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

[IAppDataAppleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md).[id](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md).[path](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md#path)

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

[IAppDataAppleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md).[result](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:185905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185905)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md#result_count)

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

[IAppDataAppleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md#status_code)

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

[IAppDataAppleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppReviewsTaskPostTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md).[time](../interfaces/IAppDataAppleAppReviewsTaskPostTaskInfo.md#time)

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

[main.ts:185913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185913)

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

[main.ts:185931](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185931)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppReviewsTaskPostTaskInfo`](AppDataAppleAppReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppReviewsTaskPostTaskInfo`](AppDataAppleAppReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:185924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185924)
