**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskPostResponseInfo

# Class: AppDataGoogleAppReviewsTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskPostResponseInfo(data)

> **new AppDataGoogleAppReviewsTaskPostResponseInfo**(`data`?): [`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:189545

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23214

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23207

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23210

***

### tasks?

> **`optional`** **tasks**: [`AppDataGoogleAppReviewsTaskPostTaskInfo`](AppDataGoogleAppReviewsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#tasks)

#### Source

main.ts:189541

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23216

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23218

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23212

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataGoogleAppReviewsTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppReviewsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23204

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

main.ts:189549

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

main.ts:189571

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:189564
