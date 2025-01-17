[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTaskPostResponseInfo

# Class: SerpGoogleOrganicTaskPostResponseInfo

Defined in: main.ts:27866

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTaskPostResponseInfo()

> **new SerpGoogleOrganicTaskPostResponseInfo**(`data`?): [`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)

Defined in: main.ts:27872

#### Parameters

##### data?

[`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md)

#### Returns

[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleOrganicTaskPostTaskInfo`](SerpGoogleOrganicTaskPostTaskInfo.md)[]

Defined in: main.ts:27868

array of tasks

#### Implementation of

[`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:27876

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

Defined in: main.ts:27898

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)

Defined in: main.ts:27891

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
