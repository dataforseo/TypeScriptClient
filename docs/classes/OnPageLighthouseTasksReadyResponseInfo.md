[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseTasksReadyResponseInfo

# Class: OnPageLighthouseTasksReadyResponseInfo

Defined in: main.ts:176247

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseTasksReadyResponseInfo()

> **new OnPageLighthouseTasksReadyResponseInfo**(`data`?): [`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

Defined in: main.ts:176253

#### Parameters

##### data?

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md)

#### Returns

[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageLighthouseTasksReadyTaskInfo`](OnPageLighthouseTasksReadyTaskInfo.md)[]

Defined in: main.ts:176249

array of tasks

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:176257

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

Defined in: main.ts:176279

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

Defined in: main.ts:176272

#### Parameters

##### data

`any`

#### Returns

[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
