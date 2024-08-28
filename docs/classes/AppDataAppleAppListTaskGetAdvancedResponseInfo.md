[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppDataAppleAppListTaskGetAdvancedResponseInfo

# Class: AppDataAppleAppListTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTaskGetAdvancedResponseInfo()

> **new AppDataAppleAppListTaskGetAdvancedResponseInfo**(`data`?): [`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:199906

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`AppDataAppleAppListTaskGetAdvancedTaskInfo`](AppDataAppleAppListTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:199902

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:199910

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:199932

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:199925
