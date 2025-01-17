[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppSearchesTasksReadyResponseInfo

# Class: AppDataAppleAppSearchesTasksReadyResponseInfo

Defined in: main.ts:205759

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppSearchesTasksReadyResponseInfo()

> **new AppDataAppleAppSearchesTasksReadyResponseInfo**(`data`?): [`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)

Defined in: main.ts:205765

#### Parameters

##### data?

[`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md)

#### Returns

[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataAppleAppSearchesTasksReadyTaskInfo`](AppDataAppleAppSearchesTasksReadyTaskInfo.md)[]

Defined in: main.ts:205761

array of tasks

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:205769

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

Defined in: main.ts:205791

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)

Defined in: main.ts:205784

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
