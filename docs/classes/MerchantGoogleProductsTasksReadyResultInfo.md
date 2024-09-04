[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleProductsTasksReadyResultInfo

# Class: MerchantGoogleProductsTasksReadyResultInfo

## Implements

- [`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTasksReadyResultInfo()

> **new MerchantGoogleProductsTasksReadyResultInfo**(`data`?): [`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md)

#### Returns

[`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Defined in

main.ts:177984

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:177974

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of Google Shopping Products Advanced task

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:177978

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of Google Shopping Products HTML task

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:177980

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:177967

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:177969

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: products

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:177972

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:177976

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:177993

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:178016

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Defined in

main.ts:178009
