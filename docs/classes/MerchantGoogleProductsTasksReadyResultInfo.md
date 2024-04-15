**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleProductsTasksReadyResultInfo

# Class: MerchantGoogleProductsTasksReadyResultInfo

## Implements

- [`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTasksReadyResultInfo(data)

> **new MerchantGoogleProductsTasksReadyResultInfo**(`data`?): [`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md)

#### Returns

[`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Source

main.ts:169832

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:169822

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of Google Shopping Products Advanced task

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:169826

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of Google Shopping Products HTML task

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:169828

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#id)

#### Source

main.ts:169815

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#se)

#### Source

main.ts:169817

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:169820

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#tag)

#### Source

main.ts:169824

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:169841

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:169864

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

#### Source

main.ts:169857
