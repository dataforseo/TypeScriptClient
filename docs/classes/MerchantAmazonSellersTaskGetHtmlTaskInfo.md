[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTaskGetHtmlTaskInfo

# Class: MerchantAmazonSellersTaskGetHtmlTaskInfo

Defined in: main.ts:197074

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTaskGetHtmlTaskInfo()

> **new MerchantAmazonSellersTaskGetHtmlTaskInfo**(`data`?): [`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)

Defined in: main.ts:197080

#### Parameters

##### data?

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md)

#### Returns

[`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25309

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[`cost`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#cost)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`cost`](BaseResponseTaskInfo.md#cost)

***

### data?

> `optional` **data**: `object`

Defined in: main.ts:25315

contains the same parameters that you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[`data`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#data)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`data`](BaseResponseTaskInfo.md#data-1)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:25298

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[`id`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

***

### path?

> `optional` **path**: `string`[]

Defined in: main.ts:25313

URL path

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[`path`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

***

### result?

> `optional` **result**: [`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)[]

Defined in: main.ts:197076

array of results

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[`result`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#result)

***

### result\_count?

> `optional` **result\_count**: `number`

Defined in: main.ts:25311

number of elements in the result array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[`result_count`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#result_count)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`result_count`](BaseResponseTaskInfo.md#result_count)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25302

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[`status_code`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#status_code)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_code`](BaseResponseTaskInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25305

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[`status_message`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25307

execution time, seconds

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[`time`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#time)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`time`](BaseResponseTaskInfo.md#time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197084

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`init`](BaseResponseTaskInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:197106

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`toJSON`](BaseResponseTaskInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)

Defined in: main.ts:197099

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)
