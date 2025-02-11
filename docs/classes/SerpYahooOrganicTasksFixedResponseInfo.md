[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTasksFixedResponseInfo

# Class: SerpYahooOrganicTasksFixedResponseInfo

Defined in: main.ts:76025

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTasksFixedResponseInfo()

> **new SerpYahooOrganicTasksFixedResponseInfo**(`data`?): [`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

Defined in: main.ts:76031

#### Parameters

##### data?

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md)

#### Returns

[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYahooOrganicTasksFixedTaskInfo`](SerpYahooOrganicTasksFixedTaskInfo.md)[]

Defined in: main.ts:76027

array of tasks

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:76035

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:76057

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

Defined in: main.ts:76050

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
