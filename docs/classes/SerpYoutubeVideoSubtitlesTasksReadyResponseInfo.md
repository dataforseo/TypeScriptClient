**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTasksReadyResponseInfo

# Class: SerpYoutubeVideoSubtitlesTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesTasksReadyResponseInfo(data)

> **new SerpYoutubeVideoSubtitlesTasksReadyResponseInfo**(`data`?): [`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:63905

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#cost)

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

[`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#status_code)

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

[`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`SerpYoutubeVideoSubtitlesTasksReadyTaskInfo`](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:63901

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md#version)

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

main.ts:63909

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

main.ts:63931

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:63924
