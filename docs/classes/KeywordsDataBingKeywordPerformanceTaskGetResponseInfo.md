[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTaskGetResponseInfo

# Class: KeywordsDataBingKeywordPerformanceTaskGetResponseInfo

Defined in: main.ts:145515

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceTaskGetResponseInfo()

> **new KeywordsDataBingKeywordPerformanceTaskGetResponseInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

Defined in: main.ts:145521

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordPerformanceTaskGetTaskInfo`](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md)[]

Defined in: main.ts:145517

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:145525

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

Defined in: main.ts:145547

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

Defined in: main.ts:145540

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
