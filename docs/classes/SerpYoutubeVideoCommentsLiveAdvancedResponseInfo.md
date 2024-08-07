**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsLiveAdvancedResponseInfo

# Class: SerpYoutubeVideoCommentsLiveAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsLiveAdvancedResponseInfo(data)

> **new SerpYoutubeVideoCommentsLiveAdvancedResponseInfo**(`data`?): [`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:66986

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`SerpYoutubeVideoCommentsLiveAdvancedTaskInfo`](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tasks)

#### Source

main.ts:66982

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

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

main.ts:66990

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

main.ts:67012

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:67005
