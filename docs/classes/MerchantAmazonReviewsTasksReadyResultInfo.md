[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTasksReadyResultInfo

# Class: MerchantAmazonReviewsTasksReadyResultInfo

Defined in: main.ts:197670

## Implements

- [`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTasksReadyResultInfo()

> **new MerchantAmazonReviewsTasksReadyResultInfo**(`data`?): [`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

Defined in: main.ts:197689

#### Parameters

##### data?

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md)

#### Returns

[`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:197679

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:197683

URL for collecting the results of the Amazon Reviews Advanced task

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:197685

URL for collecting the results of the Amazon Reviews HTML task

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:197673

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:197675

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:197677

type of search engine

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:197681

user-defined task identifier

#### Implementation of

[`IMerchantAmazonReviewsTasksReadyResultInfo`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197698

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:197721

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)

Defined in: main.ts:197714

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonReviewsTasksReadyResultInfo`](MerchantAmazonReviewsTasksReadyResultInfo.md)
