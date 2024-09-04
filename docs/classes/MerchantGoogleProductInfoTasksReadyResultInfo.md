[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleProductInfoTasksReadyResultInfo

# Class: MerchantGoogleProductInfoTasksReadyResultInfo

## Implements

- [`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductInfoTasksReadyResultInfo()

> **new MerchantGoogleProductInfoTasksReadyResultInfo**(`data`?): [`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Returns

[`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:182663

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:182652

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google Shopping Product Specifications Advanced task

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:182656

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Google Shopping Product Specifications HTML task
note: HTML is not available for this endpoint, the value will be null

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:182659

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#id)

#### Defined in

main.ts:182645

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#se)

#### Defined in

main.ts:182647

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: shopping_specifications

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:182650

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:182654

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:182672

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:182695

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:182688
