[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo

# Class: KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo

Defined in: main.ts:142149

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo()

> **new KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

Defined in: main.ts:142155

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md)[]

Defined in: main.ts:142151

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:142159

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

Defined in: main.ts:142181

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

Defined in: main.ts:142174

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
