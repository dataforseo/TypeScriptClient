[Documentation](../README.md) / [Exports](../modules.md) / SerpSeznamLocationsCountryResponseInfo

# Class: SerpSeznamLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpSeznamLocationsCountryResponseInfo`**

## Implements

- [`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](SerpSeznamLocationsCountryResponseInfo.md#cost)
- [status\_code](SerpSeznamLocationsCountryResponseInfo.md#status_code)
- [status\_message](SerpSeznamLocationsCountryResponseInfo.md#status_message)
- [tasks](SerpSeznamLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](SerpSeznamLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](SerpSeznamLocationsCountryResponseInfo.md#tasks_error)
- [time](SerpSeznamLocationsCountryResponseInfo.md#time)
- [version](SerpSeznamLocationsCountryResponseInfo.md#version)

### Methods

- [init](SerpSeznamLocationsCountryResponseInfo.md#init)
- [toJSON](SerpSeznamLocationsCountryResponseInfo.md#tojson)
- [fromJS](SerpSeznamLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamLocationsCountryResponseInfo**(`data?`): [`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md) |

#### Returns

[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:71456

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamLocationsCountryResponseInfo](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[cost](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#cost)

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

[ISerpSeznamLocationsCountryResponseInfo](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[status_code](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#status_code)

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

[ISerpSeznamLocationsCountryResponseInfo](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[status_message](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpSeznamLocationsCountryTaskInfo`](SerpSeznamLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpSeznamLocationsCountryResponseInfo](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[tasks](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#tasks)

#### Defined in

main.ts:71452

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpSeznamLocationsCountryResponseInfo](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[tasks_count](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpSeznamLocationsCountryResponseInfo](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[tasks_error](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpSeznamLocationsCountryResponseInfo](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[time](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpSeznamLocationsCountryResponseInfo](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[version](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#version)

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

main.ts:71460

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

main.ts:71482

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:71475
