[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreLiveResponseInfo

# Class: KeywordsDataGoogleTrendsExploreLiveResponseInfo

Defined in: main.ts:135445

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreLiveResponseInfo()

> **new KeywordsDataGoogleTrendsExploreLiveResponseInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

Defined in: main.ts:135451

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleTrendsExploreLiveTaskInfo`](KeywordsDataGoogleTrendsExploreLiveTaskInfo.md)[]

Defined in: main.ts:135447

array of tasks

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:135455

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

Defined in: main.ts:135477

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

Defined in: main.ts:135470

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
