[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTaskGetHtmlResponseInfo

# Class: AppDataGoogleAppSearchesTaskGetHtmlResponseInfo

Defined in: main.ts:200911

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTaskGetHtmlResponseInfo()

> **new AppDataGoogleAppSearchesTaskGetHtmlResponseInfo**(`data`?): [`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

Defined in: main.ts:200917

#### Parameters

##### data?

[`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleAppSearchesTaskGetHtmlTaskInfo`](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:200913

array of tasks

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:200921

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

Defined in: main.ts:200943

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

Defined in: main.ts:200936

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
