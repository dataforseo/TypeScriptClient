[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpNaverOrganicTasksReadyResponseInfo

# Class: SerpNaverOrganicTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTasksReadyResponseInfo()

> **new SerpNaverOrganicTasksReadyResponseInfo**(`data`?): [`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md)

#### Returns

[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:71449

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24152

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24145

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`SerpNaverOrganicTasksReadyTaskInfo`](SerpNaverOrganicTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:71445

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24142

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:71453

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:71475

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:71468
