[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo

Defined in: main.ts:130631

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo()

> **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

Defined in: main.ts:130637

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md)[]

Defined in: main.ts:130633

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:130641

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

Defined in: main.ts:130663

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

Defined in: main.ts:130656

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
