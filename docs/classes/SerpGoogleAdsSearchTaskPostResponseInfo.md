[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTaskPostResponseInfo

# Class: SerpGoogleAdsSearchTaskPostResponseInfo

Defined in: main.ts:62090

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTaskPostResponseInfo()

> **new SerpGoogleAdsSearchTaskPostResponseInfo**(`data`?): [`SerpGoogleAdsSearchTaskPostResponseInfo`](SerpGoogleAdsSearchTaskPostResponseInfo.md)

Defined in: main.ts:62096

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md)

#### Returns

[`SerpGoogleAdsSearchTaskPostResponseInfo`](SerpGoogleAdsSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAdsSearchTaskPostTaskInfo`](SerpGoogleAdsSearchTaskPostTaskInfo.md)[]

Defined in: main.ts:62092

array of tasks

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleAdsSearchTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:62100

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

Defined in: main.ts:62122

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTaskPostResponseInfo`](SerpGoogleAdsSearchTaskPostResponseInfo.md)

Defined in: main.ts:62115

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTaskPostResponseInfo`](SerpGoogleAdsSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
