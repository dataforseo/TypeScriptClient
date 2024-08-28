[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsBingSerpCompetitorsLiveResponseInfo

# Class: DataforseoLabsBingSerpCompetitorsLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingSerpCompetitorsLiveResponseInfo()

> **new DataforseoLabsBingSerpCompetitorsLiveResponseInfo**(`data`?): [`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:113710

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#cost)

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

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#status_code)

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

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsBingSerpCompetitorsLiveTaskInfo`](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:113706

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#version)

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

main.ts:113714

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

main.ts:113736

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:113729
