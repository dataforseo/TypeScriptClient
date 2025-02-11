[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo

Defined in: main.ts:109383

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo()

> **new DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

Defined in: main.ts:109389

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo`](DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo.md)[]

Defined in: main.ts:109385

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:109393

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

Defined in: main.ts:109415

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

Defined in: main.ts:109408

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
