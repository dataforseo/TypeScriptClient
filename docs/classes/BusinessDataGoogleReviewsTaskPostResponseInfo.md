[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTaskPostResponseInfo

# Class: BusinessDataGoogleReviewsTaskPostResponseInfo

Defined in: main.ts:221821

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTaskPostResponseInfo()

> **new BusinessDataGoogleReviewsTaskPostResponseInfo**(`data`?): [`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)

Defined in: main.ts:221827

#### Parameters

##### data?

[`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleReviewsTaskPostTaskInfo`](BusinessDataGoogleReviewsTaskPostTaskInfo.md)[]

Defined in: main.ts:221823

array of tasks

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleReviewsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:221831

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

Defined in: main.ts:221853

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)

Defined in: main.ts:221846

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
