**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo(data)

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:102238

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks)

#### Source

main.ts:102234

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

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

main.ts:102242

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

main.ts:102264

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:102257
