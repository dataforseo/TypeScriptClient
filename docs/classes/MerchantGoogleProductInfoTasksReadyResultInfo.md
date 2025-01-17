[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductInfoTasksReadyResultInfo

# Class: MerchantGoogleProductInfoTasksReadyResultInfo

Defined in: main.ts:190232

## Implements

- [`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductInfoTasksReadyResultInfo()

> **new MerchantGoogleProductInfoTasksReadyResultInfo**(`data`?): [`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

Defined in: main.ts:190253

#### Parameters

##### data?

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md)

#### Returns

[`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:190242

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:190246

URL for collecting the results of the Google Shopping Product Specifications Advanced task

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:190249

URL for collecting the results of the Google Shopping Product Specifications HTML task
note: HTML is not available for this endpoint, the value will be null

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:190235

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:190237

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:190240

type of search engine
can take the following values: shopping_specifications

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:190244

user-defined task identifier

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleProductInfoTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:190262

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:190285

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)

Defined in: main.ts:190278

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)
