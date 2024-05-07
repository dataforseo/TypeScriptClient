**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoLiveAdvancedResponseInfo

# Class: SerpYoutubeVideoInfoLiveAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoLiveAdvancedResponseInfo(data)

> **new SerpYoutubeVideoInfoLiveAdvancedResponseInfo**(`data`?): [`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:62772

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`SerpYoutubeVideoInfoLiveAdvancedTaskInfo`](SerpYoutubeVideoInfoLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tasks)

#### Source

main.ts:62768

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23311

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

main.ts:62776

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

main.ts:62798

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:62791
