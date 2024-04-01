[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTaskPostResponseInfo

# Class: SerpYoutubeVideoSubtitlesTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`**

## Implements

- [`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#time)
- [version](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTaskPostResponseInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:62120

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#cost)

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

[ISerpYoutubeVideoSubtitlesTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#status_code)

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

[ISerpYoutubeVideoSubtitlesTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoSubtitlesTaskPostTaskInfo`](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:62116

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#version)

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

main.ts:62124

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

main.ts:62146

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:62139
