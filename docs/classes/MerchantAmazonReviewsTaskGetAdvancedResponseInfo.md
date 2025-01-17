[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTaskGetAdvancedResponseInfo

# Class: MerchantAmazonReviewsTaskGetAdvancedResponseInfo

Defined in: main.ts:197595

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTaskGetAdvancedResponseInfo()

> **new MerchantAmazonReviewsTaskGetAdvancedResponseInfo**(`data`?): [`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:197601

#### Parameters

##### data?

[`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonReviewsTaskGetAdvancedTaskInfo`](MerchantAmazonReviewsTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:197597

array of tasks

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197605

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

Defined in: main.ts:197627

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:197620

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
