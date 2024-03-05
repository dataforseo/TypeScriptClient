[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRankedKeywordsLiveResponseInfo

# Class: DataforseoLabsGoogleRankedKeywordsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleRankedKeywordsLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:87297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87297)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleRankedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRankedKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:87293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87293)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md#version)

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

[main.ts:87301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87301)

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

[main.ts:87323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87323)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:87316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87316)
