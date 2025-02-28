[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTaskGetAdvancedResponseInfo

# Class: SerpGoogleJobsTaskGetAdvancedResponseInfo

Defined in: main.ts:54893

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTaskGetAdvancedResponseInfo()

> **new SerpGoogleJobsTaskGetAdvancedResponseInfo**(`data`?): [`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:54899

#### Parameters

##### data?

[`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleJobsTaskGetAdvancedTaskInfo`](SerpGoogleJobsTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:54895

array of tasks

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:54903

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

Defined in: main.ts:54925

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:54918

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
