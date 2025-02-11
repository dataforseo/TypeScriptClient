[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataIdListResponseInfo

# Class: KeywordsDataIdListResponseInfo

Defined in: main.ts:125683

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataIdListResponseInfo()

> **new KeywordsDataIdListResponseInfo**(`data`?): [`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)

Defined in: main.ts:125689

#### Parameters

##### data?

[`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md)

#### Returns

[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md).[`cost`](../interfaces/IKeywordsDataIdListResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataIdListResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataIdListTaskInfo`](KeywordsDataIdListTaskInfo.md)[]

Defined in: main.ts:125685

array of tasks

#### Implementation of

[`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataIdListResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md).[`time`](../interfaces/IKeywordsDataIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md).[`version`](../interfaces/IKeywordsDataIdListResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:125693

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

Defined in: main.ts:125715

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)

Defined in: main.ts:125708

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
