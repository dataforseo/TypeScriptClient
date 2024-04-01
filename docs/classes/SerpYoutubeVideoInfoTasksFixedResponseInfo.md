[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoTasksFixedResponseInfo

# Class: SerpYoutubeVideoInfoTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYoutubeVideoInfoTasksFixedResponseInfo`**

## Implements

- [`ISerpYoutubeVideoInfoTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#time)
- [version](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoTasksFixedResponseInfo**(`data?`): [`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:60820

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md#cost)

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

[ISerpYoutubeVideoInfoTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md#status_code)

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

[ISerpYoutubeVideoInfoTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoInfoTasksFixedTaskInfo`](SerpYoutubeVideoInfoTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md#tasks)

#### Defined in

main.ts:60816

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoInfoTasksFixedResponseInfo](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoInfoTasksFixedResponseInfo.md#version)

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

main.ts:60824

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

main.ts:60846

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:60839
