[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTasksFixedResponseInfo

# Class: SerpGoogleSearchByImageTasksFixedResponseInfo

Defined in: main.ts:53351

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTasksFixedResponseInfo()

> **new SerpGoogleSearchByImageTasksFixedResponseInfo**(`data`?): [`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)

Defined in: main.ts:53357

#### Parameters

##### data?

[`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md)

#### Returns

[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleSearchByImageTasksFixedTaskInfo`](SerpGoogleSearchByImageTasksFixedTaskInfo.md)[]

Defined in: main.ts:53353

array of tasks

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:53361

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

Defined in: main.ts:53383

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)

Defined in: main.ts:53376

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
