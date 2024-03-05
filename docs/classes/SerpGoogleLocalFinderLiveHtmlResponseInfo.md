[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderLiveHtmlResponseInfo

# Class: SerpGoogleLocalFinderLiveHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleLocalFinderLiveHtmlResponseInfo`**

## Implements

- [`ISerpGoogleLocalFinderLiveHtmlResponseInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#cost)
- [status\_code](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#status_message)
- [tasks](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#tasks_error)
- [time](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#time)
- [version](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#version)

### Methods

- [init](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#init)
- [toJSON](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderLiveHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderLiveHtmlResponseInfo**(`data?`): [`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderLiveHtmlResponseInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md) |

#### Returns

[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:41911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41911)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md#cost)

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

[ISerpGoogleLocalFinderLiveHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md#status_code)

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

[ISerpGoogleLocalFinderLiveHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleLocalFinderLiveHtmlTaskInfo`](SerpGoogleLocalFinderLiveHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md).[tasks](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:41907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41907)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md).[time](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md).[version](../interfaces/ISerpGoogleLocalFinderLiveHtmlResponseInfo.md#version)

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

[main.ts:41915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41915)

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

[main.ts:41937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41937)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:41930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41930)
