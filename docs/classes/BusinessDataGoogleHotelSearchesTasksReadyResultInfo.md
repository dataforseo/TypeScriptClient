**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTasksReadyResultInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTasksReadyResultInfo(data)

> **new BusinessDataGoogleHotelSearchesTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Source

main.ts:201050

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:201042

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:201046

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#id)

#### Source

main.ts:201035

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se)

#### Source

main.ts:201038

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se_type)

#### Source

main.ts:201040

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#tag)

#### Source

main.ts:201044

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:201059

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:201081

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Source

main.ts:201074
