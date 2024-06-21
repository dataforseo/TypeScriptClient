**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTasksReadyResponseInfo

# Class: SerpGoogleSearchByImageTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTasksReadyResponseInfo(data)

> **new SerpGoogleSearchByImageTasksReadyResponseInfo**(`data`?): [`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md)

#### Returns

[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:49873

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleSearchByImageTasksReadyTaskInfo`](SerpGoogleSearchByImageTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:49869

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

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

main.ts:49877

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

main.ts:49899

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:49892
