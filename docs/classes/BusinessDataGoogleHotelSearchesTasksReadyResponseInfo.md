[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTasksReadyResponseInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyResponseInfo

Defined in: main.ts:217359

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTasksReadyResponseInfo()

> **new BusinessDataGoogleHotelSearchesTasksReadyResponseInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

Defined in: main.ts:217365

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)[]

Defined in: main.ts:217361

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:217369

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:217391

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

Defined in: main.ts:217384

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
