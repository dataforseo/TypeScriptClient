[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooLocationsCountryResponseInfo

# Class: SerpYahooLocationsCountryResponseInfo

Defined in: main.ts:74985

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLocationsCountryResponseInfo()

> **new SerpYahooLocationsCountryResponseInfo**(`data`?): [`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)

Defined in: main.ts:74991

#### Parameters

##### data?

[`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md)

#### Returns

[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[`cost`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[`status_code`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[`status_message`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYahooLocationsCountryTaskInfo`](SerpYahooLocationsCountryTaskInfo.md)[]

Defined in: main.ts:74987

array of tasks

#### Implementation of

[`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[`tasks`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[`time`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYahooLocationsCountryResponseInfo`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md).[`version`](../interfaces/ISerpYahooLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:74995

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

Defined in: main.ts:75017

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)

Defined in: main.ts:75010

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
