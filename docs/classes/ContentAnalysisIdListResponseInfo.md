**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisIdListResponseInfo

# Class: ContentAnalysisIdListResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisIdListResponseInfo(data)

> **new ContentAnalysisIdListResponseInfo**(`data`?): [`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md)

#### Returns

[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:164508

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`cost`](../interfaces/IContentAnalysisIdListResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`status_code`](../interfaces/IContentAnalysisIdListResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`status_message`](../interfaces/IContentAnalysisIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`ContentAnalysisIdListTaskInfo`](ContentAnalysisIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`tasks`](../interfaces/IContentAnalysisIdListResponseInfo.md#tasks)

#### Source

main.ts:164504

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`tasks_count`](../interfaces/IContentAnalysisIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`tasks_error`](../interfaces/IContentAnalysisIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`time`](../interfaces/IContentAnalysisIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md).[`version`](../interfaces/IContentAnalysisIdListResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

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

main.ts:164512

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

main.ts:164534

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:164527
