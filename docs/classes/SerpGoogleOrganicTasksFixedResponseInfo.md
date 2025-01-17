[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTasksFixedResponseInfo

# Class: SerpGoogleOrganicTasksFixedResponseInfo

Defined in: main.ts:28502

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTasksFixedResponseInfo()

> **new SerpGoogleOrganicTasksFixedResponseInfo**(`data`?): [`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)

Defined in: main.ts:28508

#### Parameters

##### data?

[`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md)

#### Returns

[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleOrganicTasksFixedTaskInfo`](SerpGoogleOrganicTasksFixedTaskInfo.md)[]

Defined in: main.ts:28504

array of tasks

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResponseInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpGoogleOrganicTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:28512

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

Defined in: main.ts:28534

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)

Defined in: main.ts:28527

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
