[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTaskPostResponseInfo

# Class: KeywordsDataBingKeywordPerformanceTaskPostResponseInfo

Defined in: main.ts:144901

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceTaskPostResponseInfo()

> **new KeywordsDataBingKeywordPerformanceTaskPostResponseInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

Defined in: main.ts:144907

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordPerformanceTaskPostTaskInfo`](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md)[]

Defined in: main.ts:144903

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:144911

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

Defined in: main.ts:144933

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

Defined in: main.ts:144926

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
