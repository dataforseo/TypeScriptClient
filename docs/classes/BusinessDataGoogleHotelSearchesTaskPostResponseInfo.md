[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesTaskPostResponseInfo

# Class: BusinessDataGoogleHotelSearchesTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#time)
- [version](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesTaskPostResponseInfo**(`data?`): [`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:198612

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelSearchesTaskPostTaskInfo`](BusinessDataGoogleHotelSearchesTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:198608

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#version)

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

main.ts:198616

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

main.ts:198638

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:198631
