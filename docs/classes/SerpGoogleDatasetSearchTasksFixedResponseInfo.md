[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTasksFixedResponseInfo

# Class: SerpGoogleDatasetSearchTasksFixedResponseInfo

Defined in: main.ts:57609

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTasksFixedResponseInfo()

> **new SerpGoogleDatasetSearchTasksFixedResponseInfo**(`data`?): [`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)

Defined in: main.ts:57615

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleDatasetSearchTasksFixedTaskInfo`](SerpGoogleDatasetSearchTasksFixedTaskInfo.md)[]

Defined in: main.ts:57611

array of tasks

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:57619

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

Defined in: main.ts:57641

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)

Defined in: main.ts:57634

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
