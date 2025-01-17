[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo

# Class: KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo

Defined in: main.ts:146903

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo()

> **new KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)

Defined in: main.ts:146909

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingSearchVolumeHistoryTaskGetTaskInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetTaskInfo.md)[]

Defined in: main.ts:146905

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146913

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

Defined in: main.ts:146935

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)

Defined in: main.ts:146928

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
