[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoTaskPostResponseInfo

# Class: BusinessDataGoogleHotelInfoTaskPostResponseInfo

Defined in: main.ts:218741

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTaskPostResponseInfo()

> **new BusinessDataGoogleHotelInfoTaskPostResponseInfo**(`data`?): [`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

Defined in: main.ts:218747

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelInfoTaskPostTaskInfo`](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md)[]

Defined in: main.ts:218743

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:218751

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

Defined in: main.ts:218773

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

Defined in: main.ts:218766

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
