[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTasksReadyResponseInfo

# Class: MerchantAmazonReviewsTasksReadyResponseInfo

Defined in: main.ts:197813

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTasksReadyResponseInfo()

> **new MerchantAmazonReviewsTasksReadyResponseInfo**(`data`?): [`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

Defined in: main.ts:197819

#### Parameters

##### data?

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Returns

[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonReviewsTasksReadyTaskInfo`](MerchantAmazonReviewsTasksReadyTaskInfo.md)[]

Defined in: main.ts:197815

array of tasks

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197823

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

Defined in: main.ts:197845

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

Defined in: main.ts:197838

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
