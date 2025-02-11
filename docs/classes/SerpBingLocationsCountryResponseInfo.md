[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocationsCountryResponseInfo

# Class: SerpBingLocationsCountryResponseInfo

Defined in: main.ts:63162

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocationsCountryResponseInfo()

> **new SerpBingLocationsCountryResponseInfo**(`data`?): [`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)

Defined in: main.ts:63168

#### Parameters

##### data?

[`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md)

#### Returns

[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[`cost`](../interfaces/ISerpBingLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[`status_code`](../interfaces/ISerpBingLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[`status_message`](../interfaces/ISerpBingLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingLocationsCountryTaskInfo`](SerpBingLocationsCountryTaskInfo.md)[]

Defined in: main.ts:63164

array of tasks

#### Implementation of

[`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[`tasks`](../interfaces/ISerpBingLocationsCountryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[`time`](../interfaces/ISerpBingLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBingLocationsCountryResponseInfo`](../interfaces/ISerpBingLocationsCountryResponseInfo.md).[`version`](../interfaces/ISerpBingLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:63172

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

Defined in: main.ts:63194

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)

Defined in: main.ts:63187

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
