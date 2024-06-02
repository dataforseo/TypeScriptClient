**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTasksReadyResponseInfo

# Class: BusinessDataGoogleReviewsTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTasksReadyResponseInfo(data)

> **new BusinessDataGoogleReviewsTasksReadyResponseInfo**(`data`?): [`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:205957

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23060

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23053

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23056

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataGoogleReviewsTasksReadyTaskInfo`](BusinessDataGoogleReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:205953

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23062

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23064

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23058

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23050

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

main.ts:205961

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

main.ts:205983

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:205976
