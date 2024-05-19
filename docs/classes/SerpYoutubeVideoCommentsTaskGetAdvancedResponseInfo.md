**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo

# Class: SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo(data)

> **new SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo**(`data`?): [`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:65612

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23401

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23394

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23397

***

### tasks?

> **`optional`** **tasks**: [`SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md#tasks)

#### Source

main.ts:65608

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23403

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23405

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23399

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23391

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

main.ts:65616

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

main.ts:65638

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:65631
