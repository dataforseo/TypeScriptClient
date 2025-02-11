[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTasksFixedResponseInfo

# Class: SerpGoogleJobsTasksFixedResponseInfo

Defined in: main.ts:54453

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTasksFixedResponseInfo()

> **new SerpGoogleJobsTasksFixedResponseInfo**(`data`?): [`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)

Defined in: main.ts:54459

#### Parameters

##### data?

[`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md)

#### Returns

[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleJobsTasksFixedTaskInfo`](SerpGoogleJobsTasksFixedTaskInfo.md)[]

Defined in: main.ts:54455

array of tasks

#### Implementation of

[`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleJobsTasksFixedResponseInfo`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpGoogleJobsTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:54463

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

Defined in: main.ts:54485

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)

Defined in: main.ts:54478

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
