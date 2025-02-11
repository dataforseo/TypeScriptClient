[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo

# Class: BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo

Defined in: main.ts:220703

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo()

> **new BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo**(`data`?): [`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

Defined in: main.ts:220709

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:220705

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:220713

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

Defined in: main.ts:220735

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

Defined in: main.ts:220728

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
