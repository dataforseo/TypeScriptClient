[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTaskPostResponseInfo

# Class: MerchantAmazonSellersTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonSellersTaskPostResponseInfo`**

## Implements

- [`IMerchantAmazonSellersTaskPostResponseInfo`](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonSellersTaskPostResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonSellersTaskPostResponseInfo.md#cost)
- [status\_code](MerchantAmazonSellersTaskPostResponseInfo.md#status_code)
- [status\_message](MerchantAmazonSellersTaskPostResponseInfo.md#status_message)
- [tasks](MerchantAmazonSellersTaskPostResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonSellersTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonSellersTaskPostResponseInfo.md#tasks_error)
- [time](MerchantAmazonSellersTaskPostResponseInfo.md#time)
- [version](MerchantAmazonSellersTaskPostResponseInfo.md#version)

### Methods

- [init](MerchantAmazonSellersTaskPostResponseInfo.md#init)
- [toJSON](MerchantAmazonSellersTaskPostResponseInfo.md#tojson)
- [fromJS](MerchantAmazonSellersTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonSellersTaskPostResponseInfo**(`data?`): [`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonSellersTaskPostResponseInfo`](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md) |

#### Returns

[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:173983

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonSellersTaskPostResponseInfo](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md).[cost](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IMerchantAmazonSellersTaskPostResponseInfo](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md).[status_code](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IMerchantAmazonSellersTaskPostResponseInfo](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md).[status_message](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonSellersTaskPostTaskInfo`](MerchantAmazonSellersTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonSellersTaskPostResponseInfo](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md).[tasks](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:173979

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonSellersTaskPostResponseInfo](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonSellersTaskPostResponseInfo](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonSellersTaskPostResponseInfo](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md).[time](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonSellersTaskPostResponseInfo](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md).[version](../interfaces/IMerchantAmazonSellersTaskPostResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:173987

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

main.ts:174009

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:174002
