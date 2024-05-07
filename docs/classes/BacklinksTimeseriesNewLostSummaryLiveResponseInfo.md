**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksTimeseriesNewLostSummaryLiveResponseInfo

# Class: BacklinksTimeseriesNewLostSummaryLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesNewLostSummaryLiveResponseInfo(data)

> **new BacklinksTimeseriesNewLostSummaryLiveResponseInfo**(`data`?): [`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

#### Parameters

• **data?**: [`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:145845

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`BacklinksTimeseriesNewLostSummaryLiveTaskInfo`](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tasks)

#### Source

main.ts:145841

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[`time`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[`version`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23311

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:145849

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:145871

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:145864
