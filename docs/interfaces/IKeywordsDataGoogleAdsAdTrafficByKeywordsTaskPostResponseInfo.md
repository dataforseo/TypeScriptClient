[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo

# Interface: IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo

Defined in: main.ts:131525

## Extends

- [`IBaseResponseInfo`](IBaseResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25286

total tasks cost, USD

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`cost`](IBaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25279

general status code
you can find the full list of the response codes here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_code`](IBaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25282

general informational message
you can find the full list of general informational messages here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_message`](IBaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo`](../classes/KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md)[]

Defined in: main.ts:131527

array of tasks

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25288

the number of tasks in the tasks array

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_count`](IBaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25290

the number of tasks in the tasks array returned with an error

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_error`](IBaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25284

total execution time, seconds

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`time`](IBaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25276

the current version of the API

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`version`](IBaseResponseInfo.md#version)
