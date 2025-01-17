[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTasksReadyResultInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyResultInfo

Defined in: main.ts:216718

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTasksReadyResultInfo()

> **new BusinessDataGoogleHotelSearchesTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

Defined in: main.ts:216736

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:216728

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:216732

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:216721

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:216724

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:216726

search engine type

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:216730

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:216745

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:216767

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

Defined in: main.ts:216760

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)
