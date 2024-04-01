[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTasksReadyResponseInfo

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

main.ts:179516

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[cost](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23029

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

main.ts:23022

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

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonSellersTasksReadyTaskInfo`](MerchantAmazonSellersTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[tasks](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:179512

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[time](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonSellersTasksReadyResponseInfo](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[version](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:23019

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

main.ts:179520

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

main.ts:179542

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

main.ts:179535
