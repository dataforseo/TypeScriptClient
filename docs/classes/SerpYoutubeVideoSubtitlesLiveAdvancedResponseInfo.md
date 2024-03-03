[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo

# Class: SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`**

## Implements

- [`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#time)
- [version](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo**(`data?`): [`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:61137

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#cost)

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

[ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#status_code)

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

[ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:61133

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#version)

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

main.ts:61141

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

main.ts:61163

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:61156
