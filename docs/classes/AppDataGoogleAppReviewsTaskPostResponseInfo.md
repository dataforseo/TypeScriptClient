[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskPostResponseInfo

# Class: AppDataGoogleAppReviewsTaskPostResponseInfo

Defined in: main.ts:203613

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskPostResponseInfo()

> **new AppDataGoogleAppReviewsTaskPostResponseInfo**(`data`?): [`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)

Defined in: main.ts:203619

#### Parameters

##### data?

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleAppReviewsTaskPostTaskInfo`](AppDataGoogleAppReviewsTaskPostTaskInfo.md)[]

Defined in: main.ts:203615

array of tasks

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:203623

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

Defined in: main.ts:203645

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)

Defined in: main.ts:203638

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
