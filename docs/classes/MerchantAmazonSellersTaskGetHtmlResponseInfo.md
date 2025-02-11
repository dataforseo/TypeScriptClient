[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTaskGetHtmlResponseInfo

# Class: MerchantAmazonSellersTaskGetHtmlResponseInfo

Defined in: main.ts:197129

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTaskGetHtmlResponseInfo()

> **new MerchantAmazonSellersTaskGetHtmlResponseInfo**(`data`?): [`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)

Defined in: main.ts:197135

#### Parameters

##### data?

[`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md)

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:197131

array of tasks

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[`time`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[`version`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197139

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

Defined in: main.ts:197161

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)

Defined in: main.ts:197154

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
