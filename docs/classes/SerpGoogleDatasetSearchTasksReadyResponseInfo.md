[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTasksReadyResponseInfo

# Class: SerpGoogleDatasetSearchTasksReadyResponseInfo

Defined in: main.ts:57381

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTasksReadyResponseInfo()

> **new SerpGoogleDatasetSearchTasksReadyResponseInfo**(`data`?): [`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)

Defined in: main.ts:57387

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleDatasetSearchTasksReadyTaskInfo`](SerpGoogleDatasetSearchTasksReadyTaskInfo.md)[]

Defined in: main.ts:57383

array of tasks

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleDatasetSearchTasksReadyResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpGoogleDatasetSearchTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:57391

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

Defined in: main.ts:57413

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)

Defined in: main.ts:57406

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
