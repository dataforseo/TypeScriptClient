[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleProductSpecTaskPostResponseInfo

# Class: MerchantGoogleProductSpecTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleProductSpecTaskPostResponseInfo`**

## Implements

- [`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductSpecTaskPostResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductSpecTaskPostResponseInfo.md#cost)
- [status\_code](MerchantGoogleProductSpecTaskPostResponseInfo.md#status_code)
- [status\_message](MerchantGoogleProductSpecTaskPostResponseInfo.md#status_message)
- [tasks](MerchantGoogleProductSpecTaskPostResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleProductSpecTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleProductSpecTaskPostResponseInfo.md#tasks_error)
- [time](MerchantGoogleProductSpecTaskPostResponseInfo.md#time)
- [version](MerchantGoogleProductSpecTaskPostResponseInfo.md#version)

### Methods

- [init](MerchantGoogleProductSpecTaskPostResponseInfo.md#init)
- [toJSON](MerchantGoogleProductSpecTaskPostResponseInfo.md#tojson)
- [fromJS](MerchantGoogleProductSpecTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductSpecTaskPostResponseInfo**(`data?`): [`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md) |

#### Returns

[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:167704

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductSpecTaskPostResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[cost](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#cost)

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

[IMerchantGoogleProductSpecTaskPostResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[status_code](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#status_code)

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

[IMerchantGoogleProductSpecTaskPostResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[status_message](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleProductSpecTaskPostTaskInfo`](MerchantGoogleProductSpecTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleProductSpecTaskPostResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[tasks](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:167700

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleProductSpecTaskPostResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleProductSpecTaskPostResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleProductSpecTaskPostResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[time](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleProductSpecTaskPostResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[version](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#version)

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

main.ts:167708

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

main.ts:167730

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:167723
