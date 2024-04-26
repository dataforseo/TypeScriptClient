**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleAppSearchesTaskPostResponseInfo

# Class: AppDataAppleAppSearchesTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppSearchesTaskPostResponseInfo(data)

> **new AppDataAppleAppSearchesTaskPostResponseInfo**(`data`?): [`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md)

#### Returns

[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:189850

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23157

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23150

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23153

***

### tasks?

> **`optional`** **tasks**: [`AppDataAppleAppSearchesTaskPostTaskInfo`](AppDataAppleAppSearchesTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#tasks)

#### Source

main.ts:189846

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23159

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23161

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23155

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23147

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

main.ts:189854

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

main.ts:189876

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:189869
