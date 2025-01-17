[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingSerpCompetitorsLiveResponseInfo

# Class: DataforseoLabsBingSerpCompetitorsLiveResponseInfo

Defined in: main.ts:120271

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingSerpCompetitorsLiveResponseInfo()

> **new DataforseoLabsBingSerpCompetitorsLiveResponseInfo**(`data`?): [`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

Defined in: main.ts:120277

#### Parameters

##### data?

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsBingSerpCompetitorsLiveTaskInfo`](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md)[]

Defined in: main.ts:120273

array of tasks

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:120281

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

Defined in: main.ts:120303

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

Defined in: main.ts:120296

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
