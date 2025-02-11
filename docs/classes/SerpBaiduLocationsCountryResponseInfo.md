[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduLocationsCountryResponseInfo

# Class: SerpBaiduLocationsCountryResponseInfo

Defined in: main.ts:78711

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduLocationsCountryResponseInfo()

> **new SerpBaiduLocationsCountryResponseInfo**(`data`?): [`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

Defined in: main.ts:78717

#### Parameters

##### data?

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md)

#### Returns

[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`cost`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBaiduLocationsCountryTaskInfo`](SerpBaiduLocationsCountryTaskInfo.md)[]

Defined in: main.ts:78713

array of tasks

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`time`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`version`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:78721

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

Defined in: main.ts:78743

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

Defined in: main.ts:78736

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
