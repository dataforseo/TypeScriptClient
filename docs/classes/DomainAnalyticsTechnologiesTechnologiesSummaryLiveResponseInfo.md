[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo

# Class: DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo()

> **new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo**(`data`?): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:77229

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[`cost`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#cost)

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

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[`status_code`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#status_code)

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

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[`status_message`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[`tasks`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tasks)

#### Defined in

main.ts:77225

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[`tasks_count`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[`tasks_error`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[`time`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[`version`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#version)

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

main.ts:77233

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

main.ts:77255

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:77248
