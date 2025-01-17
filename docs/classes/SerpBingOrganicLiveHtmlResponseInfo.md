[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveHtmlResponseInfo

# Class: SerpBingOrganicLiveHtmlResponseInfo

Defined in: main.ts:66576

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveHtmlResponseInfo()

> **new SerpBingOrganicLiveHtmlResponseInfo**(`data`?): [`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)

Defined in: main.ts:66582

#### Parameters

##### data?

[`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md)

#### Returns

[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md).[`cost`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingOrganicLiveHtmlTaskInfo`](SerpBingOrganicLiveHtmlTaskInfo.md)[]

Defined in: main.ts:66578

array of tasks

#### Implementation of

[`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md).[`time`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBingOrganicLiveHtmlResponseInfo`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md).[`version`](../interfaces/ISerpBingOrganicLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:66586

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

Defined in: main.ts:66608

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)

Defined in: main.ts:66601

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
