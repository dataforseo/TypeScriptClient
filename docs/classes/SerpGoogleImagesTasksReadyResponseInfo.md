[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTasksReadyResponseInfo

# Class: SerpGoogleImagesTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleImagesTasksReadyResponseInfo`**

## Implements

- [`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesTasksReadyResponseInfo.md#cost)
- [status\_code](SerpGoogleImagesTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpGoogleImagesTasksReadyResponseInfo.md#status_message)
- [tasks](SerpGoogleImagesTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleImagesTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleImagesTasksReadyResponseInfo.md#tasks_error)
- [time](SerpGoogleImagesTasksReadyResponseInfo.md#time)
- [version](SerpGoogleImagesTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpGoogleImagesTasksReadyResponseInfo.md#init)
- [toJSON](SerpGoogleImagesTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpGoogleImagesTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTasksReadyResponseInfo**(`data?`): [`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md) |

#### Returns

[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:45975

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesTasksReadyResponseInfo](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[cost](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#cost)

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

[ISerpGoogleImagesTasksReadyResponseInfo](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#status_code)

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

[ISerpGoogleImagesTasksReadyResponseInfo](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleImagesTasksReadyTaskInfo`](SerpGoogleImagesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleImagesTasksReadyResponseInfo](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:45971

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleImagesTasksReadyResponseInfo](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleImagesTasksReadyResponseInfo](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleImagesTasksReadyResponseInfo](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[time](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleImagesTasksReadyResponseInfo](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[version](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#version)

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

main.ts:45979

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

main.ts:46001

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:45994
