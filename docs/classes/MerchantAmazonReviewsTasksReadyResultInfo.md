[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantAmazonReviewsTasksReadyResultInfo

# Class: MerchantAmazonReviewsTasksReadyResultInfo

## Implements

- [`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTasksReadyResultInfo()

> **new MerchantAmazonReviewsTasksReadyResultInfo**(`data`?): [`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md)

#### Returns

[`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:189224

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:189214

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Reviews Advanced task

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:189218

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon Reviews HTML task

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:189220

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:189208

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:189210

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:189212

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:189216

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:189233

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:189256

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:189249
