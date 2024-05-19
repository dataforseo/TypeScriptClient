**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotSearchTasksReadyResponseInfo

# Class: BusinessDataTrustpilotSearchTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotSearchTasksReadyResponseInfo(data)

> **new BusinessDataTrustpilotSearchTasksReadyResponseInfo**(`data`?): [`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:208395

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23401

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23394

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23397

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataTrustpilotSearchTasksReadyTaskInfo`](BusinessDataTrustpilotSearchTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:208391

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23403

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23405

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23399

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23391

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

main.ts:208399

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

main.ts:208421

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:208414
