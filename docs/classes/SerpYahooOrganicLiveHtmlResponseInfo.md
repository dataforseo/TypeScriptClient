[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveHtmlResponseInfo

# Class: SerpYahooOrganicLiveHtmlResponseInfo

Defined in: main.ts:78295

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveHtmlResponseInfo()

> **new SerpYahooOrganicLiveHtmlResponseInfo**(`data`?): [`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)

Defined in: main.ts:78301

#### Parameters

##### data?

[`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md)

#### Returns

[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md).[`cost`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYahooOrganicLiveHtmlTaskInfo`](SerpYahooOrganicLiveHtmlTaskInfo.md)[]

Defined in: main.ts:78297

array of tasks

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md).[`time`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResponseInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md).[`version`](../interfaces/ISerpYahooOrganicLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:78305

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

Defined in: main.ts:78327

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)

Defined in: main.ts:78320

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
