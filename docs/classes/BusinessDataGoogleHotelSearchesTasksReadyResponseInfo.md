**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTasksReadyResponseInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTasksReadyResponseInfo(data)

> **new BusinessDataGoogleHotelSearchesTasksReadyResponseInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:203461

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:203457

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:203465

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:203487

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:203480
