[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamLocationsResponseInfo

# Class: SerpSeznamLocationsResponseInfo

Defined in: main.ts:82337

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamLocationsResponseInfo()

> **new SerpSeznamLocationsResponseInfo**(`data`?): [`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)

Defined in: main.ts:82343

#### Parameters

##### data?

[`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md)

#### Returns

[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md).[`cost`](../interfaces/ISerpSeznamLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md).[`status_code`](../interfaces/ISerpSeznamLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md).[`status_message`](../interfaces/ISerpSeznamLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpSeznamLocationsTaskInfo`](SerpSeznamLocationsTaskInfo.md)[]

Defined in: main.ts:82339

array of tasks

#### Implementation of

[`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md).[`tasks`](../interfaces/ISerpSeznamLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md).[`tasks_count`](../interfaces/ISerpSeznamLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md).[`tasks_error`](../interfaces/ISerpSeznamLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md).[`time`](../interfaces/ISerpSeznamLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpSeznamLocationsResponseInfo`](../interfaces/ISerpSeznamLocationsResponseInfo.md).[`version`](../interfaces/ISerpSeznamLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:82347

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

Defined in: main.ts:82369

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)

Defined in: main.ts:82362

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
