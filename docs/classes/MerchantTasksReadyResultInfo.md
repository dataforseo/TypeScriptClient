[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantTasksReadyResultInfo

# Class: MerchantTasksReadyResultInfo

Defined in: main.ts:186294

## Implements

- [`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantTasksReadyResultInfo()

> **new MerchantTasksReadyResultInfo**(`data`?): [`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

Defined in: main.ts:186313

#### Parameters

##### data?

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md)

#### Returns

[`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:186303

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:186307

URL for collecting the results of the Amazon Reviews Advanced task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:186309

URL for collecting the results of the Amazon Reviews HTML task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:186297

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:186299

search engine specified when setting the task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:186301

type of search engine

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:186305

user-defined task identifier

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:186322

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:186345

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)

Defined in: main.ts:186338

#### Parameters

##### data

`any`

#### Returns

[`MerchantTasksReadyResultInfo`](MerchantTasksReadyResultInfo.md)
