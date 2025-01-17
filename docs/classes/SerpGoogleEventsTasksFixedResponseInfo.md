[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsTasksFixedResponseInfo

# Class: SerpGoogleEventsTasksFixedResponseInfo

Defined in: main.ts:48690

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTasksFixedResponseInfo()

> **new SerpGoogleEventsTasksFixedResponseInfo**(`data`?): [`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

Defined in: main.ts:48696

#### Parameters

##### data?

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md)

#### Returns

[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleEventsTasksFixedTaskInfo`](SerpGoogleEventsTasksFixedTaskInfo.md)[]

Defined in: main.ts:48692

array of tasks

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:48700

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

Defined in: main.ts:48722

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

Defined in: main.ts:48715

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
