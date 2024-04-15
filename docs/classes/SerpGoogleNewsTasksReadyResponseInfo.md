**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleNewsTasksReadyResponseInfo

# Class: SerpGoogleNewsTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTasksReadyResponseInfo(data)

> **new SerpGoogleNewsTasksReadyResponseInfo**(`data`?): [`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md)

#### Returns

[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:42996

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23029

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23022

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23025

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleNewsTasksReadyTaskInfo`](SerpGoogleNewsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:42992

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23031

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23033

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23027

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleNewsTasksReadyResponseInfo`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpGoogleNewsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23019

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

main.ts:43000

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

main.ts:43022

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:43015
