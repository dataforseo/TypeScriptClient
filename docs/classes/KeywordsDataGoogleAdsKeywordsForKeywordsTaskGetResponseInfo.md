[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo()

> **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:130453

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#cost)

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

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#status_code)

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

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:130449

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#version)

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

main.ts:130457

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

main.ts:130479

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:130472
