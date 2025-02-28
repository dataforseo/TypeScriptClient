[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleMapsTaskPostResponseInfo

# Class: SerpGoogleMapsTaskPostResponseInfo

Defined in: main.ts:40950

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTaskPostResponseInfo()

> **new SerpGoogleMapsTaskPostResponseInfo**(`data`?): [`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)

Defined in: main.ts:40956

#### Parameters

##### data?

[`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md)

#### Returns

[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleMapsTaskPostTaskInfo`](SerpGoogleMapsTaskPostTaskInfo.md)[]

Defined in: main.ts:40952

array of tasks

#### Implementation of

[`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleMapsTaskPostResponseInfo`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleMapsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:40960

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

Defined in: main.ts:40982

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)

Defined in: main.ts:40975

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
