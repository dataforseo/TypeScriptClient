[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTasksReadyResultInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTasksReadyResultInfo()

> **new BusinessDataGoogleHotelSearchesTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Defined in

main.ts:216668

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:216660

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:216664

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#id)

#### Defined in

main.ts:216653

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se)

#### Defined in

main.ts:216656

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:216658

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:216662

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:216677

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:216699

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Defined in

main.ts:216692
