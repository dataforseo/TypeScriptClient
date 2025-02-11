[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskPostResponseInfo

# Class: SerpBingOrganicTaskPostResponseInfo

Defined in: main.ts:63836

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskPostResponseInfo()

> **new SerpBingOrganicTaskPostResponseInfo**(`data`?): [`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

Defined in: main.ts:63842

#### Parameters

##### data?

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md)

#### Returns

[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingOrganicTaskPostTaskInfo`](SerpBingOrganicTaskPostTaskInfo.md)[]

Defined in: main.ts:63838

array of tasks

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`time`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`version`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:63846

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

Defined in: main.ts:63868

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

Defined in: main.ts:63861

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
