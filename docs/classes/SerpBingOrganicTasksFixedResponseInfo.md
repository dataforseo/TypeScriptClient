[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTasksFixedResponseInfo

# Class: SerpBingOrganicTasksFixedResponseInfo

Defined in: main.ts:64230

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTasksFixedResponseInfo()

> **new SerpBingOrganicTasksFixedResponseInfo**(`data`?): [`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

Defined in: main.ts:64236

#### Parameters

##### data?

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md)

#### Returns

[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingOrganicTasksFixedTaskInfo`](SerpBingOrganicTasksFixedTaskInfo.md)[]

Defined in: main.ts:64232

array of tasks

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:64240

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

Defined in: main.ts:64262

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

Defined in: main.ts:64255

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
