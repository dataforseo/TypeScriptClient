**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleAppInfoTaskGetAdvancedResponseInfo

# Class: AppDataAppleAppInfoTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppInfoTaskGetAdvancedResponseInfo(data)

> **new AppDataAppleAppInfoTaskGetAdvancedResponseInfo**(`data`?): [`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:197292

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#cost)

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

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#status_code)

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

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`AppDataAppleAppInfoTaskGetAdvancedTaskInfo`](AppDataAppleAppInfoTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#tasks)

#### Source

main.ts:197288

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#version)

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

main.ts:197296

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

main.ts:197318

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:197311
