[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo

# Class: BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#time)
- [version](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo**(`data?`): [`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:196602

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:196598

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#version)

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

main.ts:196606

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

main.ts:196628

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:196621
