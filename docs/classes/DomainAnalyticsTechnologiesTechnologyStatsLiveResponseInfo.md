[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo

Defined in: main.ts:87355

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo()

> **new DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo**(`data`?): [`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

Defined in: main.ts:87361

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[`cost`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[`status_code`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[`status_message`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md)[]

Defined in: main.ts:87357

array of tasks

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[`tasks`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[`time`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[`version`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:87365

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

Defined in: main.ts:87387

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

Defined in: main.ts:87380

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
