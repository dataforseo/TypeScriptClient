[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo

# Class: KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo

Defined in: main.ts:145093

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo()

> **new KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

Defined in: main.ts:145099

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo`](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md)[]

Defined in: main.ts:145095

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:145103

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:145125

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

Defined in: main.ts:145118

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
