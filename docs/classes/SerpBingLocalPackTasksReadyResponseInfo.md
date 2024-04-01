[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTasksReadyResponseInfo

# Class: SerpBingLocalPackTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingLocalPackTasksReadyResponseInfo`**

## Implements

- [`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackTasksReadyResponseInfo.md#cost)
- [status\_code](SerpBingLocalPackTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpBingLocalPackTasksReadyResponseInfo.md#status_message)
- [tasks](SerpBingLocalPackTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpBingLocalPackTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingLocalPackTasksReadyResponseInfo.md#tasks_error)
- [time](SerpBingLocalPackTasksReadyResponseInfo.md#time)
- [version](SerpBingLocalPackTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpBingLocalPackTasksReadyResponseInfo.md#init)
- [toJSON](SerpBingLocalPackTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpBingLocalPackTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTasksReadyResponseInfo**(`data?`): [`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md) |

#### Returns

[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:58328

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackTasksReadyResponseInfo](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[cost](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#cost)

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

[ISerpBingLocalPackTasksReadyResponseInfo](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#status_code)

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

[ISerpBingLocalPackTasksReadyResponseInfo](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBingLocalPackTasksReadyTaskInfo`](SerpBingLocalPackTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingLocalPackTasksReadyResponseInfo](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:58324

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingLocalPackTasksReadyResponseInfo](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingLocalPackTasksReadyResponseInfo](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingLocalPackTasksReadyResponseInfo](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[time](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingLocalPackTasksReadyResponseInfo](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[version](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#version)

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

main.ts:58332

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

main.ts:58354

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:58347
