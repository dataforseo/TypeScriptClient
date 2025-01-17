[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTaskGetAdvancedResponseInfo

# Class: SerpGoogleLocalFinderTaskGetAdvancedResponseInfo

Defined in: main.ts:43918

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTaskGetAdvancedResponseInfo()

> **new SerpGoogleLocalFinderTaskGetAdvancedResponseInfo**(`data`?): [`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:43924

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleLocalFinderTaskGetAdvancedTaskInfo`](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:43920

array of tasks

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:43928

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

Defined in: main.ts:43950

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:43943

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
