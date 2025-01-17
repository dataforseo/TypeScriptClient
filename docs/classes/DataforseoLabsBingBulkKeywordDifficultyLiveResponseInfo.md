[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo

Defined in: main.ts:115585

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo()

> **new DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo**(`data`?): [`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

Defined in: main.ts:115591

#### Parameters

##### data?

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md)[]

Defined in: main.ts:115587

array of tasks

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115595

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

Defined in: main.ts:115617

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

Defined in: main.ts:115610

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
