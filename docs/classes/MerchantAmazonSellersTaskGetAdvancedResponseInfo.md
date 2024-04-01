[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTaskGetAdvancedResponseInfo

# Class: MerchantAmazonSellersTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonSellersTaskGetAdvancedResponseInfo`**

## Implements

- [`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#time)
- [version](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#init)
- [toJSON](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonSellersTaskGetAdvancedResponseInfo**(`data?`): [`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md) |

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:180042

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#cost)

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

[IMerchantAmazonSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#status_code)

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

[IMerchantAmazonSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonSellersTaskGetAdvancedTaskInfo`](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:180038

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[time](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[version](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#version)

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

main.ts:180046

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

main.ts:180068

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:180061
