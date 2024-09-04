[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo()

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:102846

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#cost)

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

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_code)

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

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks)

#### Defined in

main.ts:102842

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#version)

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

main.ts:102850

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

main.ts:102872

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:102865
