[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BacklinksTimeseriesSummaryLiveResponseInfo

# Class: BacklinksTimeseriesSummaryLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesSummaryLiveResponseInfo()

> **new BacklinksTimeseriesSummaryLiveResponseInfo**(`data`?): [`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)

#### Parameters

• **data?**: [`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md)

#### Returns

[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:151569

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md#cost)

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

[`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md#status_code)

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

[`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`BacklinksTimeseriesSummaryLiveTaskInfo`](BacklinksTimeseriesSummaryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md#tasks)

#### Defined in

main.ts:151565

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md).[`time`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md).[`version`](../interfaces/IBacklinksTimeseriesSummaryLiveResponseInfo.md#version)

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

main.ts:151573

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

main.ts:151595

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:151588
