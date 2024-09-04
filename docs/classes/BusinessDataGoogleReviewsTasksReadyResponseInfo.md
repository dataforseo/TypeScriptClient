[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleReviewsTasksReadyResponseInfo

# Class: BusinessDataGoogleReviewsTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTasksReadyResponseInfo()

> **new BusinessDataGoogleReviewsTasksReadyResponseInfo**(`data`?): [`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:208376

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleReviewsTasksReadyTaskInfo`](BusinessDataGoogleReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:208372

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

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

main.ts:208380

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

main.ts:208402

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:208395
