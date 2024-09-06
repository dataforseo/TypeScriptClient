[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleHotelSearchesTasksReadyResponseInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTasksReadyResponseInfo()

> **new BusinessDataGoogleHotelSearchesTasksReadyResponseInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:203629

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24152

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24145

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:203625

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24142

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:203633

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:203655

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:203648
