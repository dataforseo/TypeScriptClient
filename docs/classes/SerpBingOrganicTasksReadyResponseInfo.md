[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTasksReadyResponseInfo

# Class: SerpBingOrganicTasksReadyResponseInfo

Defined in: main.ts:64018

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTasksReadyResponseInfo()

> **new SerpBingOrganicTasksReadyResponseInfo**(`data`?): [`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)

Defined in: main.ts:64024

#### Parameters

##### data?

[`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md)

#### Returns

[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingOrganicTasksReadyTaskInfo`](SerpBingOrganicTasksReadyTaskInfo.md)[]

Defined in: main.ts:64020

array of tasks

#### Implementation of

[`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:64028

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

Defined in: main.ts:64050

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)

Defined in: main.ts:64043

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
