**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleMapsTasksFixedResponseInfo

# Class: SerpGoogleMapsTasksFixedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTasksFixedResponseInfo(data)

> **new SerpGoogleMapsTasksFixedResponseInfo**(`data`?): [`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md)

#### Returns

[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:38928

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#cost)

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

[`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#status_code)

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

[`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23025

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleMapsTasksFixedTaskInfo`](SerpGoogleMapsTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#tasks)

#### Source

main.ts:38924

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23031

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23033

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23027

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleMapsTasksFixedResponseInfo`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpGoogleMapsTasksFixedResponseInfo.md#version)

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

main.ts:38932

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

main.ts:38954

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:38947
