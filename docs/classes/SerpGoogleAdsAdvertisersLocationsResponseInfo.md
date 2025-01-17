[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersLocationsResponseInfo

# Class: SerpGoogleAdsAdvertisersLocationsResponseInfo

Defined in: main.ts:60319

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsAdvertisersLocationsResponseInfo()

> **new SerpGoogleAdsAdvertisersLocationsResponseInfo**(`data`?): [`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)

Defined in: main.ts:60325

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md)

#### Returns

[`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAdsAdvertisersLocationsTaskInfo`](SerpGoogleAdsAdvertisersLocationsTaskInfo.md)[]

Defined in: main.ts:60321

array of tasks

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`time`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`version`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:60329

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

Defined in: main.ts:60351

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)

Defined in: main.ts:60344

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
