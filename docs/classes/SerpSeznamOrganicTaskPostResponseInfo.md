[Documentation](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTaskPostResponseInfo

# Class: SerpSeznamOrganicTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpSeznamOrganicTaskPostResponseInfo`**

## Implements

- [`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpSeznamOrganicTaskPostResponseInfo.md#cost)
- [status\_code](SerpSeznamOrganicTaskPostResponseInfo.md#status_code)
- [status\_message](SerpSeznamOrganicTaskPostResponseInfo.md#status_message)
- [tasks](SerpSeznamOrganicTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpSeznamOrganicTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpSeznamOrganicTaskPostResponseInfo.md#tasks_error)
- [time](SerpSeznamOrganicTaskPostResponseInfo.md#time)
- [version](SerpSeznamOrganicTaskPostResponseInfo.md#version)

### Methods

- [init](SerpSeznamOrganicTaskPostResponseInfo.md#init)
- [toJSON](SerpSeznamOrganicTaskPostResponseInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTaskPostResponseInfo**(`data?`): [`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md) |

#### Returns

[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:72020

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamOrganicTaskPostResponseInfo](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[cost](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#cost)

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

[ISerpSeznamOrganicTaskPostResponseInfo](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[status_code](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#status_code)

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

[ISerpSeznamOrganicTaskPostResponseInfo](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[status_message](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpSeznamOrganicTaskPostTaskInfo`](SerpSeznamOrganicTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpSeznamOrganicTaskPostResponseInfo](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[tasks](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:72016

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpSeznamOrganicTaskPostResponseInfo](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpSeznamOrganicTaskPostResponseInfo](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpSeznamOrganicTaskPostResponseInfo](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[time](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpSeznamOrganicTaskPostResponseInfo](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[version](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#version)

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

main.ts:72024

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

main.ts:72046

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:72039
