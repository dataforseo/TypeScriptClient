[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTaskGetResponseInfo

# Class: BusinessDataGoogleReviewsTaskGetResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTaskGetResponseInfo()

> **new BusinessDataGoogleReviewsTaskGetResponseInfo**(`data`?): [`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:213610

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#cost)

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

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#status_code)

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

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleReviewsTaskGetTaskInfo`](BusinessDataGoogleReviewsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:213606

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#version)

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

main.ts:213614

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

main.ts:213636

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:213629
