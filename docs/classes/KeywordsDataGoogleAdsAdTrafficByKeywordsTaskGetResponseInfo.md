[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo

Defined in: main.ts:131939

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo()

> **new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo**(`data`?): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

Defined in: main.ts:131945

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md)[]

Defined in: main.ts:131941

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:131949

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

Defined in: main.ts:131971

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

Defined in: main.ts:131964

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
