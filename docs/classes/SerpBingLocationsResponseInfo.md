[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocationsResponseInfo

# Class: SerpBingLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingLocationsResponseInfo`**

## Implements

- [`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocationsResponseInfo.md#constructor)

### Properties

- [cost](SerpBingLocationsResponseInfo.md#cost)
- [status\_code](SerpBingLocationsResponseInfo.md#status_code)
- [status\_message](SerpBingLocationsResponseInfo.md#status_message)
- [tasks](SerpBingLocationsResponseInfo.md#tasks)
- [tasks\_count](SerpBingLocationsResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingLocationsResponseInfo.md#tasks_error)
- [time](SerpBingLocationsResponseInfo.md#time)
- [version](SerpBingLocationsResponseInfo.md#version)

### Methods

- [init](SerpBingLocationsResponseInfo.md#init)
- [toJSON](SerpBingLocationsResponseInfo.md#tojson)
- [fromJS](SerpBingLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocationsResponseInfo**(`data?`): [`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md) |

#### Returns

[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:55642

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocationsResponseInfo](../interfaces/ISerpBingLocationsResponseInfo.md).[cost](../interfaces/ISerpBingLocationsResponseInfo.md#cost)

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

[ISerpBingLocationsResponseInfo](../interfaces/ISerpBingLocationsResponseInfo.md).[status_code](../interfaces/ISerpBingLocationsResponseInfo.md#status_code)

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

[ISerpBingLocationsResponseInfo](../interfaces/ISerpBingLocationsResponseInfo.md).[status_message](../interfaces/ISerpBingLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBingLocationsTaskInfo`](SerpBingLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingLocationsResponseInfo](../interfaces/ISerpBingLocationsResponseInfo.md).[tasks](../interfaces/ISerpBingLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:55638

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingLocationsResponseInfo](../interfaces/ISerpBingLocationsResponseInfo.md).[tasks_count](../interfaces/ISerpBingLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingLocationsResponseInfo](../interfaces/ISerpBingLocationsResponseInfo.md).[tasks_error](../interfaces/ISerpBingLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingLocationsResponseInfo](../interfaces/ISerpBingLocationsResponseInfo.md).[time](../interfaces/ISerpBingLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingLocationsResponseInfo](../interfaces/ISerpBingLocationsResponseInfo.md).[version](../interfaces/ISerpBingLocationsResponseInfo.md#version)

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

main.ts:55646

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

main.ts:55668

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:55661
