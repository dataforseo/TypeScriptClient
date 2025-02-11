[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTaskGetResponseInfo

# Class: BusinessDataTrustpilotReviewsTaskGetResponseInfo

Defined in: main.ts:227605

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTaskGetResponseInfo()

> **new BusinessDataTrustpilotReviewsTaskGetResponseInfo**(`data`?): [`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

Defined in: main.ts:227611

#### Parameters

##### data?

[`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[`cost`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTrustpilotReviewsTaskGetTaskInfo`](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md)[]

Defined in: main.ts:227607

array of tasks

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[`time`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md).[`version`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227615

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

Defined in: main.ts:227637

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

Defined in: main.ts:227630

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
