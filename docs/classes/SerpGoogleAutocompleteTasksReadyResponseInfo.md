[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleAutocompleteTasksReadyResponseInfo

# Class: SerpGoogleAutocompleteTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleAutocompleteTasksReadyResponseInfo`**

## Implements

- [`ISerpGoogleAutocompleteTasksReadyResponseInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleAutocompleteTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleAutocompleteTasksReadyResponseInfo.md#cost)
- [status\_code](SerpGoogleAutocompleteTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpGoogleAutocompleteTasksReadyResponseInfo.md#status_message)
- [tasks](SerpGoogleAutocompleteTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleAutocompleteTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleAutocompleteTasksReadyResponseInfo.md#tasks_error)
- [time](SerpGoogleAutocompleteTasksReadyResponseInfo.md#time)
- [version](SerpGoogleAutocompleteTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpGoogleAutocompleteTasksReadyResponseInfo.md#init)
- [toJSON](SerpGoogleAutocompleteTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpGoogleAutocompleteTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleAutocompleteTasksReadyResponseInfo**(`data?`): [`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleAutocompleteTasksReadyResponseInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md) |

#### Returns

[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:51038

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md).[cost](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md#cost)

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

[ISerpGoogleAutocompleteTasksReadyResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md#status_code)

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

[ISerpGoogleAutocompleteTasksReadyResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleAutocompleteTasksReadyTaskInfo`](SerpGoogleAutocompleteTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:51034

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md).[time](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleAutocompleteTasksReadyResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md).[version](../interfaces/ISerpGoogleAutocompleteTasksReadyResponseInfo.md#version)

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

main.ts:51042

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

main.ts:51064

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:51057
