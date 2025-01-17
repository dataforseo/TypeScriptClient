[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorReviewsTaskPostResponseInfo

# Class: BusinessDataTripadvisorReviewsTaskPostResponseInfo

Defined in: main.ts:228915

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorReviewsTaskPostResponseInfo()

> **new BusinessDataTripadvisorReviewsTaskPostResponseInfo**(`data`?): [`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

Defined in: main.ts:228921

#### Parameters

##### data?

[`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTripadvisorReviewsTaskPostTaskInfo`](BusinessDataTripadvisorReviewsTaskPostTaskInfo.md)[]

Defined in: main.ts:228917

array of tasks

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:228925

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

Defined in: main.ts:228947

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

Defined in: main.ts:228940

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
