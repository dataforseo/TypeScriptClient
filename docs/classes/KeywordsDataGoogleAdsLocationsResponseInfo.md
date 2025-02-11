[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsLocationsResponseInfo

# Class: KeywordsDataGoogleAdsLocationsResponseInfo

Defined in: main.ts:126415

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsLocationsResponseInfo()

> **new KeywordsDataGoogleAdsLocationsResponseInfo**(`data`?): [`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

Defined in: main.ts:126421

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsLocationsTaskInfo`](KeywordsDataGoogleAdsLocationsTaskInfo.md)[]

Defined in: main.ts:126417

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:126425

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

Defined in: main.ts:126447

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

Defined in: main.ts:126440

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
