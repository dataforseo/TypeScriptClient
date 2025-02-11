[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo

# Class: KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo

Defined in: main.ts:134009

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo()

> **new KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

Defined in: main.ts:134015

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo`](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md)[]

Defined in: main.ts:134011

array of tasks

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134019

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

Defined in: main.ts:134041

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

Defined in: main.ts:134034

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
