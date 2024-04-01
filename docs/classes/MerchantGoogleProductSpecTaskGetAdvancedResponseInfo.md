[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleProductSpecTaskGetAdvancedResponseInfo

# Class: MerchantGoogleProductSpecTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`**

## Implements

- [`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#time)
- [version](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#init)
- [toJSON](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductSpecTaskGetAdvancedResponseInfo**(`data?`): [`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md) |

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:173611

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#cost)

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

[IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#status_code)

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

[IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleProductSpecTaskGetAdvancedTaskInfo`](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:173607

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[time](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[version](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#version)

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

main.ts:173615

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

main.ts:173637

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:173630
