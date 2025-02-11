[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTasksReadyResponseInfo

# Class: BusinessDataTrustpilotReviewsTasksReadyResponseInfo

Defined in: main.ts:227149

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTasksReadyResponseInfo()

> **new BusinessDataTrustpilotReviewsTasksReadyResponseInfo**(`data`?): [`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

Defined in: main.ts:227155

#### Parameters

##### data?

[`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTrustpilotReviewsTasksReadyTaskInfo`](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md)[]

Defined in: main.ts:227151

array of tasks

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227159

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

Defined in: main.ts:227181

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

Defined in: main.ts:227174

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
