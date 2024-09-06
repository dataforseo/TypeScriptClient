[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo()

> **new DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:86571

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24152

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24145

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks)

#### Defined in

main.ts:86567

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24142

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

main.ts:86575

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

main.ts:86597

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:86590
