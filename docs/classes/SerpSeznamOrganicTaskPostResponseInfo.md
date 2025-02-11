[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskPostResponseInfo

# Class: SerpSeznamOrganicTaskPostResponseInfo

Defined in: main.ts:83133

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskPostResponseInfo()

> **new SerpSeznamOrganicTaskPostResponseInfo**(`data`?): [`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)

Defined in: main.ts:83139

#### Parameters

##### data?

[`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md)

#### Returns

[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpSeznamOrganicTaskPostTaskInfo`](SerpSeznamOrganicTaskPostTaskInfo.md)[]

Defined in: main.ts:83135

array of tasks

#### Implementation of

[`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[`time`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpSeznamOrganicTaskPostResponseInfo`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md).[`version`](../interfaces/ISerpSeznamOrganicTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:83143

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

Defined in: main.ts:83165

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)

Defined in: main.ts:83158

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
