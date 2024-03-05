[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonReviewsTaskPostTaskInfo

# Class: MerchantAmazonReviewsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantAmazonReviewsTaskPostTaskInfo`**

## Implements

- [`IMerchantAmazonReviewsTaskPostTaskInfo`](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonReviewsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonReviewsTaskPostTaskInfo.md#cost)
- [data](MerchantAmazonReviewsTaskPostTaskInfo.md#data)
- [id](MerchantAmazonReviewsTaskPostTaskInfo.md#id)
- [path](MerchantAmazonReviewsTaskPostTaskInfo.md#path)
- [result](MerchantAmazonReviewsTaskPostTaskInfo.md#result)
- [result\_count](MerchantAmazonReviewsTaskPostTaskInfo.md#result_count)
- [status\_code](MerchantAmazonReviewsTaskPostTaskInfo.md#status_code)
- [status\_message](MerchantAmazonReviewsTaskPostTaskInfo.md#status_message)
- [time](MerchantAmazonReviewsTaskPostTaskInfo.md#time)

### Methods

- [init](MerchantAmazonReviewsTaskPostTaskInfo.md#init)
- [toJSON](MerchantAmazonReviewsTaskPostTaskInfo.md#tojson)
- [fromJS](MerchantAmazonReviewsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonReviewsTaskPostTaskInfo**(`data?`): [`MerchantAmazonReviewsTaskPostTaskInfo`](MerchantAmazonReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonReviewsTaskPostTaskInfo`](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md) |

#### Returns

[`MerchantAmazonReviewsTaskPostTaskInfo`](MerchantAmazonReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:175243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175243)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonReviewsTaskPostTaskInfo](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md).[cost](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md#cost)

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

[IMerchantAmazonReviewsTaskPostTaskInfo](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md).[data](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md#data)

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

[IMerchantAmazonReviewsTaskPostTaskInfo](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md).[id](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonReviewsTaskPostTaskInfo](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md).[path](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md#path)

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

[IMerchantAmazonReviewsTaskPostTaskInfo](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md).[result](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:175239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175239)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonReviewsTaskPostTaskInfo](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md).[result_count](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md#result_count)

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

[IMerchantAmazonReviewsTaskPostTaskInfo](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md).[status_code](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md#status_code)

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

[IMerchantAmazonReviewsTaskPostTaskInfo](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md).[status_message](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonReviewsTaskPostTaskInfo](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md).[time](../interfaces/IMerchantAmazonReviewsTaskPostTaskInfo.md#time)

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

[main.ts:175247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175247)

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

[main.ts:175265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175265)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonReviewsTaskPostTaskInfo`](MerchantAmazonReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonReviewsTaskPostTaskInfo`](MerchantAmazonReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:175258](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175258)
