[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTasksReadyResultInfo

# Class: MerchantAmazonAsinTasksReadyResultInfo

Defined in: main.ts:194246

## Implements

- [`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonAsinTasksReadyResultInfo()

> **new MerchantAmazonAsinTasksReadyResultInfo**(`data`?): [`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

Defined in: main.ts:194266

#### Parameters

##### data?

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md)

#### Returns

[`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:194256

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:194260

URL for collecting the results of the Amazon ASIN Advanced task

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:194262

URL for collecting the results of the Amazon ASIN HTML task

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:194249

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:194251

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:194254

type of search engine
can take the following values: shopping

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:194258

user-defined task identifier

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194275

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194298

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

Defined in: main.ts:194291

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)
