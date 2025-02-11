[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkPagesSummaryLiveResponseInfo

# Class: BacklinksBulkPagesSummaryLiveResponseInfo

Defined in: main.ts:163103

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkPagesSummaryLiveResponseInfo()

> **new BacklinksBulkPagesSummaryLiveResponseInfo**(`data`?): [`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)

Defined in: main.ts:163109

#### Parameters

##### data?

[`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md)

#### Returns

[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksBulkPagesSummaryLiveTaskInfo`](BacklinksBulkPagesSummaryLiveTaskInfo.md)[]

Defined in: main.ts:163105

array of tasks

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md).[`time`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md).[`version`](../interfaces/IBacklinksBulkPagesSummaryLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:163113

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

Defined in: main.ts:163135

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)

Defined in: main.ts:163128

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
