[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpSeznamOrganicTasksReadyResponseInfo

# Class: SerpSeznamOrganicTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTasksReadyResponseInfo()

> **new SerpSeznamOrganicTasksReadyResponseInfo**(`data`?): [`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md)

#### Returns

[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:73627

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#cost)

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

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#status_code)

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

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`SerpSeznamOrganicTasksReadyTaskInfo`](SerpSeznamOrganicTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:73623

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpSeznamOrganicTasksReadyResponseInfo`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpSeznamOrganicTasksReadyResponseInfo.md#version)

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

main.ts:73631

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

main.ts:73653

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:73646
