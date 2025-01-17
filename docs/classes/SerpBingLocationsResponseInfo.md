[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocationsResponseInfo

# Class: SerpBingLocationsResponseInfo

Defined in: main.ts:62936

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocationsResponseInfo()

> **new SerpBingLocationsResponseInfo**(`data`?): [`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)

Defined in: main.ts:62942

#### Parameters

##### data?

[`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md)

#### Returns

[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md).[`cost`](../interfaces/ISerpBingLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md).[`status_code`](../interfaces/ISerpBingLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md).[`status_message`](../interfaces/ISerpBingLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingLocationsTaskInfo`](SerpBingLocationsTaskInfo.md)[]

Defined in: main.ts:62938

array of tasks

#### Implementation of

[`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md).[`tasks`](../interfaces/ISerpBingLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md).[`time`](../interfaces/ISerpBingLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBingLocationsResponseInfo`](../interfaces/ISerpBingLocationsResponseInfo.md).[`version`](../interfaces/ISerpBingLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:62946

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

Defined in: main.ts:62968

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)

Defined in: main.ts:62961

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
