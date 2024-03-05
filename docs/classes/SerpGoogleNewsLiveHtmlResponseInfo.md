[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsLiveHtmlResponseInfo

# Class: SerpGoogleNewsLiveHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleNewsLiveHtmlResponseInfo`**

## Implements

- [`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsLiveHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleNewsLiveHtmlResponseInfo.md#cost)
- [status\_code](SerpGoogleNewsLiveHtmlResponseInfo.md#status_code)
- [status\_message](SerpGoogleNewsLiveHtmlResponseInfo.md#status_message)
- [tasks](SerpGoogleNewsLiveHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleNewsLiveHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleNewsLiveHtmlResponseInfo.md#tasks_error)
- [time](SerpGoogleNewsLiveHtmlResponseInfo.md#time)
- [version](SerpGoogleNewsLiveHtmlResponseInfo.md#version)

### Methods

- [init](SerpGoogleNewsLiveHtmlResponseInfo.md#init)
- [toJSON](SerpGoogleNewsLiveHtmlResponseInfo.md#tojson)
- [fromJS](SerpGoogleNewsLiveHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsLiveHtmlResponseInfo**(`data?`): [`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md) |

#### Returns

[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:43523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43523)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleNewsLiveHtmlResponseInfo](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[cost](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#cost)

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

[ISerpGoogleNewsLiveHtmlResponseInfo](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[status_code](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#status_code)

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

[ISerpGoogleNewsLiveHtmlResponseInfo](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[status_message](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleNewsLiveHtmlTaskInfo`](SerpGoogleNewsLiveHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleNewsLiveHtmlResponseInfo](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[tasks](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:43519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43519)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleNewsLiveHtmlResponseInfo](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleNewsLiveHtmlResponseInfo](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleNewsLiveHtmlResponseInfo](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[time](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleNewsLiveHtmlResponseInfo](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[version](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#version)

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

[main.ts:43527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43527)

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

[main.ts:43549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43549)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:43542](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43542)
