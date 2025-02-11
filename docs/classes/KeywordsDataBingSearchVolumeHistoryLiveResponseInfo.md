[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryLiveResponseInfo

# Class: KeywordsDataBingSearchVolumeHistoryLiveResponseInfo

Defined in: main.ts:147519

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryLiveResponseInfo()

> **new KeywordsDataBingSearchVolumeHistoryLiveResponseInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

Defined in: main.ts:147525

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingSearchVolumeHistoryLiveTaskInfo`](KeywordsDataBingSearchVolumeHistoryLiveTaskInfo.md)[]

Defined in: main.ts:147521

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:147529

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

Defined in: main.ts:147551

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

Defined in: main.ts:147544

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
