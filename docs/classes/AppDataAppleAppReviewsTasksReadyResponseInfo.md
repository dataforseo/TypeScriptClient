[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppReviewsTasksReadyResponseInfo

# Class: AppDataAppleAppReviewsTasksReadyResponseInfo

Defined in: main.ts:208825

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppReviewsTasksReadyResponseInfo()

> **new AppDataAppleAppReviewsTasksReadyResponseInfo**(`data`?): [`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)

Defined in: main.ts:208831

#### Parameters

##### data?

[`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md)

#### Returns

[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataAppleAppReviewsTasksReadyTaskInfo`](AppDataAppleAppReviewsTasksReadyTaskInfo.md)[]

Defined in: main.ts:208827

array of tasks

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppReviewsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:208835

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

Defined in: main.ts:208857

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)

Defined in: main.ts:208850

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
