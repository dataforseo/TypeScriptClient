**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTasksReadyResultInfo

# Class: MerchantGoogleSellersTasksReadyResultInfo

## Implements

- [`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersTasksReadyResultInfo(data)

> **new MerchantGoogleSellersTasksReadyResultInfo**(`data`?): [`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md)

#### Returns

[`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Source

main.ts:174005

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:173995

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of Google Shopping Sellers Advanced task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:173999

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of Google Shopping Sellers HTML task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:174001

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#id)

#### Source

main.ts:173988

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se)

#### Source

main.ts:173990

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: shopping

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se_type)

#### Source

main.ts:173993

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#tag)

#### Source

main.ts:173997

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:174014

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:174037

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)

#### Source

main.ts:174030
