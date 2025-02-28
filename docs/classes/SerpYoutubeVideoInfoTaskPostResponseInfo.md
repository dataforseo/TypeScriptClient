[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoTaskPostResponseInfo

# Class: SerpYoutubeVideoInfoTaskPostResponseInfo

Defined in: main.ts:69810

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoTaskPostResponseInfo()

> **new SerpYoutubeVideoInfoTaskPostResponseInfo**(`data`?): [`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)

Defined in: main.ts:69816

#### Parameters

##### data?

[`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md)

#### Returns

[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYoutubeVideoInfoTaskPostTaskInfo`](SerpYoutubeVideoInfoTaskPostTaskInfo.md)[]

Defined in: main.ts:69812

array of tasks

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoInfoTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoInfoTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:69820

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

Defined in: main.ts:69842

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)

Defined in: main.ts:69835

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
