[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskPostResponseInfo

# Class: SerpYahooOrganicTaskPostResponseInfo

Defined in: main.ts:75565

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskPostResponseInfo()

> **new SerpYahooOrganicTaskPostResponseInfo**(`data`?): [`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)

Defined in: main.ts:75571

#### Parameters

##### data?

[`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md)

#### Returns

[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYahooOrganicTaskPostTaskInfo`](SerpYahooOrganicTaskPostTaskInfo.md)[]

Defined in: main.ts:75567

array of tasks

#### Implementation of

[`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[`time`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[`version`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:75575

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

Defined in: main.ts:75597

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)

Defined in: main.ts:75590

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
