[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleProductsTaskPostResponseInfo

# Class: MerchantGoogleProductsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleProductsTaskPostResponseInfo`**

## Implements

- [`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductsTaskPostResponseInfo.md#cost)
- [status\_code](MerchantGoogleProductsTaskPostResponseInfo.md#status_code)
- [status\_message](MerchantGoogleProductsTaskPostResponseInfo.md#status_message)
- [tasks](MerchantGoogleProductsTaskPostResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleProductsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleProductsTaskPostResponseInfo.md#tasks_error)
- [time](MerchantGoogleProductsTaskPostResponseInfo.md#time)
- [version](MerchantGoogleProductsTaskPostResponseInfo.md#version)

### Methods

- [init](MerchantGoogleProductsTaskPostResponseInfo.md#init)
- [toJSON](MerchantGoogleProductsTaskPostResponseInfo.md#tojson)
- [fromJS](MerchantGoogleProductsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductsTaskPostResponseInfo**(`data?`): [`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md) |

#### Returns

[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:164298

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductsTaskPostResponseInfo](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[cost](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#cost)

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

[IMerchantGoogleProductsTaskPostResponseInfo](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[status_code](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#status_code)

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

[IMerchantGoogleProductsTaskPostResponseInfo](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[status_message](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleProductsTaskPostTaskInfo`](MerchantGoogleProductsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleProductsTaskPostResponseInfo](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[tasks](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:164294

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleProductsTaskPostResponseInfo](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleProductsTaskPostResponseInfo](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleProductsTaskPostResponseInfo](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[time](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleProductsTaskPostResponseInfo](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[version](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#version)

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

main.ts:164302

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

main.ts:164324

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:164317
