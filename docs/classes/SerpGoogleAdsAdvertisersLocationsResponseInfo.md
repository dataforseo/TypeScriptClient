[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersLocationsResponseInfo

# Class: SerpGoogleAdsAdvertisersLocationsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsAdvertisersLocationsResponseInfo()

> **new SerpGoogleAdsAdvertisersLocationsResponseInfo**(`data`?): [`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md)

#### Returns

[`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:60325

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#cost)

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

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#status_code)

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

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAdsAdvertisersLocationsTaskInfo`](SerpGoogleAdsAdvertisersLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:60321

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`time`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md).[`version`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResponseInfo.md#version)

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

main.ts:60329

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

main.ts:60351

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:60344
