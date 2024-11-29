[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseTasksReadyResponseInfo

# Class: OnPageLighthouseTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseTasksReadyResponseInfo()

> **new OnPageLighthouseTasksReadyResponseInfo**(`data`?): [`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Parameters

##### data?

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md)

#### Returns

[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:175821

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#cost)

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

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#status_code)

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

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`OnPageLighthouseTasksReadyTaskInfo`](OnPageLighthouseTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:175817

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#version)

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

main.ts:175825

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

main.ts:175847

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:175840
