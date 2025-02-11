[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsTaskGetHtmlResponseInfo

# Class: SerpGoogleNewsTaskGetHtmlResponseInfo

Defined in: main.ts:46812

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTaskGetHtmlResponseInfo()

> **new SerpGoogleNewsTaskGetHtmlResponseInfo**(`data`?): [`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)

Defined in: main.ts:46818

#### Parameters

##### data?

[`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleNewsTaskGetHtmlTaskInfo`](SerpGoogleNewsTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:46814

array of tasks

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleNewsTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:46822

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

Defined in: main.ts:46844

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)

Defined in: main.ts:46837

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
