[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateSubTopicsLiveResponseInfo

# Class: ContentGenerationGenerateSubTopicsLiveResponseInfo

Defined in: main.ts:182415

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateSubTopicsLiveResponseInfo()

> **new ContentGenerationGenerateSubTopicsLiveResponseInfo**(`data`?): [`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)

Defined in: main.ts:182421

#### Parameters

##### data?

[`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md)

#### Returns

[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[`cost`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[`status_code`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[`status_message`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentGenerationGenerateSubTopicsLiveTaskInfo`](ContentGenerationGenerateSubTopicsLiveTaskInfo.md)[]

Defined in: main.ts:182417

array of tasks

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[`tasks`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[`time`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[`version`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:182425

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

Defined in: main.ts:182447

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)

Defined in: main.ts:182440

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
