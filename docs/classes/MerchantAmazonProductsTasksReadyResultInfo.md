**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTasksReadyResultInfo

# Class: MerchantAmazonProductsTasksReadyResultInfo

## Implements

- [`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTasksReadyResultInfo(data)

> **new MerchantAmazonProductsTasksReadyResultInfo**(`data`?): [`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md)

#### Returns

[`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Source

main.ts:178236

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:178226

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Products Advanced task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:178230

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Amazon Products HTML task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:178232

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#id)

#### Source

main.ts:178219

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se)

#### Source

main.ts:178221

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: organic

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:178224

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#tag)

#### Source

main.ts:178228

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:178245

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:178268

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonProductsTasksReadyResultInfo`](MerchantAmazonProductsTasksReadyResultInfo.md)

#### Source

main.ts:178261
