[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTasksReadyTaskInfo

# Class: SerpGoogleLocalFinderTasksReadyTaskInfo

Defined in: main.ts:43401

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTasksReadyTaskInfo()

> **new SerpGoogleLocalFinderTasksReadyTaskInfo**(`data`?): [`SerpGoogleLocalFinderTasksReadyTaskInfo`](SerpGoogleLocalFinderTasksReadyTaskInfo.md)

Defined in: main.ts:43407

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md)

#### Returns

[`SerpGoogleLocalFinderTasksReadyTaskInfo`](SerpGoogleLocalFinderTasksReadyTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25309

total tasks cost, USD

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[`cost`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#cost)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`cost`](BaseResponseTaskInfo.md#cost)

***

### data?

> `optional` **data**: `object`

Defined in: main.ts:25315

contains the same parameters that you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[`data`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#data)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`data`](BaseResponseTaskInfo.md#data-1)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:25298

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[`id`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

***

### path?

> `optional` **path**: `string`[]

Defined in: main.ts:25313

URL path

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[`path`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

***

### result?

> `optional` **result**: [`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)[]

Defined in: main.ts:43403

array of results

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[`result`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#result)

***

### result\_count?

> `optional` **result\_count**: `number`

Defined in: main.ts:25311

number of elements in the result array

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[`result_count`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#result_count)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`result_count`](BaseResponseTaskInfo.md#result_count)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25302

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[`status_code`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#status_code)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_code`](BaseResponseTaskInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25305

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[`status_message`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25307

execution time, seconds

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[`time`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#time)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`time`](BaseResponseTaskInfo.md#time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:43411

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`init`](BaseResponseTaskInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:43433

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`toJSON`](BaseResponseTaskInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTasksReadyTaskInfo`](SerpGoogleLocalFinderTasksReadyTaskInfo.md)

Defined in: main.ts:43426

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderTasksReadyTaskInfo`](SerpGoogleLocalFinderTasksReadyTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)
