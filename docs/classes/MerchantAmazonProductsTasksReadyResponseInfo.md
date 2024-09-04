[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantAmazonProductsTasksReadyResponseInfo

# Class: MerchantAmazonProductsTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTasksReadyResponseInfo()

> **new MerchantAmazonProductsTasksReadyResponseInfo**(`data`?): [`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md)

#### Returns

[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:180194

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonProductsTasksReadyTaskInfo`](MerchantAmazonProductsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:180190

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

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

main.ts:180198

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

main.ts:180220

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:180213
