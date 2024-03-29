[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppReviewsTaskGetAdvancedTaskInfo

# Class: AppDataAppleAppReviewsTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataAppleAppReviewsTaskGetAdvancedTaskInfo`**

## Implements

- [`IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#cost)
- [data](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#data)
- [id](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#id)
- [path](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#path)
- [result](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#result)
- [result\_count](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#status_message)
- [time](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#init)
- [toJSON](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppReviewsTaskGetAdvancedTaskInfo**(`data?`): [`AppDataAppleAppReviewsTaskGetAdvancedTaskInfo`](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md) |

#### Returns

[`AppDataAppleAppReviewsTaskGetAdvancedTaskInfo`](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:186462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186462)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#cost)

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

[IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md).[data](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#data)

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

[IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md).[id](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md).[path](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md).[result](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:186458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186458)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#result_count)

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

[IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#status_code)

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

[IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md).[time](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:186466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186466)

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

[main.ts:186488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186488)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppReviewsTaskGetAdvancedTaskInfo`](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppReviewsTaskGetAdvancedTaskInfo`](AppDataAppleAppReviewsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:186481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186481)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")