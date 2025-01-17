[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppInfoTaskGetAdvancedResponseInfo

# Class: AppDataAppleAppInfoTaskGetAdvancedResponseInfo

Defined in: main.ts:206979

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppInfoTaskGetAdvancedResponseInfo()

> **new AppDataAppleAppInfoTaskGetAdvancedResponseInfo**(`data`?): [`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:206985

#### Parameters

##### data?

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataAppleAppInfoTaskGetAdvancedTaskInfo`](AppDataAppleAppInfoTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:206981

array of tasks

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:206989

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

Defined in: main.ts:207011

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:207004

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
