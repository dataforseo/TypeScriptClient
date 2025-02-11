[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductsTasksReadyResultInfo

# Class: MerchantGoogleProductsTasksReadyResultInfo

Defined in: main.ts:186094

## Implements

- [`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTasksReadyResultInfo()

> **new MerchantGoogleProductsTasksReadyResultInfo**(`data`?): [`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

Defined in: main.ts:186114

#### Parameters

##### data?

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md)

#### Returns

[`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:186104

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:186108

URL for collecting the results of Google Shopping Products Advanced task

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:186110

URL for collecting the results of Google Shopping Products HTML task

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:186097

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:186099

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:186102

type of search engine
example: products

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:186106

user-defined task identifier

#### Implementation of

[`IMerchantGoogleProductsTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleProductsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:186123

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:186146

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)

Defined in: main.ts:186139

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)
