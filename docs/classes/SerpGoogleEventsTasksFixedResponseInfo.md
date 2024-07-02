**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleEventsTasksFixedResponseInfo

# Class: SerpGoogleEventsTasksFixedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTasksFixedResponseInfo(data)

> **new SerpGoogleEventsTasksFixedResponseInfo**(`data`?): [`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md)

#### Returns

[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:46593

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#cost)

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

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#status_code)

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

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleEventsTasksFixedTaskInfo`](SerpGoogleEventsTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#tasks)

#### Source

main.ts:46589

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleEventsTasksFixedResponseInfo`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpGoogleEventsTasksFixedResponseInfo.md#version)

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

main.ts:46597

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

main.ts:46619

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:46612
