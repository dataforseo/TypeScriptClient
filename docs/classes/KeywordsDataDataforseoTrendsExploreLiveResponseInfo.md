[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsExploreLiveResponseInfo

# Class: KeywordsDataDataforseoTrendsExploreLiveResponseInfo

Defined in: main.ts:136343

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsExploreLiveResponseInfo()

> **new KeywordsDataDataforseoTrendsExploreLiveResponseInfo**(`data`?): [`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

Defined in: main.ts:136349

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataDataforseoTrendsExploreLiveTaskInfo`](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md)[]

Defined in: main.ts:136345

array of tasks

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:136353

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

Defined in: main.ts:136375

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

Defined in: main.ts:136368

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
