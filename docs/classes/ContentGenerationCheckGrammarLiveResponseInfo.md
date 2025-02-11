[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationCheckGrammarLiveResponseInfo

# Class: ContentGenerationCheckGrammarLiveResponseInfo

Defined in: main.ts:183455

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationCheckGrammarLiveResponseInfo()

> **new ContentGenerationCheckGrammarLiveResponseInfo**(`data`?): [`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)

Defined in: main.ts:183461

#### Parameters

##### data?

[`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md)

#### Returns

[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[`cost`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[`status_code`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[`status_message`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentGenerationCheckGrammarLiveTaskInfo`](ContentGenerationCheckGrammarLiveTaskInfo.md)[]

Defined in: main.ts:183457

array of tasks

#### Implementation of

[`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[`tasks`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[`time`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[`version`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:183465

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

Defined in: main.ts:183487

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)

Defined in: main.ts:183480

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
