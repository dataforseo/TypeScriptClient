[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYoutubeVideoCommentsTasksReadyResponseInfo

# Class: SerpYoutubeVideoCommentsTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTasksReadyResponseInfo()

> **new SerpYoutubeVideoCommentsTasksReadyResponseInfo**(`data`?): [`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:65319

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#cost)

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

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#status_code)

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

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`SerpYoutubeVideoCommentsTasksReadyTaskInfo`](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:65315

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#version)

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

main.ts:65323

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

main.ts:65345

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:65338
