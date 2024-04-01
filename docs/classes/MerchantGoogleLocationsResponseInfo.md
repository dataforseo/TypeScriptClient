[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleLocationsResponseInfo

# Class: MerchantGoogleLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleLocationsResponseInfo`**

## Implements

- [`IMerchantGoogleLocationsResponseInfo`](../interfaces/IMerchantGoogleLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleLocationsResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleLocationsResponseInfo.md#cost)
- [status\_code](MerchantGoogleLocationsResponseInfo.md#status_code)
- [status\_message](MerchantGoogleLocationsResponseInfo.md#status_message)
- [tasks](MerchantGoogleLocationsResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleLocationsResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleLocationsResponseInfo.md#tasks_error)
- [time](MerchantGoogleLocationsResponseInfo.md#time)
- [version](MerchantGoogleLocationsResponseInfo.md#version)

### Methods

- [init](MerchantGoogleLocationsResponseInfo.md#init)
- [toJSON](MerchantGoogleLocationsResponseInfo.md#tojson)
- [fromJS](MerchantGoogleLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleLocationsResponseInfo**(`data?`): [`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleLocationsResponseInfo`](../interfaces/IMerchantGoogleLocationsResponseInfo.md) |

#### Returns

[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:169075

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleLocationsResponseInfo](../interfaces/IMerchantGoogleLocationsResponseInfo.md).[cost](../interfaces/IMerchantGoogleLocationsResponseInfo.md#cost)

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

[IMerchantGoogleLocationsResponseInfo](../interfaces/IMerchantGoogleLocationsResponseInfo.md).[status_code](../interfaces/IMerchantGoogleLocationsResponseInfo.md#status_code)

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

[IMerchantGoogleLocationsResponseInfo](../interfaces/IMerchantGoogleLocationsResponseInfo.md).[status_message](../interfaces/IMerchantGoogleLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleLocationsTaskInfo`](MerchantGoogleLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleLocationsResponseInfo](../interfaces/IMerchantGoogleLocationsResponseInfo.md).[tasks](../interfaces/IMerchantGoogleLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:169071

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleLocationsResponseInfo](../interfaces/IMerchantGoogleLocationsResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleLocationsResponseInfo](../interfaces/IMerchantGoogleLocationsResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleLocationsResponseInfo](../interfaces/IMerchantGoogleLocationsResponseInfo.md).[time](../interfaces/IMerchantGoogleLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleLocationsResponseInfo](../interfaces/IMerchantGoogleLocationsResponseInfo.md).[version](../interfaces/IMerchantGoogleLocationsResponseInfo.md#version)

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

main.ts:169079

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

main.ts:169101

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:169094
