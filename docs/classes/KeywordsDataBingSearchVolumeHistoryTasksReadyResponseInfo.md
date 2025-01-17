[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo

# Class: KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo

Defined in: main.ts:146519

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo()

> **new KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)

Defined in: main.ts:146525

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingSearchVolumeHistoryTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyTaskInfo.md)[]

Defined in: main.ts:146521

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146529

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

Defined in: main.ts:146551

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)

Defined in: main.ts:146544

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
