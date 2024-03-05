[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceTaskGetResponseInfo

# Class: KeywordsDataBingKeywordPerformanceTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#time)
- [version](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceTaskGetResponseInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:127494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127494)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordPerformanceTaskGetTaskInfo`](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tasks)

#### Defined in

[main.ts:127490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127490)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#version)

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

[main.ts:127498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127498)

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

[main.ts:127520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127520)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:127513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127513)
