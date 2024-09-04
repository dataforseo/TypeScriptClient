[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantAmazonProductsTasksReadyResultInfo

# Class: MerchantAmazonProductsTasksReadyResultInfo

## Implements

- [`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTasksReadyResultInfo()

> **new MerchantAmazonProductsTasksReadyResultInfo**(`data`?): [`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md)

#### Returns

[`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Defined in

main.ts:180063

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:180053

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Products Advanced task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:180057

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon Products HTML task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:180059

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:180046

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:180048

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:180051

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:180055

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:180072

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:180095

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Defined in

main.ts:180088
