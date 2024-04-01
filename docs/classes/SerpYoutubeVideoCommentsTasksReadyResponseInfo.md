[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTasksReadyResponseInfo

# Class: SerpYoutubeVideoCommentsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYoutubeVideoCommentsTasksReadyResponseInfo`**

## Implements

- [`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#time)
- [version](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTasksReadyResponseInfo**(`data?`): [`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:63938

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#cost)

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

[ISerpYoutubeVideoCommentsTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#status_code)

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

[ISerpYoutubeVideoCommentsTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoCommentsTasksReadyTaskInfo`](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:63934

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#version)

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

main.ts:63942

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

main.ts:63964

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:63957
