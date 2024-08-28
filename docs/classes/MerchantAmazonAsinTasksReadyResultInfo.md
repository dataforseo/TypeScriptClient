[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MerchantAmazonAsinTasksReadyResultInfo

# Class: MerchantAmazonAsinTasksReadyResultInfo

## Implements

- [`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonAsinTasksReadyResultInfo()

> **new MerchantAmazonAsinTasksReadyResultInfo**(`data`?): [`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md)

#### Returns

[`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

#### Defined in

main.ts:186007

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:185997

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon ASIN Advanced task

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:186001

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon ASIN HTML task

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:186003

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#id)

#### Defined in

main.ts:185990

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#se)

#### Defined in

main.ts:185992

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:185995

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:185999

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:186016

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:186039

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)

#### Defined in

main.ts:186032
