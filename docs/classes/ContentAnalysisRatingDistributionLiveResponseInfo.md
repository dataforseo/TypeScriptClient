[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisRatingDistributionLiveResponseInfo

# Class: ContentAnalysisRatingDistributionLiveResponseInfo

Defined in: main.ts:180247

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisRatingDistributionLiveResponseInfo()

> **new ContentAnalysisRatingDistributionLiveResponseInfo**(`data`?): [`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

Defined in: main.ts:180253

#### Parameters

##### data?

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Returns

[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`cost`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`status_code`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`status_message`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentAnalysisRatingDistributionLiveTaskInfo`](ContentAnalysisRatingDistributionLiveTaskInfo.md)[]

Defined in: main.ts:180249

array of tasks

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`tasks`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`time`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`version`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:180257

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

Defined in: main.ts:180279

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

Defined in: main.ts:180272

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
