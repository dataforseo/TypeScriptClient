**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTasksReadyResponseInfo

# Class: AppDataGoogleAppSearchesTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTasksReadyResponseInfo(data)

> **new AppDataGoogleAppSearchesTasksReadyResponseInfo**(`data`?): [`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:183348

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23029

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23022

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23025

***

### tasks?

> **`optional`** **tasks**: [`AppDataGoogleAppSearchesTasksReadyTaskInfo`](AppDataGoogleAppSearchesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:183344

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23031

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23033

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23027

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23019

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:183352

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:183374

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:183367
