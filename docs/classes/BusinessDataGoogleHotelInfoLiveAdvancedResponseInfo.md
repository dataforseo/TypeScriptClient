[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo

# Class: BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo

Defined in: main.ts:221453

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo()

> **new BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

Defined in: main.ts:221459

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo`](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:221455

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:221463

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

Defined in: main.ts:221485

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

Defined in: main.ts:221478

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
