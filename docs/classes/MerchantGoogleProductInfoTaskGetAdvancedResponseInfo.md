[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleProductInfoTaskGetAdvancedResponseInfo

# Class: MerchantGoogleProductInfoTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`**

## Implements

- [`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#time)
- [version](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#init)
- [toJSON](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductInfoTaskGetAdvancedResponseInfo**(`data?`): [`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md) |

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:174969

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#cost)

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

[IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#status_code)

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

[IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleProductInfoTaskGetAdvancedTaskInfo`](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:174965

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[time](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[version](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#version)

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

main.ts:174973

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

main.ts:174995

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:174988
