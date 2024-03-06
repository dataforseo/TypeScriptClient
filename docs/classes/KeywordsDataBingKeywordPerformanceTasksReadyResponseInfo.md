[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo

# Class: KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#time)
- [version](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:127072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127072)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo`](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:127068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127068)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#version)

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

[main.ts:127076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127076)

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

[main.ts:127098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127098)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:127091](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127091)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")