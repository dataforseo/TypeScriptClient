[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo()

> **new KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:130173

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:25217

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:25210

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:130169

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:25207

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:130177

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:130199

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:130192
