**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentGenerationGenerateLiveResponseInfo

# Class: ContentGenerationGenerateLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateLiveResponseInfo(data)

> **new ContentGenerationGenerateLiveResponseInfo**(`data`?): [`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Parameters

• **data?**: [`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md)

#### Returns

[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:166683

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`cost`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23157

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`status_code`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23150

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`status_message`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23153

***

### tasks?

> **`optional`** **tasks**: [`ContentGenerationGenerateLiveTaskInfo`](ContentGenerationGenerateLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`tasks`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#tasks)

#### Source

main.ts:166679

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23159

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23161

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`time`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23155

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`version`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23147

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

main.ts:166687

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

main.ts:166709

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:166702
