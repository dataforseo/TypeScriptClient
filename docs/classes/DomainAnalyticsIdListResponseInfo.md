[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsIdListResponseInfo

# Class: DomainAnalyticsIdListResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsIdListResponseInfo()

> **new DomainAnalyticsIdListResponseInfo**(`data`?): [`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md)

#### Returns

[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:74900

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[`cost`](../interfaces/IDomainAnalyticsIdListResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[`status_code`](../interfaces/IDomainAnalyticsIdListResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[`status_message`](../interfaces/IDomainAnalyticsIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`DomainAnalyticsIdListTaskInfo`](DomainAnalyticsIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[`tasks`](../interfaces/IDomainAnalyticsIdListResponseInfo.md#tasks)

#### Defined in

main.ts:74896

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[`tasks_count`](../interfaces/IDomainAnalyticsIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[`tasks_error`](../interfaces/IDomainAnalyticsIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[`time`](../interfaces/IDomainAnalyticsIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[`version`](../interfaces/IDomainAnalyticsIdListResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

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

main.ts:74904

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

main.ts:74926

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:74919
