[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantTasksReadyResultInfo

# Class: MerchantTasksReadyResultInfo

## Implements

- [`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantTasksReadyResultInfo()

> **new MerchantTasksReadyResultInfo**(`data`?): [`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md)

#### Returns

[`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

#### Defined in

main.ts:185883

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:185873

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Amazon Reviews Advanced task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:185877

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Amazon Reviews HTML task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:185879

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantTasksReadyResultInfo.md#id)

#### Defined in

main.ts:185867

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantTasksReadyResultInfo.md#se)

#### Defined in

main.ts:185869

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:185871

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:185875

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:185892

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:185915

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

#### Defined in

main.ts:185908
