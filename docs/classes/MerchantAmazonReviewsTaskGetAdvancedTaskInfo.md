[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonReviewsTaskGetAdvancedTaskInfo

# Class: MerchantAmazonReviewsTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantAmazonReviewsTaskGetAdvancedTaskInfo`**

## Implements

- [`IMerchantAmazonReviewsTaskGetAdvancedTaskInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#cost)
- [data](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#data)
- [id](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#id)
- [path](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#path)
- [result](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#result)
- [result\_count](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#status_message)
- [time](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#init)
- [toJSON](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonReviewsTaskGetAdvancedTaskInfo**(`data?`): [`MerchantAmazonReviewsTaskGetAdvancedTaskInfo`](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonReviewsTaskGetAdvancedTaskInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md) |

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedTaskInfo`](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:175956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175956)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#cost)

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

[IMerchantAmazonReviewsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md).[data](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#data)

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

[IMerchantAmazonReviewsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md).[id](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md).[path](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md).[result](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:175952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175952)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#result_count)

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

[IMerchantAmazonReviewsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#status_code)

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

[IMerchantAmazonReviewsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md).[time](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:175960](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175960)

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

[main.ts:175982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175982)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetAdvancedTaskInfo`](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedTaskInfo`](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:175975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175975)
