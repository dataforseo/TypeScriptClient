[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotSearchTasksReadyResponseInfo

# Class: BusinessDataTrustpilotSearchTasksReadyResponseInfo

Defined in: main.ts:226393

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotSearchTasksReadyResponseInfo()

> **new BusinessDataTrustpilotSearchTasksReadyResponseInfo**(`data`?): [`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

Defined in: main.ts:226399

#### Parameters

##### data?

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTrustpilotSearchTasksReadyTaskInfo`](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md)[]

Defined in: main.ts:226395

array of tasks

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:226403

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

Defined in: main.ts:226425

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

Defined in: main.ts:226418

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
