[Documentation](../README.md) / [Exports](../modules.md) / SerpYahooLocationsResponseInfo

# Class: SerpYahooLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYahooLocationsResponseInfo`**

## Implements

- [`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooLocationsResponseInfo.md#constructor)

### Properties

- [cost](SerpYahooLocationsResponseInfo.md#cost)
- [status\_code](SerpYahooLocationsResponseInfo.md#status_code)
- [status\_message](SerpYahooLocationsResponseInfo.md#status_message)
- [tasks](SerpYahooLocationsResponseInfo.md#tasks)
- [tasks\_count](SerpYahooLocationsResponseInfo.md#tasks_count)
- [tasks\_error](SerpYahooLocationsResponseInfo.md#tasks_error)
- [time](SerpYahooLocationsResponseInfo.md#time)
- [version](SerpYahooLocationsResponseInfo.md#version)

### Methods

- [init](SerpYahooLocationsResponseInfo.md#init)
- [toJSON](SerpYahooLocationsResponseInfo.md#tojson)
- [fromJS](SerpYahooLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooLocationsResponseInfo**(`data?`): [`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md) |

#### Returns

[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:65156

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooLocationsResponseInfo](../interfaces/ISerpYahooLocationsResponseInfo.md).[cost](../interfaces/ISerpYahooLocationsResponseInfo.md#cost)

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

[ISerpYahooLocationsResponseInfo](../interfaces/ISerpYahooLocationsResponseInfo.md).[status_code](../interfaces/ISerpYahooLocationsResponseInfo.md#status_code)

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

[ISerpYahooLocationsResponseInfo](../interfaces/ISerpYahooLocationsResponseInfo.md).[status_message](../interfaces/ISerpYahooLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpYahooLocationsTaskInfo`](SerpYahooLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYahooLocationsResponseInfo](../interfaces/ISerpYahooLocationsResponseInfo.md).[tasks](../interfaces/ISerpYahooLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:65152

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYahooLocationsResponseInfo](../interfaces/ISerpYahooLocationsResponseInfo.md).[tasks_count](../interfaces/ISerpYahooLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYahooLocationsResponseInfo](../interfaces/ISerpYahooLocationsResponseInfo.md).[tasks_error](../interfaces/ISerpYahooLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYahooLocationsResponseInfo](../interfaces/ISerpYahooLocationsResponseInfo.md).[time](../interfaces/ISerpYahooLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYahooLocationsResponseInfo](../interfaces/ISerpYahooLocationsResponseInfo.md).[version](../interfaces/ISerpYahooLocationsResponseInfo.md#version)

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

main.ts:65160

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

main.ts:65182

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:65175
