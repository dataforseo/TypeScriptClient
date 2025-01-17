[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreTaskGetResponseInfo

# Class: KeywordsDataGoogleTrendsExploreTaskGetResponseInfo

Defined in: main.ts:134599

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreTaskGetResponseInfo()

> **new KeywordsDataGoogleTrendsExploreTaskGetResponseInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

Defined in: main.ts:134605

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleTrendsExploreTaskGetTaskInfo`](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md)[]

Defined in: main.ts:134601

array of tasks

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134609

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

Defined in: main.ts:134631

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

Defined in: main.ts:134624

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
