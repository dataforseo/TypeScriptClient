[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTaskPostResponseInfo

# Class: BusinessDataGoogleHotelSearchesTaskPostResponseInfo

Defined in: main.ts:217165

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTaskPostResponseInfo()

> **new BusinessDataGoogleHotelSearchesTaskPostResponseInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

Defined in: main.ts:217171

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelSearchesTaskPostTaskInfo`](BusinessDataGoogleHotelSearchesTaskPostTaskInfo.md)[]

Defined in: main.ts:217167

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:217175

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

Defined in: main.ts:217197

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

Defined in: main.ts:217190

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
