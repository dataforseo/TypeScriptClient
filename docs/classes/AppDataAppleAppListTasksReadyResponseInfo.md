[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListTasksReadyResponseInfo

# Class: AppDataAppleAppListTasksReadyResponseInfo

Defined in: main.ts:208039

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTasksReadyResponseInfo()

> **new AppDataAppleAppListTasksReadyResponseInfo**(`data`?): [`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

Defined in: main.ts:208045

#### Parameters

##### data?

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md)

#### Returns

[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataAppleAppListTasksReadyTaskInfo`](AppDataAppleAppListTasksReadyTaskInfo.md)[]

Defined in: main.ts:208041

array of tasks

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:208049

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

Defined in: main.ts:208071

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

Defined in: main.ts:208064

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
