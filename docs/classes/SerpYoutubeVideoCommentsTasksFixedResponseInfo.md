[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTasksFixedResponseInfo

# Class: SerpYoutubeVideoCommentsTasksFixedResponseInfo

Defined in: main.ts:73783

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTasksFixedResponseInfo()

> **new SerpYoutubeVideoCommentsTasksFixedResponseInfo**(`data`?): [`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)

Defined in: main.ts:73789

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYoutubeVideoCommentsTasksFixedTaskInfo`](SerpYoutubeVideoCommentsTasksFixedTaskInfo.md)[]

Defined in: main.ts:73785

array of tasks

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:73793

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

Defined in: main.ts:73815

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)

Defined in: main.ts:73808

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
