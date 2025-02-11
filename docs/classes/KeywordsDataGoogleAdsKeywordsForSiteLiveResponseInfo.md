[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo

Defined in: main.ts:129747

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo()

> **new KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

Defined in: main.ts:129753

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md)[]

Defined in: main.ts:129749

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:129757

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

Defined in: main.ts:129779

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

Defined in: main.ts:129772

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
