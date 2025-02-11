[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersAdUrlResponseInfo

# Class: MerchantGoogleSellersAdUrlResponseInfo

Defined in: main.ts:191529

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersAdUrlResponseInfo()

> **new MerchantGoogleSellersAdUrlResponseInfo**(`data`?): [`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)

Defined in: main.ts:191535

#### Parameters

##### data?

[`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md)

#### Returns

[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleSellersAdUrlTaskInfo`](MerchantGoogleSellersAdUrlTaskInfo.md)[]

Defined in: main.ts:191531

array of tasks

#### Implementation of

[`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md).[`time`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantGoogleSellersAdUrlResponseInfo`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md).[`version`](../interfaces/IMerchantGoogleSellersAdUrlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:191539

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

Defined in: main.ts:191561

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)

Defined in: main.ts:191554

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
