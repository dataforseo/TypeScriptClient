[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersTasksReadyResponseInfo

# Class: SerpGoogleAdsAdvertisersTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsAdvertisersTasksReadyResponseInfo()

> **new SerpGoogleAdsAdvertisersTasksReadyResponseInfo**(`data`?): [`SerpGoogleAdsAdvertisersTasksReadyResponseInfo`](SerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)

#### Returns

[`SerpGoogleAdsAdvertisersTasksReadyResponseInfo`](SerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:60843

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md#cost)

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

[`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md#status_code)

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

[`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAdsAdvertisersTasksReadyTaskInfo`](SerpGoogleAdsAdvertisersTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:60839

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleAdsAdvertisersTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpGoogleAdsAdvertisersTasksReadyResponseInfo.md#version)

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

main.ts:60847

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

main.ts:60869

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsAdvertisersTasksReadyResponseInfo`](SerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsAdvertisersTasksReadyResponseInfo`](SerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:60862
