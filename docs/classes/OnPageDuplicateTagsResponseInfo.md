[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsResponseInfo

# Class: OnPageDuplicateTagsResponseInfo

Defined in: main.ts:168965

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsResponseInfo()

> **new OnPageDuplicateTagsResponseInfo**(`data`?): [`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)

Defined in: main.ts:168971

#### Parameters

##### data?

[`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md)

#### Returns

[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[`cost`](../interfaces/IOnPageDuplicateTagsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[`status_code`](../interfaces/IOnPageDuplicateTagsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[`status_message`](../interfaces/IOnPageDuplicateTagsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageDuplicateTagsTaskInfo`](OnPageDuplicateTagsTaskInfo.md)[]

Defined in: main.ts:168967

array of tasks

#### Implementation of

[`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[`tasks`](../interfaces/IOnPageDuplicateTagsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[`tasks_count`](../interfaces/IOnPageDuplicateTagsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[`tasks_error`](../interfaces/IOnPageDuplicateTagsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[`time`](../interfaces/IOnPageDuplicateTagsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[`version`](../interfaces/IOnPageDuplicateTagsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:168975

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

Defined in: main.ts:168997

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)

Defined in: main.ts:168990

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
