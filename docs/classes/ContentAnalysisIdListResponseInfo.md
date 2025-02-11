[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisIdListResponseInfo

# Class: ContentAnalysisIdListResponseInfo

Defined in: main.ts:177011

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisIdListResponseInfo()

> **new ContentAnalysisIdListResponseInfo**(`data`?): [`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

Defined in: main.ts:177017

#### Parameters

##### data?

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md)

#### Returns

[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`cost`](../interfaces/IContentAnalysisIdListResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`status_code`](../interfaces/IContentAnalysisIdListResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`status_message`](../interfaces/IContentAnalysisIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentAnalysisIdListTaskInfo`](ContentAnalysisIdListTaskInfo.md)[]

Defined in: main.ts:177013

array of tasks

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`tasks`](../interfaces/IContentAnalysisIdListResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`tasks_count`](../interfaces/IContentAnalysisIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`tasks_error`](../interfaces/IContentAnalysisIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`time`](../interfaces/IContentAnalysisIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`version`](../interfaces/IContentAnalysisIdListResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:177021

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

Defined in: main.ts:177043

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

Defined in: main.ts:177036

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
