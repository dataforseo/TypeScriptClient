[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantAmazonReviewsTasksReadyResponseInfo

# Class: MerchantAmazonReviewsTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTasksReadyResponseInfo()

> **new MerchantAmazonReviewsTasksReadyResponseInfo**(`data`?): [`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Returns

[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:184937

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24152

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24145

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonReviewsTasksReadyTaskInfo`](MerchantAmazonReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:184933

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantAmazonReviewsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24142

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:184941

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:184963

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:184956
