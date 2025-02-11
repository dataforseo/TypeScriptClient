[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsTasksReadyResponseInfo

# Class: SerpGoogleNewsTasksReadyResponseInfo

Defined in: main.ts:45872

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTasksReadyResponseInfo()

> **new SerpGoogleNewsTasksReadyResponseInfo**(`data`?): [`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)

Defined in: main.ts:45878

#### Parameters

##### data?

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md)

#### Returns

[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleNewsTasksReadyTaskInfo`](SerpGoogleNewsTasksReadyTaskInfo.md)[]

Defined in: main.ts:45874

array of tasks

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:45882

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

Defined in: main.ts:45904

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)

Defined in: main.ts:45897

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
