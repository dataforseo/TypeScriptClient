[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTaskPostResponseInfo

# Class: SerpGoogleLocalFinderTaskPostResponseInfo

Defined in: main.ts:43244

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTaskPostResponseInfo()

> **new SerpGoogleLocalFinderTaskPostResponseInfo**(`data`?): [`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)

Defined in: main.ts:43250

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md)

#### Returns

[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleLocalFinderTaskPostTaskInfo`](SerpGoogleLocalFinderTaskPostTaskInfo.md)[]

Defined in: main.ts:43246

array of tasks

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleLocalFinderTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:43254

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

Defined in: main.ts:43276

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)

Defined in: main.ts:43269

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
