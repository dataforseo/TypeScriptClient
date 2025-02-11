[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesAvailableFiltersResponseInfo

# Class: DomainAnalyticsTechnologiesAvailableFiltersResponseInfo

Defined in: main.ts:85225

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesAvailableFiltersResponseInfo()

> **new DomainAnalyticsTechnologiesAvailableFiltersResponseInfo**(`data`?): [`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

Defined in: main.ts:85230

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[`cost`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[`status_code`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[`status_message`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DomainAnalyticsTechnologiesAvailableFiltersTaskInfo`](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md)[]

Defined in: main.ts:85226

#### Implementation of

[`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[`tasks`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[`tasks_count`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[`tasks_error`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[`time`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[`version`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:85234

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

Defined in: main.ts:85256

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

Defined in: main.ts:85249

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
