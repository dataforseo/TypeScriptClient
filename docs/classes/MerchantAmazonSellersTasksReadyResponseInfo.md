[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTasksReadyResponseInfo

# Class: MerchantAmazonSellersTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantAmazonSellersTasksReadyResponseInfo`**

## Implements

- [`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonSellersTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonSellersTasksReadyResponseInfo.md#cost)
- [status\_code](MerchantAmazonSellersTasksReadyResponseInfo.md#status_code)
- [status\_message](MerchantAmazonSellersTasksReadyResponseInfo.md#status_message)
- [tasks](MerchantAmazonSellersTasksReadyResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonSellersTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonSellersTasksReadyResponseInfo.md#tasks_error)
- [time](MerchantAmazonSellersTasksReadyResponseInfo.md#time)
- [version](MerchantAmazonSellersTasksReadyResponseInfo.md#version)

### Methods

- [init](MerchantAmazonSellersTasksReadyResponseInfo.md#init)
- [toJSON](MerchantAmazonSellersTasksReadyResponseInfo.md#tojson)
- [fromJS](MerchantAmazonSellersTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonSellersTasksReadyResponseInfo**(`data?`): [`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md) |

#### Returns

[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:174063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174063)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[cost](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#cost)

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

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[status_code](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#status_code)

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

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[status_message](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantAmazonSellersTasksReadyTaskInfo`](MerchantAmazonSellersTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[tasks](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:174059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174059)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[time](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[version](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#version)

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

[main.ts:174067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174067)

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

[main.ts:174089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174089)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:174082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174082)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")