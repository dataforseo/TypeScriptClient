[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo

# Class: AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo

Defined in: main.ts:200695

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo()

> **new AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo**(`data`?): [`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:200701

#### Parameters

##### data?

[`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo`](AppDataGoogleAppSearchesTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:200697

array of tasks

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:200705

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

Defined in: main.ts:200727

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:200720

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
