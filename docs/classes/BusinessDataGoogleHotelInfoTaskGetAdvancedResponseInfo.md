[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo

# Class: BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo()

> **new BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo**(`data`?): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:206560

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#cost)

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

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#status_code)

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

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:206556

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md#version)

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

main.ts:206564

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

main.ts:206586

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:206579
