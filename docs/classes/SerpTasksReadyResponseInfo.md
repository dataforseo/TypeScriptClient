[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpTasksReadyResponseInfo

# Class: SerpTasksReadyResponseInfo

Defined in: main.ts:28290

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpTasksReadyResponseInfo()

> **new SerpTasksReadyResponseInfo**(`data`?): [`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)

Defined in: main.ts:28296

#### Parameters

##### data?

[`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md)

#### Returns

[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpTasksReadyTaskInfo`](SerpTasksReadyTaskInfo.md)[]

Defined in: main.ts:28292

array of tasks

#### Implementation of

[`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpTasksReadyResponseInfo`](../interfaces/ISerpTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:28300

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

Defined in: main.ts:28322

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)

Defined in: main.ts:28315

#### Parameters

##### data

`any`

#### Returns

[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
