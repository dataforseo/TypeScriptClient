[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo

Defined in: main.ts:105505

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo()

> **new DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

Defined in: main.ts:105511

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md)[]

Defined in: main.ts:105507

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:105515

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

Defined in: main.ts:105537

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

Defined in: main.ts:105530

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
