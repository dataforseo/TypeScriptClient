[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTasksFixedResponseInfo

# Class: SerpGoogleLocalFinderTasksFixedResponseInfo

Defined in: main.ts:43668

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTasksFixedResponseInfo()

> **new SerpGoogleLocalFinderTasksFixedResponseInfo**(`data`?): [`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)

Defined in: main.ts:43674

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md)

#### Returns

[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleLocalFinderTasksFixedTaskInfo`](SerpGoogleLocalFinderTasksFixedTaskInfo.md)[]

Defined in: main.ts:43670

array of tasks

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpGoogleLocalFinderTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:43678

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

Defined in: main.ts:43700

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)

Defined in: main.ts:43693

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
