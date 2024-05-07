**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTaskPostResponseInfo

# Class: BusinessDataTrustpilotReviewsTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTaskPostResponseInfo(data)

> **new BusinessDataTrustpilotReviewsTaskPostResponseInfo**(`data`?): [`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:208455

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataTrustpilotReviewsTaskPostTaskInfo`](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tasks)

#### Source

main.ts:208451

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23311

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

main.ts:208459

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

main.ts:208481

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:208474
