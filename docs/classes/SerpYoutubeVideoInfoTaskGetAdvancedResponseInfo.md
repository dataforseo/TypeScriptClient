[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo

# Class: SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo

Defined in: main.ts:70979

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo()

> **new SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo**(`data`?): [`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:70985

#### Parameters

##### data?

[`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo`](SerpYoutubeVideoInfoTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:70981

array of tasks

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:70989

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

Defined in: main.ts:71011

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:71004

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
