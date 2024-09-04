[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleSellersTasksReadyResultInfo

# Class: MerchantGoogleSellersTasksReadyResultInfo

## Implements

- [`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersTasksReadyResultInfo()

> **new MerchantGoogleSellersTasksReadyResultInfo**(`data`?): [`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md)

#### Returns

[`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Defined in

main.ts:180110

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:180100

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of Google Shopping Sellers Advanced task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:180104

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of Google Shopping Sellers HTML task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:180106

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#id)

#### Defined in

main.ts:180093

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se)

#### Defined in

main.ts:180095

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:180098

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:180102

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:180119

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:180142

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Defined in

main.ts:180135
