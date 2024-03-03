[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTaskPostResponseInfo

# Class: MerchantAmazonProductsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonProductsTaskPostResponseInfo`**

## Implements

- [`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonProductsTaskPostResponseInfo.md#cost)
- [status\_code](MerchantAmazonProductsTaskPostResponseInfo.md#status_code)
- [status\_message](MerchantAmazonProductsTaskPostResponseInfo.md#status_message)
- [tasks](MerchantAmazonProductsTaskPostResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonProductsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonProductsTaskPostResponseInfo.md#tasks_error)
- [time](MerchantAmazonProductsTaskPostResponseInfo.md#time)
- [version](MerchantAmazonProductsTaskPostResponseInfo.md#version)

### Methods

- [init](MerchantAmazonProductsTaskPostResponseInfo.md#init)
- [toJSON](MerchantAmazonProductsTaskPostResponseInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTaskPostResponseInfo**(`data?`): [`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md) |

#### Returns

[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:170525

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonProductsTaskPostResponseInfo](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[cost](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#cost)

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

[IMerchantAmazonProductsTaskPostResponseInfo](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[status_code](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#status_code)

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

[IMerchantAmazonProductsTaskPostResponseInfo](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[status_message](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonProductsTaskPostTaskInfo`](MerchantAmazonProductsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonProductsTaskPostResponseInfo](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[tasks](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:170521

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonProductsTaskPostResponseInfo](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonProductsTaskPostResponseInfo](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonProductsTaskPostResponseInfo](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[time](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonProductsTaskPostResponseInfo](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[version](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#version)

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

main.ts:170529

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

main.ts:170551

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:170544
