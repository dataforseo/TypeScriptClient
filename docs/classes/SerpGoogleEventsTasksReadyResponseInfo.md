[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleEventsTasksReadyResponseInfo

# Class: SerpGoogleEventsTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTasksReadyResponseInfo()

> **new SerpGoogleEventsTasksReadyResponseInfo**(`data`?): [`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md)

#### Returns

[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:45634

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`SerpGoogleEventsTasksReadyTaskInfo`](SerpGoogleEventsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:45630

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleEventsTasksReadyResponseInfo`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpGoogleEventsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

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

main.ts:45638

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

main.ts:45660

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:45653
