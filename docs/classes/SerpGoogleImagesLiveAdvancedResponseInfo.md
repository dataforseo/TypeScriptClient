[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesLiveAdvancedResponseInfo

# Class: SerpGoogleImagesLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleImagesLiveAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleImagesLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleImagesLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleImagesLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleImagesLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleImagesLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleImagesLiveAdvancedResponseInfo.md#time)
- [version](SerpGoogleImagesLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleImagesLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleImagesLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleImagesLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesLiveAdvancedResponseInfo**(`data?`): [`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:46885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46885)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResponseInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResponseInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResponseInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleImagesLiveAdvancedTaskInfo`](SerpGoogleImagesLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResponseInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:46881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46881)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResponseInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResponseInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResponseInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResponseInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

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

[main.ts:46889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46889)

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

[main.ts:46911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46911)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:46904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46904)
