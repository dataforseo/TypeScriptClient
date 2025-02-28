[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppIntersectionLiveResponseInfo

# Class: DataforseoLabsGoogleAppIntersectionLiveResponseInfo

Defined in: main.ts:123241

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppIntersectionLiveResponseInfo()

> **new DataforseoLabsGoogleAppIntersectionLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

Defined in: main.ts:123247

#### Parameters

##### data?

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleAppIntersectionLiveTaskInfo`](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md)[]

Defined in: main.ts:123243

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123251

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

Defined in: main.ts:123273

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

Defined in: main.ts:123266

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
