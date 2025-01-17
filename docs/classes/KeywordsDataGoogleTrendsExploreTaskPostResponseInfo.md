[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreTaskPostResponseInfo

# Class: KeywordsDataGoogleTrendsExploreTaskPostResponseInfo

Defined in: main.ts:133677

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreTaskPostResponseInfo()

> **new KeywordsDataGoogleTrendsExploreTaskPostResponseInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

Defined in: main.ts:133683

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleTrendsExploreTaskPostTaskInfo`](KeywordsDataGoogleTrendsExploreTaskPostTaskInfo.md)[]

Defined in: main.ts:133679

array of tasks

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:133687

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

Defined in: main.ts:133709

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

Defined in: main.ts:133702

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
