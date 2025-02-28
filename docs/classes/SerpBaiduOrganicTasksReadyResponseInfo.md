[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTasksReadyResponseInfo

# Class: SerpBaiduOrganicTasksReadyResponseInfo

Defined in: main.ts:79517

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTasksReadyResponseInfo()

> **new SerpBaiduOrganicTasksReadyResponseInfo**(`data`?): [`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)

Defined in: main.ts:79523

#### Parameters

##### data?

[`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md)

#### Returns

[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBaiduOrganicTasksReadyTaskInfo`](SerpBaiduOrganicTasksReadyTaskInfo.md)[]

Defined in: main.ts:79519

array of tasks

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBaiduOrganicTasksReadyResponseInfo`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpBaiduOrganicTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:79527

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

Defined in: main.ts:79549

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)

Defined in: main.ts:79542

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
