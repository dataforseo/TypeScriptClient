[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoTasksReadyResultInfo

# Class: BusinessDataGoogleHotelInfoTasksReadyResultInfo

Defined in: main.ts:218796

## Implements

- [`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTasksReadyResultInfo()

> **new BusinessDataGoogleHotelInfoTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

Defined in: main.ts:218816

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:218806

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:218810

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:218812

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:218799

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:218802

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:218804

search engine specified when setting the task

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:218808

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:218825

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:218848

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

Defined in: main.ts:218841

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)
