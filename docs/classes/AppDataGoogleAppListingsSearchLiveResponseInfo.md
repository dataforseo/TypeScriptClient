**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppListingsSearchLiveResponseInfo

# Class: AppDataGoogleAppListingsSearchLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListingsSearchLiveResponseInfo(data)

> **new AppDataGoogleAppListingsSearchLiveResponseInfo**(`data`?): [`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md)

#### Returns

[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:194964

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md#cost)

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

[`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md#status_code)

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

[`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`AppDataGoogleAppListingsSearchLiveTaskInfo`](AppDataGoogleAppListingsSearchLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md#tasks)

#### Source

main.ts:194960

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppListingsSearchLiveResponseInfo.md#version)

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

main.ts:194968

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

main.ts:194990

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:194983
