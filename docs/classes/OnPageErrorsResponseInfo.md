[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageErrorsResponseInfo

# Class: OnPageErrorsResponseInfo

Defined in: main.ts:163793

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageErrorsResponseInfo()

> **new OnPageErrorsResponseInfo**(`data`?): [`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)

Defined in: main.ts:163799

#### Parameters

##### data?

[`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md)

#### Returns

[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md).[`cost`](../interfaces/IOnPageErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md).[`status_code`](../interfaces/IOnPageErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md).[`status_message`](../interfaces/IOnPageErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageErrorsTaskInfo`](OnPageErrorsTaskInfo.md)[]

Defined in: main.ts:163795

array of tasks

#### Implementation of

[`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md).[`tasks`](../interfaces/IOnPageErrorsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md).[`tasks_count`](../interfaces/IOnPageErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md).[`tasks_error`](../interfaces/IOnPageErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md).[`time`](../interfaces/IOnPageErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md).[`version`](../interfaces/IOnPageErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:163803

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

Defined in: main.ts:163825

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)

Defined in: main.ts:163818

#### Parameters

##### data

`any`

#### Returns

[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
