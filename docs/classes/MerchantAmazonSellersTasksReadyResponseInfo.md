[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTasksReadyResponseInfo

# Class: MerchantAmazonSellersTasksReadyResponseInfo

Defined in: main.ts:195929

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTasksReadyResponseInfo()

> **new MerchantAmazonSellersTasksReadyResponseInfo**(`data`?): [`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)

Defined in: main.ts:195935

#### Parameters

##### data?

[`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md)

#### Returns

[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonSellersTasksReadyTaskInfo`](MerchantAmazonSellersTasksReadyTaskInfo.md)[]

Defined in: main.ts:195931

array of tasks

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResponseInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantAmazonSellersTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:195939

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

Defined in: main.ts:195961

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)

Defined in: main.ts:195954

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
