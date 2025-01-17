[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTaskPostResponseInfo

# Class: MerchantAmazonReviewsTaskPostResponseInfo

Defined in: main.ts:197113

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTaskPostResponseInfo()

> **new MerchantAmazonReviewsTaskPostResponseInfo**(`data`?): [`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)

Defined in: main.ts:197119

#### Parameters

##### data?

[`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md)

#### Returns

[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonReviewsTaskPostTaskInfo`](MerchantAmazonReviewsTaskPostTaskInfo.md)[]

Defined in: main.ts:197115

array of tasks

#### Implementation of

[`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md).[`time`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantAmazonReviewsTaskPostResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md).[`version`](../interfaces/IMerchantAmazonReviewsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197123

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

Defined in: main.ts:197145

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)

Defined in: main.ts:197138

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
