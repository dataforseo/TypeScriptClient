[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoLiveAdvancedResponseInfo

# Class: SerpYoutubeVideoInfoLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`**

## Implements

- [`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#time)
- [version](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoLiveAdvancedResponseInfo**(`data?`): [`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:61764

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#cost)

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

[ISerpYoutubeVideoInfoLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#status_code)

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

[ISerpYoutubeVideoInfoLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoInfoLiveAdvancedTaskInfo`](SerpYoutubeVideoInfoLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:61760

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#version)

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

main.ts:61768

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

main.ts:61790

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:61783
