[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTasksReadyResponseInfo

# Class: MerchantGoogleSellersTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleSellersTasksReadyResponseInfo`**

## Implements

- [`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleSellersTasksReadyResponseInfo.md#cost)
- [status\_code](MerchantGoogleSellersTasksReadyResponseInfo.md#status_code)
- [status\_message](MerchantGoogleSellersTasksReadyResponseInfo.md#status_message)
- [tasks](MerchantGoogleSellersTasksReadyResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleSellersTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleSellersTasksReadyResponseInfo.md#tasks_error)
- [time](MerchantGoogleSellersTasksReadyResponseInfo.md#time)
- [version](MerchantGoogleSellersTasksReadyResponseInfo.md#version)

### Methods

- [init](MerchantGoogleSellersTasksReadyResponseInfo.md#init)
- [toJSON](MerchantGoogleSellersTasksReadyResponseInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTasksReadyResponseInfo**(`data?`): [`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md) |

#### Returns

[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:166512

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleSellersTasksReadyResponseInfo](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[cost](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#cost)

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

[IMerchantGoogleSellersTasksReadyResponseInfo](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[status_code](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#status_code)

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

[IMerchantGoogleSellersTasksReadyResponseInfo](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[status_message](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleSellersTasksReadyTaskInfo`](MerchantGoogleSellersTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleSellersTasksReadyResponseInfo](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[tasks](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:166508

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleSellersTasksReadyResponseInfo](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleSellersTasksReadyResponseInfo](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleSellersTasksReadyResponseInfo](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[time](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleSellersTasksReadyResponseInfo](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[version](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#version)

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

main.ts:166516

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

main.ts:166538

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:166531
