[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo

# Class: KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo

Defined in: main.ts:148561

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo()

> **new KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo**(`data`?): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)

Defined in: main.ts:148567

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveTaskInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveTaskInfo.md)[]

Defined in: main.ts:148563

array of tasks

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148571

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

Defined in: main.ts:148593

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)

Defined in: main.ts:148586

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
