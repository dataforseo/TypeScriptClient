[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleEventsTasksReadyResponseInfo

# Class: SerpGoogleEventsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleEventsTasksReadyResponseInfo`**

## Implements

- [`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleEventsTasksReadyResponseInfo.md#cost)
- [status\_code](SerpGoogleEventsTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpGoogleEventsTasksReadyResponseInfo.md#status_message)
- [tasks](SerpGoogleEventsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleEventsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleEventsTasksReadyResponseInfo.md#tasks_error)
- [time](SerpGoogleEventsTasksReadyResponseInfo.md#time)
- [version](SerpGoogleEventsTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpGoogleEventsTasksReadyResponseInfo.md#init)
- [toJSON](SerpGoogleEventsTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpGoogleEventsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsTasksReadyResponseInfo**(`data?`): [`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md) |

#### Returns

[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:44910

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleEventsTasksReadyResponseInfo](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[cost](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#cost)

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

[ISerpGoogleEventsTasksReadyResponseInfo](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#status_code)

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

[ISerpGoogleEventsTasksReadyResponseInfo](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleEventsTasksReadyTaskInfo`](SerpGoogleEventsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleEventsTasksReadyResponseInfo](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:44906

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleEventsTasksReadyResponseInfo](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleEventsTasksReadyResponseInfo](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleEventsTasksReadyResponseInfo](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[time](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleEventsTasksReadyResponseInfo](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[version](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#version)

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

main.ts:44914

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

main.ts:44936

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:44929
