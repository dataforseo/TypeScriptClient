[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersTaskPostResponseInfo

# Class: SerpGoogleAdsAdvertisersTaskPostResponseInfo

Defined in: main.ts:60647

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsAdvertisersTaskPostResponseInfo()

> **new SerpGoogleAdsAdvertisersTaskPostResponseInfo**(`data`?): [`SerpGoogleAdsAdvertisersTaskPostResponseInfo`](SerpGoogleAdsAdvertisersTaskPostResponseInfo.md)

Defined in: main.ts:60653

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md)

#### Returns

[`SerpGoogleAdsAdvertisersTaskPostResponseInfo`](SerpGoogleAdsAdvertisersTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAdsAdvertisersTaskPostTaskInfo`](SerpGoogleAdsAdvertisersTaskPostTaskInfo.md)[]

Defined in: main.ts:60649

array of tasks

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:60657

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

Defined in: main.ts:60679

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsAdvertisersTaskPostResponseInfo`](SerpGoogleAdsAdvertisersTaskPostResponseInfo.md)

Defined in: main.ts:60672

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsAdvertisersTaskPostResponseInfo`](SerpGoogleAdsAdvertisersTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
