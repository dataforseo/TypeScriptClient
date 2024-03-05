[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTaskGetAdvancedResponseInfo

# Class: MerchantAmazonProductsTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonProductsTaskGetAdvancedResponseInfo`**

## Implements

- [`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#time)
- [version](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#init)
- [toJSON](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTaskGetAdvancedResponseInfo**(`data?`): [`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md) |

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:171499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171499)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonProductsTaskGetAdvancedTaskInfo`](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:171495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171495)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[time](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[version](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

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

[BaseResponseInfo](BaseResponseInfo.md).[init](BaseResponseInfo.md#init)

#### Defined in

[main.ts:171503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171503)

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

[BaseResponseInfo](BaseResponseInfo.md).[toJSON](BaseResponseInfo.md#tojson)

#### Defined in

[main.ts:171525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171525)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:171518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171518)
