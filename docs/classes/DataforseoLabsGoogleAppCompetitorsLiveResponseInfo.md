[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppCompetitorsLiveResponseInfo

# Class: DataforseoLabsGoogleAppCompetitorsLiveResponseInfo

Defined in: main.ts:122549

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppCompetitorsLiveResponseInfo()

> **new DataforseoLabsGoogleAppCompetitorsLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

Defined in: main.ts:122555

#### Parameters

##### data?

[`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleAppCompetitorsLiveTaskInfo`](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md)[]

Defined in: main.ts:122551

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:122559

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

Defined in: main.ts:122581

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

Defined in: main.ts:122574

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
