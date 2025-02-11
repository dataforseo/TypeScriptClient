[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesLiveResponseInfo

# Class: BusinessDataGoogleHotelSearchesLiveResponseInfo

Defined in: main.ts:218789

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesLiveResponseInfo()

> **new BusinessDataGoogleHotelSearchesLiveResponseInfo**(`data`?): [`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)

Defined in: main.ts:218795

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelSearchesLiveTaskInfo`](BusinessDataGoogleHotelSearchesLiveTaskInfo.md)[]

Defined in: main.ts:218791

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:218799

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

Defined in: main.ts:218821

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)

Defined in: main.ts:218814

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
