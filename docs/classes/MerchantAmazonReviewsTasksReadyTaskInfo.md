[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonReviewsTasksReadyTaskInfo

# Class: MerchantAmazonReviewsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantAmazonReviewsTasksReadyTaskInfo`**

## Implements

- [`IMerchantAmazonReviewsTasksReadyTaskInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonReviewsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonReviewsTasksReadyTaskInfo.md#cost)
- [data](MerchantAmazonReviewsTasksReadyTaskInfo.md#data)
- [id](MerchantAmazonReviewsTasksReadyTaskInfo.md#id)
- [path](MerchantAmazonReviewsTasksReadyTaskInfo.md#path)
- [result](MerchantAmazonReviewsTasksReadyTaskInfo.md#result)
- [result\_count](MerchantAmazonReviewsTasksReadyTaskInfo.md#result_count)
- [status\_code](MerchantAmazonReviewsTasksReadyTaskInfo.md#status_code)
- [status\_message](MerchantAmazonReviewsTasksReadyTaskInfo.md#status_message)
- [time](MerchantAmazonReviewsTasksReadyTaskInfo.md#time)

### Methods

- [init](MerchantAmazonReviewsTasksReadyTaskInfo.md#init)
- [toJSON](MerchantAmazonReviewsTasksReadyTaskInfo.md#tojson)
- [fromJS](MerchantAmazonReviewsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonReviewsTasksReadyTaskInfo**(`data?`): [`MerchantAmazonReviewsTasksReadyTaskInfo`](MerchantAmazonReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonReviewsTasksReadyTaskInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md) |

#### Returns

[`MerchantAmazonReviewsTasksReadyTaskInfo`](MerchantAmazonReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:175436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175436)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonReviewsTasksReadyTaskInfo](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md).[cost](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md#cost)

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

[IMerchantAmazonReviewsTasksReadyTaskInfo](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md).[data](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md#data)

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

[IMerchantAmazonReviewsTasksReadyTaskInfo](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md).[id](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonReviewsTasksReadyTaskInfo](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md).[path](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonReviewsTasksReadyTaskInfo](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md).[result](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:175432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175432)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonReviewsTasksReadyTaskInfo](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md).[result_count](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md#result_count)

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

[IMerchantAmazonReviewsTasksReadyTaskInfo](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md).[status_code](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md#status_code)

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

[IMerchantAmazonReviewsTasksReadyTaskInfo](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md).[status_message](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonReviewsTasksReadyTaskInfo](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md).[time](../interfaces/IMerchantAmazonReviewsTasksReadyTaskInfo.md#time)

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

[main.ts:175440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175440)

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

[main.ts:175462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175462)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonReviewsTasksReadyTaskInfo`](MerchantAmazonReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonReviewsTasksReadyTaskInfo`](MerchantAmazonReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:175455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175455)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")