[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTasksReadyResponseInfo

# Class: BusinessDataTasksReadyResponseInfo

Defined in: main.ts:214173

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTasksReadyResponseInfo()

> **new BusinessDataTasksReadyResponseInfo**(`data`?): [`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)

Defined in: main.ts:214179

#### Parameters

##### data?

[`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTasksReadyTaskInfo`](BusinessDataTasksReadyTaskInfo.md)[]

Defined in: main.ts:214175

array of tasks

#### Implementation of

[`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataTasksReadyResponseInfo`](../interfaces/IBusinessDataTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:214183

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

Defined in: main.ts:214205

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)

Defined in: main.ts:214198

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
