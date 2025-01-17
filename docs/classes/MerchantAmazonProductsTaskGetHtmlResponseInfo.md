[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTaskGetHtmlResponseInfo

# Class: MerchantAmazonProductsTaskGetHtmlResponseInfo

Defined in: main.ts:193401

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTaskGetHtmlResponseInfo()

> **new MerchantAmazonProductsTaskGetHtmlResponseInfo**(`data`?): [`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)

Defined in: main.ts:193407

#### Parameters

##### data?

[`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md)

#### Returns

[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonProductsTaskGetHtmlTaskInfo`](MerchantAmazonProductsTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:193403

array of tasks

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md).[`time`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md).[`version`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:193411

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

Defined in: main.ts:193433

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)

Defined in: main.ts:193426

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
