[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleHotelInfoTaskPostResponseInfo

# Class: BusinessDataGoogleHotelInfoTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTaskPostResponseInfo()

> **new BusinessDataGoogleHotelInfoTaskPostResponseInfo**(`data`?): [`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:205291

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelInfoTaskPostTaskInfo`](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:205287

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

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

main.ts:205295

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

main.ts:205317

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:205310
