[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTasksReadyResultInfo

# Class: MerchantAmazonProductsTasksReadyResultInfo

Defined in: main.ts:192638

## Implements

- [`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTasksReadyResultInfo()

> **new MerchantAmazonProductsTasksReadyResultInfo**(`data`?): [`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

Defined in: main.ts:192658

#### Parameters

##### data?

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md)

#### Returns

[`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:192648

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:192652

URL for collecting the results of the Amazon Products Advanced task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:192654

URL for collecting the results of the Amazon Products HTML task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:192641

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:192643

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:192646

type of search engine
can take the following values: organic

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:192650

user-defined task identifier

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:192667

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:192690

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

Defined in: main.ts:192683

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)
