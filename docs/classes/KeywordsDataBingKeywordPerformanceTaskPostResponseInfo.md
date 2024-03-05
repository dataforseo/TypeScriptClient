[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceTaskPostResponseInfo

# Class: KeywordsDataBingKeywordPerformanceTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#time)
- [version](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceTaskPostResponseInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:126880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126880)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordPerformanceTaskPostTaskInfo`](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:126876](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126876)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#version)

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

[main.ts:126884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126884)

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

[main.ts:126906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126906)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:126899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126899)
