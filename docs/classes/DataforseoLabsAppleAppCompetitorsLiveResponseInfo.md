[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppCompetitorsLiveResponseInfo

# Class: DataforseoLabsAppleAppCompetitorsLiveResponseInfo

Defined in: main.ts:124643

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppCompetitorsLiveResponseInfo()

> **new DataforseoLabsAppleAppCompetitorsLiveResponseInfo**(`data`?): [`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

Defined in: main.ts:124649

#### Parameters

##### data?

[`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsAppleAppCompetitorsLiveTaskInfo`](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md)[]

Defined in: main.ts:124645

array of tasks

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:124653

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

Defined in: main.ts:124675

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

Defined in: main.ts:124668

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
