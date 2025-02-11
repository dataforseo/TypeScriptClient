[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamLocationsCountryResponseInfo

# Class: SerpSeznamLocationsCountryResponseInfo

Defined in: main.ts:82525

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamLocationsCountryResponseInfo()

> **new SerpSeznamLocationsCountryResponseInfo**(`data`?): [`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

Defined in: main.ts:82531

#### Parameters

##### data?

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md)

#### Returns

[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`cost`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`status_code`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`status_message`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpSeznamLocationsCountryTaskInfo`](SerpSeznamLocationsCountryTaskInfo.md)[]

Defined in: main.ts:82527

array of tasks

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`tasks`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`time`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`version`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:82535

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

Defined in: main.ts:82557

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

Defined in: main.ts:82550

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
