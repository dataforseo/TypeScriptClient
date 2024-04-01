[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleAutocompleteTaskGetAdvancedResponseInfo

# Class: SerpGoogleAutocompleteTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#time)
- [version](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleAutocompleteTaskGetAdvancedResponseInfo**(`data?`): [`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:51622

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleAutocompleteTaskGetAdvancedTaskInfo`](SerpGoogleAutocompleteTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:51618

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md#version)

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

main.ts:51626

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

main.ts:51648

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:51641
