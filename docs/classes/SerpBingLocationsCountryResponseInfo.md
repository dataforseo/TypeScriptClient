[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocationsCountryResponseInfo

# Class: SerpBingLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingLocationsCountryResponseInfo`**

## Implements

- [`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](SerpBingLocationsCountryResponseInfo.md#cost)
- [status\_code](SerpBingLocationsCountryResponseInfo.md#status_code)
- [status\_message](SerpBingLocationsCountryResponseInfo.md#status_message)
- [tasks](SerpBingLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](SerpBingLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingLocationsCountryResponseInfo.md#tasks_error)
- [time](SerpBingLocationsCountryResponseInfo.md#time)
- [version](SerpBingLocationsCountryResponseInfo.md#version)

### Methods

- [init](SerpBingLocationsCountryResponseInfo.md#init)
- [toJSON](SerpBingLocationsCountryResponseInfo.md#tojson)
- [fromJS](SerpBingLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocationsCountryResponseInfo**(`data?`): [`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md) |

#### Returns

[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:55840

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocationsCountryResponseInfo](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[cost](../interfaces/ISerpBingLocationsCountryResponseInfo.md#cost)

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

[ISerpBingLocationsCountryResponseInfo](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[status_code](../interfaces/ISerpBingLocationsCountryResponseInfo.md#status_code)

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

[ISerpBingLocationsCountryResponseInfo](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[status_message](../interfaces/ISerpBingLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBingLocationsCountryTaskInfo`](SerpBingLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingLocationsCountryResponseInfo](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[tasks](../interfaces/ISerpBingLocationsCountryResponseInfo.md#tasks)

#### Defined in

main.ts:55836

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingLocationsCountryResponseInfo](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[tasks_count](../interfaces/ISerpBingLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingLocationsCountryResponseInfo](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[tasks_error](../interfaces/ISerpBingLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingLocationsCountryResponseInfo](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[time](../interfaces/ISerpBingLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingLocationsCountryResponseInfo](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[version](../interfaces/ISerpBingLocationsCountryResponseInfo.md#version)

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

main.ts:55844

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

main.ts:55866

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:55859
