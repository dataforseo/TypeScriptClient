[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleAutocompleteTaskPostResponseInfo

# Class: SerpGoogleAutocompleteTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleAutocompleteTaskPostResponseInfo`**

## Implements

- [`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleAutocompleteTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleAutocompleteTaskPostResponseInfo.md#cost)
- [status\_code](SerpGoogleAutocompleteTaskPostResponseInfo.md#status_code)
- [status\_message](SerpGoogleAutocompleteTaskPostResponseInfo.md#status_message)
- [tasks](SerpGoogleAutocompleteTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleAutocompleteTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleAutocompleteTaskPostResponseInfo.md#tasks_error)
- [time](SerpGoogleAutocompleteTaskPostResponseInfo.md#time)
- [version](SerpGoogleAutocompleteTaskPostResponseInfo.md#version)

### Methods

- [init](SerpGoogleAutocompleteTaskPostResponseInfo.md#init)
- [toJSON](SerpGoogleAutocompleteTaskPostResponseInfo.md#tojson)
- [fromJS](SerpGoogleAutocompleteTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleAutocompleteTaskPostResponseInfo**(`data?`): [`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md) |

#### Returns

[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:50826

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleAutocompleteTaskPostResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[cost](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#cost)

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

[ISerpGoogleAutocompleteTaskPostResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[status_code](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#status_code)

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

[ISerpGoogleAutocompleteTaskPostResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[status_message](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleAutocompleteTaskPostTaskInfo`](SerpGoogleAutocompleteTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleAutocompleteTaskPostResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[tasks](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:50822

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleAutocompleteTaskPostResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleAutocompleteTaskPostResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleAutocompleteTaskPostResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[time](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleAutocompleteTaskPostResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[version](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#version)

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

main.ts:50830

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

main.ts:50852

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:50845
