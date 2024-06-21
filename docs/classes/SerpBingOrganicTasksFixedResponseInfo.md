**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingOrganicTasksFixedResponseInfo

# Class: SerpBingOrganicTasksFixedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTasksFixedResponseInfo(data)

> **new SerpBingOrganicTasksFixedResponseInfo**(`data`?): [`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md)

#### Returns

[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:57933

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#cost)

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

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#status_code)

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

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`SerpBingOrganicTasksFixedTaskInfo`](SerpBingOrganicTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks)

#### Source

main.ts:57929

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#version)

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

main.ts:57937

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

main.ts:57959

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:57952
