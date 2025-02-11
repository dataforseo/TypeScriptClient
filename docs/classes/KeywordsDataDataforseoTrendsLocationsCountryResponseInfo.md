[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsLocationsCountryResponseInfo

# Class: KeywordsDataDataforseoTrendsLocationsCountryResponseInfo

Defined in: main.ts:135877

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsLocationsCountryResponseInfo()

> **new KeywordsDataDataforseoTrendsLocationsCountryResponseInfo**(`data`?): [`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

Defined in: main.ts:135883

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`cost`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataDataforseoTrendsLocationsCountryTaskInfo`](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md)[]

Defined in: main.ts:135879

array of tasks

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`time`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`version`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:135887

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

Defined in: main.ts:135909

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

Defined in: main.ts:135902

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
