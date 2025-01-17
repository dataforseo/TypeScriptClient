[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo

Defined in: main.ts:96349

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo()

> **new DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

Defined in: main.ts:96355

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md)[]

Defined in: main.ts:96351

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:96359

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

Defined in: main.ts:96381

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

Defined in: main.ts:96374

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
