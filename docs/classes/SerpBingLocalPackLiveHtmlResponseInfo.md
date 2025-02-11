[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackLiveHtmlResponseInfo

# Class: SerpBingLocalPackLiveHtmlResponseInfo

Defined in: main.ts:68906

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackLiveHtmlResponseInfo()

> **new SerpBingLocalPackLiveHtmlResponseInfo**(`data`?): [`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)

Defined in: main.ts:68912

#### Parameters

##### data?

[`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md)

#### Returns

[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md).[`cost`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingLocalPackLiveHtmlTaskInfo`](SerpBingLocalPackLiveHtmlTaskInfo.md)[]

Defined in: main.ts:68908

array of tasks

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md).[`time`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResponseInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md).[`version`](../interfaces/ISerpBingLocalPackLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:68916

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

Defined in: main.ts:68938

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)

Defined in: main.ts:68931

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
