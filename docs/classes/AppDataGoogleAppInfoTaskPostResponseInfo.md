[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppInfoTaskPostResponseInfo

# Class: AppDataGoogleAppInfoTaskPostResponseInfo

Defined in: main.ts:201745

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTaskPostResponseInfo()

> **new AppDataGoogleAppInfoTaskPostResponseInfo**(`data`?): [`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)

Defined in: main.ts:201751

#### Parameters

##### data?

[`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md)

#### Returns

[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleAppInfoTaskPostTaskInfo`](AppDataGoogleAppInfoTaskPostTaskInfo.md)[]

Defined in: main.ts:201747

array of tasks

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppInfoTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:201755

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

Defined in: main.ts:201777

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)

Defined in: main.ts:201770

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
