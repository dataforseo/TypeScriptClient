[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoLiveHtmlResponseInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlResponseInfo

Defined in: main.ts:221421

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveHtmlResponseInfo()

> **new BusinessDataGoogleHotelInfoLiveHtmlResponseInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

Defined in: main.ts:221427

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelInfoLiveHtmlTaskInfo`](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md)[]

Defined in: main.ts:221423

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:221431

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

Defined in: main.ts:221453

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

Defined in: main.ts:221446

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
