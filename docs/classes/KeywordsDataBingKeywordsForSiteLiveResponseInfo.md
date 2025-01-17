[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteLiveResponseInfo

# Class: KeywordsDataBingKeywordsForSiteLiveResponseInfo

Defined in: main.ts:142749

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteLiveResponseInfo()

> **new KeywordsDataBingKeywordsForSiteLiveResponseInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

Defined in: main.ts:142755

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordsForSiteLiveTaskInfo`](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md)[]

Defined in: main.ts:142751

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:142759

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

Defined in: main.ts:142781

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

Defined in: main.ts:142774

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
