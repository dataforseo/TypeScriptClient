[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo

# Class: BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#time)
- [version](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo**(`data?`): [`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:197352

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo`](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:197348

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#version)

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

main.ts:197356

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

main.ts:197378

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:197371
