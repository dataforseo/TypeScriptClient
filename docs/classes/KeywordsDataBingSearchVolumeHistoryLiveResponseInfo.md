[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingSearchVolumeHistoryLiveResponseInfo

# Class: KeywordsDataBingSearchVolumeHistoryLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryLiveResponseInfo()

> **new KeywordsDataBingSearchVolumeHistoryLiveResponseInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:138535

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingSearchVolumeHistoryLiveTaskInfo`](KeywordsDataBingSearchVolumeHistoryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#tasks)

#### Defined in

main.ts:138531

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

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

main.ts:138539

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

main.ts:138561

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:138554
