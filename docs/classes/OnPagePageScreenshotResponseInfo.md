[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePageScreenshotResponseInfo

# Class: OnPagePageScreenshotResponseInfo

Defined in: main.ts:172793

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPagePageScreenshotResponseInfo()

> **new OnPagePageScreenshotResponseInfo**(`data`?): [`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)

Defined in: main.ts:172799

#### Parameters

##### data?

[`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md)

#### Returns

[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md).[`cost`](../interfaces/IOnPagePageScreenshotResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md).[`status_code`](../interfaces/IOnPagePageScreenshotResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md).[`status_message`](../interfaces/IOnPagePageScreenshotResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPagePageScreenshotTaskInfo`](OnPagePageScreenshotTaskInfo.md)[]

Defined in: main.ts:172795

array of tasks

#### Implementation of

[`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md).[`tasks`](../interfaces/IOnPagePageScreenshotResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md).[`tasks_count`](../interfaces/IOnPagePageScreenshotResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md).[`tasks_error`](../interfaces/IOnPagePageScreenshotResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md).[`time`](../interfaces/IOnPagePageScreenshotResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPagePageScreenshotResponseInfo`](../interfaces/IOnPagePageScreenshotResponseInfo.md).[`version`](../interfaces/IOnPagePageScreenshotResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172803

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

Defined in: main.ts:172825

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)

Defined in: main.ts:172818

#### Parameters

##### data

`any`

#### Returns

[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
