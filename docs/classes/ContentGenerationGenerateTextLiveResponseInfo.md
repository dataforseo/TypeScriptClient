[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateTextLiveResponseInfo

# Class: ContentGenerationGenerateTextLiveResponseInfo

Defined in: main.ts:181871

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateTextLiveResponseInfo()

> **new ContentGenerationGenerateTextLiveResponseInfo**(`data`?): [`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

Defined in: main.ts:181877

#### Parameters

##### data?

[`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md)

#### Returns

[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[`cost`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[`status_code`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[`status_message`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentGenerationGenerateTextLiveTaskInfo`](ContentGenerationGenerateTextLiveTaskInfo.md)[]

Defined in: main.ts:181873

array of tasks

#### Implementation of

[`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[`tasks`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[`time`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[`version`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:181881

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

Defined in: main.ts:181903

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

Defined in: main.ts:181896

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
