[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksPageIntersectionLiveResponseInfo

# Class: BacklinksPageIntersectionLiveResponseInfo

Defined in: main.ts:159403

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageIntersectionLiveResponseInfo()

> **new BacklinksPageIntersectionLiveResponseInfo**(`data`?): [`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)

Defined in: main.ts:159409

#### Parameters

##### data?

[`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md)

#### Returns

[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksPageIntersectionLiveTaskInfo`](BacklinksPageIntersectionLiveTaskInfo.md)[]

Defined in: main.ts:159405

array of tasks

#### Implementation of

[`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md).[`time`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBacklinksPageIntersectionLiveResponseInfo`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md).[`version`](../interfaces/IBacklinksPageIntersectionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:159413

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

Defined in: main.ts:159435

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)

Defined in: main.ts:159428

#### Parameters

##### data

`any`

#### Returns

[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
