[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTasksReadyResultInfo

# Class: MerchantAmazonSellersTasksReadyResultInfo

Defined in: main.ts:195786

## Implements

- [`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTasksReadyResultInfo()

> **new MerchantAmazonSellersTasksReadyResultInfo**(`data`?): [`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

Defined in: main.ts:195805

#### Parameters

##### data?

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md)

#### Returns

[`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:195795

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:195799

URL for collecting the results of Amazon Sellers Advanced task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:195801

URL for collecting the results of Amazon Sellers HTML task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:195789

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:195791

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:195793

type of search engine

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:195797

user-defined task identifier

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:195814

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:195837

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

Defined in: main.ts:195830

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)
