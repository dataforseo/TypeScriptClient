**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleAppListTasksReadyResponseInfo

# Class: AppDataAppleAppListTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTasksReadyResponseInfo(data)

> **new AppDataAppleAppListTasksReadyResponseInfo**(`data`?): [`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md)

#### Returns

[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:197846

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`AppDataAppleAppListTasksReadyTaskInfo`](AppDataAppleAppListTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:197842

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

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

main.ts:197850

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

main.ts:197872

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:197865
