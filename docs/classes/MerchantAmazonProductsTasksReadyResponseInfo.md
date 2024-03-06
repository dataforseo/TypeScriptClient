[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTasksReadyResponseInfo

# Class: MerchantAmazonProductsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantAmazonProductsTasksReadyResponseInfo`**

## Implements

- [`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonProductsTasksReadyResponseInfo.md#cost)
- [status\_code](MerchantAmazonProductsTasksReadyResponseInfo.md#status_code)
- [status\_message](MerchantAmazonProductsTasksReadyResponseInfo.md#status_message)
- [tasks](MerchantAmazonProductsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonProductsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonProductsTasksReadyResponseInfo.md#tasks_error)
- [time](MerchantAmazonProductsTasksReadyResponseInfo.md#time)
- [version](MerchantAmazonProductsTasksReadyResponseInfo.md#version)

### Methods

- [init](MerchantAmazonProductsTasksReadyResponseInfo.md#init)
- [toJSON](MerchantAmazonProductsTasksReadyResponseInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTasksReadyResponseInfo**(`data?`): [`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md) |

#### Returns

[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:170605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170605)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonProductsTasksReadyResponseInfo](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[cost](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#cost)

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

[IMerchantAmazonProductsTasksReadyResponseInfo](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[status_code](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#status_code)

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

[IMerchantAmazonProductsTasksReadyResponseInfo](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[status_message](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantAmazonProductsTasksReadyTaskInfo`](MerchantAmazonProductsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonProductsTasksReadyResponseInfo](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[tasks](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:170601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170601)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonProductsTasksReadyResponseInfo](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonProductsTasksReadyResponseInfo](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonProductsTasksReadyResponseInfo](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[time](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonProductsTasksReadyResponseInfo](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[version](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#version)

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

[main.ts:170609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170609)

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

[main.ts:170631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170631)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:170624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170624)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")