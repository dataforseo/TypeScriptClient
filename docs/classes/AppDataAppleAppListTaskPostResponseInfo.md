[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListTaskPostResponseInfo

# Class: AppDataAppleAppListTaskPostResponseInfo

Defined in: main.ts:207337

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTaskPostResponseInfo()

> **new AppDataAppleAppListTaskPostResponseInfo**(`data`?): [`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)

Defined in: main.ts:207343

#### Parameters

##### data?

[`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md)

#### Returns

[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataAppleAppListTaskPostTaskInfo`](AppDataAppleAppListTaskPostTaskInfo.md)[]

Defined in: main.ts:207339

array of tasks

#### Implementation of

[`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataAppleAppListTaskPostResponseInfo`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppListTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:207347

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

Defined in: main.ts:207369

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)

Defined in: main.ts:207362

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
