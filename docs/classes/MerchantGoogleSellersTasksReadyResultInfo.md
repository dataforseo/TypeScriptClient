[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTasksReadyResultInfo

# Class: MerchantGoogleSellersTasksReadyResultInfo

Defined in: main.ts:188124

## Implements

- [`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersTasksReadyResultInfo()

> **new MerchantGoogleSellersTasksReadyResultInfo**(`data`?): [`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

Defined in: main.ts:188144

#### Parameters

##### data?

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md)

#### Returns

[`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:188134

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:188138

URL for collecting the results of Google Shopping Sellers Advanced task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:188140

URL for collecting the results of Google Shopping Sellers HTML task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:188127

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:188129

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:188132

type of search engine
can take the following values: shopping

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:188136

user-defined task identifier

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:188153

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:188176

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

Defined in: main.ts:188169

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)
