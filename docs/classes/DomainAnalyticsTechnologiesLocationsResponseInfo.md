**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesLocationsResponseInfo

# Class: DomainAnalyticsTechnologiesLocationsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesLocationsResponseInfo(data)

> **new DomainAnalyticsTechnologiesLocationsResponseInfo**(`data`?): [`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:75831

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[`cost`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[`status_code`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[`status_message`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`DomainAnalyticsTechnologiesLocationsTaskInfo`](DomainAnalyticsTechnologiesLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[`tasks`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#tasks)

#### Source

main.ts:75827

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[`tasks_count`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[`tasks_error`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[`time`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IDomainAnalyticsTechnologiesLocationsResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md).[`version`](../interfaces/IDomainAnalyticsTechnologiesLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

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

main.ts:75835

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

main.ts:75857

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:75850
