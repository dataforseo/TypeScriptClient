[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskGetAdvancedResponseInfo

# Class: MerchantGoogleSellersTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleSellersTaskGetAdvancedResponseInfo`**

## Implements

- [`IMerchantGoogleSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#time)
- [version](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskGetAdvancedResponseInfo**(`data?`): [`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:172441

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md#cost)

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

[IMerchantGoogleSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md#status_code)

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

[IMerchantGoogleSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleSellersTaskGetAdvancedTaskInfo`](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:172437

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md).[time](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md).[version](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResponseInfo.md#version)

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

main.ts:172445

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

main.ts:172467

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:172460
