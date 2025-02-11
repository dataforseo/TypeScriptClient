[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeTaskGetResponseInfo

# Class: KeywordsDataBingSearchVolumeTaskGetResponseInfo

Defined in: main.ts:139491

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeTaskGetResponseInfo()

> **new KeywordsDataBingSearchVolumeTaskGetResponseInfo**(`data`?): [`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

Defined in: main.ts:139497

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingSearchVolumeTaskGetTaskInfo`](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md)[]

Defined in: main.ts:139493

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:139501

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

Defined in: main.ts:139523

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

Defined in: main.ts:139516

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
