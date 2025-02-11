[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionLiveResponseInfo

# Class: BacklinksDomainIntersectionLiveResponseInfo

Defined in: main.ts:158365

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionLiveResponseInfo()

> **new BacklinksDomainIntersectionLiveResponseInfo**(`data`?): [`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)

Defined in: main.ts:158371

#### Parameters

##### data?

[`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md)

#### Returns

[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksDomainIntersectionLiveTaskInfo`](BacklinksDomainIntersectionLiveTaskInfo.md)[]

Defined in: main.ts:158367

array of tasks

#### Implementation of

[`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[`time`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[`version`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:158375

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

Defined in: main.ts:158397

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)

Defined in: main.ts:158390

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
