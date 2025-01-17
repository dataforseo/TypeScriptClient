[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTaskPostResponseInfo

# Class: MerchantAmazonProductsTaskPostResponseInfo

Defined in: main.ts:192177

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTaskPostResponseInfo()

> **new MerchantAmazonProductsTaskPostResponseInfo**(`data`?): [`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)

Defined in: main.ts:192183

#### Parameters

##### data?

[`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md)

#### Returns

[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonProductsTaskPostTaskInfo`](MerchantAmazonProductsTaskPostTaskInfo.md)[]

Defined in: main.ts:192179

array of tasks

#### Implementation of

[`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[`time`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantAmazonProductsTaskPostResponseInfo`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md).[`version`](../interfaces/IMerchantAmazonProductsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:192187

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

Defined in: main.ts:192209

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)

Defined in: main.ts:192202

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
