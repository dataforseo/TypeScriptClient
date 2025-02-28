[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo

# Class: KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo

Defined in: main.ts:146491

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo()

> **new KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)

Defined in: main.ts:146497

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingSearchVolumeHistoryTaskPostTaskInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostTaskInfo.md)[]

Defined in: main.ts:146493

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146501

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

Defined in: main.ts:146523

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)

Defined in: main.ts:146516

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
