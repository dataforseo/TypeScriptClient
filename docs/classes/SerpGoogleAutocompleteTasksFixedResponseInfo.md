[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleAutocompleteTasksFixedResponseInfo

# Class: SerpGoogleAutocompleteTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleAutocompleteTasksFixedResponseInfo`**

## Implements

- [`ISerpGoogleAutocompleteTasksFixedResponseInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleAutocompleteTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleAutocompleteTasksFixedResponseInfo.md#cost)
- [status\_code](SerpGoogleAutocompleteTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpGoogleAutocompleteTasksFixedResponseInfo.md#status_message)
- [tasks](SerpGoogleAutocompleteTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleAutocompleteTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleAutocompleteTasksFixedResponseInfo.md#tasks_error)
- [time](SerpGoogleAutocompleteTasksFixedResponseInfo.md#time)
- [version](SerpGoogleAutocompleteTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpGoogleAutocompleteTasksFixedResponseInfo.md#init)
- [toJSON](SerpGoogleAutocompleteTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpGoogleAutocompleteTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleAutocompleteTasksFixedResponseInfo**(`data?`): [`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleAutocompleteTasksFixedResponseInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md) |

#### Returns

[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:51250

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md).[cost](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md#cost)

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

[ISerpGoogleAutocompleteTasksFixedResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md#status_code)

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

[ISerpGoogleAutocompleteTasksFixedResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleAutocompleteTasksFixedTaskInfo`](SerpGoogleAutocompleteTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md#tasks)

#### Defined in

main.ts:51246

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md).[time](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleAutocompleteTasksFixedResponseInfo](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md).[version](../interfaces/ISerpGoogleAutocompleteTasksFixedResponseInfo.md#version)

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

main.ts:51254

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

main.ts:51276

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:51269
