[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataYelpLocationsResponseInfo

# Class: BusinessDataYelpLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataYelpLocationsResponseInfo`**

## Implements

- [`IBusinessDataYelpLocationsResponseInfo`](../interfaces/IBusinessDataYelpLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpLocationsResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpLocationsResponseInfo.md#cost)
- [status\_code](BusinessDataYelpLocationsResponseInfo.md#status_code)
- [status\_message](BusinessDataYelpLocationsResponseInfo.md#status_message)
- [tasks](BusinessDataYelpLocationsResponseInfo.md#tasks)
- [tasks\_count](BusinessDataYelpLocationsResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataYelpLocationsResponseInfo.md#tasks_error)
- [time](BusinessDataYelpLocationsResponseInfo.md#time)
- [version](BusinessDataYelpLocationsResponseInfo.md#version)

### Methods

- [init](BusinessDataYelpLocationsResponseInfo.md#init)
- [toJSON](BusinessDataYelpLocationsResponseInfo.md#tojson)
- [fromJS](BusinessDataYelpLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpLocationsResponseInfo**(`data?`): [`BusinessDataYelpLocationsResponseInfo`](BusinessDataYelpLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpLocationsResponseInfo`](../interfaces/IBusinessDataYelpLocationsResponseInfo.md) |

#### Returns

[`BusinessDataYelpLocationsResponseInfo`](BusinessDataYelpLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:208388

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpLocationsResponseInfo](../interfaces/IBusinessDataYelpLocationsResponseInfo.md).[cost](../interfaces/IBusinessDataYelpLocationsResponseInfo.md#cost)

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

[IBusinessDataYelpLocationsResponseInfo](../interfaces/IBusinessDataYelpLocationsResponseInfo.md).[status_code](../interfaces/IBusinessDataYelpLocationsResponseInfo.md#status_code)

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

[IBusinessDataYelpLocationsResponseInfo](../interfaces/IBusinessDataYelpLocationsResponseInfo.md).[status_message](../interfaces/IBusinessDataYelpLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataYelpLocationsTaskInfo`](BusinessDataYelpLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataYelpLocationsResponseInfo](../interfaces/IBusinessDataYelpLocationsResponseInfo.md).[tasks](../interfaces/IBusinessDataYelpLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:208384

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataYelpLocationsResponseInfo](../interfaces/IBusinessDataYelpLocationsResponseInfo.md).[tasks_count](../interfaces/IBusinessDataYelpLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataYelpLocationsResponseInfo](../interfaces/IBusinessDataYelpLocationsResponseInfo.md).[tasks_error](../interfaces/IBusinessDataYelpLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataYelpLocationsResponseInfo](../interfaces/IBusinessDataYelpLocationsResponseInfo.md).[time](../interfaces/IBusinessDataYelpLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataYelpLocationsResponseInfo](../interfaces/IBusinessDataYelpLocationsResponseInfo.md).[version](../interfaces/IBusinessDataYelpLocationsResponseInfo.md#version)

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

main.ts:208392

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

main.ts:208414

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpLocationsResponseInfo`](BusinessDataYelpLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpLocationsResponseInfo`](BusinessDataYelpLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:208407
