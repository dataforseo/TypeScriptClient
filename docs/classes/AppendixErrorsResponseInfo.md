[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixErrorsResponseInfo

# Class: AppendixErrorsResponseInfo

Defined in: main.ts:239635

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppendixErrorsResponseInfo()

> **new AppendixErrorsResponseInfo**(`data`?): [`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)

Defined in: main.ts:239641

#### Parameters

##### data?

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md)

#### Returns

[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`cost`](../interfaces/IAppendixErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`status_code`](../interfaces/IAppendixErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`status_message`](../interfaces/IAppendixErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppendixErrorsTaskInfo`](AppendixErrorsTaskInfo.md)[]

Defined in: main.ts:239637

array of tasks

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`tasks`](../interfaces/IAppendixErrorsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`tasks_count`](../interfaces/IAppendixErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`tasks_error`](../interfaces/IAppendixErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`time`](../interfaces/IAppendixErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`version`](../interfaces/IAppendixErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:239645

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

Defined in: main.ts:239667

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)

Defined in: main.ts:239660

#### Parameters

##### data

`any`

#### Returns

[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
