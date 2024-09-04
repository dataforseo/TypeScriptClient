[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleHotelInfoTasksReadyResultInfo

# Class: BusinessDataGoogleHotelInfoTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTasksReadyResultInfo()

> **new BusinessDataGoogleHotelInfoTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:205360

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:205350

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:205354

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:205356

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#id)

#### Defined in

main.ts:205343

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#se)

#### Defined in

main.ts:205346

***

### se\_type?

> `optional` **se\_type**: `string`

search engine specified when setting the task

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:205348

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:205352

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:205369

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:205392

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:205385
