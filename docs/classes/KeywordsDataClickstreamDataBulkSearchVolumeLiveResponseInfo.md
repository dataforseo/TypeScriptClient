[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo

# Class: KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo

Defined in: main.ts:148701

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo()

> **new KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo**(`data`?): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

Defined in: main.ts:148707

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataClickstreamDataBulkSearchVolumeLiveTaskInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveTaskInfo.md)[]

Defined in: main.ts:148703

array of tasks

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148711

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

Defined in: main.ts:148733

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

Defined in: main.ts:148726

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
