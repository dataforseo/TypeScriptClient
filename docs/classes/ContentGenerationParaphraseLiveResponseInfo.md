**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentGenerationParaphraseLiveResponseInfo

# Class: ContentGenerationParaphraseLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationParaphraseLiveResponseInfo(data)

> **new ContentGenerationParaphraseLiveResponseInfo**(`data`?): [`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)

#### Parameters

• **data?**: [`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md)

#### Returns

[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:167857

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md).[`cost`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md#cost)

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

[`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md).[`status_code`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md#status_code)

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

[`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md).[`status_message`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23153

***

### tasks?

> **`optional`** **tasks**: [`ContentGenerationParaphraseLiveTaskInfo`](ContentGenerationParaphraseLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md).[`tasks`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md#tasks)

#### Source

main.ts:167853

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23159

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23161

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md).[`time`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23155

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IContentGenerationParaphraseLiveResponseInfo`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md).[`version`](../interfaces/IContentGenerationParaphraseLiveResponseInfo.md#version)

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

main.ts:167861

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

main.ts:167883

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:167876
