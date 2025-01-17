[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageMicrodataResponseInfo

# Class: OnPageMicrodataResponseInfo

Defined in: main.ts:172077

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataResponseInfo()

> **new OnPageMicrodataResponseInfo**(`data`?): [`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

Defined in: main.ts:172083

#### Parameters

##### data?

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md)

#### Returns

[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`cost`](../interfaces/IOnPageMicrodataResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`status_code`](../interfaces/IOnPageMicrodataResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`status_message`](../interfaces/IOnPageMicrodataResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageMicrodataTaskInfo`](OnPageMicrodataTaskInfo.md)[]

Defined in: main.ts:172079

array of tasks

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`tasks`](../interfaces/IOnPageMicrodataResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`tasks_count`](../interfaces/IOnPageMicrodataResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`tasks_error`](../interfaces/IOnPageMicrodataResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`time`](../interfaces/IOnPageMicrodataResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`version`](../interfaces/IOnPageMicrodataResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172087

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

Defined in: main.ts:172109

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

Defined in: main.ts:172102

#### Parameters

##### data

`any`

#### Returns

[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
