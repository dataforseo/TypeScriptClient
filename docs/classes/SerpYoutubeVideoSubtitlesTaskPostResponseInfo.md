[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTaskPostResponseInfo

# Class: SerpYoutubeVideoSubtitlesTaskPostResponseInfo

Defined in: main.ts:71751

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesTaskPostResponseInfo()

> **new SerpYoutubeVideoSubtitlesTaskPostResponseInfo**(`data`?): [`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

Defined in: main.ts:71757

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYoutubeVideoSubtitlesTaskPostTaskInfo`](SerpYoutubeVideoSubtitlesTaskPostTaskInfo.md)[]

Defined in: main.ts:71753

array of tasks

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:71761

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

Defined in: main.ts:71783

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

Defined in: main.ts:71776

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
