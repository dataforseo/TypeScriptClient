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

main.ts:182843

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:182833

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of Amazon Sellers Advanced task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:182837

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of Amazon Sellers HTML task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:182839

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#id)

#### Source

main.ts:182827

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se)

#### Source

main.ts:182829

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se_type)

#### Source

main.ts:182831

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#tag)

#### Source

main.ts:182835

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:182852

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:182875

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonSellersTasksReadyResultInfo`](MerchantAmazonSellersTasksReadyResultInfo.md)

#### Source

main.ts:182868
