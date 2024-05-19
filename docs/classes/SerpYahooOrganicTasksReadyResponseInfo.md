**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooOrganicTasksReadyResponseInfo

# Class: SerpYahooOrganicTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTasksReadyResponseInfo(data)

> **new SerpYahooOrganicTasksReadyResponseInfo**(`data`?): [`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md)

#### Returns

[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:66926

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23401

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23394

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23397

***

### tasks?

> **`optional`** **tasks**: [`SerpYahooOrganicTasksReadyTaskInfo`](SerpYahooOrganicTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:66922

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23403

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23405

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23399

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23391

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

main.ts:66930

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

main.ts:66952

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:66945
