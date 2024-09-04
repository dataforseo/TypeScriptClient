[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleAppIntersectionLiveResponseInfo

# Class: DataforseoLabsGoogleAppIntersectionLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppIntersectionLiveResponseInfo()

> **new DataforseoLabsGoogleAppIntersectionLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:116602

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleAppIntersectionLiveTaskInfo`](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks)

#### Defined in

main.ts:116598

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

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

main.ts:116606

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

main.ts:116628

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:116621
