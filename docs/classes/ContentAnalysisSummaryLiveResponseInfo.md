[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisSummaryLiveResponseInfo

# Class: ContentAnalysisSummaryLiveResponseInfo

Defined in: main.ts:178911

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSummaryLiveResponseInfo()

> **new ContentAnalysisSummaryLiveResponseInfo**(`data`?): [`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)

Defined in: main.ts:178917

#### Parameters

##### data?

[`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md)

#### Returns

[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md).[`cost`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md).[`status_code`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md).[`status_message`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentAnalysisSummaryLiveTaskInfo`](ContentAnalysisSummaryLiveTaskInfo.md)[]

Defined in: main.ts:178913

array of tasks

#### Implementation of

[`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md).[`tasks`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md).[`time`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IContentAnalysisSummaryLiveResponseInfo`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md).[`version`](../interfaces/IContentAnalysisSummaryLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:178921

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

Defined in: main.ts:178943

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)

Defined in: main.ts:178936

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
