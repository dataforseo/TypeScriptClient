**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsErrorsResponseInfo

# Class: DomainAnalyticsErrorsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsErrorsResponseInfo(data)

> **new DomainAnalyticsErrorsResponseInfo**(`data`?): [`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md)

#### Returns

[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:74886

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md).[`cost`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md).[`status_code`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md).[`status_message`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`DomainAnalyticsErrorsTaskInfo`](DomainAnalyticsErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md).[`tasks`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md#tasks)

#### Source

main.ts:74882

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md).[`tasks_count`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md).[`tasks_error`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md).[`time`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IDomainAnalyticsErrorsResponseInfo`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md).[`version`](../interfaces/IDomainAnalyticsErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23311

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

main.ts:74890

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

main.ts:74912

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:74905
