**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTasksReadyResultInfo

# Class: MerchantAmazonSellersTasksReadyResultInfo

## Implements

- [`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTasksReadyResultInfo(data)

> **new MerchantAmazonSellersTasksReadyResultInfo**(`data`?): [`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md)

#### Returns

[`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Source

main.ts:181741

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:181731

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of Amazon Sellers Advanced task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:181735

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of Amazon Sellers HTML task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:181737

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#id)

#### Source

main.ts:181724

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se)

#### Source

main.ts:181726

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se_type)

#### Source

main.ts:181729

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#tag)

#### Source

main.ts:181733

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:181750

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:181773

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Source

main.ts:181766
