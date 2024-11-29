[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleExtendedReviewsTaskPostResponseInfo

# Class: BusinessDataGoogleExtendedReviewsTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleExtendedReviewsTaskPostResponseInfo()

> **new BusinessDataGoogleExtendedReviewsTaskPostResponseInfo**(`data`?): [`BusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](BusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)

#### Returns

[`BusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](BusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:222893

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:25217

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:25210

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleExtendedReviewsTaskPostTaskInfo`](BusinessDataGoogleExtendedReviewsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:222889

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:25207

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:222897

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:222919

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](BusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](BusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:222912
