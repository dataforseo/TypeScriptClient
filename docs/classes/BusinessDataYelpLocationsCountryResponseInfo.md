[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataYelpLocationsCountryResponseInfo

# Class: BusinessDataYelpLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataYelpLocationsCountryResponseInfo`**

## Implements

- [`IBusinessDataYelpLocationsCountryResponseInfo`](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpLocationsCountryResponseInfo.md#cost)
- [status\_code](BusinessDataYelpLocationsCountryResponseInfo.md#status_code)
- [status\_message](BusinessDataYelpLocationsCountryResponseInfo.md#status_message)
- [tasks](BusinessDataYelpLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](BusinessDataYelpLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataYelpLocationsCountryResponseInfo.md#tasks_error)
- [time](BusinessDataYelpLocationsCountryResponseInfo.md#time)
- [version](BusinessDataYelpLocationsCountryResponseInfo.md#version)

### Methods

- [init](BusinessDataYelpLocationsCountryResponseInfo.md#init)
- [toJSON](BusinessDataYelpLocationsCountryResponseInfo.md#tojson)
- [fromJS](BusinessDataYelpLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpLocationsCountryResponseInfo**(`data?`): [`BusinessDataYelpLocationsCountryResponseInfo`](BusinessDataYelpLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpLocationsCountryResponseInfo`](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md) |

#### Returns

[`BusinessDataYelpLocationsCountryResponseInfo`](BusinessDataYelpLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:208580

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpLocationsCountryResponseInfo](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md).[cost](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md#cost)

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

[IBusinessDataYelpLocationsCountryResponseInfo](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md).[status_code](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md#status_code)

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

[IBusinessDataYelpLocationsCountryResponseInfo](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md).[status_message](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataYelpLocationsCountryTaskInfo`](BusinessDataYelpLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataYelpLocationsCountryResponseInfo](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md).[tasks](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md#tasks)

#### Defined in

main.ts:208576

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataYelpLocationsCountryResponseInfo](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md).[tasks_count](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataYelpLocationsCountryResponseInfo](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md).[tasks_error](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataYelpLocationsCountryResponseInfo](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md).[time](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataYelpLocationsCountryResponseInfo](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md).[version](../interfaces/IBusinessDataYelpLocationsCountryResponseInfo.md#version)

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

main.ts:208584

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

main.ts:208606

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpLocationsCountryResponseInfo`](BusinessDataYelpLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpLocationsCountryResponseInfo`](BusinessDataYelpLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:208599
