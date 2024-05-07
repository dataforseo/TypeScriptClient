**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo(data)

> **new DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo**(`data`?): [`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:105762

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#tasks)

#### Source

main.ts:105758

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23311

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:105766

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:105788

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:105781
