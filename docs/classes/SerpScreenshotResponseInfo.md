[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpScreenshotResponseInfo

# Class: SerpScreenshotResponseInfo

Defined in: main.ts:26378

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpScreenshotResponseInfo()

> **new SerpScreenshotResponseInfo**(`data`?): [`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)

Defined in: main.ts:26384

#### Parameters

##### data?

[`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md)

#### Returns

[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md).[`cost`](../interfaces/ISerpScreenshotResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md).[`status_code`](../interfaces/ISerpScreenshotResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md).[`status_message`](../interfaces/ISerpScreenshotResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpScreenshotTaskInfo`](SerpScreenshotTaskInfo.md)[]

Defined in: main.ts:26380

array of tasks

#### Implementation of

[`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md).[`tasks`](../interfaces/ISerpScreenshotResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md).[`tasks_count`](../interfaces/ISerpScreenshotResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md).[`tasks_error`](../interfaces/ISerpScreenshotResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md).[`time`](../interfaces/ISerpScreenshotResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md).[`version`](../interfaces/ISerpScreenshotResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26388

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

Defined in: main.ts:26410

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)

Defined in: main.ts:26403

#### Parameters

##### data

`any`

#### Returns

[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
