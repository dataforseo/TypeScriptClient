[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationTextSummaryLanguagesResponseInfo

# Class: ContentGenerationTextSummaryLanguagesResponseInfo

Defined in: main.ts:184315

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationTextSummaryLanguagesResponseInfo()

> **new ContentGenerationTextSummaryLanguagesResponseInfo**(`data`?): [`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)

Defined in: main.ts:184321

#### Parameters

##### data?

[`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md)

#### Returns

[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md).[`cost`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md).[`status_code`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md).[`status_message`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentGenerationTextSummaryLanguagesTaskInfo`](ContentGenerationTextSummaryLanguagesTaskInfo.md)[]

Defined in: main.ts:184317

array of tasks

#### Implementation of

[`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md).[`tasks`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md).[`time`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IContentGenerationTextSummaryLanguagesResponseInfo`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md).[`version`](../interfaces/IContentGenerationTextSummaryLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184325

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

Defined in: main.ts:184347

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)

Defined in: main.ts:184340

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
