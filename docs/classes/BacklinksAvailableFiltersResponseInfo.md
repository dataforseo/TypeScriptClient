[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksAvailableFiltersResponseInfo

# Class: BacklinksAvailableFiltersResponseInfo

Defined in: main.ts:149701

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksAvailableFiltersResponseInfo()

> **new BacklinksAvailableFiltersResponseInfo**(`data`?): [`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

Defined in: main.ts:149706

#### Parameters

##### data?

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md)

#### Returns

[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`cost`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`status_code`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`status_message`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksAvailableFiltersTaskInfo`](BacklinksAvailableFiltersTaskInfo.md)[]

Defined in: main.ts:149702

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`tasks`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`time`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`version`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149710

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

Defined in: main.ts:149732

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

Defined in: main.ts:149725

#### Parameters

##### data

`any`

#### Returns

[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
