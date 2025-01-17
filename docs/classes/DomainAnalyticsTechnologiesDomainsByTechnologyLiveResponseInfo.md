[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo

# Class: DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo

Defined in: main.ts:88061

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo()

> **new DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo**(`data`?): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

Defined in: main.ts:88067

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[`cost`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[`status_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[`status_message`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveTaskInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveTaskInfo.md)[]

Defined in: main.ts:88063

array of tasks

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[`tasks`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[`tasks_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[`tasks_error`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[`time`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[`version`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88071

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

Defined in: main.ts:88093

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

Defined in: main.ts:88086

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
