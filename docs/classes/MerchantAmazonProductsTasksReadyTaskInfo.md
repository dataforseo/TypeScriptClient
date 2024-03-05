[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTasksReadyTaskInfo

# Class: MerchantAmazonProductsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantAmazonProductsTasksReadyTaskInfo`**

## Implements

- [`IMerchantAmazonProductsTasksReadyTaskInfo`](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonProductsTasksReadyTaskInfo.md#cost)
- [data](MerchantAmazonProductsTasksReadyTaskInfo.md#data)
- [id](MerchantAmazonProductsTasksReadyTaskInfo.md#id)
- [path](MerchantAmazonProductsTasksReadyTaskInfo.md#path)
- [result](MerchantAmazonProductsTasksReadyTaskInfo.md#result)
- [result\_count](MerchantAmazonProductsTasksReadyTaskInfo.md#result_count)
- [status\_code](MerchantAmazonProductsTasksReadyTaskInfo.md#status_code)
- [status\_message](MerchantAmazonProductsTasksReadyTaskInfo.md#status_message)
- [time](MerchantAmazonProductsTasksReadyTaskInfo.md#time)

### Methods

- [init](MerchantAmazonProductsTasksReadyTaskInfo.md#init)
- [toJSON](MerchantAmazonProductsTasksReadyTaskInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTasksReadyTaskInfo**(`data?`): [`MerchantAmazonProductsTasksReadyTaskInfo`](MerchantAmazonProductsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTasksReadyTaskInfo`](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md) |

#### Returns

[`MerchantAmazonProductsTasksReadyTaskInfo`](MerchantAmazonProductsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:170550](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170550)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonProductsTasksReadyTaskInfo](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md).[cost](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md#cost)

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

[IMerchantAmazonProductsTasksReadyTaskInfo](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md).[data](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md#data)

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

[IMerchantAmazonProductsTasksReadyTaskInfo](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md).[id](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonProductsTasksReadyTaskInfo](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md).[path](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonProductsTasksReadyTaskInfo](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md).[result](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:170546](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170546)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonProductsTasksReadyTaskInfo](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md).[result_count](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md#result_count)

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

[IMerchantAmazonProductsTasksReadyTaskInfo](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md).[status_code](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md#status_code)

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

[IMerchantAmazonProductsTasksReadyTaskInfo](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md).[status_message](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonProductsTasksReadyTaskInfo](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md).[time](../interfaces/IMerchantAmazonProductsTasksReadyTaskInfo.md#time)

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

[main.ts:170554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170554)

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

[main.ts:170576](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170576)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTasksReadyTaskInfo`](MerchantAmazonProductsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTasksReadyTaskInfo`](MerchantAmazonProductsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:170569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170569)
