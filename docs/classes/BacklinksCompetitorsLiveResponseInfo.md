[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksCompetitorsLiveResponseInfo

# Class: BacklinksCompetitorsLiveResponseInfo

Defined in: main.ts:157397

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksCompetitorsLiveResponseInfo()

> **new BacklinksCompetitorsLiveResponseInfo**(`data`?): [`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

Defined in: main.ts:157403

#### Parameters

##### data?

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md)

#### Returns

[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksCompetitorsLiveTaskInfo`](BacklinksCompetitorsLiveTaskInfo.md)[]

Defined in: main.ts:157399

array of tasks

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`time`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`version`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:157407

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

Defined in: main.ts:157429

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

Defined in: main.ts:157422

#### Parameters

##### data

`any`

#### Returns

[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
