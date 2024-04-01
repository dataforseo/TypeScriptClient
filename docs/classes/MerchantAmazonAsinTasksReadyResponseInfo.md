[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTasksReadyResponseInfo

# Class: MerchantAmazonAsinTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonAsinTasksReadyResponseInfo`**

## Implements

- [`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonAsinTasksReadyResponseInfo.md#cost)
- [status\_code](MerchantAmazonAsinTasksReadyResponseInfo.md#status_code)
- [status\_message](MerchantAmazonAsinTasksReadyResponseInfo.md#status_message)
- [tasks](MerchantAmazonAsinTasksReadyResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonAsinTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonAsinTasksReadyResponseInfo.md#tasks_error)
- [time](MerchantAmazonAsinTasksReadyResponseInfo.md#time)
- [version](MerchantAmazonAsinTasksReadyResponseInfo.md#version)

### Methods

- [init](MerchantAmazonAsinTasksReadyResponseInfo.md#init)
- [toJSON](MerchantAmazonAsinTasksReadyResponseInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTasksReadyResponseInfo**(`data?`): [`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md) |

#### Returns

[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:177724

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonAsinTasksReadyResponseInfo](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[cost](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#cost)

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

[IMerchantAmazonAsinTasksReadyResponseInfo](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[status_code](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#status_code)

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

[IMerchantAmazonAsinTasksReadyResponseInfo](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[status_message](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonAsinTasksReadyTaskInfo`](MerchantAmazonAsinTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonAsinTasksReadyResponseInfo](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[tasks](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:177720

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonAsinTasksReadyResponseInfo](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonAsinTasksReadyResponseInfo](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonAsinTasksReadyResponseInfo](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[time](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonAsinTasksReadyResponseInfo](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[version](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#version)

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

main.ts:177728

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

main.ts:177750

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:177743
