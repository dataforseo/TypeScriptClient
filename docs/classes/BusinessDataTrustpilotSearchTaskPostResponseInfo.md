[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotSearchTaskPostResponseInfo

# Class: BusinessDataTrustpilotSearchTaskPostResponseInfo

Defined in: main.ts:225691

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotSearchTaskPostResponseInfo()

> **new BusinessDataTrustpilotSearchTaskPostResponseInfo**(`data`?): [`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

Defined in: main.ts:225697

#### Parameters

##### data?

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Returns

[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTrustpilotSearchTaskPostTaskInfo`](BusinessDataTrustpilotSearchTaskPostTaskInfo.md)[]

Defined in: main.ts:225693

array of tasks

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:225701

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

Defined in: main.ts:225723

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

Defined in: main.ts:225716

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
