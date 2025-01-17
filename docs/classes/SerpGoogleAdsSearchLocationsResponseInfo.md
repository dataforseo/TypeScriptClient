[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchLocationsResponseInfo

# Class: SerpGoogleAdsSearchLocationsResponseInfo

Defined in: main.ts:61662

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchLocationsResponseInfo()

> **new SerpGoogleAdsSearchLocationsResponseInfo**(`data`?): [`SerpGoogleAdsSearchLocationsResponseInfo`](SerpGoogleAdsSearchLocationsResponseInfo.md)

Defined in: main.ts:61668

#### Parameters

##### data?

[`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md)

#### Returns

[`SerpGoogleAdsSearchLocationsResponseInfo`](SerpGoogleAdsSearchLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAdsSearchLocationsTaskInfo`](SerpGoogleAdsSearchLocationsTaskInfo.md)[]

Defined in: main.ts:61664

array of tasks

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md).[`time`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResponseInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md).[`version`](../interfaces/ISerpGoogleAdsSearchLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:61672

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

Defined in: main.ts:61694

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchLocationsResponseInfo`](SerpGoogleAdsSearchLocationsResponseInfo.md)

Defined in: main.ts:61687

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchLocationsResponseInfo`](SerpGoogleAdsSearchLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
