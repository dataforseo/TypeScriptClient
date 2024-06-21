**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantTasksReadyResultInfo

# Class: MerchantTasksReadyResultInfo

## Implements

- [`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantTasksReadyResultInfo(data)

> **new MerchantTasksReadyResultInfo**(`data`?): [`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md)

#### Returns

[`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

#### Source

main.ts:173410

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:173400

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Reviews Advanced task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:173404

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Amazon Reviews HTML task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:173406

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantTasksReadyResultInfo.md#id)

#### Source

main.ts:173394

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantTasksReadyResultInfo.md#se)

#### Source

main.ts:173396

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantTasksReadyResultInfo.md#se_type)

#### Source

main.ts:173398

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantTasksReadyResultInfo.md#tag)

#### Source

main.ts:173402

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:173419

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:173442

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

#### Source

main.ts:173435
