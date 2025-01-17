[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTasksReadyResponseInfo

# Class: SerpGoogleAdsSearchTasksReadyResponseInfo

Defined in: main.ts:62274

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTasksReadyResponseInfo()

> **new SerpGoogleAdsSearchTasksReadyResponseInfo**(`data`?): [`SerpGoogleAdsSearchTasksReadyResponseInfo`](SerpGoogleAdsSearchTasksReadyResponseInfo.md)

Defined in: main.ts:62280

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md)

#### Returns

[`SerpGoogleAdsSearchTasksReadyResponseInfo`](SerpGoogleAdsSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAdsSearchTasksReadyTaskInfo`](SerpGoogleAdsSearchTasksReadyTaskInfo.md)[]

Defined in: main.ts:62276

array of tasks

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpGoogleAdsSearchTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:62284

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

Defined in: main.ts:62306

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTasksReadyResponseInfo`](SerpGoogleAdsSearchTasksReadyResponseInfo.md)

Defined in: main.ts:62299

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTasksReadyResponseInfo`](SerpGoogleAdsSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
