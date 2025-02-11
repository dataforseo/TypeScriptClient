[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisPhraseTrendsLiveResponseInfo

# Class: ContentAnalysisPhraseTrendsLiveResponseInfo

Defined in: main.ts:180851

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisPhraseTrendsLiveResponseInfo()

> **new ContentAnalysisPhraseTrendsLiveResponseInfo**(`data`?): [`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)

Defined in: main.ts:180857

#### Parameters

##### data?

[`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md)

#### Returns

[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[`cost`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[`status_code`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[`status_message`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentAnalysisPhraseTrendsLiveTaskInfo`](ContentAnalysisPhraseTrendsLiveTaskInfo.md)[]

Defined in: main.ts:180853

array of tasks

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[`tasks`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[`time`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[`version`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:180861

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

Defined in: main.ts:180883

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)

Defined in: main.ts:180876

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
