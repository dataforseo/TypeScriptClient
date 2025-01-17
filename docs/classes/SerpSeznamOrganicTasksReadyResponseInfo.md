[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTasksReadyResponseInfo

# Class: SerpSeznamOrganicTasksReadyResponseInfo

Defined in: main.ts:83309

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTasksReadyResponseInfo()

> **new SerpSeznamOrganicTasksReadyResponseInfo**(`data`?): [`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)

Defined in: main.ts:83315

#### Parameters

##### data?

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md)

#### Returns

[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpSeznamOrganicTasksReadyTaskInfo`](SerpSeznamOrganicTasksReadyTaskInfo.md)[]

Defined in: main.ts:83311

array of tasks

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:83319

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

Defined in: main.ts:83341

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)

Defined in: main.ts:83334

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
