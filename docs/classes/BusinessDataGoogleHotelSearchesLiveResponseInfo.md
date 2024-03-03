[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesLiveResponseInfo

# Class: BusinessDataGoogleHotelSearchesLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleHotelSearchesLiveResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#time)
- [version](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesLiveResponseInfo**(`data?`): [`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:194887

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelSearchesLiveResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelSearchesLiveResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelSearchesLiveTaskInfo`](BusinessDataGoogleHotelSearchesLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#tasks)

#### Defined in

main.ts:194883

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#version)

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

main.ts:194891

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

main.ts:194913

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:194906
