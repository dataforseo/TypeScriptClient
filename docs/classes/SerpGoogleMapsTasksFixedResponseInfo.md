[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleMapsTasksFixedResponseInfo

# Class: SerpGoogleMapsTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleMapsTasksFixedResponseInfo`**

## Implements

- [`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleMapsTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleMapsTasksFixedResponseInfo.md#cost)
- [status\_code](SerpGoogleMapsTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpGoogleMapsTasksFixedResponseInfo.md#status_message)
- [tasks](SerpGoogleMapsTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleMapsTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleMapsTasksFixedResponseInfo.md#tasks_error)
- [time](SerpGoogleMapsTasksFixedResponseInfo.md#time)
- [version](SerpGoogleMapsTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpGoogleMapsTasksFixedResponseInfo.md#init)
- [toJSON](SerpGoogleMapsTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpGoogleMapsTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleMapsTasksFixedResponseInfo**(`data?`): [`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md) |

#### Returns

[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:38910

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleMapsTasksFixedResponseInfo](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[cost](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#cost)

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

[ISerpGoogleMapsTasksFixedResponseInfo](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#status_code)

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

[ISerpGoogleMapsTasksFixedResponseInfo](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleMapsTasksFixedTaskInfo`](SerpGoogleMapsTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleMapsTasksFixedResponseInfo](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#tasks)

#### Defined in

main.ts:38906

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleMapsTasksFixedResponseInfo](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleMapsTasksFixedResponseInfo](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleMapsTasksFixedResponseInfo](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[time](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleMapsTasksFixedResponseInfo](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[version](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#version)

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

main.ts:38914

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

main.ts:38936

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:38929
