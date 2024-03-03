[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleMapsTasksReadyResponseInfo

# Class: SerpGoogleMapsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleMapsTasksReadyResponseInfo`**

## Implements

- [`ISerpGoogleMapsTasksReadyResponseInfo`](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleMapsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleMapsTasksReadyResponseInfo.md#cost)
- [status\_code](SerpGoogleMapsTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpGoogleMapsTasksReadyResponseInfo.md#status_message)
- [tasks](SerpGoogleMapsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleMapsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleMapsTasksReadyResponseInfo.md#tasks_error)
- [time](SerpGoogleMapsTasksReadyResponseInfo.md#time)
- [version](SerpGoogleMapsTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpGoogleMapsTasksReadyResponseInfo.md#init)
- [toJSON](SerpGoogleMapsTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpGoogleMapsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleMapsTasksReadyResponseInfo**(`data?`): [`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleMapsTasksReadyResponseInfo`](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md) |

#### Returns

[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:38089

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleMapsTasksReadyResponseInfo](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md).[cost](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[ISerpGoogleMapsTasksReadyResponseInfo](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[ISerpGoogleMapsTasksReadyResponseInfo](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleMapsTasksReadyTaskInfo`](SerpGoogleMapsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleMapsTasksReadyResponseInfo](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:38085

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleMapsTasksReadyResponseInfo](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleMapsTasksReadyResponseInfo](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleMapsTasksReadyResponseInfo](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md).[time](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleMapsTasksReadyResponseInfo](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md).[version](../interfaces/ISerpGoogleMapsTasksReadyResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:38093

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

main.ts:38115

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:38108
