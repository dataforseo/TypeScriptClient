[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTasksReadyResponseInfo

# Class: SerpGoogleOrganicTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleOrganicTasksReadyResponseInfo`**

## Implements

- [`ISerpGoogleOrganicTasksReadyResponseInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTasksReadyResponseInfo.md#cost)
- [status\_code](SerpGoogleOrganicTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTasksReadyResponseInfo.md#status_message)
- [tasks](SerpGoogleOrganicTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleOrganicTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleOrganicTasksReadyResponseInfo.md#tasks_error)
- [time](SerpGoogleOrganicTasksReadyResponseInfo.md#time)
- [version](SerpGoogleOrganicTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpGoogleOrganicTasksReadyResponseInfo.md#init)
- [toJSON](SerpGoogleOrganicTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTasksReadyResponseInfo**(`data?`): [`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTasksReadyResponseInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md) |

#### Returns

[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:25406

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTasksReadyResponseInfo](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md).[cost](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md#cost)

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

[ISerpGoogleOrganicTasksReadyResponseInfo](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md#status_code)

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

[ISerpGoogleOrganicTasksReadyResponseInfo](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleOrganicTasksReadyTaskInfo`](SerpGoogleOrganicTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleOrganicTasksReadyResponseInfo](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:25402

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleOrganicTasksReadyResponseInfo](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleOrganicTasksReadyResponseInfo](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTasksReadyResponseInfo](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md).[time](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleOrganicTasksReadyResponseInfo](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md).[version](../interfaces/ISerpGoogleOrganicTasksReadyResponseInfo.md#version)

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

main.ts:25410

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

main.ts:25432

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:25425
