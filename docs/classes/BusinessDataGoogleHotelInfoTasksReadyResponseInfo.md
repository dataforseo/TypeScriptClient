[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoTasksReadyResponseInfo

# Class: BusinessDataGoogleHotelInfoTasksReadyResponseInfo

Defined in: main.ts:219443

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTasksReadyResponseInfo()

> **new BusinessDataGoogleHotelInfoTasksReadyResponseInfo**(`data`?): [`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

Defined in: main.ts:219449

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelInfoTasksReadyTaskInfo`](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md)[]

Defined in: main.ts:219445

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:219453

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

Defined in: main.ts:219475

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

Defined in: main.ts:219468

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
