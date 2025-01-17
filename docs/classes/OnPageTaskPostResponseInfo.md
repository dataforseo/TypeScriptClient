[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageTaskPostResponseInfo

# Class: OnPageTaskPostResponseInfo

Defined in: main.ts:164947

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageTaskPostResponseInfo()

> **new OnPageTaskPostResponseInfo**(`data`?): [`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)

Defined in: main.ts:164953

#### Parameters

##### data?

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md)

#### Returns

[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`cost`](../interfaces/IOnPageTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`status_code`](../interfaces/IOnPageTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`status_message`](../interfaces/IOnPageTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageTaskPostTaskInfo`](OnPageTaskPostTaskInfo.md)[]

Defined in: main.ts:164949

array of tasks

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`tasks`](../interfaces/IOnPageTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IOnPageTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IOnPageTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`time`](../interfaces/IOnPageTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`version`](../interfaces/IOnPageTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:164957

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

Defined in: main.ts:164979

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)

Defined in: main.ts:164972

#### Parameters

##### data

`any`

#### Returns

[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
