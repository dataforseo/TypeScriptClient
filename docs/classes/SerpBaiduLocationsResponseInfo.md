[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduLocationsResponseInfo

# Class: SerpBaiduLocationsResponseInfo

Defined in: main.ts:78485

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduLocationsResponseInfo()

> **new SerpBaiduLocationsResponseInfo**(`data`?): [`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

Defined in: main.ts:78491

#### Parameters

##### data?

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md)

#### Returns

[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`cost`](../interfaces/ISerpBaiduLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBaiduLocationsTaskInfo`](SerpBaiduLocationsTaskInfo.md)[]

Defined in: main.ts:78487

array of tasks

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`time`](../interfaces/ISerpBaiduLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`version`](../interfaces/ISerpBaiduLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:78495

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

Defined in: main.ts:78517

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

Defined in: main.ts:78510

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
