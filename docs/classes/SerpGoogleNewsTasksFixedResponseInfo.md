[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTasksFixedResponseInfo

# Class: SerpGoogleNewsTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleNewsTasksFixedResponseInfo`**

## Implements

- [`ISerpGoogleNewsTasksFixedResponseInfo`](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleNewsTasksFixedResponseInfo.md#cost)
- [status\_code](SerpGoogleNewsTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpGoogleNewsTasksFixedResponseInfo.md#status_message)
- [tasks](SerpGoogleNewsTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleNewsTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleNewsTasksFixedResponseInfo.md#tasks_error)
- [time](SerpGoogleNewsTasksFixedResponseInfo.md#time)
- [version](SerpGoogleNewsTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpGoogleNewsTasksFixedResponseInfo.md#init)
- [toJSON](SerpGoogleNewsTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpGoogleNewsTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsTasksFixedResponseInfo**(`data?`): [`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsTasksFixedResponseInfo`](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md) |

#### Returns

[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:43190

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleNewsTasksFixedResponseInfo](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md).[cost](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md#cost)

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

[ISerpGoogleNewsTasksFixedResponseInfo](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md#status_code)

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

[ISerpGoogleNewsTasksFixedResponseInfo](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleNewsTasksFixedTaskInfo`](SerpGoogleNewsTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleNewsTasksFixedResponseInfo](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md#tasks)

#### Defined in

main.ts:43186

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleNewsTasksFixedResponseInfo](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleNewsTasksFixedResponseInfo](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleNewsTasksFixedResponseInfo](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md).[time](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleNewsTasksFixedResponseInfo](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md).[version](../interfaces/ISerpGoogleNewsTasksFixedResponseInfo.md#version)

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

main.ts:43194

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

main.ts:43216

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:43209
