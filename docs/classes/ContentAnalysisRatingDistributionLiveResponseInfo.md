[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentAnalysisRatingDistributionLiveResponseInfo

# Class: ContentAnalysisRatingDistributionLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisRatingDistributionLiveResponseInfo()

> **new ContentAnalysisRatingDistributionLiveResponseInfo**(`data`?): [`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Returns

[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:168234

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`cost`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24152

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`status_code`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24145

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`status_message`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`ContentAnalysisRatingDistributionLiveTaskInfo`](ContentAnalysisRatingDistributionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`tasks`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#tasks)

#### Defined in

main.ts:168230

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`time`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[`version`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24142

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:168238

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:168260

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:168253
