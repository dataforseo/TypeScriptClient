[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo

# Class: KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo()

> **new KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo**(`data`?): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:137401

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`KeywordsDataClickstreamDataBulkSearchVolumeLiveTaskInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#tasks)

#### Defined in

main.ts:137397

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:137405

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:137427

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:137420
