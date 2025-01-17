[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackTaskGetHtmlResponseInfo

# Class: SerpBingLocalPackTaskGetHtmlResponseInfo

Defined in: main.ts:67902

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTaskGetHtmlResponseInfo()

> **new SerpBingLocalPackTaskGetHtmlResponseInfo**(`data`?): [`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

Defined in: main.ts:67908

#### Parameters

##### data?

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingLocalPackTaskGetHtmlTaskInfo`](SerpBingLocalPackTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:67904

array of tasks

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:67912

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

Defined in: main.ts:67934

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

Defined in: main.ts:67927

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
